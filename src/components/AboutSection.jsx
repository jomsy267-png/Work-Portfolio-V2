import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const PANEL_END       = [1.0, 0.72, 0.44, 0.20, 0.44]
const EXIT_WIPE_START = 0.60
const EXIT_STAGGER    = [0.20, 0.44, 0.72, 1.0, 0.44]
const EXIT_PHASE      = 0.25

const ABOUT_TEXT = 'I create brand identities and visual systems with an emphasis on clarity, composition, and quiet confidence. Outside of design, riding motorcycles remains one of the few things that clears the noise and keeps me grounded.'

// Emitter model: each square has a `delay` in global-clock units. Before its
// delay it sits below the viewport (invisible). After, it rises, exits top, and
// loops — creating a continuous stream. Wrap happens off-screen. `sp` controls
// rise speed; `ms` the mouse parallax amplitude.
const SQUARES = [
  { size: 12, bx: 7,  delay: 0.00, sp: 1.0, ms: 0.030 },
  { size: 8,  bx: 21, delay: 0.12, sp: 1.3, ms: 0.050 },
  { size: 18, bx: 34, delay: 0.24, sp: 0.8, ms: 0.020 },
  { size: 10, bx: 47, delay: 0.36, sp: 1.4, ms: 0.055 },
  { size: 14, bx: 59, delay: 0.48, sp: 1.1, ms: 0.038 },
  { size: 8,  bx: 72, delay: 0.60, sp: 1.5, ms: 0.028 },
  { size: 20, bx: 84, delay: 0.72, sp: 0.9, ms: 0.022 },
  { size: 10, bx: 93, delay: 0.84, sp: 1.2, ms: 0.048 },
  { size: 12, bx: 14, delay: 0.96, sp: 1.3, ms: 0.040 },
  { size: 16, bx: 27, delay: 1.08, sp: 1.0, ms: 0.032 },
  { size: 8,  bx: 41, delay: 1.20, sp: 1.4, ms: 0.058 },
  { size: 14, bx: 54, delay: 1.32, sp: 0.9, ms: 0.024 },
  { size: 10, bx: 67, delay: 1.44, sp: 1.2, ms: 0.046 },
  { size: 18, bx: 77, delay: 1.56, sp: 1.0, ms: 0.036 },
  { size: 12, bx: 89, delay: 1.68, sp: 1.3, ms: 0.030 },
  { size: 8,  bx: 4,  delay: 1.80, sp: 1.5, ms: 0.052 },
  { size: 16, bx: 51, delay: 1.92, sp: 1.0, ms: 0.028 },
  { size: 10, bx: 37, delay: 2.04, sp: 1.3, ms: 0.042 },
  { size: 14, bx: 62, delay: 2.16, sp: 1.1, ms: 0.034 },
  { size: 8,  bx: 18, delay: 2.28, sp: 1.4, ms: 0.050 },
  { size: 20, bx: 80, delay: 2.40, sp: 0.9, ms: 0.024 },
  { size: 10, bx: 30, delay: 2.52, sp: 1.2, ms: 0.044 },
  { size: 12, bx: 45, delay: 2.64, sp: 1.1, ms: 0.036 },
  { size: 8,  bx: 95, delay: 2.76, sp: 1.4, ms: 0.050 },
  { size: 16, bx: 10, delay: 2.88, sp: 1.0, ms: 0.030 },
  { size: 10, bx: 65, delay: 3.00, sp: 1.3, ms: 0.048 },
]

// Global clock: cp [0..1] maps to SPAWN_PERIOD units. Delays stagger across this
// range so squares emerge one-by-one across the whole about-section scroll.
const CYCLE_END     = 0.55
const SPAWN_PERIOD  = 3.6
const Y_START       = 140   // below viewport
const Y_END         = -30   // above viewport
const Y_TRAVEL      = Y_START - Y_END
const EASE_POWER    = 2.2   // ease-out exponent → damped deceleration

function AboutPanel({ idx, entryProgress, progress }) {
  const exitEnd = EXIT_WIPE_START + EXIT_STAGGER[idx] * EXIT_PHASE

  const rawScaleY = useTransform(entryProgress, [0, PANEL_END[idx]], [0, 1])
  const scaleY    = useSpring(rawScaleY, { stiffness: 150, damping: 22, mass: 0.5 })

  const rawY = useTransform(progress, (p) => {
    if (p <= EXIT_WIPE_START) return 0
    const t = Math.min(1, (p - EXIT_WIPE_START) / (exitEnd - EXIT_WIPE_START))
    return -window.innerHeight * t
  })
  const y = useSpring(rawY, { stiffness: 150, damping: 22, mass: 0.5 })

  return (
    <motion.div
      style={{ flex: 1, height: '100%', scaleY, y, transformOrigin: 'bottom center', background: 'var(--light)' }}
    />
  )
}

function WordSpan({ word, index, total, progress }) {
  const start   = (index / total) * 0.78
  const end     = Math.min(((index + 2.5) / total) * 0.78, 1)
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return <motion.span className="rv-word" style={{ opacity }}>{word} </motion.span>
}

export default function AboutSection({ containerRef: externalContainerRef }) {
  const localContainerRef = useRef(null)
  const containerRef = externalContainerRef ?? localContainerRef
  const sectionRef   = useRef(null)
  const mouseRef     = useRef({ x: 0.5, y: 0.5 })
  const sqRefs       = useRef([])
  const sqState      = useRef(SQUARES.map(sq => ({ cx: sq.bx, cy: Y_START })))
  const dimsRef      = useRef({ w: 0, h: 0 })
  const rafRef       = useRef(null)

  // Main pin scroll: p=0 when pinned, p=1 when container bottom = viewport bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Entry: starts when work section bottom (= About container top) hits 30% from viewport top
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ['start 30%', 'start start'],
  })

  const labelOpacity = useTransform(scrollYProgress, [0.02, 0.12], [0, 1])
  const ctaOpacity   = useTransform(scrollYProgress, [0.35, 0.50], [0, 1])

  // Word reveal: 0→1 sub-range of pin scroll drives the stagger
  const wordProgress = useTransform(scrollYProgress, [0.04, 0.40], [0, 1])

  // Body scrolls up during exit (same pattern as Skillset)
  const rawBodyY = useTransform(scrollYProgress, (p) => {
    if (p <= EXIT_WIPE_START) return 0
    const sec = sectionRef.current
    if (!sec) return 0
    const t = Math.max(0, Math.min(1, (p - EXIT_WIPE_START) / ((1.0 - EXIT_WIPE_START) * 0.40)))
    return -sec.offsetHeight * t
  })
  const bodyY = useSpring(rawBodyY, { stiffness: 100, damping: 28, mass: 0.4 })

  // Damped scroll for squares — removes scroll jitter, smooths motion
  const sqProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 })

  // Sync section dims for squares RAF
  useEffect(() => {
    const sync = () => {
      const el = sectionRef.current
      if (el) dimsRef.current = { w: el.offsetWidth, h: el.offsetHeight }
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      mouseRef.current = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  // RAF loop — emitter model. Each square waits for its delay (below viewport),
  // then rises with ease-out deceleration, loops off-screen, keeps streaming.
  useEffect(() => {
    const tick = () => {
      const prog     = sqProgress.get()
      const cp       = Math.max(0, Math.min(prog, CYCLE_END)) / CYCLE_END
      const clock    = cp * SPAWN_PERIOD
      const mx       = mouseRef.current.x
      const my       = mouseRef.current.y
      const { w, h } = dimsRef.current

      SQUARES.forEach((sq, i) => {
        const el = sqRefs.current[i]
        if (!el || !w || !h) return
        const st = sqState.current[i]

        const localClock = clock - sq.delay
        let t = 0
        if (localClock > 0) {
          const cycleT = ((localClock * sq.sp) % 1 + 1) % 1
          t = 1 - Math.pow(1 - cycleT, EASE_POWER)  // ease-out damping
        }

        const tx = sq.bx + (mx - 0.5) * sq.ms * 100
        const ty = Y_START - t * Y_TRAVEL + (my - 0.5) * sq.ms * 100
        st.cx += (tx - st.cx) * 0.12
        st.cy = ty
        el.style.transform = `translate(${st.cx / 100 * w}px, ${st.cy / 100 * h}px) translate(-50%, -50%)`
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [sqProgress])

  const words = ABOUT_TEXT.split(' ')

  return (
    <div ref={containerRef} className="about-pin z-layer-2" id="about" style={{ marginTop: '-100vh' }}>
      <section ref={sectionRef} className="about-sticky">

        {/* Panel wipe — entry via pre-pin rise, exit via pin scroll */}
        <div className="ab-panels" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => (
            <AboutPanel key={i} idx={i} entryProgress={entryProgress} progress={scrollYProgress} />
          ))}
        </div>

        {/* Floating squares — ride up with bodyY during exit */}
        <motion.div className="ab-particles" aria-hidden="true" style={{ y: bodyY }}>
          {SQUARES.map((sq, i) => (
            <div
              key={i}
              ref={el => { sqRefs.current[i] = el }}
              className="ab-sq"
              style={{ width: sq.size, height: sq.size }}
            />
          ))}
        </motion.div>

        {/* Content — scrolls up with exit panels */}
        <motion.div className="ab-content" style={{ y: bodyY }}>
          <div className="sec-layout">
            <motion.div className="ab-label" style={{ opacity: labelOpacity }}>
              <span className="label" style={{ color: 'var(--muted)' }}>\ About</span>
            </motion.div>
            <div className="about-body">
              <p className="word-reveal">
                {words.map((word, i) => (
                  <WordSpan key={i} word={word} index={i} total={words.length} progress={wordProgress} />
                ))}
              </p>
              <motion.div className="about-cta-row" style={{ opacity: ctaOpacity }}>
                <a href="https://jomsy267.myportfolio.com" target="_blank" rel="noreferrer" className="about-cta">
                  <span className="cta-slash">\</span> Read About Me
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </section>

      <style>{`
        /* ── PIN CONTAINER ── */
        .about-pin { min-height: 400vh; }

        /* ── STICKY SECTION ── */
        .about-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        /* ── PANELS ── */
        .ab-panels {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          overflow: hidden;
          pointer-events: none;
        }

        /* ── PARTICLES — above content so mix-blend-mode composites against text ── */
        .ab-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 15;
        }
        /* Mid-gray fill with no blend mode — contrasts both the light panel
           (appears dark on white) and the dark text (appears light on black). */
        .ab-sq {
          position: absolute;
          left: 0;
          top: 0;
          background: #888;
          will-change: transform;
        }

        /* ── CONTENT WRAPPER — centred in 100vh ── */
        .ab-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          align-items: center;
          background: transparent;
          color: var(--dark);
        }
        .ab-content .sec-layout { width: 100%; }

        /* Label — static inside pinned section (no nested sticky) */
        .ab-label {
          padding-top: 4px;
          align-self: start;
        }

        /* ── WORD REVEAL ── */
        .word-reveal {
          font-family: var(--fd);
          font-size: clamp(20px, 2.6vw, 36px);
          font-weight: 500;
          letter-spacing: -.025em;
          line-height: 1.3;
          color: var(--dark);
          text-align: right;
          max-width: 680px;
        }
        .rv-word { display: inline; }

        /* ── ABOUT BODY ── */
        .about-body {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 36px;
        }
        .about-cta-row { display: flex; justify-content: flex-end; }

        /* ── CTA — light-theme colours (panels are var(--light)) ── */
        .about-cta {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .04em;
          text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 4px;
          color: #444;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          padding-bottom: 2px;
          transition: color .3s, border-color .3s;
        }
        .about-cta:hover { color: var(--dark); border-bottom-color: var(--dark); }
        .ab-content .cta-slash { color: rgba(0, 0, 0, 0.3); margin-right: 2px; }
        .about-cta:hover .cta-slash { color: rgba(0, 0, 0, 0.6); }

        /* ── RESPONSIVE ── */
        @media (max-width: 809px) {
          .about-pin { min-height: 300vh; }
          .ab-content { align-items: flex-start; padding-top: 80px; }
        }
      `}</style>
    </div>
  )
}

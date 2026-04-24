import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const SKILLS = [
  { num: '01', title: 'Brand\nIdentity' },
  { num: '02', title: 'Motion\nDesign' },
  { num: '03', title: 'Art\nDirection' },
  { num: '04', title: 'Digital\nExperience' },
]

const SQUARES = [
  { size: 6,  bx: 7,  by: 14, sp: 0.40, ms: 0.030 },
  { size: 4,  bx: 21, by: 63, sp: 0.70, ms: 0.050 },
  { size: 9,  bx: 34, by: 28, sp: 0.28, ms: 0.020 },
  { size: 5,  bx: 47, by: 76, sp: 0.80, ms: 0.055 },
  { size: 7,  bx: 59, by: 19, sp: 0.52, ms: 0.038 },
  { size: 4,  bx: 72, by: 54, sp: 0.90, ms: 0.028 },
  { size: 10, bx: 84, by: 34, sp: 0.62, ms: 0.022 },
  { size: 5,  bx: 93, by: 81, sp: 0.42, ms: 0.048 },
  { size: 6,  bx: 14, by: 86, sp: 0.68, ms: 0.040 },
  { size: 8,  bx: 27, by: 44, sp: 0.50, ms: 0.032 },
  { size: 4,  bx: 41, by: 9,  sp: 0.78, ms: 0.058 },
  { size: 7,  bx: 54, by: 91, sp: 0.32, ms: 0.024 },
  { size: 5,  bx: 67, by: 66, sp: 0.60, ms: 0.046 },
  { size: 9,  bx: 77, by: 11, sp: 0.44, ms: 0.036 },
  { size: 6,  bx: 89, by: 49, sp: 0.72, ms: 0.030 },
  { size: 4,  bx: 4,  by: 39, sp: 0.88, ms: 0.052 },
  { size: 8,  bx: 51, by: 51, sp: 0.56, ms: 0.028 },
  { size: 5,  bx: 37, by: 87, sp: 0.64, ms: 0.042 },
]

const PANEL_END      = [1.0, 0.84, 0.64, 0.24, 0.64]  // entry stagger speeds (entryProgress 0→1)
const EXIT_START     = 0.52   // cards stop — earlier to widen buffer before exit
const EXIT_WIPE_START = 0.60  // tight gap after cards stop — overlap fixed by bodyY speed
const EXIT_STAGGER   = [0.56, 0.70, 0.76, 1.0, 0.76]  // closer exit timing so outer panels do not wipe off too early
const EXIT_PHASE     = 0.40   // exit fills remaining pin → last panel finishes at prog=1.0
const EXIT_LONGEST_TRAVEL = Math.max(...EXIT_STAGGER)
const EXIT_RELEASE_WINDOW = EXIT_PHASE * 0.48

function clamp01(n) {
  return Math.max(0, Math.min(1, n))
}

function PinPanel({ idx, entryProgress, progress, disableExit = false }) {
  // Entry: spring stiff enough to track fast scroll, soft enough to feel damped
  const rawScaleY = useTransform(entryProgress, [0, PANEL_END[idx]], [0, 1])
  const scaleY    = useSpring(
    rawScaleY,
    idx === 3
      ? { stiffness: 260, damping: 28, mass: 0.4 }
      : { stiffness: 150, damping: 22, mass: 0.5 }
  )

  // Exit: panels stay stuck to the bottom edge until their release point.
  // Their finish times still follow EXIT_STAGGER, so the total wipe shape
  // remains keyed to the longest-travelling panel without the trailing panel
  // floating above the viewport bottom before it actually releases.
  const rawY = useTransform(progress, (p) => {
    if (disableExit) return 0
    const exitEnd = EXIT_WIPE_START + EXIT_PHASE * (EXIT_STAGGER[idx] / EXIT_LONGEST_TRAVEL)
    const releaseStart = exitEnd - EXIT_RELEASE_WINDOW
    if (p <= releaseStart) return 0
    const panelT = clamp01((p - releaseStart) / EXIT_RELEASE_WINDOW)
    return -window.innerHeight * panelT
  })
  const y = useSpring(rawY, { stiffness: 150, damping: 22, mass: 0.5 })

  return (
    <motion.div
      style={{
        flex: 1,
        height: '100dvh',
        alignSelf: 'flex-end',
        scaleY,
        y,
        transformOrigin: 'bottom center',
        background: 'var(--light)',
      }}
    />
  )
}

export default function Skillset({ containerRef: externalContainerRef, disableExit = false }) {
  const localContainerRef = useRef(null)
  const containerRef = externalContainerRef ?? localContainerRef
  const sectionRef   = useRef(null)
  const gridRef      = useRef(null)
  const mouseRef     = useRef({ x: 0.5, y: 0.5 })
  const sqRefs       = useRef([])
  const sqState      = useRef(SQUARES.map(sq => ({ cx: sq.bx, cy: sq.by })))
  const dimsRef      = useRef({ w: 0, h: 0 })
  const rafRef       = useRef(null)
  const [isStackedMobile, setIsStackedMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 809px)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const mq = window.matchMedia('(max-width: 809px)')
    const sync = () => setIsStackedMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Main pin scroll: 0 when container top = viewport top, 1 when container bottom = viewport bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Entry scroll: starts when Skillset container top (= work section bottom) hits 30% from
  // viewport top, ends when the section pins. Spring tail settles through the first few vh of pin.
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ['start 30%', 'start start'],
  })

  // Label fades in as soon as section pins (panels done by entryProgress)
  const labelOpacity = useTransform(scrollYProgress, [0.02, 0.12], [0, 1])

  // Cards start rising shortly after pin — wider travel range, slower reveal
  const rawCardsY = useTransform(scrollYProgress, (p) => {
    const revealEnd = isStackedMobile ? 0.68 : EXIT_START
    const t = Math.max(0, Math.min(1, (p - 0.08) / (revealEnd - 0.08)))
    const grid = gridRef.current
    const sec  = sectionRef.current
    if (!grid || !sec) return 0
    const padV  = 160
    const cardSpan = isStackedMobile ? grid.offsetWidth : grid.offsetWidth * 0.5
    const secH  = sec.offsetHeight

    const yStart = secH - padV                    // SK1 top at viewport bottom
    const yEnd   = isStackedMobile
      ? secH * 0.12 - padV - 3.05 * cardSpan
      : secH * 0.25 - padV - 3.5 * cardSpan
    return yStart + (yEnd - yStart) * t
  })
  const cardsY = useSpring(rawCardsY, { stiffness: 55, damping: 22, mass: 0.8 })

  // Body completes its full travel in the first 40% of the exit phase, then plateaus.
  // This ensures SK4 is out of sight by the 50% mark even accounting for spring lag.
  const rawBodyY = useTransform(scrollYProgress, (p) => {
    if (disableExit) return 0
    const exitStart = isStackedMobile ? 0.78 : EXIT_WIPE_START
    if (p <= exitStart) return 0
    const sec = sectionRef.current
    if (!sec) return 0
    const t = Math.max(0, Math.min(1, (p - exitStart) / ((1.0 - exitStart) * 0.40)))
    return -sec.offsetHeight * t
  })
  const bodyY = useSpring(rawBodyY, { stiffness: 100, damping: 28, mass: 0.4 })

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

  // RAF loop — squares lerp toward mouse + rise on scroll
  useEffect(() => {
    const tick = () => {
      const prog      = scrollYProgress.get()
      const mx        = mouseRef.current.x
      const my        = mouseRef.current.y
      const { w, h }  = dimsRef.current

      SQUARES.forEach((sq, i) => {
        const el = sqRefs.current[i]
        if (!el || !w || !h) return
        const st = sqState.current[i]
        const tx = sq.bx + (mx - 0.5) * sq.ms * 100
        const ty = sq.by + (my - 0.5) * sq.ms * 100 - prog * sq.sp * 35
        st.cx += (tx - st.cx) * 0.04
        st.cy += (ty - st.cy) * 0.04
        el.style.transform = `translate(${st.cx / 100 * w}px, ${st.cy / 100 * h}px) translate(-50%, -50%)`
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="skillset-pin z-layer-5" id="skillset">
      <section ref={sectionRef} className="skillset">

        {/* Panel wipe — entry driven by pre-pin rise, exit driven by pin scroll */}
        <div className="sk-panels" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => (
            <PinPanel key={i} idx={i} entryProgress={entryProgress} progress={scrollYProgress} disableExit={disableExit} />
          ))}
        </div>

        {/* Floating squares */}
        <div className="sk-particles" aria-hidden="true">
          {SQUARES.map((sq, i) => (
            <div
              key={i}
              ref={el => { sqRefs.current[i] = el }}
              className="sk-sq"
              style={{ width: sq.size, height: sq.size }}
            />
          ))}
        </div>

        {/* Content — body scrolls up during exit, taking label + cards with it */}
        <motion.div className="sk-body relative z-10" style={{ y: bodyY }}>

          <motion.div className="sk-left" style={{ opacity: labelOpacity }}>
            <span className="label" style={{ color: 'var(--dark)' }}>\ My Skillset</span>
          </motion.div>

          <div className="sk-right">
            <motion.div style={{ y: cardsY }}>
              <div ref={gridRef} className="sk-grid">
                <div className="sk-card">
                  <span className="sk-num">{SKILLS[0].num}</span>
                  <h2 className="sk-title">{SKILLS[0].title}</h2>
                </div>
                <div className="sk-empty" aria-hidden="true" />

                <div className="sk-empty" aria-hidden="true" />
                <div className="sk-card">
                  <span className="sk-num">{SKILLS[1].num}</span>
                  <h2 className="sk-title">{SKILLS[1].title}</h2>
                </div>

                <div className="sk-card">
                  <span className="sk-num">{SKILLS[2].num}</span>
                  <h2 className="sk-title">{SKILLS[2].title}</h2>
                </div>
                <div className="sk-empty" aria-hidden="true" />

                <div className="sk-empty" aria-hidden="true" />
                <div className="sk-card">
                  <span className="sk-num">{SKILLS[3].num}</span>
                  <h2 className="sk-title">{SKILLS[3].title}</h2>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      <style>{`
        /* ── PIN CONTAINER — tightened so the exit window equals the Whispers
             reveal area underneath (no dead scroll after panels finish). ── */
        .skillset-pin {
          min-height: 500vh;
        }

        /* ── STICKY SECTION ── */
        /* No background — panels (var(--light)) cover during pin; once they
           translate up on exit, the transparent container lets the lower-z
           Whispers section show through. */
        .skillset {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          padding: 80px 0 160px;
          background: transparent;
        }

        /* ── INLINE PANEL WIPE ── */
        .sk-panels {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          overflow: hidden;
          pointer-events: none;
        }

        /* ── PARTICLES ── */
        .sk-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .sk-sq {
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.05);
          will-change: transform;
        }

        /* ── TWO-PANEL BODY ── */
        .skillset .sk-body.relative.z-10 {
          background: transparent !important;
        }
        .sk-body {
          display: grid;
          grid-template-columns: minmax(120px, 0.16fr) minmax(0, 1.84fr);
          align-items: start;
          padding-left: var(--pad);
          height: 100%;
        }

        /* ── LEFT — label stays fixed (section is the sticky anchor) ── */
        .sk-left {
          padding-top: 4px;
          padding-right: var(--gap);
        }

        /* ── RIGHT — clips card grid as it translates ── */
        .sk-right {
          height: 100%;
          padding-right: var(--pad);
          display: flex;
          justify-content: flex-end;
        }

        /* ── GRID ── */
        .sk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: min(calc(100vw - (var(--pad) * 2)), clamp(950px, 90.6vw, 1503px));
          margin: -1px;
        }

        /* ── EMPTY CELL ── */
        .sk-empty {
          aspect-ratio: 1;
          background: transparent;
        }

        /* ── CARD ── */
        .sk-card {
          border: 1px solid rgba(0, 0, 0, 0.08);
          aspect-ratio: 1;
          padding: 22px 26px;
          position: relative;
          overflow: hidden;
          margin: -0.5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: default;
          background: transparent;
          transition: background 0.45s ease;
        }
        .sk-card:hover { background: rgba(0, 0, 0, 0.02); }
        .sk-card:hover .sk-title { transform: translateY(-4px); }

        /* ── INDEX ── */
        .sk-num {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: var(--fm);
          font-size: 13px;
          color: rgba(0, 0, 0, 0.25);
          letter-spacing: 0.045em;
        }

        /* ── TITLE ── */
        .sk-title {
          font-family: var(--fd);
          font-size: clamp(26px, 3.87vw, 61px);
          font-weight: 600;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          line-height: 0.95;
          white-space: pre-line;
          color: var(--dark);
          text-align: left;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1279px) {
          .skillset-pin { min-height: 240vh; }
          .sk-body {
            grid-template-columns: minmax(0, 0.38fr) minmax(0, 1.62fr);
          }
          .sk-grid {
            width: min(100%, clamp(722px, 81.1vw, 989px));
          }
          .sk-card,
          .sk-empty {
            min-width: 0;
          }
          .sk-card {
            padding: 25px 28px;
          }
          .sk-num {
            top: 23px;
            left: 23px;
            font-size: 13px;
          }
          .sk-title {
            font-size: clamp(25px, 3.53vw, 47px);
          }
        }
        @media (max-width: 809px) {
          .skillset-pin { min-height: 300vh; }
          .sk-body { grid-template-columns: 1fr; padding-left: var(--pad); }
          .sk-left  { margin-bottom: 24px; }
          .sk-right { padding-right: var(--pad); }
          .sk-grid {
            width: min(100%, clamp(309px, 63.5vw, 436px));
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .sk-empty {
            display: none;
          }
          .sk-card {
            aspect-ratio: 1;
            padding: 30px 33px;
          }
          .sk-num {
            top: 25px;
            left: 25px;
            font-size: 13px;
          }
          .sk-title { font-size: clamp(22px, 6.22vw, 37px); }
        }
      `}</style>
    </div>
  )
}

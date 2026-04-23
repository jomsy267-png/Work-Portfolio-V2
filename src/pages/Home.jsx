import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import AboutSection from '../components/AboutSection'
import Skillset from '../components/Skillset'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

import { Application } from '@splinetool/runtime'

/* ---- Reveal wrapper ---- */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

/* ---- Featured work rows ---- */
const featuredRows = [
  [projects[0], projects[1]],
  [projects[2], projects[3]],
  [projects[4], projects[5]],
]

/* ---- Whispers data ---- */
const whispers = [
  { date: 'Mar 12, 2024', title: 'Designing for Resonance', excerpt: 'How to create brand experiences that stick — the intersection of strategy, emotion, and visual craft.' },
  { date: 'Feb 28, 2024', title: 'The Future of Brand Identity', excerpt: 'AI-generated assets, dynamic logos, and the evolution of brand systems in a digital-first world.' },
  { date: 'Jan 15, 2024', title: 'Craft Over Trend', excerpt: 'Why lasting brands are built on principles, not aesthetics — and how to tell the difference.' },
]

/* ---- WorkCard ---- */
function WorkCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="work-card" data-cursor>
      <div className="work-card-image img-wrap">
        <img src={project.hero} alt={project.title} loading="lazy" />
      </div>
      <div className="work-card-frost">
        <div className="work-card-title-area">
          <span className="wc-slash">\</span>
          <span className="wc-name">{project.title}</span>
        </div>
        <div className="work-card-cat-area">
          <span className="wc-slash">\</span>
          <span className="wc-cat">{project.categoryShort}</span>
        </div>
      </div>
    </Link>
  )
}

// Detect capable device function removed since Spline was decommissioned.

function clamp01(n) {
  return Math.max(0, Math.min(1, n))
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function easeInCubic(t) {
  return t * t * t
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

export default function Home() {
  const splineCanvasRef = useRef(null)
  const aboutRef = useRef(null)
  const clientsRef = useRef(null)

  useEffect(() => {
    const canvas = splineCanvasRef.current
    if (!canvas) return
    const app = new Application(canvas)
    app.load('https://prod.spline.design/6uUuJgGqnS2jicVX/scene.splinecode')
    return () => app.dispose()
  }, [])

  const postAboutRevealRef = useRef(null)
  const revealRef = useRef(null)
  const workPinRef = useRef(null)
  const workRef = useRef(null)
  const skillsetRef = useRef(null)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [isResponsiveLock, setIsResponsiveLock] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 1279px)').matches
  })
  const [workPin, setWorkPin] = useState({
    wrapHeight: null,
  })
  const { scrollY, scrollYProgress: revealProgress } = useScroll({
    target: revealRef,
    offset: ['start end', 'start start'],
  })
  const { scrollYProgress: postAboutRevealProgress } = useScroll({
    target: postAboutRevealRef,
    offset: ['start end', 'start start'],
  })
  const { scrollYProgress: skillsetEntryProgress } = useScroll({
    target: skillsetRef,
    offset: ['start end', 'start start'],
  })
  const postAboutRevealOpacity = useTransform(postAboutRevealProgress, [0.74, 0.92], [0, 1])
  const postAboutRevealYOffset = useTransform(postAboutRevealProgress, [0.74, 0.92], [34, 0])
  const postAboutReleaseEaseRaw = useTransform(postAboutRevealProgress, (p) => {
    if (isScrollingUp) return 0
    const t = clamp01((p - 0.62) / 0.22)
    return 42 * (1 - easeInCubic(t))
  })
  const postAboutRelockEaseRaw = useTransform(postAboutRevealProgress, (p) => {
    if (!isScrollingUp) return 0
    const t = clamp01((p - 0.42) / 0.44)
    return 152 * (1 - easeOutQuart(t))
  })
  const postAboutReverseSinkRaw = useTransform(postAboutRevealProgress, (p) => {
    if (!isScrollingUp) return 0
    const t = clamp01((p - 0.8) / 0.18)
    return 200 * easeInOutCubic(t)
  })
  const postAboutContentY = useSpring(
    useTransform(
      [postAboutRevealYOffset, postAboutReleaseEaseRaw, postAboutRelockEaseRaw, postAboutReverseSinkRaw],
      ([revealY, releaseEase, relockEase, reverseSink]) => revealY + releaseEase + relockEase + reverseSink
    ),
    { stiffness: 46, damping: 24, mass: 1.18 }
  )
  const revealOpacity = useTransform(revealProgress, [0.74, 0.92], [0, 1])
  const revealYRaw    = useTransform(revealProgress, [0.74, 0.92], [34, 0])
  const revealY       = useSpring(revealYRaw, { stiffness: 90, damping: 24, mass: 0.5 })
  const workSlowdownDistance = isResponsiveLock ? 0 : 132
  const workSlowdownYRaw = useTransform(skillsetEntryProgress, (p) => {
    const t = clamp01((p - 0.05) / 0.28)
    return workSlowdownDistance * easeOutQuart(t)
  })
  const workSlowdownY = useSpring(workSlowdownYRaw, {
    stiffness: 88,
    damping: 30,
    mass: 0.78,
  })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    if (prev == null || latest === prev) return
    setIsScrollingUp(latest < prev)
  })

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1279px)')
    const sync = () => setIsResponsiveLock(mq.matches)

    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useLayoutEffect(() => {
    const wrapper = workPinRef.current
    const work = workRef.current
    if (!wrapper || !work) return undefined

    let raf = null
    const measure = () => {
      const workHeight = work.offsetHeight
      const wrapHeight = workHeight

      setWorkPin({
        wrapHeight,
      })
    }

    const requestMeasure = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', requestMeasure, { passive: true })
    window.addEventListener('resize', requestMeasure)
    const ro = new ResizeObserver(requestMeasure)
    ro.observe(work)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', requestMeasure)
      window.removeEventListener('resize', requestMeasure)
      ro.disconnect()
    }
  }, [])

  return (
    <>

      {/* ─── HERO STICKY WRAP ─────────────────────────────────────────────
          200vh wrapper: Hero sticks for exactly 100vh of scroll, then
          releases. About pulls up with marginTop:-100vh so no empty space. */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '200vh' }}>
        <section className="hero sticky-section" id="main-content">
          <motion.div
            className="hero-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <video autoPlay loop muted playsInline>
              <source src="https://res.cloudinary.com/workbyw/video/upload/v1741537245/W_Showreel_cdqxat.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            className="hero-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
          />
          <div className="hero-glass-sim" />
          <div className="hero-spline">
            <canvas ref={splineCanvasRef} />
          </div>
          <Navbar heroMode />
          <div className="hero-tagline">
            {['VISUAL DESIGNS', 'THAT TELL A STORY'].map((line, i) => (
              <div key={i} className="hero-tagline-line">
                <motion.span
                  className="hero-tagline-inner"
                  initial={{ y: '108%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.55 + i * 0.14 }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <AboutSection containerRef={aboutRef} disableExit={isResponsiveLock} />

      <div
        ref={postAboutRevealRef}
        className="post-about-reveal-wrap"
        style={{
          marginTop: isResponsiveLock ? 0 : '-220vh',
          minHeight: isResponsiveLock ? '220vh' : '380vh',
        }}
      >
        <motion.div
          className="post-about-reveal-content"
          style={{
            opacity: isResponsiveLock ? 1 : postAboutRevealOpacity,
            y: isResponsiveLock ? 0 : postAboutContentY,
          }}
        >
          {/* ─── CLIENTS — revealed below About's exit wipe ─────────────── */}
          <section ref={clientsRef} className="clients z-layer-3">
            <div className="sec-layout relative z-10">
              <p className="label sec-label">\ Selected Clients</p>
              <div className="clients-list">
                {['APEGA', 'Ballet Edmonton', 'Odvod Media Inc.', 'Edmonton Community Foundation', 'CEA', 'University of Alberta', 'Runway Footwear', 'Odd. Brewing Company', 'Page The Cleaners', 'Edify'].map((c, i, arr) => (
                  <span key={c}>{c}{i < arr.length - 1 && <span className="dot-sep"> · </span>}</span>
                ))}
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* ─── WORK ──────────────────────────────────────────────────
             Work scrolls normally until its bottom composition reaches the viewport,
             then holds in place before Skillset wipes over it. */}
          <div
            ref={workPinRef}
            className="work-pin-wrap work-after-clients"
          >
            <div
              style={{ minHeight: isResponsiveLock ? undefined : workPin.wrapHeight ? `${workPin.wrapHeight}px` : undefined }}
            >
            <motion.section
              ref={workRef}
              className="work-section work-sticky"
              id="work"
              style={{ y: workSlowdownY }}
            >
              <div className="sec-layout work-sec">
                <div className="sec-label">
                  <span className="label">\ Featured Work</span>
                </div>
                <div className="work-body">
                  {featuredRows.map((row, ri) => (
                    <Reveal key={ri} className="work-row" delay={ri * 0.08}>
                      {row.map((p) => <WorkCard key={p.slug} project={p} />)}
                    </Reveal>
                  ))}
                <div className="work-footer">
                  <Link to="/work" className="nav-link-cta"><span className="cta-slash">\</span> View All Work</Link>
                </div>
                </div>
              </div>
            </motion.section>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── SKILLSET (panels sweep up as Work exits top) ──────────────── */}
      <div
        className="skillset-overlap"
      >
        <Skillset containerRef={skillsetRef} disableExit={isResponsiveLock} />
      </div>

      {/* REVEAL WRAP — holds Whispers + Footer BEHIND Skillset (lower z).
          The pane is present for the full wipe, but its content fades in after
          a short scroll delay so the reveal feels softer. */}
      <div
        ref={revealRef}
        className="reveal-wrap z-layer-4"
        style={{
          marginTop: isResponsiveLock ? 0 : '-200vh',
          minHeight: isResponsiveLock ? '180vh' : '300vh',
        }}
      >
        <div className="reveal-sticky">
          <motion.div
            className="reveal-content"
            style={{ opacity: isResponsiveLock ? 1 : revealOpacity, y: isResponsiveLock ? 0 : revealY }}
          >
            <section className="section whispers" id="whispers">
              <div className="sec-layout relative z-10">
                <div className="sec-label">
                  <span className="label">\ Whispers</span>
                </div>
                <div className="whispers-grid">
                  {whispers.map((w, i) => (
                    <Reveal key={w.title} className="whisper-card" delay={i * 0.08}>
                      <p className="whisper-date">{w.date}</p>
                      <h3 className="whisper-title">{w.title}</h3>
                      <p className="whisper-excerpt">{w.excerpt}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
            <Footer />
          </motion.div>
        </div>
      </div>

      <style>{`
        /* HERO — position/z-index controlled by .z-layer-1 in index.css */
        .hero {
          min-height: 100dvh;
          overflow: clip;
          --glass-size: 70vmin;
          --glass-right: 5%;
          --glass-radius: 35vmin;
          --glass-center-x: calc(100% - var(--glass-right) - var(--glass-radius));
        }
        .hero-video { position: absolute; inset: 0; z-index: 1; }
        .hero-video video { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: #000; opacity: .32; z-index: 2; }
        .hero-spline {
          position: absolute; inset: 0; z-index: 10;
          pointer-events: none;
          transform: scale(1.4);
          transform-origin: center center;
          mix-blend-mode: lighten;
        }
        .hero-spline canvas { pointer-events: none !important; display: block; width: 100% !important; height: 100% !important; background: transparent !important; }
        .hero-tagline {
          position: absolute;
          bottom: clamp(32px, 5vh, 64px);
          left: 0; right: 0;
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 var(--pad);
          z-index: 4;
          font-family: var(--fd);
          font-size: clamp(28px, min(6.3vw, 11.9dvh), 95px);
          font-weight: 600;
          letter-spacing: .02em;
          text-transform: uppercase;
          color: #fff;
        }
        .hero-tagline-line { overflow: hidden; line-height: .92; padding-bottom: 0.06em; }
        .hero-tagline-inner { display: block; line-height: .92; }
        .hero-glass-sim {
          position: absolute;
          z-index: 9;
          width: var(--glass-size);
          height: var(--glass-size);
          border-radius: 50%;
          top: 50%;
          right: var(--glass-right);
          transform: translateY(-50%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.01);
          pointer-events: none;
        }

        /* TWO-COLUMN SECTION LAYOUT */
        /* Label col ~18%, content col ~82% — matches reference site proportions */
        .sec-layout {
          display: grid;
          grid-template-columns: 18% 1fr;
          gap: 0 var(--gap);
          padding: 0 var(--pad);
        }
        .sec-label {
          padding-top: 4px;
          /* sticky so label stays visible while content scrolls */
          position: sticky;
          top: 72px;
          align-self: start;
        }

        .section { padding: 80px 0; }
        .cta-slash { color: rgba(207,207,207,.35); margin-right: 2px; }

        /* ABOUT REVEAL WRAP — Clients + Work sit behind About's white panels,
           matching the Whispers + Footer reveal under Skillset. */
        .post-about-reveal-wrap {
          position: relative;
          z-index: 1;
          background: var(--bg);
        }
        .post-about-reveal-content {
          position: sticky;
          top: 0;
          width: 100%;
          background: var(--bg);
        }
        .post-about-reveal-content .sec-label {
          position: static;
        }

        /* CLIENTS — position/z-index controlled by .z-layer-3 in index.css */
        .clients {
          padding: 80px 0;
        }
        .clients-list {
          font-family: var(--fd);
          font-size: clamp(13px, 1.6vw, 17px);
          color: var(--muted);
          line-height: 2.4;
          letter-spacing: .01em;
        }
        .clients-list span { transition: color .3s; cursor: default; }
        .clients-list span:hover { color: var(--light); }
        .dot-sep { color: rgba(207,207,207,.15); padding: 0 4px; }

        /* WORK — JS pins exact View All Work target; no visible dead spacer. */
        .work-pin-wrap {
          position: relative;
          z-index: 2;
          background: var(--bg);
        }
        .work-section { padding: 80px 0; }
        .work-after-clients {
          margin-top: -44px;
        }
        .work-sticky {
          position: relative;
          background: var(--bg);
        }
        .skillset-overlap {
          position: relative;
          z-index: 6;
          margin-top: -88px;
        }
        .work-body {
          display: flex; flex-direction: column; gap: var(--gap);
        }
        .work-row {
          display: grid;
          grid-template-columns: repeat(7, minmax(50px, 1fr));
          gap: var(--gap);
        }
        .work-row:nth-child(1) .work-card:nth-child(1) { grid-column: span 4; }
        .work-row:nth-child(1) .work-card:nth-child(2) { grid-column: span 3; }
        .work-row:nth-child(2) .work-card:nth-child(1) { grid-column: span 3; }
        .work-row:nth-child(2) .work-card:nth-child(2) { grid-column: span 4; }
        .work-row:nth-child(3) .work-card:nth-child(1) { grid-column: span 4; }
        .work-row:nth-child(3) .work-card:nth-child(2) { grid-column: span 3; }
        .work-card {
          display: flex; flex-direction: column;
          cursor: pointer; text-decoration: none;
        }
        .work-card-image {
          width: 100%; aspect-ratio: 1.55;
          overflow: hidden;
          background: var(--dark);
        }
        .work-card-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .7s ease, filter .4s ease;
        }
        .work-card:hover .work-card-image img { transform: scale(1.04); filter: brightness(.85); }
        .work-card:hover .wc-name { color: var(--surface); }
        .work-card-frost {
          display: flex; flex-direction: column;
          gap: 2px;
          padding: 12px 0 4px;
        }
        .wc-slash {
          font-family: var(--fd);
          font-size: 14px; font-weight: 400;
          color: rgba(207,207,207,.3);
          margin-right: 3px;
          transition: color .3s;
        }
        .work-card:hover .wc-slash { color: rgba(207,207,207,.6); }
        .wc-name {
          font-family: var(--fd);
          font-size: 14px; font-weight: 600;
          letter-spacing: -.01em;
          text-transform: uppercase;
          color: var(--light);
          transition: color .3s;
        }
        .wc-cat {
          font-family: var(--fd);
          font-size: 13px; font-weight: 400;
          letter-spacing: .01em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .work-card-title-area { display: flex; align-items: center; gap: 2px; }
        .work-card-cat-area { display: flex; align-items: center; gap: 2px; }
        .work-footer {
          display: flex; justify-content: flex-start;
          padding-top: 32px;
        }
        .nav-link-cta {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: var(--muted);
          border-bottom: 1px solid rgba(207,207,207,.2);
          padding-bottom: 2px;
          display: inline-flex; align-items: center; gap: 4px;
          transition: color .3s, border-color .3s;
        }
        .nav-link-cta:hover { color: var(--light); border-color: var(--light); }
        .nav-link-cta:hover .cta-slash { color: rgba(207,207,207,.7); }

        /* REVEAL WRAP — Whispers + Footer sit inside a sticky pane, with the
           actual content opacity scroll-delayed in JSX. */
        .reveal-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .reveal-content { width: 100%; }
        /* Whispers padding tightened so content + Footer fit the 100vh pane
           without overflow; Footer slots right underneath. */
        .whispers { padding: 40px 0 24px; }
        .whispers-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: var(--gap);
        }
        .whisper-card {
          display: block; padding: 24px 0;
          border-top: 1px solid rgba(207,207,207,.1);
        }
        .whisper-card:hover .whisper-title { color: var(--accent); }
        .whisper-date { font-family: var(--fm); font-size: 11px; color: var(--muted); margin-bottom: 16px; }
        .whisper-title {
          font-family: var(--fd); font-size: 20px; font-weight: 500;
          letter-spacing: -.01em; line-height: 1.3;
          margin-bottom: 12px; transition: color .3s;
        }
        .whisper-excerpt { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* RESPONSIVE */
        @media (max-width: 1279px) {
          .post-about-reveal-wrap {
            min-height: 220vh;
          }
          .post-about-reveal-content {
            position: sticky;
            top: 0;
          }
          .work-after-clients {
            margin-top: 0;
          }
          .work-section {
            padding: 64px 0 32px;
          }
          .skillset-overlap {
            margin-top: 0;
          }
          .reveal-wrap {
            min-height: auto;
          }
          .reveal-sticky {
            position: relative;
            top: auto;
            height: auto;
            overflow: visible;
          }
          .reveal-content {
            width: 100%;
          }
          .whispers {
            padding: 72px 0 40px;
          }
          .work-row { grid-template-columns: repeat(2, 1fr); }
          .work-row .work-card:nth-child(1),
          .work-row .work-card:nth-child(2) { grid-column: span 1 !important; }
        }
        @media (max-width: 809px) {
          .section { padding: 60px 0; }
          .sec-layout { grid-template-columns: 1fr; }
          .sec-label { position: static; margin-bottom: 24px; }
          .hero-tagline { font-size: clamp(22px, min(8.4vw, 9.8dvh), 50px); }
          .word-reveal { font-size: clamp(18px, 5.2vw, 26px); max-width: 100%; }
          .about-body { align-items: flex-start; }
          .word-reveal { text-align: left; }
          .about-cta-row { justify-content: flex-start; }
          .work-row { display: flex; flex-direction: column; gap: 12px; }
          .whispers-grid { grid-template-columns: 1fr; }
          .whispers {
            padding: 64px 0 32px;
          }

        }
      `}</style>
    </>
  )
}

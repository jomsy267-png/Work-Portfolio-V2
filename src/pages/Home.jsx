import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { StaggeredSectionBackground } from '../components/PanelWipe'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

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

/* ---- Word-by-word scroll-scrub opacity reveal (matches reference) ---- */
function WordSpan({ word, index, total, progress }) {
  const start = (index / total) * 0.78
  const end = Math.min(((index + 2.5) / total) * 0.78, 1)
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return <motion.span className="rv-word" style={{ opacity }}>{word} </motion.span>
}

function WordReveal({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.28'],
  })
  const words = text.split(' ')
  return (
    <p ref={ref} className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <WordSpan key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}

/* ---- Featured work rows ---- */
const featuredRows = [
  [projects[0], projects[1]],
  [projects[2], projects[3]],
  [projects[4], projects[5]],
]

/* ---- Services data ---- */
const services = [
  {
    title: 'Research',
    desc: 'We start by understanding — your brand, your market, your audience. Through deep research, we uncover insights that form the foundation of everything we build.',
    items: ['Brand Audit', 'Market Segmentation', 'Journey Mapping', 'Competitor Analysis', 'User Research'],
  },
  {
    title: 'Strategy',
    desc: 'We translate insights into direction — crafting positioning, narrative, and architecture that give your brand a clear voice and purpose in the market.',
    items: ['Brand Positioning', 'Brand Architecture', 'Messaging Framework', 'Content Strategy', 'Go-to-Market'],
  },
  {
    title: 'Experience',
    desc: 'We bring the brand to life — through visual identity, digital products, and every touchpoint where your audience meets your brand.',
    items: ['Visual Identity', 'Web Design', 'Motion & Interaction', 'Brand Guidelines', 'Art Direction'],
  },
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

/* ---- Services section — accordion hover reveal matching reference ---- */
function ServiceRow({ service, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="service-row"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.13 }}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen(v => !v)}
    >
      <div className="service-divider" />

      {/* Always-visible header: title + counter */}
      <div className="service-row-header">
        <motion.span
          className="service-name-text"
          animate={{ x: open ? 7 : 0 }}
          transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {index > 0 && <motion.span
            className="svc-slash"
            animate={{ color: open ? 'rgba(207,207,207,0.6)' : 'rgba(207,207,207,0.25)' }}
            transition={{ duration: 0.3 }}
          >\ </motion.span>}
          {service.title.toUpperCase()}
        </motion.span>

        <motion.div
          className="service-counter"
          animate={{ opacity: open ? 1 : 0.45 }}
          transition={{ duration: 0.3 }}
        >
          <span className="counter-n">{String(index + 1).padStart(2, '0')}</span>
          <span className="counter-sep"> / </span>
          <span className="counter-total">{String(total).padStart(2, '0')}</span>
        </motion.div>
      </div>

      {/* Expandable: description + tags */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="service-expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }, opacity: { duration: 0.28, ease: 'easeOut' } }}
            style={{ overflow: 'hidden' }}
          >
            <div className="service-expanded-inner">
              <p className="service-desc-text">{service.desc}</p>
              <div className="service-tags-row">
                {service.items.map((tag, ti) => (
                  <span key={tag} className="svc-tag">
                    {tag}{ti < service.items.length - 1 && <span className="tag-sep"> \ </span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServicesSection() {
  return (
    <section className="services theme-light z-layer-5" id="services">
      <StaggeredSectionBackground isLight={true} />
      <div className="sec-layout relative z-10">
        <div className="sec-label">
          <span className="label">\ What We Do</span>
        </div>
        <div className="services-list">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} total={services.length} />
          ))}
          {/* Bottom closing line */}
          <div className="service-divider" />
        </div>
      </div>
    </section>
  )
}

// Detect capable device function removed since Spline was decommissioned.

export default function Home() {
  const servicesRef = useRef(null)

  // Track services entering — same offset as the panel wipe trigger
  const { scrollYProgress: svcProgress } = useScroll({
    target: servicesRef,
    offset: ['start 130%', 'start 20%'],
  })

  // Positive Y partially counteracts upward scroll → work appears to slow
  // Starts at 0 (no effect), grows to 200px as services fully covers work
  const rawWorkY = useTransform(svcProgress, [0, 1], [0, 200])
  const workY = useSpring(rawWorkY, { stiffness: 55, damping: 22, mass: 0.8 })

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
          <Navbar heroMode />
          <div className="hero-tagline">
            {['VISUAL DESIGNS', 'THAT TELL A STORY'].map((line, i) => (
              <div key={i} className="hero-tagline-line">
                <motion.span
                  className="hero-tagline-inner"
                  initial={{ y: '108%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.05,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.55 + i * 0.14,
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ─── ABOUT (light wipe over Hero) ─────────────────────────────── */}
      <section
        className="section theme-light z-layer-2"
        id="about"
        style={{ marginTop: '-100vh' }}
      >
        <StaggeredSectionBackground isLight={true} />
        <div className="sec-layout relative z-10">
          <div className="sec-label">
            <span className="label">\ About</span>
          </div>
          <div className="about-body">
            <WordReveal text="I create brand identities and visual systems with an emphasis on clarity, composition, and quiet confidence. Outside of design, riding motorcycles remains one of the few things that clears the noise and keeps me grounded." />
            <div className="about-cta-row">
              <a href="https://jomsy267.myportfolio.com" target="_blank" rel="noreferrer" className="about-cta">
                <span className="cta-slash">\</span> Read About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS (solid dark — fully covers Hero) ─────────────────── */}
      <Reveal>
        <section className="clients z-layer-3">
          <div className="sec-layout relative z-10">
            <p className="label sec-label">\ Selected Clients</p>
            <div className="clients-list">
              {['APEGA', 'Ballet Edmonton', 'Odvod Media Inc.', 'Edmonton Community Foundation', 'CEA', 'University of Alberta', 'Runway Footwear', 'Odd. Brewing Company', 'Page The Cleaners', 'Edify'].map((c, i, arr) => (
                <span key={c}>{c}{i < arr.length - 1 && <span className="dot-sep"> · </span>}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <div className="divider" />

      {/* ─── WORK ──────────────────────────────────────────────────
         Scrolls normally (no sticky). Services’ staggered panels naturally
         sweep upward as Services enters — Work exits the top at the same
         time, creating the visual “wipe over” effect without any pinning. */}
      <motion.section
        className="work-section z-layer-4"
        id="work"
        style={{ y: workY }}
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

      {/* ─── SERVICES (panels sweep up as Work exits top) ───────────────── */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* WHISPERS */}
      <section className="section whispers z-layer-6" id="whispers">
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

      <div className="divider" />

      <Footer className="z-layer-7" />

      <style>{`
        /* HERO — position/z-index controlled by .z-layer-1 in index.css */
        .hero {
          min-height: 100dvh;
          overflow: hidden;
        }
        .hero-video { position: absolute; inset: 0; z-index: 1; }
        .hero-video video { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: #000; opacity: .32; z-index: 2; }
        .hero-tagline {
          position: absolute;
          bottom: clamp(32px, 5vh, 64px);
          left: 0; right: 0;
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 var(--pad);
          z-index: 3;
          font-family: var(--fd);
          font-size: clamp(28px, min(6.3vw, 11.9dvh), 95px);
          font-weight: 600;
          letter-spacing: .02em;
          text-transform: uppercase;
          color: #fff;
        }
        /* Each line is an overflow:hidden clip boundary */
        .hero-tagline-line {
          overflow: hidden;
          line-height: .92;
          padding-bottom: 0.06em;
        }
        .hero-tagline-inner {
          display: block;
          line-height: .92;
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

        /* ABOUT — position/z-index controlled by .z-layer-X in index.css */
        .section { padding: 80px 0; }
        /* Extra breathing room on light sections */
        .theme-light.section,
        .theme-light.services { padding: 160px 0; }
        .about-body {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 36px;
        }

        /* Word-by-word scroll reveal */
        .word-reveal {
          font-family: var(--fd);
          font-size: clamp(20px, 2.6vw, 36px);
          font-weight: 500;
          letter-spacing: -.025em;
          line-height: 1.3;
          color: inherit;
          text-align: right;
          max-width: 680px;
        }
        .rv-word { display: inline; }

        .about-cta-row { display: flex; justify-content: flex-end; }
        .cta-slash { color: rgba(207,207,207,.35); margin-right: 2px; }
        .about-cta {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .04em;
          text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 4px;
          color: var(--muted);
          border-bottom: 1px solid rgba(207,207,207,.2);
          padding-bottom: 2px;
          transition: color .3s, border-color .3s;
        }
        .about-cta:hover { color: var(--light); border-color: var(--light); }
        .about-cta:hover .cta-slash { color: rgba(207,207,207,.7); }

        /* CLIENTS — position/z-index controlled by .z-layer-3 in index.css */
        .clients { padding: 80px 0; }
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

        /* WORK — position/z-index controlled by inline style in JSX */
        .work-section { padding: 80px 0; }
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

        /* SERVICES — position/z-index controlled by .z-layer-5 in index.css */
        .services { padding: 80px 0; }
        .services-list { display: flex; flex-direction: column; }

        .service-divider {
          height: 1px;
          background: rgba(140, 140, 140, 0.22);
        }

        .service-row { cursor: pointer; }

        /* Always-visible header row: title left, counter right */
        .service-row-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          gap: 16px;
        }

        .service-name-text {
          font-family: var(--fd);
          font-size: clamp(26px, 3.8vw, 52px);
          font-weight: 700;
          letter-spacing: -.03em;
          line-height: 1;
          text-transform: uppercase;
          color: var(--light);
          display: block;
        }
        .svc-slash { margin-right: 1px; }

        /* Counter — always visible, right side of header */
        .service-counter {
          flex-shrink: 0;
          text-align: right;
          white-space: nowrap;
          line-height: 1;
        }
        .counter-n {
          font-family: var(--fd);
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          letter-spacing: -.03em;
          color: var(--light);
        }
        .counter-sep { color: var(--muted); font-size: 14px; margin: 0 2px; }
        .counter-total {
          font-family: var(--fd);
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          letter-spacing: -.03em;
          color: var(--muted);
        }

        /* Expandable reveal area */
        .service-expanded-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-bottom: 28px;
        }
        .service-desc-text {
          font-size: 15px;
          line-height: 1.72;
          color: var(--muted);
          max-width: 560px;
        }

        /* Tags — inline backslash separators */
        .service-tags-row {
          font-family: var(--fd);
          font-size: 11.5px;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--muted);
          line-height: 1.9;
        }
        .svc-tag { white-space: nowrap; }
        .tag-sep {
          color: rgba(207, 207, 207, 0.22);
          margin: 0 3px;
        }

        /* WHISPERS — position/z-index controlled by .z-layer-6 in index.css */
        .whispers { padding-top: 80px; }
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

          /* Services mobile: smaller title, tighter header padding */
          .service-row-header { padding: 18px 0; }
          .service-name-text { font-size: clamp(22px, 7vw, 34px); }
          .counter-n, .counter-total { font-size: clamp(18px, 5.5vw, 28px); }
          /* Expanded content fills width on mobile */
          .service-desc-text { max-width: 100%; }
        }

        @media (min-width: 810px) and (max-width: 1279px) {
          /* Services tablet */
          .service-row-header { padding: 20px 0; }
          .service-name-text { font-size: clamp(22px, 3.4vw, 42px); }
        }
      `}</style>
    </>
  )
}

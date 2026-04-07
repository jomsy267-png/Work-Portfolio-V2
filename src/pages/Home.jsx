import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
      <div className="work-card-image">
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

/* ---- Services section with scroll scrub ---- */
function ServicesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, 2.99])

  return (
    <section className="services" id="services" ref={containerRef}>
      <div className="services-sticky">
        <div className="services-inner">
          <div className="services-header">
            <span className="label">\ What We Do</span>
          </div>
          {services.map((s, i) => (
            <ServiceSlide key={s.title} service={s} index={i} rawIndex={rawIndex} />
          ))}
          <div className="services-progress">
            {services.map((_, i) => (
              <ProgressDot key={i} index={i} rawIndex={rawIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceSlide({ service, index, rawIndex }) {
  const opacity = useTransform(rawIndex, [index - 0.4, index, index + 0.4, index + 0.9], [0, 1, 1, 0])
  const y = useTransform(rawIndex, [index - 0.5, index], [40, 0])
  const pointerEvents = useTransform(rawIndex, (v) => Math.round(v) === index ? 'auto' : 'none')

  return (
    <motion.div
      className="service-slide"
      style={{ opacity, y, pointerEvents, position: index === 0 ? 'relative' : 'absolute', top: 0, left: 0, width: '100%' }}
    >
      <div className="services-counter">
        <span>{String(index + 1).padStart(2, '0')}</span> / 03
      </div>
      <h2 className="service-title">{service.title}</h2>
      <p className="body-text service-desc">{service.desc}</p>
      <ul className="service-list">
        {service.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </motion.div>
  )
}

function ProgressDot({ index, rawIndex }) {
  const scale = useTransform(rawIndex, (v) => Math.round(v) === index ? 1.4 : 1)
  const bg = useTransform(rawIndex, (v) => Math.round(v) === index ? '#0099ff' : 'rgba(207,207,207,.15)')
  return <motion.div className="progress-dot" style={{ scale, background: bg }} />
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-video">
          <video autoPlay loop muted playsInline>
            <source src="https://res.cloudinary.com/workbyw/video/upload/v1741537245/W_Showreel_cdqxat.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        >
          PRINT &amp; DIGITAL<br />
          DESIGN THAT<br />
          TELLS YOUR STORY
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="grid-8">
          <Reveal className="about-label" delay={0}>
            <span className="label">\ About</span>
          </Reveal>
          <Reveal className="about-content" delay={0.1}>
            <h2 className="heading-md">A versatile print and digital graphic designer focused on visual communication and creative execution.</h2>
            <p className="body-text">I work with brands, agencies, and organisations to craft identities, publications, packaging, and campaigns that resonate. From concept to final production — every detail is considered.</p>
            <a href="#" className="about-cta">Read About Me</a>
          </Reveal>
          <Reveal className="about-side" delay={0.2}>
            {[['Since', '2018'], ['Projects', '20+'], ['Disciplines', '8'], ['Based In', 'Edmonton']].map(([k, v]) => (
              <div className="about-stat" key={k}>
                <span>{k}</span><span>{v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* CLIENTS */}
      <Reveal>
        <section className="clients">
          <div className="clients-inner">
            <p className="label clients-label">\ Selected Clients</p>
            <div className="clients-list">
              {['APEGA', 'Ballet Edmonton', 'Odvod Media Inc.', 'Edmonton Community Foundation', 'CEA', 'University of Alberta', 'Runway Footwear', 'Odd. Brewing Company', 'Page The Cleaners', 'Edify'].map((c, i, arr) => (
                <span key={c}>{c}{i < arr.length - 1 && <span className="dot-sep"> · </span>}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <div className="divider" />

      {/* FEATURED WORK */}
      <section className="work-section" id="work">
        <div className="work-header">
          <span className="label">Featured Work</span>
        </div>
        <div className="work-grid">
          <div className="work-cards-container">
            {featuredRows.map((row, ri) => (
              <Reveal key={ri} className="work-row" delay={ri * 0.08}>
                {row.map((p) => <WorkCard key={p.slug} project={p} />)}
              </Reveal>
            ))}
          </div>
        </div>
        <div className="work-footer">
          <Link to="/work" className="nav-link-cta">View All Work</Link>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <ServicesSection />

      {/* WHISPERS */}
      <section className="section whispers" id="whispers">
        <div className="whispers-header">
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
      </section>

      <div className="divider" />

      <Footer />

      <style>{`
        /* HERO */
        .hero {
          position: relative;
          height: 100vh; min-height: 600px;
          display: grid;
          grid-template-columns: repeat(8, minmax(50px, 1fr));
          gap: var(--gap);
          padding: 40px var(--pad) var(--pad);
          overflow: hidden;
        }
        .hero-video { position: absolute; inset: 0; z-index: 1; }
        .hero-video video { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: #000; opacity: .25; z-index: 2; }
        .hero-tagline {
          position: relative; z-index: 3;
          grid-column: 1 / span 3;
          align-self: end;
          font-family: var(--fd);
          font-size: clamp(32px, 5.2vw, 66px);
          font-weight: 500; line-height: .9;
          letter-spacing: -.02em;
          text-transform: uppercase;
          color: #fff;
          padding-bottom: 12px;
        }

        /* ABOUT */
        .section { padding: 120px 0; }
        .about-label { grid-column: span 2; padding-top: 4px; }
        .about-content { grid-column: span 4; }
        .about-content .heading-md {
          font-family: var(--fd);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 500;
          letter-spacing: -.02em;
          line-height: 1.25;
          margin-bottom: 24px;
        }
        .about-content .body-text { margin-bottom: 40px; }
        .about-cta {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 8px;
          transition: opacity .3s;
        }
        .about-cta:hover { opacity: .6; }
        .about-side {
          grid-column: span 2;
          display: flex; flex-direction: column; gap: 12px;
          padding-top: 4px;
        }
        .about-stat {
          font-family: var(--fm);
          font-size: 11px; color: var(--muted);
          display: flex; justify-content: space-between;
        }
        .about-stat span:last-child {
          font-family: var(--fd);
          font-size: 14px; font-weight: 600;
          color: var(--light);
        }

        /* CLIENTS */
        .clients { padding: 80px 0; }
        .clients-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--pad); }
        .clients-label { margin-bottom: 40px; }
        .clients-list {
          font-family: var(--fd);
          font-size: clamp(14px, 2vw, 18px);
          color: var(--muted);
          line-height: 2.2;
        }
        .clients-list span { transition: color .3s; cursor: default; }
        .clients-list span:hover { color: var(--light); }
        .dot-sep { color: rgba(207,207,207,.2); }

        /* WORK */
        .work-section { padding-bottom: 80px; }
        .work-header {
          display: flex; justify-content: center; align-items: center;
          padding: 24px var(--pad);
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(8, minmax(1px, 1fr));
          gap: var(--gap);
          max-width: var(--max); margin: 0 auto;
          padding: 68px var(--pad) 0;
        }
        .work-cards-container {
          grid-column: span 7;
          display: flex; flex-direction: column; gap: 24px;
        }
        .work-row {
          display: grid;
          grid-template-columns: repeat(7, minmax(50px, 1fr));
          gap: var(--gap);
        }
        .work-row:nth-child(1) .work-card:nth-child(1) { grid-column: span 4; }
        .work-row:nth-child(1) .work-card:nth-child(2) { grid-column: span 3; }
        .work-row:nth-child(2) .work-card:nth-child(1) { grid-column: span 2; }
        .work-row:nth-child(2) .work-card:nth-child(2) { grid-column: span 3; }
        .work-row:nth-child(3) .work-card:nth-child(1) { grid-column: span 3; }
        .work-row:nth-child(3) .work-card:nth-child(2) { grid-column: span 2; }
        .work-card {
          display: flex; flex-direction: column;
          cursor: pointer; text-decoration: none; overflow: hidden;
        }
        .work-card-image {
          width: 100%; aspect-ratio: 1.5;
          position: relative; overflow: hidden;
          background: var(--dark);
        }
        .work-row:nth-child(1) .work-card:nth-child(2) .work-card-image { aspect-ratio: 1.778; }
        .work-card-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .6s ease, filter .4s ease;
        }
        .work-card:hover .work-card-image img { transform: scale(1.03); filter: brightness(.9); }
        .work-card-frost {
          display: flex; flex-direction: row;
          align-items: flex-start; gap: 8px;
          padding: 4px 0;
        }
        .wc-slash, .wc-name, .wc-cat {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
        }
        .wc-name { margin-left: 2px; }
        .wc-cat { color: var(--surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .work-card-title-area { display: flex; align-items: center; }
        .work-card-cat-area { display: flex; align-items: center; gap: 4px; flex: 1; }
        .work-footer {
          max-width: var(--max); margin: 48px auto 0;
          padding: 0 var(--pad);
          display: flex; justify-content: center;
        }
        .nav-link-cta {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
          transition: opacity .3s;
        }
        .nav-link-cta:hover { opacity: .6; }

        /* SERVICES */
        .services { position: relative; min-height: 300vh; }
        .services-sticky {
          position: sticky; top: 0;
          height: 100vh;
          display: flex; align-items: center;
          overflow: hidden;
        }
        .services-inner {
          position: relative;
          width: 100%; max-width: var(--max);
          margin: 0 auto; padding: 0 var(--pad);
        }
        .services-header { margin-bottom: 80px; }
        .services-counter {
          font-family: var(--fm);
          font-size: 12px; color: var(--muted);
          margin-bottom: 12px;
        }
        .service-title {
          font-family: var(--fd);
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: -.03em;
          line-height: 1;
          margin-bottom: 24px;
        }
        .service-desc { max-width: 500px; margin-bottom: 32px; }
        .service-list {
          list-style: none;
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .service-list li {
          font-family: var(--fd);
          font-size: 13px; letter-spacing: .04em;
          text-transform: uppercase;
          padding: 6px 16px;
          border: 1px solid rgba(207,207,207,.12);
          border-radius: 24px;
          color: var(--muted);
        }
        .services-progress {
          position: absolute; right: var(--pad); top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 8px;
        }
        .progress-dot { width: 8px; height: 8px; border-radius: 50%; }

        /* WHISPERS */
        .whispers { padding-top: 0; }
        .whispers-header {
          max-width: var(--max); margin: 0 auto 48px;
          padding: 0 var(--pad);
        }
        .whispers-grid {
          max-width: var(--max); margin: 0 auto;
          padding: 0 var(--pad);
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
          .work-cards-container { grid-column: 1 / -1; }
          .work-row { grid-template-columns: repeat(2, 1fr); }
          .work-row .work-card:nth-child(1),
          .work-row .work-card:nth-child(2) { grid-column: span 1 !important; }
        }
        @media (max-width: 809px) {
          .section { padding: 80px 0; }
          .hero { grid-template-columns: 1fr; padding: 24px var(--pad) var(--pad); }
          .hero-tagline { grid-column: span 1; font-size: 36px; }
          .about-label { grid-column: span 8; margin-bottom: 12px; }
          .about-content { grid-column: span 8; }
          .about-side { grid-column: span 8; flex-direction: row; flex-wrap: wrap; gap: 24px; margin-top: 32px; }
          .work-grid { grid-template-columns: 1fr; padding-top: 24px; }
          .work-cards-container { grid-column: span 1; }
          .work-row { display: flex; flex-direction: column; gap: 12px; }
          .whispers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const FILTERS = [
  { label: 'All',           value: 'all' },
  { label: 'Branding',      value: 'branding' },
  { label: 'Packaging',     value: 'packaging' },
  { label: 'Editorial',     value: 'editorial' },
  { label: 'Campaign',      value: 'campaign' },
  { label: 'Art Direction', value: 'art-direction' },
]

function matchesFilter(project, filter) {
  if (filter === 'all') return true
  const hay = (project.category + ' ' + project.categoryShort).toLowerCase()
  if (filter === 'branding')      return hay.includes('brand') || hay.includes('identity')
  if (filter === 'packaging')     return hay.includes('packag')
  if (filter === 'editorial')     return hay.includes('editorial') || hay.includes('publication') || hay.includes('graphic')
  if (filter === 'campaign')      return hay.includes('campaign')
  if (filter === 'art-direction') return hay.includes('art direction') || hay.includes('art dir')
  return false
}

function WorkCard({ project, i }) {
  const prefersReducedMotion = useReducedMotion()
  const previewImage = project.posterImage || project.cover || project.hero
  const energyCategory = project.energyCategory || 'calm-editorial'

  return (
    <motion.div
      layout={!prefersReducedMotion}
      key={project.slug}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: [0.25, 0.1, 0.25, 1],
        delay: prefersReducedMotion ? 0 : (i % 2) * 0.08,
      }}
    >
      <Link
        to={`/work/${project.slug}`}
        className={`wpc wpc--${energyCategory}`}
        data-energy-category={energyCategory}
        data-project-type={project.projectType || 'mixed-media'}
      >
        {/* Image */}
        <div className="wpc-img img-wrap">
          <img src={previewImage} alt={project.title} loading={i < 2 ? 'eager' : 'lazy'} decoding="async" />
          <div className="wpc-overlay" />
        </div>

        {/* Footer: title left, number right */}
        <div className="wpc-foot">
          <div className="wpc-info">
            <span className="wpc-cat">{project.categoryShort}</span>
            <span className="wpc-title">
              <span className="wpc-slash">\</span>{project.title}
            </span>
          </div>
          <span className="wpc-num">{String(i + 1).padStart(2, '0')}</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function WorkPage() {
  const [active, setActive] = useState('all')
  const prefersReducedMotion = useReducedMotion()
  const filtered = projects.filter(p => matchesFilter(p, active))

  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── HEADER ── */}
        <motion.div
          className="wph"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1], delay: prefersReducedMotion ? 0 : 0.1 }}
        >
          <div className="wph-inner">
            <h1 className="wph-title">All Work</h1>
            <div className="wph-meta">
              <span className="wph-count">{String(projects.length).padStart(2, '0')} Projects</span>
              <p className="wph-desc">Brand identities, campaigns, publications, and visual systems — across print and digital.</p>
            </div>
          </div>
        </motion.div>

        {/* ── FILTER TABS ── */}
        <motion.div
          className="wpf"
          role="group"
          aria-label="Project filters"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1], delay: prefersReducedMotion ? 0 : 0.22 }}
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`wpf-btn${active === f.value ? ' is-active' : ''}`}
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
            >
              {active === f.value && <span className="wpf-slash" aria-hidden="true">\ </span>}
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── GRID ── */}
        <div className="wpg-wrap">
          <motion.div className="wpg" layout={!prefersReducedMotion}>
            <AnimatePresence>
              {filtered.map((p, i) => (
                <WorkCard key={p.slug} project={p} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer minimal />

      <style>{`
        /* ── HEADER ── */
        .wph {
          padding: 140px var(--pad) 0;
        }
        .wph-inner {
          display: grid;
          grid-template-columns: 1fr 300px;
          align-items: end;
          gap: 0 var(--gap);
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(207,207,207,.12);
        }
        .wph-title {
          font-family: var(--fd);
          font-size: clamp(56px, 8.5vw, 120px);
          font-weight: 700;
          letter-spacing: -.04em;
          line-height: .88;
          text-transform: uppercase;
        }
        .wph-count {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .06em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }
        .wph-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* ── FILTER TABS ── */
        .wpf {
          display: flex;
          align-items: center;
          padding: 0 var(--pad);
          border-bottom: 1px solid rgba(207,207,207,.12);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .wpf::-webkit-scrollbar { display: none; }

        .wpf-btn {
          font-family: var(--fd);
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--muted);
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          padding: 20px 18px 18px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 1px;
          transition: color .25s ease, border-color .25s ease;
          margin-bottom: -1px;
        }
        .wpf-btn:hover,
        .wpf-btn:focus-visible {
          color: var(--light);
        }
        .wpf-btn:focus-visible {
          outline: 1px solid rgba(207,207,207,.72);
          outline-offset: -5px;
        }
        .wpf-btn.is-active {
          color: var(--light);
          border-bottom-color: var(--light);
        }
        .wpf-slash { color: rgba(207,207,207,.3); }

        /* ── GRID ── */
        .wpg-wrap {
          padding: 40px var(--pad) 120px;
        }
        .wpg {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 56px var(--gap);
        }

        /* ── CARD ── */
        .wpc {
          display: block;
          text-decoration: none;
          cursor: pointer;
          outline: none;
        }
        .wpc-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1.5;
          overflow: hidden;
          background: var(--dark);
        }
        .wpc-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .75s cubic-bezier(.25,.1,.25,1), filter .45s ease;
        }
        .wpc:hover .wpc-img img,
        .wpc:focus-visible .wpc-img img {
          transform: scale(1.035);
          filter: brightness(.82);
        }
        .wpc--high-energy-campaign:hover .wpc-img img,
        .wpc--high-energy-campaign:focus-visible .wpc-img img,
        .wpc--motion-experimental:hover .wpc-img img,
        .wpc--motion-experimental:focus-visible .wpc-img img {
          transform: scale(1.05);
        }
        .wpc--technical-system:hover .wpc-img img,
        .wpc--technical-system:focus-visible .wpc-img img {
          transform: scale(1.02);
          filter: brightness(.86);
        }
        .wpc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .45s ease;
          pointer-events: none;
        }
        .wpc:hover .wpc-overlay,
        .wpc:focus-visible .wpc-overlay { opacity: 1; }
        .wpc:focus-visible .wpc-img {
          outline: 1px solid rgba(207,207,207,.78);
          outline-offset: 6px;
        }

        /* card footer */
        .wpc-foot {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 14px 0 0;
          gap: 12px;
        }
        .wpc-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .wpc-cat {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .07em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .wpc-title {
          font-family: var(--fd);
          font-size: clamp(15px, 1.6vw, 21px);
          font-weight: 700;
          letter-spacing: -.02em;
          text-transform: uppercase;
          color: var(--light);
          display: flex;
          align-items: baseline;
          gap: 4px;
          transition: color .3s;
        }
        .wpc:hover .wpc-title,
        .wpc:focus-visible .wpc-title { color: var(--surface); }
        .wpc-slash {
          color: rgba(207,207,207,.28);
          font-weight: 400;
        }
        .wpc-num {
          font-family: var(--fm);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: .05em;
          flex-shrink: 0;
          padding-top: 3px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 809px) {
          .wph { padding-top: 110px; }
          .wph-inner {
            grid-template-columns: 1fr;
            gap: 20px 0;
          }
          .wph-title { font-size: clamp(44px, 13vw, 72px); }
          .wpg { grid-template-columns: 1fr; gap: 36px; }
          .wpf-btn { padding: 16px 12px 14px; font-size: 12px; }
          .wpc-num { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wpf-btn,
          .wpc-img img,
          .wpc-overlay,
          .wpc-title {
            transition: none !important;
          }
          .wpc:hover .wpc-img img,
          .wpc:focus-visible .wpc-img img,
          .wpc--high-energy-campaign:hover .wpc-img img,
          .wpc--high-energy-campaign:focus-visible .wpc-img img,
          .wpc--motion-experimental:hover .wpc-img img,
          .wpc--motion-experimental:focus-visible .wpc-img img,
          .wpc--technical-system:hover .wpc-img img,
          .wpc--technical-system:focus-visible .wpc-img img {
            transform: none;
          }
        }
        @media (min-width: 810px) and (max-width: 1279px) {
          .wph-inner { grid-template-columns: 1fr 220px; }
          .wpg { gap: 40px var(--gap); }
        }
      `}</style>
    </>
  )
}

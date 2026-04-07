import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'


function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <motion.h1
          className="header-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          Selected<br />Work
        </motion.h1>
        <motion.div
          className="header-meta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
        >
          <p className="header-count">0{projects.length} Projects</p>
          <p className="header-desc">Brand identities, campaigns, publications, and visual systems — across print and digital.</p>
        </motion.div>
      </div>

      <div className="work-list">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <Link to={`/work/${p.slug}`} className="work-item" data-cursor>
              <span className="item-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="item-img img-wrap">
                <img src={p.hero} alt={p.title} loading="lazy" />
              </div>
              <div className="item-info">
                <p className="item-title"><span className="item-slash">\</span> {p.title}</p>
                <p className="item-category"><span className="item-slash">\</span> {p.category}</p>
              </div>
              <div className="item-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="item-tag">{t}</span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Footer minimal />

      <style>{`
        .page-header {
          max-width: var(--max); margin: 0 auto;
          padding: 140px var(--pad) 72px;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: var(--gap); align-items: end;
        }
        .header-title {
          grid-column: span 5;
          font-family: var(--fd);
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 700; letter-spacing: -.04em;
          text-transform: uppercase; line-height: .88;
        }
        .header-meta {
          grid-column: span 3;
          display: flex; flex-direction: column; gap: 10px;
          padding-bottom: 10px;
        }
        .header-count { font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .04em; }
        .header-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

        .work-list {
          max-width: var(--max); margin: 0 auto;
          padding: 0 var(--pad) 120px;
          border-top: 1px solid rgba(207,207,207,.12);
        }
        .work-item {
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: var(--gap);
          padding: 28px 0;
          border-bottom: 1px solid rgba(207,207,207,.08);
          align-items: center;
          transition: opacity .3s;
        }
        .work-item:hover { opacity: .75; }
        .item-num { grid-column: span 1; font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .04em; }
        .item-img {
          grid-column: span 2; aspect-ratio: 1.55;
          overflow: hidden; background: var(--dark);
        }
        .item-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s ease; }
        .work-item:hover .item-img img { transform: scale(1.04); }
        .item-info { grid-column: span 3; }
        .item-slash { color: rgba(207,207,207,.3); margin-right: 3px; font-weight: 400; }
        .item-title {
          font-family: var(--fd);
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700; letter-spacing: -.02em;
          text-transform: uppercase; margin-bottom: 6px;
          display: flex; align-items: baseline; gap: 0;
        }
        .item-category { font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; display: flex; align-items: center; gap: 0; }
        .item-tags {
          grid-column: span 2;
          display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end;
        }
        .item-tag {
          font-family: var(--fd); font-size: 11px;
          letter-spacing: .05em; text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid rgba(207,207,207,.1);
          border-radius: 3px; color: var(--muted);
        }
        @media (max-width: 809px) {
          .page-header { grid-template-columns: 1fr; padding: 120px var(--pad) 48px; }
          .header-title, .header-meta { grid-column: span 1; }
          .work-item { grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; }
          .item-num { display: none; }
          .item-img { grid-column: span 1; grid-row: 1; }
          .item-info { grid-column: span 1; grid-row: 1; }
          .item-tags { grid-column: span 2; grid-row: 2; justify-content: flex-start; }
        }
      `}</style>
    </>
  )
}

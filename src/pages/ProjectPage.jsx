import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getProject, getNextProject } from '../data/projects'

function Reveal({ children, delay = 0, className = '', style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function VideoEmbed({ id, aspect = '16/9' }) {
  const src = `https://www-ccv.adobe.io/v1/player/ccv/${id}/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View`
  return (
    <div className="video-embed" style={{ aspectRatio: aspect }}>
      <iframe
        src={src}
        allowFullScreen
        frameBorder="0"
        title="Project Video"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  )
}

function GalleryGrid({ items }) {
  // Group consecutive side-by-side items
  const rows = []
  let i = 0
  while (i < items.length) {
    const item = items[i]
    // Text block — always full width, standalone
    if (item.type === 'text') {
      rows.push({ type: 'text', item })
      i++
    // Side-by-side pair
    } else if (item.side && items[i + 1]?.side) {
      rows.push({ type: 'pair', items: [item, items[i + 1]] })
      i += 2
    } else {
      rows.push({ type: 'single', item })
      i++
    }
  }

  return (
    <div className="gallery-sequence">
      {rows.map((row, ri) => {
        if (row.type === 'text') {
          return (
            <Reveal key={ri} className="gallery-text-block">
              <h3 className="gallery-text-heading">{row.item.heading}</h3>
              <p className="gallery-text-body">{row.item.body}</p>
            </Reveal>
          )
        }
        if (row.type === 'pair') {
          return (
            <Reveal key={ri} className="gallery-pair" delay={0.04}>
              {row.items.map((item, pi) => (
                <div key={pi} className={`gallery-pair-item${item.flex ? ` flex-${item.flex}` : ''}`}>
                  {item.type === 'video'
                    ? <VideoEmbed id={item.id} aspect={item.aspect || '9/16'} />
                    : <div className="gallery-item img-wrap"><img src={item.src} alt={item.alt} loading="lazy" /></div>
                  }
                </div>
              ))}
            </Reveal>
          )
        }
        // Single item
        const item = row.item
        if (item.type === 'video') {
          return (
            <Reveal key={ri} className={`gallery-video-wrap${item.span === 2 ? ' span-2' : ''}`}>
              <VideoEmbed id={item.id} aspect={item.aspect || '16/9'} />
            </Reveal>
          )
        }
        return (
          <Reveal
            key={ri}
            delay={ri * 0.03}
            className={`gallery-item img-wrap${item.span === 2 ? ' span-2' : ''}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </Reveal>
        )
      })}
    </div>
  )
}

function PublicationsLayout({ pubs }) {
  return (
    <div className="pubs-list">
      {pubs.map((pub, i) => (
        <Reveal key={i} delay={i * 0.06} className="pub-item">
          <div className="pub-img img-wrap">
            <img src={pub.image} alt={pub.title} loading="lazy" />
          </div>
          <div className="pub-info">
            <p className="pub-num">{pub.num}</p>
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-client">{pub.client} — {pub.year}</p>
            <p className="pub-desc">{pub.description}</p>
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noreferrer" className="pub-link">View Publication →</a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const next = getNextProject(slug)

  if (!project) return <Navigate to="/work" replace />

  return (
    <>
      <Navbar isProject />

      {/* HERO IMAGE */}
      <motion.div
        className="project-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img src={project.hero} alt={project.title} />
      </motion.div>

      {/* PROJECT INFO */}
      <div className="project-info">
        <Reveal className="pi-title-col" delay={0.1}>
          <p className="pi-label">Project</p>
          <h1 className="pi-title">{project.title}</h1>
          <p className="pi-desc">{project.description}</p>
          <div className="pi-deliverables">
            {project.tags.map((t) => <span key={t} className="pi-tag">{t}</span>)}
          </div>
        </Reveal>
        <Reveal className="pi-meta-col" delay={0.2}>
          {project.meta.map((m) => (
            <div key={m.label} className="meta-row">
              <p className="pi-label">{m.label}</p>
              <p className="meta-val">{m.value}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="divider" style={{ padding: '0 var(--pad)', maxWidth: 'var(--max)', margin: '0 auto' }} />

      {/* GALLERY */}
      <Reveal className="gallery">
        <p className="gallery-label"><span className="proj-slash">\</span> Project Gallery</p>
        {project.publications ? (
          <PublicationsLayout pubs={project.publications} />
        ) : (
          <GalleryGrid items={project.gallery} />
        )}
      </Reveal>

      {/* NEXT PROJECT */}
      {next && (
        <div className="next-project">
          <div className="next-inner">
            <Link to={`/work/${next.slug}`}>
              <p className="next-label"><span className="proj-slash">\</span> Next Project</p>
              <p className="next-title">{next.title}</p>
            </Link>
            <Link to={`/work/${next.slug}`} className="next-arrow" aria-label={`Go to next project: ${next.title}`}>→</Link>
          </div>
        </div>
      )}

      <Footer minimal />

      <style>{`
        .project-hero {
          width: 100%;
          aspect-ratio: 2.35;
          min-height: 320px;
          overflow: hidden;
          margin-top: 53px;
          background: var(--dark);
        }
        .project-hero img { width: 100%; height: 100%; object-fit: cover; }

        .project-info {
          max-width: var(--max); margin: 0 auto;
          padding: 72px var(--pad) 80px;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: var(--gap);
        }
        .pi-title-col { grid-column: span 4; }
        .pi-meta-col { grid-column: span 4; display: flex; flex-direction: column; gap: 32px; padding-top: 8px; }
        .pi-label { font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; margin-bottom: 6px; }
        .pi-title {
          font-family: var(--fd);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700; letter-spacing: -.03em;
          line-height: 1; text-transform: uppercase;
          margin-bottom: 32px;
        }
        .pi-desc { font-size: 15px; color: var(--muted); line-height: 1.75; max-width: 480px; margin-bottom: 40px; }
        .pi-deliverables { display: flex; flex-wrap: wrap; gap: 8px; }
        .pi-tag {
          font-family: var(--fd); font-size: 11px;
          letter-spacing: .05em; text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid rgba(207,207,207,.12);
          border-radius: 3px; color: var(--muted);
        }
        .meta-row { display: flex; flex-direction: column; gap: 4px; }
        .meta-val { font-family: var(--fd); font-size: 16px; font-weight: 500; letter-spacing: -.01em; }

        .gallery {
          max-width: var(--max); margin: 0 auto;
          padding: 80px var(--pad);
        }
        .proj-slash { color: rgba(207,207,207,.35); margin-right: 4px; }
        .gallery-label {
          font-family: var(--fd); font-size: 13px; font-weight: 500;
          letter-spacing: .04em; text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 48px;
          display: flex; align-items: center; gap: 4px;
        }
        .gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--gap); }

        /* Sequence layout — replaces grid for projects with mixed content */
        .gallery-sequence { display: flex; flex-direction: column; gap: var(--gap); }

        .gallery-item { overflow: hidden; background: var(--dark); }
        .gallery-item.span-2 { grid-column: span 2; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
        .gallery-item:hover img { transform: scale(1.02); }

        /* Side-by-side pair */
        .gallery-pair { display: flex; gap: var(--gap); align-items: flex-start; }
        .gallery-pair-item { flex: 1; overflow: hidden; background: var(--dark); }
        .gallery-pair-item.flex-21 { flex: 21; }
        .gallery-pair-item.flex-29 { flex: 29; }
        .gallery-pair-item.flex-13 { flex: 13; }
        .gallery-pair-item.flex-27 { flex: 27; }

        /* Video embed */
        .video-embed { position: relative; width: 100%; overflow: hidden; background: #000; }
        .gallery-video-wrap { overflow: hidden; background: #000; }
        .gallery-video-wrap.span-2 { width: 100%; }

        /* Text blocks within gallery */
        .gallery-text-block { padding: 48px 0 24px; }
        .gallery-text-heading {
          font-family: var(--fd); font-size: clamp(18px, 2vw, 24px);
          font-weight: 600; letter-spacing: -.02em; text-transform: uppercase;
          margin-bottom: 16px; color: var(--light);
        }
        .gallery-text-body { font-size: 15px; color: var(--muted); line-height: 1.75; max-width: 680px; }

        /* Publications layout */
        .pubs-list { display: flex; flex-direction: column; gap: 80px; }
        .pub-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
        }
        .pub-img { overflow: hidden; background: var(--dark); }
        .pub-img img { width: 100%; object-fit: cover; }
        .pub-num { font-family: var(--fm); font-size: 11px; color: var(--muted); margin-bottom: 16px; }
        .pub-title {
          font-family: var(--fd); font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700; letter-spacing: -.03em;
          text-transform: uppercase; line-height: 1.1;
          margin-bottom: 12px;
        }
        .pub-client { font-family: var(--fm); font-size: 12px; color: var(--muted); margin-bottom: 20px; }
        .pub-desc { font-size: 15px; color: var(--muted); line-height: 1.75; margin-bottom: 24px; }
        .pub-link {
          font-family: var(--fd); font-size: 16px; font-weight: 500;
          letter-spacing: -.01em; text-transform: uppercase;
          color: var(--accent); transition: opacity .3s;
        }
        .pub-link:hover { opacity: .7; }

        .next-project {
          border-top: 1px solid rgba(207,207,207,.12);
          padding: 80px var(--pad);
        }
        .next-inner {
          max-width: var(--max); margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
        }
        .next-label { font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; margin-bottom: 12px; }
        .next-title {
          font-family: var(--fd); font-size: clamp(24px, 3vw, 40px);
          font-weight: 700; letter-spacing: -.03em;
          text-transform: uppercase; transition: opacity .3s;
        }
        .next-project a:hover .next-title { opacity: .6; }
        .next-arrow { font-family: var(--fd); font-size: 32px; color: var(--muted); transition: transform .3s, color .3s; }
        .next-project a:hover .next-arrow { transform: translateX(8px); color: var(--light); }

        @media (max-width: 809px) {
          .project-info { grid-template-columns: 1fr; padding: 40px var(--pad) 60px; }
          .pi-title-col, .pi-meta-col { grid-column: span 1; }
          .gallery-grid { grid-template-columns: 1fr; }
          .gallery-item.span-2 { grid-column: span 1; }
          .gallery-pair { flex-direction: column; }
          .gallery-pair-item { flex: 1 !important; }
          .pub-item { grid-template-columns: 1fr; gap: 32px; }
          .next-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>
    </>
  )
}

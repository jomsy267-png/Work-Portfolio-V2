import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getProject, getNextProject } from '../data/projects'
import { StaggeredSectionBackground } from '../components/PanelWipe'

// ─── Shared reveal wrapper ────────────────────────────────────────
function Reveal({ children, delay = 0, className = '', style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Section: Full-width image ────────────────────────────────────
// contained: v3 alternating — padded rather than edge-to-edge
function SectionFull({ s, contained = false }) {
  return (
    <Reveal className={`ps-full${contained ? ' ps-full--contained' : ''}`}>
      <img src={s.src} alt={s.alt} loading="lazy" />
      {s.caption && <p className="ps-caption">{s.caption}</p>}
    </Reveal>
  )
}

// ─── Section: Two images side by side ────────────────────────────
// asymmetric: v2 first duo → 60/40 split
// diptych: v3 first duo → no gap, images touch
function SectionDuo({ s, asymmetric = false, diptych = false }) {
  const cls = `ps-duo${asymmetric ? ' ps-duo--asymmetric' : ''}${diptych ? ' ps-duo--diptych' : ''}`
  return (
    <div className={cls}>
      <Reveal className="ps-duo-img" delay={0}>
        <img src={s.left.src} alt={s.left.alt} loading="lazy" />
      </Reveal>
      <Reveal className="ps-duo-img" delay={diptych ? 0 : 0.09}>
        <img src={s.right.src} alt={s.right.alt} loading="lazy" />
      </Reveal>
    </div>
  )
}

// ─── Section: 2-col image grid with optional span ─────────────────
// v2: if 3 items and none has span:2, auto-span the first item
function SectionGrid({ s, variant }) {
  const items = s.items.map((img, i) => {
    const autoSpan = variant === 2 && s.items.length === 3 && !s.items.some(x => x.span === 2) && i === 0
    return { ...img, span: img.span || (autoSpan ? 2 : undefined) }
  })
  return (
    <div className="ps-grid">
      {items.map((img, i) => (
        <Reveal
          key={i}
          delay={i * 0.045}
          className={`ps-grid-img${img.span === 2 ? ' span-2' : ''}`}
        >
          <img src={img.src} alt={img.alt} loading="lazy" />
        </Reveal>
      ))}
    </div>
  )
}

// ─── Section: Text block ──────────────────────────────────────────
function SectionText({ s, variant }) {
  return (
    <Reveal className={`ps-text${variant === 3 ? ' ps-text--v3' : ''}`}>
      {s.label && (
        <p className="ps-eyebrow">
          <span className="ps-slash">\</span>{s.label}
        </p>
      )}
      {s.heading && <h2 className="ps-heading">{s.heading}</h2>}
      <p className="ps-body">{s.body}</p>
    </Reveal>
  )
}

// ─── Section: Text + Image (layout 'right' = text-left image-right)
function SectionTextImage({ s }) {
  const isLeft = s.layout === 'left'
  return (
    <div className={`ps-ti${isLeft ? ' ps-ti--left' : ''}`}>
      <Reveal className="ps-ti-text" delay={0}>
        {s.label && (
          <p className="ps-eyebrow">
            <span className="ps-slash">\</span>{s.label}
          </p>
        )}
        {s.heading && <h2 className="ps-heading">{s.heading}</h2>}
        <p className="ps-body">{s.body}</p>
      </Reveal>
      <Reveal className="ps-ti-img" delay={0.12}>
        <img src={s.image.src} alt={s.image.alt} loading="lazy" />
      </Reveal>
    </div>
  )
}

// ─── Section: Campaign / chapter divider ─────────────────────────
function SectionCampaign({ s, variant }) {
  return (
    <Reveal className={`ps-campaign${variant === 2 ? ' ps-campaign--v2' : ''}`}>
      {s.num && <p className="ps-campaign-num">{s.num}</p>}
      <h2 className="ps-campaign-title">{s.title}</h2>
      {s.body && <p className="ps-body ps-campaign-body">{s.body}</p>}
    </Reveal>
  )
}

// ─── Section: Single video (full-width, 16:9) ────────────────────
function SectionVideo({ s }) {
  const src = `https://www-ccv.adobe.io/v1/player/ccv/${s.id}/embed?bgcolor=%231a1a1a&lazyLoading=true&api_key=BehancePro2View`
  return (
    <Reveal className="ps-video-wrap">
      <iframe title={s.title || 'Project Video'} src={src} frameBorder="0" allowFullScreen />
    </Reveal>
  )
}

// ─── Section: Two videos side by side ────────────────────────────
function SectionVideoDuo({ s }) {
  const makeUrl = (id) => `https://www-ccv.adobe.io/v1/player/ccv/${id}/embed?bgcolor=%231a1a1a&lazyLoading=true&api_key=BehancePro2View`
  return (
    <div className="ps-video-duo">
      <Reveal className="ps-video-wrap" delay={0}>
        <iframe title="Project Video" src={makeUrl(s.left)} frameBorder="0" allowFullScreen />
      </Reveal>
      <Reveal className="ps-video-wrap" delay={0.09}>
        <iframe title="Project Video" src={makeUrl(s.right)} frameBorder="0" allowFullScreen />
      </Reveal>
    </div>
  )
}

// ─── Section: Publication entry ───────────────────────────────────
function SectionPub({ s }) {
  return (
    <div className="ps-pub">
      <Reveal className="ps-pub-img" delay={0}>
        <img src={s.image} alt={s.title} loading="lazy" />
      </Reveal>
      <Reveal className="ps-pub-info" delay={0.12}>
        <p className="ps-pub-num">{s.num}</p>
        <h3 className="ps-pub-title">{s.title}</h3>
        <p className="ps-pub-meta">{s.client} — {s.year}</p>
        <p className="ps-body">{s.description}</p>
        {s.link && (
          <a href={s.link} target="_blank" rel="noreferrer" className="ps-pub-link">
            View Publication →
          </a>
        )}
      </Reveal>
    </div>
  )
}

// ─── Section dispatcher ───────────────────────────────────────────
// variant: 1 | 2 | 3
// fullIndex: counts only 'full' type sections seen so far (for v3 alternating bleed)
// duoIndex: counts only 'duo' type sections seen so far (for v2 first-duo asymmetry)
function renderSection(s, i, { variant, fullIndex, duoIndex }) {
  const gap = variant === 2 ? '100px' : variant === 3 ? '120px' : '80px'
  const mt  = i === 0 ? 0 : s.type === 'campaign' ? (variant === 2 ? '140px' : '120px') : gap

  // V3: chapter separator rule before certain section types (not first section)
  const showRule = variant === 3 && i > 0 && (
    s.type === 'campaign' || s.type === 'text-image' ||
    (s.type === 'grid') || (s.type === 'text')
  )

  // V3: alternate full-width images between edge-to-edge and padded
  // odd fullIndex = contained, even = bleed (0-indexed: 0=bleed, 1=contained, ...)
  const v3FullContained = variant === 3 && s.type === 'full' && fullIndex % 2 === 1

  // V2: first duo gets 60/40 asymmetry class
  const v2FirstDuo = variant === 2 && s.type === 'duo' && duoIndex === 0

  // V3: first duo gets no-gap diptych class
  const v3FirstDuo = variant === 3 && s.type === 'duo' && duoIndex === 0

  let node
  switch (s.type) {
    case 'full':
      node = <SectionFull s={s} contained={v3FullContained} />
      break
    case 'duo':
      node = <SectionDuo s={s} asymmetric={v2FirstDuo} diptych={v3FirstDuo} />
      break
    case 'grid':       node = <SectionGrid s={s} variant={variant} />;       break
    case 'text':       node = <SectionText s={s} variant={variant} />;       break
    case 'text-image': node = <SectionTextImage s={s} />;                    break
    case 'campaign':   node = <SectionCampaign s={s} variant={variant} />;   break
    case 'pub':        node = <SectionPub s={s} />;                          break
    case 'video':      node = <SectionVideo s={s} />;                        break
    case 'video-duo':  node = <SectionVideoDuo s={s} />;                     break
    default:           return null
  }

  return (
    <div key={i} style={{ marginTop: mt }}>
      {showRule && <div className="ps-chapter-rule" />}
      {node}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────
export default function ProjectPage() {
  const { slug } = useParams()
  const project  = getProject(slug)
  const next     = getNextProject(slug)

  if (!project) return <Navigate to="/work" replace />

  const variant = project.layout || 1

  // Pre-compute per-section indices needed by variant logic
  const sectionMeta = (() => {
    let fullIdx = 0, duoIdx = 0
    return (project.sections || []).map((s) => {
      const fi = fullIdx
      const di = duoIdx
      if (s.type === 'full') fullIdx++
      if (s.type === 'duo')  duoIdx++
      return { fullIndex: fi, duoIndex: di }
    })
  })()

  return (
    <div className={`pv pv${variant}`}>
      <Navbar isProject />

      {/* ── HERO — sticky, 200vh scroll room ────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '200vh' }}>
        <motion.div
          className="project-hero"
          style={{ position: 'sticky', top: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <img src={project.hero} alt={project.title} />
        </motion.div>
      </div>

      {/* ── PROJECT INFO — panels wipe up over hero ───────────── */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '-100vh', background: 'var(--bg)' }}>
        <StaggeredSectionBackground isLight={false} />
        <div className="relative z-10" style={{ background: 'var(--bg)' }}>

      {variant === 3 ? (
        /* V3 — stacked single-col with inline meta strip */
        <div className="project-info project-info--v3">
          <Reveal className="pi-v3-main" delay={0.1}>
            <p className="pi-label">Project</p>
            <h1 className="pi-title">{project.title}</h1>
            <p className="pi-desc">{project.description}</p>
            <div className="pi-deliverables">
              {project.tags.map((t) => (
                <span key={t} className="pi-tag">{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="pi-v3-meta-strip" delay={0.2}>
            {project.meta.map((m, mi) => (
              <span key={m.label} className="pi-strip-item">
                <span className="pi-strip-label">{m.label}</span>
                <span className="pi-strip-sep"> / </span>
                <span className="pi-strip-val">{m.value}</span>
                {mi < project.meta.length - 1 && <span className="pi-strip-dot"> · </span>}
              </span>
            ))}
          </Reveal>
        </div>
      ) : (
        /* V1 & V2 — 2-col grid (V2 shifts to 3/5 split via CSS class) */
        <div className={`project-info${variant === 2 ? ' project-info--v2' : ''}`}>
          <Reveal className="pi-title-col" delay={0.1}>
            <p className="pi-label">Project</p>
            <h1 className="pi-title">{project.title}</h1>
            <p className="pi-desc">{project.description}</p>
            <div className="pi-deliverables">
              {project.tags.map((t) => (
                <span key={t} className="pi-tag">{t}</span>
              ))}
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
      )}

        </div>{/* /relative z-10 */}
      </div>{/* /panel wipe outer */}

      <div className="proj-divider" />

      {/* ── PROJECT SECTIONS ──────────────────────────────────── */}
      {project.sections?.length > 0 && (
        <div className="project-sections">
          {project.sections.map((s, i) =>
            renderSection(s, i, {
              variant,
              fullIndex: sectionMeta[i].fullIndex,
              duoIndex:  sectionMeta[i].duoIndex,
            })
          )}
        </div>
      )}

      {/* ── NEXT PROJECT ──────────────────────────────────────── */}
      {next && (
        <div className="next-project">
          <div className="next-inner">
            <Link to={`/work/${next.slug}`}>
              <p className="next-label">
                <span className="proj-slash">\</span> Next Project
              </p>
              <p className="next-title">{next.title}</p>
            </Link>
            <Link
              to={`/work/${next.slug}`}
              className="next-arrow"
              aria-label={`Go to ${next.title}`}
            >
              →
            </Link>
          </div>
        </div>
      )}

      <Footer minimal />

      <style>{`

        /* ══════════════════════════════════════════════════════
           HERO
        ══════════════════════════════════════════════════════ */
        .project-hero {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: var(--dark);
          padding-top: 53px;
        }
        .project-hero img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ══════════════════════════════════════════════════════
           PROJECT INFO
        ══════════════════════════════════════════════════════ */
        .project-info {
          max-width: var(--max);
          margin: 0 auto;
          padding: 72px var(--pad) 80px;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: var(--gap);
        }
        .pi-title-col { grid-column: span 4; }
        .pi-meta-col  {
          grid-column: span 4;
          display: flex; flex-direction: column; gap: 32px;
          padding-top: 6px;
        }
        .pi-label {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .045em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .pi-title {
          font-family: var(--fd);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          letter-spacing: -.03em;
          line-height: 1;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .pi-desc {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 40px;
        }
        .pi-deliverables { display: flex; flex-wrap: wrap; gap: 8px; }
        .pi-tag {
          font-family: var(--fd);
          font-size: 11px;
          letter-spacing: .05em;
          text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid rgba(207,207,207,.12);
          border-radius: 3px;
          color: var(--muted);
        }
        .meta-row   { display: flex; flex-direction: column; gap: 4px; }
        .meta-val   { font-family: var(--fd); font-size: 16px; font-weight: 500; letter-spacing: -.01em; }

        /* ══════════════════════════════════════════════════════
           DIVIDER
        ══════════════════════════════════════════════════════ */
        .proj-divider {
          height: 1px;
          background: rgba(207,207,207,.1);
          margin: 0 var(--pad);
        }

        /* ══════════════════════════════════════════════════════
           SECTIONS CONTAINER
        ══════════════════════════════════════════════════════ */
        .project-sections {
          padding: 80px 0 120px;
        }

        /* ══════════════════════════════════════════════════════
           SHARED TYPOGRAPHY (used across section types)
        ══════════════════════════════════════════════════════ */
        .ps-eyebrow {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .055em;
          text-transform: uppercase;
          margin-bottom: 18px;
          display: flex; align-items: center; gap: 6px;
        }
        .ps-slash { color: rgba(207,207,207,.3); }
        .ps-heading {
          font-family: var(--fd);
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 700;
          letter-spacing: -.03em;
          text-transform: uppercase;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .ps-body {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.82;
          max-width: 560px;
        }

        /* ══════════════════════════════════════════════════════
           SECTION — FULL-WIDTH IMAGE
        ══════════════════════════════════════════════════════ */
        .ps-full {
          overflow: hidden;
          background: var(--dark);
        }
        .ps-full img {
          width: 100%;
          display: block;
        }
        .ps-caption {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .035em;
          padding: 12px var(--pad) 0;
        }

        /* ══════════════════════════════════════════════════════
           SECTION — DUO (two images side by side)
        ══════════════════════════════════════════════════════ */
        .ps-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--gap);
          padding: 0 var(--pad);
        }
        .ps-duo-img {
          overflow: hidden;
          background: var(--dark);
        }
        .ps-duo-img img {
          width: 100%;
          display: block;
          transition: transform .65s ease;
        }
        .ps-duo-img:hover img { transform: scale(1.025); }

        /* ══════════════════════════════════════════════════════
           SECTION — GRID
        ══════════════════════════════════════════════════════ */
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--gap);
          padding: 0 var(--pad);
        }
        .ps-grid-img {
          overflow: hidden;
          background: var(--dark);
        }
        .ps-grid-img.span-2 { grid-column: span 2; }
        .ps-grid-img img {
          width: 100%;
          display: block;
          transition: transform .65s ease;
        }
        .ps-grid-img:hover img { transform: scale(1.025); }

        /* ══════════════════════════════════════════════════════
           SECTION — TEXT BLOCK
        ══════════════════════════════════════════════════════ */
        .ps-text { padding: 0 var(--pad); }

        /* ══════════════════════════════════════════════════════
           SECTION — TEXT + IMAGE
        ══════════════════════════════════════════════════════ */
        .ps-ti {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(48px, 6vw, 100px);
          align-items: center;
          padding: 0 var(--pad);
        }
        /* layout: 'left' → image left, text right */
        .ps-ti--left .ps-ti-img { order: -1; }

        .ps-ti-text { }
        .ps-ti-img  {
          overflow: hidden;
          background: var(--dark);
        }
        .ps-ti-img img {
          width: 100%;
          display: block;
        }

        /* ══════════════════════════════════════════════════════
           SECTION — CAMPAIGN DIVIDER
        ══════════════════════════════════════════════════════ */
        .ps-campaign {
          padding: 52px var(--pad) 0;
          border-top: 1px solid rgba(207,207,207,.1);
        }
        .ps-campaign-num {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .07em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .ps-campaign-title {
          font-family: var(--fd);
          font-size: clamp(28px, 4.2vw, 58px);
          font-weight: 700;
          letter-spacing: -.04em;
          text-transform: uppercase;
          line-height: .95;
          margin-bottom: 30px;
          max-width: 640px;
          white-space: pre-line;
        }
        .ps-campaign-body { max-width: 540px; }

        /* ══════════════════════════════════════════════════════
           SECTION — VIDEO (single full-width)
        ══════════════════════════════════════════════════════ */
        .ps-video-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: var(--dark);
        }
        .ps-video-wrap iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: 0;
        }

        /* ══════════════════════════════════════════════════════
           SECTION — VIDEO DUO (two videos side by side)
        ══════════════════════════════════════════════════════ */
        .ps-video-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--gap);
          padding: 0 var(--pad);
        }

        /* ══════════════════════════════════════════════════════
           SECTION — PUBLICATION ENTRY
        ══════════════════════════════════════════════════════ */
        .ps-pub {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
          padding: 0 var(--pad);
        }
        .ps-pub-img {
          overflow: hidden;
          background: var(--dark);
        }
        .ps-pub-img img { width: 100%; display: block; }
        .ps-pub-info    { display: flex; flex-direction: column; }
        .ps-pub-num {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .045em;
          margin-bottom: 18px;
        }
        .ps-pub-title {
          font-family: var(--fd);
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 700;
          letter-spacing: -.03em;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .ps-pub-meta {
          font-family: var(--fm);
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 22px;
        }
        .ps-pub-link {
          font-family: var(--fd);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -.01em;
          text-transform: uppercase;
          color: var(--accent);
          transition: opacity .3s;
          display: inline-block;
          margin-top: 12px;
        }
        .ps-pub-link:hover { opacity: .65; }

        /* ══════════════════════════════════════════════════════
           NEXT PROJECT
        ══════════════════════════════════════════════════════ */
        .next-project {
          border-top: 1px solid rgba(207,207,207,.12);
          padding: 80px var(--pad);
        }
        .next-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .next-label {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .045em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .next-title {
          font-family: var(--fd);
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 700;
          letter-spacing: -.03em;
          text-transform: uppercase;
          transition: opacity .3s;
        }
        .proj-slash { color: rgba(207,207,207,.3); margin-right: 4px; }
        .next-project a:hover .next-title { opacity: .5; }
        .next-arrow {
          font-family: var(--fd);
          font-size: 32px;
          color: var(--muted);
          transition: transform .35s ease, color .3s;
        }
        .next-arrow:hover {
          transform: translateX(10px);
          color: var(--light);
        }

        /* ══════════════════════════════════════════════════════
           VARIANT 2 — MEDIA-LED
           Key signature: tall hero, project info overlaid at
           bottom of hero, full-width visual dominance,
           asymmetric first duo, generous spacing
        ══════════════════════════════════════════════════════ */

        /* Hero: tall and dominant — nearly square */
        .pv2 .project-hero {
          aspect-ratio: 1.5 / 1;
          margin-top: 0;
          position: relative;
        }

        /* Project info: tighter top padding — hero carries weight */
        .pv2 .project-info {
          padding-top: 48px;
          padding-bottom: 72px;
        }

        /* Title col takes less space; meta pushed wide right */
        .project-info--v2 .pi-title-col { grid-column: span 3; }
        .project-info--v2 .pi-meta-col  {
          grid-column: span 5;
          padding-left: clamp(32px, 5vw, 80px);
          border-left: 1px solid rgba(207,207,207,.1);
        }

        /* Larger title in V2 — hero carries its weight */
        .pv2 .pi-title {
          font-size: clamp(40px, 6vw, 80px);
        }

        /* First duo: 65/35 strong asymmetry */
        .ps-duo--asymmetric {
          grid-template-columns: 65fr 35fr;
        }

        /* Sections more spread out — images breathe */
        .pv2 .project-sections { padding-top: 40px; }

        /* Campaign divider: much larger title */
        .ps-campaign--v2 .ps-campaign-title {
          font-size: clamp(36px, 6vw, 80px);
          max-width: 760px;
        }

        /* ══════════════════════════════════════════════════════
           VARIANT 3 — NARRATIVE
           Key signature: framed hero with visible margin gap,
           horizontal rule between hero and info, large centered
           title, inline meta strip, alternating contained/bleed
           images creating a chapter-like rhythm
        ══════════════════════════════════════════════════════ */

        /* Hero: visibly inset from edges — creates a "frame" */
        .pv3 .project-hero {
          aspect-ratio: 16 / 9;
          margin-top: 68px;
          margin-left: clamp(16px, 4vw, 64px);
          margin-right: clamp(16px, 4vw, 64px);
          width: auto;
        }

        /* Info block: single column, wide, centered feel */
        .project-info--v3 {
          max-width: var(--max);
          margin: 0 auto;
          padding: 56px var(--pad) 64px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pi-v3-main { margin-bottom: 32px; }
        .pi-v3-main .pi-title {
          font-size: clamp(32px, 4.2vw, 56px);
          margin-bottom: 20px;
        }
        .pi-v3-main .pi-desc { max-width: 600px; margin-bottom: 28px; }

        /* Meta strip: all fields in one horizontal line */
        .pi-v3-meta-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding-top: 22px;
          border-top: 1px solid rgba(207,207,207,.12);
          gap: 0;
        }
        .pi-strip-item {
          font-family: var(--fm);
          font-size: 11px;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
        }
        .pi-strip-label { color: rgba(140,140,140,.5); }
        .pi-strip-sep   { color: rgba(207,207,207,.25); margin: 0 4px; }
        .pi-strip-val   { color: var(--light); font-family: var(--fd); font-size: 12px; font-weight: 500; letter-spacing: .01em; text-transform: none; }
        .pi-strip-dot   { color: rgba(207,207,207,.2); margin: 0 16px; }

        /* Alternating full images: contained = inset from edges */
        .pv3 .ps-full--contained {
          margin-left: clamp(16px, 4vw, 64px);
          margin-right: clamp(16px, 4vw, 64px);
        }

        /* First duo: no gap — images press together (diptych) */
        .ps-duo--diptych {
          gap: 0;
          padding: 0;
        }

        /* Text blocks: wider column, slightly larger type */
        .ps-text--v3 { padding: 20px var(--pad); }
        .ps-text--v3 .ps-body {
          font-size: 16px;
          line-height: 1.9;
          max-width: 640px;
        }

        /* Visible chapter rule between content groups */
        .ps-chapter-rule {
          height: 1px;
          background: rgba(207,207,207,.1);
          margin: 0 var(--pad) 40px;
        }

        /* Campaign: wider title, more air above */
        .pv3 .ps-campaign { padding-top: 0; border-top: none; }
        .pv3 .ps-campaign-title {
          font-size: clamp(30px, 4.5vw, 62px);
          max-width: 800px;
        }

        /* ══════════════════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════════════════ */
        @media (max-width: 809px) {
          .project-info {
            grid-template-columns: 1fr;
            padding: 40px var(--pad) 56px;
          }
          .pi-title-col, .pi-meta-col { grid-column: span 1; }

          /* V2 mobile: restore standard hero */
          .pv2 .project-hero { aspect-ratio: 2.35 / 1; margin-top: 53px; }
          .pv2 .project-info { margin-top: 0; background: none; }
          .project-info--v2 .pi-title-col { grid-column: span 1; }
          .project-info--v2 .pi-meta-col  { grid-column: span 1; padding-left: 0; border-left: none; }
          .ps-duo--asymmetric { grid-template-columns: 1fr; }

          /* V3 mobile: full-bleed hero, strip wraps */
          .pv3 .project-hero { margin-left: 0; margin-right: 0; width: 100%; aspect-ratio: 2.35/1; margin-top: 53px; }
          .pv3 .ps-full--contained { margin-left: 0; margin-right: 0; }
          .ps-duo--diptych { grid-template-columns: 1fr; }
          .pi-v3-meta-strip { gap: 6px; }
          .pi-strip-dot { display: none; }
          .pi-strip-item { display: block; width: 100%; }

          .ps-duo  { grid-template-columns: 1fr; }
          .ps-grid { grid-template-columns: 1fr; }
          .ps-grid-img.span-2 { grid-column: span 1; }

          .ps-ti { grid-template-columns: 1fr; gap: 32px; }
          .ps-ti--left .ps-ti-img { order: 0; }

          .ps-pub { grid-template-columns: 1fr; gap: 32px; }
          .ps-video-duo { grid-template-columns: 1fr; }

          .ps-campaign-title { white-space: normal; }

          .next-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  )
}

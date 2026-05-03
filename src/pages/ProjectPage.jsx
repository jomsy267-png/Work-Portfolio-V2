import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getProject, getNextProject } from '../data/projects'
import { StaggeredSectionBackground } from '../components/PanelWipe'

// ─── Shared reveal wrapper (static container, entrance only) ─────
function Reveal({ children, delay = 0, className = '', style, ...props }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      {...props}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: [0.25, 0.1, 0.25, 1], delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Parallax + zoom image (animations inside overflow:hidden wrapper)
function ParallaxImg({ src, alt, loading = 'lazy', motionProfile }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const isCalmEditorial = motionProfile === 'calm-editorial'
  const rawY     = useTransform(scrollYProgress, [0, 1], isCalmEditorial ? ['2%', '-2%'] : ['5%', '-5%'])
  const rawScale = useTransform(scrollYProgress, [0, 1], isCalmEditorial ? [1.055, 1.015] : [1.14, 1.04])
  const y     = useSpring(rawY,     { stiffness: 80, damping: 25, mass: 0.5 })
  const scale = useSpring(rawScale, { stiffness: 80, damping: 25, mass: 0.5 })
  return (
    <div ref={ref} style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        style={{
          display: 'block',
          width: 'auto',
          maxWidth: '100%',
          maxHeight: '85vh',
          y: prefersReducedMotion ? 0 : y,
          scale: prefersReducedMotion ? 1 : scale,
        }}
      />
    </div>
  )
}

// ─── Section: Full-width image ────────────────────────────────────
// contained: v3 alternating — padded rather than edge-to-edge
function SectionFull({ s, contained = false, motionProfile }) {
  return (
    <Reveal className={`ps-full${contained ? ' ps-full--contained' : ''}`}>
      <ParallaxImg src={s.src} alt={s.alt} motionProfile={motionProfile} />
      {s.caption && <p className="ps-caption">{s.caption}</p>}
    </Reveal>
  )
}

// ─── Section: Two images side by side ────────────────────────────
// asymmetric: v2 first duo → 60/40 split
// diptych: v3 first duo → no gap, images touch
function SectionDuo({ s, asymmetric = false, diptych = false, motionProfile }) {
  const cls = `ps-duo${asymmetric ? ' ps-duo--asymmetric' : ''}${diptych ? ' ps-duo--diptych' : ''}`
  return (
    <div className={cls}>
      <Reveal className="ps-duo-img" delay={0}>
        <ParallaxImg src={s.left.src} alt={s.left.alt} motionProfile={motionProfile} />
      </Reveal>
      <Reveal className="ps-duo-img" delay={diptych ? 0 : 0.09}>
        <ParallaxImg src={s.right.src} alt={s.right.alt} motionProfile={motionProfile} />
      </Reveal>
    </div>
  )
}

// ─── Section: 2-col image grid with optional span ─────────────────
// v2: if 3 items and none has span:2, auto-span the first item
function SectionGrid({ s, variant, motionProfile }) {
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
          <ParallaxImg src={img.src} alt={img.alt} motionProfile={motionProfile} />
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
function SectionTextImage({ s, motionProfile }) {
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
        <ParallaxImg src={s.image.src} alt={s.image.alt} motionProfile={motionProfile} />
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
      <iframe title={s.title || 'Project video'} src={src} frameBorder="0" loading="lazy" allow="fullscreen; encrypted-media; picture-in-picture" allowFullScreen />
    </Reveal>
  )
}

// ─── Section: Two videos side by side ────────────────────────────
function SectionVideoDuo({ s }) {
  const makeUrl = (id) => `https://www-ccv.adobe.io/v1/player/ccv/${id}/embed?bgcolor=%231a1a1a&lazyLoading=true&api_key=BehancePro2View`
  return (
    <div className="ps-video-duo">
      <Reveal className="ps-video-wrap" delay={0}>
        <iframe title={s.leftTitle || 'Project video 1'} src={makeUrl(s.left)} frameBorder="0" loading="lazy" allow="fullscreen; encrypted-media; picture-in-picture" allowFullScreen />
      </Reveal>
      <Reveal className="ps-video-wrap" delay={0.09}>
        <iframe title={s.rightTitle || 'Project video 2'} src={makeUrl(s.right)} frameBorder="0" loading="lazy" allow="fullscreen; encrypted-media; picture-in-picture" allowFullScreen />
      </Reveal>
    </div>
  )
}

// ─── Section: Poster-first local motion previews ────────────────
function SectionMotionDuo({ s }) {
  const prefersReducedMotion = useReducedMotion()
  const canPreviewMotion = !prefersReducedMotion

  const playPreview = (event) => {
    const video = event.currentTarget.querySelector('video')
    if (!video) return
    video.play().catch(() => {})
  }

  const stopPreview = (event) => {
    const video = event.currentTarget.querySelector('video')
    if (!video) return
    video.pause()
    try {
      video.currentTime = 0
    } catch {
      // Some browsers block currentTime before metadata is ready.
    }
  }

  return (
    <div className="ps-motion-duo">
      {s.items?.map((item, index) => {
        const hasVideo = Boolean(item.videoSrc)
        const showVideo = hasVideo && canPreviewMotion
        return (
          <Reveal className="ps-motion-card-wrap" delay={index * 0.08} key={item.videoSrc || item.poster}>
            <figure
              className="ps-motion-card"
              tabIndex={showVideo ? 0 : undefined}
              aria-label={item.alt}
              onPointerEnter={showVideo ? playPreview : undefined}
              onPointerLeave={showVideo ? stopPreview : undefined}
              onFocus={showVideo ? playPreview : undefined}
              onBlur={showVideo ? stopPreview : undefined}
            >
              <div className="ps-motion-frame">
                {showVideo ? (
                  <video
                    muted
                    playsInline
                    loop
                    preload="none"
                    poster={item.poster}
                    width={item.width}
                    height={item.height}
                    aria-hidden="true"
                  >
                    <source src={item.videoSrc} type={item.videoType || 'video/webm'} />
                  </video>
                ) : (
                  <img
                    src={item.poster}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
              {item.label && <figcaption>{item.label}</figcaption>}
            </figure>
          </Reveal>
        )
      })}
    </div>
  )
}

// ─── Section: Curated website screenshot showcase ───────────────
function WebsiteShowcaseShot({ item, index, motionProfile }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = motionProfile === 'calm-editorial' && !prefersReducedMotion

  return (
    <motion.figure
      ref={ref}
      key={item.src}
      className={`ps-web-shot ps-web-shot--${item.layout || 'wide'}`}
      initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
      animate={shouldAnimate && inView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.72,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index * 0.045, 0.18),
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
      />
    </motion.figure>
  )
}

function SectionWebsiteShowcase({ s }) {
  const motionProfile = s.motionProfile

  return (
    <Reveal id={s.id} className="ps-website-showcase">
      <div className="ps-web-copy">
        {s.label && (
          <p className="ps-eyebrow">
            <span className="ps-slash">\</span>{s.label}
          </p>
        )}
        {s.heading && <h2 className="ps-heading">{s.heading}</h2>}
        {s.body && <p className="ps-body">{s.body}</p>}
      </div>

      <div className="ps-web-sequence">
        {s.shots?.map((item, index) => (
          <WebsiteShowcaseShot
            key={item.src}
            item={item}
            index={index}
            motionProfile={motionProfile}
          />
        ))}
      </div>
    </Reveal>
  )
}

// ─── Section: Publication entry ───────────────────────────────────
function SectionPub({ s, motionProfile }) {
  return (
    <div className="ps-pub">
      <Reveal className="ps-pub-img" delay={0}>
        <ParallaxImg src={s.image} alt={s.title} motionProfile={motionProfile} />
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
function renderSection(s, i, { variant, fullIndex, duoIndex, motionProfile }) {
  const gap = variant === 2 ? '100px' : variant === 3 ? '120px' : '80px'
  const mt  = i === 0 ? 0 : s.type === 'campaign' ? (variant === 2 ? '140px' : '120px') : gap

  // V3: chapter separator rule before certain section types (not first section)
  const showRule = variant === 3 && i > 0 && (
    s.type === 'campaign' || s.type === 'text-image' ||
    (s.type === 'grid') || (s.type === 'text') || s.type === 'website-showcase'
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
      node = <SectionFull s={s} contained={v3FullContained} motionProfile={motionProfile} />
      break
    case 'duo':
      node = <SectionDuo s={s} asymmetric={v2FirstDuo} diptych={v3FirstDuo} motionProfile={motionProfile} />
      break
    case 'grid':       node = <SectionGrid s={s} variant={variant} motionProfile={motionProfile} />;       break
    case 'text':       node = <SectionText s={s} variant={variant} />;       break
    case 'text-image': node = <SectionTextImage s={s} motionProfile={motionProfile} />;                    break
    case 'campaign':   node = <SectionCampaign s={s} variant={variant} />;   break
    case 'pub':        node = <SectionPub s={s} motionProfile={motionProfile} />;                          break
    case 'video':      node = <SectionVideo s={s} />;                        break
    case 'video-duo':  node = <SectionVideoDuo s={s} />;                     break
    case 'motion-duo': node = <SectionMotionDuo s={s} />;                    break
    case 'website-showcase': node = <SectionWebsiteShowcase s={s} />;         break
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
  const prefersReducedMotion = useReducedMotion()

  // Scroll progress of the project-info section — same offset as StaggeredSectionBackground
  const infoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: infoRef,
    offset: ['start 130%', 'start 20%'],
  })
  // Text reveals once panels are ~80% complete
  const textOpacity = useTransform(scrollYProgress, [0.78, 0.96], [0, 1])
  const textY       = useTransform(scrollYProgress, [0.78, 0.96], [18, 0])

  if (!project) return <Navigate to="/404" replace />

  const variant = project.layout || 1
  const motionProfile = project.energyCategory === 'calm-editorial' ? 'calm-editorial' : undefined

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
    <main
      id="main-content"
      className={`pv pv${variant} pv--${project.slug}`}
      data-energy-category={project.energyCategory || 'calm-editorial'}
      data-transition-tone={project.transitionTone || 'soft'}
    >
      <Navbar isProject />

      {/* ── HERO — sticky inside 200vh wrapper ────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '200vh' }}>
        <motion.div
          className="project-hero sticky-section"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeOut' }}
        >
          <img
            src={project.hero}
            alt={project.title}
            loading="eager"
            decoding="async"
            style={{ objectPosition: project.heroPosition || 'center' }}
          />
        </motion.div>
      </div>

      {/* ── PROJECT INFO — slides over hero with staggered panel wipe */}
      <div
        ref={infoRef}
        className="project-info-section z-layer-2"
        style={{ marginTop: '-100vh', minHeight: '100vh' }}
      >
        <StaggeredSectionBackground isLight={false} />
        <div className="relative z-10" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <motion.div style={{ opacity: prefersReducedMotion ? 1 : textOpacity, y: prefersReducedMotion ? 0 : textY, width: '100%' }}>

          {variant === 3 ? (
            <div className="project-info project-info--v3">
              <div className="pi-v3-main">
                <p className="pi-label">Project</p>
                <h1 className="pi-title">{project.title}</h1>
                <p className="pi-desc">{project.description}</p>
                <div className="pi-deliverables">
                  {project.tags.map((t) => (
                    <span key={t} className="pi-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pi-v3-meta-strip">
                {project.meta.map((m, mi) => (
                  <span key={m.label} className="pi-strip-item">
                    <span className="pi-strip-label">{m.label}</span>
                    <span className="pi-strip-sep"> / </span>
                    <span className="pi-strip-val">{m.value}</span>
                    {mi < project.meta.length - 1 && <span className="pi-strip-dot"> · </span>}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className={`project-info${variant === 2 ? ' project-info--v2' : ''}`}>
              <div className="pi-title-col">
                <p className="pi-label">Project</p>
                <h1 className="pi-title">{project.title}</h1>
                <p className="pi-desc">{project.description}</p>
                <div className="pi-deliverables">
                  {project.tags.map((t) => (
                    <span key={t} className="pi-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pi-meta-col">
                {project.meta.map((m) => (
                  <div key={m.label} className="meta-row">
                    <p className="pi-label">{m.label}</p>
                    <p className="meta-val">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          </motion.div>
        </div>
      </div>

      <div className="proj-divider" />

      {/* ── PROJECT SECTIONS ──────────────────────────────────── */}
      {project.sections?.length > 0 && (
        <div className="project-sections">
          {project.sections.map((s, i) =>
            renderSection(s, i, {
              variant,
              fullIndex: sectionMeta[i].fullIndex,
              duoIndex:  sectionMeta[i].duoIndex,
              motionProfile,
            })
          )}
        </div>
      )}

      {/* ── NEXT PROJECT ──────────────────────────────────────── */}
      {next && (
        <div
          className="next-project"
          data-energy-category={next.energyCategory || 'calm-editorial'}
          data-transition-tone={next.transitionTone || 'soft'}
        >
          <div className="next-inner">
            <Link
              to={`/work/${next.slug}`}
              className="next-card"
              aria-label={`Next project: ${next.title}`}
            >
              <div className="next-copy">
              <p className="next-label">
                <span className="proj-slash">\</span> Next Project
              </p>
              <p className="next-title">{next.title}</p>
              <p className="next-meta">{next.categoryShort || next.category}</p>
              </div>
              <figure className="next-preview" aria-hidden="true">
                <img
                  src={next.posterImage || next.cover || next.hero}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span className="next-arrow" aria-hidden="true">→</span>
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
        }

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
        }

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
           SECTION — POSTER-FIRST MOTION PREVIEWS
        ══════════════════════════════════════════════════════ */
        .ps-motion-duo {
          max-width: min(820px, calc(100vw - (var(--pad) * 2)));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(20px, 3vw, 42px);
        }
        .ps-motion-card {
          margin: 0;
          outline: none;
        }
        .ps-motion-frame {
          background: #050505;
          border: 1px solid rgba(207,207,207,.12);
          box-shadow: 0 22px 62px rgba(0,0,0,.2);
        }
        .ps-motion-frame img,
        .ps-motion-frame video {
          width: 100%;
          height: auto;
          display: block;
        }
        .ps-motion-card figcaption {
          margin-top: 12px;
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .055em;
          text-transform: uppercase;
        }
        .ps-motion-card:focus-visible .ps-motion-frame {
          outline: 1px solid rgba(207,207,207,.72);
          outline-offset: 6px;
        }

        /* ══════════════════════════════════════════════════════
           SECTION — WEBSITE SCREENSHOT SHOWCASE
        ══════════════════════════════════════════════════════ */
        .ps-website-showcase {
          padding: 0 var(--pad);
        }
        .ps-web-copy {
          max-width: var(--max);
          margin: 0 auto clamp(40px, 6vw, 76px);
        }
        .ps-web-copy .ps-heading {
          white-space: pre-line;
        }
        .ps-web-shot {
          margin: 0;
          background: #050505;
        }
        .ps-web-shot img {
          width: 100%;
          height: auto;
          display: block;
        }
        .ps-web-sequence {
          max-width: min(1040px, calc(100vw - (var(--pad) * 2)));
          margin: 0 auto;
          display: grid;
          gap: clamp(24px, 4.6vw, 68px);
        }
        .ps-web-shot {
          border: 1px solid rgba(207,207,207,.12);
          box-shadow: 0 26px 70px rgba(0,0,0,.22);
        }
        .ps-web-shot--intro {
          width: min(420px, 100%);
          justify-self: center;
        }
        .ps-web-shot--hero {
          width: min(620px, 100%);
          justify-self: center;
        }
        .ps-web-shot--wide {
          width: min(780px, 100%);
          justify-self: start;
        }
        .ps-web-shot--wide-right {
          width: min(760px, 100%);
          justify-self: end;
        }
        .ps-web-shot--mid {
          width: min(680px, 100%);
          justify-self: center;
        }
        .ps-web-shot--narrow-left {
          width: min(500px, 100%);
          justify-self: start;
        }
        .ps-web-shot--narrow-right {
          width: min(500px, 100%);
          justify-self: end;
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
        }
        .next-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(220px, 34vw) auto;
          align-items: center;
          gap: clamp(24px, 5vw, 72px);
          color: inherit;
          text-decoration: none;
          outline: none;
        }
        .next-copy {
          min-width: 0;
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
        .next-meta {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .05em;
          text-transform: uppercase;
          margin-top: 12px;
        }
        .next-preview {
          position: relative;
          aspect-ratio: 1.5;
          margin: 0;
          overflow: hidden;
          background: var(--dark);
          border: 1px solid rgba(207,207,207,.12);
        }
        .next-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .65s cubic-bezier(.25,.1,.25,1), filter .45s ease;
        }
        .proj-slash { color: rgba(207,207,207,.3); margin-right: 4px; }
        .next-card:hover .next-title,
        .next-card:focus-visible .next-title { opacity: .5; }
        .next-card:hover .next-preview img,
        .next-card:focus-visible .next-preview img {
          transform: scale(1.035);
          filter: brightness(.86);
        }
        .next-card:focus-visible .next-preview {
          outline: 1px solid rgba(207,207,207,.78);
          outline-offset: 6px;
        }
        .next-arrow {
          font-family: var(--fd);
          font-size: 32px;
          color: var(--muted);
          transition: transform .35s ease, color .3s;
        }
        .next-card:hover .next-arrow,
        .next-card:focus-visible .next-arrow {
          transform: translateX(10px);
          color: var(--light);
        }

        /* Ballet Edmonton keeps the shared ending pattern, but with a quieter
           Calm / Editorial response than the default project transition. */
        .pv--ballet-edmonton .next-card:focus-visible {
          outline: 1px solid rgba(207,207,207,.72);
          outline-offset: 10px;
        }
        .pv--ballet-edmonton .next-card:hover .next-title,
        .pv--ballet-edmonton .next-card:focus-visible .next-title {
          opacity: .62;
        }
        .pv--ballet-edmonton .next-card:hover .next-preview img,
        .pv--ballet-edmonton .next-card:focus-visible .next-preview img {
          transform: scale(1.015);
          filter: brightness(.9);
        }
        .pv--ballet-edmonton .next-card:hover .next-arrow,
        .pv--ballet-edmonton .next-card:focus-visible .next-arrow {
          transform: translateX(6px);
        }

        /* ══════════════════════════════════════════════════════
           VARIANT 2 — MEDIA-LED
           Key signature: tall hero, project info overlaid at
           bottom of hero, full-width visual dominance,
           asymmetric first duo, generous spacing
        ══════════════════════════════════════════════════════ */

        /* Hero: tall and dominant — nearly square */
        .pv2 .project-hero {
          height: 100vh;
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
          height: 100vh;
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

          /* V2 mobile */
          .pv2 .project-info { margin-top: 0; background: none; }
          .project-info--v2 .pi-title-col { grid-column: span 1; }
          .project-info--v2 .pi-meta-col  { grid-column: span 1; padding-left: 0; border-left: none; }
          .ps-duo--asymmetric { grid-template-columns: 1fr; }

          /* V3 mobile */
          .pv3 .project-hero { width: 100%; }
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
          .ps-motion-duo {
            grid-template-columns: 1fr;
            max-width: min(420px, calc(100vw - (var(--pad) * 2)));
          }
          .ps-web-copy { margin-bottom: 24px; }
          .ps-web-sequence { gap: 28px; }
          .ps-web-shot--intro,
          .ps-web-shot--hero,
          .ps-web-shot--wide,
          .ps-web-shot--wide-right,
          .ps-web-shot--mid,
          .ps-web-shot--narrow-left,
          .ps-web-shot--narrow-right {
            width: 100%;
          }

          .ps-campaign-title { white-space: normal; }

          .next-project { padding: 56px var(--pad); }
          .next-card {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 20px;
          }
          .next-preview {
            width: min(100%, 520px);
          }
          .next-arrow {
            font-size: 28px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .next-preview img,
          .next-title,
          .next-arrow,
          .ps-pub-link,
          .ps-motion-frame {
            transition: none !important;
          }
          .next-card:hover .next-preview img,
          .next-card:focus-visible .next-preview img,
          .next-card:hover .next-arrow,
          .next-card:focus-visible .next-arrow {
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}

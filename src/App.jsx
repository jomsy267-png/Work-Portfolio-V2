import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'
import Footer from './components/Footer'
import { getProject, projects } from './data/projects'

import { PageLoadWipe } from './components/PanelWipe'

const SITE_URL = 'https://workbyw.com'
const SITE_TITLE = 'Jomil Shah — Graphic Designer · Print & Digital Visual Communication'
const SITE_DESCRIPTION = 'Jomil Shah is a print and digital graphic designer based in Edmonton, creating brand identities, campaigns, publications, and visual systems across physical and digital media.'

function absoluteUrl(path) {
  if (!path) return SITE_URL
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function setMeta(name, value, attr = 'name') {
  if (!value) return
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

function setLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    const projectMatch = pathname.match(/^\/work\/([^/]+)$/)
    const project = projectMatch ? getProject(projectMatch[1]) : null
    const isWork = pathname === '/work'
    const isHome = pathname === '/'
    const isNotFound = !isHome && !isWork && (!projectMatch || !project)

    let title = SITE_TITLE
    let description = SITE_DESCRIPTION
    let image = projects[0]?.posterImage || projects[0]?.cover || projects[0]?.hero
    let type = 'website'

    if (isWork) {
      title = `All Work — ${SITE_TITLE}`
      description = 'A curated archive of brand identity, campaign, editorial, packaging, motion, and digital design work by Jomil Shah.'
    } else if (project) {
      title = `${project.title} — Jomil Shah Portfolio`
      description = project.description || `${project.title}, a ${project.categoryShort || project.category} project by Jomil Shah.`
      image = project.socialImage || project.posterImage || project.cover || project.hero
      type = 'article'
    } else if (isNotFound) {
      title = `Page Not Found — ${SITE_TITLE}`
      description = 'The requested portfolio page could not be found. Return to the work archive or homepage.'
    }

    const canonicalPath = isNotFound ? '/404' : pathname
    const canonical = absoluteUrl(canonicalPath)
    const socialImage = absoluteUrl(image)

    document.title = title
    setMeta('description', description)
    setMeta('robots', isNotFound ? 'noindex,follow' : 'index,follow')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:image', socialImage, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', socialImage)
    setLink('canonical', canonical)
  }, [location.pathname])

  return null
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { delay: 0.8, duration: 0 } }, // wait for wipe to cover
}

function PageWrapper({ children }) {
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0.12 } },
      }
    : pageVariants

  return (
    <>
      <PageLoadWipe />
      <motion.div
        variants={variants}
        initial={prefersReducedMotion ? false : 'initial'}
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  )
}

function NotFoundPage() {
  return (
    <PageWrapper>
      <main id="main-content" className="not-found-page">
        <section className="not-found-inner" aria-labelledby="not-found-title">
          <p className="not-found-label">\ 404</p>
          <h1 id="not-found-title">Page Not Found</h1>
          <p>The page you requested is not available. Use the work archive to continue through the portfolio.</p>
          <Link to="/work" className="not-found-link">View All Work</Link>
        </section>
      </main>
      <Footer minimal />
      <style>{`
        .not-found-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 140px var(--pad) 80px;
        }
        .not-found-inner {
          max-width: 680px;
        }
        .not-found-label {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .not-found-inner h1 {
          font-family: var(--fd);
          font-size: clamp(52px, 10vw, 132px);
          font-weight: 700;
          letter-spacing: -.04em;
          line-height: .88;
          text-transform: uppercase;
          margin-bottom: 26px;
        }
        .not-found-inner p {
          color: var(--muted);
          max-width: 480px;
          line-height: 1.7;
        }
        .not-found-link {
          display: inline-block;
          margin-top: 36px;
          font-family: var(--fd);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .03em;
          text-transform: uppercase;
          border: 1px solid rgba(207,207,207,.28);
          padding: 12px 18px;
          transition: border-color .25s ease, color .25s ease;
        }
        .not-found-link:hover,
        .not-found-link:focus-visible {
          border-color: var(--light);
          color: var(--light);
        }
        .not-found-link:focus-visible {
          outline: 1px solid rgba(207,207,207,.78);
          outline-offset: 5px;
        }
        @media (prefers-reduced-motion: reduce) {
          .not-found-link { transition: none; }
        }
      `}</style>
    </PageWrapper>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <SeoManager />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Cursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/work" element={<PageWrapper><WorkPage /></PageWrapper>} />
          <Route path="/work/:slug" element={<PageWrapper><ProjectPage /></PageWrapper>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

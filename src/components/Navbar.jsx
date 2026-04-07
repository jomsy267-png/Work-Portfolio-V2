import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function useClock() {
  const [clock, setClock] = useState({ time: '', tz: '', available: true })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const offset = -now.getTimezoneOffset() / 60
      const sign = offset >= 0 ? '+' : ''
      const available = now.getHours() >= 9 && now.getHours() < 18
      setClock({ time: `${h}:${m}`, tz: `GMT${sign}${offset}`, available })
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return clock
}

export default function Navbar({ isProject = false, heroMode = false }) {
  const { time, tz, available } = useClock()
  const location = useLocation()
  const isHome = location.pathname === '/'

  // When in heroMode, track scroll to switch from mid-hero → sticky top
  const [scrolledPast, setScrolledPast] = useState(false)
  useEffect(() => {
    if (!heroMode) return
    const handleScroll = () => {
      setScrolledPast(window.scrollY > window.innerHeight * 0.42)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [heroMode])

  // heroMode: absolute at 44% until scrolled, then fixed at top
  const isFixed = !heroMode || scrolledPast

  return (
    <motion.nav
      className={`navbar${heroMode ? (scrolledPast ? ' navbar-fixed' : ' navbar-hero') : ''}`}
      aria-label="Main navigation"
      initial={{ opacity: 0, y: heroMode ? 12 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: heroMode ? 0.4 : 0 }}
    >
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-brand" aria-label="Jomil Shah — go to homepage">JS.</Link>
          {!isProject ? (
            <div className="nav-links">
              <div className="nav-links-row">
                <a href={isHome ? '#whispers' : '/#whispers'} className="nav-link"><span className="nav-slash">\</span> Whispers</a>
                <a href={isHome ? '#about' : '/#about'} className="nav-link"><span className="nav-slash">\</span> About</a>
                <a href={isHome ? '#work' : '/#work'} className="nav-link"><span className="nav-slash">\</span> Work</a>
              </div>
              <span className="nav-greeting">Hi, I'm Jomil — graphic designer based in Edmonton :)</span>
            </div>
          ) : (
            <Link to="/work" className="nav-back"><span className="nav-slash">\</span> All Work</Link>
          )}
        </div>
        <div className="nav-right">
          {!isProject && <a href={isHome ? '#contact' : '/#contact'} className="nav-link"><span className="nav-slash">\</span> Contact</a>}
          <div className="nav-clock-area">
            <span className="nav-time">{time}</span>
            <span className="nav-tz">{tz}</span>
            <div className="nav-status">
              <span className={`nav-status-dot${available ? '' : ' off'}`} />
              <span className="nav-status-text" style={{ color: available ? '#4ade80' : '#ff004d' }}>
                {available ? 'Available' : 'Off Work'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(207,207,207,.15);
          background: rgba(26,26,26,.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Mid-hero position — transparent, no background */
        .navbar.navbar-hero {
          position: absolute;
          top: 44%;
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        /* After scrolling past hero — snap to top, opaque */
        .navbar.navbar-fixed {
          position: fixed;
          top: 0;
          background: rgba(26,26,26,.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(207,207,207,.12);
          animation: navSlideDown .3s ease forwards;
        }
        @keyframes navSlideDown {
          from { transform: translateY(-8px); opacity: 0.7; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .nav-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: 14px var(--pad);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-left { display: flex; align-items: center; gap: 24px; }
        .nav-brand {
          font-family: var(--fd);
          font-size: 16px; font-weight: 600;
          letter-spacing: -.01em;
          text-transform: uppercase;
          transition: opacity .3s;
        }
        .nav-brand:hover { opacity: .7; }

        .nav-links { display: flex; flex-direction: column; gap: 3px; }
        .nav-links-row { display: flex; align-items: center; gap: 20px; }

        .nav-slash { color: rgba(207,207,207,.35); margin-right: 1px; }
        .nav-link {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .01em;
          text-transform: uppercase;
          transition: color .3s;
          color: var(--muted);
          display: inline-flex; align-items: center; gap: 0;
        }
        .nav-link:hover { color: var(--light); }
        .nav-link:hover .nav-slash { color: rgba(207,207,207,.7); }

        /* In hero (transparent) mode, nav links are white */
        .navbar-hero .nav-link,
        .navbar-hero .nav-brand,
        .navbar-hero .nav-time,
        .navbar-hero .nav-tz,
        .navbar-hero .nav-status-text,
        .navbar-hero .nav-greeting {
          color: rgba(255,255,255,.75);
        }
        .navbar-hero .nav-slash { color: rgba(255,255,255,.3); }
        .navbar-hero .nav-link:hover { color: #fff; }
        .navbar-hero .nav-link:hover .nav-slash { color: rgba(255,255,255,.7); }

        .nav-back {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .01em;
          text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          color: var(--muted);
          transition: color .3s;
        }
        .nav-back:hover { color: var(--light); }

        .nav-greeting {
          font-family: var(--fm);
          font-size: 11px;
          color: rgba(140,140,140,.6);
          letter-spacing: .01em;
        }
        .nav-right { display: flex; align-items: center; gap: 20px; }
        .nav-clock-area { display: flex; align-items: center; gap: 10px; }
        .nav-time, .nav-tz {
          font-family: var(--fm);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: .02em;
        }
        .nav-status { display: flex; align-items: center; gap: 6px; }
        .nav-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }
        .nav-status-dot.off { background: #ff004d; }
        .nav-status-text {
          font-family: var(--fm);
          font-size: 12px;
          letter-spacing: .02em;
          text-transform: uppercase;
        }
        @media (max-width: 809px) {
          .nav-inner { flex-direction: column; gap: 10px; align-items: flex-start; }
          .nav-right { width: 100%; justify-content: space-between; }
          .nav-greeting { display: none; }
          .navbar.navbar-hero { top: 40%; }
        }
      `}</style>
    </motion.nav>
  )
}

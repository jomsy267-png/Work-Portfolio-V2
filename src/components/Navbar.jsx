import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function useClock() {
  const [clock, setClock] = useState({ time: '', tz: '', available: true, seconds: 0, minutes: 0 })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const offset = -now.getTimezoneOffset() / 60
      const sign = offset >= 0 ? '+' : ''
      const available = now.getHours() >= 9 && now.getHours() < 18
      setClock({ time: `${h}:${m}`, tz: `GMT${sign}${offset}`, available, seconds: now.getSeconds(), minutes: now.getMinutes() })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return clock
}

/* Analog clock — 12 ticks, one live hand */
function AnalogClock({ seconds, minutes, available }) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30)
  // smooth hand: degrees based on seconds within the current minute
  const handDeg = ((minutes % 60) / 60) * 360 + (seconds / 60) * 6

  return (
    <div style={{ width: 32, height: 32, position: 'relative', borderRadius: '50%', flexShrink: 0 }}>
      {ticks.map((deg) => (
        <div
          key={deg}
          style={{
            position: 'absolute',
            width: 1,
            height: 16,
            backgroundColor: 'var(--token-surface, rgb(207,207,207))',
            top: 0,
            left: '50%',
            transformOrigin: '50% 16px',
            transform: `translateX(-50%) rotate(${deg}deg)`,
            opacity: 0.35,
          }}
        />
      ))}
      {/* Live hand */}
      <div
        style={{
          position: 'absolute',
          width: 1,
          height: 16,
          backgroundColor: available ? 'rgb(37, 204, 102)' : '#ff004d',
          top: 0,
          left: '50%',
          transformOrigin: '50% 16px',
          zIndex: 10,
          willChange: 'transform',
          transform: `translateX(-50%) rotate(${handDeg}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
        }}
      />
    </div>
  )
}

export default function Navbar({ isProject = false, heroMode = false }) {
  const { time, tz, available, seconds, minutes } = useClock()
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

  const navFade = (delay) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <nav
      className={`navbar${heroMode ? (scrolledPast ? ' navbar-fixed' : ' navbar-hero') : ''}`}
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <div className="nav-left">
          <motion.div {...navFade(0.1)}>
            <Link to="/" className="nav-brand" aria-label="Jomil Shah — go to homepage">
              <span className="roll-wrap"><span>JS.</span><span aria-hidden="true">JS.</span></span>
            </Link>
          </motion.div>
          {!isProject ? (
            <div className="nav-links">
              <div className="nav-links-row">
                {['Whispers','About','Work'].map((label, i) => (
                  <motion.a
                    key={label}
                    href={isHome ? `#${label.toLowerCase()}` : `/#${label.toLowerCase()}`}
                    className="nav-link"
                    {...navFade(0.18 + i * 0.07)}
                  >
                    <span className="nav-slash">\</span>
                    <span className="roll-wrap">
                      <span>{label}</span>
                      <span aria-hidden="true">{label}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.span className="nav-greeting" {...navFade(0.42)}>
                Hi, I'm Jomil — graphic designer based in Edmonton :)
              </motion.span>
            </div>
          ) : (
            <motion.div {...navFade(0.15)}>
              <Link to="/work" className="nav-back">
                <span className="nav-slash">\</span>
                <span className="roll-wrap"><span>All Work</span><span aria-hidden="true">All Work</span></span>
              </Link>
            </motion.div>
          )}
        </div>
        <div className="nav-right">
          {!isProject && (
            <motion.a
              href={isHome ? '#contact' : '/#contact'}
              className="nav-link"
              {...navFade(0.38)}
            >
              <span className="nav-slash">\</span>
              <span className="roll-wrap"><span>Contact</span><span aria-hidden="true">Contact</span></span>
            </motion.a>
          )}
          <motion.div className="nav-clock-area" {...navFade(0.44)}>
            <span className="nav-time">{time}</span>
            <span className="nav-tz">{tz}</span>
            <div className="nav-status">
              <span className="nav-status-text" style={{ color: available ? '#4ade80' : '#ff004d' }}>
                {available ? 'Available' : 'Off Work'}
              </span>
            </div>
            <AnalogClock seconds={seconds} minutes={minutes} available={available} />
          </motion.div>
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
          display: inline-flex;
          align-items: center;
        }

        .nav-links { display: flex; flex-direction: column; gap: 3px; }
        .nav-links-row { display: flex; align-items: center; gap: 20px; }

        .nav-slash {
          color: rgba(207,207,207,.35);
          margin-right: 1px;
          transition: color .35s ease;
          flex-shrink: 0;
        }
        .nav-link {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .01em;
          text-transform: uppercase;
          color: var(--muted);
          display: inline-flex; align-items: center; gap: 0;
          transition: color .35s ease;
        }
        .nav-link:hover { color: var(--light); }
        .nav-link:hover .nav-slash { color: rgba(207,207,207,.7); }

        /* Roll effect — overflow clips to 1 line, duplicate slides up on hover */
        .roll-wrap {
          display: inline-flex;
          flex-direction: column;
          overflow: hidden;
          height: 1.15em;
          line-height: 1.15;
        }
        .roll-wrap span {
          display: block;
          line-height: 1.15;
          flex-shrink: 0;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover .roll-wrap span,
        .nav-brand:hover .roll-wrap span,
        .nav-back:hover .roll-wrap span {
          transform: translateY(-100%);
        }

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
          display: inline-flex; align-items: center; gap: 2px;
          color: var(--muted);
          transition: color .35s ease;
        }
        .nav-back:hover { color: var(--light); }
        .nav-back:hover .nav-slash { color: rgba(207,207,207,.7); }

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
    </nav>
  )
}

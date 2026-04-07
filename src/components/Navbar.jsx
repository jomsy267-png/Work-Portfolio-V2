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

export default function Navbar({ isProject = false }) {
  const { time, tz, available } = useClock()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-brand">JS.</Link>
          {!isProject ? (
            <div className="nav-links">
              <div className="nav-links-row">
                <a href={isHome ? '#whispers' : '/#whispers'} className="nav-link">Whispers</a>
                <a href={isHome ? '#about' : '/#about'} className="nav-link">About</a>
                <a href={isHome ? '#work' : '/#work'} className="nav-link">Work</a>
              </div>
              <span className="nav-greeting">Hi, I'm Jomil — graphic designer based in Edmonton :)</span>
            </div>
          ) : (
            <Link to="/work" className="nav-back">← All Work</Link>
          )}
        </div>
        <div className="nav-right">
          {!isProject && <a href={isHome ? '#contact' : '/#contact'} className="nav-link">Contact</a>}
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
        }
        .nav-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: 16px var(--pad);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-left { display: flex; align-items: center; gap: 16px; }
        .nav-brand {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
          transition: opacity .3s;
        }
        .nav-brand:hover { opacity: .7; }
        .nav-links { display: flex; flex-direction: column; gap: 4px; }
        .nav-links-row { display: flex; align-items: center; gap: 8px; }
        .nav-link {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
          transition: opacity .3s;
        }
        .nav-link:hover { opacity: .6; }
        .nav-back {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          transition: opacity .3s;
        }
        .nav-back:hover { opacity: .6; }
        .nav-greeting {
          font-family: var(--fa);
          font-size: 14px;
          color: var(--muted);
        }
        .nav-right { display: flex; align-items: center; gap: 12px; }
        .nav-clock-area { display: flex; align-items: center; gap: 8px; }
        .nav-time, .nav-tz {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
        }
        .nav-status { display: flex; align-items: center; gap: 6px; }
        .nav-status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
        }
        .nav-status-dot.off { background: #ff004d; }
        .nav-status-text {
          font-family: var(--fd);
          font-size: 18px; font-weight: 500;
          letter-spacing: -.02em;
          text-transform: uppercase;
        }
        @media (max-width: 809px) {
          .nav-inner { flex-direction: column; gap: 10px; align-items: flex-start; }
          .nav-right { width: 100%; justify-content: space-between; }
          .nav-greeting { display: none; }
        }
      `}</style>
    </motion.nav>
  )
}

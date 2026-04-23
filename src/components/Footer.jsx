import { Link } from 'react-router-dom'

export default function Footer({ minimal = false }) {
  if (minimal) {
    return (
      <footer className="footer-minimal">
        <span className="footer-copy">© {new Date().getFullYear()} Jomil Shah. All Rights Reserved.</span>
        <Link to="/" className="footer-brand-link">JS.</Link>
        <style>{`
          .footer-minimal {
            padding: 48px var(--pad);
            max-width: var(--max);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(207,207,207,.08);
          }
          .footer-copy { font-family: var(--fm); font-size: 11px; color: var(--muted); }
          .footer-brand-link {
            font-family: var(--fd);
            font-size: 18px; font-weight: 500;
            letter-spacing: -.02em;
            text-transform: uppercase;
            transition: opacity .3s;
          }
          .footer-brand-link:hover { opacity: .7; }
        `}</style>
      </footer>
    )
  }

  return (
    <footer className="footer" id="contact">
      <div className="grid-8">
        <div className="footer-brand">
          <div className="footer-logo">JS.</div>
          <p className="footer-tagline">Print &amp; digital design,<br />carefully executed.</p>
        </div>
        <div className="footer-nav">
          <p className="footer-nav-title">Navigate</p>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skillset">Skillset</a></li>
            <li><Link to="/work">All Projects</Link></li>
          </ul>
        </div>
        <div className="footer-nav">
          <p className="footer-nav-title">Contact</p>
          <ul>
            <li><a href="mailto:jomilshah@outlook.com">jomilshah@outlook.com</a></li>
            <li><a href="https://jomsy267.myportfolio.com" target="_blank" rel="noreferrer">myportfolio.com</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <p className="footer-nav-title">Follow</p>
          <div className="footer-socials-list">
            <a href="https://jomsy267.myportfolio.com" target="_blank" rel="noreferrer">Portfolio</a>
            <a href="https://www.linkedin.com/in/jomilshah" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/jomilshah" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© {new Date().getFullYear()} Jomil Shah. All Rights Reserved.</span>
          <span className="footer-credit">Built with care</span>
        </div>
      </div>
      <style>{`
        .footer {
          padding: 80px 0 40px;
          border-top: 1px solid rgba(207,207,207,.1);
        }
        .footer .grid-8 { align-items: start; }
        .footer-brand { grid-column: span 2; }
        .footer-logo {
          font-family: var(--fd);
          font-size: 24px; font-weight: 700;
          letter-spacing: -.02em;
          margin-bottom: 16px;
        }
        .footer-tagline { font-size: 13px; color: var(--muted); line-height: 1.65; }
        .footer-nav { grid-column: span 2; }
        .footer-socials { grid-column: span 2; }
        .footer-nav-title {
          font-family: var(--fm);
          font-size: 11px;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: rgba(140,140,140,.6);
          margin-bottom: 20px;
        }
        .footer-nav ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-nav ul li a { font-family: var(--fd); font-size: 13px; font-weight: 500; letter-spacing: .01em; text-transform: uppercase; color: var(--muted); transition: color .3s; }
        .footer-nav ul li a:hover { color: var(--light); }
        .footer-socials-list { display: flex; flex-direction: column; gap: 12px; margin-top: 0; }
        .footer-socials-list a {
          font-family: var(--fd);
          font-size: 13px; font-weight: 500;
          letter-spacing: .01em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color .3s;
        }
        .footer-socials-list a:hover { color: var(--light); }
        .footer-bottom {
          grid-column: span 8;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 80px;
          padding-top: 24px;
          border-top: 1px solid rgba(207,207,207,.08);
        }
        .footer-copyright { font-family: var(--fm); font-size: 11px; color: var(--muted); letter-spacing: .02em; }
        .footer-credit { font-family: var(--fm); font-size: 11px; color: rgba(140,140,140,.4); letter-spacing: .02em; }
        @media (max-width: 809px) {
          .footer .grid-8 { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-brand, .footer-nav, .footer-socials { grid-column: span 1; }
          .footer-bottom { grid-column: span 2; flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer .grid-8 { grid-template-columns: 1fr; }
          .footer-brand, .footer-nav, .footer-socials { grid-column: span 1; }
          .footer-bottom { grid-column: span 1; }
        }
      `}</style>
    </footer>
  )
}

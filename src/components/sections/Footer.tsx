'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'

export default function Footer() {
  return (
    <footer id="contact" style={{ paddingTop: 80, paddingBottom: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div
        className="max-w-[1280px] mx-auto px-3 items-start"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(8,minmax(0,1fr))', gap: 12 }}
      >
        {/* Brand */}
        <FadeUp className="col-span-2">
          <div className="fd text-[36px] font-bold tracking-[-0.03em] text-[var(--light)] mb-4">JS.</div>
          <p className="text-[13px] text-[var(--muted)] leading-[1.6]">
            Print &amp; digital design,<br />carefully executed.
          </p>
        </FadeUp>

        {/* Navigate */}
        <FadeUp delay={0.05} className="col-span-2">
          <p className="fd text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--light)] mb-5">Navigate</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['About', '/#about'], ['Work', '/work'], ['Services', '/#services']].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-[14px] text-[var(--muted)] hover:text-[var(--light)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </FadeUp>

        {/* Contact */}
        <FadeUp delay={0.1} className="col-span-2">
          <p className="fd text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--light)] mb-5">Contact</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li>
              <a href="mailto:jomilshah@outlook.com" className="text-[14px] text-[var(--muted)] hover:text-[var(--light)] transition-colors">
                jomilshah@outlook.com
              </a>
            </li>
            <li>
              <a href="https://jomsy267.myportfolio.com" target="_blank" rel="noreferrer" className="text-[14px] text-[var(--muted)] hover:text-[var(--light)] transition-colors">
                myportfolio.com
              </a>
            </li>
          </ul>
        </FadeUp>

        {/* Follow */}
        <FadeUp delay={0.15} className="col-span-2">
          <p className="fd text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--light)] mb-5">Follow</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[['Portfolio', 'https://jomsy267.myportfolio.com'], ['LinkedIn', '#'], ['Behance', '#']].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="fd text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--muted)] hover:text-[var(--light)] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Bottom bar */}
        <div
          className="col-span-8 flex justify-between items-center"
          style={{ marginTop: 80, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span className="text-[12px] text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Jomil Shah. All Rights Reserved.
          </span>
          <span className="text-[12px]" style={{ color: 'rgba(140,140,140,0.5)' }}>
            Built with Next.js &amp; Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}

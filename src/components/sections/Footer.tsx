'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-white/[0.1]">
      <div className="max-w-[1280px] mx-auto px-3 grid grid-cols-8 gap-3 items-start">
        <FadeUp className="col-span-2">
          <div className="font-[family-name:var(--font-display)] text-[36px] font-bold tracking-[-0.03em] text-[--light] mb-4">JS.</div>
          <p className="text-[13px] text-[--muted] leading-[1.6]">Print &amp; digital design,<br />carefully executed.</p>
        </FadeUp>

        <FadeUp delay={0.05} className="col-span-2">
          <p className="font-[family-name:var(--font-display)] text-[12px] font-semibold tracking-[0.08em] uppercase text-[--light] mb-5">Navigate</p>
          <ul className="flex flex-col gap-2.5">
            {[['About', '/#about'], ['Work', '/work'], ['Services', '/#services']].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-[14px] text-[--muted] hover:text-[--light] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1} className="col-span-2">
          <p className="font-[family-name:var(--font-display)] text-[12px] font-semibold tracking-[0.08em] uppercase text-[--light] mb-5">Contact</p>
          <ul className="flex flex-col gap-2.5">
            <li><a href="mailto:jomilshah@outlook.com" className="text-[14px] text-[--muted] hover:text-[--light] transition-colors">jomilshah@outlook.com</a></li>
            <li><a href="https://jomsy267.myportfolio.com" target="_blank" className="text-[14px] text-[--muted] hover:text-[--light] transition-colors">myportfolio.com</a></li>
          </ul>
        </FadeUp>

        <FadeUp delay={0.15} className="col-span-2">
          <p className="font-[family-name:var(--font-display)] text-[12px] font-semibold tracking-[0.08em] uppercase text-[--light] mb-5">Follow</p>
          <div className="flex gap-5">
            {[['Portfolio', 'https://jomsy267.myportfolio.com'], ['LinkedIn', '#'], ['Behance', '#']].map(([label, href]) => (
              <a key={label} href={href} target="_blank" className="font-[family-name:var(--font-display)] text-[13px] font-medium tracking-[0.04em] uppercase text-[--muted] hover:text-[--light] transition-colors">{label}</a>
            ))}
          </div>
        </FadeUp>

        <div className="col-span-8 flex justify-between items-center mt-20 pt-6 border-t border-white/[0.1]">
          <span className="text-[12px] text-[--muted]">&copy; {new Date().getFullYear()} Jomil Shah. All Rights Reserved.</span>
          <span className="text-[12px] text-[rgba(140,140,140,0.5)]">Built with Next.js &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}

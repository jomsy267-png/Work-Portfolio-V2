'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'

export default function AboutSection() {
  return (
    <section id="about" className="py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-3 items-start"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(8,minmax(0,1fr))', gap: 12 }}
      >
        <FadeUp delay={0} className="col-span-2 pt-1">
          <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)]">
            \ About
          </span>
        </FadeUp>

        <FadeUp delay={0.1} className="col-span-4">
          <h2
            className="fd font-medium tracking-[-0.02em] leading-[1.25] text-[var(--light)] mb-6"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            A versatile print and digital graphic designer focused on visual communication and creative execution.
          </h2>
          <p className="text-[15px] leading-[1.7] text-[var(--muted)] max-w-[540px] mb-10">
            I work with brands, agencies, and organisations to craft identities, publications, packaging, and campaigns that resonate. From concept to final production — every detail is considered.
          </p>
          <Link
            href="/about"
            className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)] hover:opacity-60 transition-opacity"
          >
            Read About Me
          </Link>
        </FadeUp>

        <FadeUp delay={0.2} className="col-span-2 flex flex-col gap-3 pt-1">
          {[['Since', '2018'], ['Projects', '20+'], ['Disciplines', '8'], ['Based In', 'Edmonton']].map(
            ([label, val]) => (
              <div key={label} className="flex justify-between text-[11px] text-[var(--muted)]"
                style={{ fontFamily: "var(--font-mono), 'Fragment Mono', monospace" }}>
                <span>{label}</span>
                <span className="fd font-semibold text-[14px] text-[var(--light)]">{val}</span>
              </div>
            )
          )}
        </FadeUp>
      </div>
    </section>
  )
}

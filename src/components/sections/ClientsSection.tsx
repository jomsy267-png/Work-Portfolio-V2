'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  'APEGA', 'Ballet Edmonton', 'Odvod Media Inc.', 'Edmonton Community Foundation',
  'CEA', 'University of Alberta', 'Runway Footwear', 'Odd. Brewing Company',
  'Page The Cleaners', 'Edify',
]

export default function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-[1280px] mx-auto px-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)] mb-10"
        >
          \ Selected Clients
        </motion.p>
        <p className="fd text-[clamp(14px,2vw,18px)] font-[400] text-[var(--muted)] leading-[2.2]">
          {clients.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="hover:text-[var(--light)] transition-colors cursor-default"
            >
              {c}{i < clients.length - 1 && <span style={{ color: 'rgba(207,207,207,0.2)' }}> · </span>}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}

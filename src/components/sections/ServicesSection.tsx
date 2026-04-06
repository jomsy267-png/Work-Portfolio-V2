'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'Brand Identity',
    description:
      'I start by understanding your brand, your market, and your audience. Through considered research and strategy, I uncover the insights that form the foundation of a cohesive visual identity.',
    list: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Stationery', 'Art Direction'],
  },
  {
    title: 'Print Design',
    description:
      'From publication art direction to packaging and environmental graphics — I bring brands to life in the physical world with print craft that is both purposeful and beautiful.',
    list: ['Packaging', 'Publications', 'Posters & Banners', 'Environmental Design', 'Signage'],
  },
  {
    title: 'Digital Design',
    description:
      'I craft digital touchpoints that extend and reinforce your brand — social media systems, campaign assets, animated content, and UI design that resonates across every screen.',
    list: ['Social Media', 'Campaign Design', 'Motion & Animation', 'UI Design', 'Digital Ads'],
  },
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollable = el.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      setActiveIndex(Math.min(services.length - 1, Math.floor(progress * services.length)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const service = services[activeIndex]

  return (
    <section ref={containerRef} className="relative" style={{ minHeight: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-3 w-full">
          {/* Label */}
          <div className="mb-20">
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light]">
              \ What I Do
            </span>
          </div>

          {/* Counter */}
          <p className="font-[family-name:var(--font-mono)] text-[12px] text-[--muted] mb-3">
            <motion.span key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              0{activeIndex + 1}
            </motion.span>
            {' '}/ 0{services.length}
          </p>

          {/* Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[--light] leading-[1] mb-6"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
              >
                {service.title}
              </h2>
              <p className="text-[15px] leading-[1.7] text-[--muted] max-w-[500px] mb-8">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.list.map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.04em] uppercase px-4 py-1.5 border border-white/[0.12] rounded-full text-[--muted]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {services.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  background: i === activeIndex ? 'var(--accent)' : 'rgba(207,207,207,0.15)',
                  scale: i === activeIndex ? 1.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

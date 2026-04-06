'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

const featured = projects.slice(0, 6)
const rows: [number, number][] = [[4, 3], [2, 3], [3, 2]]
const aspectRatios: [[number, number], [number, number], [number, number]] = [
  [1.498, 1.778],
  [1.415, 1.5],
  [1.5,   1.5],
]

function WorkCard({
  slug, title, category, thumbnail, aspectRatio, index,
}: {
  slug: string; title: string; category: string
  thumbnail: string; aspectRatio: number; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link href={`/work/${slug}`} className="group block">
        {/* Image container */}
        <div
          className="w-full overflow-hidden relative"
          style={{ aspectRatio, background: 'var(--dark)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-90"
            loading="lazy"
          />
        </div>
        {/* Card info */}
        <div className="flex flex-row items-start gap-2 pt-1.5">
          <div className="flex items-center shrink-0">
            <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)]">\</span>
            <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)] ml-0.5">{title}</span>
          </div>
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)]">\</span>
            <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--surface)] truncate">{category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function WorkSection() {
  let cardIndex = 0

  return (
    <section id="work" className="pb-20">
      {/* Header */}
      <motion.div
        className="flex justify-center items-center py-6 px-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)]">
          \ Featured Work
        </span>
      </motion.div>

      {/* 8-col grid → 7-col cards area */}
      <div className="max-w-[1280px] mx-auto px-3 pt-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,minmax(0,1fr))', gap: 12 }}>
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {rows.map(([span1, span2], rowIdx) => {
              const card1 = featured[rowIdx * 2]
              const card2 = featured[rowIdx * 2 + 1]
              const i1 = cardIndex++
              const i2 = cardIndex++
              return (
                <div
                  key={rowIdx}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(7,minmax(0,1fr))', gap: 12 }}
                >
                  {card1 && (
                    <div style={{ gridColumn: `span ${span1}` }}>
                      <WorkCard slug={card1.slug} title={card1.title} category={card1.category}
                        thumbnail={card1.thumbnail} aspectRatio={aspectRatios[rowIdx][0]} index={i1} />
                    </div>
                  )}
                  {card2 && (
                    <div style={{ gridColumn: `span ${span2}` }}>
                      <WorkCard slug={card2.slug} title={card2.title} category={card2.category}
                        thumbnail={card2.thumbnail} aspectRatio={aspectRatios[rowIdx][1]} index={i2} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="max-w-[1280px] mx-auto px-3 mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/work" className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)] hover:opacity-60 transition-opacity">
          View All Work
        </Link>
      </motion.div>
    </section>
  )
}

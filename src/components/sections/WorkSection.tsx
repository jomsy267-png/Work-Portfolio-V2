'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/projects'

const featured = projects.slice(0, 6)

// Grid layout: row configs [col-span for card1, col-span for card2]
const rows: [number, number][] = [[4, 3], [2, 3], [3, 2]]
// Aspect ratios per row
const aspectRatios: [[number, number], [number, number], [number, number]] = [
  [1.498, 1.778],
  [1.415, 1.5],
  [1.5, 1.5],
]

function WorkCard({
  slug,
  title,
  category,
  thumbnail,
  aspectRatio,
  index,
}: {
  slug: string
  title: string
  category: string
  thumbnail: string
  aspectRatio: number
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link href={`/work/${slug}`} className="group block">
        {/* Image */}
        <div
          className="w-full overflow-hidden bg-[--dark] relative"
          style={{ aspectRatio }}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width:809px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:brightness-90"
          />
        </div>
        {/* Info */}
        <div className="flex flex-row items-start gap-2 pt-1">
          <div className="flex items-center">
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light]">\</span>
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] ml-0.5">{title}</span>
          </div>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light]">\</span>
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--surface] truncate">{category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function WorkSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  let cardIndex = 0

  return (
    <section id="work" className="pb-20">
      {/* Header */}
      <div ref={headerRef} className="flex justify-center items-center py-6 px-3">
        <motion.span
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] before:content-['\\\\'] before:mr-1.5"
        >
          Featured Work
        </motion.span>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-3 pt-16">
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-7 flex flex-col gap-6">
            {rows.map(([span1, span2], rowIdx) => {
              const card1 = featured[rowIdx * 2]
              const card2 = featured[rowIdx * 2 + 1]
              const i1 = cardIndex++
              const i2 = cardIndex++
              return (
                <div
                  key={rowIdx}
                  className="grid gap-3"
                  style={{ gridTemplateColumns: `repeat(7, minmax(0, 1fr))` }}
                >
                  {card1 && (
                    <div style={{ gridColumn: `span ${span1}` }}>
                      <WorkCard
                        slug={card1.slug}
                        title={card1.title}
                        category={card1.category}
                        thumbnail={card1.thumbnail}
                        aspectRatio={aspectRatios[rowIdx][0]}
                        index={i1}
                      />
                    </div>
                  )}
                  {card2 && (
                    <div style={{ gridColumn: `span ${span2}` }}>
                      <WorkCard
                        slug={card2.slug}
                        title={card2.title}
                        category={card2.category}
                        thumbnail={card2.thumbnail}
                        aspectRatio={aspectRatios[rowIdx][1]}
                        index={i2}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        className="max-w-[1280px] mx-auto px-3 mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/work"
          className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hover:opacity-60 transition-opacity"
        >
          View All Work
        </Link>
      </motion.div>
    </section>
  )
}

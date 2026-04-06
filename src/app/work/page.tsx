'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        {/* Page header */}
        <div className="max-w-[1280px] mx-auto px-3 pt-36 pb-16 grid grid-cols-8 gap-3 items-end">
          <motion.h1
            className="col-span-5 font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] uppercase leading-[0.9] text-[--light]"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Selected<br />Work
          </motion.h1>
          <motion.div
            className="col-span-3 flex flex-col gap-2 pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[12px] text-[--muted]">0{projects.length} Projects</p>
            <p className="text-[14px] text-[--muted] leading-[1.6]">Brand identities, campaigns, publications, and visual systems — across print and digital.</p>
          </motion.div>
        </div>

        {/* Project list */}
        <div className="max-w-[1280px] mx-auto px-3 border-t border-white/[0.12] pb-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-8 gap-3 py-8 border-b border-white/[0.08] items-center hover:opacity-80 transition-opacity"
              >
                <span className="col-span-1 font-[family-name:var(--font-mono)] text-[11px] text-[--muted] tracking-[0.04em]">
                  0{i + 1}
                </span>
                <div className="col-span-2 aspect-[1.5] overflow-hidden bg-[--dark] relative">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    sizes="20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="col-span-3">
                  <p className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] uppercase text-[--light] mb-1.5"
                    style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}>
                    {p.title}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-[14px] uppercase tracking-[-0.01em] text-[--muted]">{p.category}</p>
                </div>
                <div className="col-span-2 flex flex-wrap gap-1.5 justify-end">
                  {p.deliverables.slice(0, 3).map((d) => (
                    <span key={d} className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.04em] uppercase px-2.5 py-1 border border-white/[0.12] rounded-full text-[--muted]">
                      {d}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

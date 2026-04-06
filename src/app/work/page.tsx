'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        {/* Page header */}
        <div
          className="max-w-[1280px] mx-auto px-3 items-end"
          style={{ paddingTop: 140, paddingBottom: 64, display: 'grid', gridTemplateColumns: 'repeat(8,minmax(0,1fr))', gap: 12 }}
        >
          <motion.h1
            className="col-span-5 fd font-bold tracking-[-0.04em] uppercase leading-[0.9] text-[var(--light)]"
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
            <p className="fmono text-[12px] text-[var(--muted)]">0{projects.length} Projects</p>
            <p className="text-[14px] text-[var(--muted)] leading-[1.6]">
              Brand identities, campaigns, publications, and visual systems — across print and digital.
            </p>
          </motion.div>
        </div>

        {/* Project list */}
        <div className="max-w-[1280px] mx-auto px-3 pb-24" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
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
                className="group items-center hover:opacity-80 transition-opacity"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(8,minmax(0,1fr))',
                  gap: 12,
                  paddingTop: 32,
                  paddingBottom: 32,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="col-span-1 fmono text-[11px] text-[var(--muted)] tracking-[0.04em] self-center">
                  0{i + 1}
                </span>
                <div
                  className="col-span-2 overflow-hidden self-center"
                  style={{ aspectRatio: 1.5, background: 'var(--dark)', position: 'relative' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-3 self-center">
                  <p
                    className="fd font-bold tracking-[-0.03em] uppercase text-[var(--light)] mb-1.5"
                    style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
                  >
                    {p.title}
                  </p>
                  <p className="fd text-[14px] uppercase tracking-[-0.01em] text-[var(--muted)]">{p.category}</p>
                </div>
                <div className="col-span-2 self-center flex flex-wrap gap-1.5 justify-end">
                  {p.deliverables.slice(0, 3).map((d) => (
                    <span
                      key={d}
                      className="fd text-[11px] tracking-[0.04em] uppercase px-2.5 py-1 rounded-full text-[var(--muted)]"
                      style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                    >
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

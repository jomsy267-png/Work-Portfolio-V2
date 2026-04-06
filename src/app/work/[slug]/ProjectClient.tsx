'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'
import FadeUp from '@/components/ui/FadeUp'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  nextProject?: Project
}

export default function ProjectClient({ project, nextProject }: Props) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 57 }}>

        {/* Hero image */}
        <motion.div
          className="w-full overflow-hidden"
          style={{ aspectRatio: 2.2, background: 'var(--dark)' }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
        </motion.div>

        {/* Project info */}
        <div
          className="max-w-[1280px] mx-auto px-3"
          style={{ paddingTop: 64, paddingBottom: 80, display: 'grid', gridTemplateColumns: 'repeat(8,minmax(0,1fr))', gap: 12 }}
        >
          {/* Left: title + description + deliverables */}
          <div className="col-span-4">
            <FadeUp>
              <p className="fmono text-[11px] text-[var(--muted)] tracking-[0.04em] uppercase mb-4">Project</p>
              <h1
                className="fd font-bold tracking-[-0.03em] leading-[1] uppercase text-[var(--light)] mb-8"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                {project.title}
              </h1>
              <p className="text-[15px] leading-[1.75] text-[var(--muted)] max-w-[480px] mb-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span
                    key={d}
                    className="fd text-[12px] tracking-[0.04em] uppercase px-3.5 py-1.5 rounded-full text-[var(--muted)]"
                    style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: meta */}
          <div className="col-span-4">
            <FadeUp delay={0.1}>
              {[
                ['Client', project.client],
                ['Category', project.category],
                ['Year', project.year],
                ...(project.meta ? Object.entries(project.meta) : []),
              ].map(([label, val]) => (
                <div key={label} style={{ marginBottom: 32 }}>
                  <p className="fmono text-[11px] text-[var(--muted)] tracking-[0.04em] uppercase mb-1.5">{label}</p>
                  <p className="fd text-[16px] font-medium tracking-[-0.01em] text-[var(--light)]">{val}</p>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1280px] mx-auto" style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />

        {/* Gallery */}
        <div className="max-w-[1280px] mx-auto px-3" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeUp>
            <p className="fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)] mb-12">
              \ Project Gallery
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
            {project.images.map((src, i) => {
              const wide = i === 0 || i % 5 === 0
              return (
                <motion.div
                  key={i}
                  style={{
                    gridColumn: wide ? 'span 2' : 'span 1',
                    aspectRatio: wide ? 2.2 : 1.4,
                    overflow: 'hidden',
                    background: 'var(--dark)',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Next project */}
        {nextProject && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <motion.div
              className="max-w-[1280px] mx-auto px-3 flex justify-between items-center"
              style={{ paddingTop: 80, paddingBottom: 80 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/work/${nextProject.slug}`} className="group">
                <p className="fmono text-[11px] text-[var(--muted)] tracking-[0.04em] uppercase mb-3">Next Project</p>
                <p
                  className="fd font-bold tracking-[-0.03em] uppercase text-[var(--light)] group-hover:opacity-60 transition-opacity"
                  style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                >
                  {nextProject.title}
                </p>
              </Link>
              <Link
                href={`/work/${nextProject.slug}`}
                className="fd text-[32px] text-[var(--muted)] hover:text-[var(--light)] transition-[color,transform] duration-300 hover:translate-x-2 inline-block"
              >
                →
              </Link>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

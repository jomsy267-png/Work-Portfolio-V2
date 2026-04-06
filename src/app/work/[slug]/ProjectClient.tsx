'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      <main className="pt-[57px]">

        {/* Hero Image */}
        <motion.div
          className="w-full overflow-hidden bg-[--dark] relative"
          style={{ aspectRatio: 2.2 }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Project Info */}
        <div className="max-w-[1280px] mx-auto px-3 py-16 grid grid-cols-8 gap-3">
          <div className="col-span-4">
            <FadeUp>
              <p className="font-[family-name:var(--font-mono)] text-[11px] text-[--muted] tracking-[0.04em] uppercase mb-4">Project</p>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] leading-[1] uppercase text-[--light] mb-8"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                {project.title}
              </h1>
              <p className="text-[15px] leading-[1.75] text-[--muted] max-w-[480px] mb-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span
                    key={d}
                    className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.04em] uppercase px-3.5 py-1.5 border border-white/[0.15] rounded-full text-[--muted]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="col-span-4 flex flex-col gap-8 pt-2">
            <FadeUp delay={0.1}>
              {[
                ['Client', project.client],
                ['Category', project.category],
                ['Year', project.year],
                ...(project.meta ? Object.entries(project.meta) : []),
              ].map(([label, val]) => (
                <div key={label} className="mb-8 last:mb-0">
                  <p className="font-[family-name:var(--font-mono)] text-[11px] text-[--muted] tracking-[0.04em] uppercase mb-1.5">{label}</p>
                  <p className="font-[family-name:var(--font-display)] text-[16px] font-medium tracking-[-0.01em] text-[--light]">{val}</p>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>

        <div className="h-px bg-white/[0.12] max-w-[1280px] mx-auto" />

        {/* Gallery */}
        <div className="max-w-[1280px] mx-auto px-3 py-20">
          <FadeUp>
            <p className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] mb-12 before:content-['\\\\'] before:mr-1.5">
              Project Gallery
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 gap-3">
            {project.images.map((src, i) => {
              const isWide = i === 0 || (i % 5 === 0)
              return (
                <motion.div
                  key={i}
                  className={`overflow-hidden bg-[--dark] relative ${isWide ? 'col-span-2' : 'col-span-1'}`}
                  style={{ aspectRatio: isWide ? 2.2 : 1.4 }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    fill
                    sizes={isWide ? '100vw' : '50vw'}
                    className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Next Project */}
        {nextProject && (
          <div className="border-t border-white/[0.12]">
            <motion.div
              className="max-w-[1280px] mx-auto px-3 py-20 flex justify-between items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/work/${nextProject.slug}`} className="group">
                <p className="font-[family-name:var(--font-mono)] text-[11px] text-[--muted] tracking-[0.04em] uppercase mb-3">Next Project</p>
                <p
                  className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] uppercase text-[--light] group-hover:opacity-60 transition-opacity"
                  style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                >
                  {nextProject.title}
                </p>
              </Link>
              <Link
                href={`/work/${nextProject.slug}`}
                className="font-[family-name:var(--font-display)] text-[32px] text-[--muted] hover:text-[--light] hover:translate-x-2 transition-[color,transform] duration-300"
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

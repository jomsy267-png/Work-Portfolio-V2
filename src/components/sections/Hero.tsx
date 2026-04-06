'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden grid grid-cols-8 gap-3 px-3 pb-3" style={{ background: '#1a1a1a' }}>
      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/workbyw/video/upload/v1741537245/W_Showreel_cdqxat.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay 25% */}
      <div className="absolute inset-0 z-[1] bg-black/25" />

      {/* Tagline — bottom-left, col 1–3 */}
      <motion.div
        className="relative z-[3] col-span-3 self-end pb-3"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <h1 className="font-[family-name:var(--font-display)] font-medium uppercase leading-[0.9] tracking-[-0.02em] text-white"
          style={{ fontSize: 'clamp(32px, 5.2vw, 66px)' }}>
          PRINT &amp; DIGITAL<br />
          DESIGN THAT<br />
          TELLS YOUR STORY
        </h1>
      </motion.div>

      {/* Navbar — overlaid at 50vh */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        <div className="flex-[0_0_50vh]" />
        <div className="pointer-events-auto border-b border-[--surface]">
          <Navbar overlaid />
        </div>
      </div>
    </section>
  )
}

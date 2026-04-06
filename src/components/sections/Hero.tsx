'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100vh', minHeight: 600, background: '#1a1a1a' }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay loop muted playsInline
        >
          <source
            src="https://res.cloudinary.com/workbyw/video/upload/v1741537245/W_Showreel_cdqxat.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 25% black overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(0,0,0,0.25)' }} />

      {/* Tagline — bottom-left, 3/8 columns */}
      <motion.div
        className="absolute bottom-3 left-3 z-[3]"
        style={{ width: 'calc((100% - 24px) * 3/8 + 24px)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <h1
          className="fd font-medium uppercase leading-[0.9] tracking-[-0.02em] text-white"
          style={{ fontSize: 'clamp(32px, 5.2vw, 66px)' }}
        >
          PRINT &amp; DIGITAL<br />
          DESIGN THAT<br />
          TELLS YOUR STORY
        </h1>
      </motion.div>

      {/* Navbar — sits at 50vh */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        <div style={{ flex: '0 0 50vh' }} />
        <div className="pointer-events-auto border-b border-[var(--surface)]">
          <Navbar overlaid />
        </div>
      </div>
    </section>
  )
}

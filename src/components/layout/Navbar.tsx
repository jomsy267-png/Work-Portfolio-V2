'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ overlaid = false }: { overlaid?: boolean }) {
  const [time, setTime] = useState('')
  const [tz, setTz] = useState('')
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const offset = -now.getTimezoneOffset() / 60
      const sign = offset >= 0 ? '+' : ''
      setTime(`${h}:${m}`)
      setTz(`GMT${sign}${offset}`)
      setAvailable(now.getHours() >= 9 && now.getHours() < 18)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  const base = 'fd text-[18px] font-medium tracking-[-0.02em] uppercase text-[var(--light)]'

  const navClass = overlaid
    ? 'left-0 right-0 z-10'
    : 'fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[rgba(26,26,26,0.92)] backdrop-blur-[12px]'

  return (
    <motion.nav
      className={navClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-[1280px] mx-auto px-3 py-4 flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/" className={`${base} hover:opacity-70 transition-opacity`}>JS.</Link>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Link href="/work"    className={`${base} hover:opacity-60 transition-opacity`}>Work</Link>
              <Link href="/#about"  className={`${base} hover:opacity-60 transition-opacity`}>About</Link>
            </div>
            <span
              className="text-[13px] hidden md:block"
              style={{ fontFamily: "var(--font-archivo), 'Archivo', sans-serif", color: 'rgb(180,180,180)' }}
            >
              Hi, I&apos;m Jomil — graphic designer based in Edmonton :)
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className={`${base} hover:opacity-60 transition-opacity hidden sm:block`}>Contact</Link>
          <div className="flex items-center gap-2">
            <span className={`${base}`}>{time}</span>
            <span className={`${base} hidden sm:block`}>{tz}</span>
            <div className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${available ? 'bg-green-400' : 'bg-red-500'}`} />
              <span className={`${base} ${available ? 'text-green-400' : 'text-red-500'} hidden sm:block`}>
                {available ? 'Available' : 'Off Work'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

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

  const navStyle = overlaid
    ? 'absolute left-0 right-0 z-10 pointer-events-auto'
    : 'fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[rgba(26,26,26,0.92)] backdrop-blur-[12px]'

  return (
    <motion.nav
      className={navStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-[1280px] mx-auto px-3 py-4 flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hover:opacity-70 transition-opacity"
          >
            JS.
          </Link>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Link href="/work" className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hover:opacity-60 transition-opacity">
                Work
              </Link>
              <Link href="/#about" className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hover:opacity-60 transition-opacity">
                About
              </Link>
            </div>
            <span className="font-[family-name:var(--font-archivo)] text-[13px] text-[rgb(43,43,43)] hidden md:block">
              Hi, I'm Jomil — graphic designer based in Edmonton :)
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hover:opacity-60 transition-opacity hidden sm:block">
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light]">{time}</span>
            <span className="font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase text-[--light] hidden sm:block">{tz}</span>
            <div className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${available ? 'bg-green-400' : 'bg-red-500'}`} />
              <span className={`font-[family-name:var(--font-display)] text-[18px] font-medium tracking-[-0.02em] uppercase ${available ? 'text-green-400' : 'text-red-500'} hidden sm:block`}>
                {available ? 'Available' : 'Off Work'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

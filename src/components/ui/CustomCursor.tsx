'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(dotX, { stiffness: 120, damping: 18, mass: 0.6 })
  const springY = useSpring(dotY, { stiffness: 120, damping: 18, mass: 0.6 })

  const hovering = useRef(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onEnter = () => {
      hovering.current = true
      dotRef.current?.classList.add('scale-[1.75]')
      ringRef.current?.classList.add('scale-[1.4]', '!border-[--accent]')
    }

    const onLeave = () => {
      hovering.current = false
      dotRef.current?.classList.remove('scale-[1.75]')
      ringRef.current?.classList.remove('scale-[1.4]', '!border-[--accent]')
    }

    window.addEventListener('mousemove', onMove)

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [dotX, dotY])

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[--accent] pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200"
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[rgba(0,153,255,0.4)] pointer-events-none z-[9999] transition-[border-color,transform] duration-300"
      />
    </>
  )
}

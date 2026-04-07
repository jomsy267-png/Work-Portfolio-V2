import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(useMotionValue(-100), { stiffness: 120, damping: 18 })
  const ringY = useSpring(useMotionValue(-100), { stiffness: 120, damping: 18 })
  const hovering = useRef(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const enter = () => { hovering.current = true; dot.classList.add('h'); ring.classList.add('h') }
    const leave = () => { hovering.current = false; dot.classList.remove('h'); ring.classList.remove('h') }

    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')

    window.addEventListener('mousemove', move)

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.div
        id="cursor-dot"
        style={{ x: dotX, y: dotY }}
        className="cursor-dot"
      />
      <motion.div
        id="cursor-ring"
        style={{ x: ringX, y: ringY }}
        className="cursor-ring"
      />
      <style>{`
        .cursor-dot {
          width: 8px; height: 8px;
          background: var(--accent);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          top: -4px; left: -4px;
          mix-blend-mode: difference;
          transition: width .18s, height .18s;
        }
        .cursor-dot.h { width: 14px; height: 14px; top: -7px; left: -7px; }
        .cursor-ring {
          width: 36px; height: 36px;
          border: 1px solid rgba(0,153,255,.4);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          top: -18px; left: -18px;
          transition: width .28s, height .28s, border-color .28s;
        }
        .cursor-ring.h { width: 50px; height: 50px; top: -25px; left: -25px; border-color: var(--accent); }
        @media (hover: none) { .cursor-dot, .cursor-ring { display: none; } }
      `}</style>
    </>
  )
}

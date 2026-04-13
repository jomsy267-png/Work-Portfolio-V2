import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const TRANSITION = { duration: 0.85, ease: [0.77, 0, 0.175, 1] }

// 1. Initial Load & Route Transition Wipe
export function PageLoadWipe() {
  return (
    <div className="panel-wipe-wrapper">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="panel-wipe-col bg-panel-dark"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0, transition: { ...TRANSITION, delay: 0.2 + i * 0.08 } }}
          exit={{ scaleY: 1, originY: 1, transition: { ...TRANSITION, delay: i * 0.08 } }}
        />
      ))}
    </div>
  )
}

// 2. Section Background Stagger
// Panels scale up from scaleY:0 → 1 using transformOrigin at the BOTTOM.
// This means panels grow upward from the section's bottom edge.
// useScroll offset: progress=0 when section top hits viewport bottom (section enters),
//                   progress=1 when section top hits viewport top (section fully scrolled into view).
// No Y-translation = no transparent gap at the section top. Clean wipe from below.
export function StaggeredSectionBackground({ isLight = true }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const colorClass = isLight ? 'bg-panel-light' : 'bg-panel-dark'

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        zIndex: 0,
        display: 'flex',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {[...Array(5)].map((_, i) => (
        <ScrubPanel
          key={i}
          index={i}
          colorClass={colorClass}
          progress={scrollYProgress}
        />
      ))}
    </div>
  )
}

function ScrubPanel({ index, colorClass, progress }) {
  const total = 5

  // Stagger: panel 0 starts at progress 0, panel 4 starts at progress 0.4.
  // Each panel takes 0.6 of the progress range to fill completely.
  // At progress=1 (section fully in view from top), ALL panels are at scaleY=1.
  const start = (index / total) * 0.4
  const end = Math.min(start + 0.6, 1)

  const scaleY = useTransform(progress, [start, end], [0, 1])

  return (
    <motion.div
      className={colorClass}
      style={{
        flex: 1,
        height: '100%',
        scaleY,
        transformOrigin: 'bottom center', // grows upward
      }}
    />
  )
}

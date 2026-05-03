import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const TRANSITION = { duration: 0.85, ease: [0.77, 0, 0.175, 1] }

// 1. Initial Load & Route Transition Wipe
export function PageLoadWipe() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

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
// All panels start rising at progress=0 (same lowest point).
// Each panel completes at a different progress value → different speeds →
// at any scroll position, panels appear at different heights (stagger).
//
// Order (user spec):
//   Panel 4 (index 3) → fastest  → appears highest
//   Panel 3 (index 2) → 2nd fastest → 2nd highest
//   Panel 5 (index 4) → 2nd fastest → 2nd highest (equal to panel 3)
//   Panel 2 (index 1) → 3rd      → 2nd lowest
//   Panel 1 (index 0) → slowest  → appears lowest
//
// Scroll offset 'start -50%' gives ~50% extra scroll room vs the original
// 'start start' — panels travel significantly higher during animation.
const PANEL_END = [1.0, 0.72, 0.44, 0.20, 0.44]

export function StaggeredSectionBackground({ isLight = true }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 200%', 'start 20%'],
  })

  const colorClass = isLight ? 'bg-panel-light' : 'bg-panel-dark'

  if (prefersReducedMotion) {
    return (
      <div
        ref={ref}
        className={colorClass}
        style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    )
  }

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
  const raw = useTransform(progress, [0, PANEL_END[index]], [0, 1])
  // Spring with low stiffness + damping → eases out when scroll stops
  const scaleY = useSpring(raw, { stiffness: 150, damping: 22, mass: 0.5 })

  return (
    <motion.div
      className={colorClass}
      style={{
        flex: 1,
        height: '100%',
        scaleY,
        transformOrigin: 'bottom center',
      }}
    />
  )
}

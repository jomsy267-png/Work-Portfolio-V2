'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      // dot follows instantly via direct style
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      const isHovering = dot.classList.contains('hovering')
      const offset = isHovering ? 7 : 4
      const ringOffset = isHovering ? 26 : 18
      dot.style.transform  = `translate(${mx - offset}px, ${my - offset}px)`
      ring.style.transform = `translate(${rx - ringOffset}px, ${ry - ringOffset}px)`
      rafId = requestAnimationFrame(loop)
    }

    const onEnter = () => { dot.classList.add('hovering');  ring.classList.add('hovering') }
    const onLeave = () => { dot.classList.remove('hovering'); ring.classList.remove('hovering') }

    const bindHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(loop)
    bindHover()

    const obs = new MutationObserver(bindHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

---
name: framer-motion-premium-wipes
description: "Guidelines and techniques for implementing agency-level page transitions and scroll wipe animations using Framer Motion. Specifically details how to avoid spacing/margin hacks when using scroll triggers by directly mapping useScroll to overlap native bounds."
---

# Framer Motion Integration Skill

Master guide for implementing high-end interaction and agency-tier screen transitions across React applications using [Framer Motion](https://www.framer.com/motion/).

---

## 1. Avoid `vh` Padding Hacks

When transitioning between sections on-scroll, the most common mistake is heavily padding the boundaries or pinning `100vh` spacer divs into the DOM to "buy time" for a GSAP scroll animation to run. This results in terrible "empty space scrolling" that feels cheap. 

Instead, Framer Motion animations should sit purely within fixed/absolute wrappers outside the main DOM scroll flow, mapping precisely to `scrollYProgress` using `useScroll`.

### Implementing the Premium Scroll Wipe
A seamless scroll wipe dynamically animates independent layers specifically scoped to physical `offset` boundaries without disrupting scrollbar integrity:

```jsx
export function ScrollWipeBoundary({ isDarkToLight = true }) {
  const ref = useRef(null)
  
  // Track this 0-height boundary element precisely as it crosses the viewport.
  // We capture the window where its top enters the viewport until its top exits.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })

  return (
    <div ref={ref} className="scroll-wipe-boundary"> {/* Height: 0px */}
       <div className="panel-wipe-wrapper"> {/* Position Fixed 9999 z-index */}
         {[...Array(5)].map((_, i) => (
           <ScrollWipePanel index={i} progress={scrollYProgress} />
         ))}
       </div>
    </div>
  )
}
```

## 2. Managing `transform-origin` (Double Element Strategy)

React and Framer Motion cannot natively interpolate `transform-origin` dynamically midway through an animation without severe display janks. 

To achieve an animation that starts from the bottom of the screen (`originY: 1`), covers the full viewport (`scaleY: 1`), and then shrinks sequentially upwards exactly towards the top (`originY: 0`) upon exit, we employ a **Nested Strategy**. 

- The **Outer Element** is anchored to the top: `originY: 0`
- The **Inner Element** is anchored to the bottom: `originY: 1`

```jsx
  return (
    <motion.div
      className="panel-wipe-col"
      style={{ originY: 0, scaleY: scaleShrink }} // Shrinks to Top edge
    >
      <motion.div
        className="panel-wipe-inner bg-panel-dark"
        style={{ originY: 1, scaleY: scaleGrow }}   // Scales up from Bottom edge
      />
    </motion.div>
  )
```

## 3. Exit Transitions via `AnimatePresence`

To trigger page load wipes correctly via `react-router`, `<AnimatePresence mode="wait">` must wrap your `<Routes>`.

Ensure that the wrapper component dynamically triggering the animation (`PageWrapper`) contains children linked explicitly to Framer Motion states.

- Entering Route: Triggered `initial` & `animate`
- Leaving Route: Triggered `exit` (This acts first, scaling panels to fill the viewport precisely before allowing the next route to mount underneath).

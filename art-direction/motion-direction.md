# Motion Direction

## Purpose

This file defines the motion system for project pages.

Remotion is suitable because it creates real MP4 videos with React, supports parameterized content, and can render MP4 or other formats locally, on servers, or serverless. :contentReference[oaicite:3]{index=3}

Remotion's core model is frame-based: React components render visuals over frames, and a composition defines width, height, duration, and FPS. :contentReference[oaicite:4]{index=4}

## Motion personality

Motion should feel:

- smooth
- quiet
- premium
- intentional
- editorial
- cinematic when appropriate
- never gimmicky

## Good uses of motion

Use motion for:

- project hero loop
- image reveal
- typography reveal
- process sequence
- logo-safe transition
- campaign motion mockup
- scroll-based case-study moment
- before/after comparison
- final project payoff

## Bad uses of motion

Avoid:

- random parallax
- excessive bouncy easing
- overused fade-up everywhere
- motion with no storytelling purpose
- slow animations that block browsing
- heavy videos where CSS would work better

## Remotion asset types

Codex may create:

- 6–10 second project hero loop
- 3–5 second section transition
- 10–15 second case-study reel
- social preview cut
- animated mockup sequence
- kinetic typography lockup
- process breakdown animation

## Motion rules

- Keep motion aligned with the brand.
- Respect reduced-motion preferences on the website.
- Use compressed MP4/WebM exports.
- Do not autoplay loud audio.
- Use poster frames.
- Use motion only where it improves storytelling.

## Motion review

Before using motion, Codex must answer:

1. What does this motion communicate?
2. Why is motion better than a static image here?
3. Does it fit the brand?
4. Will it hurt performance?
5. Can it be done with CSS instead?
6. Does it feel premium or gimmicky?

---

# Unified Motion Direction — Awwwards Portfolio Pass

Date added: 2026-04-26

## Every animation earns its place

An animation ships only if it improves at least one of:

- hierarchy
- orientation
- transition
- atmosphere
- interaction feedback
- proof of motion work

If removing the animation makes the page clearer, remove it.

## Approved motion intensity levels

### Level 0 — Static premium

Use for pages or sections where stillness makes the work stronger. Only hover/focus and essential transitions remain.

### Level 1 — Editorial reveal

Opacity/transform reveals, slight image drift, section entrance. Default for calm editorial pages.

### Level 2 — Directed transition

Hero handoff, panel wipe, held-element page transition, or one scroll-pinned moment. Use for key narrative beats.

### Level 3 — Motion-led

Short loops, case-study reels, interaction captures, or pre-rendered motion assets. Use only when motion is central to the project.

## Energy category motion guidance

### Calm / Editorial

- Motion intensity: Level 0-1.
- Tempo: slower, softer, more spacious.
- Use: quiet reveals, image handoff, subtle hero movement.
- Avoid: kinetic type, fast cuts, jitter, excessive parallax.

### High-Energy / Campaign

- Motion intensity: Level 1-2.
- Tempo: sharper and faster.
- Use: campaign rollout, channel transitions, stronger hover response.
- Avoid: every asset animating, social-tile motion noise.

### Technical / System

- Motion intensity: Level 0-1, occasional Level 2 for system reveal.
- Tempo: clean, exact, baseline-aligned.
- Use: grid reveal, metadata alignment, before/after, detail highlight.
- Avoid: bouncy easing, decorative movement, vague parallax.

### Motion / Experimental

- Motion intensity: Level 2-3 for the work, Level 0-1 for the page chrome.
- Tempo: fluid but controlled.
- Use: optimized silent loops, frame sequences, motion previews.
- Avoid: page motion competing with the actual motion work.

## Approved easing philosophy

Use a small editorial easing set:

- Standard content reveal: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Premium entrance / held transition: `cubic-bezier(0.16, 1, 0.3, 1)`
- Panel / decisive transition: `cubic-bezier(0.77, 0, 0.175, 1)`

Avoid elastic, bouncy, random, or per-section custom easing unless a project-specific motion concept explicitly justifies it.

## Duration ranges

- Micro interactions: 250-450ms
- Standard reveals: 550-850ms
- Set-piece transitions: 800-1200ms
- Hero entrances: 1050-1600ms
- Route/page transitions: 600-1100ms

Anything longer needs a strong narrative or loading reason.

## Per-page motion limits

Default maximums:

- one scroll-pinned moment
- one drifting / Ken Burns image moment
- one typographic motion event
- one motion-active preview in view at a time

These are limits, not targets. Many pages should use less.

## Project index hover/focus behaviour

The project index should use one reusable hover/focus architecture:

- static hero image is the baseline preview
- keyboard focus matches hover
- energy category may alter tempo, contrast, scale, or preview intensity
- motion preview is allowed only for motion-led projects
- every motion preview needs a static poster fallback
- mobile/touch must show enough information without hover

## Reduced-motion requirement

Every animation must have a reduced-motion equivalent at the time it ships.

Reduced-motion behaviour:

- remove long transitions
- replace motion previews with static posters
- preserve content order and hierarchy
- keep focus/hover feedback visible without movement
- never hide content behind animation

## CSS / Framer / GSAP / Remotion decision rules

Use CSS for:

- simple hover/focus states
- opacity/transform transitions
- basic responsive state changes

Use Framer Motion for:

- existing reveal wrappers
- scroll-linked transforms already in the site
- hero handoffs
- route/section transitions inside React

Defer GSAP/Lenis unless:

- a specific interaction cannot be delivered cleanly with CSS/Framer
- the performance/accessibility tradeoff is justified
- the added dependency is documented

Use Remotion or pre-rendered video when:

- motion is the project deliverable
- frame-perfect timing matters
- a compressed video is more performant than runtime animation
- a case-study reel or hero loop needs to be exported

No motion is better when:

- the asset is already visually strong
- motion competes with the work
- performance would suffer
- reduced-motion fallback would remove the main idea
- the animation only exists because it looks trendy

---

# Prompt 6 — Project Page Ecosystem Motion and Interaction Direction

Date added: 2026-04-26

## Scope

This direction governs the work/project ecosystem only:

- project index / work listing
- project-page entrances
- project-page section reveals
- image and mockup presentation
- website screenshot showcase behaviour
- next-project modules
- project-to-project transitions
- hover/focus interactions
- mobile/touch behaviour
- reduced-motion behaviour
- performance guardrails

Homepage, about, contact, and 404 are not audited here except where they directly affect project browsing.

## Current ecosystem audit

### Existing strengths

- The project ecosystem already uses a recognizable motion grammar: dark panel wipes, sticky hero handoff, opacity/translate reveals, image parallax, and restrained hover states.
- Work cards have simple image scale/brightness hover behaviour.
- Project pages have a strong hero-to-info transition via staggered panel wipe.
- Modular section reveals are consistent through the shared `Reveal` wrapper.
- The website screenshot showcase is currently static after wrapper reveal, which is correct for prepared screenshots.
- Custom cursor is disabled on touch devices.

### Current gaps

- Keyboard focus states do not consistently match hover states on work cards, nav rollovers, next-project links, or filter tabs.
- No explicit `prefers-reduced-motion` / `useReducedMotion` strategy exists for page wipes, parallax, section reveals, cursor, or work-card transitions.
- Project data does not yet expose `energyCategory`, `projectType`, `posterImage`, `previewVideo`, or `transitionTone`.
- Work index interaction is static across all projects and does not yet support energy-specific accents.
- Project-to-project navigation is functional but not visually committed enough for the Awwwards-level ending rule.
- Page transitions are global panel wipes but do not yet hold an element or adapt tempo by project energy.
- Project images use a universal parallax/zoom treatment; this risks overuse and should become module/energy aware.
- GIFs and external iframes can become performance risks, especially on mobile.
- There are no explicit dimensions/aspect constraints for many remote images, increasing layout-shift risk.

### Existing generic / overused areas

- The shared reveal pattern is applied broadly. It should remain the base behaviour, but special moments need more intentional assignment.
- The same parallax/zoom treatment on nearly all project images can flatten project-specific energy.
- Next-project motion is too small to feel like a designed transition.

## Global motion vocabulary

### Approved easing curves

- Standard reveal: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Premium entrance: `cubic-bezier(0.16, 1, 0.3, 1)`
- Decisive panel / route transition: `cubic-bezier(0.77, 0, 0.175, 1)`

Do not add elastic, bounce, random per-section easing, or physics-heavy effects unless a project explicitly needs them.

### Duration ranges

- Micro-interactions: 180-320ms
- Hover/focus states: 250-450ms
- Image reveals: 550-850ms
- Section reveals: 650-900ms
- Hero entrances: 900-1400ms
- Project info / thesis handoff: 800-1200ms
- Page transitions: 600-1100ms
- Next-project previews: 450-850ms

Anything longer must either communicate a transition, mask real loading, or support a major set piece.

### Opacity rules

- Use opacity for entrance and hierarchy.
- Avoid opacity-only transitions for important navigation state; pair with color, underline, image, or position feedback.
- Reduced-motion mode can keep opacity fades if they are short and do not delay content.

### Scale rules

- Work-card hover scale: 1.02-1.04.
- Image drift/zoom: 1.02-1.08 unless a specific cinematic moment justifies more.
- Avoid scaling prepared screenshots.
- Avoid scale transitions that cause layout shift.

### Clip / reveal rules

- Clip reveals are allowed for hero handoffs, image plates, project index previews, and next-project previews.
- Do not clip prepared screenshots unless an approved crop is created as a separate asset.
- Clip reveals must use transform-based masks or wrappers, not layout-changing height animations.

### Blur rules

- Blur is generally avoided.
- If used, keep it under 6px and only for atmospheric image reveal or background transition.
- Do not blur body copy, metadata, navigation, or prepared screenshots.

### Image movement rules

- Use image movement to create depth, not to decorate every image.
- Calm pages: minimal drift or no drift.
- High-energy pages: sharper crop movement on selected hero/channel assets.
- Technical pages: minimal movement; precision beats atmosphere.
- Motion pages: page images should move less because the work itself moves.

### Typography motion rules

- Navigation rollovers are allowed but need focus parity.
- Section-title motion should be rare.
- Kinetic type is reserved for one major moment per page, if any.
- Never animate long body copy in a way that delays reading.

### Scroll reveal rules

- Shared reveal remains the default.
- Not every section needs a visible animation.
- Use section reveals to mark chapter starts, not every asset.
- One scroll-pinned moment per project page maximum.

### Page transition rules

- Keep the panel-wipe vocabulary as the base route transition.
- Future refinement may add a held element: project image, title, or color field.
- Energy category can adjust tempo, not identity.
- Reduced-motion mode should replace wipes with fast opacity/content swap.

### Reduced-motion fallback rules

- Remove parallax and scroll-linked image movement.
- Replace motion previews with static posters.
- Shorten route/page transitions.
- Preserve content order and hierarchy.
- Keep hover/focus visible through color, border, underline, or static image state.
- Do not require motion to understand the page.

## Energy category motion rules

### Calm / Editorial

- Timing: slower, spacious.
- Easing: premium entrance and standard reveal.
- Image reveal: opacity/y or gentle plate reveal.
- Hover: subtle brightness/scale, no aggressive crop movement.
- Section reveal: quiet chapter entrance.
- Page transition: soft panel/opacity handoff.
- Next-project preview: elegant fade/slide with strong still image.
- Avoid: kinetic type, fast cuts, jitter, heavy parallax.

### High-Energy / Campaign

- Timing: faster and sharper.
- Easing: decisive panel for chapter or channel changes.
- Image reveal: stronger crop reveal or quick channel rollout.
- Hover: more contrast and slightly quicker image response.
- Section reveal: punchier chapter title or key visual entrance.
- Page transition: faster tempo shift, still same navigation model.
- Next-project preview: stronger visual hit, faster title response.
- Avoid: animating every channel asset, social-tile noise, fake intensity.

### Technical / System

- Timing: precise, medium-fast.
- Easing: standard reveal; avoid softness that feels vague.
- Image reveal: grid-aligned, edge-locked, minimal scale.
- Hover: clean metadata/image relationship, no flourish.
- Section reveal: rule/caption/metadata alignment can lead.
- Page transition: clean, baseline-driven.
- Next-project preview: exact image/title lockup.
- Avoid: bouncy easing, generic parallax, dry spec-sheet sameness.

### Motion / Experimental

- Timing: page chrome restrained; motion assets carry energy.
- Easing: fluid but controlled.
- Image reveal: poster-to-loop handoff where useful.
- Hover: optional preview video only with poster fallback.
- Section reveal: fewer page effects, more focus on real motion work.
- Page transition: fluid tempo, not chaotic.
- Next-project preview: static poster first, optional short loop.
- Avoid: multiple autoplay videos, page motion competing with work.

## Project page motion modules

### Hero reveal

- Purpose: establish project tone.
- Use: every project page.
- Timing: 900-1400ms.
- Variations: calm fade, campaign sharper reveal, technical clean reveal, motion poster-to-loop.
- Fallback: static hero visible immediately.
- Risk: heavy hero media and delayed LCP.
- Scope: global with project data controls.

### Project thesis reveal

- Purpose: orient user after hero.
- Use: every project page.
- Timing: 800-1200ms with existing panel handoff.
- Variations: tempo changes by energy category.
- Fallback: content appears without scroll-linked movement.
- Risk: hiding essential context behind motion.
- Scope: global.

### Section intro reveal

- Purpose: mark a chapter.
- Use: chapter starts, not every section.
- Timing: 650-900ms.
- Variations: calm quiet fade, campaign faster title entrance, technical rule/metadata reveal.
- Fallback: static chapter heading.
- Risk: repeated fade-up everywhere.
- Scope: global module.

### Image plate reveal

- Purpose: present still assets with intent.
- Use: strong images, mockups, detail plates.
- Timing: 550-850ms.
- Variations: energy-specific y/opacity/clip.
- Fallback: static image.
- Risk: layout shift if dimensions are missing.
- Scope: global.

### Full-bleed image reveal

- Purpose: create impact.
- Use: selected high-quality images only.
- Timing: 750-1100ms.
- Variations: calm slow entrance, campaign punchier reveal, technical less movement.
- Fallback: static full image.
- Risk: oversized assets.
- Scope: per project decision.

### Website screenshot showcase reveal

- Purpose: frame prepared screenshots without altering them.
- Use: web/digital sections.
- Timing: 550-850ms for wrapper/plate only.
- Variations: scale and sequencing by project, not screenshot distortion.
- Fallback: static screenshot plates.
- Risk: cropping, over-scaling, screenshot dump feeling.
- Scope: per digital project.

### Print / mockup detail reveal

- Purpose: show material craft.
- Use: print/editorial/production projects.
- Timing: 650-900ms.
- Variations: page-turn only if meaningful; otherwise still reveal.
- Fallback: static plate.
- Risk: fake tactile motion.
- Scope: per project.

### Technical / system grid reveal

- Purpose: make structured content feel precise.
- Use: signage, identity systems, technical pages.
- Timing: 450-750ms.
- Variations: metadata/rule/image edge sequence.
- Fallback: static grid.
- Risk: dry spec-sheet feeling.
- Scope: per project type.

### Motion project preview module

- Purpose: show motion work without heavy page chrome.
- Use: motion-led projects only.
- Timing: poster immediate, loop after intentional trigger/load.
- Variations: motion/experimental category only.
- Fallback: poster.
- Risk: heavy video, autoplay clutter.
- Scope: per motion project.

### Next-project transition

- Purpose: make project ending designed and orient the user.
- Use: every project page.
- Timing: 450-850ms hover/focus, 600-1100ms route.
- Variations: preview tempo by next project's energy.
- Fallback: static preview/title.
- Risk: inconsistent navigation.
- Scope: global with project data controls.

### Optional pinned moment

- Purpose: create one memorable narrative beat.
- Use: only if the project needs a controlled comparison, sequence, or scale reveal.
- Timing: scroll-controlled.
- Variations: project-specific.
- Fallback: linear static sequence.
- Risk: scroll jank, mobile overload.
- Scope: per project; max one.

### Optional motion preview module

- Purpose: preview motion-led work in the index or next-project module.
- Use: motion-led projects only.
- Timing: 2-3s compressed loop.
- Variations: motion/experimental category.
- Fallback: poster.
- Risk: bandwidth and reduced-motion violation.
- Scope: global architecture, project-specific media.

## Screenshot / mockup motion rules

Allowed:

- wrapper fade/y reveal
- static plate sequencing
- subtle frame shadow/opacity reveal
- desktop/mobile pair entrance as a group
- browser/device chrome fade if chrome exists

Disallowed:

- cropping prepared screenshots to animate them
- zooming into prepared screenshots
- masking important screenshot content
- live iframe behaviour as a presentation default
- turning screenshot sections into interactive demos
- animating every screenshot independently

Motion should frame the presentation, not alter screenshot content.

## Remotion decision framework

### CSS is enough when

- hover/focus is color, opacity, border, or transform
- reveal is simple opacity/translate
- state change is responsive or UI-level

### Framer Motion is enough when

- component entrance depends on viewport
- hero handoff or scroll transform is needed
- route/section transition lives inside React
- existing stack can deliver the behaviour cleanly

### GSAP is deferred unless

- a specific scroll/timeline behaviour cannot be maintained in Framer
- dependency weight is justified
- accessibility fallback is documented

### Remotion / pre-rendered video is justified when

- motion is the project deliverable
- a case-study reel needs frame-perfect timing
- a hero loop is better as compressed video than runtime animation
- exporting social/preview cuts is part of the project presentation

### Project types likely to benefit

- Motion Graphics
- Campaign / Integrated
- Mixed Media with real motion component
- Web / Digital only when showing an interaction flow

### Project types that should usually avoid Remotion

- Print / Editorial unless page-turn is central
- Signage / Environmental unless installation sequence is central
- Technical / System unless explaining a process
- Calm branding pages where still imagery is stronger

### Required before any Remotion implementation

- purpose statement
- target placement
- duration
- poster frame
- mobile fallback
- reduced-motion fallback
- file-size budget
- why CSS/Framer is not enough

## Ballet Edmonton pilot validation

- Energy category: Calm / Editorial, with Mixed Media support.
- Current interactions to keep: sticky hero handoff, panel wipe, restrained section reveal, static screenshot plates.
- Current interactions to refine later: reduce any generic over-animation, ensure screenshot section remains editorial rather than grid-like, improve next-project ending if needed.
- Hero motion: no Remotion needed. A subtle existing fade/handoff is enough.
- Website screenshot showcase: should remain mostly static. Use wrapper/plate reveal only; no crop, zoom, mask, or screenshot animation.
- Remotion: not justified for the website showcase. Only consider a very short motion asset if the motion-design GIFs need a cleaner compressed presentation.
- Avoid: dance-imitation motion, kinetic typography, heavy parallax, screenshot zooming, live iframe behaviour.
- Next Ballet implementation prompt, if any: focus on interaction polish and next-project/section rhythm, not adding motion for its own sake.

---

## Merged Motion Production Standard

Date added: 2026-04-27

## Approved easing philosophy

- Use a small fixed easing set only.
- Entrances should feel weighted and editorial, not springy.
- Movement should decelerate with control.
- Exits should clear space quickly without calling attention to themselves.

## Duration bands

- micro interaction: `300ms - 600ms`
- set piece: `800ms - 1200ms`
- hero handoff: `1200ms - 1600ms`
- page transition: `600ms - 1100ms`

Anything outside these bands requires a documented reason.

## Per-page motion maxima

- one pinned scroll moment maximum
- one drifting image moment maximum
- one typographic motion event maximum

Most pages should use less.

## Project-type motion intensity

- Branding / Identity:
  restrained, one mark or system behavior reveal.
- Print / Editorial:
  very restrained, atmosphere not choreography.
- Signage / Environmental:
  documentary movement, scale and approach.
- Web / Digital:
  moderate, one meaningful screen or interaction reveal.
- Motion Graphics:
  the page motion stays quieter than the work itself.
- Campaign / Integrated:
  chapter-paced reveals with stronger tempo control.
- Production / Fabrication:
  documentary and material-led.
- Large-format / Installation:
  spatial and slow.
- Mixed Media:
  chapter transitions may signal medium change, but grammar stays shared.

## Remotion decision framework

Use Remotion only when:

- frame-perfect timing matters
- the asset is itself a motion deliverable
- runtime animation would be heavier or less reliable
- poster, reduced-motion, and mobile fallbacks are defined first

Do not use Remotion when CSS or Framer Motion can communicate the same hierarchy or atmosphere more simply.

## No decorative gimmicks

Do not ship:

- mouse trails
- ASCII reveal effects
- particle systems
- scroll-jacking as a feature
- novelty cursor choreography
- kinetic type that exists only to look active

## Reduced-motion requirement

- Reduced-motion fallbacks are required, not optional.
- Content must remain visible without waiting for motion.
- Video or looped motion should pause, simplify, or fall back to a poster image.

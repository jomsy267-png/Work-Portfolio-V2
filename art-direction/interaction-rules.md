# Interaction Rules

## Purpose

This file defines reusable interaction rules for the portfolio. The goal is a single authorial interaction system with controlled project-specific energy.

## Core rule

Use one interaction architecture across the portfolio. Project energy may change timing, preview intensity, and movement quality, but not the underlying interaction model or accessibility tree.

## Project index hover / focus architecture

Baseline for every project preview:

- static hero image preview
- visible project title
- controlled metadata layer
- consistent link target
- hover state equals keyboard focus state
- mobile/touch does not depend on hover

Do not build separate interaction systems per project.

## Energy category variant system

### Calm / Editorial

- Slower fade.
- Gentle image entrance.
- Minimal scale.
- Quiet metadata reveal.
- Avoid aggressive contrast or kinetic movement.

### High-Energy / Campaign

- Faster reveal.
- Sharper crop or image movement where source quality supports it.
- Stronger contrast response.
- Metadata can arrive more quickly.
- Avoid noisy multi-asset hover states.

### Technical / System

- Precise reveal.
- Metadata aligns to image edges or baseline grid.
- Optional small detail-image cue.
- Avoid decorative movement.

### Motion / Experimental

- Static poster remains the baseline.
- Optional 2-3 second compressed motion preview.
- Motion preview loads only on hover/focus or when intentionally in view.
- `prefers-reduced-motion` receives static poster only.

## Static hero baseline

Every project must have a high-quality static preview. Motion is never the only preview state.

## Optional motion preview rules

Motion preview is allowed only when:

- motion is central to the project
- compressed file size is controlled
- poster fallback exists
- keyboard focus can trigger equivalent feedback
- reduced-motion users are protected

Do not use motion previews for every project.

## Hover / focus parity

Every hover effect must have a keyboard focus equivalent. If a state cannot be represented on focus, simplify the hover state.

## Mobile / touch behavior

Mobile previews must be statically legible:

- no hidden essential metadata behind hover
- no tiny tap targets
- no interaction that requires cursor precision
- motion previews disabled unless explicitly useful and lightweight

## Performance rules

- Static poster first.
- Lazy-load heavy preview assets.
- Use transform and opacity for movement.
- Avoid layout-shifting hover states.
- Do not preload all motion previews.

---

# Prompt 6 — Work Index Interaction System

Date added: 2026-04-26

## ProjectIndexHover architecture

Future implementation should use one reusable architecture for work/project previews.

Recommended data fields:

- `energyCategory`: `calm-editorial`, `high-energy-campaign`, `technical-system`, `motion-experimental`
- `projectType`: branding, print, signage, web, motion, campaign, production, installation, mixed-media
- `heroImage`: required static image
- `posterImage`: optional explicit poster fallback
- `previewVideo`: optional, motion-led projects only
- `transitionTone`: optional tempo hint for project-to-project transition
- `previewAlt`: accessible text for preview imagery

The component architecture should not change by project. Only props alter timing and preview intensity.

## Static poster behaviour

- Static hero image appears first for every project.
- Poster image is used before video loads, during reduced motion, and on mobile when motion is disabled.
- Title and essential metadata remain visible without interaction.

## Optional motion preview behaviour

Use only when:

- motion is central to the project
- preview is short, silent, compressed, and loopable
- poster fallback exists
- hover/focus parity is implemented
- reduced-motion disables video

Do not use motion preview as a general richness effect.

## Lazy-loading strategy

- Load static images normally according to viewport priority.
- Do not preload every preview video.
- Load preview video on hover/focus intent or when a motion-led preview is intentionally featured.
- Cancel or pause video when preview is no longer active.

## Keyboard focus behaviour

Keyboard focus must trigger the same meaningful state as hover:

- image emphasis
- metadata visibility
- title response
- optional video preview only if reduced motion allows it

If keyboard focus cannot reproduce a hover effect accessibly, simplify the hover effect.

## Mobile / touch behaviour

- No essential information hidden behind hover.
- No cursor-dependent instructions.
- Static preview is the primary mobile state.
- Motion preview should usually be disabled on mobile unless it is central and lightweight.
- Tap target must remain clear and stable.

## What not to implement

- Heavy video previews for every project.
- Different DOM structures by energy category.
- Hover-only metadata.
- Motion previews with no poster.
- Cursor-only affordances.
- Layout-shifting hover states.
- Project-specific interaction systems.

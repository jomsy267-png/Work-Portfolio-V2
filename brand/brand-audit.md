# Brand Audit

## Purpose

Codex must complete and update this file after auditing the current portfolio.

This file is the source of truth for the existing brand identity.

## Brand personality

The current website feels:

- dark
- calm
- editorial
- technically sharp
- minimal
- premium without looking luxurious for its own sake
- image-led
- motion-aware
- personal, but still controlled

The overall tone is not playful, soft, colorful, or decorative. It is a restrained creative portfolio with a sharp, agency-adjacent point of view. The work is presented with confidence through contrast, pacing, uppercase condensed typography, and cinematic section transitions.

What should never be lost:

- the dark-neutral foundation
- the restrained editorial tone
- the condensed uppercase display language
- the mono metadata layer
- the sharp, minimal spacing personality
- the staggered panel-wipe transition language
- the sense that the portfolio is image-led first and explanatory second

## Existing colours

Codex inspected `src/index.css` and component styles.

| Token | Value | Usage |
|---|---:|---|
| background-primary | `#050505` | Main site background, dark sections, image backdrops |
| background-secondary | `#f7f7f7` | Light panel-wipe sections like About and Skillset |
| surface-secondary | `#cfcfcf` | Secondary surface tint, hover lightening, subtle contrast |
| text-primary | `#f7f7f7` | Main text on dark surfaces |
| text-secondary | `#8c8c8c` | Body copy, metadata, supporting copy |
| accent-primary | `#0099ff` | Cursor, selection, selective accent/hover states |
| accent-secondary | `#4ade80` | Availability status only |
| accent-alert | `#ff004d` | Off-work status only |
| border-subtle | `rgba(207, 207, 207, 0.08–0.15)` | Dividers, rules, tag outlines, subtle structure |

Notes:

- `#0099ff` exists, but it is used sparingly. It is not a broad page color.
- The dominant palette is black, off-white, neutral gray, and semi-transparent borders.
- The site gets most of its richness from contrast and imagery, not color variety.

## Existing typography

Codex inspected `index.html`, `src/index.css`, and component-level styles.

| Role | Font | Weight | Usage |
|---|---|---:|---|
| Heading | Archivo Narrow | 500–700 | Hero lines, section titles, project titles, nav, CTA labels, work titles |
| Body | Inter | 400–600 | Global body text, descriptive copy, paragraphs |
| Label | Fragment Mono | 11–12px, regular | Metadata, timestamps, project labels, navigation utility text |

Supporting note:

- `Archivo` is loaded and tokenized as `--fa`, but it is not currently a meaningful part of the live visual system.
- The actual brand language is built primarily from `Archivo Narrow`, `Inter`, and `Fragment Mono`.

## Existing layout patterns

Codex inspected `src/pages/Home.jsx`, `src/pages/ProjectPage.jsx`, `src/pages/WorkPage.jsx`, and shared CSS.

### Hero layout

- Home hero is a full-viewport sticky section inside a `200vh` wrapper.
- It layers video, dark overlay, a glass effect, and a Spline object, with oversized condensed type pinned low in the viewport.
- Project pages use a full-height sticky hero image that is overtaken by a dark project-info section via staggered wipe.

### Section spacing

- Standard section padding is `80px 0`.
- Mobile section padding drops to `60px 0`.
- Project info blocks use `72px var(--pad) 80px`.
- Project section container uses `80px 0 120px`.

### Grid system

- Base site utility uses an 8-column grid via `.grid-8`.
- Home section layout uses a two-column editorial split: `18%` label column + content column.
- Work page uses a two-column card grid on desktop and one column on mobile.
- Project pages use a modular section system with full, duo, grid, text, text-image, video, and publication layouts.

### Image treatments

- Imagery is large and allowed to dominate.
- Dark backgrounds frame most imagery.
- Hover behavior is subtle: scale up slightly, dim slightly.
- Project pages use parallax image drift and modest zoom inside overflow-hidden wrappers.
- Full-bleed and contained image moments are mixed, especially in variant 3 project pages.

### Page transitions

- The homepage relies on stacked sticky sections and staggered vertical panel wipes.
- Project pages use a dark staggered wipe to bring the info section over the hero.
- Transitions are scroll-led, not route-heavy by default.

### Button/link style

- Links are understated and mostly text-based.
- Many CTAs use a leading slash.
- Underlines are subtle border-bottom treatments.
- There are no heavy pill buttons or glossy interactive UI elements.

## Existing motion language

Codex inspected `Home.jsx`, `AboutSection.jsx`, `Skillset.jsx`, `PanelWipe.jsx`, `ProjectPage.jsx`, `WorkPage.jsx`, `Navbar.jsx`, and `Cursor.jsx`.

### Scroll animations

- Heavy use of `framer-motion` with scroll-bound transforms and springs.
- Large structural moments are driven by sticky sections and scrubbed panel wipes.
- Project imagery uses soft parallax and zoom.
- Homepage sections rely on overlap, delay, resistance, and stagger rather than blunt snapping.

### Hover states

- Image cards scale subtly on hover.
- Text shifts color rather than performing aggressive transformations.
- Nav uses a restrained roll-over text animation.
- Cursor changes size and ring emphasis, but remains minimal.

### Page transitions

- Route/section transition language is based on vertical panel wipes.
- Wipes are staggered across five columns.
- Light sections and dark sections invert the wipe color rather than the system itself.

### Reveal patterns

- Standard reveal wrappers use opacity + `y` translation.
- Typical reveal timing is around `0.75s`.
- Sections often reveal content after wipe progress passes a threshold rather than immediately.

### Easing style

- Primary content ease: `[0.25, 0.1, 0.25, 1]`
- Premium reveal/hero ease: `[0.16, 1, 0.3, 1]`
- Panel wipe route transition: `[0.77, 0, 0.175, 1]`
- Spring values are common and generally moderate-to-firm, favoring damped motion over bounce.

### Speed

- Micro hover transitions: `0.25s–0.45s`
- Standard reveal transitions: `0.55s–0.85s`
- Hero/text reveal transitions: `1.05s–1.8s`
- Scroll-scrubbed motion is usually spring-smoothed rather than time-driven

## Brand protection notes

Do not change without explicit approval:

- the dark-first palette built around `#050505`
- the use of `Archivo Narrow` as the dominant display face
- the use of `Fragment Mono` for metadata
- the sparse blue accent strategy
- the slash-led navigation and CTA language
- the editorial 2-column section layout on the homepage
- the panel-wipe transition system
- the restrained hover/motion tone
- the project content, client names, and actual visual work

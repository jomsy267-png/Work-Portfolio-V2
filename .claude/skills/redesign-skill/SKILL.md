# Redesign Skill — Upgrade Existing Interfaces to Premium Quality
# Source: https://github.com/Leonxlnx/taste-skill (skills/redesign-skill)

## Core Methodology
1. **Scan** — Identify framework, styling approach, existing design patterns
2. **Diagnose** — List every generic element, weakness, and missing state
3. **Fix** — Apply targeted improvements within the existing tech stack

## Audit Checklist

### Typography
- Generic fonts (Inter, browser defaults)
- Weak headlines, overly wide body text
- Limited font weights, improper number formatting
- Missing letter-spacing, orphaned words

### Colour & Surface
- Pure black backgrounds (use #1a1a1a or similar dark neutrals instead)
- Oversaturated accents, multiple accent colours
- "AI gradient" aesthetics
- Generic shadows, flat textures

### Layout
- Over-centred symmetry
- Generic 3-column card grids
- `height: 100vh` (replace with `min-height: 100dvh`)
- Missing max-width containers
- Forced equal card heights
- Poor column alignment

### Interactivity
- Missing hover states
- Absent active feedback
- Instant transitions (add ease curves)
- Invisible focus rings
- No loading/empty/error states
- Animations using non-GPU properties (avoid top/left, use transform)

### Content
- Generic placeholder names
- Fake round numbers
- Lorem Ipsum text
- Duplicate content patterns

### Components
- Pill-shaped badges (use `border-radius: 3px`)
- Predictable button combinations
- Accordion FAQs (use inline reveals)
- Carousel testimonials
- Three-tower pricing tables

### Code Quality
- Semantic HTML
- Relative units over px where appropriate
- Image alt text
- Z-index scale
- Dead code / unused imports
- Meta tags for SEO and sharing

## High-Impact Techniques

**Typography:** variable font animations, outlined-to-fill transitions, text mask reveals

**Layout:** broken grids, whitespace maximisation, parallax stacks, split-screen scroll

**Motion:** smooth inertia scrolling, staggered entry animations, spring physics, scroll-driven reveals

**Surfaces:** true glassmorphism, spotlight borders, grain overlays, tinted shadows

## Implementation Priority
1. Font replacement
2. Colour palette refinement
3. Interactive states (hover, focus, active)
4. Layout and spacing
5. Component replacement
6. State design (loading, empty, error)
7. Typography polish

## Core Rules
- Work within existing tech stack — no framework migration
- Maintain all functionality
- Check dependencies before adding libraries
- Keep changes focused and reviewable

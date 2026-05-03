# Project Agent Instructions

Use project-local Claude skills for this repo. Before work that changes design,
UI, motion, branding, presentations, banners, or 3D, read matching skill file
under `.claude/skills/*/SKILL.md` and follow relevant workflow.

## Always On

- Use `.claude/skills/caveman/SKILL.md` for response style.
- Default tone: terse, low-fluff, technically exact.
- Code stays normal. Caveman style applies to explanation only.

## Skill Routing

- Brand voice, identity, assets, style guides: `.claude/skills/brand/SKILL.md`
- Design tokens, CSS variables, component specs: `.claude/skills/design-system/SKILL.md`
- Banner/header/social/ad creative: `.claude/skills/banner-design/SKILL.md`
- 3D/Spline integration: `.claude/skills/spline-skill/SKILL.md`
- High-agency frontend taste rules: `.claude/skills/taste-skill/SKILL.md`
- Existing UI audit/fixes: `.claude/skills/frontend-design-audit/SKILL.md`
- Unified design tasks: `.claude/skills/design/SKILL.md`
- Interface redesign/premium polish: `.claude/skills/redesign-skill/SKILL.md`
- Presentations/decks: `.claude/skills/slides/SKILL.md`
- UI styling/accessibility/responsive work: `.claude/skills/ui-styling/SKILL.md`
- UI/UX quality, layout, interaction, animation: `.claude/skills/ui-ux-pro-max/SKILL.md`

## Portfolio V2 Defaults

- Existing stack: React + Vite + Framer Motion + CSS-in-JSX/global CSS.
- Work within existing stack. No framework migration.
- Prefer transform/opacity animation. Avoid top/left/height animation for motion.
- Use `min-height: 100dvh` for viewport sections unless sticky math needs explicit height.
- Keep portfolio aesthetic lean, editorial, dark-neutral, sharp-radius.
- Avoid emojis, generic placeholders, purple/neon AI aesthetic, excessive cards.
- Preserve user edits. Do not revert unrelated changes.

## Verification

- Run build after code edits when possible:
  `PATH=/Users/jomilshah/.nvm/versions/node/v24.14.1/bin:$PATH npm run build`
- Dev URL:
  `http://127.0.0.1:5173/`

---

# Awwwards Submission Standard

This portfolio is being prepared for Awwwards submission.

The quality bar is not normal portfolio quality. The quality bar is award-submission quality.

Every design, layout, motion, and implementation decision must be judged against:

1. Design
2. Usability
3. Creativity
4. Content
5. Responsive design
6. Accessibility
7. Performance / WPO
8. Animation and transitions
9. Semantics / SEO
10. Markup and metadata

## Awwwards-level rule

Do not make the website trendy.

Make it:
- memorable
- refined
- usable
- fast
- cinematic where appropriate
- technically polished
- conceptually clear
- brand-consistent
- emotionally distinctive

## No-exception quality bar

A project page is not complete unless:

- the hero has impact
- the first 3 seconds feel premium
- the page has a clear creative concept
- the image sequence feels art-directed
- typography feels intentional
- motion feels custom, not template-like
- mobile is not an afterthought
- performance is protected
- accessibility is respected
- the ending feels designed
- the page has at least one memorable interaction or visual moment
- nothing feels generic, stock, or AI-generated

## Judging mindset

Before finalizing any work, score it from 1-10 in:

- Design
- Usability
- Creativity
- Content
- Motion
- Performance
- Mobile
- Accessibility

Anything below 8 must be improved before completion.

The target is 8.5+ across all categories.

# Portfolio-Wide Awwwards Art Direction System — Merged Synthesis
**Combined synthesis of Claude's system architecture report and Gemini's visual reference scan.**
*Codex synthesis reference. Strongest elements from each, contradictions resolved with rationale.*

---

## How this document was assembled

Two reports were produced independently:

- **Claude's report** — a system architecture: skeleton/wardrobe model, per-project-type modules, decision framework, accessibility floor, copy voice, repo documentation guidance.
- **Gemini's report** — a visual reference scan: named reference sites, material/lighting vocabulary, codec specs, image-compression targets, mockup-quality cues.

This document keeps the architecture from the first and grafts the material specificity from the second. Where the two contradicted, the more durable / less trend-bound recommendation won, with the rationale stated. Trend labels and SEO-blog-tier sources from Gemini were dropped. Decorative interaction suggestions (mouse trails, ASCII reveals, scroll-jacking-as-feature) were rejected with reasoning.

The result is one document Codex can synthesize into the repo without needing to reconcile the two parents.

---

## 1. Executive position

A reusable Awwwards-level system requires three things most portfolios skip:

1. **A defined system, written down.** Not in the designer's head — in the repo. Every rule, every variant, every "we do this here, we don't do that." Instinct produces the inconsistency that costs you points.

2. **Variation within constraint.** Every project page obeys the same skeleton; every project page chooses its wardrobe from a defined set. The juror should sense the system without being able to predict the next page.

3. **A quality bar that holds at the weakest page.** A portfolio is judged at its worst project, not its best. Submission screenshot may be Ballet Edmonton; the juror will scroll the whole site.

The architecture has two layers: **the skeleton** (universal rules every page shares — typography, motion, performance, accessibility, voice, navigation) and **the wardrobe** (modular choices per project type — hero archetype, image sequence, mockup strategy, motion intensity).

Same skeleton. Different wardrobe. Same grammar. Different sentences.

---

## 2. The skeleton: universal rules every project page shares

Non-negotiable. The floor.

### 2.1 Page structure (universal)
1. **Hero plate** — one decisive image or composition, project name, at most one supporting line.
2. **Thesis section** — one or two sentences naming the angle. Not the brief.
3. **Body chapters** — three to five named sections (setup, system, application, detail, outcome). Scales with project complexity, never exceeds five.
4. **Colophon** — role, scope, year, collaborators, one specific outcome. Quiet. Right-set or footer.
5. **Next-project preview** — visually committed, full-bleed or near. Not a footer link.

### 2.2 Typography
- Display face from existing identity, set 8–14% of viewport height in heroes.
- Body face from existing identity, 16–18px desktop, 15–17px mobile.
- Metadata in mono or small-caps, set quiet.
- Maximum three type levels visible per section.
- Tracking: tighten display (-1% to -3%); let body breathe (0% to +1%).
- Line length 60–75 characters for body.
- **Web font hygiene:** subset font files; preload critical weights only; ship variable fonts where supported to reduce request count.

### 2.3 Color
- Portfolio palette is fixed. No project introduces new accents.
- Each project may *emphasize* a subset of the palette differently, but every color used must already exist in the system.
- Photography may carry its own warmth/coolness; UI/typographic color stays in palette.

### 2.4 Motion vocabulary
- **Approved easing set:** two or three editorial-feeling curves, documented as code constants. Nothing outside the set ships. A reasonable starting band: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `cubic-bezier(0.65, 0, 0.35, 1)` for moves, `cubic-bezier(0.32, 0, 0.67, 0)` for exits.
- **Duration bands:** micro 300–600ms, set piece 800–1200ms, hero 1200–1600ms, page transition 600–1100ms.
- **Page transitions hold an element across pages** (image, title, color). A default route swap is the floor; held-element is the standard.
- `prefers-reduced-motion` fallback ships alongside every animation, not after.
- Per-page maxima: one scroll-pinned moment, one drifting (Ken-Burns) image, one typographic motion event.

### 2.5 Performance budgets
- **Lighthouse Performance ≥ 80 mobile, ≥ 90 desktop.** Non-negotiable.
- LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms.
- **Hero asset weight: ≤ 1.5MB desktop, ≤ 600KB mobile.**
- **Image format and weight per asset:**
  - Hero imagery: AVIF preferred, WebP fallback; under ~250KB at 1920w; explicit width/height attributes.
  - In-body imagery: AVIF/WebP; aim for under ~100KB at delivered size.
  - Below-fold media lazy-loaded.
- **Video codecs:** H.265/HEVC where supported, AV1 for modern browsers, MP4/H.264 fallback. Hero video under 1.5MB desktop / 600KB mobile after compression. Muted by default. Paused on `prefers-reduced-motion`.
- Smooth-scroll libraries (Lenis et al.) tuned, not default-shipped.
- Third-party scripts audited and minimized.

### 2.6 Accessibility floor
- WCAG AA contrast on real backgrounds (not on flat neutral mockups — the actual color the text sits over).
- Visible focus indicators on every interactive element.
- Keyboard navigability tested end to end.
- Alt text on all imagery; decorative images marked as such.
- Semantic HTML landmarks (`<main>`, `<article>`, `<nav>`, `<footer>`).
- `prefers-reduced-motion` honored throughout.
- Captions or transcripts for any video carrying spoken or significant audio content.
- VoiceOver / NVDA tested on homepage and at least one project page.
- **No autoplay audio anywhere. Ever.**

### 2.7 Copy voice
- Two-sentence section intros maximum.
- First-person designer voice, not agency-deck voice.
- **Banned vocabulary:** elevated, crafted, bespoke, curated, immersive, journey, experience, unleash, empower, holistic, seamless. Replace each with the actual decision made.
- Captions short, italicized or mono, optional. Never narrate what the image shows.

### 2.8 Navigation and orientation
- Persistent or persistently summonable navigation. Hidden menus must have obvious triggers.
- Index always one click away.
- The user must always know: where am I, how do I get back, what's next.
- Project pages link to the next project, not a generic dead end.
- Custom 404 on brand, mandatory.

---

## 3. The wardrobe: per-project-type modules

The skeleton is fixed; the wardrobe is chosen. For each project type: page structure, hero, image sequence, motion opportunities, mockup strategy, common mistakes.

### 3.1 Branding / Identity systems
- **Page structure:** Logo or signature application reveal → system overview (typography, color, mark behavior) → applications across surfaces → detail moments → outcome.
- **Hero:** The mark itself, set very large on a generous color field. Or a hero photograph of the identity in its most signature application (a sign, a publication cover, packaging). Avoid logo-on-white-grid heroes — the case-study cover slide cliché.
- **Image sequence:** Wordmark → secondary mark → typographic specimen → palette in real application (never as swatch chips alone) → applications (print, digital, environmental) → construction grid only if interesting.
- **Motion:** Logo construction reveal as one scroll-driven moment. Variable-axis animation if the type supports it. One ambient hover state revealing mark behavior.
- **Mockup approach:** Real-world applications in context — printed business card on a surface, sign on a wall, tote in a hand. Photography over generated mockups every time.
- **Mistakes:** Logo on white for ten consecutive scrolls; specimen pages that look like a Behance template; brand-guidelines spreads from PSD generators; pretending a one-week logo job was a six-month identity system.

### 3.2 Print / Publication / Editorial
- **Page structure:** Cover → editorial premise → spreads sequenced like a flat plan → typographic detail → context shots → outcome.
- **Hero:** Full-bleed photograph of the printed piece — held, on a surface, in environment. Real paper, real light, real scale.
- **Image sequence:** Cover establishment → key spreads paired as facing pages (the way they're actually read) → typographic detail crops → in-context shots for scale → flat plan if useful.
- **Motion:** A single moment where a spread reveals on scroll, or a publication opens. Don't flip through it like a digital magazine — that cheapens the print.
- **Mockup approach:** Photograph the actual printed piece. If it doesn't exist yet, clean flats on a single surface with consistent lighting. **No 3D Photoshop mockup generators** — juries recognize them on sight.
- **Material vocabulary for hero photography:** consistent grazing light (not flat top-down), visible paper grain or finish, soft drop shadows under the piece (1–3mm) reading as physical contact, color-balanced to a neutral surface that doesn't compete with the work.
- **Mistakes:** Floating book mockups at angles, isometric publication stacks, pretending unprinted concepts are printed work, showing every spread, generic studio-light renderings.

### 3.3 Signage / Wayfinding / Environmental
- **Page structure:** Wide environment shot → system explanation → individual signs in context → typographic or pictogram detail → human-for-scale moment → outcome.
- **Hero:** In-environment photography that reveals scale. A hallway, a façade, a gallery. Never a flat sign on a white background as the lead.
- **Image sequence:** Establishing wide → medium environmental → close detail → at least one human-for-scale image. Without scale reference, signage reads as decorative type.
- **Motion:** Slow camera-style reveals on environmental shots. One scroll-pinned moment moving from wide to detail. Documentary tempo, not product-launch tempo.
- **Mockup approach:** On-site photography is mandatory, not optional. If access is impossible, composited environmental shots with documented light and scale references.
- **Material vocabulary:** show actual material properties — brushed aluminum grain, satin metal finishes, back-painted acrylic, painted concrete, applied vinyl with visible edge. The work is physical; the photography must communicate that.
- **Mistakes:** Flat sign artwork on white as primary asset; no scale reference; pictogram grids as dominant content; treating signage as graphic design rather than spatial work.

### 3.4 Web / Digital / Product
- **Page structure:** Hero plate (key screen) → product thesis → desktop screen sequence → mobile counterpoint → component or system detail → outcome.
- **Hero:** A signature screen presented as artwork — full-bleed, no chrome, or with one consistent chrome treatment. Or a real-device photograph. Never a floating laptop with a generic glow.
- **Image sequence:** Lead with the strongest screen. Pair desktop + mobile when there's a meaningful relationship. Show the system (typography page, component sheet) once. Detail crops to demonstrate craft. Never show every page of the site.
- **Motion:** One scroll-pinned reveal on the hero screen. Subtle Ken-Burns drift on one ambient shot. Hover-state demonstrations if the product has a strong interactive moment. Don't recreate the product in the case study — the user doesn't need to use it again on your portfolio.
- **Mockup approach:** Prepared screenshot plates treated as finished artwork (see Section 5). Real device photography for hero or environmental moments. Choose one chrome treatment and apply it everywhere.
- **Mistakes:** Floating laptop composites; live iframes embedding the actual site; vertical strips of stitched-together screens; six-up grids of mobile phones; cropping prepared screenshots after they've been finished; auto-playing screen recordings.

### 3.5 Motion graphics / Animation / Title sequences
- **Page structure:** Hero video (silent, looping, single shot) → premise → process or system → frame stills → variants or family → outcome.
- **Hero:** A muted video loop of the strongest single shot. One continuous take if possible. Audio toggle off by default; only ship if rights are cleared.
- **Image sequence:** Hero loop → key frames as stills → process artifacts (storyboards, frame-by-frame) only if genuinely strong → variants (titles, lower-thirds, idents) as a family grid → behind-the-scenes only if the process is the story.
- **Motion:** The work *is* the motion. Page motion should be exceptionally restrained — fade-ins, gentle scroll reveals, no parallax. Anything more competes with the work.
- **Mockup approach:** Video as itself, embedded with native or custom minimal controls. Frame grids as still imagery. Don't put motion graphics inside fake TV mockups — redundant.
- **Codec spec:** AV1 for primary delivery on supporting browsers, H.265/HEVC fallback, H.264 baseline fallback. Bitrate calibrated to viewport — heroes can run higher; thumbnails much lower.
- **Mistakes:** Autoplay with audio; multiple competing videos in the viewport; hyperactive page motion drowning the work; embedding YouTube with the recommendations bar visible; showing the work at thumbnail size.

### 3.6 Campaign / Integrated / Multi-channel
- **Page structure:** Hero idea statement → key visual → channel rollout (OOH, digital, social, print, broadcast) → results → outcome.
- **Hero:** The single strongest visual from the campaign — typically OOH or hero film key frame. The idea must be communicable in one image.
- **Image sequence:** Idea-led, not asset-led. Hero visual → channel applications grouped logically → strongest single execution per channel rather than every variant → results data only if genuinely strong.
- **Motion:** Channel-by-channel reveal as the user scrolls — one channel per chapter beat. Hero film embedded once, muted, looping, optional audio.
- **Mockup approach:** Real-world placement is gold — actual OOH photography, in-environment shots. Where mockups are necessary, environmental composites only. Avoid dashboard-of-Instagram-phone-mockups.
- **Mistakes:** Showing every asset; mockup dashboard format (six phones in a row); no clear hero idea; results invented after the fact.

### 3.7 Production / Behind-the-scenes / Fabrication
- **Page structure:** Final artifact tease → process documentation → finished work → context → outcome. Or, if process is the story: process documentation → finished work → context.
- **Hero:** Either a hero shot of the finished artifact or a striking process moment (hands at work, machinery, materials). Decide which is the lead and commit.
- **Image sequence:** Documentary tempo — wide process → medium working → detail of material → finished artifact → in-context. Should feel like a magazine feature about the making.
- **Motion:** Documentary-style fades, gentle scroll reveals, perhaps one slow Ken-Burns on a process shot. Tactile work demands quiet pages.
- **Mockup approach:** Real photography is the only acceptable approach. Generated mockups undermine the entire premise of craft work.
- **Mistakes:** Too much process with no payoff shot; fetishizing tools rather than work; pretending mass-produced output is hand-made; black-and-white process paired with color final without intent.

### 3.8 Large-format / Installation / Exhibition
- **Page structure:** Wide environmental hero → premise → system or family → individual pieces in environment → detail or human-for-scale → outcome.
- **Hero:** In-environment photography with scale immediately readable. The hero must communicate "this is large" in the first frame.
- **Image sequence:** Establish scale first, always. Wide → medium → detail → human reference. Without a human reference somewhere, large-format reads small.
- **Motion:** Slow environmental reveals. A scroll-pinned moment moving through space. Subtle parallax mimicking walking past or approaching the work.
- **Mockup approach:** Real photography or expert composites with documented scale. Renders that look like architectural visualization rather than real photography are a tell.
- **Mistakes:** Renders without scale reference; flat artwork shown larger than environmental shots; no human-for-scale; small-resolution photography on a project fundamentally about scale.

### 3.9 Mixed media / Cross-discipline
- **Page structure:** Unified hero → thesis → chapters by medium → throughline detail → outcome. The throughline is critical: what makes these disciplines one project rather than five.
- **Hero:** A single image capturing the breadth — often a photograph of multiple touchpoints in environment, or a signature image bridging mediums.
- **Image sequence:** Chaptered by medium (Identity → Print → Signage → Web), with a visual throughline (recurring color, typographic motif, returning element) holding chapters together.
- **Motion:** Chapter transitions signaling medium change while maintaining tonal continuity. One pinned moment per medium maximum.
- **Mockup approach:** Each medium handled by its own rules above, unified by a single color grade and consistent chrome treatment across all assets.
- **Mistakes:** Equal weight across mediums when one is clearly the lead; losing the throughline so the page reads as several disconnected projects; chapter labels reading as deck table-of-contents.

---

## 4. Homepage and project index quality bar

### 4.1 Homepage
- Hero communicates the designer's or studio's thesis in 3 seconds. Not the bio — the angle.
- One idea per frame. A heroic still with one moving element outperforms a busy intro.
- The hero's typographic system *is* the site's typographic system — visible, confident, full-size in the first frame.
- At least one project visible in the first scroll. Don't bury the work behind preamble.
- About / contact / footer must complete the brand. Most portfolios spend 80% of their care on the hero and ship a default footer; juries notice.
- **Avoid:** "Hi I'm [name], a designer & developer based in [city]" marquee opener; gradient mesh blob heroes; generic preloaders; client-logo strips; "available for work" pill as the hero's defining element.

### 4.2 Project index
- One row, one project, one image. Avoid grids of small thumbnails — they rob each project of presence.
- The image must be the strongest single shot from the project, not a decorative cover designed for the index.
- Hover or focus state reveals metadata (title, year, type, role); permanent display only if fewer than five projects.
- Order is editorial, not chronological, unless chronology tells a stronger story. Lead with strongest work.
- **Filtering UI only if 20+ projects.** Below that, filters are overdesign.
- Each row links with a transition that holds an element (image, title) across navigation. Not a route swap.
- **Avoid:** dense grid layouts reading as e-commerce catalogs; "case study card" treatments with name + tags + descriptor on every tile; identical-aspect-ratio thumbnails flattening visual variety.

---

## 5. Image sequencing rules (universal)

- **Wide → medium → detail.** Editorial photography rule applied to every project type.
- **Pair by relationship, never by symmetry.** Random pairs read as filler.
- **Crop bravely.** Showing 60% of an image is more confident than showing 100%. Bleed off the edge.
- **One color grade per project**, applied to the entire image set. No inconsistent tones across the page.
- **Aspect ratios: pick two or three per page, hold them.** Random rectangles read as a CMS dump.
- **Image count per page: roughly 12–18 max.** Curate ruthlessly. The juror needs the moments that make the case, not every asset produced.
- **Hero image is decisive.** It earns the page and previews the thesis. Choose it last, after the page is built.

---

## 6. Website screenshot showcase rules

For digital and product projects specifically. Most error-prone area in modern portfolios.

- **Prepared screenshots are finished artwork.** They are not raw assets. The page presents them, never re-edits them.
- **One chrome treatment per page**, applied universally. Either no chrome anywhere, or a minimal consistent frame anywhere. Never mix.
- **Lead with the strongest screen full-bleed.**
- **Pair only when pairs have meaning** (homepage + detail, desktop + mobile, before + after).
- **Maximum ~6 prepared screenshots per case study.** Beyond that, cut.
- **Maintain readable scale.** Smallest type in the screenshot at least 10–11px on a 1440 viewport. Don't shrink hero screens into thumbnails.
- **Mobile screens in dialogue with desktop**, not as separate stacked blocks.
- **No live iframes.** Performance dies, composition breaks, the page reads as a developer demo.
- **No fake UI generated to fill grid gaps.** Adjust the grid, not the truth.
- **No post-hoc cropping, regrading, or reflowing of prepared screenshots.** If a screenshot doesn't fit a slot, the slot is wrong.

---

## 7. Mockup and asset presentation rules

Across all project types.

### 7.1 Hierarchy of acceptability
1. **Real photography in context** — the gold standard.
2. **Clean flats on consistent surface** — acceptable fallback to real photography.
3. **Environmental composite with documented scale and light reference** — acceptable for large-format work where access is impossible.
4. **Generated 3D mockups from PSD/Yellow-Images-style templates** — never acceptable.

### 7.2 Material and lighting cues that read as premium
- Single, consistent grazing light source per project (not flat overhead, not multi-source confusion).
- Visible material grain or texture (paper fiber, brushed metal, painted surface, fabric weave).
- Soft, short cast shadows (1–3mm, in scale with the piece) implying physical contact with surface.
- Color balance neutral or subject-driven, never default Photoshop preset.
- Backgrounds quieter than the subject — the work is the lead, the surface is the stage.

### 7.3 Material and lighting cues that read as cheap
- Flat top-down lighting with no directionality.
- Identical lighting reused across multiple "different" mockup shots (it's the same template).
- Drop shadows that don't match light direction across the page.
- Mockup edges that don't quite align — the giveaway of a free template applied to artwork at the wrong aspect ratio.
- Over-rendered "studio" finishes with no surface imperfection (the AI-render look).
- Generic neutral backgrounds with subtle radial gradients (the default Yellow Images aesthetic).

### 7.4 One philosophy per project page
Either it's a real-photography page, a clean-flats page, or an environmental-composite page. Mixing reads as inconsistent sourcing.

---

## 8. Motion and interaction principles

The governing principle: *every animation must earn its place.* If you removed it and the page got worse, keep it. If the page got cleaner, kill it.

- **Approved easing set:** two or three editorial curves, documented as code constants.
- **Duration bands:** micro 300–600ms, set piece 800–1200ms, hero 1200–1600ms, page transition 600–1100ms.
- **Scroll reveals follow the 80/20 rule.** 80% of elements appear immediately; 20% reveal with intention. Inverting kills rhythm.
- **Hero motion: one element max.**
- **Per-page maxima:** one scroll-pinned moment, one drifting/Ken-Burns image, one typographic motion event.
- **Cursor effects:** optional, purposeful only. Magnetic links and play/drag indicators may ship if they communicate something. **Cursor trails do not ship.**
- **Page transitions hold an element across pages.** Held element is the standard; default route swap is the floor.
- **`prefers-reduced-motion` fallbacks ship alongside every animation.**
- **Pre-rendered video / Remotion** justified only when motion is too complex for runtime CSS/GSAP, when frame-perfect timing matters, or when the asset is itself a video deliverable. Otherwise GSAP + ScrollTrigger + Lenis covers 95% of what a portfolio of this scope needs.
- **No autoplay audio. Anywhere. Ever.**

### Per-project-type motion intensity guidance
- **Branding / identity:** restrained. One mark-construction reveal, one ambient hover.
- **Print:** very restrained. Print is still; the page should breathe with it.
- **Signage / large-format:** documentary. Scroll-paced reveals through space.
- **Web / digital:** moderate. One pinned screen reveal, hover-state demos.
- **Motion graphics:** *the page is the quietest in the portfolio.* The work is the motion.
- **Campaign:** chapter-by-chapter, channel reveals.
- **Production / fabrication:** documentary. Quiet.
- **Mixed media:** chapter-transition motion signals medium change.

---

## 9. Typography and spacing principles

- **Three levels max per section** — display, body, metadata.
- **Display tracked tight** (-1% to -3%); **body tracked open** (0% to +1%).
- **Display 8–14% of viewport height** in heroes; smaller for in-body section heads.
- **Body 16–18px desktop, 15–17px mobile.** Below 14px is unreadable for most.
- **Line length 60–75 characters** for long-form copy.
- **Captions in italic or mono**, set quiet, optional rather than mandatory.
- **Section spacing rooted in baseline grid.** Section breaks at 2× largest body line height minimum. Hero spacing 4–6× body line height.
- **Negative space is content, not absence.** Schedule it. Full-viewport-height empty sections are powerful — but only after density.
- **No drop shadows on type** unless deliberately editorial. **No outline strokes** unless systemic. **No mix-blend-mode** without subject-driven reason.

Document the type system in the repo: face, weight, size, leading, tracking, allowed combinations, banned combinations.

---

## 10. Mobile principles

Mobile is judged independently and harshly. A desktop site stacked into a column is an automatic demerit.

- **Mobile is its own composition.** Decide what each section's *mobile* version is.
- **Side-by-side on desktop usually becomes stacked full-bleed on mobile**, not narrow columns.
- **Mobile screenshot strategy:** lead with mobile screens when they exist; if only desktop screens exist, present them at full-bleed in landscape orientation, never shrunk into a portrait viewport.
- **Type scale shifts.** Display 10–14% of viewport *width* on mobile. Body 15–17px.
- **Hover states don't exist on mobile.** Plan for tap and scroll equivalents.
- **Custom cursors are irrelevant on mobile.** Don't ship complexity that does nothing.
- **Performance is unforgiving on mobile.** Cut hero video on mobile or replace with image. Lazy-load aggressively. Inline critical CSS only.
- **Thumb-zone usability.** Primary nav and CTAs in the bottom 60% of the screen, not pinned to the top corner.
- **Mobile-first polish:** a juror often opens portfolios on phone first.

---

## 11. Usability principles

- **Navigation visible or one-tap available** on every page.
- **The user always knows three things:** where am I, how do I get back, what's next.
- **Scroll direction is honest.** Vertical scroll = downward progression. Horizontal scroll within a section is allowed if telegraphed; never as the dominant page direction.
- **Scroll-jacking that fights user input is grounds for a Usability score under 7.** Locked moments must release at section end. (Note: Gemini's "Scroll-Jacking Done Right" framing is rejected here. Scroll-pinning a single moment is acceptable; jacking the entire scroll experience is not.)
- **Every interactive element looks interactive.** Every non-interactive element doesn't.
- **Non-standard interactions must be telegraphed** — a microinteraction on first encounter, a one-time hint, a cursor change.
- **404 is on-brand and routes home.** Custom 404 page mandatory.
- **Project pages link to next project**, not a dead end.

---

## 12. Submission-readiness checklist (every page)

Every page in the portfolio — homepage, index, every project page, about, contact, 404 — must clear this floor before submission:

- [ ] Hero communicates the page's purpose in 3 seconds.
- [ ] Every section earns its placement.
- [ ] All imagery color-graded as a coherent set.
- [ ] All prepared screenshots presented untouched, at readable scale, with one chrome treatment.
- [ ] Maximum one scroll-pinned moment, one drifting image, one typographic motion event.
- [ ] Every animation passes the earn-its-place audit.
- [ ] `prefers-reduced-motion` fallback ships alongside every animation.
- [ ] Mobile composition is its own design.
- [ ] Lighthouse Performance ≥ 80 mobile / ≥ 90 desktop.
- [ ] LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms.
- [ ] Hero asset weight ≤ 1.5MB desktop / ≤ 600KB mobile.
- [ ] All raster imagery AVIF/WebP with explicit dimensions.
- [ ] Hero video AV1/H.265 with H.264 fallback, muted, paused on reduced-motion.
- [ ] WCAG AA contrast on real backgrounds.
- [ ] Visible focus indicators on every interactive element.
- [ ] Keyboard navigable end to end.
- [ ] Alt text on all imagery.
- [ ] Semantic HTML landmarks.
- [ ] og:image renders at 1200×630, meta description set, sitemap, robots.txt, complete favicon set.
- [ ] Custom 404 on brand.
- [ ] No autoplay audio.
- [ ] Next-project transition tested, holds an element across navigation.
- [ ] Copy edited for banned vocabulary.
- [ ] Submission screenshot deliberately chosen — it is the second hero of the site.

---

## 13. Ballet Edmonton as pilot validation

Ballet Edmonton is the test case. Its purpose is to validate that the system above produces an Awwwards-credible page on at least one project type — and to surface gaps in the system before scaling.

- **Project type:** Mixed media (3.9 primary), with Web/Digital (3.4) governing the screenshot section and Branding (3.1) governing identity sections.
- **Skeleton applied:** Hero → Thesis → Body chapters (identity, print, digital, detail) → Colophon → Next-project.
- **Wardrobe choices:** editorial display typography (already in identity); 2.39:1 hero ratio paired with 4:5 portrait crops; one scroll-pinned moment on the first prepared website screenshot; one Ken-Burns drift on the hero image; no chrome on any prepared screenshots; documentary motion tempo (slow, weighted, decisive — not bouncy).
- **Tonal references for calibration:** the cultural-institution / performing-arts category — the visual register of long-form arts editorial publications and major cultural-organization websites. Quiet, considered, weighted, breathing. *Not* the maximalist studio-portfolio register.
- **Tone applied through universal rules:** two-sentence intros, banned vocabulary, image-as-copy, restrained motion within the approved set.

**What Ballet Edmonton validates:**
- The skeleton holds for a refined editorial subject.
- Screenshot showcase rules produce a strong outcome with prepared assets.
- Motion vocabulary feels appropriate when applied with restraint.

**What Ballet Edmonton will not validate:**
- The system's ability to handle louder project types (campaign, motion graphics, large-format). Each needs its own pilot before submission.
- Mobile parity at scale — test rigorously on Ballet Edmonton; assume the same effort on every other project page.

Use Ballet Edmonton's outcome to refine the system documentation. The system is the deliverable; Ballet Edmonton is the proof.

---

## 14. Repo documentation Codex should produce

Practical guidance per file.

### `/art-direction/reference-analysis.md`
- Document the skeleton/wardrobe model as the system's core architecture.
- List the universal rules from Section 2 in full.
- For each project type (Sections 3.1–3.9), document the module: page structure, hero, image sequence, motion, mockups, mistakes-to-avoid.
- Note trends explicitly *not* being adopted: gradient meshes, isometric mockups, glassmorphism, cursor trails, autoplay audio, percent-counter loaders, bento-grid homepages, fade-up-everything, skew-on-scroll, marquee openers, scroll-jacking-as-feature, mouse-trail decorative cursors, ASCII-reveal interaction gimmicks.
- Reference categories of work, not specific URLs to mimic.
- Document the dead-vocabulary list as a banned-terms reference.

### `/art-direction/project-page-system.md`
- Define the five-act page skeleton (Hero → Thesis → Body → Colophon → Next-project).
- Define each chapter type's role (setup, system, application, detail, outcome).
- Define pacing rules: max full-bleeds, max scroll-pinned moments, max motion-active images, density alternation.
- Define the colophon structure: role, scope, year, collaborators, one specific outcome.
- Define the next-project transition as a visually committed required element.
- Define how to choose the right project-type module (Section 3) per project, including mixed-media handling.
- Define the screenshot chrome treatment policy: one per page, applied universally.

### `/art-direction/motion-direction.md`
- Document the earn-its-place principle as the governing rule.
- Document the approved easing set as code-ready constants.
- Document duration bands: micro / set piece / hero / page transition.
- Document per-page maxima: one scroll-pinned moment, one drifting image, one typographic motion event.
- Document the page transition specification (held element, duration band).
- Document the `prefers-reduced-motion` fallback strategy as a parallel-ship requirement.
- Document per-project-type motion intensity guidance (motion graphics quietest; signage documentary; etc.).
- Document video codec strategy: AV1 primary, H.265 fallback, H.264 baseline fallback.

### `/art-direction/image-redesign-rules.md`
- Document the prepared-screenshot rule: finished artwork, never re-edited, never cropped post-hoc, never reflowed.
- Document the no-floating-laptop rule.
- Document the no-3D-render-mockup rule for print.
- Document the real-photography-first hierarchy (real photo > clean flat > environmental composite > generated mockup).
- Document the aspect-ratio policy: pick two or three per page, hold them.
- Document the color-grade policy: one grade per project, applied to the full set.
- Document image-weight budgets and format requirements (AVIF/WebP; hero ≤1.5MB desktop / ≤600KB mobile; in-body ≤100KB at delivered size).
- Document the per-project-type mockup strategies from Section 3.
- Document the material-and-lighting cues from Section 7 (premium signals vs. cheap signals).

### `/art-direction/page-review-checklist.md`
The submission-readiness checklist from Section 12, formatted as actionable checkboxes, with separate sub-checklists for:
- Homepage
- Project index
- Each project page
- About / contact
- 404

### `/art-direction/learnings.md`
- Document the thesis sentence pattern: every project has one, written down before implementation.
- Document what worked and what didn't on Ballet Edmonton (post-pilot retrospective).
- Document any rule that bent on Ballet Edmonton and the rationale.
- Document where the existing brand identity proved strong and where it strained.
- Document patterns emerging across project types as the wardrobe gets exercised.
- Maintain as a living document; updated after every project page goes live.

---

## 15. What Codex should reject or avoid

- Adding new colors to the palette.
- Introducing new fonts.
- Replacing or modifying prepared website screenshots.
- Cropping prepared screenshots to fit grid slots.
- Generating fake UI to fill empty space.
- Live iframe embeds of any project's actual site.
- Floating laptop / phone composites.
- 3D-rendered print mockups from PSD generator templates.
- Cursor trails, particle effects, sparkle states.
- Autoplay audio anywhere.
- Percent-counter preloaders.
- Splash screens that delay content without communicating.
- Bento-grid homepage layouts.
- Page transitions longer than ~1.2s without payload.
- Animations applied universally (every block fade-up).
- Skew-on-scroll text reveals.
- Marquee openers ("designer & developer based in...").
- Client-logo strips on a personal portfolio.
- Filtering UI on the project index if there are fewer than ~20 projects.
- One universal page template across all project types.
- Treating every project page as if it were Ballet Edmonton.
- Layout experiments that hurt usability — mystery navigation, hidden interactions without telegraphy, abstract glyphs as primary nav triggers.
- Dead-vocabulary copy.
- Process pages padded with mood boards if artifacts aren't genuinely strong.
- Copying specific Awwwards-featured layouts. Extract principles, never compositions.
- "Scroll-jacking done right" as a feature framing — pinning a single moment is acceptable; jacking the scroll experience is not.
- Decorative interaction gimmicks — mouse trails, ASCII pixel reveals, novelty zoom tools — that don't communicate something concrete.
- Trend-label thinking ("Glow Design," "Minimalist Maximalism," "Surprise and Delight"). Use durable principles.

---

## 16. What Codex should defer to later phases

- **Audio toggle / sound design.** Defer until rights and rationale are both clear. Most portfolios are stronger silent.
- **Custom WebGL effects.** Defer unless a specific project demands them — and only after standard motion vocabulary has been applied.
- **Variable font choreography** beyond simple weight-on-entry. Defer until type system is fully documented and at least one pilot has proven the pattern.
- **Custom cursor system.** Defer unless purposeful states are identified per page.
- **Loader / preloader.** Defer entirely unless it communicates something specific. Default is no loader.
- **Filtering UI on project index.** Defer until project count crosses ~20.
- **Audio captions / transcripts.** Defer until video is finalized — but mandatory before submission.
- **CMS integration.** Defer until system documentation and at least three project pages are stable.
- **Dark mode toggle.** Defer entirely unless part of existing brand identity.
- **Internationalization.** Defer unless explicitly part of audience strategy.
- **Animation-heavy pre-rendered video assets (Remotion).** Defer until the project genuinely cannot be served by GSAP/CSS — and document why before implementing.

---

## Closing note for Codex and the designer

The system is the deliverable. Ballet Edmonton is the proof. Every other project page in the portfolio — existing or future — must inherit this system to reach the same standard.

Three lines to govern every implementation decision:

1. **The skeleton is fixed; the wardrobe is chosen.** Don't break the skeleton. Don't dress every project the same way.
2. **Variation within constraint.** A juror should sense the system without being able to predict the next page.
3. **The portfolio is judged at its weakest page.** Every page clears the bar, or the bar isn't real.

Build the system. Document the system. Apply the system. Then submit.

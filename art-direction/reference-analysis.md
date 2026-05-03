# Reference Analysis

## Purpose

This file stores reusable design observations from top portfolio and agency references.

Codex may study references only when the user provides URLs or screenshots, or when explicitly asked to research.

## What to analyze

For each reference:

1. First impression
2. Hero structure
3. Typography
4. Image rhythm
5. Grid system
6. Motion behaviour
7. Case-study storytelling
8. What makes it feel premium
9. What should not be copied
10. What can be translated into this portfolio’s brand

## Important rule

Do not copy another studio’s design.

Extract principles:
- rhythm
- restraint
- hierarchy
- pacing
- interaction logic
- image treatment

Do not copy:
- exact layouts
- proprietary imagery
- brand marks
- writing
- distinctive art direction that belongs to another studio

## Reference entry template

### Reference name / URL

Date reviewed:

#### What works

#### Why it feels premium

#### Layout principles to learn

#### Motion principles to learn

#### What not to copy

#### How to adapt into this portfolio

---

# Awwwards Trend / Reference Research — Portfolio Submission Pass

Date reviewed: 2026-04-25

## Research summary

Live research was available and used. Primary references reviewed:

- Awwwards Evaluation System: https://www.awwwards.com/about-evaluation/
- Awwwards Sites of the Day index, current 2026 winners and tags: https://www.awwwards.com/websites/sites_of_the_day/
- Ravi Klaassens portfolio, SOTD Apr 15 2026: https://www.awwwards.com/sites/ravi-klaassens
- Cyd Stumpel Portfolio 2025, SOTD Mar 9 2025: https://www.awwwards.com/sites/cyd-stumpel-portfolio-2025
- Clou Agency Portfolio, SOTD Sep 5 2025: https://www.awwwards.com/sites/clou-agency-portfolio
- AW Portfolio, SOTD Dec 12 2024: https://www.awwwards.com/sites/aw-portfolio
- Nathan Smith portfolio, SOTD reference for non-linear project browsing: https://www.awwwards.com/sites/nathan-smith
- Broader 2025-2026 trend commentary on kinetic type, editorial layouts, human/authentic visual systems, and motion minimalism.

Awwwards judging is weighted toward Design, Usability, Creativity, and Content, with Design carrying the largest share and Usability close behind. Developer Award review separately considers semantics/SEO, animations/transitions, accessibility, WPO, responsive design, and markup/metadata. This portfolio must therefore avoid the common trap of treating Awwwards as only a visual or motion contest. The strongest direction is a restrained, image-led, technically polished portfolio with one or two memorable interactions per page, not a trend collage.

## Key reference principles

1. First impression must be specific.
   Award-level portfolio heroes do not just look good; they immediately establish authorship, mood, and craft. The opening moment should answer: who is this designer, what kind of work do they make, and why should the viewer continue?

2. Motion is judged as behaviour, not decoration.
   Recent Awwwards portfolio references often highlight transitions, loading moments, menus, project movement, and hover states. The lesson is not to add more animation. The lesson is to make the site's few motion behaviours feel custom, consistent, and useful.

3. Project pages need editorial pacing.
   The best case studies behave more like directed features than archives. They alternate impact and quiet, overview and detail, stillness and motion. Text is present, but visuals carry the majority of the story.

4. Navigation must stay legible.
   Many award sites use unusual exploration patterns, but the credible ones preserve clear wayfinding: project index, next project, persistent return paths, and predictable mobile navigation.

5. Developer polish is part of the design.
   Accessibility, performance, responsive design, and metadata are not separate from the creative layer. They are part of whether the site feels finished.

## Trends to use

### FITS MY PORTFOLIO

- Editorial project pacing with large image moments and quiet text breaks.
- Condensed display typography used as a structural voice, not decoration.
- Mono metadata as a precise secondary layer.
- Dark-neutral cinematic framing.
- Scroll-led reveals, panel wipes, and restrained transition systems.
- Image sequencing that feels authored: full-bleed, paired detail, quiet plate, final payoff.
- Short case-study copy that clarifies role, outcome, and visual idea.
- A few custom interactions that make the portfolio memorable without making it slower.
- Motion that reveals hierarchy: image handoff, text entrance, project transition, final payoff.

### USE CAREFULLY

- Kinetic typography: useful for hero/transition moments, risky if repeated everywhere.
- 3D/WebGL: only use where the current home identity already depends on it or where it improves a project story.
- Horizontal or non-linear browsing: useful as an index or archive gesture, risky inside project pages.
- Browser/device mockups: useful for UI work when screenshots are high quality, weak when they expose low-resolution assets.
- Large screenshot displays: only if source quality can survive the scale.
- Preloaders: only if they communicate identity and mask real loading work; never as a delay for its own sake.
- Cursor effects: keep minimal and brand-consistent.

## Trends to avoid

- Trend-first glassmorphism, liquid blobs, neon gradients, and fake luxury styling.
- Generic bento grids used as a default portfolio language.
- Overproduced smooth-scroll behaviour that fights native browsing or hurts accessibility.
- Scroll-jacking and interactions that hide content behind performance-heavy choreography.
- Repeated fade-up animation without section-specific intent.
- Oversized screenshots when image quality is limited.
- AI-looking mockup environments, fake UI, fake depth, or invented project work.
- Decorative 3D/particles that do not explain the designer's actual work.
- Long case-study essays that make the page feel corporate.

## Portfolio-specific application rules

1. Keep the existing identity: dark, calm, editorial, image-led, technically sharp.
2. Do not chase trend colour systems. The palette should remain black/off-white/grey with rare blue accents.
3. Use Archivo Narrow as the dominant display voice, Inter for readable copy, and Fragment Mono for metadata.
4. Preserve the sticky hero and panel-wipe language as a signature portfolio behaviour.
5. Every project page needs one clear creative concept, not a new style system.
6. Every page should have a strongest-asset-first sequence.
7. Every image section must answer one job: establish, deepen, detail, transition, or close.
8. Website screenshots must be treated as artwork plates: show full prepared composition unless explicitly approved to crop, and never enlarge beyond source quality.
9. If a layout starts to feel like a grid dump, return to editorial sequencing.
10. Project endings need designed closure before the next-project transition.

## Motion implications for Prompt 6

Recommended motion focus:

- Audit the existing panel-wipe system and make it feel more intentional across home, work, and project pages.
- Define one signature project-page transition from hero to case-study intro.
- Add project-specific micro motion only where it clarifies sequence: image reveal, section title entrance, next-project handoff.
- Use transform/opacity first. Avoid layout-affecting animation.
- Respect reduced motion.
- Avoid adding GSAP/Lenis or other motion dependencies unless the existing Framer Motion stack cannot deliver the behaviour.
- For Ballet Edmonton, motion should feel like stage lighting and controlled entrance, not dance imitation.

Prompt 6 should produce a motion map, not immediately build animations. It should identify:

- global motion behaviours to keep
- global behaviours to refine
- project-specific motion opportunities
- mobile/reduced-motion fallbacks
- performance risks

## Image/mockup implications for Prompt 7

Recommended image direction:

- Use generated images only to improve presentation context, not to alter project work.
- Prefer editorial mockups with real project assets, controlled lighting, and simple material settings.
- Avoid generic floating-device compositions.
- Treat low-resolution screenshots as smaller plates.
- Use full-bleed only for high-quality imagery.
- Print, poster, and brand work can use larger cinematic mockups; website screenshots need more restraint unless source quality is strong.
- Every generated/mockup asset should have a defined role: hero, detail, transition, final payoff, or responsive proof.

## Full-site audit implications for Prompt 8

Audit every page against:

- first 3 seconds
- project clarity
- strongest asset position
- image rhythm
- copy density
- mobile sequence
- navigation clarity
- ending quality
- whether any section feels generic
- whether motion is doing real work

The audit should score Design, Usability, Creativity, Content, Motion, Mobile, Performance, and Accessibility. Anything below 8 must become a concrete refinement task.

## Awwwards judging alignment

### Design

Protect the current editorial identity and improve hierarchy, image rhythm, and endings. Do not add trendy decoration.

### Usability

Navigation, project flow, readable text, tap targets, and scroll clarity must remain obvious. Creative browsing is allowed only when it stays understandable.

### Creativity

Creativity should come from page rhythm, image curation, signature transitions, and project-specific storytelling, not novelty effects.

### Content

Each project must clearly communicate role, work type, idea, and outcome with short confident copy.

### Motion / animation

Motion should be custom, restrained, and tied to meaning. It should never delay browsing or hide weak layouts.

### Mobile

Mobile needs its own art direction: scale control, strong image order, readable type, and no collapsed desktop leftovers.

### Performance

Optimize images, compress video, lazy-load below-fold assets, avoid unnecessary libraries, and keep motion GPU-friendly.

### Accessibility

Preserve semantic headings, alt text, focus states, contrast, keyboard access, and reduced-motion support.

### Developer polish

Check SEO metadata, markup quality, image dimensions, no layout shift, build health, and route behaviour before submission.

### Overall memorability

The site should be remembered for controlled editorial confidence and strong project presentation, not for trend effects.

---

# Portfolio-Wide Awwwards Reference Research — Revised System Pass

Date reviewed: 2026-04-25

## Portfolio-wide research summary

This revised pass reframes the Awwwards research as a full portfolio system, not a Ballet Edmonton-specific refinement. Ballet Edmonton remains useful only as a pilot page for validating the system. The broader objective is to create a reusable art-direction and project-page decision framework that can scale across branding, print, signage, web/digital, motion graphics, campaigns, large-format production, and mixed-media work.

The reference conclusion remains the same: do not chase trends. Current high-end portfolio and studio sites feel award-worthy when they combine specific authorship, strong first impression, disciplined typography, intentional motion, clear project navigation, image curation, mobile care, and developer polish. The portfolio should become more judged and more deliberate, not more decorative.

The portfolio needs a flexible decision system rather than one universal project-page template. Each project should be directed according to its strongest asset, medium, audience, and proof of craft while preserving the same site identity: dark-neutral, editorial, image-led, condensed display typography, mono metadata, restrained motion, and clear navigation.

## Reusable Awwwards-level principles

1. Every page needs a dominant idea.
   The homepage, work index, and each project page should have a clear conceptual role. If a section cannot be explained as establishing, deepening, detailing, transitioning, or closing the story, it should be removed or reduced.

2. Strongest asset first, but not always biggest.
   The strongest visual should appear early. Scale should be based on quality, role, and source resolution. A low-resolution but important asset should be shown smaller and supported by stronger adjacent materials.

3. Editorial rhythm beats visual completeness.
   Showing every asset is less important than sequencing the right assets. If completeness matters, make it feel curated rather than archived.

4. Custom per project, consistent by system.
   Project pages can vary in hero structure, section rhythm, image scale, and motion moments. They should not vary in typography system, brand palette, navigation logic, or overall tone.

5. Motion must clarify the experience.
   Motion should reveal hierarchy, create atmosphere, connect sections, or make navigation memorable. Motion that only proves technical ability should be removed.

6. Usability is part of the aesthetic.
   Award-level work remains browsable. Navigation, scroll clarity, readable text, alt text, focus states, reduced motion, and load performance are design requirements.

7. The ending is a designed moment.
   Each project should close with a visual or narrative payoff before the next-project transition. Avoid simply running out of assets.

## Project-type-specific presentation rules

### Branding projects

- Best hero approach: a strong identity application or system overview, not necessarily a logo alone.
- Best section structure: identity premise, logo/system, applications, campaign/world, final brand moment.
- Best image sequence: hero application, mark/type detail, material/mockup spread, real-world or digital applications, closing system view.
- Best motion opportunities: subtle logo-safe reveal, system assembly, application carousel, transition from mark to world.
- Best mockup/screenshot approach: high-quality environmental or material mockups; avoid fake luxury staging.
- Avoid: logo-only pages, excessive brand-board grids, overexplaining strategy, invented brand extensions.

### Print projects

- Best hero approach: the printed object or strongest spread treated as a tactile editorial moment.
- Best section structure: object overview, cover/detail, interior rhythm, production details, final physical presence.
- Best image sequence: full object, close-up texture/type, spread rhythm, scale/context, final composed still.
- Best motion opportunities: page-turn sequence, print reveal, object rotation only if high quality.
- Best mockup/screenshot approach: natural light, controlled shadows, paper texture, realistic scale.
- Avoid: flat screenshots of spreads only, generic floating posters, too many equal-size pages.

### Signage / environmental projects

- Best hero approach: in-context sign or space-scale application.
- Best section structure: site context, primary sign, wayfinding/system details, material/scale proof, final environment.
- Best image sequence: exterior/context, detail, human/scale reference, system set, final hero environment.
- Best motion opportunities: walk-through reveal, directional sequence, before/after if useful.
- Best mockup/screenshot approach: realistic installation, perspective correctness, material fidelity.
- Avoid: isolated sign renders with no environment, fake impossible lighting, too many close-ups without scale.

### Web / digital projects

- Best hero approach: strongest real interface moment or interaction state, sized according to screenshot quality.
- Best section structure: product/website premise, key screen, interaction or responsive proof, detail states, final system/flow.
- Best image sequence: hero screen, high-value workflow, detail crop, responsive/device proof, closing composite.
- Best motion opportunities: scroll capture, state transition, menu/opening interaction, short product flow.
- Best mockup/screenshot approach: use real UI. Browser/device frames only when they add clarity. Preserve full prepared screenshots unless cropping is explicitly approved.
- Avoid: live iframe as portfolio presentation, screenshot dumps, oversized low-quality captures, fake UI recreation.

### Motion graphics projects

- Best hero approach: moving image first, with a strong poster frame fallback.
- Best section structure: motion premise, hero loop, still frames, system/keyframes, final reel or sequence.
- Best image sequence: poster frame, loop, frame set, process/boards if strong, final cut.
- Best motion opportunities: this is where motion should carry the page, but clips must be short and optimized.
- Best mockup/screenshot approach: compressed MP4/WebM, poster frames, stills extracted from real motion.
- Avoid: autoplay-heavy pages, uncompressed video, too many loops competing at once.

### Campaign projects

- Best hero approach: campaign image with the strongest emotional or communicative hit.
- Best section structure: campaign idea, hero application, channel spread, detail moments, audience/context proof.
- Best image sequence: key visual, poster/social/outdoor spread, detail crop, motion or digital extension, closing campaign wall.
- Best motion opportunities: campaign rollout, social cut, typographic transition, channel-to-channel reveal.
- Best mockup/screenshot approach: channel-specific, realistic, not generic ad-board staging.
- Avoid: treating all assets equally, weak social tiles as large moments, overusing grids.

### Large-format production projects

- Best hero approach: scale proof with real environment or production context.
- Best section structure: final installation, scale/context, production detail, material/finish, closing impact shot.
- Best image sequence: final wide, human scale, detail, production/process, final alternate angle.
- Best motion opportunities: reveal of scale, install progression, subtle before/after.
- Best mockup/screenshot approach: real photos if available; generated context only if it preserves the actual work.
- Avoid: making production work look like small flat graphics, missing scale reference.

### Mixed-media projects

- Best hero approach: strongest cross-medium moment that explains the range without becoming cluttered.
- Best section structure: central idea, medium 1 proof, medium 2 proof, bridge/interaction, final integrated system.
- Best image sequence: anchor image, contrast pair, detail, motion/digital bridge, final system composition.
- Best motion opportunities: transitions between media, system assembly, short reel.
- Best mockup/screenshot approach: each medium gets its correct presentation style; do not force everything into one grid.
- Avoid: equal-weight asset dumps, unclear hierarchy, excessive explanation.

## Trends to use carefully

- Kinetic typography: use as a rare signature moment, not a global habit.
- Smooth scroll / scroll-linked motion: use only if it preserves browser expectations and accessibility.
- 3D/WebGL: keep tied to the existing homepage identity or a real project need.
- Preloaders: only if they are fast, useful, and identity-driven.
- Cursor interactions: subtle only; never make basic navigation depend on cursor novelty.
- Browser/device mockups: useful for digital work, but only with strong source quality.
- Non-linear archives: useful on the work index if clarity remains intact.

## Trends to avoid

- A single universal template for every project.
- Decorative trend palettes that weaken the existing dark editorial identity.
- Generic bento grids as the default organization system.
- Glass/chrome/neon/luxury effects without project relevance.
- Oversized low-resolution screenshots.
- AI-looking mockup environments.
- Scroll-jacking, hidden navigation, or interactions that make browsing harder.
- Motion that delays content or repeats without purpose.
- Long agency-style essays that bury the work.

## Homepage implications

The homepage should establish the portfolio's authorship in the first 3 seconds. It should communicate a controlled creative identity, not only display an effect. The existing dark hero, large condensed type, Spline/media layer, and sticky/panel transition language can remain the signature, but Prompt 8 should audit whether the first viewport clearly says enough about the designer and the work.

Homepage rules:

- Keep the first impression specific, not generic.
- Preserve the dark cinematic editorial foundation.
- Make the hero motion feel intentional and performant.
- Ensure the first scroll handoff creates momentum rather than confusion.
- Work previews should show range and quality quickly.
- Avoid turning the homepage into a trend demo.

## Project index implications

The work/archive page should help judges understand range quickly. It can be more interactive than a plain list, but it must remain clear.

Project index rules:

- Show project type, title, and visual quality immediately.
- Let filtering or grouping clarify the range if the archive grows.
- Use hover/preview motion to create memorability, but keep it fast.
- Avoid equal treatment when project quality or strategic importance differs.
- Make the route into each project obvious.
- Mobile index should not become a long undifferentiated card stack.

## Project page implications

Project pages need a flexible art-direction decision process:

1. Identify the strongest asset.
2. Identify the project type and proof of craft.
3. Choose the hero approach.
4. Choose a section rhythm: editorial, cinematic, Swiss/system, gallery-led, or motion-led.
5. Sequence assets by story role, not file order.
6. Decide what gets removed, reduced, or treated as supporting material.
7. Define one memorable interaction or visual moment.
8. Design the ending.
9. Check mobile separately.

No project page should be considered complete until it has: a strong hero, clear project context, authored image sequence, concise copy, mobile-specific rhythm, optimized assets, accessible structure, and a designed final beat.

## Motion implications for Prompt 6

Prompt 6 should create a portfolio-wide motion direction system:

- Global motion: navbar, route/page transition, hero handoff, section reveal, work-card hover, next-project transition.
- Project-type motion: brand assembly, print page turn, signage walk-through, web interaction capture, motion reel, campaign rollout.
- Motion restraint: define where motion should not happen.
- Reduced-motion plan: equivalent static hierarchy for all meaningful animation.
- Performance budget: transform/opacity priority, compressed video, lazy motion assets, no new library unless justified.

Prompt 6 should not focus on Ballet Edmonton alone. Ballet Edmonton can be used to test whether a motion rule adapts well to an arts/culture project, but the deliverable should govern all pages.

## Image/mockup implications for Prompt 7

Prompt 7 should define a portfolio-wide image and mockup system:

- Which asset types deserve full-bleed treatment.
- Which assets should be smaller editorial plates.
- When to use generated mockup environments.
- How to preserve real work while improving presentation context.
- How to handle low-resolution or historical assets.
- How to present screenshots, print, signage, motion stills, and campaign assets differently.
- How to avoid making every project look like the same mockup set.

Image generation should be treated as presentation improvement, not content invention.

## Full-site audit implications for Prompt 8

Prompt 8 should audit the full portfolio, not only the pilot page:

- Homepage first impression.
- Work index clarity and range.
- Each project page's strongest asset, hero, rhythm, content, ending, mobile, and performance.
- Consistency of typography, navigation, colour, and motion.
- Whether any project page needs a different art-direction mode.
- Whether weak projects should be reduced, reframed, or removed from the main submission path.
- Accessibility, SEO, metadata, responsive behaviour, and build quality.

The audit should produce a prioritized refinement map: global fixes first, then high-value project-page improvements, then polish tasks.

## Ballet Edmonton as Pilot Validation

Ballet Edmonton is the pilot page, not the full objective. Use it to validate the broader system because it includes multiple media types: identity, print, program guide, motion, and website presentation.

What Ballet Edmonton tests:

- Whether the page can preserve the global portfolio identity while feeling project-specific.
- Whether a project can move from print to digital without becoming an asset dump.
- Whether screenshot presentation rules work when source quality is imperfect.
- Whether motion can be described as atmosphere and hierarchy rather than decoration.
- Whether the ending feels designed rather than merely complete.

Any Ballet-specific guidance should remain subordinate to the portfolio-wide system. The earlier line "For Ballet Edmonton, motion should feel like stage lighting and controlled entrance" is valid only as a pilot-page interpretation, not as a global motion rule.

---

# Unified Awwwards Portfolio System Synthesis — Claude / Gemini / Codex

Date synthesized: 2026-04-26

## Final synthesis summary

This section is the source-of-truth synthesis across:

- Codex's Awwwards trend/reference research.
- Claude's Portfolio-Wide Awwwards Art Direction System Report.
- Gemini's Portfolio Art Direction Master System report.

The final direction is portfolio-wide. Ballet Edmonton is only a pilot validation page. The objective is a reusable Awwwards-level art-direction system that can govern all current and future project pages without making every project look the same.

The final model is:

Same skeleton. Different wardrobe. One author.

The skeleton preserves the site's identity, usability, navigation, typography, motion vocabulary, accessibility floor, and performance rules. The wardrobe adapts hero treatment, section rhythm, image sequencing, mockup strategy, and motion intensity by project type and energy category.

## Accepted principles

### ACCEPT — Skeleton / wardrobe model

Adopt as the core project-page system. Every project page shares the same underlying page structure and site grammar, while choosing project-specific presentation modules.

Operating rule:

- The skeleton is fixed: hero, thesis, body chapters, colophon, next-project transition.
- The wardrobe is chosen: project type, energy category, hero archetype, image rhythm, motion intensity, mockup strategy.

### ACCEPT — Single Author model

Adopt as a global identity rule. The portfolio must feel like one authorial system, not separate microsites.

Fixed across the site:

- navigation structure
- typography system
- palette
- metadata style
- spacing logic
- interaction semantics
- accessibility behaviour
- reduced-motion behaviour

Variable by project:

- tempo
- image scale
- section density
- motion intensity
- presentation module
- visual emphasis

### ACCEPT — Energy Categories

Adopt Gemini's energy categories as a reusable layer:

- Calm / Editorial
- High-Energy / Campaign
- Technical / System
- Motion / Experimental

Energy categories may change pacing, reveal tempo, image rhythm, hover intensity, and preview behaviour. They may not change the navigation model, DOM/accessibility structure, typography system, or core identity.

### ACCEPT — Project index interaction architecture

Adopt one reusable interaction architecture for project index hover/focus states.

Baseline:

- static project image preview for every project
- title and metadata remain legible
- keyboard focus triggers the same visual state as hover
- mobile does not depend on hover

Energy-specific accents can adjust timing, scale, contrast, and optional motion preview. Motion previews are reserved for motion-led projects and require static poster fallback.

### ACCEPT — Prepared screenshot integrity

Prepared screenshots are finished artwork. If a screenshot does not fit a layout slot, change the slot rather than cropping, distorting, regenerating, or reflowing the screenshot.

### ACCEPT — Every animation earns its place

Every animation must communicate hierarchy, context, transition, atmosphere, or interaction state. If removing the animation makes the page clearer, remove it.

### ACCEPT — Technical / System premium rule

Technical/system pages should feel rigorous but not dry. Use precise alignment, metadata-to-image edge relationships, baseline-consistent captions, and at least one large editorial image break or cinematic detail moment.

## Modified principles

### MODIFY — Universal five-act skeleton

Claude's five-act structure is accepted, but must map to the existing project system:

1. Hero plate
2. Thesis / project info
3. Body chapters
4. Colophon / project facts
5. Next-project transition

The current sticky hero, panel wipe, project info block, modular sections, and next-project system remain the implementation foundation. The five-act model guides art direction; it does not require rebuilding every renderer.

### MODIFY — "One row, one project" index rule

Do not adopt as universal. The work index may use rows, cards, or another existing structure if it preserves hierarchy and range. The rule becomes:

- one reusable index architecture
- no generic catalog feeling
- every project gets a strong preview
- interaction/focus behaviour is consistent

### MODIFY — "Crop bravely"

Valid for photography, campaign imagery, environmental images, and generated mockup presentation. Not valid for prepared website screenshots unless the user explicitly approves crop creation.

### MODIFY — Motion stack recommendation

Claude suggested GSAP/ScrollTrigger/Lenis may cover most needs. This repo already uses React, Vite, Framer Motion, and existing scroll/panel behaviours. Final rule:

- use CSS and Framer Motion first
- use pre-rendered Remotion/video when motion is the work or frame-perfect output is needed
- defer GSAP/Lenis unless a specific motion requirement cannot be achieved cleanly in the existing stack

### MODIFY — Strict banned vocabulary

Use Claude's dead-vocabulary concept as an editing check, not an absolute ban. Avoid empty words like "elevated", "bespoke", "immersive", "journey", and "seamless" when they are filler. Use precise project-specific language instead.

## Rejected principles

### REJECT — One universal visual template

Rejected. The portfolio needs a universal skeleton, not identical pages.

### REJECT — Project-specific navigation systems

Rejected. Navigation and orientation must remain structurally consistent. Project energy can alter transition tempo and preview treatment only.

### REJECT — Live iframe as portfolio presentation default

Rejected for case-study presentation. It may be used only for deliberate interactive demos where interaction is the point and performance/accessibility are protected.

### REJECT — Generic device mockup language

Rejected as default. Floating laptops, generic phone rows, template PSD print mockups, fake UI, and decorative chrome weaken the portfolio.

### REJECT — Trend-led visual effects

Rejected: gradient blobs, glass/chrome/neon for its own sake, cursor trails, particle effects, percent-counter preloaders, autoplay audio, and scroll effects that make browsing harder.

## Deferred principles

- Audio and sound design: defer until rights, purpose, captions/transcripts, and user value are clear.
- Custom WebGL effects beyond the existing identity: defer until a project genuinely needs them.
- Variable-font choreography: defer until typography rules and motion hierarchy are stable.
- Filtering on the work index: defer until project count or browsing complexity justifies it.
- CMS integration: defer until the system is stable across multiple project pages.
- Heavy Remotion reel generation: defer until Prompt 6 identifies a specific motion asset that cannot be handled statically or with runtime motion.

## Awwwards portfolio-wide direction

The portfolio should be judged as a single authored system with controlled variation. It should feel:

- dark
- calm
- editorial
- technically sharp
- image-led
- premium without fake luxury
- memorable through pacing and clarity
- polished in accessibility and performance

The target is not trend adoption. The target is a portfolio where every page feels intentionally directed and no page feels like a leftover template.

## Skeleton / wardrobe model

Skeleton:

- sticky or decisive hero
- concise thesis / project info
- 3-5 body chapters where complexity justifies it
- quiet colophon / facts
- designed next-project transition
- consistent navigation
- consistent typography and spacing
- consistent accessibility and reduced-motion behaviour

Wardrobe:

- project type module
- energy category
- hero archetype
- image rhythm
- motion intensity
- mockup or screenshot treatment
- chapter density

Rule:

Never break the skeleton to create novelty. Never force every project into the same wardrobe.

## Single Author model

The site should feel like one designer with range, not multiple unrelated art directions.

Consistent:

- nav placement and behaviour
- work index architecture
- page transition vocabulary
- type hierarchy
- metadata system
- button/link language
- focus states
- footer/contact treatment

Variable:

- project energy
- section scale
- image ordering
- pacing
- motion intensity
- mockup type

## Energy category system

### Calm / Editorial

- Tone: quiet, refined, spacious.
- Hero behaviour: slow reveal, strong still image, minimal overlay.
- Image rhythm: full image, quiet plate, detail, pause.
- Motion intensity: low.
- Transition tempo: slower, softer.
- Hover/focus: subtle fade/scale.
- Avoid: noisy grids, high-contrast jitter, excessive kinetic type.

### High-Energy / Campaign

- Tone: bold, fast, punchy.
- Hero behaviour: immediate key visual or campaign hit.
- Image rhythm: larger contrast, stronger crops, channel-based chapters.
- Motion intensity: medium.
- Transition tempo: sharper and faster.
- Hover/focus: stronger preview response, but still accessible.
- Avoid: dumping every channel asset, social-tile grids, fake results.

### Technical / System

- Tone: precise, structured, rigorous.
- Hero behaviour: system overview or best real application.
- Image rhythm: alignment-driven, metadata-to-edge relationships, detail proof, editorial break.
- Motion intensity: low to medium.
- Transition tempo: clean and exact.
- Hover/focus: precise reveal, baseline-aligned metadata.
- Avoid: dry spec sheets, endless grids, no emotional image break.

### Motion / Experimental

- Tone: dynamic, temporal, expressive.
- Hero behaviour: poster frame plus optimized silent loop.
- Image rhythm: video, key frames, process only if strong, final sequence.
- Motion intensity: high in the work, restrained in the page chrome.
- Transition tempo: fluid but controlled.
- Hover/focus: optional motion preview with poster fallback.
- Avoid: multiple competing autoplay videos, page motion that competes with the actual work.

## Trends to use carefully

- kinetic typography
- scroll-linked motion
- non-linear project browsing
- browser/device frames
- pre-rendered motion assets
- 3D/WebGL
- custom cursor states
- preloaders

Use only when tied to a clear purpose, performance budget, and accessibility fallback.

## Trends to avoid

- bento-grid defaulting
- fake luxury styling
- floating laptop/phone mockups
- generic print mockup generators
- decorative particles
- autoplay audio
- long preloaders
- route transitions longer than the content warrants
- hidden navigation
- mystery interactions
- AI-looking project imagery
- Ballet Edmonton's calm editorial tone as the default for every project

---

# Merged Awwwards Art Direction System — Visual + Structural Source of Truth

Date added: 2026-04-27

Primary merged reference: `research/Merged_Synthesis_Awwwards_Art_Direction_System.md`

## Summary of the merged synthesis

The merged synthesis becomes the production source of truth for this portfolio. It resolves the earlier split between structural system design and visual-reference scanning by setting one durable operating model:

- one fixed portfolio skeleton
- controlled per-project wardrobe variation
- one authorial identity across navigation, spacing, type, motion, and copy
- image, mockup, and motion standards that are judged by the weakest page, not the strongest

## Skeleton / wardrobe model

- Same skeleton, different wardrobe.
- Every project page shares the same five-act structure:
  `Hero -> Thesis -> Body chapters -> Colophon -> Next-project preview`
- Variation happens through wardrobe modules:
  hero type, image rhythm, mockup logic, motion intensity, and screenshot treatment.
- The skeleton is not optional and should not be broken for novelty.

## Single-author principle

- The portfolio must read as one authored system, not several microsites stitched together.
- Navigation, interaction grammar, typography, spacing cadence, metadata logic, and accessibility floor remain consistent.
- Project-specific variation is allowed only inside documented rules.
- A project should feel distinct without looking like it belongs to a different designer.

## Durable visual standards

- Hero authority is mandatory. Every page needs one decisive first frame.
- Asset sequencing follows editorial rhythm: wide, medium, detail, payoff.
- Negative space is scheduled intentionally; empty space is part of hierarchy, not leftover layout.
- Typography stays controlled: no more than three visible levels per section.
- Real project evidence beats simulated polish.
- Copy stays short, specific, and non-deck-like.
- Every page must end with a designed handoff, not a dead fade into footer territory.

## Rejected gimmicks and trends

The merged synthesis explicitly rejects:

- decorative mouse trails
- ASCII reveal gimmicks
- scroll-jacking as a feature
- floating laptop or phone composites
- fake generated UI
- generic PSD print mockups
- autoplay audio
- long preloaders
- fake luxury styling
- trend-label thinking
- applying Ballet Edmonton's calm editorial tone as the default to every project

## Project-type wardrobe summary

- Branding / Identity:
  mark or signature application leads; system proof follows.
- Print / Editorial:
  real print object first; spreads sequenced like reading, not like a template.
- Signage / Environmental:
  scale-first; in-context proof and human reference required.
- Web / Digital:
  strongest screen first; prepared screenshots treated as finished artwork.
- Motion Graphics:
  the work is the motion; page chrome stays quieter than the asset.
- Campaign / Integrated:
  idea-led sequencing; channels grouped by strategy, not quantity.
- Production / Fabrication:
  documentary proof of making plus final artifact payoff.
- Large-format / Installation:
  environmental scale first, detail second.
- Mixed Media:
  one throughline connects chapters; do not let the page fragment by medium.

## How this changes future project-page work

- Stop treating each page as a fresh art-direction experiment.
- Build from the same structural system every time, then choose the correct wardrobe.
- Choose the hero late, after the page rhythm is clear.
- Cut weaker assets even if they are technically part of the project.
- Treat screenshots, mockups, motion, and copy as production disciplines with rules, not taste-only decisions.
- Use Ballet Edmonton as proof that the system can work, not as the default visual answer.

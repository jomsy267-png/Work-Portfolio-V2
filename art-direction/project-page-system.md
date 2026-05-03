# Project Page System

## Purpose

This file defines how project pages currently work in the codebase and how future redesigns should respect that system.

This is a source-of-truth audit, not just a wishlist.

## Current page structure model

Most project pages currently follow this scaffold:

1. Sticky full-screen hero image
2. Staggered dark panel wipe
3. Project info block
4. Divider
5. Modular case-study sections
6. Next project transition
7. Minimal footer

The page system is modular and data-driven. Content is assembled from section objects in `src/data/projects.js` and rendered through shared section components in `src/pages/ProjectPage.jsx`.

## Current section types in the codebase

The live page system currently supports:

- `full`
- `duo`
- `grid`
- `text`
- `text-image`
- `campaign`
- `video`
- `video-duo`
- `pub`

These are the real building blocks future redesigns should work with first before inventing new ones.

## Current project-page variants

The codebase currently uses three page variants.

### Variant 1 — Standard Editorial Case Study

Used for:
- balanced project pages
- identity and campaign work
- pages that need both explanation and imagery

Traits:
- sticky hero
- dark project info section after wipe
- balanced title/meta layout
- modular image sequence
- clean pacing with repeated full-width moments

### Variant 2 — Media-Led

Used for:
- projects with strong visual output
- work that benefits from larger image dominance

Traits:
- larger-feeling hero
- tighter project info padding
- title column + larger meta column
- asymmetric first duo
- more visual breathing room
- stronger emphasis on campaign-scale imagery

### Variant 3 — Narrative / Chaptered

Used for:
- projects that benefit from a more authored case-study feel
- pages with a mix of identity, print, motion, and digital touchpoints

Traits:
- framed feel through pacing rather than decorative chrome
- single-column project intro
- horizontal metadata strip
- alternating contained and full-width imagery
- chapter-rule separators
- slightly more deliberate editorial rhythm

## Hero section rules

The current hero system already has a clear signature:

- the hero is full-screen
- it stays sticky
- the next section overtakes it through a staggered panel wipe
- the hero should be image-led, not text-heavy

Future redesigns should preserve:

- strong first impression
- high image confidence
- minimal hero clutter
- a clear takeover moment from hero to project info

Avoid:

- weak centered-title-only heroes
- turning the hero into a text block
- adding decorative overlays that compete with the image

## Current project info system

Project info is currently not freeform. It has a recognizable structure:

- `Project` label
- title
- description
- deliverable tags
- metadata

This should remain concise and controlled. It works best as a framing device, not a long explanation layer.

## Current image sequencing behavior

The existing project pages already use a real rhythm system:

- large full-width image
- paired image contrast
- grids for denser moments
- text breaks
- campaign dividers
- video moments
- next-project release

The weakest current pages are not weak because the building blocks are wrong. They are weak because some pages overuse the same block weight for too long, or sequence quieter assets too early or too late.

## Layout variation directions allowed

Future redesigns may still choose one dominant direction per project, but should derive it from the existing variant system:

### Editorial

Best for:
- identity
- print
- brand campaigns
- pages with strong typography and still imagery

### Cinematic

Best for:
- motion-heavy work
- atmospheric visuals
- projects with one or two dominant hero assets

### Swiss Grid

Best for:
- system-heavy work
- structured communication
- signage, UI, or process-led case studies

### Gallery-led

Best for:
- projects with many strong images and minimal need for explanation

### Motion-led

Best for:
- projects where motion is a real storytelling asset, not just decoration

## Section rhythm rules for future redesigns

The existing portfolio wants:

- image first
- short text blocks
- variation in density
- pauses between louder moments
- a strong closing payoff

A good redesign should alternate:

- loud / quiet
- full / split
- image / text
- overview / detail
- static / motion

## Current strengths of the system

- the sticky hero + wipe handoff is distinctive
- the modular renderer is flexible
- image-dominant layouts already exist
- variant 2 and 3 provide real foundations for more directed pages
- metadata and supporting copy are restrained

## Current weaknesses of the system

- some pages feel too long because section hierarchy is too flat
- some projects use too many similar image beats in a row
- motion/video assets are present but not always staged like premium moments
- project-page endings are functional, but not always memorable

## Redesign rule

When redesigning a project page:

- preserve the current project-page scaffold unless there is a strong reason not to
- use the existing section types first
- use variant logic intentionally
- make the strongest asset appear earlier
- compress or remove weaker sequences
- make the page feel more directed, not more complicated

## Ending rules

Endings should feel authored.

Prefer:

- one final strong image
- one final motion or campaign beat
- a cleaner last section before the next-project transition

Avoid:

- simply running out of assets
- ending on a weaker utility section
- adding filler to make the page feel longer

---

# Unified Project Page System — Awwwards Portfolio Pass

Date added: 2026-04-26

## Skeleton / wardrobe model

Every project page shares the same skeleton and chooses a project-specific wardrobe.

Same skeleton:

1. Hero plate
2. Thesis / project info
3. Body chapters
4. Colophon / project facts
5. Next-project transition

Different wardrobe:

- project type module
- energy category
- hero archetype
- image sequence
- mockup/screenshot treatment
- motion intensity
- chapter density

Do not create one universal visual template. Do not create a different website per project.

## Five-act page skeleton

### 1. Hero plate

One decisive image, motion loop, composition, or project-world moment. The hero must communicate the project's quality and tone in the first 3 seconds.

### 2. Thesis / project info

The existing project-info section remains the main framing device. It should state the angle of the project, not a long brief.

### 3. Body chapters

Body chapters organize the project into 3-5 meaningful beats when complexity justifies it. Each chapter must do one job:

- setup
- system
- application
- detail
- outcome

### 4. Colophon / project facts

Quiet role/scope/year/collaborator/outcome information. The colophon should clarify the work without becoming a second case-study essay.

### 5. Next-project transition

The next-project transition must feel designed, not like a footer link. It should preserve navigation consistency while giving the next project a visual preview.

## Body chapter logic

Each chapter needs:

- one clear role
- concise copy
- one dominant visual or visual group
- a reason to exist in the sequence
- mobile-specific rhythm

If a chapter only exists to show more assets, reduce or remove it.

## Energy category mapping

### Calm / Editorial

Best for refined identity, culture, publication, and quiet brand work. Use more negative space, slower pacing, restrained motion, and careful image hierarchy.

### High-Energy / Campaign

Best for campaign and promotional work. Use stronger contrast, faster section tempo, channel-based grouping, and bigger visual punctuation.

### Technical / System

Best for systems, signage, wayfinding, production, and structured digital work. Use precise grids, metadata-to-image edge relationships, baseline-consistent captions, and at least one large editorial image break.

### Motion / Experimental

Best for motion-led projects. Let the work carry motion. Keep page chrome and surrounding reveals restrained.

## Project-type modules

### Branding / Identity

- Structure: identity premise, mark/system, applications, detail, final brand-world moment.
- Hero: strongest identity application or system overview, not automatically a logo on white.
- Image sequence: application, mark/type detail, system proof, real-world use, closing overview.
- Motion: logo-safe reveal, system assembly, application transition.
- Avoid: endless logo grids, generic brand boards, invented extensions.

### Print / Editorial

- Structure: object overview, cover/detail, interior rhythm, material proof, final physical presence.
- Hero: printed object or strongest spread treated as tactile editorial work.
- Image sequence: cover, spreads, type/detail crop, scale/context, final still.
- Motion: restrained page turn or reveal only if it improves the object story.
- Avoid: showing every spread, floating book mockups, fake print texture.

### Signage / Environmental

- Structure: site context, primary sign, wayfinding/system details, material/scale proof, final environment.
- Hero: in-context environmental image with scale.
- Image sequence: wide, medium, detail, human/scale reference, final space.
- Motion: subtle walk-through or wide-to-detail reveal.
- Avoid: flat signage art as the lead, no scale reference, dry pictogram grids.

### Web / Digital

- Structure: digital premise, key screen, interaction/responsive proof, detail state, final system view.
- Hero: strongest real interface moment, sized according to source quality.
- Image sequence: hero screen, meaningful workflow, detail crop, responsive proof, closing composite.
- Motion: short interaction capture, menu/state transition, scroll capture.
- Avoid: live iframe default, screenshot dumps, fake UI, oversized low-quality captures.

### Motion Graphics

- Structure: hero loop, premise, key frames, process/system if strong, final reel or sequence.
- Hero: optimized silent video loop with poster fallback.
- Image sequence: poster frame, loop, key frames, variants, final cut.
- Motion: the work is the motion; page animation stays restrained.
- Avoid: autoplay audio, many competing loops, tiny embedded motion.

### Campaign / Integrated

- Structure: campaign idea, key visual, channel rollout, detail moments, outcome.
- Hero: strongest campaign visual or key frame.
- Image sequence: key visual, channel groups, best execution per channel, detail, final campaign wall.
- Motion: channel reveal, social cut, campaign rollout.
- Avoid: every asset at equal weight, social-tile dumps, fake results.

### Production / Fabrication

- Structure: final artifact, process documentation, material detail, finished work, context.
- Hero: finished artifact or striking making/process moment.
- Image sequence: process wide, working medium, material detail, final artifact, context.
- Motion: documentary reveal or subtle making sequence.
- Avoid: process without payoff, generated mockups for craft-led work.

### Large-format / Installation

- Structure: environmental hero, premise, system/family, individual pieces, scale/detail, outcome.
- Hero: environment image that immediately communicates scale.
- Image sequence: wide, medium, detail, human-scale proof, final alternate angle.
- Motion: slow environmental reveal or approach-through-space effect.
- Avoid: renders without scale, flat artwork leading the page, no human reference.

### Mixed Media

- Structure: unified hero, thesis, chapters by medium, throughline detail, integrated outcome.
- Hero: one image or composition that explains range without clutter.
- Image sequence: anchor image, contrast pair, medium chapters, bridge moment, final system.
- Motion: transitions between media, one strong bridge sequence.
- Avoid: giving every medium equal weight when one is clearly the lead.

## Screenshot showcase rules

- Prepared screenshots are finished artwork.
- Do not crop, distort, regenerate, reflow, or replace prepared screenshots unless explicitly asked.
- If a screenshot does not fit a slot, change the slot.
- Use one chrome treatment per page if chrome is used at all.
- Avoid live iframes unless interaction itself is the story.
- Treat screenshot scale as a quality decision. Low-resolution screenshots should be smaller plates.

## Colophon rules

The colophon should include only useful facts:

- role
- scope
- year
- collaborators if relevant
- one concrete outcome or contribution

Keep it quiet. Do not use the colophon as the opening thesis.

## Next-project transition rules

- The transition structure remains consistent across projects.
- Preview imagery may adapt to the next project's energy category.
- The transition should feel like a tempo shift, not a different navigation system.
- The next-project moment should be visually committed enough to act as the page ending.

## Mixed-media handling

For mixed-media projects, choose a primary module and supporting modules. Do not flatten every medium into equal-weight sections. The page needs one throughline.

Example:

- Primary module: Mixed Media
- Supporting module: Web / Digital for website screenshots
- Supporting module: Print / Editorial for publication details

The supporting module informs presentation rules; it does not replace the main page concept.

---

# Prompt 7 — Image / Mockup Modules for Project Pages

Date added: 2026-04-26

## Asset role model

Each asset on a project page must have one clear role:

- `anchor`: establishes the project world
- `proof`: shows real output or application
- `system`: explains visual logic
- `detail`: rewards close looking
- `transition`: moves between media or chapters
- `payoff`: closes the page with confidence

If an asset has no role, remove it or move it to a quieter supporting position.

## Reusable presentation patterns

### Hero plate

- Purpose: first 3-second impact.
- Best for: every project type.
- Aspect behavior: full viewport, stable crop chosen per project.
- Mobile: choose a project-specific object position or alternate source when needed.
- Caption: none unless context is essential.
- Avoid: weak logo-only hero, low-resolution hero, text-heavy overlay.

### Full-width image plate

- Purpose: major impact or chapter break.
- Best for: photography, campaign, large-format, strong mockups.
- Aspect behavior: source-quality dependent; full-bleed only if resolution supports it.
- Mobile: preserve subject; reduce crop aggression.
- Caption: short metadata only.
- Avoid: enlarging weak screenshots or small exports.

### Editorial pair

- Purpose: compare or create rhythm between two related assets.
- Best for: branding, print, campaign, signage detail.
- Aspect behavior: can be symmetric or intentionally asymmetric.
- Mobile: stack in story order, not necessarily visual order.
- Caption: optional shared caption.
- Avoid: pairing unrelated assets only for grid balance.

### Detail crop pair

- Purpose: show craft, typography, material, UI detail, or system logic.
- Best for: identity, print, technical/system, production.
- Aspect behavior: crops must be intentional and approved.
- Mobile: keep details legible; do not shrink into unreadable tiles.
- Caption: useful when detail needs orientation.
- Avoid: decorative crops that hide the actual work.

### Browser-less screenshot plate

- Purpose: present prepared screenshots as finished compositions.
- Best for: web/digital and mixed-media digital chapters.
- Aspect behavior: no cropping; use natural aspect ratio or contained width.
- Mobile: keep full composition visible; reduce width/scale rather than crop.
- Caption: minimal, only if it clarifies page/screen role.
- Avoid: live iframe feeling, raw screenshot dump, fixed-height masks.

### Desktop/mobile pairing

- Purpose: prove responsive design or workflow continuity.
- Best for: web/digital when both captures are strong.
- Aspect behavior: relationship matters more than device realism.
- Mobile: stack with desktop first unless mobile is the hero proof.
- Caption: one concise note.
- Avoid: mobile screenshot as filler.

### Print spread plate

- Purpose: show editorial rhythm and typography.
- Best for: print/editorial and publication work.
- Aspect behavior: preserve spread proportions.
- Mobile: allow horizontal feeling through scale, not forced crop.
- Caption: publication title/year if useful.
- Avoid: fake page curl and over-polished 3D books.

### Environmental scale plate

- Purpose: communicate size, context, and physical presence.
- Best for: signage, installation, large-format, production.
- Aspect behavior: wide enough to show scale relationship.
- Mobile: subject and scale reference must remain readable.
- Caption: location/material/context can be useful.
- Avoid: no scale reference, fake environment that looks generated.

### Process strip

- Purpose: show making, iteration, material, or production evidence.
- Best for: fabrication, print, signage, campaign process.
- Aspect behavior: small sequence, equal visual tone.
- Mobile: 2-3 strong steps maximum before it feels like a gallery.
- Caption: labels may help.
- Avoid: process without final payoff.

### Motion still grid

- Purpose: show frame variety without autoplaying many videos.
- Best for: motion graphics and campaign animation.
- Aspect behavior: consistent frame ratio.
- Mobile: maintain frame sequence order.
- Caption: optional timestamp/scene labels.
- Avoid: too many tiny frames or animated GIF overload.

### Final payoff plate

- Purpose: make the ending feel designed before next-project.
- Best for: all project pages.
- Aspect behavior: strongest remaining image, motion poster, or integrated composition.
- Mobile: should still feel like a closing moment.
- Caption: usually none.
- Avoid: ending on utility screenshots, weak process, or leftovers.

## Asset count guidance

Use fewer, stronger assets:

- Small/simple project: 6-10 visual beats.
- Medium project: 10-16 visual beats.
- Complex mixed-media project: 16-24 visual beats only if chapters are clear.

Do not show all available assets. Show the strongest sequence.

## Screenshot showcase rule

Website screenshots are a project-page module, not an image dump. Use the prepared screenshot rules from `image-redesign-rules.md`; if screenshot quality is limited, reduce display scale and use spacing/sequence for art direction.

## Mockup module rule

Mockups must share one philosophy per page. Do not mix flat browser frames, photoreal devices, glossy product mockups, and generated environments in the same project unless the project is explicitly mixed-media and the page provides a clear throughline.

---

# Prompt 8 — Project Page Audit Priorities

Date added: 2026-04-26

## Portfolio-wide project-page finding

The shared project skeleton is strong enough to keep, but the wardrobe quality is uneven. Future work should not restart the system; it should raise each project to the correct type-specific module standard.

## Priority order before submission

1. Page The Cleaners: signage/environmental work needs scale, context, human or street-level proof, and a stronger final payoff.
2. Edify: motion/editorial work needs poster-led motion storytelling, fewer heavy embeds, and clearer frame sequencing.
3. Runway Footwear: technical/branding page needs reduced repetition and sharper system proof.
4. Odd Brewing Co.: high-energy campaign page needs more decisive pacing and fewer gallery-like beats.
5. APEGA: technical/campaign page needs stronger metadata-to-image alignment and one large editorial break.
6. Publications: print/editorial page needs archive control, spread rhythm, and a designed ending.
7. Urban Affairs: high-energy print/graphic page needs clearer thesis and section rhythm.
8. Ballet Edmonton: pilot is acceptable as a validation page; refine only after broader blockers.

## Project-page audit rule

Before a project is marked submission-ready, verify:

- Hero expresses the project type and energy category.
- Thesis is specific and short.
- Asset sequence has wide / medium / detail / payoff rhythm.
- Copy explains role, scope, client, year, and result without essaying.
- Motion level matches the energy category.
- Mobile has its own rhythm.
- Ending feels designed before the next-project card.
- Performance and accessibility pass route-level checks.

---

# Merged System Integration — Project Page Production Standard

Date added: 2026-04-27

## Five-act page skeleton

Every project page must follow the same universal structure:

1. `Hero`
2. `Thesis`
3. `Body chapters`
4. `Colophon`
5. `Next-project preview`

This skeleton is fixed. Wardrobe choices vary by project type, but the page architecture does not.

## Chapter logic

Body chapters should usually resolve into three to five beats:

- `Setup`: what the project is and what angle matters
- `System`: brand logic, editorial system, or framework
- `Application`: how the work behaves in real outputs
- `Detail`: one close-reading or material/craft beat
- `Outcome`: integrated payoff or strongest closing image

Do not exceed five body chapters without a clear reason. More chapters usually signal weak editing.

## Project-type wardrobe modules

- Branding / Identity:
  mark, system, applications, detail, outcome
- Print / Editorial:
  cover, spreads, detail, context, closing object shot
- Signage / Environmental:
  environment, system, scale proof, material detail, outcome
- Web / Digital:
  lead screen, product thesis, system screens, detail, outcome
- Motion Graphics:
  hero loop, stills, process only if strong, variant family, outcome
- Campaign / Integrated:
  key idea, hero visual, channel rollout, strongest execution, outcome
- Production / Fabrication:
  final artifact or process lead, making proof, detail, context, outcome
- Large-format / Installation:
  scale-first environment, medium context, detail, human-for-scale, outcome
- Mixed Media:
  throughline first, then chapters by medium with one unifying visual logic

## Mixed-media handling

- Mixed-media pages are not permission to treat every medium equally.
- One medium should lead the page; the others support it.
- Use chapter breaks to signal medium changes.
- Keep one throughline:
  recurring type logic, repeated material language, color grade, or compositional motif.

## Hero plate standards

- The hero must communicate the page's authority in three seconds.
- One dominant image or composition only.
- Supporting copy is one sentence maximum.
- Hero choice happens after sequencing decisions, not before them.
- The hero must preview the thesis, not merely represent the project.

## Colophon standards

The colophon is required and should stay quiet. It should include:

- role
- scope
- year
- collaborators if applicable
- one specific outcome or result

Do not turn the colophon into a case-study appendix.

## Next-project preview standards

- Next-project is a designed preview, not a footer link.
- It should feel visually committed enough to create forward momentum.
- Transition behavior can vary by energy category, but structure stays consistent across the portfolio.

## Ballet Edmonton is pilot only

- Ballet Edmonton validates the system for a Calm / Editorial mixed-media project.
- Its screenshot treatment, pacing, and restraint are useful references for similar work only.
- Its tone must not become the default for louder campaign, motion, or technical pages.

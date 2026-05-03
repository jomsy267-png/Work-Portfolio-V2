# Page Review Checklist

Before calling a project page complete, Codex must check:

## Brand

- [ ] Existing fonts preserved
- [ ] Existing colours preserved
- [ ] Logo unchanged
- [ ] Visual tone matches portfolio
- [ ] No random design language introduced

## Layout

- [ ] Hero is strong
- [ ] First viewport communicates the project clearly
- [ ] Spacing feels intentional
- [ ] Page has rhythm
- [ ] Layout does not feel templated
- [ ] Mobile layout still feels premium

## Imagery

- [ ] Strongest image appears early
- [ ] Image crops are intentional
- [ ] Image sizes vary with purpose
- [ ] No weak image dominates
- [ ] Generated imagery does not distort the work

## Story

- [ ] Project context is clear
- [ ] Page has beginning, middle, and end
- [ ] Text is concise
- [ ] Visuals do most of the storytelling
- [ ] There is a final payoff

## Motion

- [ ] Motion is purposeful
- [ ] Motion does not slow the page
- [ ] Scroll animations feel smooth
- [ ] Remotion assets are only used where they improve the page
- [ ] Reduced-motion users are respected

## Technical

- [ ] No broken links
- [ ] No missing images
- [ ] No layout shift
- [ ] Images are optimized
- [ ] Build passes
- [ ] Lint passes if available

## Final question

Would this project page feel credible beside a premium New York agency portfolio?

---

# Portfolio-Wide Awwwards Review Checklist

Date added: 2026-04-26

Use this before submission and after major page refinements.

## Homepage checklist

- [ ] First 3 seconds communicate the designer's point of view.
- [ ] Hero feels specific to this portfolio, not generic.
- [ ] Motion supports the opening rather than distracting from it.
- [ ] Work is visible or clearly reachable without a long preamble.
- [ ] Typography, navigation, and interaction match the rest of the site.
- [ ] Mobile hero is intentionally composed.
- [ ] Page has a clear route to work, about/contact, and project index.

## Project index checklist

- [ ] Project previews show range and quality quickly.
- [ ] Index uses one reusable interaction architecture.
- [ ] Hover and keyboard focus produce equivalent states.
- [ ] Mobile does not depend on hover.
- [ ] Static image preview exists for every project.
- [ ] Motion preview appears only for motion-led projects and has a poster fallback.
- [ ] Project order feels editorial, not accidental.
- [ ] Project type, year, or role is clear enough for orientation.

## Project page checklist

- [ ] Page follows the skeleton: hero, thesis/info, body chapters, colophon/facts, next-project.
- [ ] Project wardrobe is chosen intentionally by project type and energy category.
- [ ] Hero is the strongest appropriate opening asset.
- [ ] Body chapters each have a clear role.
- [ ] Image sequence is authored, not file-order.
- [ ] Prepared screenshots are intact unless explicit crop approval exists.
- [ ] Copy is concise and specific.
- [ ] Ending feels designed before the next-project transition.
- [ ] Mobile layout has its own rhythm.

## About / contact checklist

- [ ] About page extends the same brand voice and type system.
- [ ] Contact path is obvious.
- [ ] Copy is human, precise, and not overlong.
- [ ] No default footer/contact treatment weakens the submission.
- [ ] Links, email, and social routes work.
- [ ] Focus states are visible.

## 404 checklist

- [ ] Custom 404 exists.
- [ ] It is on-brand.
- [ ] It provides a clear route home or to the work index.
- [ ] It does not feel like a default framework page.

## Mobile checklist

- [ ] Mobile is not just stacked desktop.
- [ ] Type scale is readable.
- [ ] Tap targets are comfortable.
- [ ] Project image order still makes sense.
- [ ] Screenshots remain readable or are scaled down intentionally.
- [ ] Motion is reduced where needed.
- [ ] No horizontal overflow.

## Accessibility checklist

- [ ] WCAG AA contrast on actual backgrounds.
- [ ] Semantic landmarks are present.
- [ ] Heading order is coherent.
- [ ] Images have useful alt text or are marked decorative.
- [ ] Keyboard navigation works end to end.
- [ ] Focus indicators are visible.
- [ ] Reduced-motion preference is respected.
- [ ] Video with meaningful audio has captions/transcript before submission.

## Performance checklist

- [ ] Hero assets are optimized.
- [ ] Below-fold media is lazy-loaded.
- [ ] Video is compressed and has poster frames.
- [ ] Motion previews do not load until needed.
- [ ] Layout shift is controlled with dimensions/aspect constraints.
- [ ] Build passes.
- [ ] Lighthouse/Core Web Vitals targets are checked before submission.

## Awwwards submission floor

- [ ] Every page has a clear purpose within 3 seconds.
- [ ] Every section earns its placement.
- [ ] Every project page uses the skeleton/wardrobe system.
- [ ] Navigation is consistent across the site.
- [ ] Motion earns its place.
- [ ] Prepared screenshots are respected.
- [ ] Mobile is intentionally designed.
- [ ] Performance is protected.
- [ ] Accessibility is respected.
- [ ] SEO/meta/social preview assets are complete.
- [ ] Final submission screenshots are selected intentionally.

---

# Prompt 6 — Motion / Interaction Review Addendum

Date added: 2026-04-26

## Work index motion checklist

- [ ] One shared preview interaction architecture is used.
- [ ] Static preview exists for every project.
- [ ] Hover and keyboard focus match.
- [ ] Essential metadata is not hover-only.
- [ ] Motion previews are limited to motion-led projects.
- [ ] Preview videos have poster fallback.
- [ ] Mobile uses static, legible previews.
- [ ] Preview transitions do not shift layout.

## Project page motion checklist

- [ ] Hero motion earns its place.
- [ ] Thesis/project info reveal does not delay orientation.
- [ ] Section reveals are not applied mechanically to every block.
- [ ] Image movement is appropriate to project energy.
- [ ] Prepared screenshots are not cropped, zoomed, masked, or distorted.
- [ ] No more than one pinned moment appears on a page.
- [ ] Next-project module feels designed, not incidental.
- [ ] Reduced-motion mode preserves hierarchy.

## Navigation / transition checklist

- [ ] Navigation structure is consistent across projects.
- [ ] Project energy changes tempo, not identity.
- [ ] Route transition stays within duration limits.
- [ ] Next-project preview is clear on hover, focus, and mobile.
- [ ] Reduced-motion route fallback exists.
- [ ] No transition blocks browsing.

## Screenshot / mockup interaction checklist

- [ ] Prepared screenshot content remains intact.
- [ ] Motion frames the screenshot instead of changing it.
- [ ] No live iframe presentation unless interaction is the actual story.
- [ ] Chrome treatment is consistent if used.
- [ ] Screenshot scale respects source quality.
- [ ] Mobile layout remains readable.

## Remotion readiness checklist

- [ ] Motion purpose is documented.
- [ ] CSS/Framer alternative was considered.
- [ ] Poster frame is defined.
- [ ] Reduced-motion fallback is defined.
- [ ] Mobile fallback is defined.
- [ ] File-size budget is defined.
- [ ] Integration point is defined.
- [ ] No autoplay audio.

---

# Prompt 7 — Image / Mockup Review Addendum

Date added: 2026-04-26

## Asset audit checklist

- [ ] Every image has a clear role: anchor, proof, system, detail, transition, or payoff.
- [ ] Strongest relevant asset appears early enough.
- [ ] No weak asset dominates because it fills a layout slot.
- [ ] Asset scale matches source quality.
- [ ] Real work is prioritized over fake polish.
- [ ] External/CDN assets are reviewed for reliability and weight.
- [ ] GIFs are replaced with compressed video where necessary.
- [ ] Alt text is accurate and not keyword-stuffed.

## Prepared screenshot checklist

- [ ] Prepared screenshots remain fully visible unless explicit crop approval exists.
- [ ] No `object-fit: cover` or fixed-height wrapper cuts off prepared screenshots.
- [ ] Screenshots are not distorted, reflowed, regenerated, or replaced by iframes.
- [ ] Screenshot scale respects source quality.
- [ ] Website section does not feel like a screenshot dump.
- [ ] Mobile screenshots are used only when they prove responsive thinking.
- [ ] Captions are minimal and useful.

## Mockup checklist

- [ ] Mockup treatment supports the project story.
- [ ] One mockup philosophy governs the page.
- [ ] Real photography or real output is used when available.
- [ ] Device/browser frames clarify the medium.
- [ ] Environmental mockups include credible scale, lighting, and perspective.
- [ ] No generic floating laptops, phone grids, fake 3D print scenes, or random glows.
- [ ] Mockups do not invent project content.

## AI-assisted asset checklist

- [ ] AI use is justified by a real presentation need.
- [ ] Source asset is defined.
- [ ] Preservation rules are written before generation.
- [ ] Logo, typography, color, UI, and real content are unchanged.
- [ ] Negative prompt includes fake text, changed logo, changed colors, generic luxury styling, AI artifacts, and distorted design.
- [ ] Output purpose and aspect ratio are defined.
- [ ] Generated result passes artifact and brand checks.
- [ ] Human approval happens before project-page use.

## Mobile image checklist

- [ ] Mobile sequence still tells the story.
- [ ] Large desktop plates are not blindly stacked.
- [ ] Detailed images remain readable or are intentionally reduced.
- [ ] Full-bleed moments are not awkward crops.
- [ ] Screenshot plates preserve full prepared composition.
- [ ] Captions do not crowd imagery.

## Awwwards image floor

- [ ] Image sequence feels art-directed.
- [ ] Hero image has impact.
- [ ] At least one visual moment is memorable.
- [ ] Ending has a strong final payoff.
- [ ] Nothing feels generic, stock, or AI-generated.
- [ ] Performance is protected by image sizing and lazy loading.

---

# Full-Site Awwwards Audit — Prompt 8

Date added: 2026-04-26

## Audit summary

The site has a clear authorial identity, a memorable dark homepage atmosphere, and a stronger project-page foundation after the Ballet Edmonton pilot and project-ecosystem interaction pass. It is not yet Awwwards-submission-ready because the quality is uneven across routes: the homepage has impact but weak semantic structure, the work index is usable but still reads too much like a standard archive, several project pages need stronger art direction, and the technical foundation needs accessibility/performance cleanup before final polish.

The submission path should be:

1. Fix semantic, accessibility, and route-level blockers.
2. Reduce heavy runtime/media risk.
3. Bring the weakest project pages up to the skeleton/wardrobe standard.
4. Refine homepage and work index into stronger editorial entry points.
5. Run Prompt 9 for performance, accessibility, SEO, metadata, and developer award readiness.
6. Run Prompt 10 for final visual, copy, screenshot, and submission polish.

## Current scorecard

| Category | Current | Submission target | Blocks readiness? |
|---|---:|---:|---|
| Design | 7.8 | 8.5+ | Partly |
| Usability | 7.4 | 8+ | Partly |
| Creativity | 7.6 | 8.5+ | Partly |
| Content | 7.0 | 8+ | Yes |
| Motion | 7.2 | 8+ | Partly |
| Mobile | 7.0 | 8+ | Yes |
| Performance | 5.8 | 8+ | Yes |
| Accessibility | 6.0 | 8+ | Yes |
| Developer polish | 6.2 | 8+ | Yes |
| Memorability | 7.5 | 8.5+ | Partly |

## P0 roadmap — must fix before submission

- Site semantics: add a reliable `main` landmark and `#main-content` target on homepage, work index, project pages, and 404.
- Heading structure: ensure each route has exactly one meaningful `h1`; the homepage hero must expose the first-impression statement semantically.
- 404: add a custom lightweight 404 route with portfolio navigation and a designed recovery path.
- Reduced motion: finish coverage for homepage, about, skillset, smooth scroll, cursor-adjacent behavior, route wipes, and scroll-linked decorative systems.
- Performance: audit Spline/runtime weight, remote hero video, external iframes, GIFs, and images over 1MB before adding new motion.
- Media strategy: replace important animated GIFs with compressed video/poster systems where needed.
- Metadata: add route-specific title, description, Open Graph image, canonical URL, and project metadata for every index/project route.
- Project readiness: Page The Cleaners and Edify need pre-submission fixes because one is too thin and one is too heavy/iframe-led.

## P1 roadmap — high-impact improvements

- Homepage: make the first 3 seconds more specific to Jomil's design point of view, not only an atmospheric visual statement.
- Homepage: move work discovery earlier or make the transition into featured work more intentional.
- Work index: upgrade from archive grid to a stronger editorial work-browsing experience while preserving scanability.
- Work index: make project ordering strategic, with stronger metadata and subtle energy-category cues.
- Project pages: refine Runway, Odd, APEGA, Publications, and Urban Affairs with project-type-specific wardrobes.
- Next-project endings: make every project end with a designed final payoff plus a consistent next-project preview.
- Copy: tighten project theses, roles, years, collaborator context, and captions.
- Mobile: design project-page mobile rhythm per project type, not simply stacked desktop sections.

## P2 roadmap — polish improvements

- Footer/contact: make the ending feel more designed and less utilitarian.
- Focus styling: review every interactive element for visible, premium `:focus-visible` states.
- Captions: add only where they clarify medium, role, context, location, year, or production detail.
- Asset scale: demote low-resolution images to smaller editorial plates instead of letting them dominate.
- Project page section transitions: add restrained motion only where it clarifies sequence.

## P3 roadmap — future enhancements

- Optional motion previews for motion-led projects only.
- Optional held-element transitions between project previews and project pages.
- Optional Remotion/pre-rendered loops for selected motion projects after performance budget is proven.
- Optional richer project index sorting or curatorial groupings after base usability is strong.

## Project-page priorities

| Project | Type | Energy | Priority | Audit note |
|---|---|---|---|---|
| Page The Cleaners | Signage / Environmental | Technical / System | P0/P1 | Too thin for submission; needs scale, context, environmental proof, and stronger final payoff. |
| Edify | Editorial / Motion | Motion / Experimental | P0/P1 | Strong subject matter but too iframe/video-led; needs poster-frame strategy, fewer heavy embeds, and clearer motion storytelling. |
| Runway Footwear | Branding / Digital | Technical / System | P1 | Good source assets, but repeated full-image beats flatten hierarchy; needs tighter sequencing and one rigorous system moment. |
| Odd Brewing Co. | Branding / Packaging | High-Energy / Campaign | P1 | Strongest campaign potential; sequence should be more decisive and less gallery-like. |
| APEGA | Campaign / System | Technical / System | P1 | Needs sharper metadata-to-image relationships, clearer campaign chapters, and one cinematic break. |
| Publications | Print / Editorial | Calm / Editorial | P1/P2 | Needs archive control, spread rhythm, and a stronger ending. |
| Urban Affairs | Print / Graphic | High-Energy / Campaign | P1/P2 | Needs a clearer thesis and more deliberate image rhythm. |
| Ballet Edmonton | Mixed Media | Calm / Editorial | P2 | Pilot validates the system; keep screenshot integrity and refine only after broader site blockers are fixed. |

## Homepage recommendations

- Preserve the dark, cinematic first impression, but make the opening statement more specific and less generic than “Visual designs that tell a story.”
- Convert the hero into a semantic first-impression section with an `h1`, accessible copy, and a stable reduced-motion fallback.
- Review Spline/hero video value against performance cost; the hero is memorable, but it must not become the reason the submission underperforms.
- Make the path into work clearer and earlier.
- Keep personality, but make casual copy feel portfolio-premium; the motorcycle line may work, but it should read intentional rather than incidental.

## Project index recommendations

- Preserve the new poster-first, focus-visible, energy-category architecture.
- Improve the art direction of the index: stronger opening copy, more intentional project ordering, better role/year/category metadata, and a more curated first screen.
- Keep static posters as the baseline.
- Motion previews remain deferred and only for motion-led projects.
- Mobile must present the same project meaning without hover.

## Ballet Edmonton pilot validation notes

- Ballet Edmonton proves that a calm/editorial page can use the shared skeleton while adopting a project-specific wardrobe.
- The prepared website screenshots must remain intact and uncropped.
- The screenshot showcase should not become the default web-project style; it is one successful mixed-media solution.
- Transferable lessons: screenshot integrity, restrained motion, image-led pacing, and chaptered mixed-media sequencing.
- Non-transferable details: Ballet’s calm tempo, monochrome/cream cadence, and dance-specific cinematic restraint.

## Motion / interaction recommendations

- Finish reduced-motion support before adding more animation.
- Avoid adding broad page transitions until base accessibility and performance are solved.
- Keep the Single Author motion vocabulary: same grammar, project-specific tempo.
- Use section reveals sparingly; no page should animate every section.
- Use project energy categories as accents, not separate navigation systems.

## Image / mockup recommendations

- Run a media audit before adding generated assets.
- Compress or replace oversized images and GIFs.
- Treat prepared screenshots as finished artwork.
- Use real photography and real final work first.
- Do not let low-resolution assets occupy oversized plates.
- Remove or demote repeated visuals that do not add a new story beat.

## Mobile recommendations

- Audit mobile route by route; do not rely on desktop layouts simply stacking.
- Ensure screenshots are readable or intentionally scaled down.
- Keep tap targets clear and focus behavior equivalent.
- Reduce scroll-linked transforms and heavy media on mobile.
- Make project endings feel designed on mobile, not just appended.

## Content recommendations

- Every project needs a concise thesis, role/scope/year/client context, and a clear reason the work matters.
- Avoid over-explaining website/screenshots; let strong assets carry.
- Avoid generic portfolio phrasing such as “tell a story” unless paired with specific evidence.
- Keep captions rare and useful.
- About/contact copy should feel personal, confident, and submission-grade.

## Prompt 9 focus

Prompt 9 should focus on:

1. Semantic route structure.
2. Accessibility and keyboard audit.
3. Reduced-motion completion.
4. Performance budgets and media compression.
5. Route metadata and SEO.
6. 404 implementation requirements.
7. Build/runtime reliability, including npm/runtime alignment.

## Prompt 10 focus

Prompt 10 should focus on:

1. Final visual pass.
2. Submission screenshots.
3. Copy trim.
4. Project priority completion check.
5. Mobile polish.
6. Final Awwwards scorecard.

---

# Performance / Accessibility / Dev Award Audit — Prompt 9

Date added: 2026-04-26

## Technical review checklist updates

- [x] Homepage, work index, project pages, and 404 have `main` / `#main-content` targets.
- [x] Homepage exposes a semantic `h1`.
- [x] Work index filter state uses `aria-pressed`.
- [x] Custom 404 route exists.
- [x] Route-level metadata exists for home, work index, project pages, and not-found state.
- [x] Robots and sitemap files exist.
- [x] Spline runtime is dynamically imported instead of bundled into the initial app chunk.
- [x] Reduced-motion users do not load the Spline scene.
- [x] Global reduced-motion CSS disables smooth scrolling and transition/animation duration.
- [x] Project iframes are lazy-loaded and have clearer titles / allow policies.
- [ ] Oversized media over 1MB has been compressed or justified.
- [ ] GIFs have been replaced by compressed video/poster modules where needed.
- [ ] Lighthouse / Core Web Vitals audit has been run against the production build.
- [ ] Keyboard navigation has been manually tested on all routes.
- [ ] Final Open Graph image has been reviewed at actual social-preview crop.

## Prompt 10 carryover

Prompt 10 should not start with visual polish until the remaining technical blockers are acknowledged:

- large media files
- GIF replacement
- external video iframe strategy
- final production-domain metadata
- Lighthouse/accessibility pass

---

# Merged Synthesis Production Checklist

Date added: 2026-04-27

## Homepage checklist

- [ ] Hero communicates the designer's point of view in three seconds.
- [ ] Work appears early enough in the scroll.
- [ ] Typography in the hero matches the broader site system.
- [ ] Motion is purposeful and restrained.
- [ ] Footer and contact areas feel designed, not default.

## Project index checklist

- [ ] Projects are ordered editorially, not accidentally.
- [ ] Each project preview uses one strong image, not a decorative filler cover.
- [ ] Hover/focus behavior supports orientation without clutter.
- [ ] Mobile does not depend on hover.
- [ ] The index feels authored, not like a CMS grid.

## Project page checklist

- [ ] Page follows `Hero -> Thesis -> Body chapters -> Colophon -> Next-project preview`.
- [ ] Hero has decisive authority.
- [ ] Thesis is specific and short.
- [ ] Body chapters are edited to three to five meaningful beats.
- [ ] Ending prepares the next-project handoff.

## Asset quality checklist

- [ ] Real work is prioritized over simulated polish.
- [ ] Weaker assets have been removed.
- [ ] Color and lighting feel coherent across the set.
- [ ] There is a clear wide / medium / detail rhythm.
- [ ] The hero was chosen for authority, not convenience.

## Screenshot showcase checklist

- [ ] Prepared screenshots remain intact and readable.
- [ ] One chrome treatment per page only.
- [ ] No live embed behavior.
- [ ] No fake or regenerated UI.
- [ ] Scale is controlled so quality still reads as premium.

## Mockup quality checklist

- [ ] Mockup philosophy is consistent across the page.
- [ ] Real photography or clean flats are used where possible.
- [ ] Environmental composites prove context or scale rather than decorate.
- [ ] No floating laptop / phone defaulting.
- [ ] No generic 3D print template look.

## Motion checklist

- [ ] Every animation earns its place.
- [ ] Page stays within motion maxima.
- [ ] Motion intensity matches the project type.
- [ ] Reduced-motion fallback exists and is tested.
- [ ] Motion does not delay access to content.

## Mobile checklist

- [ ] Mobile composition is intentionally redesigned, not merely stacked.
- [ ] Tap targets and reading scale remain comfortable.
- [ ] Screenshots and key imagery remain legible.
- [ ] Motion simplifies appropriately.
- [ ] The page still feels premium on a small screen.

## Submission-readiness checklist

- [ ] The page clears the weakest-page test.
- [ ] Metadata and social preview feel deliberate.
- [ ] Performance and accessibility floor are met.
- [ ] Copy avoids dead vocabulary and deck language.
- [ ] The page feels authored enough to stand beside the strongest pages in the set.

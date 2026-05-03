# Performance Checklist

## Purpose

This file defines the performance floor for the Awwwards portfolio system. Award-level does not mean heavy. Performance, accessibility, and responsiveness are part of the design quality.

## Targets

Use these as submission targets:

- Lighthouse Performance: 80+ mobile, 90+ desktop.
- LCP: 2.5s or better.
- CLS: 0.1 or better.
- TBT: 200ms or better.

If a target is missed, identify whether the issue is image weight, video weight, JavaScript, font loading, layout shift, or third-party code.

## Image budgets

Guidance:

- Hero desktop image: target 1.5MB or less.
- Hero mobile image: target 600KB or less.
- Below-fold images: optimized and lazy-loaded.
- Use modern formats where practical.
- Always provide explicit dimensions or stable layout constraints.

Do not enlarge low-resolution assets to fill award-style layouts. Scale the presentation to the asset.

## Video / motion budgets

- Static poster is the default.
- Video must be compressed.
- Below-fold video is lazy-loaded.
- Motion previews load only on hover/focus or intentional viewport entry.
- No autoplay audio.
- Do not allow multiple heavy videos to compete in one viewport.

## Static poster default

Every motion or video preview requires a static poster. The poster is the baseline experience for:

- initial load
- reduced motion
- slow connections
- mobile where video is not necessary

## Lazy-loaded motion previews

Motion previews should not be preloaded across the whole work index. Load them only when:

- hover/focus begins
- a motion-led preview enters a deliberate active state
- the project page requires the video near the viewport

## Reduced-motion fallback

For `prefers-reduced-motion`:

- replace loops with posters
- reduce route transitions
- remove scroll-pinned motion where possible
- keep hierarchy and content visible
- preserve hover/focus feedback without movement

## Mobile performance rules

- Do not ship desktop video weight to mobile by default.
- Reduce hero media where needed.
- Avoid cursor-only code paths on mobile.
- Avoid expensive scroll effects on long project pages.
- Test real mobile viewport composition, not only desktop responsive mode.

## Font performance

- Load only needed font weights.
- Avoid adding new typefaces.
- Preserve existing Archivo Narrow, Inter, and Fragment Mono system.
- Preload only critical weights if needed.

## Build and audit checks

Before submission:

- production build passes
- no broken images
- no broken routes
- no layout shift in project heroes
- social preview image exists
- metadata is complete
- 404 route is custom and lightweight

Performance is a design constraint, not a final cleanup task.

---

# Prompt 6 — Motion / Interaction Performance Guardrails

Date added: 2026-04-26

## Project ecosystem risks found

- Current project image parallax runs broadly across project sections.
- Current route and section motion does not yet have explicit reduced-motion handling.
- External GIFs, iframes, and CDN images can become heavy and unpredictable.
- Project preview motion architecture does not yet exist, which is good for current weight but needs guardrails before adding previews.

## Work index guardrails

- Static image preview is the default.
- Motion preview is opt-in by project and motion-led only.
- Do not preload all preview videos.
- Hover/focus video preview should lazy-load and stop when inactive.
- On mobile, prefer static posters.

## Project page guardrails

- Use no more than one scroll-pinned moment per page.
- Avoid universal parallax on screenshot-heavy or technical pages.
- Prepared screenshots should not be animated internally.
- Video embeds should be limited, lazy where possible, and reviewed for mobile cost.
- GIFs should be replaced with compressed video where they are large or important.

## Transition guardrails

- Route transitions should stay under 1100ms.
- Reduced-motion route transitions should stay under 250ms.
- Held-element transitions require stable dimensions and should not block navigation.
- Next-project previews use static media unless next project is motion-led.

## Remotion / video budgets

Before using pre-rendered motion:

- define purpose
- define poster frame
- define desktop and mobile dimensions
- target short loops: 2-6s for previews, 6-10s for hero loops
- compress to MP4/WebM
- avoid autoplay audio
- provide static fallback
- document why CSS/Framer is not enough

## Reduced-motion performance requirement

Reduced-motion mode should reduce both motion and work:

- no scroll-linked parallax
- no preview video autoplay
- shorter page transition
- no cursor-dependent effects
- no pinned section choreography

## Mobile performance floor

Mobile project browsing should prioritize:

- static previews
- fewer scroll transforms
- compressed hero media
- no heavy preview videos by default
- clear tap targets
- stable image dimensions

---

# Prompt 7 — Image / Mockup Performance Rules

Date added: 2026-04-26

## Image format rules

- Prefer optimized JPG/WebP/AVIF for photographic assets where supported by the build/deployment pipeline.
- Use PNG only when transparency, sharp UI edges, or lossless design fidelity is required.
- Avoid animated GIF for important motion; use compressed MP4/WebM with poster frames.
- Do not enlarge low-resolution screenshots to compensate for layout ambition.

## Image sizing rules

- Every recurring image component should reserve stable space through width/height, aspect ratio, or natural-ratio layout.
- Hero assets need desktop and mobile sizing reviewed separately.
- Below-fold images should use `loading="lazy"` unless they are needed for immediate orientation.
- Prepared screenshots should use natural aspect-ratio display when content integrity matters.
- Large image plates require source quality to justify scale.

## Mockup asset budgets

- Hero mockup target: 1.5MB or less desktop, 600KB or less mobile.
- Supporting mockup target: 800KB or less when practical.
- Detail/crop target: 400KB or less when practical.
- Keep generated/environmental composites compressed and reviewed at actual display size.

## Screenshot performance rules

- Use curated screenshot exports instead of full raw browser captures when possible.
- If a full-page screenshot is visually necessary, display it as a contained plate and compress it aggressively.
- Avoid loading many oversized screenshots in one viewport.
- Do not use live iframe embeds as image presentation.
- Do not use browser/device chrome that requires extra heavy assets unless it improves clarity.

## AI-generated asset performance rules

- Generate at the minimum useful dimensions for the intended layout.
- Export one final web-ready asset, not many unused variants.
- Name files by project, role, and version.
- Keep source/work files outside the shipped public path unless needed.
- Review generated images at desktop and mobile display sizes before inclusion.

## Pre-submission media audit

Before final Awwwards submission:

- list all images over 1MB
- list all GIFs
- list all video embeds
- list all externally hosted project images
- check hero LCP candidate size
- check mobile screenshot readability
- verify no layout shift from image loading

---

# Prompt 8 — Full-Site Performance Audit Notes

Date added: 2026-04-26

## Current risks found

- The homepage uses a remote hero video and an immersive 3D/Spline-style hero direction; this may be worth keeping visually, but it must be measured against LCP, JS cost, memory, and mobile load.
- Current builds have previously produced large chunk warnings, including heavy project/runtime chunks.
- Several project pages use external iframes for motion/video presentation.
- Multiple project images exceed 1MB, with some public assets around 7-11MB.
- Animated GIFs still exist in project data and should be replaced or deferred behind poster/video strategies where they are important.
- The current environment has npm available, but `npm run dev` may hit runtime/native package issues depending on which Node binary is used; Prompt 9 should standardize the local verification command.

## Prompt 9 required checks

- Run production build and record chunk warnings.
- List all shipped images over 1MB and decide compress, resize, convert, lazy-load, or keep.
- List all GIFs and decide replace with MP4/WebM poster modules or remove.
- List all external embeds/iframes and decide poster-first, lazy-load, or self-hosted video.
- Confirm reduced-motion reduces CPU/GPU work, not only visual movement.
- Confirm mobile does not load unnecessary desktop media.
- Confirm route metadata and Open Graph images do not require oversized assets.
- Confirm custom 404 is lightweight.

## Performance submission floor

- No route should depend on a third-party visual runtime to be understandable.
- No project page should autoplay multiple heavy media assets in the same viewport.
- No oversized image should be displayed larger than its quality supports.
- Every video or motion embed needs a static poster fallback.
- Every below-fold media-heavy section should be lazy or intentionally staged.

---

# Performance / Accessibility / Dev Award Audit — Prompt 9

Date added: 2026-04-26

## Audit summary

Prompt 9 moved the site from broad audit findings into targeted technical readiness fixes. The main semantic, metadata, reduced-motion, and 404 gaps were addressed. Performance improved structurally by moving the Spline runtime out of the initial application chunk, but media optimization remains the largest pre-submission blocker.

## Fixes implemented

- Added route-aware document titles, meta descriptions, canonical links, robots meta, Open Graph tags, and Twitter card tags.
- Added default static metadata in `index.html`.
- Added `robots.txt` and `sitemap.xml`.
- Added a custom lightweight 404 route.
- Added reliable `main` landmarks and `#main-content` skip-link targets for homepage, work index, project pages, and 404.
- Added a semantic homepage `h1`.
- Added `aria-pressed` and a group label for work-index filters.
- Added lazy loading / decoding defaults to project images and website screenshots where safe.
- Added lazy loading, allow policies, and clearer titles to external project video iframes.
- Added global reduced-motion CSS for scroll behavior, transitions, and animations.
- Disabled Spline loading for reduced-motion users.
- Moved Spline runtime to a dynamic import so the main route bundle is no longer forced to carry it initially.
- Removed the Framer `popLayout` mode that caused a ref warning on work index cards.
- Opted into React Router future flags to reduce known router warnings.

## Remaining technical risks

- Several shipped images are still over 1MB, with some over 7MB and one around 11MB.
- Prepared Ballet Edmonton source screenshots remain large; keep them intact, but consider compression/export alternatives before final deployment.
- Animated GIFs still exist in project data and should become poster/video modules or be removed.
- External Adobe CCV video iframes remain a performance and reliability risk.
- The lazy Spline runtime still creates very large async chunks; this is better than blocking the main bundle, but still must be measured.
- No Lighthouse run was completed in this pass; use code/build/browser-level audit results until a full Lighthouse pass is available.

## Accessibility notes

- Landmark and skip-link coverage was improved.
- Homepage now exposes a semantic `h1`.
- Work-index filter state is now announced through `aria-pressed`.
- Focus-visible coverage remains mostly handled by prior implementation, but should be manually keyboard-tested route by route.
- Motion sensitivity coverage improved, but homepage/About/Skillset should still be checked manually under OS-level reduced motion.

## Performance notes

- `npm run build` with the default Codex app Node failed because Rollup's native optional package could not be loaded under that Node/code-signature context.
- `PATH=/Users/jomilshah/.nvm/versions/node/v24.14.1/bin:$PATH npm run build` passed.
- The main app chunk dropped to about 430KB minified after dynamic-importing Spline runtime.
- Large async chunks remain: Spline runtime and physics chunks are still over 500KB.

## SEO / metadata notes

- Route-level titles/descriptions/canonicals/social tags now exist.
- 404 routes receive `noindex,follow`.
- Sitemap and robots files are present.
- Final submission still needs verified production domain, final social preview asset, and route-specific share screenshots.

## Responsive / mobile notes

- Reduced-motion CSS avoids smooth scroll and large transition duration globally.
- Mobile still needs real-device visual QA, especially project pages with long image sequences and video iframes.
- Touch behavior remains poster/static-first; no hover dependency was added.

## Motion-safety notes

- Spline does not load for reduced-motion users.
- Custom cursor remains disabled for reduced-motion and hoverless environments.
- Page/project motion remains in the existing approved system; no decorative motion was added.

## Developer-readiness scorecard

| Category | Score after Prompt 9 | Remaining blocker |
|---|---:|---|
| Performance | 7.0 | Oversized assets, async Spline chunks, GIFs, external iframes |
| Accessibility | 7.6 | Manual keyboard/reduced-motion QA, contrast/focus pass |
| SEO / meta | 8.0 | Final domain and final share image verification |
| Responsive technical quality | 7.4 | Mobile QA for project pages and heavy media |
| Motion safety | 8.0 | Manual reduced-motion QA |
| Semantic structure | 8.2 | Confirm heading order per project after future content changes |
| Build health | 7.4 | Default npm runtime issue; build passes with documented Node PATH |
| Asset optimization | 5.8 | Large images/GIFs/iframes |
| Developer polish | 7.6 | Console warning audit and media cleanup remain |
| Submission readiness | 7.2 | Media optimization and full Lighthouse/accessibility pass |

## Must happen before final submission polish

1. Compress or replace oversized media.
2. Replace important GIFs with video/poster modules.
3. Decide whether Spline runtime remains worth the async cost.
4. Run Lighthouse or equivalent on production build.
5. Keyboard-test all routes.
6. Verify route metadata on deployed domain.

---

## Merged Visual Production Performance Notes

Date added: 2026-04-27

- Visual production does not override performance budgets.
- Hero authority should be achieved with stronger asset choice and sequencing before adding heavier media.
- Prepared screenshots should stay intact, but their scale must still respect performance and perceived sharpness.
- Poster-first motion is the default for project pages unless there is a clear reason to stream motion immediately.
- Real photography remains preferred, but every photographic asset still needs compression, dimensions, and loading discipline.
- Social preview images should be project-specific where justified, but kept lightweight and reviewed at actual share size.

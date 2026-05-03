# Image Redesign Rules

## Purpose

This file controls how Codex uses GPT Image 2 or any image-generation workflow.

OpenAI's image generation guide says the API can generate and edit images from prompts using GPT Image models, including `gpt-image-2`. The GPT Image 2 model page describes it as supporting image generation and editing with flexible image sizes and high-fidelity image inputs. Use it for controlled visual production, not random decoration. :contentReference[oaicite:2]{index=2}

## When image generation is allowed

Use image generation only when:

- existing project imagery is weak
- a mockup environment is needed
- a hero visual needs better art direction
- a detail shot needs better presentation
- a campaign-style image is needed
- project imagery needs consistent lighting or framing

## What must be preserved

Always preserve:

- logo
- typography style
- colours
- layout of the actual project work
- brand identity
- real project content
- proportions where relevant

## What may be improved

Image generation may improve:

- background
- environment
- lighting
- shadows
- composition
- camera angle
- depth
- mockup realism
- editorial presentation
- visual consistency

## Forbidden

Do not:

- invent a new logo
- change the typeface
- rewrite project text
- create fake client work
- add fake awards
- distort designs
- make the work look like generic AI
- overuse glass, chrome, gradients, or 3D unless it matches the project

## Prompt structure

Every image prompt must include:

1. Project context
2. Exact preservation rules
3. Visual direction
4. Composition
5. Lighting
6. Output usage
7. Negative prompt
8. Required aspect ratio
9. File naming recommendation

## Quality check

After generation, Codex must inspect:

- logo accuracy
- text accuracy
- colour accuracy
- brand consistency
- image usefulness
- AI artifacts
- whether the image improves the project page

---

# Unified Image / Mockup Rules — Awwwards Portfolio Pass

Date added: 2026-04-26

## Prepared screenshot integrity rule

Prepared screenshots are finished artwork.

Do not:

- randomly crop them
- stretch or distort them
- reflow their UI
- regenerate them
- replace real UI with fake UI
- place them into fixed slots that cut off important content

If a screenshot does not fit a layout slot, change the slot. If source quality is limited, display the screenshot smaller rather than enlarging it.

## Real-photography-first hierarchy

Preferred asset hierarchy:

1. Real photography of the actual work.
2. Clean flats with consistent lighting and accurate scale.
3. Environmental composite with believable scale and lighting.
4. Generated mockup environment that preserves the actual work.

Generated imagery is presentation support, not project content.

## No generic device mockup rule

Avoid as defaults:

- floating laptops
- rows of generic phones
- isometric device stacks
- glowing browser/device frames
- PSD-template print mockups
- fake UI generated to fill space

Use device/browser treatment only when it clarifies the project and source quality supports the scale.

## Screenshot / chrome treatment rules

- One chrome treatment per project page.
- No chrome is better than weak chrome.
- Browser/device frames should be quiet and consistent.
- Prepared screenshots should remain fully visible unless a new approved crop is intentionally created.
- Desktop and mobile screenshots should be paired only when the relationship adds meaning.
- Do not use live iframes as portfolio presentation by default.

## Image sequencing rules

Sequence images by story role, not file order:

1. Establish
2. Deepen
3. Detail
4. Transition
5. Close

Use wide / medium / detail logic where appropriate. Pair images by relationship, not symmetry. Do not let weak assets dominate because they fill a slot.

## Asset scale rules

- Large scale is earned by image quality, not importance alone.
- Full-bleed moments require strong source resolution and composition.
- Low-resolution but important assets should become smaller editorial plates.
- Pick a limited set of aspect ratios per project unless the project concept demands variety.
- Keep color and tonal treatment coherent within each project.

## Project-type mockup rules

### Branding / Identity

Use real applications, identity systems, signage, packaging, or environmental moments. Avoid logo-on-white repetition and fake brand extensions.

### Print / Editorial

Use real object photography when possible. Clean flats are acceptable. Avoid generic 3D book or poster mockups.

### Signage / Environmental

Use environment and scale. Include human/architectural reference where possible.

### Web / Digital

Use real interface screenshots or captures. Treat prepared screenshots as artwork. Avoid screenshot dumps and oversized low-quality captures.

### Motion Graphics

Use optimized video, poster frames, and extracted stills. Avoid many competing autoplay loops.

### Campaign / Integrated

Use channel-specific presentation. Real placements are strongest. Avoid generic social-phone grids.

### Production / Fabrication

Use documentary process and finished artifact photography. Generated mockups usually weaken craft-led work.

### Large-format / Installation

Use environmental scale and human reference. Avoid flat artwork as the main proof.

### Mixed Media

Use each medium's correct presentation language, unified through pacing, tone, and color treatment.

---

# Prompt 7 — Portfolio-Wide Image / Mockup Direction

Date added: 2026-04-26

## Current asset audit

Current implementation facts:

- General project imagery lives in `public/images/projects`.
- Ballet Edmonton prepared website captures live in `public/assets/projects/ballet-edmonton/source-screenshots` and curated exports live in `public/assets/projects/ballet-edmonton/curated`.
- Current local asset formats are primarily JPG and PNG. Some project media is still loaded from external CDN URLs and remote GIF/video embeds.
- Project pages render assets through shared section types: `full`, `duo`, `grid`, `text-image`, `pub`, `video`, `video-duo`, and `website-showcase`.
- There is no separate browser/device mockup component yet.
- Work index previews now use `posterImage` as the static baseline.

Current strengths:

- The portfolio is already image-led.
- Large still assets are allowed to carry page rhythm.
- Ballet Edmonton validates a prepared-screenshot workflow.
- The existing modular section system can support most asset presentation needs without a total rebuild.

Current risks:

- Some pages use many similar image beats in a row, flattening hierarchy.
- External CDN images, GIFs, and embeds make performance less predictable.
- Browser/device presentation is not yet governed by a reusable rule set.
- Low-resolution screenshots can look weak when enlarged.
- Some projects need stronger differentiation between real work, mockup context, and process proof.

## Asset hierarchy

Use this hierarchy when deciding what to show:

1. Real final work / real photography.
2. Manually prepared screenshots or cropped exports.
3. Clean flats from real design files.
4. Carefully composed mockups using real work.
5. AI-assisted environment or presentation image that preserves the real work.
6. Fully generated visuals only when strictly justified and approved.

Real work is always more valuable than fake polish. If a real asset is imperfect but authentic, improve its presentation before replacing it with generated context.

## Prepared screenshot rules

Prepared screenshots are finished artwork.

Do not:

- crop unless explicitly approved
- distort or stretch
- reflow the interface
- regenerate UI
- replace with live iframe
- force into a fixed aspect-ratio slot
- enlarge beyond source quality
- use `object-fit: cover` if content is cut off

Do:

- scale proportionally
- preserve the full prepared composition
- change the layout slot if the screenshot does not fit
- keep UI readable where readability matters
- use mobile screenshots only when they prove responsive thinking
- use one consistent presentation treatment per project section

Allowed presentation methods:

- full-width plate
- browser-less frame
- paired desktop/mobile composition
- stacked editorial sequence
- contained showcase block
- detail-support pairing
- soft contact surface/shadow
- large visual break when the source quality supports scale

## Mockup philosophy

Mockups must support the project story, not decorate the page.

Rules:

- Real photography first.
- Clean flats are better than fake physicality.
- Environmental composites are justified only when scale or context matters.
- Device/browser frames are justified only when they clarify the medium.
- One mockup philosophy per project page.
- Shadows, surfaces, and frames should be quiet and believable.
- Do not use generic floating laptops, phone rows, fake 3D print mockups, overused PSD-template scenes, random glows, or fake luxury styling.

## AI image-generation decision framework

AI generation or editing is allowed only as presentation support.

Allowed purposes:

- improve environmental context
- improve lighting consistency
- build a realistic display environment
- create a stronger hero presentation around real work
- add missing scale/context around signage, installation, or print work
- extend campaign atmosphere without inventing campaign content

Forbidden purposes:

- invent fake project work
- invent fake clients, outcomes, awards, or metrics
- change logos, typography, colors, UI text, or layout
- create unreadable fake text
- replace manually prepared screenshots
- hide weak design with generic atmosphere
- create generic luxury scenes
- produce an image that looks AI-generated

Every AI-assisted asset requires:

1. Source asset.
2. Exact preservation rules.
3. Allowed changes.
4. Forbidden changes.
5. Output purpose.
6. Aspect ratio.
7. Negative prompt.
8. Quality-control checklist.
9. File naming recommendation.
10. Approval before use on a project page.

## Project-type image and mockup rules

### Branding / Identity

- Best hero: strongest real application, system overview, or brand-world moment.
- Sequence: identity premise, mark/system, application, detail, final brand-world payoff.
- Mockups: real collateral/application first; clean flats when physical context is not available.
- AI may help with realistic environment around preserved collateral.
- Avoid: logo-only repetition, invented brand extensions, fake stationery sets, generic tote/bag mockups.

### Print / Editorial

- Best hero: printed object, strong cover/spread, or tactile editorial detail.
- Sequence: cover/object, spread rhythm, type/detail, material proof, final physical presence.
- Mockups: real photography or clean flats; paper texture only if authentic.
- AI may help create a neutral tabletop/reading context while preserving the design.
- Avoid: fake page curls, glossy 3D books, every spread at equal size.

### Signage / Environmental

- Best hero: in-context installation or environment with scale.
- Sequence: site context, primary sign, wayfinding/system, material/detail, final space.
- Mockups: environmental composites only if scale, perspective, and lighting are credible.
- AI may help create context around preserved flat artwork when no site photo exists.
- Avoid: leading with flat signage art, no human/architecture scale, fake building scenes.

### Web / Digital

- Best hero: strongest real interface moment sized to source quality.
- Sequence: key screen, workflow, detail state, responsive proof, final system view.
- Mockups: browser/device treatment only if it clarifies medium and remains quiet.
- AI may help with surrounding presentation surface, not the UI itself.
- Avoid: live iframe default, screenshot dump, fake UI, oversized low-quality captures.

### Motion Graphics

- Best hero: optimized silent loop or decisive poster frame.
- Sequence: poster frame, loop, key frames, motion logic/process, final cut.
- Mockups: frame sequences and video plates are stronger than fake devices.
- AI may help create poster/thumbnail context only if the motion artwork is preserved.
- Avoid: autoplay audio, many simultaneous loops, tiny embeds, GIF-heavy pages.

### Campaign / Integrated

- Best hero: key visual or strongest integrated campaign image.
- Sequence: idea, key visual, channel rollout, best execution per channel, final campaign wall.
- Mockups: real placements first; grouped channels should feel curated, not dumped.
- AI may help with believable placement environments.
- Avoid: social tile dumps, fake metrics, generic phone grids, every channel equal weight.

### Production / Fabrication

- Best hero: final artifact or striking process image with craft.
- Sequence: final artifact, process, material detail, production proof, finished context.
- Mockups: real process/documentary photography is strongest.
- AI may help clean presentation context only if craft evidence remains real.
- Avoid: generated substitutes for physical craft, process without payoff.

### Large-format / Installation

- Best hero: scale-first environmental image.
- Sequence: wide environment, medium view, detail, human/scale proof, final alternate angle.
- Mockups: environment and scale matter more than isolated artwork.
- AI may help when a realistic scale context is missing, with strict preservation.
- Avoid: flat artwork as proof, renders without scale, theatrical fake spaces.

### Mixed Media

- Best hero: one image or composition that establishes the throughline.
- Sequence: anchor image, medium chapters, bridge moments, detail, integrated payoff.
- Mockups: each medium uses its own correct presentation language.
- AI may help unify lighting/context across support assets.
- Avoid: equal treatment for every medium, unrelated mockup styles, visual fragmentation.

## Quality-control checklist

Before approving any new image, mockup, or generated presentation asset:

- Does it preserve the real work?
- Does it improve the project story?
- Does it fit the portfolio identity?
- Is it specific to this project type?
- Does it avoid generic mockup language?
- Is text/logo/color accurate?
- Is source resolution strong enough for the proposed scale?
- Does mobile still feel intentional?
- Is file weight appropriate?
- Would the page be weaker without this asset?

---

# Merged Visual Production Standard

Date added: 2026-04-27

## Real-photography-first hierarchy

Use this hierarchy for every project page:

1. real photography of the final work
2. clean flats from real project files
3. environmental composites only when scale or context must be shown
4. AI-assisted presentation only when it preserves the real work and there is no stronger real alternative

Generic mockup templates sit outside the accepted hierarchy and should be rejected.

## Prepared screenshot integrity rule

Prepared screenshots are finished artwork.

Never:

- crop them to fit a slot
- distort them
- reflow them
- regenerate them as fake UI
- replace them with live embeds
- re-grade them independently from the approved prepared treatment

If a screenshot does not fit a layout, the layout is wrong.

## Premium material and lighting cues

Signals that read as premium:

- one consistent light direction per project page
- visible paper, fabric, metal, or surface character where relevant
- short, believable contact shadows
- neutral or deliberately calibrated color balance
- backgrounds quieter than the work

Signals that read as cheap:

- flat overhead lighting
- repeated template lighting across supposedly different shots
- mismatched shadow logic
- glossy mockup sheen with no material truth
- radial-gradient showroom backgrounds

## No floating laptop / phone composite rule

- Do not use floating laptops, phones, tablets, or layered device stacks as the default way to present digital work.
- Device or browser chrome is allowed only when it clarifies medium or interaction.
- One chrome treatment per page, applied consistently.

## No generic 3D print mockup rule

- Print and editorial work should not be presented through generic 3D template renders.
- Real object photography is preferred.
- If print has not been produced, use clean flats on one consistent surface instead of fake dimensional renderings.

## Project-type image and mockup strategy

- Branding / Identity:
  real applications first, specimen proof second.
- Print / Editorial:
  physical object, spread rhythm, typographic detail, context.
- Signage / Environmental:
  scale-first environment, detail only after location proof.
- Web / Digital:
  prepared screenshot plates, one chrome logic, readable scale.
- Motion Graphics:
  poster frame, hero loop, still sequence, controlled playback.
- Campaign / Integrated:
  hero visual, strongest real placements, grouped channels.
- Production / Fabrication:
  documentary making proof plus final artifact.
- Large-format / Installation:
  wide context, human scale, material detail.
- Mixed Media:
  medium-specific treatment under one visual throughline.

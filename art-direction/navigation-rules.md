# Navigation Rules

## Purpose

This file protects the portfolio's single-author navigation system. Project-specific energy can affect transition tempo and preview imagery, but not the navigation structure.

## Single navigation system

Navigation remains structurally consistent across:

- homepage
- work index
- project pages
- about/contact
- 404

Do not create project-specific nav systems.

## Orientation rule

The user should always understand:

- where they are
- how to get back to the work index
- what the next available action is
- how to reach contact/about

Creative transitions are allowed only when orientation remains clear.

## Transition tempo rules

Transitions may adapt by energy category:

- Calm / Editorial: slower, softer, more spacious.
- High-Energy / Campaign: faster, sharper, higher contrast.
- Technical / System: precise, aligned, grid-like.
- Motion / Experimental: fluid but controlled, never chaotic.

Tempo may change. Identity may not.

## Smooth tempo shift principle

Project-to-project movement should feel like a tempo shift inside the same portfolio, not like entering a different website.

Keep consistent:

- nav placement
- label language
- focus states
- route structure
- next-project pattern
- typography system

Allow controlled variation in:

- preview image
- transition speed
- transition easing within approved set
- reveal intensity
- motion preview only when project type justifies it

## Next-project preview behavior

The next-project transition should be visually committed enough to close the current page and invite the next one.

Rules:

- Use a strong preview image or title treatment.
- Keep the link target clear.
- Do not replace the global navigation.
- Match hover/focus behaviour to the global interaction system.
- On mobile, keep the preview readable and tappable without hover.

## Project-to-project consistency

Do not introduce:

- hidden project-only menus
- different nav typography
- different nav positions
- project-specific icon systems
- mystery gestures as primary navigation

The portfolio's navigation is part of the brand.

---

# Prompt 6 — Project-To-Project Transition Direction

Date added: 2026-04-26

## Page transition model

Base model:

- keep the existing panel-wipe vocabulary
- preserve one navigation structure across all projects
- allow energy-specific tempo shifts only
- never make a project feel like a separate site

Future refinement can introduce held-element transitions, but only if the implementation remains accessible, performant, and consistent.

## Held-element transition possibility

Allowed held elements:

- project cover image
- project title
- neutral color field
- next-project preview image

Rules:

- held element must clarify continuity
- duration stays within 600-1100ms
- reduced-motion fallback uses simple content swap
- do not delay navigation just to show choreography

## Next-project preview behaviour

Next-project modules should become stronger project endings:

- include a meaningful static preview image where possible
- keep label/title/arrow structure consistent
- hover and focus reveal the same visual emphasis
- preview energy may adapt to the next project
- mobile remains tappable and clear without hover

## Transition duration limits

- Hover/focus on next preview: 250-450ms.
- Next preview visual reveal: 450-850ms.
- Route transition: 600-1100ms.
- Reduced-motion route transition: 0-250ms.

## Energy-to-energy transition feel

### Calm → High-Energy

Start with a restrained exit, then let the next preview sharpen contrast and tempo. Do not shock the user with an unrelated interaction model.

### High-Energy → Technical

Use a tighter, cleaner handoff. Reduce visual noise and land on precise alignment.

### Technical → Motion

Use a controlled static poster first, then allow motion only after the next project context is visible.

### Motion → Calm

Resolve motion into stillness. End the motion project cleanly and enter the calm project with space.

## Mobile transition behaviour

- No large choreography.
- Keep route changes fast.
- Use static previews.
- Avoid scroll-pinned transition dependencies.
- Preserve back/index access.

## Reduced-motion fallback

- Disable held-element travel.
- Replace panel wipe with fast fade or instant route swap.
- Keep next-project preview static.
- Preserve orientation and focus order.

## Performance concerns

- Held-element transitions require stable image dimensions.
- Do not preload every next-project video.
- Prefer static preview imagery.
- Use transform/opacity.
- Avoid transition code that blocks route completion.

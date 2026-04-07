# Frontend Design Audit Skill
# Source: https://github.com/mistyhx/frontend-design-audit

This is a comprehensive UX evaluation system for auditing and improving existing front-end interfaces.

## Core Purpose
Evaluates interfaces—either local source code or live websites—against 15 established usability principles to identify problems, rate severity, and provide concrete fixes.

## The 15 Principles
1. Visibility of System Status
2. Match Between System and Real World
3. User Control and Freedom
4. Consistency and Standards
5. Error Prevention
6. Recognition Over Recall
7. Flexibility and Efficiency
8. Aesthetic and Minimalist Design
9. Error Recovery
10. Help and Documentation
11. Affordances and Signifiers
12. Structure
13. Accessibility
14. Perceptibility
15. Tolerance and Forgiveness

## Severity Scale (0-4)
- **4** = Catastrophe (users can't complete tasks)
- **3** = Major (users struggle significantly)
- **2** = Minor (users notice but work around)
- **1** = Cosmetic (aesthetic only)
- **0** = Not a problem

## Two Input Modes

**Local Projects**: Full code access allows reading all files, identifying issues, and implementing fixes with specific line references.

**Live Websites (URLs)**: Uses WebFetch to retrieve HTML/CSS; report-only since you can't modify. Evaluates semantic structure, accessibility attributes, and visible content. Notes limitations around JavaScript behavior and computed styles.

## Six-Step Workflow

1. **Discover** — Read all relevant code or fetch page(s)
2. **Evaluate** — Systematically check against all 15 principles
3. **Report** — Present findings grouped by severity with user impact
4. **Discuss** — Explain findings and ask what to skip (Discussion Mode only)
5. **Implement** — Fix through design foundation, individual fixes, then coherence pass (local only)
6. **Verify** — Post-implementation review catching introduced issues and first-pass misses

## Available Commands
- `/frontend-design-audit` — Full workflow with discussion
- `/frontend-design-audit:evaluate` — Report only
- `/frontend-design-audit:quick` — Auto-implement without discussion
- `/frontend-design-audit:improve` — Jump to implementation phase

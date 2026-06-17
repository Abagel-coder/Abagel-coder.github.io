# Development Steps — Anish Baghel Portfolio Site

Purpose
- Turn `portfolio_design_outline.md` into a small, single-page React site with the dot-and-line "node" motif and the sections: Hero, About/Education, Projects, Leadership & Teaching, Skills, Awards, Contact.

Assumptions
- We'll build with React. Preferred bundler: Vite (fast dev). If you prefer CRA or Next.js, tell me and I'll adapt.
- Styling: plain CSS (CSS variables for design tokens in `index.css`). We may optionally add `framer-motion` for subtle animations.
- This file is a roadmap — I can scaffold and implement files from here once you confirm.

High-level phases
1. Project scaffold (repo + dev tools)
2. Design tokens & global styles
3. Layout & routing (single-page scroll) + NavRail
4. Core components (Hero, About, Projects, Leadership timeline, Skills graph, Awards, Contact)
5. Data layer (small `data/` files to populate components)
6. Interactivity & animations (scroll-draw, scroll-spy)
7. Responsive & accessibility
8. Polish, tests, and deploy

Minimal contract (for each feature)
- Inputs: content via `data/*.js`, user scroll/interaction events.
- Outputs: accessible, responsive UI matching color/type tokens; node motif present in at least Hero, NavRail, Leadership, Skills; keyboard focusable controls.
- Error modes: if media (GIF/video) missing, components degrade to static image or placeholder; if `prefers-reduced-motion` is set, animations disabled.
- Success: site builds and runs locally, no console errors, keyboard-accessible, deployable as static site.

Detailed actionable tasks

Phase 1 — Scaffold (priority: high)
- Create project with Vite + React + CSS. Files to add:
  - `package.json`, `vite.config.js` (if using vite), `index.html`
  - `src/main.jsx`, `src/App.jsx`, `src/index.css`
- Estimated time: 15–30m
- Acceptance: `npm run dev` starts local server and shows an empty app shell.

Phase 2 — Design tokens & fonts (priority: high)
- Add `src/index.css` with CSS variables from spec:
  - `--canvas`, `--surface`, `--paper`, `--accent-teal`, `--accent-amber`, `--grid-line`
- Load fonts: Space Grotesk, IBM Plex Sans, IBM Plex Mono via Google Fonts or local fallback.
- Add `prefers-reduced-motion` rules
- Estimated time: 20–30m
- Acceptance: tokens available globally, fonts display, color palette present.

Phase 3 — Layout & NavRail (priority: high)
- `src/components/NavRail.jsx`: vertical dot-chain nav; highlight active section on scroll (scroll-spy). Collapse to top progress bar for mobile.
- `src/App.jsx`: single-page scroll container with sections in order.
- Add utility hook `useScrollSpy` or small intersection-observer utility.
- Estimated time: 1–2 hours
- Acceptance: clicking a dot scrolls to section, active state updates on scroll, keyboard focus states visible.

Phase 4 — Core components (priority: high → medium)
- `Hero.jsx`: eyebrow (mono small-caps), H1, subhead, CTAs, faint node/line figure in background (SVG). CTA `View Projects` scrolls to Projects.
- `About.jsx`: short paragraph, education line.
- `Projects.jsx` + `ProjectCard.jsx`: 2 cards (Defendly, SynergyPlus) with stack tags (mono pills). Placeholder for GIF/video.
- `Leadership.jsx` + `TimelineNode.jsx`: vertical timeline with connected nodes, chronological order (choose oldest→newest or newest→oldest; pick one and stay consistent).
- `Skills.jsx` + `SkillGraph.jsx`: SVG node graph clustered by category; on small screens collapse to grouped tag lists.
- `Awards.jsx` + `AwardNode.jsx`: amber nodes with one-line descriptions.
- `Contact.jsx`: email + social links; omit public phone number (per spec).
- Estimated time: 4–8 hours (split across components)
- Acceptance: components render with supplied data and respond to layout breakpoints.

Phase 5 — Data layer (priority: medium)
- `src/data/projects.js`, `leadership.js`, `skills.js`, `awards.js` containing content from the design doc.
- Components read from those files.
- Acceptance: easy content updates without code changes.

Phase 6 — Interactivity & animations (priority: medium)
- Optional `framer-motion` for line drawing (`stroke-dashoffset`) and node/fade animations.
- Respect `prefers-reduced-motion`: if set, skip animations.
- Implement `usePrefersReducedMotion` hook.
- Acceptance: animations draw lines on scroll; disabled when reduced-motion is active.

Phase 7 — Responsive & accessibility (priority: high)
- Mobile nav (top progress bar), keyboard navigation, visible focus rings, semantic HTML, ARIA where needed.
- Test color contrast and ensure not relying on color alone for state.
- Acceptance: keyboard-only site usable; mobile layout tidy; color contrast passes basic checks.

Phase 8 — Polish, tests & deploy (priority: medium)
- Add tiny unit tests for utility hooks (e.g., scroll spy) using Vitest or Jest.
- Add Smoke test: `npm run build` succeeds and `serve -s dist` renders index.html.
- Prepare `README.md` with run/build instructions and deployment hints (Netlify/Vercel/GitHub Pages).
- Acceptance: build passes, tests pass, README instructs how to run.

Edge cases & pitfalls
- Heavy SVG animations may impact performance on low-end devices — use `will-change` sparingly and consider `requestAnimationFrame` throttling.
- Videos/GIFs might be large — provide optimized versions and fallbacks.
- Font loading FOIT/flash — use font-display: swap and sensible fallbacks.

Quality gates (quick triage before merge)
- Build: `npm run build` (PASS/FAIL)
- Lint/Typecheck: if TypeScript used, run `tsc`; else minimal ESLint (optional)
- Unit tests: run `npm test` (if added)
- Smoke: quick visual check of each section in desktop and mobile widths

Deliverables I'll produce on request (small, incremental PRs)
- Initial scaffold + `index.css` with tokens
- NavRail + scroll-spy
- Hero + background node SVG
- Projects section + ProjectCard
- Leadership timeline
- Skills graph (desktop SVG + mobile fallback)
- Awards + Contact
- Test hook and a couple unit tests
- README with run + build instructions

Immediate next actions (pick one):
- A) I'll scaffold the Vite + React project now (adds package.json, vite config, src/, index.html).
- B) I'll add `src/index.css` with design tokens and font links and commit that only.
- C) I can start by creating `src/components/NavRail.jsx` and the scroll-spy hook.

Tell me which next action you want me to take (A, B, or C), or say "follow your plan" and I'll start with A and continue until the scaffold is complete.

Notes
- I followed the content and priorities from `portfolio_design_outline.md`. If you want TypeScript rather than plain JS, or to use Next.js for routing/SSG, tell me and I'll adjust the plan and estimates.

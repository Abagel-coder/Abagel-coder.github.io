# Anish Baghel — Portfolio Site Design Spec
*A build-ready outline for Copilot (React)*

## 0. The thesis

Anish's resume tells one consistent story: he thinks in **nodes and connections** — literally, as a competitive programmer working in graphs and trees, and physically, as the builder of a pose-detection system that tracks human joints in motion. The site's visual identity is built around that idea: a recurring **dot-and-line motif** (a "kinematic chain") that doubles as a CS graph and as a skeleton/joint diagram from his Defendly project. It's used as navigation, as a timeline, and as a skills map — so it's structural, not decorative.

---

## 1. Design tokens

**Color** (ink-navy "blueprint" canvas, not generic dark mode — paired with a warm parchment text color and two distinct accents):

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#0E1A2B` | page background |
| `--surface` | `#15263D` | cards, panels |
| `--paper` | `#F3EFE3` | primary text (warm off-white, not pure white) |
| `--accent-teal` | `#46C9B8` | nodes, links, active states (the "joint/graph" color) |
| `--accent-amber` | `#D9A441` | awards, highlights (the "medal" color) |
| `--grid-line` | `rgba(70,201,184,0.08)` | faint background grid texture |

**Type:**
- Display: **Space Grotesk** (bold, geometric, technical character) — name, section headers
- Body: **IBM Plex Sans** — paragraphs, descriptions
- Utility/data: **IBM Plex Mono** — dates, stats, stack tags, award names (gives a "scoreboard" feel, fitting a competitive programmer)

**Shape & motion:**
- Sharp-ish corners (2–4px radius), thin 1px hairlines, no heavy shadows — blueprint, not glossy.
- Lines between nodes draw in on scroll (`stroke-dashoffset` animation); respect `prefers-reduced-motion` by rendering fully drawn/static.

---

## 2. The signature element

A small dot ("node") connected by thin teal lines to other dots. It appears in four places, each a different meaning of the same shape:

1. **Hero** — a faint, large skeletal figure in the background (nods to Defendly's pose tracking).
2. **Side nav** — a vertical chain of dots, one per section, that fills in teal as you scroll (navigation as progress).
3. **Leadership timeline** — each role is a node, connected in chronological order (his actual path).
4. **Skills section** — languages/frameworks rendered as a small connected graph, clustered by category (e.g., TensorFlow–OpenCV–MediaPipe near each other) rather than a flat tag list.

This is the one "bold" element on the page — everything else (typography, spacing, copy) stays quiet and disciplined around it.

---

## 3. Site structure (single-page scroll)

```
┌─────────────────────────────────────────────┐
│ ● Home  ● Projects  ● Leadership  ● Awards   │ ← thin top/side nav, dot markers
│                                               │
│   ANISH BAGHEL                      · · ·    │
│   Builder. Competitor. Mentor.     ·     ·    │ ← faint node/line figure, right side
│   Pleasanton, CA   [View Projects →]  · · ·   │
└─────────────────────────────────────────────┘
```

Sections, in order: **Hero → About/Education → Projects → Leadership & Teaching → Skills → Awards → Contact**

---

## 4. Section-by-section content

### Hero
- Eyebrow (mono, small caps): `PLEASANTON, CA · INCOMING @ UCSD, COMPUTER ENGINEERING`
- H1: **Anish Baghel**
- Subhead: something like *"I build systems that track movement — in machine learning models, and in the dojo."* (ties directly to Defendly)
- CTAs: `View Projects →`, `Download Résumé`, icon links to GitHub/LinkedIn

### About / Education
- One short paragraph bridging high school to UCSD: B.S. Computer Engineering at UCSD (expected 2030), Foothill High School diploma, GPA 3.86 UW / 4.34 W.
- Treat this as a brief intro paragraph, not a bullet list — it's the one section that should read like a person talking.

### Projects (2 cards)
**Defendly — AI Taekwondo Trainer**
- One-line role: ML pose-detection trainer, personal project, 2024–2026
- Stack tags (mono pills): Python · TensorFlow · MediaPipe
- Highlights: real-time movement analysis; 90%+ classification accuracy
- Optional: embed a short demo GIF/video if he has one — this is the project the whole visual motif is built around, so give it the most visual space.

**SynergyPlus — Student Grade Portal**
- One-line role: full-stack wrapper for the school grade portal, 2024–2026
- Highlights: identified a real student pain point, designed and shipped independently
- Stack tags: whatever he actually used (resume doesn't list specifics — fill in)

### Leadership & Teaching (timeline, oldest → newest)
- **Science Olympiad Secretary**, Foothill HS, 2025–2026 — team comms/scheduling; mentored Inquiry-event members
- **Science Olympiad Engineering Captain**, Foothill HS, 2024–2025 — captained engineering/coding events; ran practices
- **Computer Science Club President**, Foothill HS, 2023–2025 — taught Python/algorithms curriculum; organized Falcon Hacks (200+ participants)

(List newest-first or oldest-first — pick one and be consistent; the node-chain reads naturally top-to-bottom as a path.)

### Skills (node graph, grouped)
- Languages cluster: Python, Java, C++, JavaScript
- ML/Vision cluster: TensorFlow, Scikit-Learn, OpenCV, MediaPipe
- Web/backend cluster: React, FastAPI, Django, Git

### Awards (amber nodes, short one-liners)
- USACO Platinum — top competitive-programming tier
- AIME Qualifier
- Science Olympiad — 10+ regional/invitational medals
- National History Day — CA State Top 10
- Published Researcher — Journal of Emerging Investigators (JEI)

### Contact
- Name, short closing line, email + LinkedIn + GitHub.
- **Note:** the resume lists a personal phone number — worth leaving that off a public website and using email or a contact form instead, so it's not scraped/exposed.

---

## 5. Component structure (for Copilot)

```
src/
  App.jsx
  index.css                 ← design tokens as CSS variables
  components/
    NavRail.jsx              dot-chain nav, scroll-spy active state
    Hero.jsx
    About.jsx
    Projects.jsx + ProjectCard.jsx
    Leadership.jsx + TimelineNode.jsx
    Skills.jsx + SkillGraph.jsx   (SVG node graph)
    Awards.jsx + AwardNode.jsx
    Contact.jsx
  data/
    projects.js
    leadership.js
    skills.js
    awards.js
```

Suggested libraries: plain React + CSS (no UI kit needed — the design is custom), optionally `framer-motion` for the scroll-triggered line-drawing and node fade-ins.

---

## 6. Responsive & accessibility notes
- Mobile: side `NavRail` collapses into a horizontal progress bar at the top; the skills graph collapses to simple grouped tag lists (full graph layout is desktop/tablet only); hero background figure simplifies to a handful of dots rather than a full skeleton.
- Keyboard focus: visible teal outline on all interactive elements.
- Honor `prefers-reduced-motion`: disable line-draw/scroll animations, show everything in its final state.
- Don't rely on color alone for state — pair the teal "active" node with a label or underline too.

---

## 7. Ready-to-paste prompt for Copilot

> Build a single-page React portfolio site for a high school senior/incoming computer engineering student. Use a dark "blueprint" theme: background `#0E1A2B`, surface `#15263D`, text `#F3EFE3`, accent teal `#46C9B8`, accent amber `#D9A441`. Fonts: Space Grotesk for headings, IBM Plex Sans for body, IBM Plex Mono for stats/dates/tags. The visual signature is a recurring dot-and-line "node" motif (representing both a pose-detection skeleton and a CS graph) used in: a vertical side nav where dots fill in teal as the user scrolls past each section; a hero background figure made of faint dots and lines; a leadership timeline where each role is a connected node in chronological order; and a skills section rendered as a small clustered node graph grouped by category (languages, ML/vision, web/backend) instead of plain tag pills. Sections in order: Hero, About/Education, Projects (2 cards), Leadership & Teaching (timeline), Skills (node graph), Awards (amber nodes), Contact. Respect `prefers-reduced-motion` and keep keyboard focus states visible. Use the content and copy from [paste section 4 of this doc].

---

### Content reference (raw, for filling in components)
- Education: B.S. Computer Engineering, UCSD (expected 2030); Foothill High School diploma; GPA 3.86 UW / 4.34 W
- Projects: Defendly (pose-detection AI taekwondo trainer), SynergyPlus (student grade portal wrapper)
- Leadership: CS Club President (2023–2025), Science Olympiad Engineering Captain (2024–2025), Science Olympiad Secretary (2025–2026)
- Skills: Python, Java, C++, JavaScript / React, TensorFlow, Scikit-Learn, OpenCV, MediaPipe, FastAPI, Django, Git
- Awards: USACO Platinum, AIME Qualifier, Science Olympiad medalist (10+), National History Day CA Top 10, Published Researcher (JEI)

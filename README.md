# Anish Baghel — Portfolio

Single-page React + Vite portfolio site. Dark "blueprint" theme with a
dot-and-line node motif used across the nav rail and timeline.

## Requirements

- Node **18+** (a `.nvmrc` pins Node 20 — run `nvm use`). Vite 4 will not
  build on Node 12/13.

## Develop

```bash
npm install
npm run dev      # start the dev server (Vite)
```

## Build & preview

```bash
npm run build    # output to dist/
npm run preview  # serve the production build locally
```

## Deploy

`dist/` is a static bundle — deploy it to any static host (Netlify, Vercel,
GitHub Pages, Cloudflare Pages). On Netlify/Vercel set the build command to
`npm run build` and the publish directory to `dist`.

## Structure

```
src/
  App.jsx                  page layout + sections
  index.css                design tokens + styles
  components/              presentational components
  data/                    content (projects, skills, leadership, awards)
  hooks/useScrollSpy.js    scroll-spy for the nav rail
public/                    images + favicon
```

Content lives in `src/data/*.js` — edit those files to update the site, no
component changes needed.

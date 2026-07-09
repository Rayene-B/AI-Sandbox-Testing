# AI Behavioural Sandbox

A polished portfolio/research website for comparing how AI systems respond to controlled scenarios and, later, how those written responses align with behaviour inside a simulated 3D sandbox.

## Run locally

```bash
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
```

The build script validates the static assets and copies the site into `dist/`.

## Preview the production build

```bash
npm run preview
```

Open <http://localhost:4173>.

## Deploy on Vercel

This repository is ready for Vercel Git deployments.

Vercel settings:

- Framework preset: **Other**
- Install command: `npm install --package-lock-only`
- Build command: `npm run build`
- Output directory: `dist`
- Development command: `npm run dev`

These settings are also captured in `vercel.json`, so importing the connected GitHub repository into Vercel should work without extra configuration.

## Updating future research data

- Add or edit model profiles in `src/main.js` inside the `agents` array.
- Replace placeholder results in the generated agent result panels with real scenario responses, rubric scores, sandbox telemetry, and chart data.
- Replace the documentation placeholder with a PDF embed in the Documentation section.
- Replace the video placeholder with YouTube iframe embeds in the Visual Testing section.

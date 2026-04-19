# Marianne Menglin Liu — Personal Website

This repository contains the source for Marianne Menglin Liu's personal website:
- Live site: https://mariannemliu.github.io/
- Stack: Next.js (static export), TypeScript, Tailwind CSS
- Base template: PRISM (customized)

## Local Development

Prerequisite: Node.js 22+

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This generates the static site in `out/`.

## Deployment

This repo deploys automatically to GitHub Pages via:
- `.github/workflows/nextjs.yml`

Deployment triggers on pushes to `main`.

## Content Editing

Most website content is managed in `content/`:
- `content/config.toml`: global site settings, navigation, last updated
- `content/bio.md`: About text
- `content/news.toml`: News items
- `content/awards.toml`: Awards
- `content/services.toml`: Work Highlights
- `content/publications.bib`: publications source
- `content/about.toml`: homepage section config
- `content/cv.md` / `content/cv.toml`: CV page content/config

## Assets

- Put images/files in `public/` and reference them by `/filename.ext` in content files.

## Notes

- The site uses static export (`output: 'export'` in `next.config.ts`).
- For this user/org GitHub Pages site (`mariannemliu.github.io`), no `basePath` is needed.

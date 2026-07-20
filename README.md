# Alexandre Benoit — Portfolio

Personal portfolio (React + Tailwind CSS, Create React App).

## Local development

```bash
npm install
npm start
```

Runs at http://localhost:3000.

## Build

```bash
npm run build
```

Outputs a static site to `build/`.

## Deployment (Vercel)

This project is configured for Vercel via [`vercel.json`](vercel.json):

- Build command: `npm run build`
- Output directory: `build`
- SPA rewrites so client-side routes (e.g. `/publications`, `/projects/:slug`) resolve to `index.html`

Deploy by importing the repo into Vercel (auto-detected as Create React App), or run:

```bash
npx vercel        # preview
npx vercel --prod # production
```

Production domain: https://alexandrebenoit.com

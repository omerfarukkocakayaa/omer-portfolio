# Ömer Faruk Kocakaya | Portfolio

React, TypeScript and Vite portfolio with English and Turkish content. Pages use hash routing; production builds include language entry points at `/tr/` and `/en/`.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm test
npm run preview
```

The `src/i18n` directory holds translations, `src/data` contains project data and `src/components` contains reusable UI. Production output is `dist` (Node 22.12+ or 24). Do not publish `node_modules` or private configuration. Cloudflare Pages can deploy `dist` from a private repository or via direct upload. GitHub Pages workflow is retained for optional hosting.

# ericdoo-portfolio

Source for [ericdoo.com](https://ericdoo.com) -- my personal site and resume.

React + TypeScript + Vite, styled with Tailwind v4. No backend, no CMS,
just data files in `src/data/`.

## Develop

```sh
bun install
bun run dev
```

## Deploy

Push to `main`. GitHub Actions builds with Bun and rsyncs `dist/` to a
Caddy server behind Cloudflare.

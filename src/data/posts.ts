export interface Post {
  slug: string
  title: string
  date: string // ISO date
  excerpt: string
  body: string[] // paragraphs
}

export const posts: Post[] = [
  {
    slug: 'rebuilding-this-site',
    title: 'Rebuilding this site',
    date: '2026-08-26',
    excerpt:
      'Notes on rebuilding ericdoo.com: Bun, Tailwind v4, a 14-day dependency lock, and an Oracle VM behind Cloudflare.',
    body: [
      "This site is a rebuild from an old create-react-app portfolio. The goals this time: fast, small, and boring in all the right places.",
      'The stack is Vite + React + TypeScript, managed with Bun instead of npm. Styling is Tailwind v4 via @tailwindcss/vite, with the actual color values living in a handful of CSS variables so light/dark mode is just a couple of attribute selectors, not a `dark:` prefix on every element.',
      'Every dependency is pinned to an exact version, and each one was checked against the npm registry to make sure it had been published for at least 14 days before I let it in -- a cheap defense against a compromised or broken same-day release. Bun bakes this in as `minimumReleaseAge` in bunfig.toml, so it is enforced automatically on top of the manual pins.',
      "The site is served by Caddy on an Oracle Cloud ARM VM, behind Cloudflare in Full (strict) mode with a Cloudflare Origin Certificate. Deploys are GitHub Actions: build with Bun, rsync the output over SSH using a deploy key scoped to just this repo.",
      "First production build came in under 65 KB of gzipped JS and a few KB of gzipped CSS. Most of that is React itself.",
    ],
  },
]

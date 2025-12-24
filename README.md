# AxiomIntel.online

SEO-focused Astro site with MDX content collections, Tailwind UI, and affiliate-ready redirects. Deployable on Cloudflare Pages.

## Stack
- Astro + MDX + Tailwind CSS
- Content Collections for tools and blog
- Affiliate redirect handler at `/go/[slug]` with local click logging
- Sitemap via `@astrojs/sitemap`, robots.txt, canonical/OpenGraph tags, JSON-LD for articles

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Cloudflare Pages
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Astro

## Custom domain (axiomintel.online)
1. Add the domain in Cloudflare and point nameservers if not already managed.
2. In Cloudflare Pages, open the project settings → **Custom domains**.
3. Add `axiomintel.online` and complete DNS verification.
4. Ensure the Pages environment has the build command above and redeploy.

## Content & affiliate links
- Tools live in `src/content/tools/*.json`. Update `affiliate_url` to change partner links.
- Blog posts live in `src/content/blog/*.mdx`.
- Redirect logging file: `data/clicks.json`.

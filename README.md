# Meridian Labs — Software House Website

Premium marketing site for a custom software / AI / automation company.
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion. Optimised for Vercel.

> "Meridian Labs" is **placeholder branding**. All brand values live in one place — see below.

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

Push to a Git repo and import in Vercel — zero config needed. Or `npx vercel`.

## Where everything lives

| What | File |
|---|---|
| Brand name, email, phone, domain | `lib/data.ts` → `site` |
| Services (12), industries (6), process, FAQ, projects, stats | `lib/data.ts` |
| Colours (ink / paper / signal accent) | `tailwind.config.ts` |
| Fonts (Sora / Inter / JetBrains Mono) | `app/layout.tsx` |
| Contact form backend | `app/api/contact/route.ts` |

Because all copy is data-driven, renaming the company or editing a service is a one-file change.

## Design system (for future expansion)

- **Dark bookends, light core** — hero and CTA sections on `ink` with blueprint grid; content on `paper`/`fog`.
- **Type roles** — Sora (display), Inter (body), JetBrains Mono (eyebrows, labels, metrics). The mono voice is the "engineering" signature; keep it for labels only.
- **Accent** — `signal` `#5A5FF5`; cyan `pulse` appears only inside beams/gradients.
- **Utilities** — `.wrap`, `.eyebrow`, `.card`, `.card-ink`, `.btn-primary`, `.grid-ink`, `.grid-paper` in `app/globals.css`.
- Motion respects `prefers-reduced-motion` throughout.

## Before launch checklist

1. Set the real brand in `lib/data.ts` (`site.name`, `email`, `phone`, `url`).
2. Wire `app/api/contact/route.ts` to email (Resend/Postmark) and/or a CRM webhook (Zapier/n8n). The form already posts JSON to it.
3. Replace portfolio placeholders in `lib/data.ts` (`projects`) with real case studies and swap the `[ project visual placeholder ]` blocks for images.
4. Update `stats` with real numbers.
5. Set the production domain in `site.url` (drives sitemap, robots and OpenGraph).
6. Add a favicon/OG image to `app/` (`icon.png`, `opengraph-image.png`).

## SEO

Per-page metadata, Organization JSON-LD, `sitemap.xml` and `robots.txt` are generated automatically. Semantic headings (one `h1` per page) throughout.

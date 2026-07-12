# TrivaSoft Technology — Software House Website

Premium marketing site for a custom software / AI / automation company.
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion. Optimised for Vercel.

> Brand: **TrivaSoft Technology**. All brand values live in one place — see below. Live email (`hello@trivasofttechnology.com.au`) and domain (`https://www.trivasofttechnology.com.au`) are set; a public phone number is intentionally omitted until one is confirmed.

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
| Brand name, email, domain, location | `lib/data.ts` → `site` |
| Services (13), industries (6), process, FAQ, projects, strengths | `lib/data.ts` |
| Colours (ink / paper / signal accent) | `tailwind.config.ts` |
| Fonts (Sora / Inter / JetBrains Mono) | `app/layout.tsx` |
| Contact form backend + delivery | `app/api/contact/route.ts` |
| Privacy Policy / Terms & Conditions | `app/privacy/`, `app/terms/` (+ `components/legal.tsx`) |

Because all copy is data-driven, renaming the company or editing a service is a one-file change.

## Contact form delivery

The contact form (`components/contact-form.tsx`) posts JSON to `app/api/contact/route.ts`,
which validates required fields server-side and delivers each enquiry to
`hello@trivasofttechnology.com.au`. Configure delivery with environment variables —
see `.env.example`:

- **`RESEND_API_KEY`** — send email via [Resend](https://resend.com) (REST API, no SDK). Verify the `trivasofttechnology.com.au` domain in Resend first.
- **`CONTACT_FROM`** — a verified sender address on that domain.
- **`CONTACT_TO`** — override the recipient (defaults to `hello@trivasofttechnology.com.au`).
- **`CONTACT_WEBHOOK_URL`** — optional CRM/automation webhook (Zapier / Make / n8n).

In development, with no channel configured, enquiries are logged to the server console
and the form still shows success. **In production, at least one channel must be set** — otherwise the endpoint returns an error so misconfiguration is caught rather than silently losing leads.

## Design system (for future expansion)

- **Dark bookends, light core** — hero and CTA sections on `ink` with blueprint grid; content on `paper`/`fog`.
- **Type roles** — Sora (display), Inter (body), JetBrains Mono (eyebrows, labels, metrics). The mono voice is the "engineering" signature; keep it for labels only.
- **Accent** — `signal` `#5A5FF5`; cyan `pulse` appears only inside beams/gradients.
- **Utilities** — `.wrap`, `.eyebrow`, `.card`, `.card-ink`, `.btn-primary`, `.grid-ink`, `.grid-paper` in `app/globals.css`.
- Motion respects `prefers-reduced-motion` throughout.

## Before launch checklist

1. ~~Set the real brand in `lib/data.ts`~~ — done (`site.name`, `email`, `url`, `location`).
2. **Set contact-form delivery env vars** (`RESEND_API_KEY` + `CONTACT_FROM`, and/or `CONTACT_WEBHOOK_URL`) in your host — see `.env.example`. Verify the sending domain in Resend.
3. ~~Add Privacy Policy and Terms & Conditions~~ — done (`/privacy`, `/terms`, linked in the footer). Have them reviewed by a legal professional and add an ABN if applicable.
4. Add a public phone number to `site` (and re-add it to the contact/footer blocks) once confirmed.
5. Replace the portfolio cover blocks (currently the solution title on a blueprint panel) with real imagery when available. Copy is production-ready.
6. Add a favicon/OG image to `app/` (`icon.png`, `opengraph-image.png`).

## SEO

Per-page metadata, Organization JSON-LD, `sitemap.xml` and `robots.txt` are generated automatically. Semantic headings (one `h1` per page) throughout.

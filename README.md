# ClientFlow — Intake OS MVP

ClientFlow is a SaaS concept for freelance service providers who need a single place to convert leads into paying clients. This repository contains both the public marketing site and an authenticated dashboard skeleton built with **Next.js App Router + TypeScript + Tailwind CSS**. Supabase, Gemini, and Stripe integrations are stubbed in but documented for future implementation.

## Highlights
- Multi-page marketing site (Landing, Features, Pricing, Docs/FAQ, Blog, About, Contact, Privacy, Refund & Terms)
- Dashboard areas for Leads, Intake Forms, AI Proposals, Calendar, Files, Analytics, and Settings
- Tailwind-based glassmorphism UI with cursor halo and CTA system
- Server routes for AI proposal generation, intake submissions, lead listing, file upload URLs, and Stripe webhooks
- JSON-LD, sitemap, robots, and meta helper utilities for SEO
- GDPR essentials: cookie consent banner + privacy actions in settings
- Documentation covering DB schema, RLS policies, analytics events, and deployment steps (`docs/architecture.md`)

## Getting started
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` for marketing pages and `http://localhost:3000/dashboard` for the authenticated shell.

### Environment variables
Create a `.env.local` with the following placeholders before hooking up real services:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GEMINI_API_KEY=
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
STRIPE_WEBHOOK_SECRET=
```
When these are absent, the app falls back to safe mocks so the UI remains interactive.

## Available scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Lint via ESLint |

## Key directories
```
src/
  app/                // App Router pages, API routes, sitemap, robots
  components/         // Layout primitives, dashboards widgets, UI kit
  data/site-content.ts// Centralized marketing & pricing copy
  lib/                // SEO helpers, Supabase client, Gemini helper, utilities
public/               // Static assets (placeholders for OG and favicons)
docs/architecture.md  // Product, schema, and deployment blueprint
```

## API contracts
| Route | Method | Purpose |
| --- | --- | --- |
| `/api/ai/generate-proposal` | POST | Validates payload, calls Gemini helper, logs to Supabase (stub) |
| `/api/forms/submit` | POST | Accepts JSON/form submissions for contact + privacy requests |
| `/api/leads` | GET | Returns mock lead data for dashboard |
| `/api/files/upload-url` | POST | Returns placeholder signed URL for Supabase Storage |
| `/api/webhooks/stripe` | POST | Logs webhook payload (signature validation to be added) |

## Testing guidance
Manual scenarios to cover now (also listed in `docs/architecture.md`):
1. Load marketing pages and verify hero copy, features, pricing tiers, and JSON-LD.
2. Submit the contact form (hits `/api/forms/submit`).
3. Trigger AI proposal generation inside `/dashboard/proposals`.
4. Request signed upload URL on Files page.
5. Toggle onboarding checkboxes + trial banner on Dashboard Overview.
6. Submit GDPR request form on Settings page.

## Deployment notes
- Deploy to Vercel for the Next.js + edge API combo.
- Provision Supabase (Auth + DB + Storage) and apply the schema/RLS from `docs/architecture.md`.
- Configure env vars + Stripe webhook secret before enabling billing automations.
- Replace the placeholder OG image URL in `src/data/site-content.ts` once design assets exist.

For a deeper blueprint (DB tables, roadmap, analytics events, consent handling, sitemap instructions), review `docs/architecture.md`.

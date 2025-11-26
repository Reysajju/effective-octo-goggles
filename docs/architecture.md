# ClientFlow Blueprint

## Brand & value
- **Name:** ClientFlow — try-first client intake + AI-assisted proposals + one-click scheduling.
- **Tagline:** Close clients faster — without the busywork.
- **Target users:** Freelance service providers and solo consultants (US, 18–40) who already juggle leads across email/forms/messages.

## Pages & routing
| Path | Purpose |
| --- | --- |
| `/` | Landing hero, feature overview, CTA, social proof |
| `/features` | Deep feature tour (AI proposals, intake, calendar, files, analytics, chat) |
| `/pricing` | Trial details, tiers, FAQ, CTA |
| `/docs` | Onboarding, APIs, analytics events, acceptance tests |
| `/blog` | 12 starter SEO articles |
| `/about` | Mission, roadmap |
| `/contact` | Sales/support form plus contact channels |
| `/privacy` | GDPR-ready privacy policy |
| `/refund-terms` | Refund & ToS summary |
| `/dashboard/*` | Authenticated workspace (overview, leads, intake forms, proposals, calendar, files, analytics, settings) |

A dynamic `sitemap.ts` and `robots.ts` power SEO crawling, while JSON-LD snippets run on landing, features, pricing (FAQ), docs, and blog pages.

## Design system & UX
- Tailwind CSS tokens via `@theme` plus CSS variables for palette.
- Glassmorphism cards with blur, gradients, and hover light sweeps.
- Cursor halo follows pointer for interactive feel.
- Components: `MarketingLayout`, `DashboardLayout`, `GlassCard`, `SectionHeading`, CTA buttons.
- Motion cues: onboarding steps, realtime activity feed, timeline cards.

## Trial model
- 14-day trial (no card) with unlimited leads/forms but limited AI credits.
- CTA text is centralized in `siteMetadata.trialCopy`.
- Dashboard banner + settings remind users to upgrade.

## Database schema (Supabase / Postgres)
```
users(id uuid pk, email text unique, created_at timestamptz)
profiles(user_id uuid pk fk users, name text, company text, timezone text, plan text, trial_expires timestamptz)
leads(id uuid pk, user_id uuid fk, name text, email text, status text, source text, score int, created_at timestamptz)
intake_forms(id uuid pk, user_id uuid fk, name text, schema_json jsonb, created_at timestamptz)
responses(id uuid pk, lead_id uuid fk, form_id uuid fk, values_json jsonb, created_at timestamptz)
proposals(id uuid pk, user_id uuid fk, lead_id uuid fk, content_html text, tone text, status text, total numeric, created_at timestamptz)
files(id uuid pk, owner_id uuid fk, file_path text, meta_json jsonb, created_at timestamptz)
events(id uuid pk, user_id uuid fk, type text, payload_json jsonb, created_at timestamptz)
subscriptions(user_id uuid pk fk, stripe_id text, status text, current_period_end timestamptz)
personalization_profiles(user_id uuid pk fk, behavior_json jsonb)
```

## RLS policies
1. **Workspace isolation** — `auth.uid() = user_id` on all user-owned tables (select/insert/update/delete).
2. **Admin override** — grant read access to `role = 'admin'` for support.
3. **Events** — insert allowed for authenticated user; read allowed for owner only.
4. **Files** — use Supabase Storage policies per bucket (owner or shared link).

## API endpoints implemented
| Endpoint | Method | Summary |
| --- | --- | --- |
| `/api/ai/generate-proposal` | POST | Validates payload, calls Gemini helper, stores stub proposal |
| `/api/forms/submit` | POST | Accepts JSON or form-encoded payloads, logs to `events` |
| `/api/leads` | GET | Returns mock lead data |
| `/api/files/upload-url` | POST | Returns placeholder signed URL for Supabase uploads |
| `/api/webhooks/stripe` | POST | Logs Stripe webhook payloads (signature check placeholder) |

All endpoints require server-side AI key usage. Gemini helper lives in `src/lib/gemini.ts` so keys never touch the client bundle.

## Analytics & events
Tracked events (after consent): `page_view`, `lead_created`, `proposal_generated`, `proposal_sent`, `proposal_signed`, `meeting_booked`. Use server-side events for conversions to avoid ad-blocker loss.

## GDPR, privacy & consent
- Cookie banner controls analytics/marketing buckets (stored in `localStorage`).
- Settings page offers export/delete request forms; privacy policy explains flow.
- Data retention default 90 days post cancellation with configurable windows.

## SEO toolkit
- `buildMetadata` helper standardizes meta tags.
- JSON-LD helpers for SaaS product + FAQ (`buildSaasJsonLd`, `buildFaqJsonLd`).
- Blog + docs content uses structured headings for lighthouse/accessibility.
- Sitemap + robots automatically use canonical domain from `siteMetadata.url`.

### Meta title template
```
${pageTitle} · ClientFlow
```
### Meta description template
```
${pagePurpose}. ClientFlow unifies intake, AI proposals, and scheduling.
```
### OG/Twitter
`og:image` points to a hosted placeholder now. Replace with your generated OG image once design is ready.

## Deployment checklist
1. Provision Supabase project; run schema + RLS SQL (above) and enable Storage bucket `client-assets`.
2. Configure environment variables in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY`, `STRIPE_WEBHOOK_SECRET` (later), `NEXT_PUBLIC_SITE_URL` if desired.
3. Connect GitHub repo to Vercel, ensure branch previews create unique Supabase redirect URLs.
4. Enable Vercel Analytics/Speed Insights only after consent gating is confirmed.
5. Generate production OG image and upload to `/public/og.png` or remote CDN.

## Testing / QA scenarios
1. **Signup & onboarding** — new account completes wizard, dashboard metrics render.
2. **Intake form creation** — add fields, preview, submit test response.
3. **AI proposal stub** — call `/api/ai/generate-proposal`, ensure HTML stored + returned.
4. **File uploads** — request signed URL, upload via Supabase Storage.
5. **Calendar booking** — open booking grid, ensure slot toggles & reminders queue.
6. **GDPR request** — submit export/delete form, confirm event log entry.
7. **Cookie consent** — verify analytics scripts fire only after opt-in.

## Roadmap (Phases)
- **Phase 1 (MVP):** Marketing site, auth, trial gating, intake forms, AI stub, storage, analytics tiles (this repo).
- **Phase 2:** Realtime chat, calendar sync (Google/Outlook), Stripe billing, personalization engine.
- **Phase 3:** Localization, A/B testing, marketing automation, advanced personalization.

## Sitemap generation instructions
Next.js automatically reads `src/app/sitemap.ts`. Update the `routes` array whenever you add new marketing pages so crawlers stay fresh. For blog posts served dynamically later, build the array from CMS data.

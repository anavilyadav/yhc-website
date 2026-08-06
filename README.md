# Yadav Homeo Clinic — Website (Next.js Rebuild)

Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Supabase.

## What's in this delivery — STEP 1: Homepage

All 9 homepage sections from `STEP1_Homepage_Content.docx`, implemented exactly as written:

1. Hero Banner
2. Stats Bar (static numbers — see note below)
3. About the Clinic (teaser)
4. Conditions We Treat (14 disease cards)
5. How We Work (5 steps)
6. Why Choose Yadav Homeo Clinic (6 features)
7. Patient Testimonials
8. Online Consultation
9. Final Call to Action

Plus: sticky header, footer (5-column, legal links, medical disclaimer), mobile
sticky Call/WhatsApp bar, desktop floating WhatsApp button, and full JSON-LD
schema (MedicalClinic + LocalBusiness, WebSite/SearchAction, Physician x2)
per `GIOS_P2_SEO_Schema_WordPress.docx`.

**Not included yet (comes in later steps, once you share those docs):**
Pricing cards and FAQ accordion — the design constitution doc lists these as
homepage sections 9-10, but their actual copy lives in STEP3 (Appointment) and
STEP9 (FAQ) documents which haven't been the focus of this step. Adding them
now would mean inventing content instead of using what you approved.

## Two corrections made to STEP1 content (flagging, not hiding)

- **"Est. 1993" -> "Est. 1991"**: STEP1's About section heading said 1993, but
  every other document (Project Memory, GIOS audits, the design constitution)
  says 1991. Treated as a typo and corrected for consistency.
- **"30+ years" -> "35+ years"** in body copy and stats: STEP1 was written when
  the clinic was ~30 years old. The newer design constitution doc (Jul 23)
  already shows "35+" in its homepage mockup, which matches 1991 + 2026.
  The P7 governance doc explicitly requires updating stale year-based numbers
  annually, so this was corrected. **The literal SEO Page Title and Meta
  Description at the top of STEP1 still say "30+ Years"** -- left exactly as
  written since that section says "copy exactly," but you'll probably want
  to update those two fields to 35+ as well. Just say the word.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase + business details
npm run dev
```

### Supabase

Run `supabase/schema.sql` once in your Supabase project's SQL editor. It
creates `diseases` and `testimonials` tables (RLS-protected, public read of
published rows only) and seeds them with the exact STEP1 content. This is
what makes disease cards and testimonials editable from an admin panel later
without a redeploy -- ISR revalidates every hour (`app/page.tsx`).

Until `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set,
the site falls back to the same content hardcoded in `lib/data/*.ts`, so
`npm run build` always works even before Supabase is connected.

### Business details for schema markup

`.env.example` lists optional fields (address, GPS, social links, Google
rating) used in JSON-LD. Left blank, they're simply omitted -- never filled
with placeholder/fake data, since that violates Google's structured data
policy.

## Verified

- `npm run build` -- clean, homepage prerendered as static + ISR (1h)
- `npm run lint` -- clean

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

## What's in this delivery — STEP 4: 7 Disease/Treatment Pages

All 7 pages from `STEP4_Disease_Pages_Part1.docx`, at the same URLs already
linked from the homepage's Conditions grid and the footer (no `/treatments/`
prefix — that prefix appears in `GIOS_P2_SEO_Schema_WordPress.docx` but the
STEP1 homepage build already shipped links as `/skin-diseases/` etc., and
per the project's own hard rule not to touch completed work, this delivery
matches what's already live rather than introducing a second URL pattern):

1. `/skin-diseases/` — hero **replaced** with the STEP8 (green) version per
   developer package Instruction 1. Body content is STEP4's as written.
2. `/autoimmune-diseases/`
3. `/cancer/` — cancer support only; page opens with the mandatory "not a
   cure for cancer" disclosure and carries a prominent disclaimer banner
   per GIOS_P7 (cancer/neurological pages need this "supportive care only"
   language surfaced, not just in the footer).
4. `/renal-diseases/`
5. `/genetic-diseases/`
6. `/autism/`
7. `/nervous-system-disease/` — also gets the prominent disclaimer banner
   (AED/epilepsy safety language), same reasoning as cancer.

Each page: hero, conditions-treated list, full body sections (with
sub-sections for things like Cancer's during/after-chemo lists and Kidney's
CKD-stage-by-stage expectations), one real patient story, FAQ accordion,
medical disclaimer, and a page-specific final CTA — all pulling from
Supabase (`disease_pages` table) with the exact STEP4 copy as a build-safe
fallback, same pattern as the homepage's `diseases`/`testimonials` tables.

Built as a single dynamic route (`app/[slug]/page.tsx` with
`generateStaticParams`) rather than 7 separate page files, since all future
disease pages (STEP5's 7 more, then STEP11's 3 new ones) will need the
identical template — adding a page from here on is a data change, not a
code change.

**Schema:** `MedicalWebPage` + `FAQPage` JSON-LD per page, matching
`GIOS_P2_SEO_Schema_WordPress.docx` Section 6's structure (`about`,
`author`/`reviewedBy`/`publisher` as `@id` references into the homepage's
clinic/physician schema, `breadcrumb`) — adapted to this site's actual
`/slug/` URLs instead of the doc's `/treatments/slug/` path, for the same
reason as above.

**Not included yet:** the other 7 STEP5 disease pages (Children's Health,
Women's, Men's, Respiratory, Digestive, Hormonal, Mental Health) — their
homepage cards link out but 404 until that step is delivered. The Skin
Diseases page's dedicated Vitiligo/Psoriasis sub-pages are STEP7, not this
step.

### Supabase — new table

Re-run `supabase/schema.sql` (it's additive — `create table if not exists`
and `on conflict do nothing`, safe to re-run on a database that already has
the STEP1 tables). It now also creates `disease_pages`, RLS-protected same
as the others, seeded with these 7 pages' exact content generated straight
from `lib/data/disease-page-content.ts` via `scripts/gen-disease-pages-sql.ts`
— re-run that script if the content ever changes, rather than hand-editing
the SQL, so the two never drift apart.

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

- `npm run build` -- clean. Homepage + all 7 STEP4 disease pages prerendered
  as static HTML with 1h ISR (`generateStaticParams` on `app/[slug]/page.tsx`)
- `npm run lint` -- clean
- All 7 disease pages checked for: valid, parseable `MedicalWebPage` +
  `FAQPage` JSON-LD actually present as literal `<script>` tags in the
  server-rendered HTML (not just client-injected -- see note in
  `app/[slug]/page.tsx`); STEP8 hero override live on `/skin-diseases/`;
  prominent disclaimer banner present on `/cancer/` and
  `/nervous-system-disease/`; patient stories and FAQ content match source
  docs verbatim

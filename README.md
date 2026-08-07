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

**Not included yet (at this point in the delivery):** the other 7 STEP5
disease pages (Children's Health, Women's, Men's, Respiratory, Digestive,
Hormonal, Mental Health) — their homepage cards linked out but 404'd until
STEP5 was delivered (see below). The Skin Diseases page's dedicated
Vitiligo/Psoriasis sub-pages are STEP7, not yet delivered.

### Supabase — new table

Re-run `supabase/schema.sql` (it's additive — `create table if not exists`
and `on conflict do nothing`, safe to re-run on a database that already has
the STEP1 tables). It now also creates `disease_pages`, RLS-protected same
as the others, seeded with these 7 pages' exact content generated straight
from `lib/data/disease-page-content.ts` via `scripts/gen-disease-pages-sql.ts`
— re-run that script if the content ever changes, rather than hand-editing
the SQL, so the two never drift apart.

## What's in this delivery — STEP 2: About Page

`/about/` — hero, "Our Story" narrative, profile sections for Dr T P Yadav
and Dr Anavil Yadav, clinic timeline, mission/vision/values, "why us" grid,
and a closing CTA. Doctor bios (`doctors` table) are Supabase-backed and
admin-editable, per the project's hard rule that content the doctor edits
later lives in Supabase rather than hardcoded JSX — everything else on this
page is static narrative copy from `STEP2_AboutUs_DoctorProfiles.docx` and
lives in `lib/content/about-static-content.ts`. Each published doctor also
gets a `Physician` JSON-LD block (`components/schema/PhysicianSchema.tsx`).

### Supabase — new table

Run `supabase/migrations/0001_create_doctors_table.sql` then
`supabase/seed/doctors_seed.sql` once in your Supabase project's SQL editor.
Until `doctors` has published rows (or Supabase isn't configured), the About
page simply skips the doctor sections it has no data for rather than
crashing the build.

## What's in this delivery — STEP 3: Appointment & Contact Pages

- `/appointment/` — consultation-type picker (in-clinic vs online), the
  6-step online consultation process, pricing cards, a pre-visit preparation
  checklist, and an FAQ accordion. Pricing and FAQs are Supabase-backed
  (`pricing_plans`, `faqs` tables) with the two confirmed fee figures as a
  build-safe fallback — the two online fees are genuinely undecided in the
  source docs, so the UI shows "Fee to be confirmed" rather than a guess.
- `/contact/` — quick contact bar, both clinic locations (map embed shown
  once a Google Maps embed URL is supplied), an online-consultation callout,
  and a contact form that posts to `app/api/contact/route.ts` and saves to
  the `contact_submissions` table via the Supabase service-role key.

Several business details (clinic addresses, PIN codes, map embeds, UPI ID,
social links) are left as `null`/PENDING per source doc `STEP3_Appointment_
Contact_Pages.docx` — components degrade gracefully (hide the field or show
a "to be confirmed" note) instead of rendering placeholder or invented data.

### Supabase — new tables

Run `supabase/migrations/0002_appointment_contact.sql` once in your Supabase
project's SQL editor. Creates `clinic_locations`, `pricing_plans`, `faqs`
and `contact_submissions` (RLS-protected — public can read locations/pricing/
FAQs and insert a contact submission, but only the service-role key can read
submissions back). Set `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` for the
contact form to save; without it, submissions fail gracefully with a
WhatsApp-us-instead message rather than a 500.

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

## What's in this delivery — STEP 5: 7 More Disease/Treatment Pages

The remaining 7 pages from `STEP5_Disease_Pages_Part2.docx`, completing the
full set of 14 homepage condition cards (no more 404s from `/#conditions`):

8. `/childrens-health/` — hero **replaced** with the STEP8 (GREEN) version,
   same as Skin Diseases in STEP4 (see `dr-anavil-step8-hero-fixes-2026-07-12.docx`,
   referenced as Doc #9 in the developer package master index). Body content
   is STEP5's as written.
9. `/womens-health/`
10. `/mens-health/` — hero also replaced per STEP8. The master index's
    instruction for Doc #7 (STEP5) additionally calls for a paragraph on
    male-infertility stigma inserted into the body (added as its own section,
    right after "Conditions We Treat") and a **prominent** disclaimer on the
    sexual-health content ("Sexual health section: medical disclaimer
    prominent") — implemented via the same `disclaimerProminent` flag STEP4
    used for Cancer/Nervous System, since the page schema doesn't support a
    separate mid-page banner.
11. `/respiratory-diseases/`
12. `/digestive-diseases/`
13. `/hormonal-diseases/`
14. `/mental-health/` — **judgment call, flagged rather than hidden:** the
    source doc includes a crisis-line callout (iCall: 9152987821) next to the
    Depression content, which is kept as an in-context note there. Beyond
    that, this page also got `disclaimerProminent: true` even though no
    source doc explicitly requests it for this page (unlike Men's Health,
    where the master index does) — the page discusses suicidal ideation, the
    same category of safety-critical content that earned Cancer and Nervous
    System their prominent banners in STEP4. Worth a second look from Dr
    Anavil given it's an inference, not a documented instruction.

Same template as STEP4 (hero, conditions list, body sections, patient story,
FAQ, disclaimer, final CTA) via the existing `app/[slug]/page.tsx` dynamic
route — no new code, only new data in `lib/data/disease-page-content.ts`.

**Content gaps filled in, flagged here rather than hidden:** STEP5's source
document jumps straight from each page's SEO fields into body sections
without a lead-in sentence before the "Conditions We Treat" bullet list
(STEP4's pages all had one). A one-line intro was written per page in the
same voice to satisfy the `conditionsIntro` field the shared template needs
— e.g. Children's Health: "We treat a full range of childhood health
concerns — from recurring infections to developmental and behavioural
conditions:". Per-page `disclaimer` text was likewise written to match
STEP4's tailored-per-condition voice (referencing the relevant specialist —
paediatrician, gynaecologist, urologist, etc.) rather than the generic
boilerplate in `GIOS_P7_Governance_Compliance.docx`, since that's the
pattern STEP4 already established for this field.

### Supabase — updated seed

`supabase/schema.sql`'s `disease_pages` insert now covers all 14 pages —
regenerated via `scripts/gen-disease-pages-sql.ts` from the updated
`DISEASE_PAGE_SEED` (confirmed via `git diff` to be purely additive: the
original 7 STEP4 rows are byte-for-byte unchanged). Re-run the whole file;
it's still `on conflict do nothing`.

## Legal compliance pass — `dr-anavil-complete-legal-audit-2026-07-14.docx`

The full reference library (`REFERENCE KNOWLEDGE FOR THE PROJECT/`) is
interlinked — reading it in full surfaced a dedicated legal audit doc
reviewing every STEP document for Drug & Magic Remedies Act 1954 /
Consumer Protection Act 2019 risk, with exact copy-paste fixes. Applied:

- Skin Diseases FAQ: dropped "permanently cure" language for vitiligo
- Kidney/Renal patient story: added a "results may not be typical" caveat
  (new optional `note` field on `DiseasePagePatientStory`)
- Children's Health: "No side effects" → "No pharmacological side effects";
  tonsillitis "majority of cases" → "many cases" + ENT-review recommendation
- Hormonal page: diabetes "has been shown to improve" (implies published
  research) → "in our clinical experience... has supported improvement"
- Appointment page: added the missing Telemedicine Practice Guidelines
  2020 (NMC/MCI) compliance statement to the online-consultation card

Also fixed independently (GIOS_P7 §3.2, confirmed missing by inspection):
the mandatory testimonial disclaimer below the homepage Testimonials
section. One flag from the audit (verify "1,00,000+ patients" / "5,000+
children" against clinic records) is a factual check only Dr Anavil can
do — not a code fix.

## What's in this delivery — STEP 6: Blog Posts

5 blog posts from `STEP6_Blog_Posts.docx`, used essentially verbatim — the
legal audit already reviewed this content and found only one low-risk item
requiring no change (Blog 1's title asks "Can Homeopathy Cure Vitiligo?"
as a question and the post itself answers honestly, so it passes).

- `/blog/` — listing page, newest first
- `/blog/can-homeopathy-cure-vitiligo/`
- `/blog/homeopathy-for-autism/`
- `/blog/homeopathy-for-high-creatinine-kidney-disease/`
- `/blog/what-to-expect-first-homeopathy-consultation/`
- `/blog/myths-about-homeopathy-answered/`

Each post: category/read-time/date meta, body content, a new reusable
`AuthorBox` (photo-or-initials + name + qualification + registration
number when confirmed + "Last reviewed" date — mandatory per GIOS_P7
§10's E-E-A-T requirements, fed live from the `doctors` table so it never
drifts from the About page), the mandatory blog disclaimer text from
GIOS_P7 §3.2, a link to the most relevant disease page, and 1-2 related
posts — matching GIOS_P2's internal-linking strategy. `BlogPosting`
JSON-LD added per GIOS_P2 Section 7.

Content is Supabase-backed (`blog_posts` table, `supabase/migrations/
0003_blog_posts.sql`, seeded via the new `scripts/gen-blog-posts-sql.ts`)
with the seed as a build-safe fallback — same architecture as
`disease_pages`.

**Found a real bug while building this:** the initials-placeholder logic
(used when a doctor has no photo yet) rendered "DAY" for "Dr Anavil Yadav"
instead of "AY", because "Dr" is 2 characters and slipped past the
`length > 1` filter meant to drop single-letter fragments. This existed
already in `DoctorProfileSection.tsx` from STEP2 (same bug, just never
seen live because the About page hasn't been checked with a missing
photo). Fixed both call sites via a new shared `getInitials()` helper in
`lib/utils.ts` that also excludes honorifics.

**Scope decision, flagged rather than silently done:** the source doc asks
for literal inline hyperlinks within blog prose (e.g. "book a
consultation" linked mid-sentence to `/appointment/`). This isn't
implemented — paragraphs are stored as plain strings, matching how every
disease page already renders its own body copy without inline links
despite GIOS_P2 asking for the same there. Internal linking is instead
satisfied via an explicit "Read more about [condition]" link, a "Related
Reading" block, and the CTA — consistent with what's already shipped
everywhere else on the site, not a gap unique to blog posts.

Featured images (the source doc suggests Unsplash/Pexels stock photos)
were not added, consistent with the rest of the site: no doctor or clinic
photos have been added anywhere yet either (`photo_url` is null in the
doctors seed) — this is one content gap, not two.

## What's in this delivery — STEP 7: Missing Pages

Three pages from `dr-anavil-step7-missing-pages-2026-07-12.docx` that were
planned in the GIOS_P2 URL structure but had no content — and that other
pages already had dead links pointing at (`DiseaseHero`'s "Start Online
Consultation" button, the homepage's "Read More Stories" link, Footer's
"Patient Stories" link all 404'd until this step):

- `/online-consultation/` — dedicated landing page for online/NRI search
  intent (GIOS_P5 Intent Type 7). Hero + author box + honest "is online as
  effective" section + 6-step process + suitability list + a visible
  Telemedicine Practice Guidelines 2020 compliance section (not just a
  footnote — the source doc calls this out as a legal requirement, not
  optional) + 3 testimonials + FAQ + disclaimer, ordered per GIOS_P5's
  "FAQ after testimonials, before final CTA" rule.
- `/patient-stories/` — 11 real-patient-story cards across 5 categories
  (Skin, Kidney, Autism & Child Development, Women's Health, Nervous
  System), each linking to its matching disease page. Filterable by
  category via a client component (`PatientStoriesFilter`), per the source
  doc's explicit request. Testimonial disclaimer shown both below the hero
  and again at the bottom, per doc instruction.
- `/skin-diseases/vitiligo-treatment-jaipur/` — a deep-dive sub-page under
  Skin Diseases (URL adapted from GIOS_P2's `/treatments/skin-diseases/...`
  to match the flat convention every other disease page already uses).
  Reuses the existing disease-page components (`DiseaseHero`,
  `ContentSections`, `PatientStoryCard`, `FAQAccordion`,
  `DisclaimerBanner`, `DiseasePageFinalCTA`) rather than new one-off
  components, since the content shape is identical to a disease page minus
  the "Conditions We Treat" list. `DiseaseHero` and
  `buildMedicalWebPageSchema` both gained an optional `breadcrumbParent`
  override (default unchanged) so this page's breadcrumb reads Home → Skin
  Diseases → Vitiligo instead of the default Home → Conditions We Treat.

**Legal fix applied pre-emptively:** this doc's Vitiligo FAQ repeats the
exact same "permanently cure vitiligo?" question that
`dr-anavil-complete-legal-audit-2026-07-14.docx` FLAG 3 already flagged on
the main Skin Diseases page — so the same corrected wording was used here
from the start rather than shipping known-flagged language.

**Deferred, not invented:** the source doc references several assets that
don't exist yet — a Google Form for the intake process, before/after
patient photos, video testimonials, and a Google Reviews (Elfsight) widget
(all called for by GIOS_P5 too). None of these were faked; the online
consultation page leads with WhatsApp instead of a form (which GIOS_P5's
own Intent Type 7 section says is the right primary CTA for this search
intent anyway), and photo/video sections were left out rather than filled
with stock imagery.

## Verified

- `npm run build` -- clean. Homepage + all 14 disease pages (STEP4 + STEP5)
  + 5 blog posts + `/online-consultation/`, `/patient-stories/` and the
  vitiligo sub-page all prerendered as static HTML
- `npm run lint` -- clean
- All 14 disease pages checked for: valid, parseable `MedicalWebPage` +
  `FAQPage` JSON-LD actually present as literal `<script>` tags in the
  server-rendered HTML (not just client-injected -- see note in
  `app/[slug]/page.tsx`); STEP8 hero override live on `/skin-diseases/`,
  `/childrens-health/` and `/mens-health/`; prominent disclaimer banner
  present on `/cancer/`, `/nervous-system-disease/`, `/mens-health/` and
  `/mental-health/`; patient stories and FAQ content match source docs
  verbatim; `scripts/gen-disease-pages-sql.ts` output spot-checked for all
  7 new slugs
- All 5 blog posts checked in-browser: author box renders correct
  initials, mandatory disclaimer present, `BlogPosting` JSON-LD present,
  related-post and related-disease links resolve to real pages
- STEP7 pages checked in-browser: telemedicine compliance statement
  visible (not hidden in fine print); patient-stories category filter
  verified working (confirmed via direct DOM interaction — clicking
  "Nervous System" correctly narrows to the 2 matching stories and applies
  active-button styling); vitiligo page's breadcrumb reads Home → Skin
  Diseases → Vitiligo in both the visible UI and the JSON-LD; all
  "Read more about [condition]" links resolve to real disease pages

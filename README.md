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

## What's in this delivery — STEP 9: FAQ Page

`/faq/` from `dr-anavil-step9-faq-page-schema-2026-07-12.docx` — this
page's stated purpose is to replace Google Business Profile Q&A
(deprecated Nov 2025) as the primary local-SEO Q&A signal, feeding
Google's AI/voice search. That's the source of this page's most
noticeable choice:

**Content is in Hinglish (Roman-script Hindi/English), unlike every other
page on the site.** This isn't a mistake or leftover placeholder — the
source doc is explicit that this register is deliberate for this specific
page, and the doc is marked "copy-paste ready," so the 25 Q&A were used
verbatim rather than translated to match the rest of the site's English
copy.

Structure: hero, author box (fed live from the `doctors` table, same as
the blog and the other STEP7/9 pages), a client-side search box
(`FaqSearch`) that filters all 25 questions across the 4 categories by
substring match on both question and answer text, medical disclaimer,
final CTA. `FAQPage` JSON-LD covers all 25 questions in one block.

Two corrections applied to the source content:
- **Q11 (Migraine):** the exact same "permanently theek ho sakta hai"
  question already flagged as FLAG 9 in
  `dr-anavil-complete-legal-audit-2026-07-14.docx` — applied the audit's
  required "individual results vary" qualifier from the start.
- **Q25:** the source doc links to `/treatments/skin-diseases/psoriasis-
  treatment-jaipur/`, a sub-page that was never written (only the
  Vitiligo sub-page exists, from STEP7). Reworded to reference only the
  pages that actually exist rather than link to a 404.

Added `/faq/` to the Footer nav rather than the Header — the Header nav
is already at 6 items and the doc's own instruction gave a choice
("under About or as standalone link"), so Footer was the lower-friction
option.

## What's in this delivery — STEP 10: Doctors, Locations & Legal Pages

Eight pages from `dr-anavil-step10-remaining-pages-2026-07-12.docx`:

- `/our-doctors/` — parent listing with short cards for both doctors
- `/our-doctors/dr-tp-yadav/` and `/our-doctors/dr-anavil-yadav/` — one
  dynamic route (`app/our-doctors/[slug]/page.tsx`), not two static
  pages, since both reuse the exact same `Doctor` data and the existing
  `DoctorProfileSection` component built for the About page in STEP2.
  Only the page-specific extras that don't belong in the shared
  `doctors` table (a per-doctor patient testimonial, this page's own CTA
  labels) live in a new `lib/content/doctor-profiles-content.ts`. Each
  page emits that doctor's own full `Physician` JSON-LD via the existing
  `buildPhysicianSchemas()`.
- `/homeopathy-doctor-jaipur/` and `/homeopathy-clinic-jagatpura-jaipur/`
  — location pages. Address/phone/timings are **not** duplicated from
  the source doc's `[CEO to fill]` placeholders — they're fetched from
  `getClinicLocations()` (the same Supabase-backed source `/contact/`
  already uses, built in STEP3) and rendered with the existing
  `ClinicLocationCard`, so a pending address shows "To be confirmed"
  gracefully instead of a fabricated one, and updating it once in
  Supabase updates every page that shows it.
- `/privacy-policy/`, `/terms-of-use/`, `/medical-disclaimer/` — full
  legal text, DPDPA 2023 / IT Act 2000 / Drug & Magic Remedies Act 1954
  compliant per the source doc. The `[clinic email]` placeholder resolves
  from `siteConfig.email` at render time (falls back to "email to be
  confirmed") rather than being baked into the static text.

**Fixed Footer's `/terms` → `/terms-of-use`** to match GIOS_P2's canonical
URL (Footer already linked here before this page existed; it just 404'd).
Also upgraded the Footer's plain-text "Main Branch, Jaipur" / "Jagatpura
Branch, Jaipur" location labels into real links now that those pages exist.

**Real gap found and fixed while building this:** `getDoctors()` /
`getDoctorBySlug()` had no local seed fallback (unlike every other
Supabase-backed data source on this site — diseases, testimonials, blog
posts, disease pages all have one). This meant `/about/` silently
rendered without its doctor sections, and a dedicated doctor page like
`/our-doctors/dr-tp-yadav/` would 404 outright, whenever Supabase isn't
yet connected — a real launch risk if the site goes live before Supabase
is migrated. Added `lib/content/doctors-seed.ts`, mirroring
`supabase/seed/doctors_seed.sql` exactly (same STEP2-approved content,
not invented), and wired both query functions to fall back to it —
matching the architecture every other content type already uses.

**Bug found and fixed:** the `getInitials()` helper (added in STEP6, used
for the no-photo-yet avatar placeholder) produced "Y" for "Dr T P Yadav"
instead of "TY" — the `length > 1` filter meant to drop the "Dr" honorific
also dropped the legitimate single-letter name parts "T" and "P". Rewrote
it to take first-initial + last-initial after removing honorifics,
regardless of how many single-letter parts sit in between.

## What's in this delivery — STEP 11: 3 New Disease Pages + Expansion Pass

The final step, from `dr-anavil-step11-disease-gap-analysis-new-pages-2026-07-13.docx`
— a gap analysis of 143 conditions against the 14 existing pages. This doc
has two genuinely different kinds of content, treated differently:

**3 fully-written new pages** (Sections 4-6 of the doc gave complete
hero/conditions/FAQ/disclaimer content, same depth as every other disease
page) — added to the same `DISEASE_PAGE_SEED` array and rendered by the
existing `app/[slug]/page.tsx` template, no new page files needed:

- `/joint-bone-diseases/` — RA, Ankylosing Spondylitis, Avascular
  Necrosis, Slipped Disc, Gout, Osteoarthritis and more
- `/heart-cardiac-support/` — Hypertension, ASD, VSD, Cardiomyopathy,
  Eisenmenger's Syndrome, as supportive/adjunctive care alongside
  cardiology. Carries the doc's mandatory prominent disclaimer verbatim
  ("supportive and adjunctive only... does not replace cardiology care").
- `/sexual-health/` — Loss of Libido, Genital Herpes, Genital Warts,
  Syphilis, Gonorrhea, Chlamydia. Per the doc's explicit instruction
  ("quiet placement... footer link only... internal link from Men's
  Health page only"), this slug is **deliberately not** in
  `lib/data/diseases.ts` or the `diseases` Supabase table, so it never
  appears on the homepage's Conditions grid or main nav — verified via
  direct DOM inspection that it's absent from the `#conditions` grid
  while still reachable from the Footer and a single new link on
  `/mens-health/`.

None of the 3 new pages has a patient testimonial — the source doc
doesn't provide one for these, and inventing one would be a fabricated
testimonial (a hard compliance line per GIOS_P7 §8/9). Made
`patientStory` optional on `DiseasePageContent` and the `[slug]` page
now renders `PatientStoryCard` conditionally, rather than shipping a
fake quote to satisfy a previously-required field.

**Expansion pass on 10 existing pages** (Section 7 of the doc) — this
section is materially different from Sections 4-6: it's a bare table of
condition names (mostly Hindi one-line glosses), not full copy-paste-
ready prose. Writing new "why this happens" sections, timelines and
FAQs for ~40 conditions from a two-word gloss would mean authoring new
clinical content nobody approved. Scoped this down to exactly what the
doc actually provides: each missing condition was added to its page's
existing `conditions` bullet list only, with a short factual one-line
description (textbook-level — what the condition is — never a treatment-
outcome claim), matching the register already used for that page's other
list entries. No new sections, timelines, or FAQs were invented.
Several conditions the doc asked for were already present under a
different name (e.g. Nephrotic Syndrome and Glomerulonephritis were
already on the Kidney page, Parkinson's and Panic Disorder were already
listed) — only genuinely missing conditions were added, page by page:
Skin (+2), Cancer (+10, all phrased "supportive care" per the doc's
explicit legal note), Kidney (+3), Nervous System (+10), Women's Health
(+3), Men's Health (+2), Respiratory (+2), Digestive (+2), Hormonal (+4),
Mental Health (+3, framed consistently with that page's own established
"severe conditions need psychiatric care" stance).

`supabase/schema.sql` updated: `disease_pages` regenerated via the
existing `scripts/gen-disease-pages-sql.ts` (now 17 rows), and the
`diseases` table (a separate table backing the homepage grid) got two
new rows for Joint & Bone and Cardiac — not Sexual Health, matching its
quiet-placement requirement.

## What's in this delivery — Phase 1: GIOS audit fixes + tracker/sitemap gap closure

STEP 1-11 completed the foundational build. This pass reads every remaining
GIOS package (`GIOS_FinalAudit_Stage1Complete`, `GIOS_P1` GBP, `GIOS_P2`
SEO+Schema+WordPress, `GIOS_P4` GEO/AI Search, `GIOS_P5` Patient Conversion
OS, `GIOS_P6` Automation, `GIOS_P7` Governance), the homepage/content
trackers, the TKOS spreadsheet, and the 38-page sitemap master doc, then
implements every item that is (a) genuinely missing from the live Next.js
site and (b) buildable in code without external accounts/credentials/photos
this sandbox doesn't have.

**SEO/technical:**
- `app/robots.ts` + `app/sitemap.ts` — previously missing entirely. Explicitly
  allows AI crawlers (GPTBot, Google-Extended, PerplexityBot, ClaudeBot) per
  the Final Audit's "AI Crawler Audit" section. Sitemap covers all 43 routes.
- Fixed a real bug: the homepage's JSON-LD schemas were injected via
  `next/script`'s `<Script>` component, which defers to client-side and
  never appears in the server-rendered HTML crawlers fetch — exactly the gap
  already flagged in a comment in `app/[slug]/page.tsx` but never fixed on
  the homepage itself. Converted to plain `<script>` tags, matching the
  pattern already used on disease pages.
- Added `openingHoursSpecification` to the clinic JSON-LD schema (was
  entirely absent) and a `SpeakableSpecification` schema + matching CSS
  hooks (`clinic-intro`, `hero-text`, `why-choose-us`) on the homepage for
  voice search, per `GIOS_P4` GEO Layer 5.

**E-E-A-T / GEO (GIOS_P4, Final Audit RF-06/RF-15):**
- Every disease page (all 17 + the 4 sub-pages) now has an author box
  **near the top**, not just the bottom — this was completely absent on
  disease pages before this pass (only blog/FAQ/online-consultation had
  one). Includes a "Medically reviewed by Dr T P Yadav" line.
- Header now shows clinic hours + click-to-call phone in a slim top bar on
  desktop, visible on every page (contact info was previously footer-only).
- New page `/homeopathy-faq/` — the 50-question AI-citation FAQ database
  from `GIOS_P4` Layer 3, transcribed verbatim (content was already fully
  written in the source doc). Distinct from the existing 25-question
  Hinglish `/faq/` page; each links to the other.

**Conversion (GIOS_P5):**
- Exit-intent popup (desktop, fires once per tab session) with a WhatsApp CTA.
- Structured "Conventional Medicine vs Classical Homeopathy" comparison
  tables added to the 5 highest-traffic disease pages (Skin, Autism, Kidney,
  Autoimmune, Women's Health) per the Final Audit's "VALIDATED — implement
  immediately" recommendation.
- Testimonial disclaimer (already present on the homepage and Patient
  Stories page) added to the per-disease-page `PatientStoryCard` too, so
  it's consistent everywhere a patient quote appears.
- GA4 event-tracking scaffold (`lib/analytics.ts`, `GoogleAnalytics.tsx`) —
  entirely inert until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, matching the
  Supabase env-var pattern. `phone_click`/`whatsapp_click` events wired into
  the header, sticky mobile bar and floating WhatsApp button.

**Internal linking (GIOS_P2 Section 3 + sitemap doc):**
- "Related Conditions" cross-links added between the doc-specified pairs
  (Skin ↔ Autoimmune, Autism ↔ Children's Health, Kidney ↔ Hormonal,
  Women's Health ↔ Hormonal, Nervous System ↔ Children's Health).
- New disease sub-pages, mirroring the existing Vitiligo sub-page: Psoriasis
  (under Skin Diseases), Cerebral Palsy (under Nervous System Disorders),
  Down Syndrome (under Genetic & Rare Diseases) — called for explicitly in
  the sitemap master doc's page tree. Parent pages now link down to these;
  each sub-page links back up. `patientStory` made optional on
  `DiseaseSubPageContent` (mirroring the STEP11 fix to `DiseasePageContent`)
  — Psoriasis and Cerebral Palsy omit it rather than inventing one; Down
  Syndrome reuses the real, already-approved testimonial from the parent
  Genetic & Rare Diseases page, since it's specifically about that condition.

**Copy fixes:** stale "14 specialities"/"View All 14" references (site now
has 16 nav-visible categories) corrected in `site-config.ts`, `Footer.tsx`
and `ConditionsGrid.tsx`.

### Explicitly out of scope for this pass — needs real data/accounts first

These are called for across the GIOS docs but require something only Dr
Anavil/the clinic can provide, so nothing was faked or stubbed in a
misleading way:
- **Google Reviews widget (Elfsight), real Google star rating** — no GBP
  account/API access from this sandbox.
- **Razorpay payment buttons, "advance-only" package gating** — needs a live
  Razorpay account and API keys; out of scope for an agent to set up.
- **Gallery page, real clinic/doctor photography, YouTube intro video** —
  the sitemap doc calls for a `/gallery/` page and several photo assets;
  none exist yet, and a photo gallery with no photos would look worse than
  not having one.
- **GBP ↔ website UTM link map, Practo/Lybrate/JustDial/LinkedIn profiles,
  WhatsApp Business API templates** — all external platform work (GIOS_P1,
  P4 Layer 4, P6), not website code.
- **Header ticker vs static bar (Options A/B/C in the sitemap doc)** — the
  doc's own author recommends the static bar (Option A) as the better fit
  for "classical/premium" positioning over a scrolling ticker; implemented
  that recommendation rather than building all three and asking you to pick.
- **Jagatpura branch hours, exact street address, PIN, lat/long, UPI ID,
  social handles, Google rating/review count** — still env-var-gated
  placeholders per the existing pattern; fill in via Vercel env vars
  whenever confirmed.

## What's in this delivery — Razorpay checkout + self-service pricing

The Appointment page's fees were previously hardcoded numbers with a
static "WhatsApp us" CTA. Dr Anavil asked for pricing he can change
himself at any time (including running seasonal discounts) plus a real
online payment option, so this pass makes both possible.

**Pricing is now fully self-service (once Supabase is connected):**
- `pricing_plans` table gained `original_price_inr` (show a "was ₹X"
  strikethrough), `badge` (e.g. "Festive Offer — 20% Off"), `is_active`
  (hide a plan without deleting it), and `sort_order` — all editable
  directly in the Supabase table editor, no code change or redeploy.
- The `code` column's old 4-value CHECK constraint is gone — you can add
  entirely new plans/packages (e.g. a 3-month package) as new rows.
- Until Supabase is connected, prices come from `lib/data/appointment.ts`'s
  `FALLBACK_PRICING` — tell me new numbers any time and I'll update it.

**Razorpay checkout** — built, but inert until you provide keys (same
pattern as GA4/Supabase — nothing breaks with them unset, the page just
keeps showing the WhatsApp booking flow it has today):
- Uses Razorpay's **Orders API** (dynamic amount per request), not their
  static Payment Buttons — this is what lets a price change in Supabase
  reach checkout immediately with no code change.
- The amount charged is always looked up server-side from the live plan
  record (`app/api/razorpay/create-order/route.ts`) — never trusts a
  number the browser sends, so a tampered request can't pay less than
  the real price.
- Payment signature is verified server-side (`app/api/razorpay/verify/route.ts`,
  HMAC SHA256, constant-time comparison) before the patient is sent to
  `/booking-confirmed/` — a real payment, not just a client-side callback.
- `/booking-confirmed/` is a soft-gated page (not in nav, footer, or
  sitemap.xml, `noindex`) — reachable only via a completed payment,
  matching the pattern the sitemap master doc specified for this.

**What you need to do:**
1. Create a Razorpay account, complete KYC, generate API keys (Test Mode
   first). Add `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in
   Vercel → Project Settings → Environment Variables.
2. Decide final pricing (or keep it flexible/promotional — that's exactly
   what `original_price_inr` + `badge` are for).
3. **Alerts:** per your choice, no custom notification code was built —
   Razorpay's own dashboard sends SMS/email for every payment automatically,
   and their mobile app shows live payments. Turn this on in Razorpay
   Dashboard → Settings → Notifications once your account exists. Patient
   name/phone are attached to every order's `notes` field specifically so
   those native alerts show who paid, not just an amount.
4. Test in Test Mode end-to-end before flipping to Live keys.

## Verified

- `npm run build` -- clean. Homepage + all 17 disease pages (STEP4 +
  STEP5 + STEP11) + 5 blog posts + `/online-consultation/`,
  `/patient-stories/`, `/faq/`, the vitiligo sub-page, both doctor
  profile pages, both location pages, and all 3 legal pages all
  prerendered as static HTML
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
- STEP9 FAQ page checked in-browser: search box verified working via
  direct DOM interaction (searching "vitiligo" correctly narrows to the 3
  matching questions across categories and hides empty categories);
  `FAQPage` JSON-LD confirmed to contain all 25 questions
- STEP10 pages checked in-browser: both doctor profile pages render full
  bios/specialisations/testimonials with correct "TY" / "AY" initials
  (post-fix); both location pages show graceful "To be confirmed" states
  for pending address/timings; all 3 legal pages render with correct
  section/bullet structure and the `[clinic email]` placeholder resolving
  correctly; fixed a title-duplication bug on all 3 legal pages
  (`content.title` already includes "— Yadav Homeo Clinic", so appending
  `siteConfig.name` again produced a doubled title)
- STEP11 pages checked in-browser: Cardiac page's mandatory disclaimer
  confirmed prominent (rendered immediately after the hero, not buried at
  the bottom); Joint & Cardiac pages render with no patient-story section
  (confirmed no fabricated testimonial slipped in); confirmed via direct
  DOM query that `/sexual-health/` is genuinely absent from the
  homepage's `#conditions` grid (16 cards, not 17) while still reachable
  from the Footer and the new Men's Health page link; all 17 disease
  pages build and prerender correctly after the Section 7 condition-list
  expansions

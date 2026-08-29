import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Skin Diseases, mirroring the Vitiligo sub-page pattern —
 * per yhc-complete-sitemap-and-page-designs-2026-07-23.html Section 2
 * (sitemap tree lists Psoriasis as a dedicated sub-page under Skin
 * Diseases). No patientStory: no doc-approved, condition-specific
 * testimonial exists for psoriasis specifically (the existing skin-
 * diseases page testimonial is about vitiligo) — omitted rather than
 * invented, per the same discipline applied in STEP11.
 *
 * Expanded from the original 4-section version with a realistic
 * month-by-month timeline, "Types of Psoriasis We Treat", a "Why Yadav
 * Homeo Clinic" section, and 2 more FAQs (including a factual, safe
 * "is it contagious" question).
 */
export const PSORIASIS_PAGE: DiseaseSubPageContent = {
  slug: "psoriasis-treatment-jaipur",
  parentSlug: "skin-diseases",
  parentLabel: "Skin Diseases",
  pageTitle: "Psoriasis Treatment in Jaipur | Homeopathy Without Steroids | Yadav Homeo Clinic",
  metaDescription:
    "Homeopathic psoriasis treatment at Yadav Homeo Clinic Jaipur — constitutional approach, no steroid dependency. Plaque, guttate, scalp and nail psoriasis. 30+ years experience.",
  focusKeyword: "psoriasis treatment Jaipur",
  secondaryKeywords: [
    "psoriasis homeopathy treatment Jaipur",
    "homeopathy for psoriasis without steroids",
    "scalp psoriasis homeopathy",
    "plaque psoriasis treatment Jaipur",
  ],
  hero: {
    headline: "Psoriasis Keeps Returning Because the Cream Only Treats the Surface.",
    subheadline:
      "Steroid creams, tar preparations, phototherapy — most psoriasis patients have tried several before they ever consider homeopathy. Each brings temporary relief, and each flare returns when treatment stops. That pattern exists because psoriasis is driven by an overactive immune response, not a skin defect. Constitutional homeopathic treatment at Yadav Homeo Clinic addresses that immune activity directly.",
    trustLine:
      "30+ Years Treating Chronic Skin Disease | Constitutional — No Steroid Dependency | Online Consultation Available",
  },
  sections: [
    {
      heading: "Why Psoriasis Keeps Coming Back",
      paragraphs: [
        "Psoriasis is an autoimmune condition in which the immune system drives skin cells to multiply far faster than normal, producing the thick, silvery-scaled plaques most patients recognise. Topical steroids and tar preparations reduce the visible plaque by suppressing local inflammation, but they do not correct the immune signalling causing the overproduction in the first place — which is why flares return, often in the same or new locations, once the cream is reduced or stopped.",
        "Constitutional homeopathic treatment works at the level of that immune dysregulation. By identifying the individual patient's specific pattern — triggers, stress response, constitutional type, family history — the correctly chosen remedy aims to correct the underlying overactivity rather than repeatedly suppressing its surface expression.",
      ],
    },
    {
      heading: "What We Realistically Expect — No Exaggeration",
      paragraphs: [
        "In our clinical experience at Yadav Homeo Clinic, patients who complete 12 to 18 months of constitutional treatment for psoriasis commonly see: a reduction in the frequency and severity of flares, thinning and fading of existing plaques, and — in a number of cases — prolonged remission lasting years without recurrence.",
        "You do not need to stop your current steroid cream, biologic, or phototherapy schedule to begin. Homeopathic treatment is started alongside your existing care, and conventional treatment is tapered gradually as improvement occurs — always under your dermatologist's guidance, never abruptly.",
      ],
      note: "Individual results vary based on disease duration, extent of involvement, type of psoriasis and constitutional factors. We give an honest, case-specific assessment at the first consultation rather than a general promise.",
    },
    {
      heading: "Psoriasis Treatment Timeline: What to Expect Month by Month",
      subsections: [
        {
          label: "Months 1–3",
          paragraphs: [
            "Constitutional assessment and first prescription. Most patients notice reduced itching and slightly less frequent flare-ups within this window — often the first sign that the underlying immune overactivity is responding.",
          ],
        },
        {
          label: "Months 3–6",
          paragraphs: [
            "Existing plaques typically begin to thin and flatten. Scaling reduces. Many patients start tapering their topical steroid use during this period, always gradually and with their dermatologist's agreement.",
          ],
        },
        {
          label: "Months 6–12",
          paragraphs: [
            "Flare frequency continues to drop for responding patients. Scalp and nail involvement — usually the slowest areas to respond — start showing visible improvement. Prescription may be adjusted based on the response pattern seen so far.",
          ],
        },
        {
          label: "Months 12–18",
          paragraphs: [
            "For patients who have responded well, this is where prolonged remission is most commonly seen. For more extensive or long-standing psoriasis, treatment continues with the same constitutional approach, adjusted as needed.",
          ],
        },
      ],
      note: "Timelines are based on our clinical experience at Yadav Homeo Clinic and are not a guarantee for every individual. Response speed depends on disease duration, extent of body surface involved, type of psoriasis and how consistently treatment is followed.",
    },
    {
      heading: "Types of Psoriasis We Treat",
      list: [
        "Plaque Psoriasis — the most common form, thick raised patches with silvery scale, typically on elbows, knees and scalp",
        "Guttate Psoriasis — small drop-shaped lesions, often triggered by a preceding throat infection",
        "Scalp Psoriasis — thick scaling at the hairline and scalp, often mistaken for severe dandruff",
        "Nail Psoriasis — pitting, thickening and discolouration of the nails, frequently alongside skin involvement",
        "Inverse Psoriasis — smooth, red patches in skin folds (armpits, groin), without the typical scale",
        "Psoriatic Arthritis — joint involvement alongside skin psoriasis, requiring coordinated care with a rheumatologist",
      ],
    },
    {
      heading: "Why Yadav Homeo Clinic for Psoriasis",
      paragraphs: [
        "Chronic skin disease has been the deepest part of our clinical practice since 1991. Psoriasis patients arrive here after years of managing flares with topical treatment alone, looking for an approach that addresses why the flares keep happening rather than only what to put on them when they do.",
        "The constitutional remedy is never chosen from the diagnosis alone — it is chosen from the complete picture of the individual patient, which is why two psoriasis patients at our clinic will often be prescribed two entirely different remedies. This individualisation is what classical homeopathy offers that a standard topical protocol cannot.",
        "Dr Anavil Yadav now sees the majority of psoriasis cases at the clinic, working from the same constitutional framework his father built — informed, additionally, by his engagement with current understanding of autoimmune skin disease.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is psoriasis contagious?",
      answer:
        "No. Psoriasis is an autoimmune condition, not an infection — it cannot spread from person to person through touch, shared clothing, water, or any other form of contact. It is entirely safe to be around someone with psoriasis.",
    },
    {
      question: "Can homeopathy cure psoriasis permanently?",
      answer:
        "Psoriasis is a chronic autoimmune condition and cannot be guaranteed to be permanently eliminated in every case. In our clinical experience, a meaningful number of patients who complete 12–18 months of constitutional treatment achieve prolonged remission — sometimes years without recurrence. Outcomes vary by individual and we give an honest assessment at the first consultation rather than a blanket promise.",
    },
    {
      question: "Do I need to stop my steroid cream or biologic before starting homeopathy?",
      answer:
        "No. Continue your current treatment. Homeopathy is started alongside it, and any tapering of topical or systemic treatment is done gradually as your condition improves, in coordination with your dermatologist — never abruptly and never on your own decision.",
    },
    {
      question: "How long does psoriasis treatment take to show results?",
      answer:
        "Most patients notice a reduction in flare frequency and itching within the first 3–4 months. Visible thinning of plaques typically follows over 6–12 months. Prolonged remission, where seen, generally requires a full 12–18 month course of constitutional treatment.",
    },
    {
      question: "Is online consultation effective for psoriasis?",
      answer:
        "Yes. We assess psoriasis cases online using clear photographs of the affected areas in natural daylight alongside a detailed case history. Constitutional prescribing depends on the whole-person picture, which can be gathered accurately through a thorough online consultation.",
    },
    {
      question: "Can psoriatic arthritis be treated alongside skin psoriasis?",
      answer:
        "Yes, but joint involvement requires coordinated care with your rheumatologist. Constitutional homeopathic treatment is used alongside — never instead of — DMARDs or biologics prescribed for psoriatic arthritis. Any change to that medication must be made by your specialist.",
    },
  ],
  finalCta: "If Your Psoriasis Keeps Returning — Let's Address Why. Book Your Consultation.",
  disclaimer:
    "This page provides general information about how classical homeopathy may support psoriasis treatment. Individual results vary and are not guaranteed. It is not a substitute for professional dermatological diagnosis or ongoing specialist care — always continue prescribed treatment and consult your treating dermatologist before making any changes.",
  aboutCondition: {
    name: "Psoriasis",
    alternateNames: ["Plaque Psoriasis", "Psoriatic Disease"],
    description:
      "A chronic autoimmune skin condition causing rapid skin cell overproduction and thick, scaled plaques, treated here with constitutional homeopathic treatment addressing the underlying immune dysregulation.",
  },
};

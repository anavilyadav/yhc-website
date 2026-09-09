import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Skin Diseases, mirroring the Vitiligo/Psoriasis sub-page
 * pattern. No patientStory: no doc-approved, condition-specific
 * testimonial exists for eczema specifically (the existing skin-diseases
 * page testimonial is about vitiligo) — omitted rather than invented, per
 * the same discipline applied to the Psoriasis sub-page.
 */
export const ECZEMA_PAGE: DiseaseSubPageContent = {
  slug: "eczema-treatment-jaipur",
  parentSlug: "skin-diseases",
  parentLabel: "Skin Diseases",
  pageTitle: "Eczema Treatment in Jaipur | Homeopathy for Atopic Dermatitis | Yadav Homeo Clinic",
  metaDescription:
    "Homeopathic eczema treatment at Yadav Homeo Clinic Jaipur — constitutional approach addressing the immune hypersensitivity behind eczema, not just the itch. 30+ years experience.",
  focusKeyword: "eczema treatment Jaipur",
  secondaryKeywords: [
    "eczema homeopathy Jaipur",
    "atopic dermatitis treatment homeopathy",
    "homeopathy for eczema without steroids",
    "childhood eczema treatment Jaipur",
  ],
  hero: {
    headline: "Eczema Comes Back Every Season Because the Cream Only Calms the Itch.",
    subheadline:
      "Moisturisers and steroid creams bring real relief — but for most patients the dryness, redness and itching return with the next change of weather, the next stressful week, or the next food trigger. That pattern exists because eczema is driven by an underlying immune hypersensitivity, not a defect in the skin itself. Constitutional homeopathic treatment at Yadav Homeo Clinic addresses that hypersensitivity directly.",
    trustLine: "30+ Years Treating Chronic Skin Disease | Constitutional — No Steroid Dependency | Online Consultation Available",
  },
  sections: [
    {
      heading: "Why Eczema Keeps Flaring Up",
      paragraphs: [
        "Eczema — atopic dermatitis — causes chronic itching, dryness and inflammation because the immune system reacts too strongly to ordinary triggers: weather changes, certain fabrics, soaps, stress, and in many patients, specific foods. Steroid creams and antihistamines calm this reaction from the outside, which is why they work quickly — and why the relief does not last once the underlying hypersensitivity remains untouched.",
        "Constitutional homeopathic treatment works at the level of that hypersensitivity itself. By identifying the individual patient's complete pattern — the specific triggers, the type and location of the flare, sleep disruption from itching, and the patient's overall constitutional picture — the correctly chosen remedy aims to reduce the immune system's tendency to over-react, rather than repeatedly suppressing the reaction after it starts.",
        "Many eczema patients also have a food-triggered component. Constitutional treatment addresses the underlying immune hypersensitivity that makes the skin react to food triggers in the first place — as the constitutional treatment works, many patients find that their food sensitivities reduce alongside the eczema itself, because both are expressions of the same underlying susceptibility.",
      ],
    },
    {
      heading: "What We Realistically Expect — No Exaggeration",
      paragraphs: [
        "In our clinical experience at Yadav Homeo Clinic, patients who complete 9 to 12 months of constitutional treatment for eczema commonly see: less frequent and less severe flares, improved skin texture between flares, reduced itching (especially the itching that disrupts sleep), and — in many cases — long stretches without needing steroid cream at all.",
        "You do not need to stop your current moisturiser or steroid cream to begin. Homeopathic treatment is started alongside your existing skincare routine, and topical treatment is reduced gradually as improvement occurs — never abruptly, and always at your own pace.",
      ],
      note: "Individual results vary based on disease duration, severity, known triggers and constitutional factors. We give an honest, case-specific assessment at the first consultation rather than a general promise.",
    },
    {
      heading: "Eczema Treatment Timeline: What to Expect Month by Month",
      subsections: [
        {
          label: "Months 1–2",
          paragraphs: [
            "Constitutional assessment and first prescription. Most patients notice no dramatic change yet — this is normal. Some notice slightly calmer skin between flares.",
          ],
        },
        {
          label: "Months 3–4",
          paragraphs: ["Itching typically starts to reduce and skin texture begins improving between flares."],
        },
        {
          label: "Months 5–8",
          paragraphs: [
            "Flares become less frequent and less severe for responding patients. Many notice they are reaching for the steroid cream less often.",
          ],
        },
        {
          label: "Months 9–12",
          paragraphs: [
            "Significant visible improvement in most responding cases — longer flare-free stretches and calmer baseline skin.",
          ],
        },
        {
          label: "Months 12+",
          paragraphs: [
            "Consolidation and prevention of relapse. Treatment is gradually tapered as the condition stabilises. Many patients remain largely flare-free for extended periods after completing treatment.",
          ],
        },
      ],
      note: "Timelines are based on our clinical experience at Yadav Homeo Clinic and are not a guarantee for every individual. Response speed depends on disease duration, severity, known triggers and how consistently treatment is followed.",
    },
    {
      heading: "Types of Eczema We Treat",
      list: [
        "Atopic Dermatitis — the most common form, often starting in childhood and linked with allergies or asthma in the family",
        "Contact Dermatitis — a reaction to a specific irritant or allergen, such as soaps, metals or fragrances",
        "Dyshidrotic Eczema — small, intensely itchy blisters on the hands and feet",
        "Nummular Eczema — coin-shaped, well-defined itchy patches, often on the arms and legs",
        "Seborrheic Dermatitis — flaking and redness on the scalp, face and other oily areas",
        "Stasis Dermatitis — eczema on the lower legs linked to poor circulation, common in older adults",
      ],
    },
    {
      heading: "Why Yadav Homeo Clinic for Eczema",
      paragraphs: [
        "Chronic skin disease has been the deepest part of our clinical practice since 1991. Eczema patients arrive here after years of managing flares with moisturisers and steroid creams alone, looking for an approach that addresses why the flares keep happening rather than only what to apply when they do.",
        "The constitutional remedy is never chosen from the diagnosis alone — it is chosen from the complete picture of the individual patient, including known triggers, family history of allergies or asthma, and how the skin behaves across seasons. This individualisation is what classical homeopathy offers that a standard moisturiser-and-steroid routine cannot.",
        "We treat eczema across all ages — from infants with their first flare-ups to adults managing decades-long atopic dermatitis — with the same constitutional framework Dr T P Yadav built over 30 years, now carried forward by Dr Anavil Yadav.",
      ],
    },
  ],
  faqs: [
    {
      question: "My eczema is triggered by food allergies. Can homeopathy help?",
      answer:
        "Yes. Constitutional homeopathic treatment addresses the underlying immune hypersensitivity that makes the skin react to food triggers. As the constitutional treatment works, many patients find that their food sensitivities reduce alongside the eczema itself — because both are expressions of the same underlying susceptibility.",
    },
    {
      question: "Can homeopathy cure eczema permanently?",
      answer:
        "Eczema is a chronic condition and cannot be guaranteed to be permanently eliminated in every case. In our clinical experience, many patients who complete 9–12 months of constitutional treatment see a lasting reduction in flare frequency and severity, with some remaining largely flare-free for extended periods. Outcomes vary by individual and we give an honest assessment at the first consultation rather than a blanket promise.",
    },
    {
      question: "Do I need to stop my moisturiser or steroid cream before starting homeopathy?",
      answer:
        "No. Continue your current skincare routine. Homeopathy is started alongside it, and any reduction in steroid cream use happens gradually as your condition improves — never abruptly and never on your own decision if you are also under a dermatologist's care.",
    },
    {
      question: "Is eczema hereditary? Can my child be treated too?",
      answer:
        "Eczema does tend to run in families, often alongside asthma and allergic rhinitis. Yes, we treat eczema in children, including infants — homeopathic medicines are gentle and commonly used for childhood skin conditions alongside a family's existing paediatric care.",
    },
    {
      question: "How long does eczema treatment take to show results?",
      answer:
        "Most patients notice improved skin texture and reduced itching within the first 3–4 months. Reduced flare frequency typically follows over 5–8 months. Longer flare-free stretches, where seen, generally build over a 9–12 month course of constitutional treatment.",
    },
    {
      question: "Is online consultation effective for eczema?",
      answer:
        "Yes. We assess eczema cases online using clear photographs of the affected areas in natural daylight alongside a detailed case history and trigger pattern. Constitutional prescribing depends on the whole-person picture, which can be gathered accurately through a thorough online consultation.",
    },
  ],
  finalCta: "If Your Eczema Keeps Returning — Let's Address Why. Book Your Consultation.",
  disclaimer:
    "This page provides general information about how classical homeopathy may support eczema treatment. Individual results vary and are not guaranteed. It is not a substitute for professional dermatological diagnosis or ongoing specialist care — always continue prescribed treatment and consult your treating dermatologist before making any changes.",
  aboutCondition: {
    name: "Eczema",
    alternateNames: ["Atopic Dermatitis"],
    description:
      "A chronic skin condition causing dryness, itching and inflammation due to immune hypersensitivity, treated here with constitutional homeopathic treatment addressing the underlying susceptibility.",
  },
};

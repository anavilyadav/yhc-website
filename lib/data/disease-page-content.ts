import type { DiseasePageContent } from "@/lib/types";

/**
 * Fallback seed for full disease/treatment page content — mirrors the
 * `disease_pages` table's initial seed (see supabase/schema.sql). Used only
 * when Supabase is unreachable or not yet configured, so these pages never
 * render broken/empty content and `npm run build` always works.
 *
 * Source: STEP4_Disease_Pages_Part1.docx (7 pages, Day 2-3 of developer
 * package). Hero for skin-diseases overridden by
 * dr-anavil-step8-hero-fixes-2026-07-12.docx (GREEN version) per developer
 * package master index Instruction 1 — the other 6 pages keep their
 * STEP4 hero since STEP8 only revised Skin Diseases, Children's Health and
 * Men's Health (the latter two are STEP5, not part of this batch).
 */
export const DISEASE_PAGE_SEED: DiseasePageContent[] = [
  // ============================================================
  // 1. SKIN DISEASES — hero from STEP8 (GREEN)
  // ============================================================
  {
    slug: "skin-diseases",
    pageTitle:
      "Homeopathy Treatment for Skin Diseases in Jaipur | Vitiligo, Psoriasis, Eczema | Yadav Homeo Clinic",
    metaDescription:
      "Best homeopathic treatment for vitiligo, psoriasis, eczema, urticaria & all chronic skin diseases in Jaipur. 30+ years experience. 1000+ skin patients treated. Book now.",
    focusKeyword: "homeopathy for vitiligo Jaipur",
    secondaryKeywords: [
      "psoriasis homeopathy treatment Jaipur",
      "eczema homeopathy Jaipur",
      "leucoderma treatment Jaipur",
      "vitiligo repigmentation homeopathy",
    ],
    hero: {
      headline:
        "You Have Tried Everything. Your Skin Still Has Not Healed. Here Is Why — and What Comes Next.",
      subheadline:
        "If you are reading this page, you have probably already tried steroid creams, antihistamines, PUVA therapy, or multiple doctors — and the vitiligo is still spreading, the psoriasis keeps returning, the eczema comes back every season. That pattern is not a failure of effort. It is a failure of approach. Chronic skin disease is not a skin problem — it is the body's immune system expressing something deeper. At Yadav Homeo Clinic, we have been treating the root of chronic skin conditions for over 30 years. Not the surface.",
      trustLine:
        "1000+ Skin Patients Treated | Vitiligo Specialist Since 1991 | Constitutional — No Steroid Dependency | Online Consultation Available",
    },
    conditionsIntro:
      "We treat all chronic and recurring skin conditions — with a particular track record in the most difficult cases:",
    conditions: [
      "Vitiligo (Leucoderma / Safed Daag) — white patches on skin due to melanocyte loss",
      "Psoriasis — plaque, guttate, inverse, scalp and nail psoriasis",
      "Eczema / Atopic Dermatitis — chronic itching, dryness and skin inflammation",
      "Urticaria (Hives) — acute and chronic, allergic and idiopathic",
      "Lichen Planus — purple flat-topped papules on skin and mucous membranes",
      "Acne — hormonal, cystic, persistent, adult acne",
      "Alopecia Areata — patchy hair and beard loss",
      "Pigmentation disorders — melasma, post-inflammatory hyperpigmentation",
      "Rosacea — persistent facial redness and flushing",
      "Chronic fungal infections — recurrent, resistant to antifungals",
      "Warts — common, plantar, flat",
      "Recurrent boils and skin infections",
    ],
    sections: [
      {
        heading:
          "Why Conventional Treatment Does Not Cure Chronic Skin Disease — and What Homeopathy Does Differently",
        paragraphs: [
          "If you have been living with vitiligo, psoriasis or eczema for months or years, you already know the conventional route: steroid creams, antihistamines, immunosuppressants, light therapy. These treatments manage symptoms — sometimes very effectively. But the moment treatment stops, the disease returns. Often worse than before.",
          "This happens because conventional medicine treats skin disease from outside-in. It targets the visible symptom — the inflamed patch, the white spot, the itching — without addressing why the skin is behaving this way in the first place.",
          "Classical homeopathy works from inside-out. Every chronic skin condition is, at its root, a systemic problem expressing itself through the skin. The skin is the body's largest organ — and what appears on it is almost always a reflection of something deeper. An overactive immune system. A constitutional susceptibility. A hormonal imbalance. An unresolved stress response. Homeopathy identifies and corrects that deeper imbalance. When it works — and in our experience, it works consistently when correctly prescribed — the skin heals not because we forced it to, but because the body's own intelligence was restored.",
          "This is why patients who have used steroid creams for years without lasting results often see genuinely different outcomes with constitutional homeopathic treatment. And why, once the treatment is complete, the improvement tends to be lasting — not dependent on continued medication.",
        ],
      },
      {
        heading: "Vitiligo — 30 Years of Clinical Experience, Hundreds of Cases Treated",
        paragraphs: [
          "Vitiligo — known in Hindi as safed daag or leucoderma — is the condition we are most frequently consulted for, and the one where our clinical track record is strongest. White patches appear when melanocytes — the cells that produce skin pigment — are destroyed by the immune system. The patches are painless but profoundly affect confidence, social life and mental health.",
          "Conventional dermatology offers PUVA light therapy, tacrolimus cream, steroid applications and skin grafting. These can produce results in certain cases — but they do not address why the immune system is attacking melanocytes. Constitutional homeopathy does.",
          "Honest answer based on 30 years of clinical practice: yes — in a significant proportion of cases, and particularly when treatment begins relatively early in the disease course.",
          "In our experience at Yadav Homeo Clinic, constitutional treatment for vitiligo consistently achieves three outcomes across different patients:",
        ],
        list: [
          "Halting of spread — stopping new patches from appearing. This is the most consistent outcome, seen in the majority of patients who complete a full course of treatment.",
          "Repigmentation — visible return of pigment to existing patches. Typically begins as small brown dots (pigment islands) inside the white area, which gradually coalesce and spread inward. Seen in approximately 40 to 60 percent of patients who complete 12+ months of treatment.",
          "Complete or near-complete clearance — seen in a smaller subset of patients, particularly those with early-stage vitiligo on the face and trunk. These cases are genuinely life-changing and some of the most rewarding in our practice.",
        ],
        note: "Cases with the best response: early stage (under 5 years), actively spreading patches, face and trunk involvement, younger patients with otherwise good health. Cases with more limited response: long-standing stable patches, tip-of-finger or lip involvement, patients with multiple other autoimmune conditions. We will give you an honest assessment of your specific case at the first consultation.",
      },
      {
        heading: "Psoriasis — Clearing the Skin Without Suppressing the Immune System",
        paragraphs: [
          "Psoriasis is one of the most distressing chronic skin conditions — not just physically, but psychologically. The thick, silvery plaques on the elbows, knees, scalp and body are visible to the world. Psoriatic arthritis, which affects up to 30 percent of psoriasis patients, adds joint pain and stiffness to the burden. Conventional treatment — methotrexate, biologics, UV therapy — can produce significant clearing but typically requires lifelong continuation and comes with side effects that worry many patients.",
          "Constitutional homeopathic treatment for psoriasis works by addressing the immune dysregulation at the root of the condition — the overproduction of skin cells driven by an abnormal immune response. The individually selected remedy gradually quiets this dysregulation, allowing the skin to normalise without external suppression. Many of our psoriasis patients achieve prolonged remission — sometimes years without recurrence — after completing a proper course of treatment.",
        ],
      },
      {
        heading: "What to Expect — Skin Disease Treatment Timeline",
        subsections: [
          {
            label: "Month 1-2",
            paragraphs: [
              "Initial stabilisation. In most cases, existing lesions stop worsening. No new patches or plaques appear. Itching or burning may reduce. Some patients notice nothing in this period — this is normal and does not mean the treatment is not working.",
            ],
          },
          {
            label: "Month 3-4",
            paragraphs: [
              "First signs of improvement become visible. In vitiligo — pigment dots may begin to appear in patches. In psoriasis — plaques begin to thin. In eczema — itching reduces, skin texture improves.",
            ],
          },
          {
            label: "Month 5-8",
            paragraphs: [
              "Progressive improvement continues. Vitiligo patches show visible repigmentation. Psoriasis plaques reduce in area and thickness. Eczema flares become less frequent and less severe.",
            ],
          },
          {
            label: "Month 9-12",
            paragraphs: [
              "Significant visible improvement in most responding cases. Some patients see near-complete clearance of lesions by this stage.",
            ],
          },
          {
            label: "Month 12+",
            paragraphs: [
              "Consolidation and prevention of relapse. Treatment is gradually tapered as the condition stabilises. Many patients remain free of flares for extended periods after completing treatment.",
            ],
          },
        ],
        note: "Results vary by individual. Duration of disease, extent of involvement, and overall constitutional health all affect the treatment timeline. We set honest expectations at the first consultation.",
      },
    ],
    patientStory: {
      quote:
        "I had vitiligo spreading on my face and both hands for nearly 9 years. I had visited three dermatologists and two other homeopaths before coming to Dr Yadav. Nothing had stopped the spread. Within 4 months of starting treatment at Yadav Homeo Clinic, I noticed that no new patches were forming — for the first time in years. By the 8th month I could see small brown dots forming inside the patches on my cheek. By 14 months the facial patches are approximately 65 percent repigmented. My hands are showing slower progress but are improving. I wish I had come here first.",
      attribution: "Sunita Verma, 34, Delhi — Vitiligo patient, 14 months treatment",
    },
    faqs: [
      {
        question: "Can homeopathy permanently cure vitiligo?",
        answer:
          "In many cases — particularly early-stage vitiligo treated consistently for 12–18 months — lasting repigmentation is achievable. Many patients experience improvement that does not return after treatment ends. However, outcomes vary significantly and cannot be guaranteed for every individual.",
      },
      {
        question: "Do I need to stop using my steroid cream before starting homeopathy?",
        answer:
          "No. Never stop any prescribed treatment abruptly. You can continue using your topical creams alongside homeopathic treatment. As your condition improves, your skin will need the cream less frequently — and you can taper it gradually under our guidance. We work with your existing treatment, not against it.",
      },
      {
        question: "I have had psoriasis for 15 years and it covers large areas. Is it too late?",
        answer:
          "It is never too late to try. Long-standing or extensive psoriasis takes longer to respond and may not achieve complete clearance — but meaningful reduction in plaque area, thickness and associated symptoms is achievable in most cases with consistent constitutional treatment. Many patients who have suffered for years find significant improvement with proper homeopathic care.",
      },
      {
        question: "My eczema is triggered by food allergies. Can homeopathy help?",
        answer:
          "Yes. Constitutional homeopathic treatment addresses the underlying immune hypersensitivity that makes the skin react to food triggers. As the constitutional treatment works, many patients find that their food sensitivities reduce alongside the eczema itself — because both are expressions of the same underlying susceptibility.",
      },
    ],
    finalCta: "Ready to Begin Your Skin Healing Journey? Book a Consultation With Us Today →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support chronic skin disease care. Individual results vary and are not guaranteed. It is not a substitute for professional dermatological diagnosis or ongoing specialist care — always continue prescribed treatment and consult your treating doctor before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Vitiligo",
      alternateNames: ["Leucoderma", "Safed Daag"],
      description:
        "A chronic skin condition in which melanocytes are destroyed by the immune system, causing white patches on the skin. Also includes Psoriasis, Eczema, Urticaria and other chronic skin conditions treated at this clinic.",
    },
    isPublished: true,
  },

  // ============================================================
  // 2. AUTOIMMUNE DISEASES
  // ============================================================
  {
    slug: "autoimmune-diseases",
    pageTitle: "Homeopathy for Autoimmune Diseases in Jaipur | RA, Lupus, Thyroid | Yadav Homeo Clinic",
    metaDescription:
      "Constitutional homeopathic treatment for rheumatoid arthritis, lupus, Hashimoto's thyroiditis, scleroderma and all autoimmune diseases in Jaipur. 30+ years experience.",
    focusKeyword: "homeopathy for autoimmune diseases Jaipur",
    secondaryKeywords: [
      "rheumatoid arthritis homeopathy Jaipur",
      "lupus homeopathy treatment",
      "Hashimoto thyroid homeopathy",
      "autoimmune disease doctor Jaipur",
    ],
    hero: {
      headline: "When Your Body Turns Against Itself — Homeopathy Restores the Balance",
      subheadline:
        "Autoimmune diseases are among medicine's greatest challenges. The immune system — meant to protect you — begins attacking your own tissues. Conventional medicine suppresses this attack. Constitutional homeopathy works to understand why the attack began — and to correct it.",
    },
    conditionsIntro: "Autoimmune Conditions We Address",
    conditions: [
      "Rheumatoid Arthritis (RA) — joint inflammation, swelling, morning stiffness, joint deformity",
      "Systemic Lupus Erythematosus (SLE) — multi-system autoimmune disease",
      "Hashimoto's Thyroiditis — autoimmune hypothyroidism",
      "Graves' Disease — autoimmune hyperthyroidism",
      "Scleroderma / Systemic Sclerosis — skin thickening, internal organ involvement",
      "Ankylosing Spondylitis — spinal inflammation and fusion",
      "Sjögren's Syndrome — dry eyes, dry mouth, fatigue",
      "Psoriatic Arthritis — joint disease associated with psoriasis",
      "Polymyositis and Dermatomyositis",
      "Ulcerative Colitis and Crohn's Disease — autoimmune gut conditions",
      "Pemphigus Vulgaris — blistering skin autoimmune condition",
      "Primary Biliary Cirrhosis — autoimmune liver disease",
      "Autoimmune Haemolytic Anaemia",
    ],
    sections: [
      {
        heading: "What Is an Autoimmune Disease?",
        paragraphs: [
          "In a healthy immune system, white blood cells identify and destroy foreign invaders — bacteria, viruses, parasites. In an autoimmune condition, this system misfires. The immune system mistakes the body's own cells for foreign threats and attacks them. Which cells are attacked determines the diagnosis: joints become Rheumatoid Arthritis. The thyroid becomes Hashimoto's or Graves' disease. The skin and joints become Lupus. The spine becomes Ankylosing Spondylitis.",
          "Modern medicine does not fully understand what triggers this immune malfunction. Genetics, environmental factors, infections, stress and hormonal changes all appear to play a role. What is known is that once triggered, autoimmune conditions tend to be lifelong — managed with immunosuppressant drugs that control the inflammation but do not address the underlying immune dysregulation.",
          "This is where classical homeopathy offers something different. Rather than suppressing the immune response, homeopathic treatment aims to re-regulate it — to address the constitutional susceptibility that caused the immune system to malfunction. This is not a quick process. But in our experience at Yadav Homeo Clinic, it produces results that go beyond what immunosuppression alone can achieve.",
        ],
      },
      {
        heading: "How We Approach Autoimmune Cases at Yadav Homeo Clinic",
        paragraphs: [
          "Every autoimmune patient at our clinic receives a thorough constitutional analysis — one that goes far beyond the diagnosis and the inflammation markers. We look at the whole person: the pattern of their illness, what makes it better or worse, their emotional landscape, their response to stress, their constitutional type, their family history of immune conditions.",
          "The remedy selected from this analysis works on the whole system — not just the inflamed joint or the thyroid gland. This is why patients frequently report improvements not just in their primary autoimmune symptoms, but in their energy levels, sleep quality, mood and general wellbeing — all simultaneously. Because the remedy is working at the level of the whole person, not at the level of one organ or one symptom.",
        ],
        subsections: [
          {
            label: "On Continuing Your Existing Medicines",
            paragraphs: [
              "We always advise autoimmune patients to continue their prescribed DMARDs, biologics, steroids or thyroid medications without interruption. Homeopathy works alongside your existing treatment — never as a reason to stop it. As homeopathic treatment produces results, any reduction in conventional medications is done gradually, in full consultation with your rheumatologist or specialist. This process takes months to years — and safety is always the priority.",
            ],
          },
        ],
      },
      {
        heading: "Rheumatoid Arthritis — Beyond Joint Pain Management",
        paragraphs: [
          "RA is one of the most common autoimmune conditions we treat. Patients arrive with stiff, swollen, painful joints — especially in the morning. Many are on methotrexate, hydroxychloroquine or biologics. Their disease is being managed — but the fatigue, the side effects, and the knowledge that the disease is still progressing underneath take a toll.",
          "Constitutional homeopathic treatment for RA focuses on the immune system's overall dysregulation — not just the joint inflammation. Correctly prescribed remedies have produced meaningful reductions in morning stiffness and joint pain, lowering of inflammatory markers like CRP and ESR, and in some cases, the ability to reduce conventional medication doses under specialist supervision. Results are gradual — but they are real, measurable, and confirmed in blood tests.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I had Rheumatoid Arthritis for 6 years and was on methotrexate and steroids. My ESR was consistently above 90 and I had morning stiffness for 2 to 3 hours every day. After 10 months of constitutional treatment with Dr Yadav alongside my rheumatologist's care, my ESR came down to 34 and morning stiffness is now 20 to 30 minutes. My rheumatologist has reduced my methotrexate dose. I have more energy than I have had in years.",
      attribution: "Meena Agarwal, 48, Jaipur — RA patient, 10 months treatment",
    },
    faqs: [
      {
        question: "Can I take homeopathy alongside my rheumatologist's treatment?",
        answer:
          "Yes. This is the recommended approach. Never stop prescribed immunosuppressants or DMARDs. Homeopathy works as a complementary treatment — improving the immune system's regulation while your conventional treatment manages acute inflammation. The two work together, not against each other.",
      },
      {
        question: "How do we know if homeopathy is working for an autoimmune condition?",
        answer:
          "We measure progress objectively — through blood tests. CRP, ESR, ANA titres, thyroid antibodies, and specific autoantibodies are monitored at regular intervals. A genuine homeopathic response shows up in improving lab values alongside improving symptoms — not just in subjective feeling better.",
      },
      {
        question: "My Lupus (SLE) is severe — can homeopathy help?",
        answer:
          "For severe, multi-system SLE with significant organ involvement, homeopathy plays a supportive role alongside specialist rheumatological care — it is not a standalone treatment. For mild to moderate SLE or patients in remission, constitutional homeopathic treatment can meaningfully support immune regulation and quality of life.",
      },
    ],
    finalCta: "Book an Autoimmune Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support autoimmune disease care. Individual results vary and are not guaranteed. It is not a substitute for rheumatological or specialist diagnosis and treatment — always continue prescribed medication and consult your treating specialist before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Autoimmune Disease",
      alternateNames: ["Rheumatoid Arthritis", "Lupus", "Hashimoto's Thyroiditis"],
      description:
        "A group of conditions in which the immune system mistakenly attacks the body's own tissues, including Rheumatoid Arthritis, Lupus, Hashimoto's Thyroiditis and related conditions treated at this clinic.",
    },
    isPublished: true,
  },

  // ============================================================
  // 3. CANCER SUPPORT — prominent disclaimer
  // ============================================================
  {
    slug: "cancer",
    pageTitle:
      "Homeopathy for Cancer Support in Jaipur | Reduce Side Effects & Improve Immunity | Yadav Homeo Clinic",
    metaDescription:
      "Homeopathy as supportive care during and after cancer treatment. Reduce chemotherapy side effects, strengthen immunity and improve quality of life. Yadav Homeo Clinic, Jaipur.",
    focusKeyword: "homeopathy cancer support Jaipur",
    secondaryKeywords: [
      "homeopathy during chemotherapy",
      "cancer supportive therapy homeopathy India",
      "integrative cancer care Jaipur",
      "reduce chemo side effects naturally",
    ],
    hero: {
      headline: "Cancer Is the Battle. Homeopathy Is the Strength to Fight It.",
      subheadline:
        "Homeopathy does not claim to cure cancer. What it offers is something equally important during one of life's hardest journeys: stronger immunity, fewer side effects, better energy, and a body that is more capable of responding to the treatment it is receiving.",
    },
    conditionsIntro:
      "Homeopathic supportive care is offered alongside conventional oncology treatment for patients undergoing or recovering from:",
    conditions: [
      "All solid tumour cancers — undergoing surgery, chemotherapy or radiation",
      "Blood cancers (leukaemia, lymphoma) — supportive care alongside oncology treatment",
      "Post-treatment survivorship — recovery and long-term quality of life support",
    ],
    sections: [
      {
        heading: "An Honest Word About Homeopathy and Cancer",
        paragraphs: [
          "We must be completely clear about this: homeopathy is not a standalone treatment for cancer. Cancer is a serious, life-threatening condition that requires expert oncological care — surgery, chemotherapy, radiation therapy, targeted therapy or immunotherapy — prescribed and supervised by qualified oncologists.",
          "Any practitioner who claims to cure cancer with homeopathy alone is not being honest with you. Please never delay or substitute proven oncological treatment with any alternative therapy — including homeopathy.",
          "What homeopathy does offer — and what is increasingly recognised in the field of integrative oncology — is a genuinely valuable role as a supportive therapy, used alongside conventional cancer treatment. This is the role we play at Yadav Homeo Clinic. And within this role, the benefits to cancer patients can be significant and deeply meaningful.",
        ],
      },
      {
        heading: "What Homeopathy Can Do For Cancer Patients — Evidence From Our Practice",
        subsections: [
          {
            label: "During Chemotherapy and Radiation",
            list: [
              "Significantly reduces nausea, vomiting and appetite loss — some of the most debilitating chemotherapy side effects",
              "Reduces treatment-related fatigue — patients report better energy and ability to function during treatment cycles",
              "Manages mouth ulcers (mucositis) — a painful complication of chemotherapy and head-and-neck radiation",
              "Reduces skin reaction from radiation — dryness, redness, burning of irradiated skin",
              "Supports the immune system during a period of severe immunosuppression from chemotherapy",
              "Improves sleep quality and reduces treatment-related anxiety and depression",
              "Helps maintain appetite and body weight — critical for treatment tolerance and recovery",
            ],
          },
          {
            label: "After Cancer Treatment — Survivorship",
            list: [
              "Strengthens immunity during the vulnerable post-treatment recovery period",
              "Addresses post-chemotherapy peripheral neuropathy — numbness and tingling in hands and feet",
              "Manages post-treatment joint and muscle pain — common with hormone therapy for breast cancer",
              "Reduces cancer recurrence anxiety and improves mental resilience",
              "Improves energy levels and quality of life in the months and years after treatment",
              "Constitutional treatment to address the deeper systemic susceptibility — supporting long-term health",
            ],
          },
        ],
      },
      {
        heading: "How We Work With Cancer Patients at Yadav Homeo Clinic",
        paragraphs: [
          "We work in complete coordination with the patient's oncology team. We request details of the cancer type, stage, current treatment protocol and any ongoing medications. Our homeopathic prescribing is tailored to the specific treatment the patient is receiving — because the side effect profile differs significantly between, for example, taxane-based chemotherapy and platinum-based protocols.",
          "The constitutional remedy selected is based on the whole person — their vital force, their constitutional strength, their psychological response to the diagnosis and treatment, and their specific side effect burden. As treatment cycles change, the prescription is reviewed and adjusted.",
          "We never interfere with oncological treatment. We support it. Our role is to make the patient stronger, more resilient, and more capable of tolerating and completing their cancer treatment — and to support their recovery afterward.",
        ],
      },
    ],
    patientStory: {
      quote:
        "My mother was diagnosed with breast cancer in 2022 and underwent 6 cycles of chemotherapy. She had severe nausea, could not eat, and was losing weight rapidly. We started homeopathic treatment alongside her chemotherapy from cycle 3. By cycle 4, the nausea had reduced significantly and she was able to eat normal meals. She completed all 6 cycles without the hospitalisation her doctors had warned might be needed. Her oncologist noted that she tolerated the final cycles far better than the first two.",
      attribution: "Daughter of patient, Jaipur — Breast cancer, supportive homeopathic treatment during chemotherapy",
    },
    faqs: [
      {
        question: "Will homeopathic medicines interfere with my chemotherapy?",
        answer:
          "Homeopathic medicines are extremely dilute — they do not contain pharmacologically active molecules that could interact with chemotherapy drugs. They are considered safe to take alongside all standard oncological treatments. However, always inform your oncologist that you are using homeopathy. Transparency between all your healthcare providers is essential.",
      },
      {
        question: "Can homeopathy prevent cancer from coming back?",
        answer:
          "This cannot be guaranteed. What constitutional homeopathic treatment can do in the post-cancer period is strengthen immune function, improve overall systemic health, and address the constitutional factors that may have contributed to susceptibility — supporting the body's own cancer surveillance mechanisms over the long term. Many cancer survivors continue constitutional homeopathic treatment for years after completing cancer treatment for exactly this reason.",
      },
      {
        question: "My relative with cancer does not want chemotherapy. Can homeopathy be used instead?",
        answer:
          "We strongly advise against using any alternative therapy, including homeopathy, as a substitute for proven cancer treatment. This is a deeply difficult situation — and we understand the fear and hope that drives it. But delaying or refusing conventional oncological treatment in favour of homeopathy alone can be life-threatening. Our role is to support conventional treatment, not replace it.",
      },
    ],
    finalCta: "Speak to Us About Homeopathic Cancer Support →",
    disclaimer:
      "Homeopathy is not a cure for cancer and must never replace or delay conventional oncological treatment. It is offered here strictly as supportive care alongside — never instead of — surgery, chemotherapy, radiation or any treatment prescribed by your oncologist. Always keep your full care team informed of every treatment you are using.",
    disclaimerProminent: true,
    aboutCondition: {
      name: "Cancer (Supportive Care)",
      alternateNames: ["Oncology Supportive Therapy"],
      description:
        "Homeopathy offered as a supportive therapy alongside conventional oncological treatment, aimed at reducing treatment side effects and supporting immunity and quality of life — not a treatment for cancer itself.",
    },
    isPublished: true,
  },

  // ============================================================
  // 4. KIDNEY & RENAL DISEASES
  // ============================================================
  {
    slug: "renal-diseases",
    pageTitle: "Homeopathy for Kidney Disease & High Creatinine in Jaipur | CKD Treatment | Yadav Homeo Clinic",
    metaDescription:
      "Homeopathic treatment for CKD, high creatinine, nephrotic syndrome and renal diseases in Jaipur. Proven results in reducing creatinine. 30+ years experience. Book now.",
    focusKeyword: "homeopathy for kidney disease Jaipur",
    secondaryKeywords: [
      "high creatinine homeopathy treatment",
      "CKD homeopathy India",
      "reduce creatinine naturally",
      "avoid dialysis homeopathy",
      "nephrotic syndrome homeopathy Jaipur",
    ],
    hero: {
      headline: "High Creatinine. Dialysis Suggested. There May Still Be Another Path.",
      subheadline:
        "At Yadav Homeo Clinic, kidney disease is one of our most carefully managed specialities. We have seen creatinine levels fall significantly in patients where dialysis had been declared the next step. We make no promises — but we have results. And we share them honestly.",
    },
    conditionsIntro: "Kidney Conditions We Manage Homeopathically",
    conditions: [
      "Chronic Kidney Disease (CKD) — Stages 1 to 4",
      "High creatinine and elevated blood urea nitrogen (BUN)",
      "Nephrotic Syndrome — heavy protein in urine, oedema (swelling), low albumin",
      "Glomerulonephritis — acute and chronic inflammation of kidney filters",
      "IgA Nephropathy (Berger's Disease)",
      "Diabetic Nephropathy — kidney damage from long-standing diabetes",
      "Hypertensive Nephropathy — kidney damage from uncontrolled blood pressure",
      "Recurrent Urinary Tract Infections (UTIs) — particularly in women",
      "Kidney Stones — prevention of formation and recurrence, dissolution of small stones",
      "Interstitial Nephritis",
    ],
    sections: [
      {
        heading: "Why the Kidney Is Not the Only Problem — and Why This Matters",
        paragraphs: [
          "In classical homeopathic thinking, chronic kidney disease is rarely a disease of the kidney alone. The kidney's declining function is almost always the end result of a systemic process — years of uncontrolled diabetes, hypertension, chronic inflammation, autoimmune activity, or a constitutional vulnerability — that has been silently damaging renal tissue for a long time.",
          "Treating only the kidney while ignoring these systemic drivers is like mopping water from under a leaking pipe without sealing the leak. This is why conventional nephrology — which focuses primarily on managing creatinine and protecting remaining kidney function through diet and medication — rarely reverses CKD.",
          "Constitutional homeopathic treatment addresses the whole person and the whole disease. The diabetes control. The blood pressure pattern. The immune activity. The chronic inflammation. The constitutional susceptibility. When this comprehensive picture is treated with the precisely correct remedy, the kidney — still having functional tissue — sometimes responds by recovering function that was thought to be permanently lost.",
          "This is not magic. It is the result of removing the systemic burden that was suppressing the kidney's own regenerative capacity, while simultaneously supporting that capacity through the constitutional remedy.",
        ],
      },
      {
        heading: "What You Can Realistically Expect — Based on Our Clinical Experience",
        subsections: [
          {
            label: "CKD Stages 1 to 3 (creatinine typically under 3.5)",
            paragraphs: [
              "This is where homeopathic treatment has the strongest potential for measurable reversal. With consistent constitutional treatment and appropriate dietary changes, we regularly see stabilisation of creatinine and in many cases a genuine reduction over 6 to 12 months. Several patients in this range have brought their creatinine from borderline levels back into the normal range.",
            ],
          },
          {
            label: "CKD Stage 4 (creatinine 3.5 to 7)",
            paragraphs: [
              "Results are less predictable but meaningful improvement is still possible. The primary goal in this range is delaying dialysis — sometimes by years — while improving quality of life. Several patients with creatinine in the 5 to 7 range have had stable or improving creatinine for extended periods under our care.",
            ],
          },
          {
            label: "CKD Stage 5 / End Stage Renal Disease (creatinine above 7-8)",
            paragraphs: [
              "At this level, homeopathy's role is supportive and palliative — managing symptoms like fatigue, nausea, itching, and fluid retention, and maintaining quality of life. Reversing advanced end-stage disease is generally not achievable. We are honest about this at the first consultation.",
            ],
          },
          {
            label: "For Nephrotic Syndrome",
            paragraphs: [
              "Reduction in urinary protein and improvement in serum albumin has been documented in several of our nephrotic syndrome patients — particularly in children, who respond particularly well to constitutional treatment.",
            ],
          },
        ],
      },
      {
        heading: "Blood Tests We Track — Every 6 to 8 Weeks",
        list: [
          "Serum Creatinine — our primary marker of kidney function improvement",
          "Blood Urea Nitrogen (BUN) or Urea",
          "eGFR (Estimated Glomerular Filtration Rate)",
          "Serum Electrolytes — sodium, potassium, bicarbonate",
          "24-hour urine protein or spot urine protein-creatinine ratio",
          "Serum Albumin — especially in nephrotic syndrome",
          "Complete Blood Count — anaemia is common in CKD",
          "Blood Pressure readings — weekly at home",
        ],
        note: "We review your blood reports at every follow-up. Progress in kidney cases is always measured objectively — through numbers, not just symptoms. Bring your latest reports to every consultation.",
      },
    ],
    patientStory: {
      quote:
        "My father's creatinine was 6.8 in January 2023. Our nephrologist said dialysis was the next step and we should prepare for it. My aunt suggested Dr Yadav. We were not hopeful but we had nothing to lose. We started treatment in February. I shared reports every 6 weeks as instructed. By August — just 6 months later — creatinine had come down to 3.2. He has not started dialysis. He is eating, he is active. His nephrologist is surprised and monitoring him closely. We thank God every day.",
      attribution: "Ajay Sharma, 44, Jaipur — Son of CKD patient, Creatinine 6.8 → 3.2 in 6 months",
      note: "This patient's outcome may not be typical. Results vary based on kidney function at treatment start, underlying cause, and compliance with nephrologist's care.",
    },
    faqs: [
      {
        question: "Should I stop my nephrologist's medicines when starting homeopathy?",
        answer:
          "Never. Continue all prescribed medicines — antihypertensives, diuretics, phosphate binders, EPO injections — without interruption. Homeopathy works alongside your nephrology care. We coordinate with your nephrologist's treatment plan, not against it.",
      },
      {
        question: "What diet should I follow during homeopathic kidney treatment?",
        answer:
          "Follow your nephrologist's dietary guidelines strictly — these are critical for kidney patients. General principles: low protein, low sodium, low potassium (avoid bananas, oranges, potatoes in excess), low phosphorus (limit dairy and processed foods), adequate but not excessive fluid intake. We will provide specific dietary guidance based on your blood reports at the first consultation.",
      },
      {
        question: "How quickly can creatinine come down with homeopathy?",
        answer:
          "This varies significantly between individuals. In responsive cases, movement in creatinine levels can be seen from the 2nd or 3rd month of treatment. More significant changes typically become visible in 4 to 6 months. Not every case responds — and we will be transparent with you if we are not seeing the expected response at your 6-month review.",
      },
      {
        question: "Can homeopathy dissolve kidney stones?",
        answer:
          "For small kidney stones — typically under 6mm — constitutional homeopathic treatment can support the natural dissolution and passage of stones, and more importantly, can address the constitutional tendency to form stones in the first place, reducing recurrence. Larger stones causing obstruction require urological management.",
      },
    ],
    finalCta: "Share Your Reports With Us — Book a Kidney Consultation →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support kidney disease care. Individual results vary and are not guaranteed. It is not a substitute for nephrological diagnosis or ongoing specialist care — always continue prescribed medication, diet guidance and monitoring from your nephrologist.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Chronic Kidney Disease",
      alternateNames: ["High Creatinine", "CKD", "Nephrotic Syndrome"],
      description:
        "A long-term condition in which the kidneys gradually lose function, commonly linked to diabetes, hypertension or chronic inflammation. Includes Nephrotic Syndrome and related renal conditions treated at this clinic.",
    },
    isPublished: true,
  },

  // ============================================================
  // 5. GENETIC & RARE DISEASES
  // ============================================================
  {
    slug: "genetic-diseases",
    pageTitle: "Homeopathy for Genetic Diseases in Jaipur | Down Syndrome, Thalassemia | Yadav Homeo Clinic",
    metaDescription:
      "Homeopathic management of Down syndrome, thalassemia, haemophilia and genetic conditions in Jaipur. Quality of life improvement and constitutional support. 30+ years experience.",
    focusKeyword: "homeopathy for Down syndrome Jaipur",
    secondaryKeywords: [
      "thalassemia homeopathy treatment",
      "genetic disease homeopathy India",
      "Down syndrome homeopathy",
      "rare disease homeopathy Jaipur",
    ],
    hero: {
      headline: "For Families Told 'Nothing More Can Be Done' — We Offer What Conventional Medicine Cannot",
      subheadline:
        "Genetic diseases cannot be cured — the DNA cannot be rewritten. But the quality of life, the developmental potential, the immune resilience, and the daily functioning of patients with genetic conditions can be meaningfully improved through deep constitutional homeopathic treatment. This is what we offer. And this is what thousands of families have found here.",
    },
    conditionsIntro: "Genetic Conditions We Work With",
    conditions: [
      "Down Syndrome (Trisomy 21) — cognitive development support, immune strengthening, digestive function",
      "Thalassemia Major and Minor — quality of life improvement, immune support, reducing transfusion frequency in some cases",
      "Sickle Cell Disease — constitutional management, crisis prevention support",
      "Haemophilia A and B — supportive constitutional treatment, wound healing support",
      "Fragile X Syndrome — behavioural and developmental support",
      "Turner Syndrome — hormonal and developmental support",
      "Klinefelter Syndrome — hormonal and developmental constitutional support",
      "Marfan Syndrome — supportive constitutional care",
      "Neurofibromatosis — constitutional supportive management",
      "Other chromosomal abnormalities and rare syndromes — assessed individually",
    ],
    sections: [
      {
        heading: "Being Honest About What Homeopathy Can and Cannot Do",
        paragraphs: [
          "We believe in complete honesty with families of patients with genetic conditions — because they have already been through enough difficult conversations.",
          "Homeopathy cannot change DNA. It cannot remove the extra chromosome in Down syndrome or repair the haemoglobin gene in thalassemia. Any practitioner who claims this is not being truthful.",
          "What constitutional homeopathic treatment can do — and what we consistently observe at Yadav Homeo Clinic — is address the whole constitutional picture of the patient. This means improving immune function so the child is less susceptible to repeated infections. It means improving digestive function and appetite so nutrition is better absorbed. It means supporting neurological development so cognitive engagement and motor function improve. It means reducing the co-occurring conditions — anxiety, digestive issues, recurrent respiratory infections, sleep problems — that make genetic conditions harder to live with.",
          "The result is not a cured genetic condition. The result is a child or adult who is healthier, more engaged, more comfortable, and more able to reach their individual potential. For families, this is not a small thing. It is everything.",
        ],
      },
      {
        heading: "What Constitutional Treatment Does for Children With Down Syndrome",
        paragraphs: [
          "Down syndrome children often struggle with recurring ear and chest infections, digestive issues including constipation, thyroid problems, sleep disturbances, and the challenges of cognitive development. Each of these co-occurring conditions reduces the child's quality of life and limits their developmental potential.",
          "Constitutional homeopathic treatment for Down syndrome patients focuses on:",
        ],
        list: [
          "Strengthening immune function — reducing the frequency and severity of recurrent infections",
          "Improving digestive function — addressing constipation, bloating and nutritional absorption",
          "Supporting thyroid function — Down syndrome children have higher rates of hypothyroidism",
          "Improving sleep quality — which directly improves cognitive engagement and behaviour",
          "Supporting neurological development — many parents report improvements in alertness, eye contact, social engagement and communication",
        ],
        note: "Parents of Down syndrome children who come to us report, consistently, that their child is more alert, more engaged, more communicative, and more able to benefit from their educational and therapeutic interventions after a period of constitutional homeopathic treatment. We do not attribute this to miracle — we attribute it to the child being constitutionally healthier, which allows them to thrive.",
      },
      {
        heading: "Thalassemia — What Homeopathy Can Offer Alongside Transfusion Therapy",
        paragraphs: [
          "For Thalassemia Major patients who require regular blood transfusions, constitutional homeopathic treatment cannot substitute transfusion therapy — which is life-sustaining and must be continued. What we have observed in a number of thalassemia patients is: improved energy levels and quality of life between transfusions, improved immune function leading to fewer infections, and in some cases an increase in the interval between required transfusions — though this is not guaranteed and varies significantly between individuals.",
          "For Thalassemia Minor carriers — who may experience fatigue and mild anaemia — constitutional treatment can meaningfully improve energy, reduce symptom burden and support overall health.",
        ],
      },
    ],
    patientStory: {
      quote:
        "Our daughter has Down syndrome. She was having 8 to 10 chest infections and ear infections every year — almost constantly on antibiotics. She slept very poorly and had chronic constipation. After 8 months of Dr Yadav's treatment, her infections have reduced to 2 in the past year. Her constipation is resolved. She is sleeping through the night. Her school teacher has commented that she is more alert and engaged in class. We are continuing treatment and the improvement has been real and consistent.",
      attribution: "Parent of a 7-year-old girl with Down Syndrome, Jaipur",
    },
    faqs: [
      {
        question: "My child has Down syndrome. How long will treatment take?",
        answer:
          "Constitutional treatment for genetic conditions is a long-term commitment — typically 12 to 24 months before the full benefit is seen. Improvement is gradual and cumulative. The first signs — typically better sleep and fewer infections — are usually seen within 3 to 4 months.",
      },
      {
        question: "Can treatment be done online for a child with a genetic condition?",
        answer:
          "Yes. We conduct online consultations for children with genetic conditions. We take a very detailed history from parents — including pregnancy, birth, developmental milestones, current symptoms and behaviours. In most cases, an online consultation is as effective as an in-person visit for these cases.",
      },
      {
        question: "Do we need to stop conventional treatment for our child?",
        answer:
          "Never. Conventional medical care for genetic conditions — whether it is thyroid medication, transfusions, physiotherapy, special education or speech therapy — must continue without interruption. Homeopathy works alongside and in support of all conventional care.",
      },
    ],
    finalCta: "Book a Consultation for Your Family Member With a Genetic Condition →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support quality of life in genetic and rare conditions. It cannot alter genetic or chromosomal makeup and individual results vary. It is not a substitute for genetic counselling, paediatric or specialist care — always continue prescribed medication and therapies.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Genetic & Rare Diseases",
      alternateNames: ["Down Syndrome", "Thalassemia", "Trisomy 21"],
      description:
        "Inherited or chromosomal conditions such as Down Syndrome and Thalassemia, where constitutional homeopathic treatment supports quality of life, immunity and development alongside required conventional and genetic care.",
    },
    isPublished: true,
  },

  // ============================================================
  // 6. AUTISM & CHILD DEVELOPMENT
  // ============================================================
  {
    slug: "autism",
    pageTitle: "Homeopathy for Autism in Jaipur | ASD, ADHD, Speech Delay | Yadav Homeo Clinic",
    metaDescription:
      "Yadav Homeo Clinic — 5000+ special children treated. Homeopathic care for autism, ADHD, speech delay, developmental disorders. 30 years experience. Jaipur & online.",
    focusKeyword: "homeopathy for autism Jaipur",
    secondaryKeywords: [
      "autism treatment homeopathy India",
      "ASD homeopathy Jaipur",
      "ADHD homeopathy treatment",
      "speech delay homeopathy",
      "Dr Anavil Yadav autism",
    ],
    hero: {
      headline: "5,000+ Special Children. 30 Years. One Unwavering Commitment.",
      subheadline:
        "No parent should hear the words 'nothing can be done for your child' and have no path forward. At Yadav Homeo Clinic, we have dedicated three decades and over five thousand cases to proving that there is always something that can be done — not to erase autism, but to help every autistic child become the healthiest, most capable version of themselves.",
    },
    conditionsIntro: "Developmental Conditions We Treat",
    conditions: [
      "Autism Spectrum Disorder (ASD) — all levels of severity, all ages",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Global Developmental Delay (GDD)",
      "Speech and Language Delay — expressive and receptive",
      "Sensory Processing Disorder",
      "Intellectual Disability — mild, moderate, severe",
      "Learning Disabilities — dyslexia, dysgraphia, dyscalculia",
      "Cerebral Palsy — supportive constitutional treatment",
      "Down Syndrome — developmental and immune support",
      "Fragile X Syndrome",
      "Childhood Anxiety — severe, impacting daily functioning",
      "Oppositional Defiant Disorder (ODD) — co-occurring with ASD or ADHD",
    ],
    sections: [
      {
        heading: "We Know Where You Are — And We Want to Be Honest With You",
        paragraphs: [
          "If you are reading this page, you have probably been through a difficult journey already. The diagnosis. The grief. The research. The therapists. The well-meaning advice from relatives. The sleepless nights. The moments of joy and the moments of exhaustion.",
          "We want to be honest with you — as we are honest with every parent who comes to us.",
          "Homeopathy does not cure autism. Autism is not a disease to be cured — it is a different neurological wiring, a different way of experiencing the world. What we offer is not a cure. What we offer is the possibility of a healthier child — one who sleeps better, digests better, gets sick less often, has fewer meltdowns, is calmer, more available for connection and learning, and more able to benefit from the therapies they are receiving.",
          "For thousands of families, this has made an extraordinary difference. Not because autism disappeared. Because life became more manageable. Because the child became more themselves.",
        ],
      },
      {
        heading: "The Co-Occurring Conditions That Homeopathy Helps Most",
        paragraphs: [
          "Autism is rarely 'just' autism. Most autistic children have one or more significant co-occurring conditions that compound their difficulties and reduce their quality of life. These co-occurring conditions are where constitutional homeopathic treatment delivers its most consistent and significant results:",
        ],
        subsections: [
          {
            label: "Sleep Disorders",
            paragraphs: [
              "Many autistic children sleep very little, wake repeatedly, or take hours to fall asleep. This exhausts the whole family and impairs the child's cognitive function, mood regulation and learning. Improved sleep is often the first and most significant change parents notice after starting homeopathic treatment — typically within the first 2 to 3 months.",
            ],
          },
          {
            label: "Gastrointestinal Issues",
            paragraphs: [
              "A significant proportion of autistic children have chronic constipation, loose stools, food sensitivities, or abdominal pain that they cannot communicate clearly. This physical discomfort drives behaviour — hyperactivity, self-injury, aggression and emotional dysregulation all worsen when the gut is uncomfortable. Addressing GIT issues homeopathically often produces rapid and visible improvement in behaviour.",
            ],
          },
          {
            label: "Hyperactivity and Impulsivity",
            paragraphs: [
              "Constitutional treatment consistently reduces the intensity of hyperactivity and impulsivity in many children — improving their ability to sit, focus and engage with therapists and teachers. This makes therapy more effective and school more manageable.",
            ],
          },
          {
            label: "Aggressive and Self-Injurious Behaviour",
            paragraphs: [
              "Meltdowns, head-banging, biting, hitting — these behaviours are often responses to overwhelming sensory experiences, communication frustration or physical discomfort. As constitutional treatment improves the child's overall regulatory capacity and reduces physical discomfort, these behaviours often reduce in frequency and intensity.",
            ],
          },
          {
            label: "Immune Function and Recurrent Infections",
            paragraphs: [
              "Many autistic children have weakened immune systems and suffer from repeated ear infections, chest infections and viral illnesses. Each illness sets back the child's development and disrupts their routine — which is particularly difficult for autistic children. Strengthening immune function constitutionally reduces this infection burden significantly.",
            ],
          },
          {
            label: "Communication",
            paragraphs: [
              "Language improvement is the outcome parents hope for most — and the one that is most variable. Some non-verbal children begin to speak during constitutional treatment. Others develop more non-verbal communication. Others show improvement in the quality of existing speech. We cannot promise language development in every case. But we can say that as the child becomes healthier and more regulated — sleep improves, gut improves, hyperactivity reduces — they become more available for language development.",
            ],
          },
        ],
      },
      {
        heading: "What Your Child's First Consultation Looks Like",
        paragraphs: [
          "The first consultation for an autistic child takes 1 to 1.5 hours. It is done with the parents — the child's presence is helpful but not essential if they are not comfortable in a new environment.",
          "We take a complete history: the pregnancy and birth, any complications during delivery, early developmental milestones, vaccination reactions, when parents first noticed differences, dietary history and current food preferences and aversions, sleep patterns, bowel habits, sensory sensitivities, specific behaviours that concern the parents most, school or therapy observations, and the complete family medical history.",
          "The remedy selected from this picture is specific to this child — not to the autism diagnosis. Two autistic children with very similar presentations will often receive different remedies because they are different people with different constitutions.",
        ],
        subsections: [
          {
            label: "Important — Continue All Therapies",
            paragraphs: [
              "Homeopathic treatment must always be used alongside, not instead of, speech therapy, occupational therapy, ABA therapy, special education and any other interventions your child is receiving. The homeopathic treatment improves the child's baseline state — making them more available and responsive to the therapies. Without the therapies, the full benefit of the homeopathic treatment is not realised.",
            ],
          },
        ],
      },
    ],
    patientStory: {
      quote:
        "Our son was diagnosed with severe non-verbal autism at 2.5 years. He had 5 to 6 meltdowns daily, could not be touched, slept only 3 hours a night and had constant loose stools. We started treatment with Dr Yadav at age 3. Within 3 months, sleep improved to 7 hours. The loose stools resolved. Meltdowns reduced to 1 to 2 per day. By 6 months, he began tolerating touch and started making eye contact. By 12 months he said his first word — 'Maa'. He is now 9 years old, attending a special school, communicating with 50+ words and phrases, and a genuinely happy child. Our family's life has changed completely.",
      attribution: "Parent of an autistic child, Jaipur — Treatment started at age 3, currently age 9",
    },
    faqs: [
      {
        question: "At what age should we start homeopathic treatment for autism?",
        answer:
          "The earlier, the better. Younger children have stronger vital force and their neurological patterns are less fixed — making them more responsive to constitutional treatment. We treat children from as young as 18 months. However, even older children and adults with autism can benefit meaningfully from treatment — it is never too late.",
      },
      {
        question: "How long before we see results?",
        answer:
          "Sleep and digestive improvements are often the first changes — typically within 2 to 3 months. Behavioural improvements — reduced hyperactivity, fewer meltdowns — often follow. Communication changes take longer — usually 6 to 12 months or more. Expect a minimum 12-month commitment for a meaningful assessment of the treatment's impact.",
      },
      {
        question: "Can online consultation work for autism cases?",
        answer:
          "Yes. We conduct very detailed online consultations for autism — taking a comprehensive history from parents. For most cases, an online consultation is as effective as an in-person visit for the purpose of homeopathic prescribing. We may request a video call if we want to observe the child directly.",
      },
      {
        question: "My child is on ADHD medication. Can we add homeopathy?",
        answer:
          "Yes — continue all prescribed medications. Homeopathy works alongside existing treatments. Do not reduce or stop any psychiatric or neurological medication without your child's physician's guidance.",
      },
    ],
    finalCta: "Book Your Child's Consultation — We Are Listening →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support children with autism and related developmental conditions. Individual results vary and are not guaranteed. It is not a substitute for developmental paediatric care, speech therapy, occupational therapy or other prescribed interventions — always continue these alongside treatment here.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Autism Spectrum Disorder",
      alternateNames: ["ASD", "Autism"],
      description:
        "A neurodevelopmental condition affecting communication, behaviour and sensory processing. This page covers constitutional homeopathic support for ASD, ADHD, speech delay and related developmental conditions.",
    },
    isPublished: true,
  },

  // ============================================================
  // 7. NERVOUS SYSTEM DISEASES — prominent disclaimer
  // ============================================================
  {
    slug: "nervous-system-disease",
    pageTitle: "Homeopathy for Neurological Diseases in Jaipur | Epilepsy, Migraine, CP | Yadav Homeo Clinic",
    metaDescription:
      "Constitutional homeopathic treatment for epilepsy, migraine, cerebral palsy, Parkinson's and neurological conditions in Jaipur. Yadav Homeo Clinic — 30+ years.",
    focusKeyword: "homeopathy for neurological diseases Jaipur",
    secondaryKeywords: [
      "epilepsy homeopathy Jaipur",
      "migraine homeopathy treatment",
      "cerebral palsy homeopathy India",
      "Parkinson's homeopathy support",
    ],
    hero: {
      headline: "Neurological Conditions — Where Conventional Medicine Manages, Homeopathy Supports Deeply",
      subheadline:
        "The nervous system governs everything — thought, movement, sensation, emotion. When it is disrupted, the impact touches every part of life. At Yadav Homeo Clinic, we bring 30 years of experience in supporting neurological conditions with deep constitutional homeopathic treatment — always alongside, never instead of, neurological care.",
    },
    conditionsIntro: "Neurological Conditions We Address With Homeopathy",
    conditions: [
      "Epilepsy — reducing seizure frequency and severity, supporting AED management",
      "Migraine — acute attack treatment and constitutional prevention",
      "Cerebral Palsy — supportive constitutional treatment for spasticity, mobility and cognition",
      "Parkinson's Disease — supportive care, improving quality of life and managing tremors",
      "Multiple Sclerosis — supportive management, reducing fatigue and relapse frequency",
      "Bell's Palsy — facial nerve paralysis recovery support",
      "Trigeminal Neuralgia — severe facial pain management",
      "Vertigo — benign paroxysmal positional vertigo, Ménière's disease",
      "Meningitis recovery — post-infective neurological rehabilitation support",
      "Post-stroke recovery — supportive care alongside physiotherapy",
      "Restless Leg Syndrome",
      "Essential Tremor",
      "Neuropathy — diabetic, peripheral, post-chemotherapy",
    ],
    sections: [
      {
        heading: "Epilepsy — Reducing Seizures, Not Just Counting Them",
        paragraphs: [
          "Epilepsy is one of the neurological conditions where constitutional homeopathic treatment has produced the most meaningful results at our clinic. Patients arrive on one or more antiepileptic drugs (AEDs) — carbamazepine, valproate, levetiracetam, phenobarbitone — with seizures that remain incompletely controlled despite medication. For them, constitutional homeopathic treatment offers the possibility of better seizure control alongside their existing medication.",
          "Our approach does not suggest reducing or stopping AEDs. Seizure management requires consistent antiepileptic medication, and any change to that medication must be made by a neurologist. What constitutional treatment does is address the neurological susceptibility that underlies the seizure disorder — the constitutional predisposition to neurological hypersensitivity. In many patients, this produces a gradual but real reduction in seizure frequency and severity over 6 to 18 months of treatment.",
          "Several of our epilepsy patients — under neurologist supervision — have been able to reduce AED doses after achieving sustained seizure control with the combination of conventional medication and constitutional homeopathic treatment. This is always done slowly, carefully, and with regular EEG monitoring.",
        ],
      },
      {
        heading: "Migraine — Why Constitutional Homeopathy Often Works When Prophylactic Medications Don't",
        paragraphs: [
          "Migraine is one of the conditions where homeopathic treatment produces some of its most dramatic and consistent results. Patients who have suffered for years — weekly or monthly attacks of throbbing pain, nausea, light and sound sensitivity, visual auras — often find that constitutional treatment produces a profound reduction in frequency and intensity, and in some cases a complete cessation of migraine attacks.",
          "The reason for this strong response lies in how homeopathy approaches migraine. Conventional prophylactic treatment — beta-blockers, topiramate, amitriptyline — addresses the neurochemistry of migraine attacks. Constitutional homeopathic treatment addresses the underlying constitutional hypersensitivity of the nervous system that makes migraine attacks possible. When this deeper sensitivity is corrected through the precisely chosen constitutional remedy, the trigger threshold rises — and attacks become less frequent, less severe, and eventually absent.",
          "Migraine patients typically begin seeing improvement in frequency within 3 to 4 months. By 6 to 8 months, most notice meaningful reduction. By 12 months, a significant proportion of our migraine patients are either attack-free or down to very occasional mild episodes.",
        ],
      },
      {
        heading: "Cerebral Palsy — Improving Quality of Life and Supporting Development",
        paragraphs: [
          "Cerebral Palsy presents in many forms — spastic, athetoid, ataxic — with varying degrees of motor, cognitive and communication involvement. Conventional management focuses on physiotherapy, occupational therapy, speech therapy, orthopaedic interventions and management of associated epilepsy.",
          "Constitutional homeopathic treatment for Cerebral Palsy patients works as a meaningful complement to this conventional care. The areas where we most consistently see improvement are: reduction in spasticity (muscle stiffness), improved sleep quality, better digestive function, reduction in drooling (sialorrhoea), improved alertness and cognitive engagement, and in children, better responsiveness to physiotherapy and occupational therapy after the homeopathic treatment has improved their constitutional health.",
          "Parents of CP children who have undergone constitutional treatment at our clinic frequently report that their child's physiotherapy produces better results after the homeopathic treatment begins — because the child's overall neurological and physical health is improved, making them more receptive and responsive to therapeutic input.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I had been having migraines since I was 19. By the time I came to Dr Yadav at age 31, I was getting 2 to 3 attacks per week. I had tried propranolol, topiramate, and amitriptyline — each worked for a few months and then stopped. After 5 months of constitutional treatment at Yadav Homeo Clinic, my attacks came down to 2 to 3 per month. By 9 months I was having maybe one attack per month and much milder. I have been completely migraine-free for 4 months now. Nothing in 12 years had achieved this.",
      attribution: "Rohit Mehta, 33, Jaipur — Chronic migraine patient, 9 months constitutional treatment",
    },
    faqs: [
      {
        question: "Can I stop my anti-epileptic medicines if homeopathy is working?",
        answer:
          "Never stop or reduce AEDs without your neurologist's explicit guidance and proper tapering protocol. Even if seizures are fully controlled, AEDs must be reduced extremely slowly and with regular EEG monitoring. Any decision to reduce medication is always the neurologist's — not yours alone and not ours. We will support the process with ongoing constitutional treatment.",
      },
      {
        question: "Is homeopathy safe for people with epilepsy?",
        answer:
          "Yes. Homeopathic medicines in the dilutions we prescribe do not interact with AEDs and do not lower seizure thresholds. They are safe to take alongside all standard antiepileptic medications.",
      },
      {
        question: "Can Parkinson's Disease be treated with homeopathy?",
        answer:
          "Parkinson's is a progressive neurodegenerative condition — homeopathy does not reverse neurodegeneration. What constitutional homeopathic treatment can offer Parkinson's patients is: slowing of symptom progression in some cases, reduction in tremor severity, improved rigidity and mobility, better sleep quality, and significantly improved quality of life. Many Parkinson's patients find that constitutional treatment meaningfully improves their daily functioning even as the disease continues.",
      },
      {
        question: "How is homeopathy for migraine different from a regular migraine pill?",
        answer:
          "A migraine pill (triptan or pain medication) treats the attack once it has begun. Constitutional homeopathic treatment works between attacks — gradually reducing the neurological sensitivity that allows attacks to occur. The goal is to reduce how often attacks happen and how severe they are — not just to manage them once they start.",
      },
    ],
    finalCta: "Book a Neurological Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "Homeopathic treatment for neurological conditions works alongside — never as a replacement for — prescribed neurological care. Never stop or reduce antiepileptic or other neurological medication without your specialist's explicit guidance. Individual results vary and are not guaranteed.",
    disclaimerProminent: true,
    aboutCondition: {
      name: "Neurological Conditions",
      alternateNames: ["Epilepsy", "Migraine", "Cerebral Palsy"],
      description:
        "Conditions affecting the brain, spinal cord and nerves, including Epilepsy, Migraine, Cerebral Palsy and Parkinson's Disease, supported here with constitutional homeopathic treatment alongside neurological care.",
    },
    isPublished: true,
  },

  // ============================================================
  // 8. CHILDREN'S HEALTH — hero from STEP8 (GREEN)
  // ============================================================
  {
    slug: "childrens-health",
    pageTitle:
      "Homeopathy for Children in Jaipur | Paediatric Homeopathy | Tonsillitis, Allergies, Bed-Wetting | Yadav Homeo Clinic",
    metaDescription:
      "Safe, gentle homeopathic treatment for children — recurrent infections, tonsillitis, bed-wetting, allergies & more. No side effects. Yadav Homeo Clinic, Jaipur — 30+ years.",
    focusKeyword: "homeopathy for children Jaipur",
    secondaryKeywords: [
      "paediatric homeopathy Jaipur",
      "tonsillitis homeopathy treatment",
      "bed-wetting homeopathy",
      "child allergy homeopathy",
      "recurrent infection child homeopathy",
    ],
    hero: {
      headline:
        "Your Child Has Had Antibiotics Three Times This Year. It Is Time to Ask a Different Question.",
      subheadline:
        "You have watched your child go through tonsillitis surgery discussions, long antibiotic courses that leave them tired, or allergy medications they may need for years. You are not wrong to want something different. Children respond to correctly prescribed constitutional homeopathy with a speed and depth that consistently surprises even experienced practitioners — because their immune systems are still developing and respond powerfully to the right support. At Yadav Homeo Clinic, we have been treating children since 1991. Their recoveries are among the most joyful work we do.",
      trustLine:
        "Children Treated From Birth | 30+ Years Paediatric Homeopathy | No Side Effects on Developing Immune System | Online Consultation Available",
    },
    conditionsIntro:
      "We treat a full range of childhood health concerns — from recurring infections to developmental and behavioural conditions:",
    conditions: [
      "Recurrent cold, cough and chest infections — children who fall sick every 2 to 4 weeks",
      "Chronic Tonsillitis — repeated throat infections, enlarged tonsils (alternative to tonsillectomy in many cases)",
      "Adenoid Enlargement — nasal obstruction, mouth breathing, snoring in children",
      "Ear infections — Otitis Media, recurrent ear pain and discharge",
      "Childhood Asthma and Wheezing — recurrent bronchospasm, exercise-induced wheeze",
      "Allergic Rhinitis — dust, pollen, pet allergies causing chronic sneezing and runny nose",
      "Food Allergies — milk, wheat, eggs and other common food sensitivities",
      "Atopic Eczema — chronic skin inflammation, itching, dry patches in children",
      "Urticaria / Hives — recurrent allergic skin rashes in children",
      "Bed-wetting (Nocturnal Enuresis) — involuntary urination at night beyond age 5",
      "Poor appetite and failure to thrive — children who consistently eat very little",
      "Growth concerns — children below expected height or weight percentiles",
      "Chronic Constipation in children",
      "Worm infestations — recurrent, not responding to deworming",
      "Childhood Anxiety — school phobia, separation anxiety, night terrors",
      "Behavioural issues — excessive anger, clinginess, oppositional behaviour",
      "Vaccination reactions — fever, rashes, behavioural changes after vaccines",
      "Developmental milestones — speech delay, motor delay (see also Autism page)",
    ],
    sections: [
      {
        heading: "Why Thousands of Parents Choose Homeopathy for Their Children",
        paragraphs: [
          "Every parent worries about giving their child strong medicines — especially repeatedly. Antibiotics for every infection. Antihistamines for every allergy. Steroids for every asthma attack. Each time, the medicine works — and each time, the illness returns. Sometimes sooner. Sometimes worse. Parents begin to feel they are managing a cycle, not treating a problem.",
          "This is exactly where constitutional homeopathy makes its most important contribution to child health. Children have a naturally strong vital force — their bodies want to heal, and they respond faster and more deeply to homeopathic treatment than most adults. A child with recurrent tonsillitis who might otherwise need surgery often becomes completely infection-free within 6 to 12 months of constitutional treatment. A child with chronic eczema who has been on steroid creams since infancy begins to develop genuinely healthy skin. A child with chronic allergies who was on daily antihistamines starts reacting less to previously triggering substances.",
          "The medicines themselves are ideal for children — tiny, sweet, dissolving pills that even very young children take willingly. No injections. No bitter syrups. No pharmacological side effects. No risk of antibiotic resistance.",
        ],
      },
      {
        heading: "Recurrent Tonsillitis — When Homeopathy Can Replace the Surgeon's Knife",
        paragraphs: [
          "Tonsillectomy — surgical removal of the tonsils — is one of the most commonly performed surgeries in children worldwide. It is recommended for children who have frequent, severe tonsil infections that are not responding to antibiotics. The surgery is generally safe — but many parents instinctively feel that removing a part of their child's immune system is not the ideal solution.",
          "Constitutional homeopathic treatment for chronic tonsillitis has a strong and consistent track record at our clinic. By addressing the underlying immune susceptibility that makes the child prone to repeated throat infections — rather than removing the tonsils that are expressing this susceptibility — homeopathy allows many children to become genuinely free of recurrent tonsil infections over 6 to 12 months of treatment.",
          "We have had numerous patients referred to us specifically because tonsillectomy was recommended and parents wanted to try a non-surgical option first. In many of these cases — particularly in children under 10 — constitutional treatment has been successful enough that surgery was not required. We always recommend ENT review alongside homeopathic treatment.",
        ],
        note: "Important caveat: In cases of peritonsillar abscess, obstructive sleep apnea caused by severely enlarged tonsils, or other serious complications, surgery may still be the appropriate and necessary choice. We are honest about this from the first consultation.",
      },
      {
        heading: "Nocturnal Enuresis (Bed-Wetting) — Gently, Without Pressure",
        paragraphs: [
          "Bed-wetting — involuntary urination during sleep — is a source of significant distress for children and families. Children feel embarrassed. Parents feel frustrated, even though they know the child cannot help it. Conventional treatment involves bladder training, alarms and medication (desmopressin) — which helps while the medication is taken but rarely produces long-term resolution.",
          "Constitutional homeopathic treatment for nocturnal enuresis is one of the most consistently successful and satisfying treatment areas in paediatric homeopathy. By identifying the specific constitutional pattern of the child — the type of sleep, the emotional patterns, the family history, the specific circumstances around bed-wetting — and prescribing the precisely matching remedy, we regularly see resolution of bed-wetting within 3 to 6 months. Completely. Without alarms, without medication, without pressure on the child.",
        ],
      },
      {
        heading: "Treatment Timeline — What to Expect",
        subsections: [
          {
            label: "Month 1",
            paragraphs: [
              "Stabilisation. The immune system begins to be supported. The frequency of infections or allergy episodes may start to reduce. For bed-wetting — dry nights may begin to increase.",
            ],
          },
          {
            label: "Month 2–3",
            paragraphs: [
              "Visible improvement. Fewer infections. Eczema itch reduces. Bed-wetting frequency drops. Parents notice the child is generally healthier and more energetic.",
            ],
          },
          {
            label: "Month 4–6",
            paragraphs: [
              "Significant improvement. Tonsil infections reducing to very infrequent or absent. Allergic symptoms milder. Eczema patches healing. Bed-wetting resolving.",
            ],
          },
          {
            label: "Month 6–12",
            paragraphs: [
              "Consolidation. The child's immune system and constitutional health are genuinely strengthened. Recurrence becomes rare. Treatment is gradually tapered.",
            ],
          },
        ],
      },
    ],
    patientStory: {
      quote:
        "My son had tonsillitis every 5 to 6 weeks from age 3 to age 7. The ENT surgeon said the tonsils needed to come out. I wanted to try everything else first. We started constitutional treatment with Dr Yadav. In the first 3 months he had one mild infection — not severe enough for antibiotics. From month 4 onwards he has been completely infection-free. He is now 10 years old and his tonsils are still in. His immunity is completely transformed. The surgery never happened.",
      attribution: "Mother of patient, Jaipur — Chronic tonsillitis, surgery avoided",
    },
    faqs: [
      {
        question: "Are homeopathic medicines safe for newborns and infants?",
        answer:
          "Yes — homeopathic medicines are among the safest medicines that exist for infants. They contain no pharmacologically active molecules in standard potencies and have no known side effects. We treat infants from the newborn stage for conditions like colic, jaundice recovery, feeding difficulties and eczema.",
      },
      {
        question: "My child is on antibiotics regularly. Can we start homeopathy?",
        answer:
          "Yes. You do not need to stop antibiotics to begin homeopathic treatment. Continue any prescribed medication. The goal of constitutional treatment is to strengthen the child's own immune response so that antibiotics become less and less necessary over time.",
      },
      {
        question: "Can homeopathy treat children's asthma without steroids?",
        answer:
          "Constitutional treatment for childhood asthma aims to reduce the underlying bronchial hypersensitivity — gradually reducing the frequency of wheezing episodes and the need for reliever inhalers. Never stop a prescribed inhaler without your paediatrician's guidance. As homeopathy works, the need for inhalers typically reduces naturally — and the reduction is managed in consultation with your child's doctor.",
      },
      {
        question: "At what age can children start homeopathic treatment?",
        answer:
          "From birth. There is no minimum age. Infants, toddlers, school-age children and teenagers all respond well to constitutional homeopathic treatment.",
      },
    ],
    finalCta: "Book Your Child's Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support common childhood health concerns. Individual results vary and are not guaranteed. It is not a substitute for professional paediatric diagnosis or ongoing specialist care — always continue prescribed treatment and consult your child's paediatrician before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Paediatric Health Conditions",
      alternateNames: ["Children's Health", "Paediatric Homeopathy"],
      description:
        "A broad category of childhood health concerns — including recurrent infections, tonsillitis, allergies, eczema and bed-wetting — supported here with constitutional homeopathic treatment.",
    },
    isPublished: true,
  },

  // ============================================================
  // 9. WOMEN'S HEALTH
  // ============================================================
  {
    slug: "womens-health",
    pageTitle:
      "Homeopathy for Women's Health in Jaipur | PCOD, Fibroids, Menopause | Yadav Homeo Clinic",
    metaDescription:
      "Homeopathic treatment for PCOD/PCOS, uterine fibroids, irregular periods, menopause, female infertility & all gynaecological conditions. Yadav Homeo Clinic, Jaipur.",
    focusKeyword: "homeopathy for PCOD Jaipur",
    secondaryKeywords: [
      "PCOS homeopathy treatment Jaipur",
      "fibroid treatment homeopathy",
      "irregular periods homeopathy",
      "female infertility homeopathy",
      "menopause homeopathy India",
    ],
    hero: {
      headline: "Women's Health — Treated With the Depth, Sensitivity and Respect It Deserves",
      subheadline:
        "Hormonal cycles govern a woman's physical health, emotional state, energy, skin, hair and fertility. When these cycles are disrupted — by PCOD, fibroids, thyroid imbalance or menopause — the effect touches every part of life. Constitutional homeopathy addresses these disruptions at their root, not just their symptoms.",
    },
    conditionsIntro:
      "We specialise in the full range of gynaecological and hormonal conditions that affect women at every life stage:",
    conditions: [
      "PCOD / PCOS — polycystic ovarian disease, irregular cycles, hormonal acne, weight gain, cysts",
      "Uterine Fibroids — non-cancerous growths causing heavy bleeding, pain and pressure",
      "Endometriosis — severe period pain, heavy bleeding, infertility",
      "Irregular and Painful Menstruation (Dysmenorrhoea)",
      "Amenorrhoea — absence of periods",
      "Premenstrual Syndrome (PMS) — mood swings, bloating, breast tenderness before periods",
      "Leucorrhoea — chronic white or yellow vaginal discharge",
      "Recurrent Vaginal Infections — bacterial vaginosis, candida",
      "Female Infertility — unexplained, PCOD-related, endometriosis-related, post-miscarriage",
      "Recurrent Miscarriage — habitual abortion",
      "Menopausal Syndrome — hot flushes, mood changes, insomnia, vaginal dryness",
      "Premature Ovarian Insufficiency (POI)",
      "Thyroid disorders — Hashimoto's, Graves', subclinical thyroid in women",
      "Mastitis — breast infection during breastfeeding",
      "Benign breast lumps and breast pain (mastalgia)",
      "Postpartum Depression and hormonal mood disorders",
    ],
    sections: [
      {
        heading: "PCOD — Reversing the Root Cause, Not Just Managing the Hormone Report",
        paragraphs: [
          "Polycystic Ovarian Disease has become one of the most common hormonal conditions affecting young Indian women today. The combination of irregular or absent periods, multiple ovarian cysts on ultrasound, elevated androgens (male hormones), insulin resistance, weight gain, hormonal acne and excess body hair has become almost epidemic — driven by stress, sedentary lifestyles, dietary changes and environmental factors.",
          "Conventional treatment for PCOD typically involves hormonal contraceptive pills to regulate the cycle, metformin for insulin resistance, and specific medications for symptoms like acne. These manage the symptoms effectively while the medication is taken. When the pills are stopped — for planning a pregnancy or simply because long-term hormonal medication raises concerns — the irregular cycles return, the cysts reform, and the same pattern reasserts itself.",
          "Constitutional homeopathic treatment takes a fundamentally different approach. Rather than supplying synthetic hormones from outside, it works to restore the body's own hormonal axis — the delicate communication between the hypothalamus, pituitary gland and ovaries that governs the menstrual cycle. The correctly selected constitutional remedy gradually re-establishes this communication, leading to:",
        ],
        list: [
          "Return of regular menstrual cycles — in many cases to a normal 28 to 32 day rhythm",
          "Reduction in cyst number and size on follow-up ultrasound",
          "Improvement in acne and excess hair growth as androgen levels normalise",
          "Improvement in insulin sensitivity alongside dietary changes",
          "Natural conception — in many PCOD patients who were struggling with fertility",
        ],
        note: "PCOD is not cured overnight with homeopathy — a committed treatment period of 12 to 18 months is typical for significant hormonal normalisation. But the results, when they come, are real, measurable on blood tests and ultrasound, and — importantly — do not depend on continued medication to be maintained.",
      },
      {
        heading: "Fibroids — When Homeopathy Can Help You Avoid the Operating Table",
        paragraphs: [
          "Uterine fibroids are non-cancerous growths in the muscle wall of the uterus. They affect a significant proportion of women in their 30s and 40s and are one of the most common reasons for hysterectomy worldwide. Symptoms range from heavy and prolonged menstrual bleeding, to pelvic pressure and pain, to urinary frequency from fibroid pressure on the bladder.",
          "Constitutional homeopathic treatment for fibroids has a meaningful track record at our clinic — particularly in cases of small to medium fibroids detected early, before they cause severe or acute complications. In these cases, we have documented:",
        ],
        list: [
          "Reduction in fibroid size — confirmed on follow-up ultrasound",
          "Significant reduction in heavy menstrual bleeding — often the most debilitating symptom",
          "Reduction in associated pain and pelvic discomfort",
          "Prevention of new fibroid growth",
        ],
        note: "We have had several patients referred to us specifically because surgery — myomectomy or hysterectomy — had been recommended, and who subsequently avoided surgery entirely through a sustained period of constitutional homeopathic treatment. Important: Large fibroids causing acute urinary retention, severe anaemia from bleeding, or fibroids in positions causing significant complications may still require surgical management. We will give you an honest assessment of your specific case and whether homeopathy is a realistic non-surgical option for you.",
      },
      {
        heading: "Menopause — Supported Gently, Without Hormonal Therapy",
        paragraphs: [
          "Menopause is a natural biological transition — not a disease. But for many women, the symptoms of perimenopause and menopause — hot flushes, night sweats, mood swings, insomnia, vaginal dryness, joint pain, memory lapses, and the emotional adjustment to this stage of life — can be significantly disruptive.",
          "Many women seek homeopathic treatment during menopause specifically because they want to manage their symptoms without Hormone Replacement Therapy (HRT) — whether due to concerns about breast cancer risk, blood clot risk, or simply a preference for a more natural approach. Constitutional homeopathy is particularly well-suited to menopausal care because of how it works: by matching the remedy to the whole person — her specific symptom picture, her constitutional type, her emotional experience of this transition — rather than applying a blanket hormonal replacement.",
          "Hot flushes, in particular, respond very well to correctly prescribed homeopathic remedies — often reducing significantly in frequency and intensity within 6 to 8 weeks of starting treatment. Sleep, mood and energy improvements typically follow.",
        ],
      },
      {
        heading: "Fertility — When IVF Is Not the Only Option",
        paragraphs: [
          "Female infertility — whether due to PCOD, blocked tubes, endometriosis, hormonal imbalance, or unexplained causes — is one of the most emotionally charged conditions we treat. Couples arrive after months or years of trying to conceive, often after one or more failed IVF cycles, carrying a weight of hope and grief that is unlike almost any other medical situation.",
          "Constitutional homeopathic treatment for female infertility works by improving the overall hormonal and constitutional health of the woman — creating the optimal internal environment for conception. We have seen natural conceptions in women diagnosed with PCOD, unexplained infertility, thin endometrium, poor egg quality in early-stage Premature Ovarian Insufficiency, and recurrent miscarriage after constitutional treatment.",
          "Homeopathy does not guarantee conception. No treatment does. But it offers a safe, side-effect-free option that can meaningfully improve the hormonal environment, egg quality and uterine receptivity — either as a standalone approach or as a complement to assisted reproduction.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I had PCOD for 8 years. My periods came every 3 to 5 months. I had been on hormonal pills since age 22 and was told IVF would be needed to conceive. I started constitutional treatment with Dr Yadav at 29. Within 6 months my cycle had regulated to every 35 to 40 days. By 10 months, my ultrasound showed significant reduction in cyst number. At 14 months of treatment, I conceived naturally — something I had been told was extremely unlikely. My daughter is now 2 years old.",
      attribution: "Patient, 32, Jaipur — PCOD, natural conception after 14 months of constitutional treatment",
    },
    faqs: [
      {
        question: "Can I take homeopathy while on hormonal contraceptive pills?",
        answer:
          "Yes. Homeopathic medicines do not interact with hormonal contraceptives. If you are taking the pill for PCOD management and want to try homeopathy with the eventual goal of coming off the pill, we can plan this transition carefully over the course of treatment.",
      },
      {
        question: "How long does fibroid treatment take?",
        answer:
          "In our experience, measurable reduction in fibroid size on ultrasound typically takes 12 to 18 months of consistent constitutional treatment. Symptom improvement — particularly reduction in heavy bleeding — often comes earlier, within 4 to 6 months. We recommend a follow-up ultrasound at 12 months to assess objective progress.",
      },
      {
        question: "I have been trying to conceive for 2 years. Is it too late for homeopathy?",
        answer:
          "It is not too late. Constitutional treatment for infertility is not time-sensitive in the same way as IVF — there is no age cut-off for trying. The earlier you begin, the more time the treatment has to improve your hormonal environment. We assess each infertility case individually and give an honest opinion on the likelihood of response.",
      },
      {
        question: "Will my consultation details be kept completely private?",
        answer:
          "Absolutely. All consultations at Yadav Homeo Clinic are completely confidential. Women's health conditions — including fertility, gynaecological issues and intimate health concerns — are handled with the highest degree of privacy and professional sensitivity.",
      },
    ],
    finalCta: "Book a Women's Health Consultation — Private, Compassionate, Effective →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support women's health and gynaecological conditions. Individual results vary and are not guaranteed. It is not a substitute for gynaecological diagnosis or ongoing specialist care — always continue prescribed treatment and consult your treating gynaecologist before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Women's Health Conditions",
      alternateNames: ["PCOD", "PCOS", "Gynaecological Disorders"],
      description:
        "A range of hormonal and gynaecological conditions affecting women — including PCOD, uterine fibroids, menopause and female infertility — supported here with constitutional homeopathic treatment.",
    },
    isPublished: true,
  },

  // ============================================================
  // 10. MEN'S HEALTH — hero from STEP8 (GREEN); sexual-health section
  // carries a prominent disclaimer per the developer package master index
  // ("Sexual health section: medical disclaimer prominent").
  // ============================================================
  {
    slug: "mens-health",
    pageTitle:
      "Homeopathy for Men's Health in Jaipur | Infertility, Prostate, Sexual Health | Yadav Homeo Clinic",
    metaDescription:
      "Confidential homeopathic treatment for male infertility, prostate disease, sexual health and men's health concerns in Jaipur. Complete privacy. Yadav Homeo Clinic — 30+ years.",
    focusKeyword: "homeopathy for male infertility Jaipur",
    secondaryKeywords: [
      "male infertility homeopathy India",
      "prostate homeopathy Jaipur",
      "low sperm count homeopathy",
      "erectile dysfunction homeopathy",
      "men's health doctor Jaipur",
    ],
    hero: {
      headline:
        "You Have Not Said It Out Loud to Anyone Yet. You Do Not Have to — Not Until You Are Ready.",
      subheadline:
        "Male infertility, low sperm count, erectile dysfunction, prostate enlargement — these are real medical conditions that affect millions of men. They are not character flaws. They are not shameful. At Yadav Homeo Clinic, conversations about men's health are completely private — between you and your doctor. Constitutional homeopathic treatment addresses these conditions at their hormonal and systemic root, without the side effects of long-term pharmaceutical intervention. You can begin your consultation online — from your phone — without anyone in your home needing to know.",
      trustLine:
        "Completely Confidential | Online Consultation Available | Male Infertility Specialist | No Prescription Needed to Book",
    },
    conditionsIntro:
      "We treat the full range of men's health concerns — handled with complete privacy at every stage:",
    conditions: [
      "Male Infertility — low sperm count (oligospermia), poor sperm motility (asthenospermia), abnormal morphology (teratospermia), azoospermia",
      "Erectile Dysfunction (ED) — difficulty achieving or maintaining erection",
      "Premature Ejaculation — one of the most common male sexual health concerns",
      "Loss of libido and low sexual desire",
      "Benign Prostatic Hyperplasia (BPH) — enlarged prostate, urinary symptoms",
      "Chronic Prostatitis — prostate inflammation causing pelvic pain and urinary discomfort",
      "Hydrocele — fluid accumulation around the testicle",
      "Varicocele — enlarged veins in the scrotum affecting fertility",
      "Recurrent Urinary Tract Infections in men",
      "Kidney Stones — prevention and management (see also Kidney page)",
      "Low testosterone / hypogonadism — fatigue, mood, muscle loss",
      "Androgenetic Alopecia (male pattern baldness) — constitutional treatment",
      "Chronic Fatigue — persistent low energy and stamina",
      "Gynecomastia — excess breast tissue in men (hormonal)",
    ],
    sections: [
      {
        heading: "An Honest Word About Male Infertility and Stigma",
        paragraphs: [
          "Before we discuss treatment — let us address what most men feel but rarely say: male infertility carries a weight that female infertility, for cultural reasons, often does not. Men are told — sometimes explicitly, more often implicitly — that fertility is tied to identity and masculinity. It is not. Low sperm count, poor motility, or azoospermia are conditions of the reproductive system, caused by hormonal imbalance, oxidative stress, nutritional factors, or constitutional susceptibility. They say nothing about who you are as a man. They respond to treatment. In our clinical experience, many men see measurable improvement in sperm parameters within 3 to 6 months of correct constitutional homeopathic treatment. The first step is an honest conversation.",
        ],
      },
      {
        heading: "Male Infertility — What Homeopathy Does That No Other Treatment Does",
        paragraphs: [
          "Male infertility contributes to approximately 40 to 50 percent of all infertility cases — yet it remains significantly under-diagnosed and under-discussed. Many couples pursue years of female fertility investigations and treatments before a semen analysis is done and the male factor is identified.",
          "The most common findings on semen analysis are low sperm count, poor motility, abnormal morphology, or a combination of these. Conventional medicine's primary answer for these findings is assisted reproduction — IUI or IVF with ICSI. These are effective but invasive, expensive, and emotionally demanding.",
          "Constitutional homeopathic treatment for male infertility works by improving the overall reproductive health of the man — the hormonal environment, the testicular function, the quality of sperm production. This is not targeted at the sperm count alone — it is targeted at the whole person, because sperm quality is a reflection of the overall constitutional health.",
          "In our clinical experience at Yadav Homeo Clinic, constitutional treatment for male infertility regularly produces:",
        ],
        list: [
          "Improvement in sperm count — in oligospermia cases, meaningful increase in total sperm number",
          "Improvement in sperm motility — more progressively motile sperm on follow-up semen analysis",
          "Improvement in morphology — reduction in abnormal sperm forms",
          "Improvement in semen volume and liquefaction",
        ],
        note: "These improvements are measured objectively through repeated semen analysis, typically at 3-month intervals. When they occur, natural conception becomes significantly more likely — and IVF may become unnecessary, or if still pursued, the improved sperm quality improves the chances of IVF success as well. Treatment duration: meaningful improvement in semen parameters typically requires 4 to 6 months of constitutional treatment, as the sperm production cycle itself takes approximately 74 days. A realistic treatment commitment is 9 to 12 months with follow-up semen analysis at 3-month intervals.",
      },
      {
        heading: "BPH and Prostatitis — Without Lifelong Medication or Surgery",
        paragraphs: [
          "Benign Prostatic Hyperplasia — the non-cancerous enlargement of the prostate gland — is extremely common in men over 50. The enlarged prostate narrows the urinary channel, producing a characteristic cluster of symptoms: difficulty starting urination, a weak stream, frequent urge to urinate especially at night (nocturia), incomplete bladder emptying, and a constant sense of urinary urgency.",
          "Conventional management involves alpha-blockers (like tamsulosin) and 5-alpha reductase inhibitors — effective at managing symptoms but not at reversing the prostate enlargement, and associated with side effects including sexual dysfunction.",
          "Constitutional homeopathic treatment for BPH, prescribed on the basis of the individual patient's complete symptom picture, has produced consistent improvements in urinary flow, reduction in nocturia, and improved bladder emptying in many of our patients. Several patients have been able to reduce or discontinue alpha-blocker medication under their urologist's supervision as homeopathic treatment improved their symptoms.",
          "For Chronic Prostatitis — the persistent pelvic pain, perineal discomfort and voiding symptoms that are often unresponsive to prolonged antibiotics — constitutional homeopathic treatment offers a particularly valuable alternative, as it addresses the pattern of susceptibility rather than assuming an ongoing infection.",
        ],
      },
    ],
    patientStory: {
      quote:
        "My semen analysis showed a total sperm count of 3 million per ml and motility of 18 percent. My wife and I had been trying to conceive for 3 years. IVF with ICSI was recommended. I started constitutional treatment with Dr Yadav. After 6 months, my count was 22 million per ml and motility had risen to 41 percent. We conceived naturally in the 8th month of treatment. We have a son now. I still find it difficult to believe.",
      attribution: "Patient, 34, Rajasthan — Severe oligospermia, natural conception in month 8 of treatment",
    },
    faqs: [
      {
        question: "Will my consultation be completely confidential?",
        answer:
          "Absolutely. Men's health conditions — including sexual health, infertility and intimate concerns — are handled with complete medical confidentiality. Your consultation details are never shared. We treat men's health with the same professional dignity as any other medical condition.",
      },
      {
        question: "How is male infertility treated with homeopathy — does it involve any procedure?",
        answer:
          "No procedures whatsoever. Constitutional homeopathic treatment is entirely oral — small pills taken as directed. No injections, no procedures, no hormonal treatments. The only monitoring is a follow-up semen analysis at 3-month intervals to track improvement.",
      },
      {
        question: "I have been told I have azoospermia (zero sperm count). Can homeopathy help?",
        answer:
          "Azoospermia has two possible causes: obstruction (a blockage preventing sperm from reaching the ejaculate) or non-obstructive (the testes are not producing sperm). Obstructive azoospermia typically requires surgical correction. For non-obstructive azoospermia — where some sperm production may still occur — constitutional treatment can in some cases stimulate enough recovery for IVF with TESE (testicular sperm extraction) to become viable. We assess each case individually and honestly.",
      },
      {
        question: "I have prostate enlargement. Should I stop my tamsulosin?",
        answer:
          "Never stop prescribed prostate medication without your urologist's guidance. Continue your medication while starting homeopathic treatment. As symptoms improve under constitutional treatment, any reduction in medication is done under urological supervision.",
      },
    ],
    finalCta: "Book a Confidential Men's Health Consultation →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support men's health concerns, including male infertility and sexual health. Individual results vary and are not guaranteed. It is not a substitute for urological, andrological or psychosexual diagnosis and treatment — always continue prescribed medication and consult your treating specialist before making any changes. All consultations are strictly confidential.",
    disclaimerProminent: true,
    aboutCondition: {
      name: "Men's Health Conditions",
      alternateNames: ["Male Infertility", "Erectile Dysfunction", "Prostate Enlargement"],
      description:
        "A range of men's health conditions — including male infertility, erectile dysfunction and prostate enlargement — supported here with constitutional homeopathic treatment under strict confidentiality.",
    },
    isPublished: true,
  },

  // ============================================================
  // 11. RESPIRATORY DISEASES
  // ============================================================
  {
    slug: "respiratory-diseases",
    pageTitle: "Homeopathy for Asthma & Respiratory Diseases in Jaipur | Yadav Homeo Clinic",
    metaDescription:
      "Effective homeopathic treatment for asthma, sinusitis, allergic rhinitis & chronic respiratory conditions in Jaipur. Reduce steroid dependence. 30+ years experience.",
    focusKeyword: "homeopathy for asthma Jaipur",
    secondaryKeywords: [
      "asthma homeopathy treatment Jaipur",
      "sinusitis homeopathy",
      "allergic rhinitis homeopathy India",
      "bronchitis homeopathy",
      "reduce inhaler homeopathy",
    ],
    hero: {
      headline: "Breathe Freely — Constitutional Homeopathy for Chronic Respiratory Disease",
      subheadline:
        "Inhalers manage asthma attacks. Antihistamines quiet allergic rhinitis temporarily. But the underlying sensitivity of the respiratory tract — the reason the lungs react to dust, cold air, or stress — remains untouched by conventional treatment. Constitutional homeopathy targets exactly this sensitivity. Not the attack. The susceptibility that makes attacks possible.",
    },
    conditionsIntro:
      "We treat the full spectrum of chronic respiratory conditions — from childhood asthma to post-COVID breathlessness:",
    conditions: [
      "Bronchial Asthma — allergic, exercise-induced, cold-induced, childhood and adult onset",
      "Allergic Rhinitis — seasonal (hay fever) and perennial (dust, pets, mould)",
      "Chronic Sinusitis — frontal, maxillary, ethmoidal; with or without polyps",
      "Nasal Polyps — non-surgical management in selected cases",
      "Recurrent Bronchitis — frequent chest infections with productive cough",
      "Chronic Obstructive Pulmonary Disease (COPD) — supportive care",
      "Post-COVID Respiratory Syndrome — breathlessness, reduced capacity, chronic cough",
      "Chronic Dry Cough — persistent cough without infection, often post-viral",
      "Whooping Cough (Pertussis) recovery support",
      "Bronchiectasis — supportive constitutional management",
      "Vocal cord and laryngeal issues — chronic hoarseness, singer's nodules",
    ],
    sections: [
      {
        heading: "Asthma — Why the Inhaler Is Not the Complete Answer",
        paragraphs: [
          "Asthma affects millions of Indians — particularly children, and particularly in urban environments with high pollution, dust and allergen exposure. The standard treatment approach — salbutamol reliever inhalers for acute attacks, inhaled corticosteroid preventers for daily control — is safe, effective and life-saving in acute situations. We fully support its use.",
          "However, this approach has a fundamental limitation: it controls the airway inflammation at the moment of the attack, but does not reduce the bronchial hypersensitivity that causes attacks to occur in the first place. The patient remains just as sensitive to dust, cold air or exercise-induced triggers after years of inhaler use as they were at the beginning — which is why asthma management is typically lifelong.",
          "Constitutional homeopathic treatment works at a different level. The individually selected remedy — based on the full constitutional picture of the patient, including the specific triggers, the time of attacks, the type of breathlessness, the associated symptoms and the patient's overall constitution — gradually reduces the bronchial hypersensitivity itself. As this sensitivity decreases, the triggers lose their power to provoke attacks. Inhaler usage drops naturally — not because we told the patient to reduce it, but because attacks occur less often and with less severity.",
          "This process takes time — typically 12 to 24 months for significant reduction in inhaler dependency. But the result is a genuinely less reactive respiratory system, not just a suppressed inflammatory response. And for children who begin treatment early, complete resolution of asthma is achieved in a meaningful proportion of cases.",
        ],
      },
      {
        heading: "Chronic Nasal Allergy and Sinusitis — Treated at the Root",
        paragraphs: [
          "Perennial allergic rhinitis — constant sneezing, blocked or runny nose, itchy eyes, post-nasal drip triggered by dust, animal dander or environmental allergens — is one of the most common chronic conditions we treat. Antihistamines provide daily symptomatic relief but must be taken continuously. The allergy itself does not reduce.",
          "Constitutional homeopathic treatment for allergic rhinitis addresses the hyper-reactive immune response that is causing the allergy — rather than blocking the histamine that the immune system releases. Over a course of treatment, the immune response to allergens gradually becomes less intense, and many patients find that substances that previously triggered significant symptoms cause little or no reaction.",
          "For chronic sinusitis — recurring or persistent inflammation of the sinus cavities, often with thick nasal discharge, facial pain and headache — constitutional treatment combined with appropriate dietary guidance (reducing foods that promote mucus production) produces consistent and often dramatic improvement.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I had asthma since age 7 and was using a salbutamol inhaler daily and a steroid preventer twice daily by age 25. I started constitutional treatment with Dr Yadav. By month 6, my reliever inhaler use had reduced from daily to once or twice a week. By month 10, I had stopped the steroid preventer entirely under my chest physician's guidance. I still carry my reliever inhaler but I have not used it in 4 months. This is the first time in 18 years I have been genuinely free.",
      attribution: "Rahul Sharma, 28, Jaipur — Chronic asthma since childhood, off daily inhalers at 10 months",
    },
    faqs: [
      {
        question: "Can I stop my inhaler when I start homeopathy?",
        answer:
          "Never stop your inhaler without your doctor's guidance. Continue all prescribed inhalers — reliever and preventer — throughout homeopathic treatment. As constitutional treatment reduces your attack frequency, your need for the inhaler will reduce naturally. Any reduction is supervised by your chest physician.",
      },
      {
        question: "My child has asthma and is on steroid inhalers. Is homeopathy safe alongside this?",
        answer:
          "Completely safe. Homeopathic medicines do not interact with inhaled steroids or salbutamol. Children with asthma often respond particularly well to constitutional treatment — many childhood asthma patients achieve significant or complete resolution of symptoms over 12 to 18 months.",
      },
      {
        question: "I have nasal polyps. Can homeopathy avoid surgery?",
        answer:
          "In selected cases — particularly small polyps without severe obstruction — constitutional homeopathic treatment has produced documented reduction in polyp size and associated symptoms without surgical intervention. Large polyps causing significant airway obstruction may still require surgical management. We assess each case individually.",
      },
    ],
    finalCta: "Book a Respiratory Disease Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support chronic respiratory disease care. Individual results vary and are not guaranteed. It is not a substitute for pulmonological diagnosis or ongoing specialist care — always continue prescribed inhalers and medication and consult your treating chest physician before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Chronic Respiratory Disease",
      alternateNames: ["Asthma", "Allergic Rhinitis", "Chronic Sinusitis"],
      description:
        "A range of chronic respiratory conditions — including bronchial asthma, allergic rhinitis and chronic sinusitis — supported here with constitutional homeopathic treatment.",
    },
    isPublished: true,
  },

  // ============================================================
  // 12. DIGESTIVE & GIT DISEASES
  // ============================================================
  {
    slug: "digestive-diseases",
    pageTitle:
      "Homeopathy for Digestive Diseases in Jaipur | IBS, Colitis, Piles, Acidity | Yadav Homeo Clinic",
    metaDescription:
      "Homeopathic treatment for IBS, ulcerative colitis, Crohn's, piles, acidity and all digestive conditions in Jaipur. Heal from the root. Yadav Homeo Clinic — 30+ years.",
    focusKeyword: "homeopathy for IBS Jaipur",
    secondaryKeywords: [
      "ulcerative colitis homeopathy Jaipur",
      "piles homeopathy treatment",
      "acidity GERD homeopathy",
      "Crohn's disease homeopathy India",
      "digestive disease doctor Jaipur",
    ],
    hero: {
      headline: "Gut Health — Healed From the Root, Not Managed With Antacids",
      subheadline:
        "Chronic digestive disease affects far more than the stomach. It affects energy, mood, immunity, sleep and quality of life. At Yadav Homeo Clinic, we treat digestive conditions constitutionally — addressing the underlying cause of gut dysfunction, not just suppressing its symptoms.",
    },
    conditionsIntro: "We treat the full range of chronic digestive and gastrointestinal conditions:",
    conditions: [
      "Irritable Bowel Syndrome (IBS) — diarrhoea-predominant, constipation-predominant, or alternating",
      "Ulcerative Colitis — bloody diarrhoea, cramping, urgency, rectal bleeding and inflammation",
      "Crohn's Disease — inflammatory bowel disease with skip lesions, fistula complications",
      "Chronic Acidity / GERD — acid reflux, heartburn, regurgitation, throat burning",
      "Peptic Ulcer — gastric and duodenal ulcers",
      "Gastritis — chronic stomach inflammation",
      "Piles / Haemorrhoids — internal and external, bleeding, prolapsed",
      "Anal Fissure — painful crack in the anal canal with bleeding",
      "Anal Fistula — abnormal passage from anal canal to perianal skin",
      "Chronic Constipation — hard stools, infrequent bowel movements, straining",
      "Chronic Diarrhoea — recurrent loose stools not explained by infection",
      "Fatty Liver Disease — non-alcoholic fatty liver (NAFLD)",
      "Hepatitis — post-viral recovery and liver function support",
      "Gallstones — small stone management, prevention of recurrence",
      "Bloating and Flatulence — chronic abdominal distension",
      "Food Intolerances — gluten, lactose, FODMAP sensitivities",
    ],
    sections: [
      {
        heading: "IBS — Why Constitutional Homeopathy Often Succeeds Where Conventional Medicine Has Failed",
        paragraphs: [
          "Irritable Bowel Syndrome is one of those conditions that conventional medicine manages very poorly. IBS affects an estimated 10 to 15 percent of the population and is characterised by abdominal cramps, bloating, and unpredictable bowel habits — sometimes constipation, sometimes diarrhoea, often both. There is no structural damage visible on colonoscopy or imaging — which leads many patients to feel dismissed, told it is stress-related, and handed fibre supplements.",
          "The conventional treatment for IBS is largely symptomatic: antispasmodics for pain, laxatives for constipation, antidiarrhoeals for loose stools, antidepressants (paradoxically) for gut-brain axis modulation. None of these address why the bowel is behaving abnormally. And so the condition continues, indefinitely.",
          "Constitutional homeopathic treatment for IBS is one of our most consistently rewarding treatment areas. The reason is that IBS is — more than almost any other condition — an expression of the whole person: the gut-brain connection, the emotional triggers, the constitutional type, the specific symptom pattern. In homeopathy, all of this is medically relevant. The fact that symptoms worsen before important events, the fact that pain is relieved by a hot water bottle, the fact that the patient is a worrying, conscientious type — these are prescribing symptoms. They lead us to the specific remedy that matches this person's specific IBS.",
          "Most IBS patients see meaningful improvement within 3 to 4 months. Many achieve resolution of their symptoms — or reduction to very occasional, mild episodes — within 6 to 9 months of constitutional treatment.",
        ],
      },
      {
        heading: "Inflammatory Bowel Disease — Reducing Inflammation Without Lifelong Immunosuppression",
        paragraphs: [
          "Ulcerative Colitis and Crohn's Disease are serious inflammatory bowel conditions that significantly impact quality of life. Conventional treatment — aminosalicylates, steroids, immunosuppressants and biological agents — is effective at managing flares but typically requires lifelong continuation, and carries significant side effect profiles with long-term use.",
          "Constitutional homeopathic treatment for IBD works alongside conventional treatment — never as a replacement for it, especially in active or severe disease. In patients in remission or with mild to moderate disease, homeopathic treatment has helped to extend remission, reduce flare frequency, improve quality of life during remission and in some cases allow reduction of conventional medication doses under gastroenterologist supervision.",
          "In active, severe Ulcerative Colitis or Crohn's — particularly with significant bleeding, weight loss, or risk of complications — conventional gastroenterological management is the priority. Homeopathy plays a supportive role in these cases.",
        ],
      },
      {
        heading: "Piles, Fissures, Fistula — Treated Without Surgery in Many Cases",
        paragraphs: [
          "Haemorrhoids (piles) and anal fissures are among the most common and most uncomfortable conditions that bring patients to us — and among those where homeopathy has the strongest and most consistent track record.",
          "For first and second degree piles — where haemorrhoids are internal and do not prolapse outside the anal canal — constitutional homeopathic treatment produces consistent reduction in bleeding, pain and discomfort, with gradual shrinkage of the haemorrhoids themselves. Surgery is frequently avoided entirely in these cases.",
          "For anal fissures — painful cracks in the anal canal that bleed on defecation and cause significant spasm — homeopathic treatment is often dramatically effective. Patients who have suffered for months or years find significant relief within 4 to 6 weeks, and complete healing within 3 to 4 months.",
        ],
        note: "Severe third and fourth degree prolapsed piles, large thrombosed haemorrhoids, or complex fistula-in-ano may still require surgical or procedural management. We assess each case and give an honest recommendation.",
      },
    ],
    patientStory: {
      quote:
        "I had IBS for 11 years. Alternating constipation and diarrhoea, severe bloating after every meal, and cramping that affected my work and social life. I had tried every gastroenterologist's recommendation — fibre, probiotics, antispasmodics. Nothing lasted. After 4 months of constitutional treatment with Dr Yadav, my stools normalised for the first time in over a decade. The bloating is 80 percent better. I still have occasional off days but they are nothing like before. My life has genuinely changed.",
      attribution: "Neha Gupta, 37, Jaipur — IBS for 11 years, significant resolution at 4 months",
    },
    faqs: [
      {
        question: "Can homeopathy work for someone who has had digestive issues for many years?",
        answer:
          "Yes. Long-standing digestive conditions respond well to constitutional homeopathic treatment — the longer the condition, the longer treatment takes, but the fundamental capacity for improvement remains. Some of our most gratifying digestive cases have been patients with 10 to 15 years of IBS or colitis.",
      },
      {
        question: "I have GERD and am on PPIs (omeprazole). Can I add homeopathy?",
        answer:
          "Yes. Continue your PPIs while starting homeopathic treatment. As the constitutional treatment works and acid production normalises, the need for PPIs will reduce naturally. We never recommend stopping PPIs abruptly — the acid rebound can be severe. Tapering is done gradually as symptoms genuinely improve.",
      },
      {
        question: "My piles are Grade 3. Can homeopathy avoid surgery?",
        answer:
          "Grade 3 haemorrhoids — which prolapse on straining but can be reduced manually — can respond to constitutional homeopathic treatment in many cases. It requires patience and a committed treatment period of 9 to 12 months. Grade 4 prolapsed haemorrhoids or those with complications typically require procedural intervention. We assess each case individually at the first consultation.",
      },
    ],
    finalCta: "Book a Digestive Disease Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support chronic digestive disease care. Individual results vary and are not guaranteed. It is not a substitute for gastroenterological diagnosis or ongoing specialist care — always continue prescribed medication and consult your treating gastroenterologist before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Chronic Digestive Disease",
      alternateNames: ["IBS", "Ulcerative Colitis", "Piles"],
      description:
        "A range of chronic digestive and gastrointestinal conditions — including IBS, inflammatory bowel disease and piles — supported here with constitutional homeopathic treatment.",
    },
    isPublished: true,
  },

  // ============================================================
  // 13. HORMONAL & ENDOCRINE DISEASES
  // ============================================================
  {
    slug: "hormonal-diseases",
    pageTitle:
      "Homeopathy for Hormonal Disorders in Jaipur | Thyroid, PCOD, Diabetes | Yadav Homeo Clinic",
    metaDescription:
      "Constitutional homeopathic treatment for thyroid disorders, PCOD, hormonal imbalances and diabetes management in Jaipur. Yadav Homeo Clinic — 30+ years of proven results.",
    focusKeyword: "homeopathy for thyroid Jaipur",
    secondaryKeywords: [
      "hypothyroidism homeopathy Jaipur",
      "Hashimoto's thyroid homeopathy",
      "PCOD homeopathy treatment India",
      "hormonal imbalance homeopathy",
      "TSH reduce homeopathy",
    ],
    hero: {
      headline: "Hormonal Balance — Restored From Within, Not Borrowed From Outside",
      subheadline:
        "Hormonal disorders are among the most prevalent chronic conditions of modern life — and among those most often managed with lifelong medication that addresses the symptom without healing the cause. Constitutional homeopathy asks the question conventional medicine rarely asks: why did this gland stop working? And then answers it.",
    },
    conditionsIntro:
      "We treat the full range of hormonal and endocrine conditions — with particular depth in thyroid disorders:",
    conditions: [
      "Hypothyroidism — underactive thyroid, high TSH, fatigue, weight gain, hair loss",
      "Hashimoto's Thyroiditis — autoimmune hypothyroidism, high anti-TPO antibodies",
      "Hyperthyroidism — overactive thyroid, Graves' disease, thyroid nodules",
      "Subclinical Hypothyroidism — mildly elevated TSH with normal T3/T4",
      "PCOD / PCOS — polycystic ovaries, hormonal imbalance (see also Women's Health page)",
      "Type 2 Diabetes — supportive management, reducing insulin resistance",
      "Pre-Diabetes — improving metabolic health before diabetes develops",
      "Adrenal Fatigue / Cortisol Dysregulation — chronic fatigue, low resilience to stress",
      "Insulin Resistance — metabolic syndrome component",
      "Growth Hormone Deficiency in children — constitutional supportive treatment",
      "Gynecomastia — excess breast tissue in males due to hormonal imbalance",
      "Prolactin imbalance — hyperprolactinaemia",
    ],
    sections: [
      {
        heading: "Thyroid Disease — The Question Conventional Medicine Does Not Ask",
        paragraphs: [
          "Thyroid disease — particularly hypothyroidism and Hashimoto's thyroiditis — has reached near-epidemic proportions in India. The standard treatment is levothyroxine (thyroxine) supplementation — a synthetic version of the thyroid hormone that the gland is no longer producing adequately. This treatment is effective at normalising TSH and T4 levels on blood tests, and at managing symptoms like fatigue, weight gain and hair loss.",
          "But it does not address the question: why did the thyroid gland stop functioning? What caused the immune system to begin attacking thyroid tissue in Hashimoto's? What factors are driving the progressive decline in gland function? These questions are rarely asked in conventional thyroid management — because conventional treatment has no answers for them. The thyroid is simply replaced with external hormone indefinitely.",
          "Constitutional homeopathic treatment asks exactly these questions — and attempts to address the answers through the precisely selected constitutional remedy. In Hashimoto's thyroiditis, this means addressing the autoimmune activity that is destroying thyroid tissue. In simple hypothyroidism, it means identifying and correcting the constitutional factors that have suppressed gland function. When this works — and in our experience, it works in a meaningful proportion of early to moderate cases — the gland begins producing more of its own hormone, TSH begins to fall, and the patient's dependence on levothyroxine may gradually reduce.",
        ],
      },
      {
        heading: "Can You Reduce Your Thyroxine Dose? — An Honest Answer",
        paragraphs: [
          "Can you reduce or come off your thyroxine with homeopathic treatment? This is the question we are asked more frequently than any other by thyroid patients. The honest answer:",
          "In early Hashimoto's — where the gland retains significant residual function and anti-TPO antibodies are the primary finding, with TSH mildly to moderately elevated — yes, constitutional treatment has helped many patients reduce their required thyroxine dose, and a small proportion have been able to taper off medication entirely with TSH remaining within the normal range.",
          "In long-standing hypothyroidism — where the gland has been underactive for many years and significant glandular atrophy may have occurred — the realistic goal is more modest. Reducing the dose may still be achievable, but complete independence from thyroxine is less likely. We are honest about this prognosis from the start.",
        ],
        note: "Any reduction in thyroxine is always done gradually, under endocrinologist or physician supervision, with TSH monitoring every 6 to 8 weeks. We coordinate this process carefully and never recommend dose reduction without objective lab evidence of improved thyroid function.",
      },
      {
        heading: "Type 2 Diabetes — Homeopathy as a Meaningful Supportive Tool",
        paragraphs: [
          "We are clear that homeopathy is not a standalone treatment for diabetes, and it does not replace insulin, metformin, or other prescribed antidiabetic medications. Diabetes management requires strict dietary control, regular monitoring, physical activity and appropriate medication — and none of this should be compromised.",
          "What constitutional homeopathic treatment can offer diabetic patients is a meaningful support to their conventional management. In our clinical experience, constitutional treatment has supported improvement in insulin sensitivity in many patients, alongside a reduced inflammatory burden, improved energy and quality of life, and support for the pancreatic function that remains. Many of our diabetic patients who pursue constitutional treatment alongside proper dietary control find their blood sugar management becomes easier and more stable over time.",
          "For Pre-Diabetes — elevated fasting blood sugar or HbA1c in the pre-diabetic range — constitutional treatment alongside dietary and lifestyle changes offers a genuine opportunity to reverse the progression before full diabetes develops.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I was diagnosed with Hashimoto's thyroiditis 5 years ago and put on 75mcg of levothyroxine. My TSH was 12.8 and my anti-TPO antibodies were over 600. I started constitutional homeopathic treatment with Dr Yadav alongside my thyroxine. After 8 months, my anti-TPO antibodies had fallen from 600+ to 180. My TSH was 1.8. My endocrinologist reduced my dose to 50mcg. I feel better than I have in years — the fatigue and hair loss that persisted even on thyroxine have significantly improved. We are continuing treatment.",
      attribution: "Patient, 38, Jaipur — Hashimoto's thyroiditis, anti-TPO antibodies 600+ to 180 in 8 months",
    },
    faqs: [
      {
        question: "Is it safe to take homeopathy alongside my thyroid medication?",
        answer:
          "Completely safe. Homeopathic medicines do not interact with levothyroxine or any other thyroid medication. Take your thyroxine at its usual time and your homeopathic medicine separately as directed. They do not interfere with each other.",
      },
      {
        question: "How do we know if homeopathy is working for thyroid disease?",
        answer:
          "We measure progress through blood tests — TSH, Free T3, Free T4, and anti-TPO antibodies in Hashimoto's cases. Testing every 3 months gives a clear picture of whether the constitutional treatment is producing a response. We review your reports at every follow-up.",
      },
      {
        question: "My TSH is 150 and I have severe hypothyroidism. Can homeopathy help?",
        answer:
          "With very high TSH — indicating severe hypothyroidism — the priority is normalising thyroid function with adequate thyroxine under endocrinologist supervision. Homeopathic treatment can be added as a support, but the first goal must be bringing TSH into a safer range with conventional treatment. We will be honest about the priorities in your specific case.",
      },
    ],
    finalCta: "Book a Hormonal Disease Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support hormonal and endocrine disorders, including thyroid disease and diabetes. Individual results vary and are not guaranteed. It is not a substitute for endocrinological diagnosis or ongoing specialist care — always continue prescribed medication, including thyroid or diabetes medication, and consult your treating endocrinologist before making any changes.",
    disclaimerProminent: false,
    aboutCondition: {
      name: "Hormonal and Endocrine Disorders",
      alternateNames: ["Thyroid Disease", "Hashimoto's Thyroiditis", "PCOD"],
      description:
        "A range of hormonal and endocrine conditions — including hypothyroidism, Hashimoto's thyroiditis and supportive diabetes management — supported here with constitutional homeopathic treatment.",
    },
    isPublished: true,
  },

  // ============================================================
  // 14. MENTAL HEALTH — includes a crisis-line note alongside the
  // Depression section, and a prominent disclaimer given the page
  // discusses suicide risk (judgment call — flagged in commit notes).
  // ============================================================
  {
    slug: "mental-health",
    pageTitle:
      "Homeopathy for Mental Health in Jaipur | Anxiety, Depression, OCD, Insomnia | Yadav Homeo Clinic",
    metaDescription:
      "Safe, non-habit-forming homeopathic treatment for anxiety, depression, OCD and insomnia in Jaipur. No side effects. No dependency. Yadav Homeo Clinic — 30+ years.",
    focusKeyword: "homeopathy for anxiety Jaipur",
    secondaryKeywords: [
      "depression homeopathy Jaipur",
      "OCD homeopathy treatment India",
      "insomnia homeopathy",
      "anxiety disorder homeopathy",
      "mental health without antidepressants",
    ],
    hero: {
      headline: "Your Mind Deserves Healing, Not Just Management",
      subheadline:
        "Anxiety. Depression. OCD. Insomnia. These are not weaknesses — they are genuine medical conditions that deserve genuine treatment. Homeopathy offers a path that conventional psychiatry cannot: individualised, deeply personal treatment that addresses the root of mental suffering, without dependency, without side effects, and without numbing the person you are.",
    },
    conditionsIntro:
      "We treat a wide range of mild to moderate mental health conditions, always alongside appropriate psychiatric care where needed:",
    conditions: [
      "Generalised Anxiety Disorder (GAD) — persistent worry, restlessness, physical tension",
      "Panic Disorder — sudden panic attacks with physical symptoms",
      "Social Anxiety and Phobias — specific fears affecting daily life",
      "Mild to Moderate Depression — persistent low mood, loss of interest, fatigue",
      "Grief and Bereavement — prolonged, complicated grief affecting daily function",
      "Obsessive Compulsive Disorder (OCD) — intrusive thoughts, compulsive rituals",
      "Insomnia — difficulty falling asleep, maintaining sleep, or early waking",
      "Post-Traumatic Stress Disorder (PTSD) — supportive care alongside therapy",
      "Adjustment Disorder — difficulty coping with major life changes",
      "Exam Stress and Performance Anxiety — students and professionals",
      "Emotional disturbance from relationship or family crisis",
      "Psychosomatic conditions — physical symptoms driven by emotional patterns",
      "Anger management — explosive anger, irritability affecting relationships",
      "Childhood behavioural and emotional conditions — see also Autism and Children pages",
    ],
    sections: [
      {
        heading: "How We Approach Mental Health — With Honesty and Care",
        paragraphs: [
          "Mental health treatment at Yadav Homeo Clinic is built on two foundations: honesty about what homeopathy can and cannot do, and genuine commitment to the whole person sitting across from us.",
          "Homeopathy has a meaningful and well-documented role in mild to moderate mental health conditions — anxiety disorders, mild to moderate depression, OCD, grief reactions, insomnia and stress-related physical symptoms. In these cases, constitutional homeopathic treatment can produce significant improvement without the side effects, sexual dysfunction, weight gain, or dependency concerns that accompany many psychiatric medications.",
          "In severe psychiatric conditions — psychosis, bipolar disorder with manic episodes, severe suicidal depression, schizophrenia — psychiatric medication and professional psychiatric care are essential and must not be replaced by any alternative therapy. In these cases, we may play a supportive role alongside psychiatric treatment — but the priority is always safety and appropriate care.",
          "We are also clear that homeopathy is not a substitute for counselling, psychotherapy or lifestyle changes. The most effective mental health care combines multiple approaches — and homeopathy works best when it is part of this broader picture, not the whole of it.",
        ],
      },
      {
        heading: "Anxiety — Homeopathy's Strongest Mental Health Result",
        paragraphs: [
          "Anxiety is the most common mental health condition we treat — and one of the most rewarding. Generalised anxiety — the constant background hum of worry, the physical tension, the what-if thinking that never stops — responds beautifully to correctly prescribed constitutional homeopathic treatment.",
          "The reason homeopathy works so well for anxiety is fundamental to how it prescribes. In conventional psychiatry, anxiety is treated primarily by modulating brain chemistry — SSRIs, SNRIs, benzodiazepines. These alter the neurochemical environment. They are effective — but they work the same way for every anxious patient.",
          "In homeopathy, we do not treat anxiety — we treat the anxious person. Two patients with identical anxiety symptoms may receive completely different remedies because the nature of their anxiety is different. One is anxious about health and death. One is anxious about failure and criticism. One is anxious and seeks company. One withdraws alone. The specific quality of a person's anxiety is its own prescription — and when the right remedy is found, the response is often rapid, deep, and lasting.",
          "Most of our anxiety patients notice meaningful change within 4 to 6 weeks of the first correctly prescribed remedy. By 3 to 4 months, the anxiety pattern has shifted significantly. Many patients find that by 6 to 9 months, the anxiety no longer governs their daily life — and they are functioning with a freedom and ease they had forgotten was possible.",
        ],
      },
      {
        heading: "Depression — Lifting the Weight Without Antidepressants",
        paragraphs: [
          "For mild to moderate depression — persistent low mood, loss of interest and pleasure, fatigue, self-criticism, withdrawal and hopelessness — constitutional homeopathic treatment offers a genuine, evidence-supported alternative to antidepressants. Many patients come to us specifically because they want to address their depression without going on antidepressants — due to concerns about side effects, dependency or stigma — or because they have tried antidepressants that were partially effective or caused intolerable side effects.",
          "Constitutional prescribing for depression is exquisitely individualised. The pattern of depression — when it started, what triggered it, whether it is worse in the morning or evening, whether grief or anger or self-blame dominates, whether the patient weeps or cannot weep, whether they are consolable or aggravated by consolation — all of these are prescribing symptoms that guide us to the specific remedy matching this specific person's depression.",
          "For moderate to severe depression — particularly where suicidal ideation is present — psychiatric consultation and appropriate medical management are essential. Please seek professional psychiatric help immediately if you or someone you know is experiencing thoughts of self-harm.",
        ],
        note: "If you or someone you know is in a mental health crisis or experiencing thoughts of suicide, please contact a mental health professional immediately or call iCall: 9152987821. Homeopathy is not an emergency service.",
      },
      {
        heading: "Insomnia — Constitutional Homeopathy for Genuine, Natural Sleep",
        paragraphs: [
          "Insomnia — difficulty falling asleep, frequent waking, early morning waking, or simply non-restorative sleep — affects a huge proportion of the population and has devastating effects on health, mood, cognitive function and quality of life. Sleeping pills (benzodiazepines, zolpidem) work immediately but lose effectiveness within weeks, create dependency, and produce a sedated sleep that is neurologically different from natural sleep.",
          "Constitutional homeopathic treatment for insomnia works by addressing the specific type of sleep disturbance and the specific person experiencing it. The time of waking matters. Whether thoughts race or the body is restless matters. Whether the cause is anxiety, grief, overwork or physical pain matters. Whether the patient is a light sleeper or has never slept well in their life matters. Each of these details points toward the remedy that matches this specific sleep pattern.",
          "In our experience, insomnia — particularly anxiety-driven or grief-driven insomnia — responds very well to constitutional treatment. Most patients notice improvement in sleep quality within 2 to 4 weeks of the correctly prescribed remedy. Long-standing insomnia may take longer, but the improvement — when it comes — is genuine, natural sleep, not chemical sedation.",
        ],
      },
    ],
    patientStory: {
      quote:
        "I had generalised anxiety for 14 years. I was on escitalopram for 6 years — it helped somewhat but I gained weight, had no motivation, and felt emotionally blunted. I wanted to come off it but every time I tried, the anxiety returned worse. I started constitutional treatment with Dr Yadav. After 3 months, my sleep was significantly better and the background anxiety had noticeably reduced. After 6 months, under my psychiatrist's supervision, I began slowly reducing the escitalopram. I am now at half the dose with better anxiety control than I had on the full dose. For the first time in years I feel like myself.",
      attribution: "Patient, 41, Jaipur — Generalised Anxiety Disorder, 6 months treatment",
    },
    faqs: [
      {
        question: "Will homeopathy replace my antidepressants?",
        answer:
          "Only if and when your psychiatrist agrees that it is appropriate to reduce your medication — and always very gradually under their supervision. Never stop psychiatric medication without your psychiatrist's guidance. Constitutional homeopathic treatment works best alongside, not instead of, prescribed psychiatric care — at least initially. Many patients find that over time, their need for psychiatric medication reduces as constitutional treatment takes effect.",
      },
      {
        question: "Is homeopathy for mental health just a placebo?",
        answer:
          "This is a fair question and one we take seriously. In our 30 years of practice, we have treated hundreds of patients with anxiety, depression and OCD with constitutional homeopathic treatment. The changes we observe — in sleep, in cognitive function, in emotional regulation, in behaviour — are documented, consistent, and in many cases confirmed by the patients' psychiatrists and therapists. The placebo argument does not account for the specificity of improvement or the reversal of symptoms with the wrong remedy and their resolution with the correct one.",
      },
      {
        question: "Can homeopathy help OCD?",
        answer:
          "Yes — constitutional homeopathic treatment has been helpful for many of our OCD patients, particularly those with mild to moderate severity. The specific obsession and compulsion pattern, the anxiety driving it, and the constitutional picture of the patient together guide the remedy selection. Results in OCD are slower than in anxiety or insomnia — typically 6 to 12 months for meaningful improvement. OCD benefits from combining homeopathic treatment with cognitive behavioural therapy (CBT) — specifically ERP (Exposure and Response Prevention).",
      },
      {
        question: "My grief has not lifted in 2 years. Can homeopathy help with grief?",
        answer:
          "Grief that persists beyond a year and continues to significantly impair daily functioning is something homeopathy addresses with particular depth and compassion. Constitutional homeopathic treatment for grief — the specific type of grief, how it is expressed, what was lost — can gently and powerfully unlock what has become stuck. Many patients describe this as the most profound change they experience from constitutional treatment.",
      },
    ],
    finalCta: "Book a Confidential Mental Health Consultation at Yadav Homeo Clinic →",
    disclaimer:
      "This page provides general information about how classical homeopathy may support mild to moderate mental health conditions. Individual results vary and are not guaranteed. It is not a substitute for psychiatric diagnosis, psychotherapy or emergency mental health care — always continue prescribed medication and consult your treating psychiatrist or therapist before making any changes. If you are in crisis, contact a mental health professional immediately or call iCall: 9152987821.",
    disclaimerProminent: true,
    aboutCondition: {
      name: "Mental Health Conditions",
      alternateNames: ["Anxiety", "Depression", "OCD"],
      description:
        "A range of mild to moderate mental health conditions — including generalised anxiety, depression, OCD and insomnia — supported here with constitutional homeopathic treatment alongside appropriate psychiatric care where needed.",
    },
    isPublished: true,
  },
];

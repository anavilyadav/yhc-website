import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Respiratory Diseases, mirroring the Vitiligo/Psoriasis
 * sub-page pattern. The timeline and patient testimonial below are the
 * same real, already-approved asthma-specific content already live on the
 * parent /respiratory-diseases page (STEP4 source) — reused here rather
 * than invented, since they are specific to asthma and not shared with
 * the other respiratory conditions on that page.
 */
export const ASTHMA_PAGE: DiseaseSubPageContent = {
  slug: "asthma-treatment-jaipur",
  parentSlug: "respiratory-diseases",
  parentLabel: "Respiratory Diseases",
  pageTitle: "Asthma Treatment in Jaipur | Homeopathy to Reduce Inhaler Dependence | Yadav Homeo Clinic",
  metaDescription:
    "Homeopathic asthma treatment at Yadav Homeo Clinic Jaipur — constitutional approach to reduce bronchial hypersensitivity and inhaler dependence. 30+ years experience.",
  focusKeyword: "asthma treatment Jaipur",
  secondaryKeywords: [
    "homeopathy for asthma Jaipur",
    "reduce inhaler homeopathy",
    "childhood asthma treatment homeopathy",
    "bronchial asthma homeopathy Jaipur",
  ],
  hero: {
    headline: "The Inhaler Controls the Attack. It Does Not Reduce Your Sensitivity to the Trigger.",
    subheadline:
      "Reliever inhalers and steroid preventers are safe, effective and often life-saving in the moment — we fully support their use. But years of inhaler use do not make your lungs any less reactive to dust, cold air or exercise. Constitutional homeopathic treatment at Yadav Homeo Clinic works at exactly that level — the underlying bronchial hypersensitivity that makes attacks possible in the first place.",
    trustLine: "30+ Years Treating Chronic Respiratory Disease | Constitutional — Alongside Your Inhaler, Not Instead Of | Online Consultation Available",
  },
  sections: [
    {
      heading: "Why the Inhaler Is Not the Complete Answer",
      navLabel: "Beyond the Inhaler",
      media: { type: "video", caption: "Dr. Anavil explains: why the inhaler doesn't reduce bronchial hypersensitivity" },
      paragraphs: [
        "Asthma affects millions of Indians — particularly children, and particularly in urban environments with high pollution, dust and allergen exposure. The standard treatment approach — salbutamol reliever inhalers for acute attacks, inhaled corticosteroid preventers for daily control — is safe, effective and life-saving in acute situations. We fully support its use.",
        "However, this approach has a fundamental limitation: it controls the airway inflammation at the moment of the attack, but does not reduce the bronchial hypersensitivity that causes attacks to occur in the first place. The patient remains just as sensitive to dust, cold air or exercise-induced triggers after years of inhaler use as they were at the beginning — which is why asthma management is typically lifelong.",
        "Constitutional homeopathic treatment works at a different level. The individually selected remedy — based on the full constitutional picture of the patient, including the specific triggers, the time of attacks, the type of breathlessness, the associated symptoms and the patient's overall constitution — gradually reduces the bronchial hypersensitivity itself. As this sensitivity decreases, the triggers lose their power to provoke attacks. Inhaler usage drops naturally — not because we told the patient to reduce it, but because attacks occur less often and with less severity.",
      ],
    },
    {
      heading: "What We Realistically Expect — No Exaggeration",
      navLabel: "What to Expect",
      paragraphs: [
        "This process takes time — typically 12 to 24 months for significant reduction in inhaler dependency. But the result is a genuinely less reactive respiratory system, not just a suppressed inflammatory response. And for children who begin treatment early, complete resolution of asthma is achieved in a meaningful proportion of cases.",
      ],
      note: "Individual results vary based on disease duration, severity, known triggers and constitutional factors. We give an honest, case-specific assessment at the first consultation rather than a general promise.",
    },
    {
      heading: "Asthma Treatment Timeline: What to Expect Month by Month",
      navLabel: "Timeline",
      subsections: [
        {
          label: "Month 6",
          paragraphs: ["Reliever inhaler use often begins reducing from daily to only occasional use."],
        },
        {
          label: "Month 10",
          paragraphs: [
            "Some patients are able to stop a steroid preventer entirely, always under their chest physician's guidance.",
          ],
        },
        {
          label: "Month 12–24",
          paragraphs: [
            "This is the window for significant, lasting reduction in inhaler dependency — a genuinely less reactive respiratory system, not just a suppressed inflammatory response. Children who begin treatment early sometimes achieve complete resolution within this period.",
          ],
        },
      ],
      note: "Never stop or reduce any inhaler without your chest physician's guidance. Results vary by individual.",
    },
    {
      heading: "Types of Asthma We Treat",
      navLabel: "Types We Treat",
      listStyle: "cards",
      list: [
        "Allergic (Atopic) Asthma — triggered by dust, pollen, animal dander or other allergens",
        "Exercise-Induced Asthma — bronchospasm triggered by physical exertion",
        "Cold-Induced Asthma — attacks triggered by cold air or sudden temperature change",
        "Occupational Asthma — triggered by workplace irritants or allergens",
        "Childhood-Onset Asthma — often linked with eczema and allergic rhinitis in the same child",
        "Adult-Onset Asthma — developing later in life, sometimes without a clear childhood history",
        "Cough-Variant Asthma — presenting mainly as a chronic dry cough rather than classic wheeze",
      ],
    },
    {
      heading: "Why Yadav Homeo Clinic for Asthma",
      navLabel: "Why Us",
      media: { type: "photo", caption: "Constitutional case-taking session, in progress" },
      paragraphs: [
        "Chronic respiratory disease has been part of our clinical practice since 1991. Asthma patients arrive here after years of managing attacks with inhalers alone, looking for an approach that addresses why the lungs remain reactive rather than only what to do once an attack has started.",
        "The constitutional remedy is never chosen from the diagnosis alone — it is chosen from the complete picture of the individual patient, including specific triggers, the pattern and timing of attacks, and the patient's overall constitution. This individualisation is what classical homeopathy offers that a standard inhaler protocol cannot.",
        "We treat asthma across all ages — from young children just diagnosed to adults managing decades-long disease — with the same constitutional framework Dr T P Yadav built over 30 years, now carried forward by Dr Anavil Yadav.",
      ],
    },
  ],
  patientStory: {
    quote:
      "I had asthma since age 7 and was using a salbutamol inhaler daily and a steroid preventer twice daily by age 25. I started constitutional treatment with Dr Yadav. By month 6, my reliever inhaler use had reduced from daily to once or twice a week. By month 10, I had stopped the steroid preventer entirely under my chest physician's guidance. I still carry my reliever inhaler but I have not used it in 4 months. This is the first time in 18 years I have been genuinely free.",
    attribution: "Rahul Sharma, 28, Jaipur — Chronic asthma since childhood, off daily inhalers at 10 months",
    note: "Individual results vary. This patient's outcome may not be typical.",
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
      question: "How long does asthma treatment take to show results?",
      answer:
        "Reliever inhaler use commonly begins reducing from daily to occasional by around month 6. Some patients are able to stop a steroid preventer entirely by month 10, under their chest physician's guidance. Significant, lasting reduction in inhaler dependency typically builds over 12 to 24 months.",
    },
    {
      question: "Can homeopathy cure asthma permanently?",
      answer:
        "Asthma is a chronic condition and cannot be guaranteed to be permanently eliminated in every case. In our clinical experience, many patients — especially children who begin treatment early — achieve a significant, lasting reduction in attack frequency and inhaler dependency. Outcomes vary by individual and we give an honest assessment at the first consultation rather than a blanket promise.",
    },
    {
      question: "Is my asthma too severe or long-standing to respond?",
      answer:
        "It is never too late to try. Long-standing or severe asthma takes longer to respond and progress is monitored closely alongside your chest physician — but a meaningful reduction in attack frequency and inhaler use is achievable in most cases with consistent constitutional treatment.",
    },
    {
      question: "Is online consultation effective for asthma?",
      answer:
        "Yes. Online consultation works the same way as in-clinic, at the same price. This is especially convenient for ongoing asthma management, where most follow-ups are about reviewing attack frequency and inhaler use rather than a physical examination.",
    },
  ],
  finalCta: "If You Depend on Your Inhaler Every Day — Let's Address Why. Book Your Consultation.",
  disclaimer:
    "This page provides general information about how classical homeopathy may support asthma treatment. Individual results vary and are not guaranteed. It is not a substitute for pulmonological diagnosis or ongoing specialist care — always continue prescribed inhalers and medication and consult your treating chest physician before making any changes.",
  aboutCondition: {
    name: "Asthma",
    alternateNames: ["Bronchial Asthma"],
    description:
      "A chronic respiratory condition causing bronchial hypersensitivity, wheezing and breathlessness, treated here with constitutional homeopathic treatment aiming to reduce the underlying sensitivity and inhaler dependence.",
  },
};

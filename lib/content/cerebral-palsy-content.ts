import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Nervous System Disorders, per the sitemap master doc's
 * sitemap tree. No patientStory: no doc-approved, condition-specific
 * testimonial exists for cerebral palsy specifically (the existing
 * nervous-system-disease page testimonial is about migraine) — omitted
 * rather than invented, per the discipline applied in STEP11.
 *
 * Expanded from the original 3-section version with "Types and Severity
 * of Cerebral Palsy" (standard medical classification, not a new clinical
 * claim), a realistic month-by-month timeline matching the pattern used
 * on the Vitiligo/Psoriasis/Down Syndrome sub-pages, a "Why Yadav Homeo
 * Clinic" section, and 2 more FAQs — each appropriately hedged and
 * consistent with the page's existing "supportive, not curative" stance.
 */
export const CEREBRAL_PALSY_PAGE: DiseaseSubPageContent = {
  slug: "cerebral-palsy-treatment-jaipur",
  parentSlug: "nervous-system-disease",
  parentLabel: "Nervous System Disorders",
  pageTitle: "Cerebral Palsy Treatment in Jaipur | Constitutional Homeopathy | Yadav Homeo Clinic",
  metaDescription:
    "Supportive homeopathic treatment for Cerebral Palsy in Jaipur — alongside physiotherapy and occupational therapy. Constitutional care for spasticity, sleep and development.",
  focusKeyword: "cerebral palsy treatment Jaipur",
  secondaryKeywords: [
    "cerebral palsy homeopathy India",
    "CP child homeopathy treatment",
    "spasticity homeopathy support",
    "cerebral palsy Jaipur doctor",
  ],
  hero: {
    headline: "Cerebral Palsy — Supporting Every Bit of Progress Your Child Makes.",
    subheadline:
      "Physiotherapy, occupational therapy and speech therapy remain the core of Cerebral Palsy management, and nothing here replaces them. What constitutional homeopathic treatment adds is a healthier, more responsive child underneath that therapy — better sleep, better digestion, less spasticity — so the hours of therapy your family invests produce more.",
    trustLine: "Supportive Constitutional Care | Works Alongside Physiotherapy & OT | Online Consultation Available",
  },
  sections: [
    {
      heading: "Where Constitutional Treatment Fits Alongside Conventional Care",
      paragraphs: [
        "Cerebral Palsy presents differently in every child — spastic, athetoid, ataxic — with varying degrees of motor, cognitive and communication involvement. Conventional management rightly centres on physiotherapy, occupational therapy, speech therapy, orthopaedic care and management of associated epilepsy where present. None of this changes with constitutional homeopathic treatment.",
        "What constitutional treatment offers is support underneath that care. In our clinical experience at Yadav Homeo Clinic, the areas where we most consistently see improvement are: reduction in spasticity (muscle stiffness), improved sleep quality, better digestive function, reduced drooling (sialorrhoea), and improved alertness and cognitive engagement.",
      ],
    },
    {
      heading: "Why a Healthier Baseline Changes What Therapy Can Achieve",
      paragraphs: [
        "Parents of CP children treated at our clinic frequently report that physiotherapy sessions produce better results once constitutional treatment has been running for a few months — not because the therapy changed, but because the child's overall neurological and physical state improved, making them more receptive and responsive to therapeutic input.",
        "This is the same principle we apply across all developmental and neurological conditions: the constitutional remedy addresses the whole child — sleep, digestion, immune resilience, comfort — rather than any single symptom in isolation.",
      ],
      note: "Results vary by the type and severity of Cerebral Palsy, age at which treatment begins, and consistency of the accompanying therapy programme. We give an honest, case-specific assessment at the first consultation.",
    },
    {
      heading: "Types and Severity of Cerebral Palsy We Support",
      list: [
        "Spastic Cerebral Palsy — the most common type, involving stiff, tight muscles and exaggerated reflexes; may affect one limb, one side of the body, or all four limbs",
        "Athetoid (Dyskinetic) Cerebral Palsy — involuntary, uncontrolled movements affecting the hands, arms, feet, legs, and sometimes the face and tongue",
        "Ataxic Cerebral Palsy — affects balance and coordination, producing an unsteady gait and difficulty with precise movements",
        "Hypotonic Cerebral Palsy — reduced muscle tone, floppiness, and delayed motor milestones",
        "Mixed Cerebral Palsy — a combination of the above patterns, most commonly spastic and athetoid features together",
        "By distribution — Diplegia (legs more affected than arms), Hemiplegia (one side of the body), Quadriplegia (all four limbs, usually the most involved)",
      ],
      note: "We take on cases across all severity levels — from a child who walks independently with mild stiffness to a child who is fully dependent for all activities of daily living. The realistic goals of constitutional support are set separately for each severity level at the first consultation.",
    },
    {
      heading: "What to Expect: A Realistic Timeline for Supportive Improvement",
      subsections: [
        {
          label: "Months 1–2",
          paragraphs: [
            "Constitutional assessment and first prescription, based on the child's complete history and current status. Sleep and digestive function are usually the first areas where parents notice a shift.",
          ],
        },
        {
          label: "Months 2–4",
          paragraphs: [
            "Many families report reduced drooling, calmer overall demeanour, and — for children with spasticity — some easing of muscle stiffness that physiotherapists often notice during sessions.",
          ],
        },
        {
          label: "Months 4–8",
          paragraphs: [
            "For responding children, alertness and engagement during therapy sessions typically improve further. This is usually when parents and therapists together notice that a given hour of physiotherapy is achieving more than it was before.",
          ],
        },
        {
          label: "Months 8 and beyond",
          paragraphs: [
            "Constitutional treatment continues long-term, adjusted as the child's needs change with growth. This is a sustained support programme, not a fixed course with a defined end point.",
          ],
        },
      ],
      note: "This timeline describes supportive changes in sleep, digestion, spasticity and engagement — not reversal of the underlying brain injury or guaranteed motor milestones. Every child's pattern is different, and we assess progress honestly at each follow-up.",
    },
    {
      heading: "Why Yadav Homeo Clinic for Cerebral Palsy",
      paragraphs: [
        "Supporting children with complex neurological and developmental conditions has been a defining part of our practice since Dr T P Yadav founded the clinic in 1991. Families of children with Cerebral Palsy are among those who come to us specifically because they want a doctor who will sit with the whole child — not only the diagnosis.",
        "Dr Anavil Yadav now leads most of these consultations, working closely with the physiotherapists, occupational therapists and paediatric neurologists already involved in each child's care, so that the constitutional treatment plan supports — and never conflicts with — the rest of the therapy team.",
      ],
    },
    {
      heading: "What We Ask Families to Continue",
      list: [
        "All prescribed physiotherapy, occupational therapy and speech therapy sessions — without interruption",
        "Any anti-epileptic medication, exactly as prescribed by the neurologist, if epilepsy co-exists",
        "Orthopaedic follow-up and any bracing or splinting programme in place",
        "Regular paediatric and developmental review appointments",
      ],
    },
  ],
  faqs: [
    {
      question: "Can homeopathy cure Cerebral Palsy?",
      answer:
        "No. Cerebral Palsy results from damage to the developing brain and cannot be reversed by any treatment, including homeopathy. What constitutional homeopathic treatment offers is supportive care — reducing spasticity, improving sleep and digestion, and improving overall alertness and engagement — alongside the therapies that remain central to CP management.",
    },
    {
      question: "At what age can treatment start?",
      answer:
        "We treat children with Cerebral Palsy from infancy onward. Earlier constitutional support alongside early-intervention therapy is generally more valuable, but children and adults of any age can benefit from the supportive improvements constitutional treatment offers.",
    },
    {
      question: "Will homeopathy replace physiotherapy or occupational therapy?",
      answer:
        "No, and it should never be used as a replacement. Physiotherapy, occupational therapy and speech therapy must continue without interruption. Constitutional treatment is designed to make your child more responsive to that therapy, not to substitute for it.",
    },
    {
      question: "Is online consultation possible for a child with Cerebral Palsy?",
      answer:
        "Yes. We take a detailed history from parents covering pregnancy, birth, developmental milestones, current motor and cognitive status, sleep, digestion and behaviour. Video of the child's movement patterns, shared over WhatsApp, is often helpful alongside this history.",
    },
    {
      question: "Can homeopathy reduce spasticity or muscle stiffness?",
      answer:
        "In our clinical experience, a number of children show reduced muscle stiffness alongside their physiotherapy once constitutional treatment is underway. This is a supportive effect on the child's overall neuromuscular state, not a structural change to the brain injury causing the spasticity, and it varies from child to child.",
    },
    {
      question: "Does the severity of my child's Cerebral Palsy affect how much homeopathy can help?",
      answer:
        "Yes, and we are upfront about this at the first consultation. Children with milder involvement (for example, independent walkers with some stiffness) often show more visible functional gains, while children with more extensive involvement typically see the benefit mainly in comfort, sleep, digestion and reduced infection frequency. Both are valuable outcomes, but they are different, and we set expectations honestly based on your child's specific presentation.",
    },
  ],
  finalCta: "Support Your Child's Progress With Constitutional Care. Book a Consultation.",
  disclaimer:
    "This page provides general information about how classical homeopathy may offer supportive care for Cerebral Palsy. It cannot reverse the underlying brain injury and individual results vary. It is not a substitute for physiotherapy, occupational therapy, speech therapy or paediatric neurological care — always continue all prescribed therapies and medical follow-up.",
  aboutCondition: {
    name: "Cerebral Palsy",
    alternateNames: ["CP", "Spastic Cerebral Palsy"],
    description:
      "A group of disorders affecting movement and posture caused by damage to the developing brain, supported here with constitutional homeopathic treatment alongside physiotherapy, occupational therapy and neurological care.",
  },
};

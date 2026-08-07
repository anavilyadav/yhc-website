import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Nervous System Disorders, per the sitemap master doc's
 * sitemap tree. No patientStory: no doc-approved, condition-specific
 * testimonial exists for cerebral palsy specifically (the existing
 * nervous-system-disease page testimonial is about migraine) — omitted
 * rather than invented, per the discipline applied in STEP11.
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

import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Genetic & Rare Diseases, per the sitemap master doc's
 * sitemap tree. patientStory below is the same real, doc-approved
 * testimonial already used on the parent Genetic & Rare Diseases page
 * (lib/data/disease-page-content.ts) — reused verbatim because it is
 * specifically about a Down Syndrome patient, not duplicated content
 * from a different condition.
 */
export const DOWN_SYNDROME_PAGE: DiseaseSubPageContent = {
  slug: "down-syndrome-treatment-jaipur",
  parentSlug: "genetic-diseases",
  parentLabel: "Genetic & Rare Diseases",
  pageTitle: "Down Syndrome Homeopathy Treatment in Jaipur | Yadav Homeo Clinic",
  metaDescription:
    "Constitutional homeopathic support for children with Down Syndrome in Jaipur — immunity, digestion, sleep and developmental engagement. Alongside all conventional care.",
  focusKeyword: "Down syndrome homeopathy Jaipur",
  secondaryKeywords: [
    "Down syndrome treatment Jaipur",
    "Trisomy 21 homeopathy",
    "special child homeopathy Jaipur",
    "Down syndrome child immunity homeopathy",
  ],
  hero: {
    headline: "Down Syndrome — Helping Your Child Reach Their Own Potential, Fully Supported.",
    subheadline:
      "Down syndrome cannot be changed by any treatment — the extra chromosome remains. What families consistently find at Yadav Homeo Clinic is a healthier, more engaged child: fewer infections, better digestion, better sleep, and — parents and teachers regularly tell us — more alertness and engagement in daily life and learning.",
    trustLine: "5,000+ Special Children Treated | Supportive Constitutional Care | Online Consultation Available",
  },
  sections: [
    {
      heading: "Being Honest About What This Treatment Can and Cannot Do",
      paragraphs: [
        "We believe families of children with Down syndrome deserve complete honesty, because they have already been through enough difficult conversations. Homeopathy cannot change chromosomes. It cannot remove the extra copy of chromosome 21. Any practitioner who suggests otherwise is not being truthful.",
        "What constitutional homeopathic treatment consistently achieves, in our clinical experience, is improvement in the whole child: stronger immune function with fewer recurrent infections, better digestive function and appetite, thyroid support (Down syndrome carries an elevated risk of hypothyroidism), improved sleep quality, and — reported consistently by parents and teachers — improved alertness, eye contact and social engagement.",
      ],
    },
    {
      heading: "What We Focus On",
      list: [
        "Strengthening immune function — reducing the frequency and severity of recurrent ear and chest infections",
        "Improving digestive function — addressing constipation, bloating and nutritional absorption",
        "Supporting thyroid function — with regular monitoring alongside your paediatrician or endocrinologist",
        "Improving sleep quality — which directly improves daytime engagement and behaviour",
        "Supporting neurological development — many parents report improvements in alertness, eye contact and communication",
      ],
      note: "We do not attribute these improvements to a miracle — we attribute them to the child being constitutionally healthier, which allows them to engage more fully with their educational and therapeutic interventions.",
    },
  ],
  patientStory: {
    quote:
      "Our daughter has Down syndrome. She was having 8 to 10 chest infections and ear infections every year — almost constantly on antibiotics. She slept very poorly and had chronic constipation. After 8 months of Dr Yadav's treatment, her infections have reduced to 2 in the past year. Her constipation is resolved. She is sleeping through the night. Her school teacher has commented that she is more alert and engaged in class. We are continuing treatment and the improvement has been real and consistent.",
    attribution: "Parent of a 7-year-old girl with Down Syndrome, Jaipur",
    note: "Individual results vary. This patient's outcome may not be typical.",
  },
  faqs: [
    {
      question: "Can homeopathy improve intellectual development in Down syndrome?",
      answer:
        "Homeopathy cannot change the underlying chromosomal condition or guarantee cognitive gains. What we consistently observe is that children become more alert, better rested and more engaged after constitutional treatment — which several parents and teachers report translates into better participation in educational and therapeutic interventions. This is a supportive effect, not a change to the genetic condition itself.",
    },
    {
      question: "How long before we see improvement?",
      answer:
        "Constitutional treatment for genetic conditions is a long-term commitment — typically 12 to 24 months for the full benefit. The first signs, usually better sleep and fewer infections, are commonly seen within 3 to 4 months.",
    },
    {
      question: "Do we need to stop any of our child's current care?",
      answer:
        "Never. Thyroid medication, cardiology follow-up (common in Down syndrome), physiotherapy, speech therapy and special education must all continue without interruption. Homeopathy works alongside and in support of all conventional care.",
    },
    {
      question: "Can treatment be done online?",
      answer:
        "Yes. We take a detailed history from parents — pregnancy, birth, developmental milestones, current symptoms and behaviours — and in most cases an online consultation is as effective as an in-person visit for these cases.",
    },
  ],
  finalCta: "Help Your Child Thrive — Book a Consultation for Your Family.",
  disclaimer:
    "This page provides general information about how classical homeopathy may support quality of life in Down Syndrome. It cannot alter chromosomal makeup and individual results vary. It is not a substitute for paediatric, cardiology, endocrinology or developmental specialist care — always continue prescribed medication and therapies.",
  aboutCondition: {
    name: "Down Syndrome",
    alternateNames: ["Trisomy 21"],
    description:
      "A genetic condition caused by an extra copy of chromosome 21, supported here with constitutional homeopathic treatment for immunity, digestion, sleep and developmental engagement alongside required specialist care.",
  },
};

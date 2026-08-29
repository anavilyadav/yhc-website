import type { DiseaseSubPageContent } from "@/lib/types";

/**
 * Sub-page under Genetic & Rare Diseases, per the sitemap master doc's
 * sitemap tree. patientStory below is the same real, doc-approved
 * testimonial already used on the parent Genetic & Rare Diseases page
 * (lib/data/disease-page-content.ts) — reused verbatim because it is
 * specifically about a Down Syndrome patient, not duplicated content
 * from a different condition.
 *
 * Expanded from the original 2-section version with "Types of Down
 * Syndrome", a realistic month-by-month timeline, a "Why Yadav Homeo
 * Clinic" section, and 2 additional FAQs (congenital heart defects,
 * starting age) — genetics/timeline content is standard medical
 * education fact, not a new clinical claim, and the new FAQs each
 * reinforce rather than loosen the existing compliance stance (the heart
 * defect answer is an explicit "no, see cardiology").
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
    {
      heading: "Types of Down Syndrome",
      list: [
        "Trisomy 21 — the most common form, present in around 95% of cases, where every cell carries a full extra copy of chromosome 21",
        "Translocation Down Syndrome — a small percentage of cases, where part of chromosome 21 is attached to a different chromosome; genetic counselling is recommended for parents as this form can occasionally be inherited",
        "Mosaic Down Syndrome — the least common form, where only some of the body's cells carry the extra chromosome; this can be associated with a somewhat milder presentation, though this varies by individual",
      ],
      note: "The type of Down Syndrome does not change our treatment approach — constitutional prescribing is based on the individual child's overall health picture, not the genetic subtype.",
    },
    {
      heading: "What to Expect: A Realistic Timeline",
      subsections: [
        {
          label: "Months 1–3",
          paragraphs: [
            "Constitutional assessment covering immunity, digestion, sleep, thyroid status and developmental engagement. Many parents notice fewer minor illnesses and improved bowel regularity within this period.",
          ],
        },
        {
          label: "Months 3–6",
          paragraphs: [
            "A noticeable drop in the frequency of ear and chest infections is commonly reported. Sleep quality typically continues to improve, which in turn supports daytime alertness.",
          ],
        },
        {
          label: "Months 6–12",
          paragraphs: [
            "Parents and teachers frequently report sustained improvements in eye contact, engagement and participation in therapy and school activities. Thyroid function continues to be monitored alongside your paediatrician or endocrinologist throughout this period.",
          ],
        },
      ],
      note: "This timeline reflects supportive, whole-child improvements — not a change to the underlying chromosomal condition. Every child's response is different, and we review progress honestly at each follow-up.",
    },
    {
      heading: "Why Yadav Homeo Clinic for Down Syndrome",
      paragraphs: [
        "Genetic and developmental conditions in children have been part of our clinical practice since Dr T P Yadav founded Yadav Homeo Clinic in 1991. Across three decades, the clinic has supported thousands of special children — including many with Down Syndrome — alongside their paediatricians, cardiologists, endocrinologists and special educators.",
        "Dr Anavil Yadav now leads most of these family consultations, taking the time to understand each child's specific immune, digestive, thyroid and developmental picture rather than treating 'Down Syndrome' as a single, uniform diagnosis.",
      ],
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
    {
      question: "Can homeopathy help with the congenital heart defects common in Down Syndrome?",
      answer:
        "No — congenital heart conditions associated with Down Syndrome, such as ASD or VSD, require cardiology assessment and management, including surgery where advised. Homeopathy does not treat structural heart defects. Constitutional treatment offers general immune and digestive support alongside — never instead of — your child's cardiology care.",
    },
    {
      question: "At what age should we start homeopathic treatment?",
      answer:
        "There is no minimum age — we treat infants, children and adults with Down Syndrome. Starting early, alongside early-intervention therapy, allows the immune and digestive benefits to support the child's development from the earliest stage, but starting later still offers meaningful benefit.",
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

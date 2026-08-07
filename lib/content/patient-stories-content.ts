// Source: dr-anavil-step7-missing-pages-2026-07-12.docx, Page 2.

export interface PatientStoryEntry {
  id: string;
  category: string;
  title: string;
  quote: string;
  attribution: string;
  conditionSlug: string;
  conditionLabel: string;
}

export const patientStoriesSeo = {
  pageTitle: "Patient Success Stories | Yadav Homeo Clinic Jaipur | Real Homeopathy Results",
  metaDescription:
    "Real patient recovery stories from Yadav Homeo Clinic — vitiligo, kidney disease, autism, PCOS, psoriasis and more. 30+ years. 1 lakh+ patients. Read their journeys.",
  focusKeyword: "homeopathy patient success stories Jaipur",
  secondaryKeywords: [
    "vitiligo recovery homeopathy",
    "kidney disease homeopathy results",
    "autism homeopathy treatment results",
    "PCOS homeopathy cure",
  ],
};

export const patientStoriesHero = {
  headline: "1 Lakh+ Patients. Each One a Different Story. All of Them Real.",
  subheadline:
    "These are not marketing claims. These are the words of patients who came to us when other treatments had failed — who gave classical homeopathy a chance — and whose lives changed as a result. We share their stories with full consent and deep gratitude.",
  trustLine:
    "All stories are real patients | Names and details used with written or WhatsApp consent | Lab reports available where shown | Individual results vary",
};

export const patientStoriesIntro = [
  "In 30+ years of practice at Yadav Homeo Clinic, we have seen patterns that defy easy explanation by conventional medicine. Vitiligo patches that stopped spreading and began to repigment. Creatinine levels that fell steadily for a year when dialysis seemed inevitable. Autism children who began speaking. PCOS cases where cycles regularised and fertility was restored without hormonal manipulation.",
  "We do not claim to understand the full mechanism behind every recovery. We know that correctly prescribed classical homeopathy — individualised, constitutional, patient-specific — produces results that text books sometimes call impossible. These patient stories are our evidence.",
  "We share them not to sell, but because families facing these diagnoses deserve to know what has been possible here.",
];

export const patientStoryCategories = [
  "Skin Conditions",
  "Kidney Disease",
  "Autism & Child Development",
  "Women's Health",
  "Nervous System",
] as const;

export const PATIENT_STORIES: PatientStoryEntry[] = [
  {
    id: "vitiligo-sunita",
    category: "Skin Conditions",
    title: "Vitiligo — 6 Years. Face and Hands. Repigmentation Achieved.",
    quote:
      "I had vitiligo spreading on my face and hands for 6 years. I had seen three dermatologists and two other homeopaths. Nothing stopped the spread. Within 3 months of starting treatment at Yadav Homeo Clinic, new patches stopped appearing. By the 7th month I could see pigment dots forming inside the old patches. It has been 14 months now and my face patches are 60% recovered. I still cannot believe it is happening.",
    attribution: "Sunita V., 31, Delhi — Vitiligo — 14 months of treatment",
    conditionSlug: "skin-diseases",
    conditionLabel: "Vitiligo",
  },
  {
    id: "psoriasis-vikram",
    category: "Skin Conditions",
    title: "Psoriasis — 11 Years. Steroid-Free Recovery.",
    quote:
      "Psoriasis covered my arms, legs and scalp for 11 years. I was on methotrexate and steroids for 4 years with constant side effects — liver enzymes elevated, immunity suppressed, still the psoriasis came back every time I tapered. I came to Yadav Homeo Clinic as a last option. After 10 months of constitutional treatment, my skin is 75% clear — without any steroids at all. The improvement has been slow but steady and completely real. I only wish I had come here first.",
    attribution: "Vikram S., 38, Kota — Psoriasis, Severe — 10 months of treatment",
    conditionSlug: "skin-diseases",
    conditionLabel: "Psoriasis",
  },
  {
    id: "eczema-meera",
    category: "Skin Conditions",
    title: "Eczema — Child, 4 Years Old. No More Antihistamines.",
    quote:
      "My daughter had severe eczema from age 1. Every winter she would scratch until she bled. We had tried every cream, every antihistamine, every dietary restriction. At Yadav Homeo Clinic the doctor asked questions about her personality, her fears, her food preferences — things no doctor had asked before. Within 6 weeks of the constitutional remedy the scratching reduced dramatically. This winter, for the first time, she slept through the night without scratching.",
    attribution: "Meera J., Mother, Ahmedabad — Childhood Eczema — 3 months of treatment",
    conditionSlug: "skin-diseases",
    conditionLabel: "Eczema",
  },
  {
    id: "ckd-ajay",
    category: "Kidney Disease",
    title: "CKD — Creatinine 6.8 to 3.1 in 6 Months.",
    quote:
      "My father's creatinine was 6.8 in February. The nephrologist said dialysis was the next step. We were desperate. My cousin suggested Dr Yadav. We started homeopathic treatment alongside his existing medicines in March. By September — 6 months later — creatinine had come down to 3.1. He is still not on dialysis. We share his blood reports every 6 weeks and the doctors are amazed. We thank God and Yadav Homeo Clinic every single day.",
    attribution: "Ajay S., 42, Jaipur — Chronic Kidney Disease — 6 months of treatment",
    conditionSlug: "renal-diseases",
    conditionLabel: "Chronic Kidney Disease",
  },
  {
    id: "kidney-stones-pradeep",
    category: "Kidney Disease",
    title: "Kidney Stones — Recurrent. Now Controlled.",
    quote:
      "I had 4 kidney stone episodes in 3 years. Each time hospitalisation, pain that I cannot describe, and no lasting solution. After starting constitutional homeopathic treatment, it has been 18 months without a single episode. My last ultrasound showed no new stones. This is the longest stone-free period in 7 years.",
    attribution: "Pradeep R., 45, Jodhpur — Recurrent Kidney Stones — 18 months of treatment",
    conditionSlug: "renal-diseases",
    conditionLabel: "Kidney Stones",
  },
  {
    id: "autism-priya",
    category: "Autism & Child Development",
    title: "Severe Autism — First Words at 4 Years.",
    quote:
      "Our son was diagnosed with severe autism at age 2. Non-verbal, 5-6 meltdowns daily, sleeping only 3 hours a night. After 8 months of Dr Yadav's treatment he began sleeping through the night — that single change transformed our family. By 12 months he said his first word. He is now 7 and attending school with support. This clinic gave us our son back.",
    attribution: "Priya S., Mother, Jaipur — Severe Autism — 2 years of treatment",
    conditionSlug: "autism",
    conditionLabel: "Autism",
  },
  {
    id: "adhd-anjali",
    category: "Autism & Child Development",
    title: "ADHD — 8 Year Old Boy. Concentration Improved.",
    quote:
      "Our son was being considered for medication for ADHD. He could not sit for 5 minutes, could not complete school work, was being called disruptive. We tried constitutional homeopathy before medication. After 4 months his teacher noticed improvement without being told about the treatment. After 7 months we had our first parent-teacher meeting that was not about problems. He is now in the school play.",
    attribution: "Anjali K., Mother, Udaipur — ADHD — 7 months of treatment",
    conditionSlug: "autism",
    conditionLabel: "ADHD",
  },
  {
    id: "pcos-neha",
    category: "Women's Health",
    title: "PCOS — Cycles Regular for First Time in 6 Years.",
    quote:
      "PCOS had given me irregular cycles for 6 years, weight gain I could not shift, and my gynaecologist had told me pregnancy would be difficult. I refused to accept that at 27. Constitutional homeopathic treatment was thorough — the intake took an hour and covered things no other doctor had asked. Within 4 months my cycles came on their own for the first time in years. I am now 7 months into treatment and my recent scans show follicle development improving.",
    attribution: "Neha B., 27, Mumbai — PCOS — 7 months of treatment",
    conditionSlug: "womens-health",
    conditionLabel: "PCOS",
  },
  {
    id: "fibroids-sunanda",
    category: "Women's Health",
    title: "Uterine Fibroids — Surgery Avoided.",
    quote:
      "My gynaecologist told me I needed a myomectomy for multiple fibroids. I had a family history of surgical complications and was terrified. My cousin suggested trying homeopathy first. After 9 months of constitutional treatment my last ultrasound showed two of the smaller fibroids had reduced significantly. My gynaecologist has agreed to monitor conservatively. I may not need surgery.",
    attribution: "Sunanda M., 36, Jaipur — Uterine Fibroids — 9 months of treatment",
    conditionSlug: "womens-health",
    conditionLabel: "Uterine Fibroids",
  },
  {
    id: "migraine-renu",
    category: "Nervous System",
    title: "Migraine — 15 Years. Now Controlled.",
    quote:
      "15 years of migraines — 3 to 4 attacks per month, each lasting 2 days. I had tried everything. After 5 months of constitutional homeopathic treatment my attacks reduced to 1 per month, then 1 per 6 weeks. It has been 4 months since my last severe attack. I have my life back.",
    attribution: "Renu G., 40, Jaipur — Chronic Migraine — 8 months of treatment",
    conditionSlug: "nervous-system-disease",
    conditionLabel: "Migraine",
  },
  {
    id: "epilepsy-ramesh",
    category: "Nervous System",
    title: "Epilepsy — Seizure Frequency Reduced.",
    quote:
      "Homeopathy is adjunctive — not a replacement for anti-epileptic medicines. My son continued his neurologist-prescribed medicines. We added constitutional homeopathic treatment 11 months ago. His seizure frequency has gone from 8-10 per month to 1-2. His neurologist has reduced his AED dose twice. We are not claiming a cure — we are sharing a real experience.",
    attribution: "Ramesh T., Father, Jaipur — Epilepsy — 11 months of treatment (adjunctive)",
    conditionSlug: "nervous-system-disease",
    conditionLabel: "Epilepsy",
  },
];

export const testimonialDisclaimer =
  "Testimonials represent individual patient experiences. Results are not typical and cannot be guaranteed. Homeopathic treatment outcomes vary based on individual constitution, disease duration, compliance with treatment, and other factors.";

export const patientStoriesFinalCta = "If These Stories Resonate — Book Your Consultation Today";

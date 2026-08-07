import type { DiseasePageFAQ, DiseasePageSection } from "@/lib/types";

// Source: dr-anavil-step7-missing-pages-2026-07-12.docx, Page 1.

export const onlineConsultationSeo = {
  pageTitle: "Online Homeopathy Consultation | Yadav Homeo Clinic Jaipur | Pan India & International",
  metaDescription:
    "Book an online homeopathy consultation with Dr Anavil Yadav (BHMS). Patients across India, UAE, UK, USA, Canada treated with same precision as in-clinic. WhatsApp: +91-8949427254",
  focusKeyword: "online homeopathy consultation",
  secondaryKeywords: [
    "online homeopathy doctor India",
    "homeopathy consultation online Jaipur",
    "Dr Anavil Yadav online consultation",
    "homeopathy online NRI",
  ],
};

export const onlineConsultationHero = {
  headline: "The Same Consultation. Without the Distance.",
  subheadline:
    "For over 30 years, patients have travelled from across India to sit with Dr T P Yadav and Dr Anavil Yadav at Yadav Homeo Clinic, Jaipur. Today, patients from Delhi, Mumbai, London and Dubai receive the same depth of care — the same 45-minute case-taking, the same constitutional prescription — without leaving their city.",
  trustLine:
    "15+ Countries Served | Same Prescription Process as In-Clinic | All Reports Reviewed Personally | WhatsApp Support Throughout Treatment",
};

export const honestAnswerSection: DiseasePageSection = {
  heading: "Honest Answer: Yes — Because Homeopathy Is Based on What You Tell Us, Not What We Can Touch",
  paragraphs: [
    "This is the question every online patient asks — and it deserves a real answer.",
    "Classical homeopathic diagnosis does not depend on physical examination the way allopathy does. It depends on a detailed conversation — about your symptoms, their character, what makes them better or worse, your emotional state, your sleep patterns, your food preferences, your family history. All of this can be gathered with equal accuracy through a video call or a detailed written intake form.",
    "We have been treating online patients for several years. Our case records show no meaningful difference in treatment outcomes between online and in-clinic patients when the case-taking is thorough. The prescription is based on your totality of symptoms — not on whether we shook your hand.",
    "That said, online consultation works best for chronic conditions — vitiligo, PCOS, thyroid, kidney disease, psoriasis, autism, migraines, arthritis. For acute emergencies, please visit us in person or your nearest emergency facility.",
  ],
};

export const processSteps: { title: string; body: string }[] = [
  {
    title: "Fill the Detailed Intake Form",
    body: "Complete our comprehensive online patient form. Cover your main complaint, full history, past treatments, family medical history, current medicines, sleep, diet and emotional patterns. This form takes 15–25 minutes — and it is the foundation of your prescription. The more you share, the more precisely we can prescribe.",
  },
  {
    title: "Send Your Medical Reports",
    body: "WhatsApp all relevant documents to +91-8949427254 — blood reports, scan reports, photographs (for skin conditions), specialist letters, previous homeopathic prescriptions. For kidney patients: creatinine, urea, eGFR, urine routine. For thyroid: TSH, T3, T4. For skin: clear photos in natural light, before any cream application.",
  },
  {
    title: "Make Payment",
    body: "Pay via UPI or bank transfer — details shared on WhatsApp once your case is reviewed. Send the payment screenshot to WhatsApp with your full name. International patients: payment details shared on WhatsApp.",
  },
  {
    title: "Prescription Delivered",
    body: "Within 24–48 hours of receiving your complete intake form and reports, your personalised prescription is prepared and sent to you on WhatsApp — with full instructions on potency, dosage, frequency and diet/lifestyle guidance specific to your condition.",
  },
  {
    title: "Medicine Delivery",
    body: "Homeopathic medicines can be couriered to any address in India within 3–5 business days. International patients: we guide you to a reliable local source or arrange international courier. We use only quality-assured pharmacies we trust.",
  },
  {
    title: "Follow-up and Support",
    body: "You are not alone after the prescription. WhatsApp us any time with questions. Your first follow-up is after 30 days — where we assess your response and adjust the prescription if needed. We continue monitoring your progress throughout treatment.",
  },
];

export const suitabilitySection: DiseasePageSection = {
  heading: "Online Works Particularly Well For",
  list: [
    "Chronic skin conditions — Vitiligo, Psoriasis, Eczema, Urticaria. Photos + reports give us everything we need.",
    "Women's health — PCOS, Uterine Fibroids, Hormonal Imbalance, Menopause. Detailed case-taking covers the full picture.",
    "Thyroid and hormonal disorders — TSH, T3, T4 reports reviewed. Response tracked monthly through lab values.",
    "Kidney disease — Creatinine, urea, eGFR monitored. Progress is measurable in numbers.",
    "Autism and child development — We guide parents through the intake process. Children do not need to be present.",
    "Neurological conditions — Migraine, Epilepsy, Anxiety, Depression, Insomnia. Detailed symptom profiling by form and call.",
    "NRI patients — We serve patients in UAE, UK, USA, Canada, Australia, New Zealand, Singapore and across Europe.",
  ],
  note: "Online is not suitable for medical emergencies or conditions requiring urgent physical examination or investigations. If you are unsure, WhatsApp us — we will honestly tell you whether online is appropriate for your case.",
};

export const onlinePatientTestimonials: {
  quote: string;
  attribution: string;
}[] = [
  {
    quote:
      "I was sceptical about online consultation. How can a doctor prescribe without seeing me? But the intake form was so detailed that Dr Anavil understood my case better than any doctor who had examined me in person. My patches stopped spreading in 2 months. After 10 months, I am seeing genuine repigmentation. All of this happened entirely online.",
    attribution: "Rekha M., 34, Delhi — Vitiligo, 4 years — 10 months of treatment",
  },
  {
    quote:
      "My father in India has chronic kidney disease. We were managing it from the UK and were terrified of the trajectory. Dr Anavil's online process was professional and thorough. The intake form asked questions no other doctor had asked. Creatinine has come down from 5.1 to 3.4 in 8 months. We send reports every 6 weeks and adjustments are made promptly.",
    attribution: "Suresh K. family, UK — CKD, High Creatinine — 8 months of treatment",
  },
  {
    quote:
      "I had seen three gynaecologists and two other homeopaths. Nobody had spent as much time understanding my full history as this intake form forced me to articulate. Within 4 months my cycles became regular for the first time in 6 years. The WhatsApp support throughout has been exceptional.",
    attribution: "Ananya P., 27, Mumbai — PCOS, 6 years — 4 months of treatment",
  },
];

export const telemedicineComplianceStatement =
  "Online consultations at Yadav Homeo Clinic are conducted in full accordance with the Telemedicine Practice Guidelines 2020 issued by the Medical Council of India (now National Medical Commission). All consultations are doctor-led, case-taking is thorough, and prescriptions are issued only after proper professional assessment. Homeopathic medicines prescribed are not in Schedule H1 or X categories.";

export const onlineConsultationFaqs: DiseasePageFAQ[] = [
  {
    question: "Is the online consultation fee the same as in-clinic?",
    answer:
      "The fee structure may differ slightly. WhatsApp us at +91-8949427254 for current online consultation fees. We believe quality care should be accessible regardless of distance.",
  },
  {
    question: "How do I know my prescription will be correct without a physical examination?",
    answer:
      "Classical homeopathy is based on your symptom totality — which we gather through our detailed intake form and follow-up questions. Physical examination is important in allopathy where treatment depends on clinical signs. In homeopathy, the most important diagnostic information is what you experience and feel — which you can describe perfectly well at a distance. Our online outcomes confirm this.",
  },
  {
    question: "How long does it take to receive my prescription?",
    answer:
      "Within 24–48 hours of receiving your complete intake form and all relevant reports. Incomplete submissions delay prescription — please ensure all reports and photographs are sent before expecting the prescription.",
  },
  {
    question: "Can I consult for my child online?",
    answer:
      "Yes. Parents complete the intake form on behalf of the child. We ask specific questions about the child's development, symptoms, and behaviour. Children do not need to be present for the consultation.",
  },
  {
    question: "I am an NRI. How do I pay?",
    answer:
      "International payment options are available — please WhatsApp us at +91-8949427254 and we will share the appropriate payment method for your country.",
  },
  {
    question: "What if my condition worsens after the prescription?",
    answer:
      "WhatsApp us immediately. A brief healing aggravation is sometimes expected in homeopathy — and is different from a true worsening. We will assess your situation and advise appropriately. Patient safety is always the priority.",
  },
];

export const onlineConsultationFinalCta = "Ready to Begin Your Online Consultation?";

export const onlineConsultationDisclaimer =
  "This page provides general information about online homeopathic consultation at Yadav Homeo Clinic. Individual results vary and are not guaranteed. Online consultation is not a substitute for emergency medical care — for medical emergencies, visit your nearest emergency facility. Consultations are conducted in accordance with the Telemedicine Practice Guidelines 2020.";

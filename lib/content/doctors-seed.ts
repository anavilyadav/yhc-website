import type { Doctor } from "@/lib/supabase/queries/doctors";

/**
 * Fallback seed for doctor profiles — mirrors supabase/seed/doctors_seed.sql
 * exactly (source: STEP2_AboutUs_DoctorProfiles.docx, approved copy). Used
 * only when Supabase is unreachable or not yet configured, so /about/ and
 * /our-doctors/ never render empty and `npm run build` always works —
 * same pattern as lib/data/diseases.ts, disease-page-content.ts and
 * blog-posts.ts. college_name and registration_number are confirmed
 * directly by Dr Anavil (chat, 2026-08-29); registration_council and
 * socials stay null on purpose — fill via the admin panel once confirmed,
 * never invent placeholder data.
 */
export const DOCTOR_SEED: Doctor[] = [
  {
    slug: "dr-tp-yadav",
    display_order: 1,
    full_name: "Dr T P Yadav",
    role_title: "Founder & Chief Homeopathic Physician | BHMS",
    header_subline: "35 Years of Clinical Practice | Yadav Homeo Clinic, Jaipur",
    bio_paragraphs: [
      "Dr T P Yadav is the founder of Yadav Homeo Clinic and one of the most experienced classical homeopathic physicians in Rajasthan. His practice, which began in 1991, has been built entirely on one principle: that every patient — regardless of how severe or long-standing their condition — deserves a precise, individualised, properly prescribed homeopathic remedy. Not a generic formula. Not a symptomatic fix. A constitutional remedy that addresses the whole person.",
      "In 35 years of unbroken practice, Dr Yadav has treated over one lakh patients across every major category of chronic disease — skin conditions, autoimmune disorders, kidney disease, cancer support, genetic conditions, and developmental disorders in children. He has developed particular expertise in vitiligo, psoriasis, chronic kidney disease, and autism spectrum disorder — conditions that most practitioners consider extremely difficult, and that Dr Yadav has addressed with consistent, documented results.",
      "His approach to the consultation has not changed in 35 years. He takes time. He listens. He asks the questions that other doctors don't — about sleep, about fears, about how a patient responds to heat or cold, about what was happening in their life when the disease first appeared. In classical homeopathy, this depth of understanding is not optional — it is the prescription itself.",
      "Dr Yadav's patients come from every state in India and from across the world. Many arrive having tried everything else. Many arrive as a final attempt before accepting a diagnosis they have been told is permanent. And it is here — in this consultation room in Jaipur — that many of them finally find what they were looking for.",
    ],
    short_bio:
      "Dr T P Yadav is Yadav Homeo Clinic's founder and chief physician. With 35 years of classical homeopathic practice in Jaipur, he has treated over one lakh patients and built an unrivalled reputation in vitiligo, kidney disease, autism and genetic conditions. He practises strictly in the classical tradition — one patient, one remedy, one deeply individualised prescription.",
    specializations: [
      "Vitiligo & Leucoderma",
      "Psoriasis & Chronic Skin Diseases",
      "Autism Spectrum Disorder",
      "Chronic Kidney Disease — Creatinine Management",
      "Genetic & Rare Diseases",
      "Autoimmune Conditions",
      "Down Syndrome & Developmental Disorders",
    ],
    consultation_points: null,
    philosophy_quote: null,
    college_name: "Dr. Madan Pratap Khuteta Homoeopathic Medical College, Jaipur",
    credential_name: "BHMS",
    credential_year: null,
    registration_number: "3692",
    registration_council: null,
    photo_url: null,
    photo_alt: "Dr T P Yadav, Founder and Chief Homeopathic Physician, Yadav Homeo Clinic Jaipur",
    social_instagram: null,
    social_linkedin: null,
    social_youtube: null,
  },
  {
    slug: "dr-anavil-yadav",
    display_order: 2,
    full_name: "Dr Anavil Yadav",
    role_title: "Homeopathic Physician | BHMS | Yadav Homeo Clinic, Jaipur",
    header_subline:
      "Specialist in Chronic, Genetic & Autoimmune Diseases | Online Consultations — Pan India & International",
    bio_paragraphs: [
      "Some doctors choose medicine. Dr Anavil Yadav grew up inside it.",
      "As the son of Dr T P Yadav — one of Jaipur's most respected homeopathic physicians — Anavil spent his childhood watching something that most people never see: a doctor who could change a patient's life not with surgery or a powerful drug, but with a tiny white pill selected through 60 minutes of careful, listening-based diagnosis. He watched vitiligo patches repigment. He saw autism children begin to speak. He witnessed kidney patients avoid dialysis. He grew up knowing that what happened in his father's consultation room was extraordinary — and real.",
      "When the time came to choose his own path, the decision was not difficult. In 2010, Dr Anavil enrolled in BHMS — the Bachelor of Homeopathic Medicine and Surgery degree. But unlike most homeopathy students, he was not learning in a vacuum. Throughout his studies, he was sitting in real consultations with his father, studying real cases, observing outcomes across years, and absorbing the kind of clinical wisdom that no textbook can teach.",
      "He passed his degree in 2016 and joined Yadav Homeo Clinic full-time. What he brought was not just a degree — it was six years of theoretical foundation built on top of sixteen years of lived observation. The combination of his father's 35-year clinical experience and his own contemporary medical education created something rare: a practice where classical wisdom and modern understanding meet without compromise.",
      "Dr Anavil has a vision for what Yadav Homeo Clinic can become — and that vision is being built every day. He is leading the clinic's expansion into online consultations, reaching patients across every state in India and internationally. He believes — as strongly as his father believed in 1991 — that no patient should be denied access to quality classical homeopathy because of geography, or because they didn't know where to look. His goal is to make the expertise that Jaipur patients have trusted for 35 years available to anyone who needs it, anywhere in the world.",
      "Dr Anavil's approach to practice is shaped by everything he has observed and learned. He takes time. He asks questions that go beyond the blood reports. He is interested in you as a person — in your story, your patterns, your constitution — because he knows, from years of watching his father work, that the correct homeopathic prescription lives in the details that most doctors overlook.",
      "His particular clinical interests lie in chronic skin diseases, autoimmune conditions, and the management of complex paediatric cases — areas where he has had the benefit of learning from one of the country's most experienced practitioners. He is also deeply interested in the intersection of modern diagnostics and classical homeopathy — using lab reports and investigations not to prescribe allopathically, but to track and demonstrate the objective results of homeopathic treatment.",
      "He carries one belief into every consultation — the same belief that has defined Yadav Homeo Clinic for 35 years: that every patient who walks through the door deserves the time, the attention, and the precision of a truly individualised prescription. That is the only kind of homeopathy worth practising.",
    ],
    short_bio:
      "Dr Anavil Yadav — Classical Homeopath, Yadav Homeo Clinic Jaipur. Son of Dr T P Yadav. BHMS, 9+ years practice. Specialising in chronic, genetic & autoimmune diseases. Online consultations — Pan India.",
    specializations: [
      "Chronic Skin Diseases — Vitiligo, Psoriasis, Eczema, Lichen Planus",
      "Autoimmune Diseases — Rheumatoid Arthritis, Lupus, Thyroid, Scleroderma",
      "Genetic & Rare Diseases — Down Syndrome, Thalassemia, Haemophilia",
      "Paediatric & Developmental Conditions — Autism, ADHD, Speech Delays",
      "Chronic Kidney Disease — Creatinine Management",
      "Women's Health — PCOD, Fibroids, Menstrual Disorders",
      "Online Consultations — Pan India & International",
    ],
    consultation_points: [
      {
        heading: "Unhurried",
        body: "Every first consultation is 45 to 60 minutes minimum. Your reports are reviewed, your history is taken completely, your questions are answered. No rushing.",
      },
      {
        heading: "Honest",
        body: "If your case is one where homeopathy can genuinely help, you will be told what to expect and in what timeline. If it is not, you will be told that too — and referred appropriately.",
      },
      {
        heading: "Precise",
        body: "Classical homeopathic prescribing means one remedy selected for one person — not a generic protocol. Dr Anavil's prescriptions are built from your complete individual picture, not your diagnosis label.",
      },
      {
        heading: "Trackable",
        body: "For chronic disease cases — especially kidney disease, thyroid, autoimmune — progress is measured through lab reports at regular intervals. You will see the results in your numbers, not just in how you feel.",
      },
      {
        heading: "Accessible",
        body: "Through online consultations, Dr Anavil's practice reaches patients across India and internationally. Distance is not a barrier to receiving the quality of care that Yadav Homeo Clinic is known for.",
      },
    ],
    philosophy_quote:
      "I grew up watching my father give patients their lives back — one carefully chosen remedy at a time. That is the only kind of medicine I ever wanted to practise. The kind where we take the time to truly understand the person, not just the disease.",
    college_name: "Homoeopathy University, Jaipur",
    credential_name: "BHMS",
    credential_year: "2016",
    registration_number: "8181",
    registration_council: null,
    photo_url: null,
    photo_alt: "Dr Anavil Yadav, Homeopathic Physician, Yadav Homeo Clinic Jaipur",
    social_instagram: null,
    social_linkedin: null,
    social_youtube: null,
  },
];

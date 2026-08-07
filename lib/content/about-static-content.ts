// Source: STEP2_AboutUs_DoctorProfiles.docx (approved copy).
// This is site narrative, not doctor-editable operational content, so per
// the project's hard rules it stays in code rather than Supabase. If the
// clinic later wants this editable without a redeploy, promote it into a
// `site_content` table the same way `doctors` is structured.

export const aboutHero = {
  headline: "A Legacy Built on Trust. A Future Built on Vision.",
  subheadline:
    "Since 1991, Yadav Homeo Clinic has been Jaipur's most trusted name in classical homeopathy. What started as one doctor's unshakeable belief in the power of authentic healing has become a multi-generation mission — now carried forward with the same values, and a new energy.",
};

export const ourStory = {
  heading: "Thirty-Five Years of Healing — The Story of Yadav Homeo Clinic",
  paragraphs: [
    "It was 1991. Dr T P Yadav had just one clinic, one conviction, and one question that drove everything he did: Why should a patient with a chronic disease be told that nothing more can be done for them?",
    "That question became the foundation of Yadav Homeo Clinic. Dr Yadav began practising classical homeopathy in Jaipur at a time when the city had very few homeopaths who followed the original, authentic principles of Samuel Hahnemann. No shortcuts. No combination medicines. No symptomatic prescribing. Just deep, careful, individualised constitutional treatment — the kind that takes time, patience, and an extraordinary understanding of the human being sitting across the table.",
    "Word spread. Not through advertising — through results. A patient whose vitiligo stopped spreading. A child with autism who began to speak. A kidney patient whose creatinine fell when dialysis had seemed inevitable. Each case became a story, and each story brought more patients through the door. From Jaipur, then from across Rajasthan, then from every corner of India — and eventually from across the world.",
    "Then came the next chapter. In 2010, Dr T P Yadav's son — Dr Anavil Yadav — enrolled in homeopathic medicine. Not because he was pushed into a family profession, but because he had grown up watching his father transform lives, and he wanted to be part of that. He sat in consultations. He studied cases. He understood, from childhood, that what happened in that consultation room was not ordinary medicine — it was something rare and powerful.",
    "Dr Anavil passed his degree in 2016 and began practising alongside his father. What this brought to the clinic was something invaluable: the combination of Dr T P Yadav's three decades of clinical wisdom, and Dr Anavil's contemporary knowledge, fresh perspective, and vision for what Yadav Homeo Clinic could become.",
    "That vision is taking shape now. Dr Anavil is driving the clinic's next evolution — expanding online consultation services, reaching patients across India and internationally, and making the expertise that Jaipur's patients have trusted for 35 years available to anyone, anywhere, who needs it. Two generations. One mission. The same uncompromising commitment to classical homeopathy that Dr T P Yadav planted in 1991.",
  ],
};

export interface TimelineMilestone {
  year: string;
  title: string;
  body: string;
}

export const timeline: TimelineMilestone[] = [
  { year: "1991", title: "Dr T P Yadav Establishes Yadav Homeo Clinic, Jaipur", body: "A single clinic. A single doctor. An unshakeable conviction in classical homeopathy. The journey begins." },
  { year: "Mid 1990s", title: "First Major Vitiligo & Skin Disease Results", body: "Word begins to spread in Jaipur — patients with long-standing vitiligo and psoriasis are seeing results they hadn't found anywhere else." },
  { year: "Early 2000s", title: "Patients From Across Rajasthan Begin Visiting", body: "Kota, Ajmer, Jodhpur, Bikaner — patients travel to Jaipur specifically for Dr Yadav's treatment. The clinic's reputation crosses city limits." },
  { year: "2005", title: "Special Focus on Autism & Developmental Conditions", body: "Dr Yadav develops deep expertise in treating children with autism spectrum disorder, Down syndrome and developmental delays. This becomes one of the clinic's most defining specialisations." },
  { year: "2008–2010", title: "Kidney Disease Cases — National Attention", body: "Significant, documented results in patients with chronic kidney disease and high creatinine levels bring the clinic to national attention. Patients from Delhi, Mumbai and other major cities begin consulting." },
  { year: "2010", title: "The Next Generation Begins — Dr Anavil Yadav Joins BHMS", body: "Dr T P Yadav's son takes admission in homeopathic medicine. He spends these years learning, assisting, and absorbing the clinical wisdom of a lifelong practitioner." },
  { year: "2016", title: "Dr Anavil Yadav Qualifies & Joins Full-Time", body: "After completing his BHMS degree, Dr Anavil Yadav begins practising alongside his father. The clinic now has two practitioners — deepening its capacity to serve more patients with the same quality of care." },
  { year: "2018–2020", title: "Online Consultation Service Launched", body: "Dr Anavil's vision: no patient should be denied access to quality homeopathic care because of geography. Online consultations begin reaching patients across India and internationally." },
  { year: "2021", title: "Second Clinic — Jagatpura Branch Opens", body: "Growing demand in South Jaipur leads to the opening of the Jagatpura branch. Two locations. Same standard of care." },
  { year: "2025–Present", title: "Pan-India Online Expansion", body: "Dr Anavil leads the digital growth of the clinic — building systems to serve patients across all states and internationally, while maintaining the deep individual attention that has always defined Yadav Homeo Clinic." },
];

export const missionVisionValues = {
  heading: "What We Believe — And Why It Matters",
  mission:
    "To make classical homeopathy accessible to every patient who needs it — especially those suffering from chronic, rare, and so-called 'incurable' diseases — through honest, deep, and truly individualised healing.",
  vision:
    "A future where homeopathy is not a last resort, but a first choice — for chronic disease, child health, and long-term prevention. Where no patient is told their condition is permanent before authentic classical homeopathy has been properly tried.",
  values: [
    { title: "Classical purity", body: "We follow Hahnemann's principles without compromise. Every prescription is individualised. Every remedy is single. No shortcuts." },
    { title: "Honesty above all", body: "We tell patients clearly and kindly what homeopathy can and cannot do for them. We do not over-promise. This honesty is why patients trust us for decades." },
    { title: "Time and attention", body: "No consultation at Yadav Homeo Clinic is rushed. The first visit takes 45 to 60 minutes. We believe healing begins in the consultation itself." },
    { title: "Compassion", body: "Especially for special children, for families who have struggled for years, for patients who arrive as a last hope. We treat every patient as we would want our own family treated." },
    { title: "Continuous growth", body: "We are students of homeopathy forever. Medicine evolves. Our understanding deepens. Our commitment to learning never stops." },
  ],
};

export const whyUs = {
  heading: "What Makes Yadav Homeo Clinic Different From Every Other Option",
  points: [
    { title: "Your First Consultation Is Unlike Any You've Had Before", eyebrow: "Depth of Case-Taking", body: "We spend 45 to 60 minutes understanding you — not just your disease. Your sleep, your fears, your food preferences, your emotional patterns, your childhood health history, your family medical history. In classical homeopathy, these are not irrelevant details. They are the prescription." },
    { title: "We Treat the Cases Most Others Won't Take On", eyebrow: "Genuine Specialisation", body: "Vitiligo that has been spreading for a decade. Creatinine at 7 with dialysis suggested. A 4-year-old with severe autism. These are our everyday cases. We have spent 35 years building expertise in exactly the conditions that are hardest to treat — and most important to treat well." },
    { title: "Classical Wisdom Meets Contemporary Vision", eyebrow: "Two Generations, One Standard", body: "Dr T P Yadav brings 35 years of unbroken clinical practice. Dr Anavil Yadav brings fresh energy, updated clinical knowledge, and a vision for making this expertise accessible online across India and the world. Together, the standard of care has only deepened." },
    { title: "We Let Our Patients Do the Talking", eyebrow: "Results, Not Promises", body: "We do not advertise extraordinary cures. We do not make promises. What we do is point to 35 years of clinical results — documented, real, and confirmed by the patients who experienced them. The proof is in this clinic's record." },
  ],
};

export const aboutSeo = {
  title: "About Us | Yadav Homeo Clinic | Classical Homeopathy in Jaipur Since 1991",
  description:
    "Learn the story of Yadav Homeo Clinic — founded in 1991 by Dr T P Yadav, now led by Dr Anavil Yadav. 30+ years of classical homeopathy in Jaipur. 1 lakh+ patients treated.",
};

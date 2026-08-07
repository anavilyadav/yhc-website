// Source: dr-anavil-step10-remaining-pages-2026-07-12.docx, Pages 2-3.
// The bio_paragraphs / specializations / philosophy_quote themselves
// already live in Supabase (doctors table, seeded from STEP2's content —
// STEP10 explicitly says to copy Dr Anavil's story "exactly, do not
// rewrite"), so only the page-specific extras (testimonial, CTA labels)
// that don't belong in the shared doctors table live here.

export interface DoctorProfileExtra {
  seo: {
    pageTitle: string;
    metaDescription: string;
    focusKeyword: string;
    secondaryKeywords: string[];
  };
  testimonial: { quote: string; attribution: string };
  ctas: { label: string; whatsappMessage?: string; href?: string }[];
}

export const doctorProfileExtras: Record<string, DoctorProfileExtra> = {
  "dr-tp-yadav": {
    seo: {
      pageTitle: "Dr T P Yadav — Founder, Classical Homeopath | Yadav Homeo Clinic Jaipur | 35 Years",
      metaDescription:
        "Dr T P Yadav — founder of Yadav Homeo Clinic (1991). 35+ years, 1 lakh+ patients. Specialist in vitiligo, kidney disease, autism, autoimmune conditions. Jaipur.",
      focusKeyword: "Dr T P Yadav homeopathy Jaipur",
      secondaryKeywords: [
        "best homeopathy doctor Jaipur",
        "experienced homeopath Jaipur",
        "vitiligo specialist Jaipur",
      ],
    },
    testimonial: {
      quote:
        "I had seen 4 doctors in 3 cities before my family brought me to Dr T P Yadav. My creatinine was 6.1, my nephrologist had said dialysis was within 6 months. Dr Yadav took 70 minutes to take my case — no one had spent more than 10 with me. In 8 months, creatinine came to 3.8. That was 2 years ago. Still no dialysis. I don't know what he does. I just know what the report shows.",
      attribution: "Ramesh K., 58, Jaipur — CKD, 2 years of treatment",
    },
    ctas: [{ label: "Book Consultation with Dr T P Yadav →" }],
  },
  "dr-anavil-yadav": {
    seo: {
      pageTitle: "Dr Anavil Yadav — Homeopathic Physician BHMS | Yadav Homeo Clinic Jaipur | Online Consultations",
      metaDescription:
        "Dr Anavil Yadav BHMS — second-generation classical homeopath at Yadav Homeo Clinic Jaipur. Specialist in chronic, genetic & autoimmune diseases. Online consultations pan-India & international.",
      focusKeyword: "Dr Anavil Yadav homeopath Jaipur",
      secondaryKeywords: [
        "online homeopathy consultation India",
        "young homeopath Jaipur",
        "second generation homeopath",
      ],
    },
    testimonial: {
      quote:
        "I was sceptical about online consultation — but Dr Anavil's intake form was more thorough than any in-person consultation I had ever had. He asked questions about my personality, my fears, my reactions to things — questions that felt irrelevant but somehow weren't. Six months later my PCOS cycles are regular for the first time in 5 years. I now refer everyone I know.",
      attribution: "Pooja M., 29, Delhi — PCOS, Online consultation, 6 months",
    },
    ctas: [
      { label: "Book In-Clinic Consultation →" },
      { label: "Start Online Consultation →", href: "/online-consultation" },
    ],
  },
};

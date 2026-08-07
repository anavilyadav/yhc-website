import { supabase } from "@/lib/supabase";
import type { Disease } from "@/lib/types";

/**
 * Fallback seed — mirrors the `diseases` table's initial seed data
 * (see supabase/schema.sql). Used only if Supabase is unreachable or not
 * yet configured, so the homepage never renders broken/empty content.
 * Source content: STEP1_Homepage_Content.docx, Section 4.
 */
const DISEASE_SEED: Disease[] = [
  {
    slug: "skin-diseases",
    title: "Skin Diseases",
    description:
      "Vitiligo, Psoriasis, Eczema, Urticaria and all chronic skin conditions that haven't responded to conventional treatment. Our most recognised speciality.",
    is_specialty: true,
    display_order: 1,
  },
  {
    slug: "autoimmune-diseases",
    title: "Autoimmune Diseases",
    description:
      "Rheumatoid Arthritis, Lupus, Thyroid disorders, Ankylosing Spondylitis and all conditions where the body's immune system turns against itself.",
    is_specialty: false,
    display_order: 2,
  },
  {
    slug: "cancer",
    title: "Cancer Support",
    description:
      "Homeopathy as a supportive therapy during and after cancer treatment — to improve immunity, reduce side effects of chemo/radiation, and strengthen recovery.",
    is_specialty: false,
    display_order: 3,
  },
  {
    slug: "renal-diseases",
    title: "Kidney & Renal Diseases",
    description:
      "High creatinine, CKD, kidney failure, nephrotic syndrome — renal conditions with proven homeopathic management. We have helped many patients avoid dialysis.",
    is_specialty: true,
    display_order: 4,
  },
  {
    slug: "genetic-diseases",
    title: "Genetic & Rare Diseases",
    description:
      "Down syndrome, Thalassemia, Haemophilia and inherited conditions — gentle, constitutional homeopathic support for patients and families.",
    is_specialty: false,
    display_order: 5,
  },
  {
    slug: "autism",
    title: "Autism & Child Development",
    description:
      "One of India's most dedicated homeopathic practices for autism spectrum disorder, ADHD, speech delays and developmental challenges. 5,000+ children treated.",
    is_specialty: true,
    display_order: 6,
  },
  {
    slug: "nervous-system-disease",
    title: "Nervous System Disorders",
    description:
      "Cerebral Palsy, Epilepsy, Migraine, Parkinson's and neurological conditions managed with constitutional homeopathic care.",
    is_specialty: false,
    display_order: 7,
  },
  {
    slug: "childrens-health",
    title: "Children's Health",
    description:
      "Recurring infections, tonsillitis, bed-wetting, growth issues and all paediatric conditions — safe, gentle, effective. Children love our sweet homeopathic pills.",
    is_specialty: false,
    display_order: 8,
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    description:
      "PCOD, fibroids, irregular periods, leucorrhoea, menopause and all gynaecological conditions — treated with sensitivity and deep constitutional care.",
    is_specialty: false,
    display_order: 9,
  },
  {
    slug: "mens-health",
    title: "Men's Health",
    description:
      "Infertility, prostate issues, low energy, sexual health concerns — handled with complete privacy and professional dignity.",
    is_specialty: false,
    display_order: 10,
  },
  {
    slug: "respiratory-diseases",
    title: "Respiratory Diseases",
    description:
      "Asthma, Bronchitis, Allergic Rhinitis, Sinusitis and chronic respiratory conditions managed without lifelong steroid dependence.",
    is_specialty: false,
    display_order: 11,
  },
  {
    slug: "digestive-diseases",
    title: "Digestive Diseases",
    description:
      "IBS, Crohn's, Colitis, Acidity, Piles and all chronic digestive disorders — healed from the root, not managed with antacids.",
    is_specialty: false,
    display_order: 12,
  },
  {
    slug: "hormonal-diseases",
    title: "Hormonal & Endocrine",
    description:
      "Thyroid, PCOD, Diabetes management, Adrenal issues and all hormonal imbalances — treated at the root cause, not just the blood report numbers.",
    is_specialty: false,
    display_order: 13,
  },
  {
    slug: "mental-health",
    title: "Mental Health",
    description:
      "Anxiety, Depression, OCD, Insomnia — managed safely with homeopathy. No side effects. No dependency. No dulling of the mind.",
    is_specialty: false,
    display_order: 14,
  },
  {
    slug: "joint-bone-diseases",
    title: "Joint & Bone Diseases",
    description:
      "Rheumatoid Arthritis, Ankylosing Spondylitis, Avascular Necrosis, Slipped Disc, Gout and Osteoarthritis — treated constitutionally, without lifelong painkiller dependency.",
    is_specialty: true,
    display_order: 15,
  },
  {
    slug: "heart-cardiac-support",
    title: "Cardiac & Heart Support",
    description:
      "Supportive homeopathic care alongside cardiology treatment — Hypertension, ASD, VSD, Cardiomyopathy and Eisenmenger's Syndrome — for families managing complex heart conditions.",
    is_specialty: true,
    display_order: 16,
  },
];

export async function getDiseases(): Promise<Disease[]> {
  if (!supabase) return DISEASE_SEED;

  const { data, error } = await supabase
    .from("diseases")
    .select("slug, title, description, is_specialty, display_order")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return DISEASE_SEED;
  }

  return data as Disease[];
}

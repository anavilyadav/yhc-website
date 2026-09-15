/**
 * Diet & Lifestyle Guide — confirmed with Dr Anavil (chat, 2026-09-16),
 * inspired by a competitor's version of the same idea. General,
 * educational guidance only — deliberately hedged throughout, since
 * real dietary limits (especially for kidney and cardiac patients) are
 * individualised and must come from an actual consultation, not a
 * public webpage. Never presented as a substitute for what the doctor
 * tells a specific patient.
 */
export interface LifestyleTip {
  title: string;
  points: string[];
}

export const UNIVERSAL_TIPS: LifestyleTip[] = [
  {
    title: "Hydration",
    points: [
      "2.5-3 litres of water daily, spread through the day",
      "Warm water on an empty stomach in the morning",
      "Avoid very cold/iced water with meals — it can slow digestion",
      "Coconut water or jeera (cumin) water are good additions",
      "Limit carbonated and sugary drinks",
    ],
  },
  {
    title: "Meal Timing",
    points: [
      "Don't skip breakfast — eat within an hour of waking",
      "Try to eat dinner before 8 PM where possible",
      "Leave a 3-4 hour gap between meals",
      "Avoid heavy meals right before sleeping",
      "Chew food slowly — it genuinely helps digestion",
    ],
  },
  {
    title: "Medicine Timing",
    points: [
      "Take homeopathic medicine 30 minutes before or after food",
      "Avoid strong coffee or tea around the time you take medicine",
      "Let globules dissolve under the tongue — don't chew or swallow whole",
      "Store medicines away from heat, direct sunlight and strong smells",
      "Take medicine at roughly the same time each day — consistency matters",
    ],
  },
  {
    title: "Sleep",
    points: [
      "Aim for 7-8 hours — this is genuinely part of the treatment, not optional",
      "Try to be asleep before midnight",
      "Avoid screens for 30 minutes before bed",
      "Keep the room dark and cool",
      "Keep a consistent wake time, even on weekends",
    ],
  },
  {
    title: "Movement",
    points: [
      "At least 30 minutes of walking daily",
      "Yoga or pranayama, 15-20 minutes, 4 times a week if possible",
      "Avoid sitting for long unbroken stretches — stand or move every hour",
      "Moderate exercise is fine during treatment unless your doctor says otherwise",
      "Avoid extreme overexertion during acute flare-ups",
    ],
  },
  {
    title: "Stress",
    points: [
      "Chronic stress is one of the biggest things that slows down treatment response",
      "Anulom-vilom or simple breathing practice, 10 minutes daily, helps many patients",
      "Tell us about major emotional events during your treatment — they're genuinely relevant to your case",
      "A short walk outdoors is a simple, real stress-reliever",
    ],
  },
];

export interface ConditionGuide {
  slug: string;
  label: string;
  intro: string;
  points: string[];
  caution?: string;
}

export const CONDITION_GUIDES: ConditionGuide[] = [
  {
    slug: "skin",
    label: "Skin Conditions",
    intro: "For vitiligo, psoriasis, eczema and similar chronic skin conditions:",
    points: [
      "Eat a balanced diet with adequate protein — skin repair needs it",
      "Moderate, sensible sun exposure is generally fine; avoid harsh midday sun for long periods",
      "Note any specific food that seems to trigger a flare for you personally — this varies person to person, so we'll discuss your own pattern rather than a blanket list",
      "Stress is a well-known trigger for many skin flares — the stress practices above are especially relevant here",
      "Use gentle, fragrance-free skincare; avoid harsh soaps on affected areas",
    ],
  },
  {
    slug: "kidney",
    label: "Kidney Disease",
    intro: "For kidney disease and high creatinine:",
    points: [
      "Fluid and protein intake needs to be personalised to your specific kidney function — this is discussed in detail at your consultation, based on your reports",
      "Avoid excess salt and processed/packaged foods",
      "Don't self-restrict or self-supplement based on generic online advice — bring your reports and we'll set real, safe limits for your case",
    ],
    caution: "Kidney disease diet is one of the most individualised areas of care — please don't follow generic internet advice here. What's safe for one patient's creatinine level can be wrong for another's.",
  },
  {
    slug: "womens-health",
    label: "Women's Health & PCOS",
    intro: "For PCOS, irregular periods and hormonal imbalance:",
    points: [
      "A balanced plate with fibre, protein and healthy fats supports hormonal regulation",
      "Reduce refined sugar and heavily processed carbohydrates where you can",
      "Regular movement (even just daily walking) genuinely helps hormonal symptoms for many patients",
      "Sleep quality matters more than people expect — hormonal repair is linked closely to sleep",
      "Track your cycle if you can; the pattern is genuinely useful information for your consultation",
    ],
  },
  {
    slug: "thyroid",
    label: "Thyroid Disorders",
    intro: "For hypothyroidism and hyperthyroidism:",
    points: [
      "Take any thyroid medication prescribed by your treating doctor exactly as directed — we never ask you to stop it without that doctor's guidance",
      "A balanced diet with adequate iodine (from normal dietary sources) is generally fine for most patients",
      "Regular, moderate exercise supports metabolism and energy levels",
      "Sleep and stress management both have a real, documented link to thyroid symptoms",
    ],
  },
  {
    slug: "digestive",
    label: "Digestive Issues",
    intro: "For IBS, chronic gastritis and digestive complaints:",
    points: [
      "Regular meal timing matters more here than almost any other condition",
      "Eat slowly, and stop before you feel completely full",
      "Note your own personal trigger foods rather than following a generic elimination list — this varies a great deal between patients",
      "Adequate fibre and hydration support regular digestion",
      "Avoid lying down immediately after a meal",
    ],
  },
  {
    slug: "joint-bone",
    label: "Joint & Bone Diseases",
    intro: "For arthritis and chronic joint pain:",
    points: [
      "Maintaining a healthy weight meaningfully reduces load on weight-bearing joints",
      "Gentle, regular movement (walking, swimming) is usually better than long inactive stretches",
      "Include calcium and vitamin D-rich foods in your diet where appropriate for you",
      "Avoid prolonged sitting or standing in one position",
      "Warm compresses can help with stiffness for some patients — ask us about your specific case",
    ],
  },
  {
    slug: "mental-health",
    label: "Anxiety & Sleep",
    intro: "For anxiety, stress and sleep disorders:",
    points: [
      "Consistent sleep and wake times matter more than total hours alone",
      "Limit caffeine, especially after early afternoon",
      "Regular exercise is one of the most evidence-backed things you can do for anxiety symptoms generally",
      "Simple breathing practice (even 5-10 minutes) genuinely helps many patients in the moment",
      "Maintaining real social connection — not just contact — supports recovery",
    ],
  },
  {
    slug: "cardiac",
    label: "Cardiac Support",
    intro: "For supportive homeopathic care alongside cardiology treatment:",
    points: [
      "Follow your cardiologist's dietary and medication guidance as the primary source of truth — our care here is supportive, alongside that treatment",
      "A generally low-salt, balanced diet is appropriate for most cardiac patients, but your exact limits should come from your treating cardiologist",
      "Gentle, doctor-approved movement is usually encouraged rather than complete rest",
      "Stress management is genuinely relevant to cardiac health, and worth discussing openly with us",
    ],
    caution: "This is supportive guidance only — for cardiac conditions, your cardiologist's specific instructions always take priority over general advice here.",
  },
];

export const DIET_MISCONCEPTIONS = [
  "You do not need to permanently give up coffee, onion or garlic just because you're on homeopathic treatment — for most patients and most remedies, these don't interfere. We'll tell you specifically if something needs to be avoided for your particular prescription.",
  "Homeopathic medicine does not require a completely bland or restricted diet by default — over-restricting unnecessarily can itself add stress, which works against you.",
  "\"Natural\" and \"safe to combine with anything\" are not the same thing — always tell us about supplements or other treatments you're taking, even if they seem unrelated.",
];

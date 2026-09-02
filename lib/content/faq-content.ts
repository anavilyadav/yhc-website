// Source: dr-anavil-step9-faq-page-schema-2026-07-12.docx.
// Content is deliberately in Hinglish (Roman-script Hindi/English mix) —
// the doc frames this page as the replacement for Google Business
// Profile Q&A (deprecated Nov 2025), feeding Google's "Ask Maps" AI and
// voice/AI search, which is why this page's register differs from the
// English-only disease pages and blog posts. Kept verbatim per the doc's
// own "copy-paste ready" instruction.

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}

export const faqSeo = {
  pageTitle: "Frequently Asked Questions | Yadav Homeo Clinic Jaipur | Homeopathy FAQ",
  metaDescription:
    "Answers to the most common questions about homeopathic treatment at Yadav Homeo Clinic — fees, vitiligo, online consultation, autism, kidney disease, PCOS, and more.",
  focusKeyword: "homeopathy FAQ Jaipur",
  secondaryKeywords: [
    "Yadav Homeo Clinic questions",
    "online homeopathy consultation FAQ",
    "vitiligo treatment FAQ Jaipur",
  ],
};

export const faqHero = {
  headline: "Every Question You Were Too Busy to Ask — Answered.",
  subheadline:
    "Whether you are deciding whether to start treatment, wondering if online consultation works, or trying to understand what classical homeopathy actually does differently — this page has honest answers. No marketing. Just clarity.",
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Fees & Booking",
    questions: [
      {
        question: "Yadav Homeo Clinic mein consultation fee kitni hai?",
        answer:
          "Fee same hai — chahe in-clinic ho ya online. New patient (pehli visit, registration + consultation + 1 month medicine): ₹3,500 for 1 month, ₹5,000 for 2 months, ₹7,500 for 3 months. Follow-up patients ke liye: ₹2,500 for 1 month, ₹5,000 for 2 months, ₹7,500 for 3 months. Longer packages same pattern follow karte hain.",
      },
      {
        question: "Kya online consultation in-clinic jitni effective hai?",
        answer:
          "Haan — classical homeopathic diagnosis physical examination par nahi balki aapki symptoms ki complete picture par based hai, jo online equally accurately gather ki ja sakti hai. Hamari case records mein in-clinic aur online patients ke treatment outcomes mein koi meaningful difference nahi dekhti. Online vitiligo, PCOS, thyroid, kidney disease, migraines, autism sab ke liye equally suitable hai.",
      },
      {
        question: "Yadav Homeo Clinic mein vitiligo ka treatment hota hai?",
        answer:
          "Haan — vitiligo humari sab se established speciality hai. Dr T P Yadav 1991 se vitiligo cases treat kar rahe hain. Humari clinical experience mein 40-60% patients jo 12+ months complete karte hain unhe visible repigmentation milti hai. Pehla result — spread ka rukna — typically 2-3 mahine mein dikhta hai.",
      },
      {
        question: "Dr Anavil Yadav ka experience kitna hai?",
        answer:
          "Dr Anavil Yadav BHMS qualified hain, 2016 se practice kar rahe hain. Unke paas 10+ saal ka clinical observation experience hai kyunki unhone apne father Dr T P Yadav ke saath unke BHMS studies ke dauran bhi consult kiya. Woh chronic, genetic aur autoimmune diseases mein specialise karte hain aur Yadav Homeo Clinic ke online consultation program ko lead karte hain.",
      },
      {
        question: "Kya homeopathy aur allopathy saath le sakte hain?",
        answer:
          "Haan — absolutely. Hum kisi bhi prescribed medication ko band karne ke liye nahi kehte. Homeopathic constitutional treatment apni existing medicines ke saath chal sakti hai. Jaise conditions respond karti hain, doctors apne medicines ki zaroorat khud reduce hoti dekhte hain — controlled supervision mein. Never stop any prescribed medicine abruptly.",
      },
      {
        question: "Yadav Homeo Clinic ki timing kya hai?",
        answer:
          'Both clinics Monday to Saturday open hain. Exact timings confirm karne ke liye please WhatsApp karein +91-8949427254 ya Google Maps pe listing check karein — wahan current hours hamesha updated rehte hain.',
      },
    ],
  },
  {
    category: "Specific Conditions",
    questions: [
      {
        question: "Kya autism ka homeopathic treatment hota hai?",
        answer:
          "Haan. Hamari practice mein 5000+ special children treated hain, autism unme significant portion hai. Constitutional homeopathy autism mein communication, sleep, meltdown frequency aur sensory hypersensitivity mein improvement support kar sakti hai. Yeh additional therapy nahi hai — yeh fundamental constitutional treatment hai jo child ke overall constitutional state ko address karta hai. Results vary aur honesty se assess ki jaati hain pehli consultation mein.",
      },
      {
        question: "High creatinine mein homeopathy kab kaam karti hai?",
        answer:
          "Homeopathy CKD ke early to moderate stages mein — jab kidney function still significantly present hai — best results deta hai. Humari clinical experience mein creatinine 3 se 8 range mein patients mein consistent improvement dekhte hain regular monitoring ke saath. Dialysis pe already patients mein role supportive hota hai. Labs har 6 weeks pe check kiye jaate hain aur prescription results ke according adjust hoti hai.",
      },
      {
        question: "Psoriasis ke liye kitna time lagta hai?",
        answer:
          "Psoriasis treatment typically 8 se 14 mahine ki process hai. Pehle 2-3 mahine mein itch aur inflammation mein improvement dikhna shuru hoti hai. Plaque size reduction 4-6 months mein visible hoti hai. Complete clearance — jab milta hai — typically 12+ months treatment ki result hai. Scalp psoriasis typically faster respond karta hai skin psoriasis se. Hum monthly progress track karte hain.",
      },
      {
        question: "PCOS mein homeopathy kab tak kaam karta hai?",
        answer:
          "PCOS mein initial cycle regularisation typically 3-4 months mein dekhte hain. Complete hormonal balance aur symptom control — weight, facial hair, mood — 6-9 months process hai. Fertility outcomes ke liye timeline case-specific hai aur pehli consultation mein honestly assess ki jaati hai. Homeopathic treatment allopathic hormonal medication ke parallel ya baad mein shuru kiya ja sakta hai.",
      },
      {
        // FLAG 9 fix applied (dr-anavil-complete-legal-audit-2026-07-14.docx):
        // added the "individual results vary" qualifier the audit required.
        question: "Migraine ke liye permanently theek ho sakta hai?",
        answer:
          "Hamari clinical experience mein significant portion migraine patients mein attack frequency dramatically reduce hoti hai — 3-4 per month se 1 per month ya less. Complete cessation possible hai early chronic cases mein. Long-standing migraines of 15+ years mein control likely hai complete elimination se zyada. Triggers identify karke constitutional treatment customise ki jaati hai. Individual results vary significantly — yeh improvement guaranteed nahi hai, har patient ka response alag hota hai based on treatment duration, constitution, aur trigger management.",
      },
      {
        question: "Kya thyroid dose homeopathy se kam hoti hai?",
        answer:
          "Kuch patients mein haan — endocrinologist supervision mein. Constitutional treatment thyroid function ko support karta hai aur kuch patients naturally apni thyroxine requirement reduced feel karte hain. Dose kabhi bhi bina endocrinologist guidance ke reduce mat karo. Hum regular TSH monitoring recommend karte hain aur clinic clear communication maintain karta hai regarding any dose changes.",
      },
      {
        question: "Yadav Homeo Clinic Jagatpura mein bhi hai?",
        answer:
          'Haan, Yadav Homeo Clinic ki Jaipur mein do locations hain — main branch aur Jagatpura branch. Exact address aur directions ke liye please WhatsApp karein +91-8949427254 ya Google Maps pe "Yadav Homeo Clinic" search karein.',
      },
      {
        question: "Pahli consultation mein kya laana padta hai?",
        answer:
          "Please laayein: saare blood reports, scan reports aur previous prescriptions; current medicines ki list; bimari ka brief timeline; family medical history. Skin conditions ke liye: natural light mein photos cream lagane se pehle. Kidney patients ke liye: creatinine, urea, eGFR, urine routine reports. Children ke liye: developmental history aur koi therapist reports. Pehli consultation 45-60 minutes hoti hai — jitna zyada share karenge utna accurate prescription milega.",
      },
      {
        question: "Kya bachon ke liye homeopathy safe hai?",
        answer:
          "Haan — birth se. Homeopathic medicines standard potencies mein pharmacologically active molecules nahi hote aur koi known side effects nahi hain. Hum infants ko newborn stage se treat karte hain colic, jaundice recovery, eczema ke liye. Children typically adults se faster respond karte hain constitutional homeopathic treatment se.",
      },
    ],
  },
  {
    category: "Treatment Process",
    questions: [
      {
        question: "Online payment kaise karein?",
        answer:
          "UPI ID ya QR code se payment karein (appointment page pe available). Payment ke baad screenshot WhatsApp karein +91-8949427254 apne naam ke saath. International patients ke liye payment options available hain — WhatsApp pe discuss karein. Online consultation ka prescription 24-48 hours mein send kiya jaata hai complete intake form aur reports receive hone ke baad.",
      },
      {
        question: "Kya classical homeopathy combination medicines se alag hai?",
        answer:
          "Haan — completely different approach. Classical homeopathy mein ek samay mein sirf ek carefully selected constitutional remedy di jaati hai jo poori individual patient ko match karti hai. Combination medicines — ek condition ke liye multiple remedies — ek alag approach hai jo Yadav Homeo Clinic mein use nahi hoti. Classical approach ko deeper, more lasting results ke liye more individualised maana jaata hai. Yeh distinction pehle doctor se select karte waqt puchne layak hai.",
      },
      {
        question: "NRI patients kaise online consult book karein?",
        answer:
          "WhatsApp karein +91-8949427254. Detailed intake form fill karein (link WhatsApp pe milega), medical reports send karein, aur payment discuss karein — international payment options available hain. Consultation entirely asynchronous ya video call pe ho sakti hai aapki preference ke hisaab se. Prescription WhatsApp pe deliver ki jaati hai medicine delivery guidance ke saath — koi Indian address needed nahi.",
      },
      {
        question: "Kitne patients treat kiye Yadav Homeo Clinic ne?",
        answer:
          "1 lakh se zyada patients 30+ years mein — in mein 5000+ special children shamil hain. Dr T P Yadav ne 1991 mein clinic shuru kiya. Do Jaipur locations aaj available hain in-clinic patients ke liye aur pan-India + international online consultations ke liye.",
      },
      {
        question: "Kya skin before/after photos dekh sakte hain?",
        answer:
          "Haan — patient stories page pe kuch anonymised before/after cases available hain written consent ke saath. Consultation mein hum aapko relevant condition ke similar cases ke records dikhate hain. Photo quality aur available cases time ke saath badh rahe hain jaise hum patient consent documentation system build kar rahe hain.",
      },
      {
        question: "Emergency mein consult kaise milega?",
        answer:
          "Medical emergencies ke liye please nearest emergency facility ya ambulance contact karein — homeopathy acute emergency care nahi hai. Urgent chronic condition worsening ke liye WhatsApp karein +91-8949427254 — daytime mein 30 minute response target hai. Agar aapke existing treatment mein koi sudden change hai please apne treating doctor ko bhi contact karein.",
      },
    ],
  },
  {
    category: "More on Specific Conditions",
    questions: [
      {
        question: "Kya male infertility ka homeopathic treatment hota hai?",
        answer:
          "Haan. Low sperm count, poor motility, aur teratozoospermia — yeh sab constitutional homeopathic treatment se respond kar sakte hain. Treatment sperm parameters pe kaam karta hai hormonal balance aur oxidative stress reduce karke. Results typically 3-6 months mein measurable hote hain regular semen analysis se. Privacy poori tarah confidential hai — online consultation available hai.",
      },
      {
        question: "Kidney stones ke liye homeopathy kab kaam karti hai?",
        answer:
          "Homeopathy recurrent kidney stone formation ko reduce karne mein effective hai. Already formed stones — unhe dissolve karna — limited results deta hai aur depends on stone size aur composition. Prevention aur recurrence reduction hamari main focus hai kidney stone cases mein, along with pain management during acute episodes using homeopathic acute prescribing.",
      },
      {
        question: "Kya genetic diseases mein homeopathy help karti hai?",
        answer:
          "Genetic diseases — Down syndrome, thalassemia, cerebral palsy — ke liye homeopathy ek honest nuanced role play karti hai. Genetic condition itself change nahi hoti lekin constitutional treatment functional improvement support kar sakti hai — better immunity, improved sleep, increased energy, reduction in secondary complications. Hum families se honestly communicate karte hain ki kya realistic expectations hain, kya nahi.",
      },
      {
        // Q25 adapted: the source doc links to a psoriasis sub-page that
        // was never built (only the vitiligo sub-page exists, from STEP7)
        // — dropped that reference rather than link to a page that 404s.
        question: "Vitiligo detail mein kahan dekh sakte hain?",
        answer:
          "Vitiligo ke detailed page ke liye visit karein: /skin-diseases/vitiligo-treatment-jaipur/ — wahan treatment timeline, honest numbers, aur FAQs available hain. General skin diseases page pe sab conditions ka overview hai: /skin-diseases/",
      },
    ],
  },
];

export const faqFinalCta = "Still Have a Question?";

export const faqDisclaimer =
  "This page provides general information about homeopathic treatment at Yadav Homeo Clinic. Individual results vary and are not guaranteed. It is not a substitute for professional medical advice — always consult your treating doctor before making any changes to prescribed treatment.";

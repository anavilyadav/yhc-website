import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug } from "@/lib/data/cities";
import { telemedicineComplianceStatement } from "@/lib/content/online-consultation-content";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { WhatsAppIcon, CheckIcon, GlobeIcon } from "@/components/shared/icons";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const info = getCityBySlug(city);
  if (!info) return {};

  const pageUrl = `${siteConfig.url}/cities/${info.slug}`;
  return {
    title: { absolute: `Online Homeopathy Consultation for ${info.name} Patients | ${siteConfig.name}` },
    description: `Video consultation with Dr Anavil Yadav and Dr T P Yadav for ${info.name} patients — same depth of case-taking as an in-clinic visit at Yadav Homeo Clinic, Jaipur. Medicine couriered to ${info.name}.`,
    alternates: { canonical: pageUrl },
    // Techeve audit (17 Sept 2026): 157 near-identical city pages risk
    // "doorway page" treatment. Per Dr Anavil's decision (2026-09-19),
    // only the ~20 major cities (lib/data/cities.ts, isMajor) stay
    // indexable — the page itself still exists and works for anyone who
    // reaches it directly or via the /cities hub, it's just excluded from
    // the sitemap and told not to be indexed.
    ...(info.isMajor ? {} : { robots: { index: false, follow: true } }),
  };
}

const CONDITIONS = [
  "Vitiligo & chronic skin conditions",
  "PCOS, thyroid & hormonal imbalance",
  "Kidney disease (high creatinine)",
  "Autism & developmental delays",
  "Autoimmune conditions",
  "Migraine & chronic headaches",
  "Arthritis & joint pain",
  "Anxiety, stress & sleep issues",
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const info = getCityBySlug(city);
  if (!info) notFound();

  const faqs = [
    {
      question: `Does Yadav Homeo Clinic see patients from ${info.name}?`,
      answer: `Yes — Dr Anavil Yadav and Dr T P Yadav consult with ${info.name} patients regularly via video call, with the same depth of case-taking as an in-clinic visit at our Jaipur clinics.`,
    },
    {
      question: `How do I get medicine in ${info.name}?`,
      answer: `After your consultation, medicine is couriered directly from Jaipur to your ${info.name} address, usually arriving within 3-4 working days. You can also collect from a local homeopathy pharmacy if you prefer, using the prescription we send you.`,
    },
    {
      question: `Can I visit the Jaipur clinic in person instead?`,
      answer: `Absolutely. Some ${info.name} patients prefer a first consultation in person and continue online afterwards. It's ${info.travelOptions} from ${info.name} to our Jaipur clinic — WhatsApp us and we'll help plan around your travel.`,
    },
    {
      question: "Is online homeopathy consultation legal and safe?",
      answer: telemedicineComplianceStatement,
    },
  ];

  return (
    <>
      <section className="bg-navy px-5 py-14 text-cream md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">
            {info.name}, {info.state} · Online Consultation
          </p>
          <h1 className="mt-3 font-serif text-2xl md:text-4xl">
            Online Homeopathy Consultation for {info.name} Patients
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80">
            Dr Anavil Yadav and Dr T P Yadav — 35+ years of classical homeopathic practice in
            Jaipur — consult with {info.name} patients via video call, with medicine couriered
            directly to your address.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                `Hello, I'm interested in an online consultation. I'm from ${info.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm bg-amber px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link
              href="/appointment"
              className="flex items-center gap-2 rounded-sm border-2 border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10"
            >
              <GlobeIcon className="h-4 w-4" /> See Pricing &amp; Book Online
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">
            Conditions {info.name} Patients Consult Us For
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CONDITIONS.map((c) => (
              <div key={c} className="flex items-start gap-2 text-[13.5px] text-text-mid">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">
            How Online Consultation Works from {info.name}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-text-mid">
            Homeopathic prescribing depends far more on a detailed conversation than on a
            physical examination, which is why it adapts well to video consultation. A first
            consultation typically runs 45 minutes to an hour and covers your full history —
            symptoms, previous treatment, sleep, diet, stress and family history. Wherever you
            are in {info.name}, the consultation happens over video call at a scheduled time
            that works for you.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-text-mid">
            Any reports you already have (blood work, scans, prior prescriptions) can be shared
            beforehand on WhatsApp. We do not ask you to stop medication prescribed by another
            doctor — where a specialist opinion is needed, we say so honestly.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-text-mid">
            After the consultation, your prescription is prepared and medicine is couriered to
            your {info.name} address, usually arriving within 3-4 working days. Follow-ups are
            scheduled every 4-6 weeks, with WhatsApp support in between for questions about
            dosage or reactions.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-2xl rounded-xl border border-border-amber bg-cream-bg p-6 text-center shadow-sm">
          <h2 className="font-serif text-lg text-navy">
            Prefer an In-Person First Visit From {info.name}?
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-text-mid">
            Some patients travel to Jaipur for a first consultation and continue online
            afterwards. From {info.name}, that&apos;s approximately{" "}
            <strong className="text-navy">{info.travelOptions}</strong>{" "}
            <span className="text-text-light">
              (road distance roughly {info.distanceKm.toLocaleString("en-IN")} km — actual travel
              time varies).
            </span>{" "}
            WhatsApp us before you travel so we can plan your visit around clinic timings.
          </p>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion
              items={faqs.map((f, i) => ({
                id: `city-faq-${i}`,
                question: f.question,
                answer: f.answer,
                sortOrder: i,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-14 text-center text-cream">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-xl md:text-2xl">
            Ready to Start From {info.name}?
          </h2>
          <p className="mt-3 text-[15px] text-cream/80">
            WhatsApp us your condition — we&apos;ll confirm your slot and answer any questions
            before you book.
          </p>
          <a
            href={whatsappLink(
              `Hello, I'm interested in an online consultation. I'm from ${info.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <p className="mt-6 text-sm">
            <Link href="/cities" className="text-cream/70 underline hover:text-amber-light">
              See all cities we serve →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

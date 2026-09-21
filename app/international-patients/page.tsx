import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { INTERNATIONAL_PLANS, percentSaved } from "@/lib/data/international-pricing";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { WhatsAppIcon, GlobeIcon, CheckIcon, InfoIcon } from "@/components/shared/icons";

const pageUrl = `${siteConfig.url}/international-patients`;

export const metadata: Metadata = {
  title: { absolute: "Homeopathy Consultation for International Patients" },
  description:
    "Online homeopathy consultation from anywhere in the world with Dr Anavil Yadav & Dr T P Yadav — video case-taking, medicine shipped internationally.",
  alternates: { canonical: pageUrl },
};

const COUNTRIES = [
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇩🇪", name: "Germany" },
];

const JOURNEY_STEPS = [
  {
    title: "Book",
    body: "WhatsApp us or fill the online consultation form — tell us your condition and country. We confirm your slot, usually within a day.",
  },
  {
    title: "Video Consultation",
    body: "A detailed video case-taking call with Dr Anavil or Dr T P Yadav — same depth as an in-clinic visit, at a time that works across your timezone.",
  },
  {
    title: "Prescription",
    body: "Your personalised remedy is prepared as globules or tablets — never alcohol-based drops, which most countries' postal and courier services restrict for international shipping.",
  },
  {
    title: "Payment for Medicine",
    body: "Medicine cost (separate from the consultation fee) is invoiced after your consultation. Our PayPal/Wise setup is currently being finalised — until it's live, we'll confirm the easiest payment method for your country directly on WhatsApp once your case is confirmed.",
  },
  {
    title: "Delivery",
    body: "Shipped via India Post International Speed Post or a courier service, with a tracking number shared on WhatsApp.",
  },
  {
    title: "Follow-Up",
    body: "Ongoing video follow-ups track your progress and adjust your remedy — included in your plan or booked separately as you go.",
  },
];

const DELIVERY_TIMES = [
  { region: "UAE, UK, Singapore, Gulf countries", days: "10–15 business days" },
  { region: "USA, Canada, Australia, New Zealand", days: "12–20 business days" },
  { region: "Europe (rest)", days: "12–18 business days" },
  { region: "Other countries", days: "15–25 business days — ask us for your country specifically" },
];

const FAQS = [
  {
    question: "Is homeopathy treatment from India legal for me to receive?",
    answer:
      "Homeopathy is a recognised system of medicine in India, and Dr T P Yadav and Dr Anavil Yadav are both registered homeopathic physicians (Rajasthan Homeopathic Council). Telemedicine/teleconsultation by registered Indian practitioners is permitted under India's 2020 Telemedicine Practice Guidelines and the AYUSH ministry's parallel guidelines for homeopathy. Receiving a consultation and personal-use medicine as a patient is generally not restricted, but rules on importing medicine differ by country — if you are unsure, check your own country's customs guidance before ordering, or ask us and we'll share what we know for your country.",
  },
  {
    question: "Will my medicine clear customs?",
    answer:
      "Homeopathic medicines are highly diluted and not controlled substances, and we ship with proper customs documentation (a declared value and contents description). Most countries clear small, personal-use parcels without issue, but customs rules and occasional delays are outside our control — we cannot guarantee clearance timelines.",
  },
  {
    question: "What if the time zone difference makes scheduling hard?",
    answer:
      "We regularly consult with patients across very different time zones — from the US to Australia. WhatsApp us your general availability and we'll find a slot that works, including early morning or evening (India time) if needed.",
  },
  {
    question: "Do you ship alcohol-based tinctures internationally?",
    answer:
      "No — international shipments are prepared as globules or tablets, not alcohol-based drops, since most postal and courier services restrict shipping flammable liquids internationally. This does not affect the treatment itself, only the form the medicine is dispensed in.",
  },
  {
    question: "I'm in Jaipur but travelling abroad — can I still use this?",
    answer:
      "Yes. These rates and the shipping process apply to anyone receiving consultation or medicine outside India, regardless of your nationality or usual residence.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Consultations already conducted, and annual plans once started, are non-refundable — this is the case for all our plans, domestic and international.",
  },
];

function whatsappForPlan(title: string, priceUsd: number) {
  return whatsappLink(
    `Hello, I'm an international patient interested in the "${title}" ($${priceUsd}) plan. My name is [Name] and I'm from [Country].`
  );
}

export default function InternationalPatientsPage() {
  return (
    <>
      <section className="bg-navy px-5 py-16 text-cream md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">
            Serving Patients Worldwide
          </p>
          <h1 className="mt-3 font-serif text-2xl md:text-4xl">
            Homeopathy Consultation From Anywhere in the World
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80">
            Dr Anavil Yadav and Dr T P Yadav consult with patients outside India via video call —
            the same depth of case-taking as an in-clinic visit, with medicine shipped
            internationally.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello, I'm an international patient interested in a consultation.")}
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
              <GlobeIcon className="h-4 w-4" /> See Domestic (India) Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
            Countries We Regularly Serve
          </h2>
          <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-8">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1.5 text-center">
                <span className="text-3xl" aria-hidden>
                  {c.flag}
                </span>
                <span className="text-[11px] leading-tight text-text-mid">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[13px] text-text-light">
            Not listed? WhatsApp us — we treat patients from many other countries too.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
            Your Patient Journey
          </h2>
          <div className="mt-8 space-y-6">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-amber">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-text-mid">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">Medicine Delivery Times</h2>
          <p className="mt-2 text-[14px] text-text-mid">
            Estimated — customs and local postal handling can occasionally add extra days, so we
            give a realistic range rather than a fixed promise.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-dark md:hidden">
            ← Swipe to see delivery estimates →
          </p>
          <div className="relative mt-2 md:mt-5">
            <div className="overflow-x-auto rounded-lg border border-border-amber shadow-sm">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy text-cream">
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">Region</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">
                      Estimated Delivery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DELIVERY_TIMES.map((row, i) => (
                    <tr key={row.region} className={i % 2 === 1 ? "bg-white" : "bg-cream-bg"}>
                      <td className="px-4 py-3 text-text-mid">{row.region}</td>
                      <td className="px-4 py-3 font-semibold text-navy">{row.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-lg bg-gradient-to-l from-cream-bg to-transparent md:hidden"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14" id="pricing">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
            International Pricing
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-text-mid">
            All amounts in USD. Consultation depth is identical to an in-clinic visit —
            medicine cost is separate and invoiced after your consultation.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INTERNATIONAL_PLANS.map((plan) => {
              const save = percentSaved(plan);
              return (
                <div
                  key={plan.id}
                  className="relative rounded-xl border border-border-amber bg-white p-6 shadow-sm"
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-5 rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-serif text-base font-bold text-navy">{plan.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-mid">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    {plan.originalPriceUsd && (
                      <span className="text-sm text-text-light line-through">
                        ${plan.originalPriceUsd.toLocaleString("en-US")}
                      </span>
                    )}
                    <span className="font-serif text-2xl font-bold text-navy">
                      ${plan.priceUsd.toLocaleString("en-US")}
                    </span>
                  </div>
                  {save !== null && (
                    <div className="mt-1 inline-block rounded-full bg-green/10 px-2.5 py-1 text-[11px] font-bold text-green">
                      Save {save}% vs. paying month-to-month
                    </div>
                  )}
                  <ul className="mt-4 space-y-1.5">
                    {plan.inclusions.map((line) => (
                      <li
                        key={line}
                        className="flex gap-1.5 text-[13px] leading-relaxed text-text-mid"
                      >
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappForPlan(plan.title, plan.priceUsd)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-amber px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
          <p className="mt-6 flex items-start gap-1.5 text-[12.5px] italic leading-relaxed text-text-light">
            <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-dark" />
            Our PayPal/Wise setup is currently being finalised — until it&apos;s live, the easiest
            payment method for your country will be confirmed on WhatsApp once your consultation
            is booked. No consultation fee is ever included in the medicine cost, and no payment
            is refundable once a consultation has taken place or an annual plan has started.
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
              items={FAQS.map((f, i) => ({
                id: `intl-faq-${i}`,
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
          <h2 className="font-serif text-xl md:text-2xl">Ready to Start?</h2>
          <p className="mt-3 text-[15px] text-cream/80">
            WhatsApp us your condition and country — we&apos;ll confirm your slot and answer any
            questions before you book.
          </p>
          <a
            href={whatsappLink("Hello, I'm an international patient interested in a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="bg-cream px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="hero-text font-serif text-3xl leading-snug text-navy md:text-5xl md:leading-tight">
          When Every Treatment Has Failed — Homeopathy Still Has an Answer.
        </h1>

        <p className="clinic-intro mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-mid md:text-lg">
          Yadav Homeo Clinic has been Jaipur&apos;s most trusted name in classical homeopathy for
          over 35 years. We specialise in chronic, genetic, autoimmune, and rare diseases — the
          conditions that mainstream medicine often calls &lsquo;incurable&rsquo;.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book Your Consultation →
          </a>
          <Link
            href="/about"
            className="w-full rounded-sm border-2 border-navy px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            Learn About Our Treatments
          </Link>
        </div>

        <p className="mt-8 text-sm font-medium text-text-mid">
          ✔ 35+ Years of Practice &nbsp; ✔ 1 Lakh+ Patients Treated &nbsp; ✔ 5,000+ Special
          Children Helped &nbsp; ✔ 2 Clinics in Jaipur
        </p>
      </div>
    </section>
  );
}

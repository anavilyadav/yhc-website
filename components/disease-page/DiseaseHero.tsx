import Link from "next/link";
import { whatsappLink } from "@/lib/site-config";
import type { DiseasePageHero } from "@/lib/types";

export default function DiseaseHero({
  hero,
  conditionName,
}: {
  hero: DiseasePageHero;
  conditionName: string;
}) {
  return (
    <section className="bg-cream px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-text-mid">
          <Link href="/" className="hover:text-amber-dark">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/#conditions" className="hover:text-amber-dark">
            Conditions We Treat
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-navy">{conditionName}</span>
        </nav>

        <h1 className="font-serif text-2xl leading-snug text-navy md:text-4xl md:leading-tight">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-text-mid md:text-base">
          {hero.subheadline}
        </p>

        {hero.trustLine && (
          <p className="mt-6 text-sm font-medium text-text-mid">
            {hero.trustLine.split("|").map((item, i, arr) => (
              <span key={item}>
                ✔ {item.trim()}
                {i < arr.length - 1 && <>&nbsp;&nbsp;</>}
              </span>
            ))}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(`Hello, I would like to book a consultation for ${conditionName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book Your Consultation →
          </a>
          <Link
            href="/online-consultation"
            className="w-full rounded-sm border-2 border-navy px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            Start Online Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Disease } from "@/lib/types";

export default function ConditionsGrid({ diseases }: { diseases: Disease[] }) {
  return (
    <section id="conditions" className="scroll-mt-20 bg-cream px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-navy md:text-3xl">Conditions We Treat</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-mid">
            We specialise in chronic, rare, and complex conditions — the ones where patients are
            told &lsquo;nothing more can be done&rsquo;. Over 16 categories of disease treated
            with deep classical homeopathy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diseases.map((disease) => (
            <Link
              key={disease.slug}
              href={`/${disease.slug}/`}
              className="group relative overflow-hidden rounded-sm border border-border-amber bg-white p-5 transition-colors hover:border-amber"
            >
              <span
                className={`absolute inset-x-0 top-0 h-[3px] ${
                  disease.is_specialty ? "bg-green" : "bg-amber"
                }`}
              />
              <h3 className="font-serif text-base font-bold text-navy">{disease.title}</h3>
              {disease.is_specialty && (
                <span className="mt-1.5 inline-block bg-green px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                  SPECIALITY
                </span>
              )}
              <p className="mt-2 text-[14px] leading-relaxed text-text-mid">
                {disease.description}
              </p>
              <span className="mt-3 block text-xs font-bold text-amber-dark group-hover:text-navy">
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

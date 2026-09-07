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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {diseases.map((disease, index) => (
            <Link
              key={disease.slug}
              href={`/${disease.slug}/`}
              // A lone card left over in the final row (e.g. 16 items in a
              // 3-column grid) reads as a layout mistake — centre it under
              // the row above instead of leaving it stranded on the left.
              className={`group relative overflow-hidden rounded-sm border border-border-amber bg-white p-3.5 transition-colors hover:border-amber sm:p-5 ${
                diseases.length % 3 === 1 && index === diseases.length - 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-[3px] ${
                  disease.is_specialty ? "bg-green" : "bg-amber"
                }`}
              />
              <h3 className="font-serif text-[15px] font-bold text-navy sm:text-base">{disease.title}</h3>
              {disease.is_specialty && (
                <span className="mt-1.5 inline-block bg-green px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                  SPECIALITY
                </span>
              )}
              {/*
                Full description dropped below sm — 17 cards of headline +
                badge + full paragraph + link each made the homepage's most
                visited section by far the longest single scroll on mobile.
                Title + badge + link is enough to identify and tap through;
                the description earns its place back once there's room.
              */}
              <p className="mt-2 hidden text-[14px] leading-relaxed text-text-mid sm:block">
                {disease.description}
              </p>
              <span className="mt-2 block text-xs font-bold text-amber-dark group-hover:text-navy sm:mt-3">
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

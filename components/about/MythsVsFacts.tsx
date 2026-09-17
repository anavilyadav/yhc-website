import { mythsVsFacts } from "@/lib/content/about-static-content";

export function MythsVsFacts() {
  return (
    <section className="bg-cream-bg px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-2xl text-navy sm:text-3xl">
          {mythsVsFacts.heading}
        </h2>
        <p className="mt-3 text-center text-[15px] leading-relaxed text-text-mid">
          {mythsVsFacts.subheading}
        </p>

        <div className="mt-10 space-y-5">
          {mythsVsFacts.points.map((point) => (
            <div
              key={point.myth}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-red-600">
                Myth — {point.myth}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                <span className="font-bold text-navy">Fact — </span>
                {point.fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

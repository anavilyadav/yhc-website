import { whyUs } from "@/lib/content/about-static-content";

export function WhyUsGrid() {
  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">{whyUs.heading}</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUs.points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-navy/10 bg-cream-bg p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
                {point.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-lg text-navy">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-mid">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

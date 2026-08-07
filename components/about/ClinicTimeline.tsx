import { timeline } from "@/lib/content/about-static-content";

export function ClinicTimeline() {
  return (
    <section className="bg-navy px-6 py-16 sm:py-24" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="timeline-heading" className="font-serif text-2xl text-cream sm:text-3xl">
          Our Journey — Year by Year
        </h2>

        {/* Horizontal on larger screens, stacked list on mobile for readability */}
        <ol
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-6"
          style={{ scrollbarWidth: "thin" }}
        >
          {timeline.map((milestone) => (
            <li
              key={milestone.year}
              className="w-[260px] shrink-0 snap-start rounded-xl border border-amber/25 bg-navy-light/60 p-5 motion-safe:transition-colors motion-safe:duration-200 motion-safe:hover:border-amber/60"
            >
              <p className="font-serif text-lg font-bold text-amber">{milestone.year}</p>
              <p className="mt-2 text-sm font-semibold text-cream">{milestone.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{milestone.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

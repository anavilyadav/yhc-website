import { missionVisionValues } from "@/lib/content/about-static-content";

export function MissionVisionValues() {
  return (
    <section className="bg-cream-bg px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">
          {missionVisionValues.heading}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-dark">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-mid">
              {missionVisionValues.mission}
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-dark">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-mid">
              {missionVisionValues.vision}
            </p>
          </div>
        </div>

        <h3 className="mt-12 text-sm font-bold uppercase tracking-wide text-navy">
          Our Values
        </h3>
        <ul className="mt-5 space-y-5">
          {missionVisionValues.values.map((value) => (
            <li key={value.title} className="border-l-2 border-amber pl-5">
              <p className="font-semibold text-navy">{value.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-mid">{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { aboutHero } from "@/lib/content/about-static-content";

export function PageHero() {
  return (
    <section className="bg-cream px-6 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-dark">
          Two Generations. One Commitment.
        </p>
        <h1 className="font-serif text-3xl leading-tight text-navy sm:text-5xl">
          {aboutHero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-mid sm:text-lg">
          {aboutHero.subheadline}
        </p>
      </div>
    </section>
  );
}

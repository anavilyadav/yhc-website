import { aboutHero } from "@/lib/content/about-static-content";

export function PageHero() {
  return (
    <section className="bg-navy px-6 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber">
          Two Generations. One Commitment.
        </p>
        <h1 className="font-serif text-3xl leading-tight text-cream sm:text-5xl">
          {aboutHero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
          {aboutHero.subheadline}
        </p>
      </div>
    </section>
  );
}

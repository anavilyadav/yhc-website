import Link from "next/link";

/**
 * A dedicated banner for Autism & Child Development — our flagship
 * speciality (highest emotional stakes for parents, and the "5,000+
 * Special Children Helped" differentiator already used in the stats bar).
 * It was previously just one of 16 equally-weighted cards in the
 * conditions grid below; this gives it standalone, hero-adjacent
 * prominence instead, placed right before that grid.
 */
export function AutismFeature() {
  return (
    <section className="border-y-2 border-green bg-green-tint px-5 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-green">
            Our Flagship Speciality
          </p>
          <h2 className="mt-2 font-serif text-xl text-navy md:text-2xl">
            Autism &amp; Child Development
          </h2>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-text-mid">
            5,000+ children treated for autism spectrum disorder, ADHD, speech delays and
            developmental challenges — one of India&apos;s most dedicated homeopathic practices
            for this work.
          </p>
        </div>
        <Link
          href="/autism"
          className="shrink-0 whitespace-nowrap rounded-sm bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-opacity hover:opacity-90"
        >
          Learn About Our Autism Program →
        </Link>
      </div>
    </section>
  );
}

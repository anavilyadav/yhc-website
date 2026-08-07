export function TestimonialCards({
  testimonials,
}: {
  testimonials: { quote: string; attribution: string }[];
}) {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
          What Our Online Patients Say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.attribution}
              className="rounded-sm border border-border-amber border-l-4 border-l-amber bg-cream-bg p-6"
            >
              <p className="font-serif text-[15px] italic leading-relaxed text-text-mid">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-bold text-navy">— {t.attribution}</footer>
            </blockquote>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-text-light">
          Testimonials represent individual patient experiences. Results are not typical and
          cannot be guaranteed. Homeopathic treatment outcomes vary based on individual
          constitution, disease duration, compliance with treatment, and other factors.
        </p>
      </div>
    </section>
  );
}

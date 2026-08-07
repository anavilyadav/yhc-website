import type { DiseasePagePatientStory } from "@/lib/types";

export default function PatientStoryCard({ story }: { story: DiseasePagePatientStory }) {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-xl text-navy md:text-2xl">A Patient&rsquo;s Journey</h2>
        <blockquote className="mt-5 rounded-sm border border-border-amber border-l-4 border-l-amber bg-cream-bg p-6 md:p-8">
          <p className="font-serif text-[15px] italic leading-relaxed text-text-mid md:text-base">
            &ldquo;{story.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-bold text-navy">— {story.attribution}</footer>
          {story.note && (
            <p className="mt-3 text-[12px] italic leading-relaxed text-text-light">{story.note}</p>
          )}
        </blockquote>
        <p className="mt-4 text-[11px] leading-relaxed text-text-light">
          Testimonials represent individual patient experiences. Results are not typical and
          cannot be guaranteed. Homeopathic treatment outcomes vary based on individual
          constitution, disease duration, compliance with treatment, and other factors.
        </p>
      </div>
    </section>
  );
}

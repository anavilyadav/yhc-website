import { ourStory } from "@/lib/content/about-static-content";

export function OurStory() {
  return (
    <section className="bg-cream-bg px-6 py-16 sm:py-24" id="our-story">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">{ourStory.heading}</h2>
        <div className="mt-8 space-y-5">
          {ourStory.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-mid">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

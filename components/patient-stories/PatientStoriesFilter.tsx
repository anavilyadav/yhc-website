"use client";

import { useState } from "react";
import Link from "next/link";
import type { PatientStoryEntry } from "@/lib/content/patient-stories-content";

const ALL = "All Stories";

export function PatientStoriesFilter({
  categories,
  stories,
}: {
  categories: readonly string[];
  stories: PatientStoryEntry[];
}) {
  const [active, setActive] = useState<string>(ALL);
  const visible = active === ALL ? stories : stories.filter((s) => s.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              active === category
                ? "border-navy bg-navy text-cream"
                : "border-navy/20 bg-white text-navy hover:border-amber"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((story, index) => (
          <blockquote
            key={story.id}
            // A lone leftover card in a 2-column grid (odd count) reads as
            // a mistake rather than a deliberate layout — widen it instead.
            className={`rounded-sm border border-border-amber border-l-4 border-l-amber bg-cream-bg p-6 ${
              visible.length % 2 === 1 && index === visible.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">{story.title}</p>
            <p className="mt-3 font-serif text-[15px] italic leading-relaxed text-text-mid">
              &ldquo;{story.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-bold text-navy">— {story.attribution}</footer>
            <Link
              href={`/${story.conditionSlug}`}
              className="mt-3 inline-block text-sm font-semibold text-green hover:text-navy"
            >
              Read more about {story.conditionLabel} →
            </Link>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

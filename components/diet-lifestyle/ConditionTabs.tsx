"use client";

import { useState } from "react";
import { CONDITION_GUIDES } from "@/lib/content/diet-lifestyle-content";
import { InfoIcon } from "@/components/shared/icons";

export function ConditionTabs() {
  const [active, setActive] = useState(CONDITION_GUIDES[0].slug);
  const guide = CONDITION_GUIDES.find((g) => g.slug === active) ?? CONDITION_GUIDES[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CONDITION_GUIDES.map((g) => (
          <button
            key={g.slug}
            type="button"
            onClick={() => setActive(g.slug)}
            className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
              active === g.slug
                ? "border-amber bg-amber text-navy"
                : "border-navy/15 bg-white text-text-mid hover:border-amber"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-border-amber bg-white p-6 shadow-sm">
        <h3 className="font-serif text-lg text-navy">{guide.label}</h3>
        <p className="mt-2 text-[14px] text-text-mid">{guide.intro}</p>
        <ul className="mt-4 space-y-2">
          {guide.points.map((point) => (
            <li key={point} className="flex gap-2.5 text-[14px] leading-relaxed text-text-mid">
              <span aria-hidden className="mt-1 text-amber-dark">
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {guide.caution && (
          <p className="mt-4 flex items-start gap-1.5 rounded-lg bg-cream-bg p-3 text-[12.5px] italic leading-relaxed text-text-mid">
            <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-dark" />
            {guide.caution}
          </p>
        )}
      </div>
    </div>
  );
}

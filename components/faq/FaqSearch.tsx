"use client";

import { useState } from "react";
import type { FaqCategory } from "@/lib/content/faq-content";

export function FaqSearch({ categories }: { categories: FaqCategory[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = categories
    .map((cat) => ({
      ...cat,
      questions: q
        ? cat.questions.filter(
            (item) =>
              item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
          )
        : cat.questions,
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your question…"
          aria-label="Search FAQs"
          className="w-full rounded-full border border-navy/20 px-5 py-3 text-sm text-navy focus:border-amber focus:outline-none"
        />
      </div>

      <div className="mt-10 space-y-12">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-text-mid">
            No matching questions. Try a different search, or WhatsApp us directly.
          </p>
        )}
        {filtered.map((cat) => (
          <div key={cat.category}>
            <h2 className="font-serif text-xl text-navy md:text-2xl">{cat.category}</h2>
            <div className="mt-5 space-y-3">
              {cat.questions.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-sm border border-border-amber bg-white p-4 open:pb-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold text-navy marker:content-none">
                    {item.question}
                    <span
                      aria-hidden
                      className="shrink-0 text-lg text-amber-dark transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-mid">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

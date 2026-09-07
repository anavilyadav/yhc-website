import { quizOptions } from "@/lib/whatsapp";

/**
 * "Not Sure Where to Start?" — a short, honest self-assessment that routes
 * straight into a pre-filled WhatsApp message, categorised by concern.
 * PDM report ch.3.3: undecided visitors engage with a quick choice before
 * they'll fill out a form or pick up the phone. Deliberately not a
 * diagnostic quiz or symptom score — just a routing question.
 */
export function QuickCheck() {
  return (
    <section className="bg-cream-bg px-5 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
          Not Sure Where to Start?
        </p>
        <h2 className="mt-2 font-serif text-xl text-navy sm:text-2xl">
          What Best Describes What&apos;s Bringing You Here?
        </h2>
        <p className="mt-3 text-[15px] text-text-mid">
          Pick the one closest to your situation — it opens a WhatsApp message already started for you.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          {quizOptions.map((option) => (
            <a
              key={option.label}
              href={option.message}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-amber bg-white px-5 py-3.5 text-left text-[15px] font-semibold text-navy transition-colors hover:border-amber hover:bg-cream"
            >
              {option.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

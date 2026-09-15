import Link from "next/link";

/**
 * Homepage entry point into the Root Cause Assessment — the site's
 * flagship interactive element (confirmed with Dr Anavil, 2026-09-16,
 * inspired by a competitor's version of the same idea). Kept as a
 * compact teaser here rather than embedding the full multi-step quiz
 * on the homepage, so the homepage itself stays light — the actual
 * quiz lives at /root-cause-assessment.
 */
export function AssessmentTeaser() {
  return (
    <section className="bg-navy px-5 py-12 text-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber">
            Root Cause Assessment
          </p>
          <h2 className="mt-2 font-serif text-xl md:text-2xl">
            Not Sure What&apos;s Really Going On?
          </h2>
          <p className="mt-2 max-w-md text-[14px] text-cream/75">
            5 quick questions to help you understand your condition — under 2 minutes, no
            obligation to book.
          </p>
        </div>
        <Link
          href="/root-cause-assessment"
          className="shrink-0 whitespace-nowrap rounded-sm bg-amber px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
        >
          Start Assessment →
        </Link>
      </div>
    </section>
  );
}

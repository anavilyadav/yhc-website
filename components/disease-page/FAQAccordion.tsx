import type { DiseasePageFAQ } from "@/lib/types";

export default function FAQAccordion({ faqs }: { faqs: DiseasePageFAQ[] }) {
  return (
    <section className="bg-cream-bg px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-xl text-navy md:text-2xl">Frequently Asked Questions</h2>

        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-sm border border-border-amber bg-white p-4 open:pb-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold text-navy marker:content-none">
                {faq.question}
                <span
                  aria-hidden
                  className="shrink-0 text-lg text-amber-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-text-mid">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

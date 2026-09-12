/**
 * "Does This Sound Familiar?" — near the very top of the page, before the
 * visitor reads anything else. Trust & Sales Playbook / UW report ch.3.3:
 * a visitor who recognises themselves in 5 seconds reads the rest of the
 * page with attention; one who doesn't, leaves. Every line here paraphrases
 * something the page's own hero or sections already say — never a new claim.
 */
export default function SoundFamiliar({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white px-5 py-10">
      <div className="mx-auto max-w-3xl rounded-lg border border-border-amber bg-cream-bg p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-xl text-navy sm:text-2xl">Does This Sound Familiar?</h2>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-text-mid">
              <span className="mt-1 text-amber-dark">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

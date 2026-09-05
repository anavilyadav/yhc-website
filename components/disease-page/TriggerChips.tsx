/**
 * "Common Root Causes We Address" — short chips, not another paragraph.
 * Trust & Sales Playbook ch.6: AI answer engines and skimming visitors
 * both extract short, discrete facts far more reliably than long prose.
 * Every chip here is a fact already stated in this page's own narrative
 * sections, just pulled to the top in scannable form — never a new claim.
 */
export default function TriggerChips({ triggers }: { triggers: string[] }) {
  if (triggers.length === 0) return null;

  return (
    <section className="bg-cream px-5 py-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
          Common Root Causes We Address
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {triggers.map((trigger) => (
            <span
              key={trigger}
              className="rounded-full border border-border-amber bg-white px-4 py-1.5 text-sm font-medium text-navy"
            >
              {trigger}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

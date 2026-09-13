import type { DiseasePageComparisonRow } from "@/lib/types";

/**
 * Structured comparison content — GIOS_FinalAudit_Stage1Complete.docx Part 2,
 * "VALIDATED: Implement Immediately" — helps AI systems (and patients)
 * understand the distinction between conventional and homeopathic approach.
 * Rolled out to the 5 highest-traffic disease pages only, per that doc.
 */
export default function ComparisonTable({
  rows,
  conditionName,
}: {
  rows: DiseasePageComparisonRow[];
  conditionName: string;
}) {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-xl text-navy md:text-2xl">
          Conventional Medicine vs Classical Homeopathy for {conditionName}
        </h2>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-dark md:hidden">
          ← Swipe to see the Homeopathy column →
        </p>
        <div className="relative mt-2 md:mt-6">
          <div className="overflow-x-auto rounded-lg border border-border-amber shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-cream">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">Factor</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">
                    Conventional Medicine
                  </th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">
                    Classical Homeopathy at Yadav Homeo Clinic
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 1 ? "bg-cream-bg" : "bg-white"}>
                    <td className="px-4 py-3 align-top font-bold text-navy">{row.factor}</td>
                    <td className="px-4 py-3 align-top text-text-mid">{row.conventional}</td>
                    <td className="px-4 py-3 align-top text-text-mid">{row.homeopathy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Fades the table's right edge on mobile so a hidden column reads as "more to scroll", not as the table simply ending. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-lg bg-gradient-to-l from-white to-transparent md:hidden"
          />
        </div>
      </div>
    </section>
  );
}

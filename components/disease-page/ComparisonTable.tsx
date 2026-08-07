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
        <div className="mt-6 overflow-x-auto rounded-sm border border-border-amber">
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
      </div>
    </section>
  );
}

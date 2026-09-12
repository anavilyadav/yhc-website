"use client";

import { DocumentIcon } from "@/components/shared/icons";

/**
 * "Download PDF Summary" — UW report ch.5, a low-effort lead magnet built
 * from content already on the page rather than a separate document to
 * maintain. Uses the browser's native print dialog (Save as PDF) instead
 * of a PDF-generation library — zero new dependencies, and the printed
 * output is the page itself with @media print rules (see globals.css and
 * print:hidden on nav/CTAs/video) stripping away everything that doesn't
 * belong on paper. Scoped to the 5 flagship pages that already have a
 * comparisonTable, matching this project's existing "top 5" convention.
 */
export function PdfSummaryButton({ conditionName }: { conditionName: string }) {
  return (
    <div className="print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="flex items-center gap-2 rounded-sm border-2 border-navy px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream"
      >
        <DocumentIcon className="h-4 w-4" /> Download {conditionName} Summary (PDF)
      </button>
    </div>
  );
}

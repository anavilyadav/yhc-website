/**
 * Visible "content needed" card shown wherever a video or photo slot has
 * no real media yet — Dr Anavil's explicit instruction (2026-09-12):
 * empty slots must be visible, not hidden, and must say exactly what to
 * shoot so he can plan and film content without guessing. Reverses the
 * "render nothing" content-degradation rule from the 2026-09-11 build
 * spec's Section 2 — kept for the rest of the site (real content is
 * never faked), but media slots now show a clear on-brand placeholder
 * with the specific topic/brief instead of disappearing.
 */
export function ContentNeededPlaceholder({
  kind,
  description,
  compact = false,
}: {
  kind: "video" | "photo";
  description: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`mx-auto flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-amber/50 bg-amber-tint/50 text-center ${
        compact ? "px-4 py-6" : "px-6 py-10"
      }`}
    >
      <span className="text-3xl" aria-hidden>
        {kind === "video" ? "🎥" : "📷"}
      </span>
      <p className="text-[11px] font-bold uppercase tracking-wide text-amber-dark">
        {kind === "video" ? "Video Needed Here" : "Photo Needed Here"}
      </p>
      <p className="max-w-md text-sm leading-relaxed text-navy">{description}</p>
    </div>
  );
}

/**
 * Photo-break slot — layout #8 ("Visual Proof Strip"), the photo
 * counterpart to VideoEmbed. Same visible "pending" placeholder
 * convention until a real photoUrl is supplied, per Dr. Anavil's
 * instruction that pending media stay visible (not hidden) while shoots
 * are in progress.
 */
export default function PhotoEmbed({ photoUrl, caption }: { photoUrl?: string; caption: string }) {
  if (photoUrl) {
    return (
      <div className="mx-auto my-6 max-w-2xl overflow-hidden rounded-lg border border-navy/10 shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element -- external/CMS photo, dimensions not known ahead of time */}
        <img src={photoUrl} alt={caption} className="aspect-video w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="mx-auto my-6 flex aspect-video max-w-2xl flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-amber-dark/50 bg-amber-tint px-6 text-center">
      <span className="text-2xl">🖼️</span>
      <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Photo Pending</p>
      <p className="max-w-sm text-sm font-medium text-navy/70">{caption}</p>
    </div>
  );
}

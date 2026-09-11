/**
 * Photo-break slot — layout #8 ("Visual Proof Strip"), the photo
 * counterpart to VideoEmbed. Per the 2026-09-11 build spec's content-
 * degradation rule: renders nothing when no photoUrl exists yet — no
 * placeholder box, no "pending" label. The surrounding layout is written
 * to look complete without it.
 */
export default function PhotoEmbed({ photoUrl, caption }: { photoUrl?: string; caption: string }) {
  if (!photoUrl) return null;

  return (
    <div className="mx-auto my-6 max-w-2xl overflow-hidden rounded-lg border border-navy/10 shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element -- external/CMS photo, dimensions not known ahead of time */}
      <img src={photoUrl} alt={caption} className="aspect-video w-full object-cover" />
    </div>
  );
}

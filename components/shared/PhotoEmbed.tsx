import { ContentNeededPlaceholder } from "@/components/shared/ContentNeededPlaceholder";

/**
 * Photo-break slot — layout #8 ("Visual Proof Strip"), the photo
 * counterpart to VideoEmbed. Per Dr Anavil's instruction (2026-09-12):
 * shows a visible "Photo Needed" placeholder naming what to shoot when no
 * photoUrl exists yet, rather than rendering nothing.
 */
export default function PhotoEmbed({ photoUrl, caption }: { photoUrl?: string; caption: string }) {
  if (!photoUrl) {
    return (
      <div className="mx-auto my-6 max-w-2xl">
        <ContentNeededPlaceholder kind="photo" description={caption} />
      </div>
    );
  }

  return (
    <div className="mx-auto my-6 max-w-2xl overflow-hidden rounded-lg border border-navy/10 shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element -- external/CMS photo, dimensions not known ahead of time */}
      <img src={photoUrl} alt={caption} className="aspect-video w-full object-cover" />
    </div>
  );
}

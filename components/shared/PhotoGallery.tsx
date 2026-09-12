import type { GalleryPhoto } from "@/lib/types";
import { ContentNeededPlaceholder } from "@/components/shared/ContentNeededPlaceholder";

/**
 * Page-level photo gallery (2026-09-11 build spec, Section 6) — the photo
 * counterpart to PageVideo, matched by exact page_association. Per Dr
 * Anavil's instruction (2026-09-12): shows a visible "Photo Needed" card
 * instead of nothing when a page has no photo yet, and renders real
 * photos as a horizontal scroll-snap slider (not a static grid) so it
 * reads as a "slide-type" gallery patients swipe through, rather than a
 * flat block of thumbnails.
 *
 * Plain <img>, not next/image, matching PhotoEmbed's existing approach —
 * these come from Supabase Storage/an admin-pasted URL with no known
 * dimensions ahead of time.
 */
export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  if (photos.length === 0) {
    return (
      <div className="bg-white px-5 py-8 print:hidden">
        <ContentNeededPlaceholder
          kind="photo"
          description="Add photos for this page — clinic interior, doctor at work, treatment setting — via /admin/photos."
        />
      </div>
    );
  }

  return (
    <section className="bg-white px-5 py-12 print:hidden">
      <div className="mx-auto max-w-5xl">
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
          {photos.map((photo) => (
            <figure
              key={photo.id}
              className="w-[72vw] shrink-0 snap-start overflow-hidden rounded-lg border border-navy/10 shadow-sm sm:w-[280px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external/CMS photo, dimensions not known ahead of time */}
              <img
                src={photo.imageUrl}
                alt={photo.caption}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-2 py-2 text-[12px] leading-snug text-text-mid">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

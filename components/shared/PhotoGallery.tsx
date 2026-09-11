import type { GalleryPhoto } from "@/lib/types";

/**
 * Page-level photo gallery (2026-09-11 build spec, Section 6) — the photo
 * counterpart to PageVideo, matched by exact page_association. Renders
 * nothing at all when a page has no photo yet, so this is safe to drop
 * into any page template unconditionally.
 *
 * Plain <img>, not next/image, matching PhotoEmbed's existing approach —
 * these come from Supabase Storage/an admin-pasted URL with no known
 * dimensions ahead of time.
 */
export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <section className="bg-white px-5 py-12 print:hidden">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo) => (
            <figure key={photo.id} className="overflow-hidden rounded-lg border border-navy/10 shadow-sm">
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

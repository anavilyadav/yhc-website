import Image from "next/image";
import type { PageVideo as PageVideoType } from "@/lib/types";

function thumbnailUrl(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

/**
 * Patient-story videos as a browsable thumbnail grid, each linking directly
 * to the video on YouTube — not embedded — so every watch counts as a real
 * visit to the clinic's own channel (Dr Anavil's explicit preference: real
 * YouTube links only, so his subscriber/view counts benefit too). Renders
 * nothing when there are no videos yet, same fallback pattern as PageVideo.
 */
export function VideoGallery({ videos }: { videos: PageVideoType[] }) {
  if (videos.length === 0) return null;

  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-2xl text-navy md:text-3xl">
          Patient Stories — In Their Own Words
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-text-mid">
          Watch real patients talk about their treatment journey. Opens on YouTube.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-sm border border-border-amber bg-cream-bg transition-colors hover:border-amber"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-navy">
                <Image
                  src={thumbnailUrl(video.youtubeId)}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/20 transition-colors group-hover:bg-navy/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-navy">
                    ▶
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-[15px] font-bold text-navy">{video.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-text-mid">{video.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

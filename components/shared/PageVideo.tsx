import type { PageVideo as PageVideoData } from "@/lib/types";
import { JsonLd } from "@/components/shared/JsonLd";

/**
 * Renders every video attached to a page (via the page_videos Supabase
 * table — see supabase/migrations/0005_page_videos.sql). Renders
 * nothing at all when a page has no video yet, so this is safe to drop
 * into any page template unconditionally.
 *
 * Uses the standard youtube.com embed domain (not youtube-nocookie.com)
 * on purpose — plays here count toward the real YouTube video's view
 * count, which is the whole point for a doctor building his own channel.
 */
export function PageVideo({ videos }: { videos: PageVideoData[] }) {
  if (videos.length === 0) return null;

  return (
    <section className="bg-cream-bg px-5 py-12">
      <div className="mx-auto max-w-4xl space-y-10">
        {videos.map((video) => {
          const videoSchema = {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: video.title,
            description: video.caption,
            thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
            embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
          };

          return (
            <div key={video.id}>
              <JsonLd data={videoSchema} />
              <h2 className="font-serif text-xl text-navy md:text-2xl">{video.title}</h2>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-sm border border-border-amber">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              {/*
                Search engines and AI tools cannot watch the video, but
                they can read this — always shown alongside it, never
                instead of it (Trust & Sales Playbook ch.8).
              */}
              <p className="mt-3 text-[15px] leading-relaxed text-text-mid">{video.caption}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

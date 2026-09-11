"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { JsonLd } from "@/components/shared/JsonLd";
import type { RelatedVideo } from "@/lib/types";

function VideoCard({ video }: { video: RelatedVideo }) {
  const [playing, setPlaying] = useState(false);

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.title,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
  };

  return (
    <div className="overflow-hidden rounded-lg border border-navy/10 bg-white shadow-sm">
      <JsonLd data={videoSchema} />
      <div className="relative aspect-video w-full bg-navy">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              trackEvent("video_play", { video_title: video.title, youtube_id: video.youtubeId });
            }}
            className="group absolute inset-0 flex h-full w-full items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg)` }}
            aria-label={`Play video: ${video.title}`}
          >
            <span className="absolute inset-0 bg-navy/25 transition-colors group-hover:bg-navy/10" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber shadow-lg transition-transform group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-navy" />
            </span>
          </button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-semibold text-navy">{video.title}</p>
    </div>
  );
}

/**
 * Tag-scoped video gallery (2026-09-11 build spec, Section 4B) — distinct
 * from PageVideo (exact page_slug match). Renders nothing at all when the
 * caller's condition tag(s) matched zero active videos, per the spec's
 * content-degradation rule, so this is safe to drop into any disease page
 * template unconditionally.
 */
export default function RelatedVideosGallery({
  videos,
  heading = "Related Videos",
}: {
  videos: RelatedVideo[];
  heading?: string;
}) {
  if (videos.length === 0) return null;

  return (
    <section className="bg-cream-bg px-5 py-12 print:hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl text-navy md:text-3xl">{heading}</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

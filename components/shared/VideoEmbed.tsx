"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Video-hero slot — the #1 layout from the video-first redesign plan
 * (2026-09-10): every page gets a video right after its headline, before
 * the long-form text. Until a real youtubeId is added, renders a visible
 * placeholder naming exactly which video goes here — deliberately visible
 * (not hidden) per Dr. Anavil's instruction, so every page's pending video
 * is easy to spot while the real shoots/uploads are still in progress.
 * Once a youtubeId is set, this same slot becomes a real click-to-load
 * YouTube embed (thumbnail first, no iframe) so pages with a video hero
 * don't pay YouTube's script weight on every load.
 */
export default function VideoEmbed({
  youtubeId,
  title,
}: {
  youtubeId?: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!youtubeId) {
    return (
      <div className="mx-auto my-6 flex aspect-video max-w-2xl flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-amber-dark/50 bg-navy/5 px-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10">
          <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-navy/40" />
        </span>
        <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Video Pending</p>
        <p className="max-w-sm text-sm font-medium text-navy/70">{title}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto my-6 max-w-2xl overflow-hidden rounded-lg border border-navy/10 bg-navy shadow-md">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              trackEvent("video_play", { video_title: title, youtube_id: youtubeId });
            }}
            className="group absolute inset-0 flex h-full w-full items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg)` }}
            aria-label={`Play video: ${title}`}
          >
            <span className="absolute inset-0 bg-navy/25 transition-colors group-hover:bg-navy/10" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-amber shadow-lg transition-transform group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-navy" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

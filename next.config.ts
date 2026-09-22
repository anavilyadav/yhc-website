import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicit, not just Next's default — every canonical, sitemap entry,
  // JSON-LD url/@id and internal link in this codebase is written without
  // a trailing slash, so this must stay false or every one of those goes
  // back to redirecting against itself.
  trailingSlash: false,
  images: {
    // Patient-story video thumbnails pulled directly from YouTube's own
    // CDN (img.youtube.com/vi/{id}/hqdefault.jpg) for the video gallery.
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
    // Techeve audit (17 Sept 2026): serve AVIF first, falling back to
    // WebP, for every image the built-in optimizer touches (next/image
    // picks whichever the requesting browser supports via Accept header).
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        // The July sitemap doc planned a standalone /gallery/ page that
        // was never built (PROJECT_TITAN_MASTER_REFERENCE.md, Section
        // 3.2, open question). /patient-stories already has a full photo
        // + video gallery (VideoGallery component), so rather than split
        // the same content across two URLs, /gallery/ is treated as an
        // alias — closes the "genuinely missing page" gap without a
        // duplicate, thinner page competing with it for the same intent.
        source: "/gallery",
        destination: "/patient-stories",
        permanent: false,
      },
      // The /Appointment (capitalised) redirect used to live here, but
      // next.config.ts's redirects() matches case-INSENSITIVELY — it was
      // also matching the real, lowercase /appointment and redirecting it
      // to itself in an infinite loop. Moved to middleware.ts, which does
      // an exact case-sensitive string comparison instead.
    ];
  },
};

export default nextConfig;

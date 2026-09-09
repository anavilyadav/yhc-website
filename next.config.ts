import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Patient-story video thumbnails pulled directly from YouTube's own
    // CDN (img.youtube.com/vi/{id}/hqdefault.jpg) for the video gallery.
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
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
    ];
  },
};

export default nextConfig;

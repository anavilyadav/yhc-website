import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Patient-story video thumbnails pulled directly from YouTube's own
    // CDN (img.youtube.com/vi/{id}/hqdefault.jpg) for the video gallery.
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
  },
};

export default nextConfig;

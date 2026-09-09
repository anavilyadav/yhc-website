import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Explicitly allow AI crawlers (GPTBot, Google-Extended, PerplexityBot,
 * ClaudeBot, anthropic-ai, cohere-ai) per GIOS_FinalAudit_Stage1Complete
 * "AI Crawler Audit" — many sites block these by default without realising
 * it, which excludes the clinic from AI Overviews / ChatGPT / Perplexity
 * citations entirely.
 */
export default function robots(): MetadataRoute.Robots {
  // Vercel sets VERCEL_ENV to "preview" on every non-production deployment
  // (PR previews, branch deploys). Without this check, a preview URL is
  // fully crawlable and risks being indexed as duplicate content under a
  // throwaway *.vercel.app domain — flagged as an open gap in the punch
  // list (PROJECT_TITAN_MASTER_REFERENCE.md, Section 15.3) and closed here.
  if (process.env.VERCEL_ENV === "preview" || process.env.VERCEL_ENV === "development") {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

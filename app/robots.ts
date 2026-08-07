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
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

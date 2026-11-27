import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Allow AI crawlers for Generative Engine Optimization (GEO)
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://nileictsolutions.com/sitemap.xml",
  };
}

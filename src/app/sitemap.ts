import type { MetadataRoute } from "next";
import { LOCALES, SITEMAP_PATHS, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified: "2026-11-04",
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: absoluteUrl("en", path),
          "zh-Hans": absoluteUrl("zh", path),
          ms: absoluteUrl("ms", path),
          "x-default": absoluteUrl("en", path),
        },
      },
    })),
  );
}

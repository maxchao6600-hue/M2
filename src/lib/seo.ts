import type { Metadata } from "next";
import {
  HREFLANG,
  LOCALES,
  OG_LOCALE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  type Locale,
} from "@/lib/site";
import type { Seo } from "@/content/types";

type ArticleMeta = {
  publishedTime: string;
};

export function buildMetadata(
  locale: Locale,
  path: string,
  seo: Seo,
  article?: ArticleMeta,
): Metadata {
  const url = absoluteUrl(locale, path);
  const languages: Record<string, string> = {
    "x-default": absoluteUrl("en", path),
  };

  for (const item of LOCALES) {
    languages[HREFLANG[item]] = absoluteUrl(item, path);
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      type: article ? "article" : "website",
      publishedTime: article?.publishedTime,
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${seo.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@m2casinomy",
      title: seo.title,
      description: seo.description,
      images: [`/${locale}/opengraph-image`],
    },
  };
}

export function languageAlternates(path: string) {
  return LOCALES.map((locale) => ({
    hrefLang: HREFLANG[locale],
    href: absoluteUrl(locale, path),
  })).concat([{ hrefLang: "x-default", href: absoluteUrl("en", path) }]);
}

export const metadataBase = new URL(SITE_URL);

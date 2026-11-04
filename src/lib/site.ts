export const LOCALES = ["en", "zh", "ms"] as const;

export type Locale = (typeof LOCALES)[number];

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://m2casino.net"
).replace(/\/$/, "");

export const SITE_NAME = "M2 Casino";

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_MY",
  zh: "zh_CN",
  ms: "ms_MY",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  ms: "ms",
};

export const INTL_LOCALE: Record<Locale, string> = {
  en: "en-MY",
  zh: "zh-CN",
  ms: "ms-MY",
};

export const HREFLANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  ms: "ms",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = ""): string {
  const suffix = path === "/" ? "" : path;
  return `/${locale}${suffix}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/share/18maxAE915/" },
  { label: "X", href: "https://x.com/m2casinomy" },
  { label: "Instagram", href: "https://www.instagram.com/m2malaysia" },
  { label: "Threads", href: "https://www.threads.com/@m2malaysia" },
  { label: "Telegram", href: "https://t.me/m2malaysia" },
  { label: "YouTube", href: "https://www.youtube.com/@m2malaysia" },
  { label: "Reddit", href: "https://www.reddit.com/user/M2Malaysia" },
] as const;

export const POST_SLUGS = [
  "getting-started",
  "reading-the-lobby",
  "cashier-checklist",
  "keeping-play-in-proportion",
] as const;

export const PAGE_PATHS = [
  "/login",
  "/register",
  "/download",
  "/promotion",
  "/popular-games",
  "/blog",
  "/topup-withdrawal-guide",
  "/shareholder",
  "/agent",
  "/contact-us",
  "/faq",
  "/payment-methods",
  "/about-us",
  "/responsible-gaming",
  "/privacy-policy",
  "/terms",
] as const;

export const SITEMAP_PATHS = ["", ...PAGE_PATHS, ...POST_SLUGS.map((slug) => `/blog/${slug}`)] as const;

export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00+08:00`));
}

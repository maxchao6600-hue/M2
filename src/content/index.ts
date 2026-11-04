import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { POST_SLUGS } from "@/lib/site";
import en from "@/content/en";
import ms from "@/content/ms";
import zh from "@/content/zh";

const dictionaries: Record<Locale, Dictionary> = { en, zh, ms };

export function getDictionary(locale: Locale): Dictionary {
  const dictionary = dictionaries[locale];
  const slugs = dictionary.posts.map((post) => post.slug).join("|");
  if (slugs !== POST_SLUGS.join("|")) {
    throw new Error(`Post slugs for ${locale} do not match the site map.`);
  }
  return dictionary;
}

export type PageKey = keyof Dictionary["pages"];

export const ROUTE_PAGES = {
  login: "login",
  register: "register",
  download: "download",
  promotion: "promotion",
  "popular-games": "popularGames",
  blog: "blog",
  "topup-withdrawal-guide": "topup",
  shareholder: "shareholder",
  agent: "agent",
  "contact-us": "contact",
  faq: "faq",
  "payment-methods": "payments",
  "about-us": "about",
  "responsible-gaming": "responsible",
  "privacy-policy": "privacy",
  terms: "terms",
} as const satisfies Record<string, PageKey>;

export type RouteSlug = keyof typeof ROUTE_PAGES;

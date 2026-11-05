import type { BlogCategoryId, BlogGuide } from "@/content/types";
import { POST_CATEGORY } from "@/lib/assets";

export function postCategoryId(slug: string): BlogCategoryId | undefined {
  return POST_CATEGORY[slug];
}

export function postCoverAlt(guide: BlogGuide, slug: string): string {
  const category = POST_CATEGORY[slug];
  if (category === "start") return guide.alts.start;
  if (category === "guides") return guide.alts.lobby;
  if (category === "payments") return guide.alts.cashier;
  if (category === "responsible") return guide.alts.care;
  return guide.alts.lobby;
}

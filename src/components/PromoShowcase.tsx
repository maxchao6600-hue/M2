"use client";

import { useState } from "react";
import Image from "next/image";
import type { PromoCategoryId, PromotionGuide } from "@/content/types";

const BANNERS = {
  rollex: "/images/promotions/rollex-slot-casino.webp",
  "daily-rebate": "/images/promotions/daily-rebate.webp",
  fachai: "/images/promotions/fachai.webp",
} as const;

const THUMBS: Record<PromoCategoryId, string> = {
  featured: BANNERS.rollex,
  rebate: BANNERS["daily-rebate"],
  launch: BANNERS.fachai,
  slots: "/images/games/fortune-tiger.webp",
  fishing: "/images/providers/fachai.webp",
};

export function PromoShowcase({ guide }: { guide: PromotionGuide }) {
  const [active, setActive] = useState<PromoCategoryId>("featured");
  const visible = guide.campaigns.filter((campaign) => {
    if (active === "featured") return true;
    return campaign.categories.includes(active);
  });

  return (
    <>
      <section className="mt-14" aria-labelledby="promo-categories">
        <h2 id="promo-categories" className="font-display text-3xl text-cream">
          {guide.categoriesTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.categoriesLead}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" role="group" aria-label={guide.categoriesTitle}>
          {guide.categories.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category.id)}
                className={`surface min-w-0 overflow-hidden rounded-2xl text-left transition duration-300 hover:-translate-y-0.5 ${selected ? "ring-2 ring-orange" : ""}`}
              >
                <Image src={THUMBS[category.id]} alt="" width={320} height={128} className="h-16 w-full object-cover object-left" />
                <span className="block px-3 py-3">
                  <span className="block text-sm font-semibold text-cream">{category.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted">{category.text}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="featured" className="mt-14 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.featuredTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.featuredLead}</p>
        {visible.length === 0 ? <p className="mt-6 text-sm text-muted">{guide.empty}</p> : null}
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {visible.map((campaign, index) => {
            const wide = visible.length === 1 || (visible.length >= 3 && index === 0);
            return (
              <li key={campaign.slug} className={`surface min-w-0 overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 ${wide ? "lg:col-span-2" : ""}`}>
                <div className={wide ? "lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:items-center" : ""}>
                  <Image
                    src={BANNERS[campaign.slug]}
                    alt={campaign.imageAlt}
                    width={828}
                    height={332}
                    className="h-auto w-full"
                    sizes={wide ? "(max-width: 1024px) 100vw, 680px" : "(max-width: 1024px) 100vw, 480px"}
                  />
                  <div className="p-5 sm:p-6">
                    <h3 className="text-2xl font-semibold text-cream">{campaign.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{campaign.summary}</p>
                    <ul className="mt-4 grid gap-2">
                      {campaign.points.map((point) => (
                        <li key={point} className="rounded-full border border-gold/30 px-3 py-1 text-sm text-gold-soft">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a href={`#campaign-${campaign.slug}`} className="btn-primary mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
                      {guide.viewDetails}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

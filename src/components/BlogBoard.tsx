"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import type { BlogCategoryId, BlogGuide } from "@/content/types";
import type { Locale } from "@/lib/site";

export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  minutes: number;
  category: BlogCategoryId;
  image: string;
  alt: string;
};

export function BlogBoard({
  locale,
  cards,
  guide,
  minutesLabel,
  categoryArt,
}: {
  locale: Locale;
  cards: BlogCard[];
  guide: BlogGuide;
  minutesLabel: string;
  categoryArt: Record<BlogCategoryId, { src: string; alt: string }>;
}) {
  const [category, setCategory] = useState<BlogCategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const counts = useMemo(() => {
    const tally = { start: 0, guides: 0, payments: 0, responsible: 0 } satisfies Record<BlogCategoryId, number>;
    for (const card of cards) tally[card.category] += 1;
    return tally;
  }, [cards]);

  const visible = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(locale);
    return cards.filter((card) => {
      const inCategory = category === "all" || card.category === category;
      return inCategory && card.title.toLocaleLowerCase(locale).includes(needle);
    });
  }, [cards, category, locale, query]);

  function choose(next: BlogCategoryId) {
    setCategory(next);
    document.getElementById("latest")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clear() {
    setCategory("all");
    setQuery("");
  }

  return (
    <>
      <section id="categories" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.categoriesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.categoriesLead}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2" role="group" aria-label={guide.categoriesTitle}>
          {guide.categories.map((item) => {
            const selected = category === item.id;
            const art = categoryArt[item.id];
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => choose(item.id)}
                className={`surface grid min-w-0 grid-cols-[7.5rem_1fr] overflow-hidden rounded-[1.6rem] text-left transition duration-300 hover:-translate-y-0.5 ${selected ? "ring-2 ring-orange" : ""}`}
              >
                <span className="relative block min-h-28">
                  <Image src={art.src} alt="" fill sizes="120px" className="object-cover" />
                </span>
                <span className="px-4 py-4">
                  <span className="block text-lg font-semibold text-cream">{item.label}</span>
                  <span className="mt-1 block text-sm text-gold">
                    {guide.countLabel.replace("{n}", String(counts[item.id]))}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{item.text}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="latest" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.latestTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.latestLead}</p>
        <form className="mt-5 flex flex-wrap gap-3" onSubmit={(event) => event.preventDefault()}>
          <label className="min-w-0 flex-1 basis-64">
            <span className="sr-only">{guide.searchLabel}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={guide.searchPlaceholder}
              className="w-full rounded-full border border-gold/30 bg-black/30 px-4 py-3 text-sm text-cream outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
            className={`rounded-full px-4 py-3 text-sm font-semibold ${category === "all" ? "btn-primary" : "btn-ghost"}`}
          >
            {guide.allLabel}
          </button>
          <button type="button" onClick={clear} className="btn-ghost rounded-full px-4 py-3 text-sm font-semibold">
            {guide.clear}
          </button>
        </form>
        <p className="mt-4 text-sm text-gold-soft">{guide.countLabel.replace("{n}", String(visible.length))}</p>
        {visible.length === 0 ? <p className="surface mt-4 rounded-3xl px-5 py-6 text-sm text-muted">{guide.empty}</p> : null}
        <ul className={`mt-4 grid gap-4 ${visible.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : visible.length === 2 ? "md:grid-cols-2" : ""}`}>
          {visible.map((card) => (
            <li key={card.slug} className="min-w-0">
              <LocaleLink
                locale={locale}
                href={`/blog/${card.slug}`}
                className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1 hover:ring-gold/50"
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-[#120c09]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex flex-1 flex-col p-4">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                    {guide.categories.find((item) => item.id === card.category)?.label}
                  </span>
                  <span className="mt-2 text-xs text-muted">
                    {card.dateLabel} · {card.minutes} {minutesLabel}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-cream">{card.title}</h3>
                  <span className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{card.excerpt}</span>
                  <span className="mt-4 text-sm font-semibold text-orange">{guide.read}</span>
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

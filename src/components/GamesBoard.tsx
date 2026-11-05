"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import type { Game, GamesGuide } from "@/content/types";
import type { Locale } from "@/lib/site";

const TOPIC_ART = {
  slots: "/images/games/fortune-tiger.webp",
  mahjong: "/images/games/mahjong-ways-2.webp",
  fishing: "/images/promotions/fachai.webp",
  live: "/images/providers/evolution.webp",
} as const;

export function GamesBoard({
  locale,
  games,
  images,
  guide,
}: {
  locale: Locale;
  games: Game[];
  images: Record<string, string>;
  guide: GamesGuide;
}) {
  const [category, setCategory] = useState<"slots" | "mahjong">("slots");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"published" | "az" | "za">("published");
  const counts = useMemo(
    () => ({
      slots: games.length,
      mahjong: games.filter((game) => game.slug.includes("mahjong")).length,
    }),
    [games],
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(locale);
    const filtered = games.filter((game) => {
      const inCategory = category === "slots" || game.slug.includes("mahjong");
      return inCategory && game.name.toLocaleLowerCase(locale).includes(needle);
    });
    if (sort === "az") return filtered.slice().sort((a, b) => a.name.localeCompare(b.name, locale));
    if (sort === "za") return filtered.slice().sort((a, b) => b.name.localeCompare(a.name, locale));
    return filtered;
  }, [category, games, locale, query, sort]);

  function choose(next: "slots" | "mahjong") {
    setCategory(next);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clear() {
    setCategory("slots");
    setQuery("");
    setSort("published");
  }

  return (
    <>
      <section id="categories" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.categoriesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.categoriesLead}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2" role="group" aria-label={guide.categoriesTitle}>
          {guide.categories.map((item) => {
            const selected = category === item.id;
            const thumb = item.id === "mahjong" ? TOPIC_ART.mahjong : TOPIC_ART.slots;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => choose(item.id)}
                className={`surface grid min-w-0 grid-cols-[7.5rem_1fr] overflow-hidden rounded-[1.6rem] text-left transition duration-300 hover:-translate-y-0.5 ${selected ? "ring-2 ring-orange" : ""}`}
              >
                <span className="flex items-end justify-center bg-[#120e0c]">
                  <Image src={thumb} alt="" width={180} height={220} className="h-28 w-auto object-contain" />
                </span>
                <span className="px-4 py-4">
                  <span className="block text-lg font-semibold text-cream">{item.label}</span>
                  <span className="mt-1 block text-sm text-gold">{counts[item.id]}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{item.text}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="library" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.libraryTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.libraryLead}</p>
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
          <label className="min-w-44">
            <span className="sr-only">{guide.sortLabel}</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as "published" | "az" | "za")}
              className="h-full w-full rounded-full border border-gold/30 bg-black/30 px-4 py-3 text-sm text-cream"
            >
              {guide.sorts.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={clear} className="btn-ghost rounded-full px-4 py-3 text-sm font-semibold">
            {guide.clear}
          </button>
        </form>
        <p className="mt-4 text-sm text-gold-soft">{guide.countLabel.replace("{n}", String(visible.length))}</p>
        {visible.length === 0 ? <p className="surface mt-4 rounded-3xl px-5 py-6 text-sm text-muted">{guide.empty}</p> : null}
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((game) => (
            <li key={game.slug} id={`game-${game.slug}`} className="surface scroll-mt-28 overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1">
              <div className="flex h-44 items-end justify-center bg-[#120e0c] sm:h-56">
                <Image src={images[game.slug]} alt={game.name} width={256} height={320} className="h-40 w-auto object-contain sm:h-52" />
              </div>
              <div className="px-3 py-3">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">{game.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-cream">{game.name}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{game.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.discoverTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.discoverLead}</p>
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {guide.topics.map((topic) => {
            const filterId = topic.id === "slots" || topic.id === "mahjong" ? topic.id : null;
            const art = (
              <span className="flex h-40 items-end justify-center bg-[#120e0c] sm:h-full">
                <Image src={TOPIC_ART[topic.id]} alt="" width={280} height={360} className="h-36 w-auto object-contain" />
              </span>
            );
            const copy = (
              <span className="block p-5">
                <span className="block text-xl font-semibold text-cream">{topic.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted">{topic.text}</span>
                <span className="mt-3 block text-sm font-semibold text-gold">{topic.link}</span>
              </span>
            );
            return (
              <li key={topic.id} className="surface overflow-hidden rounded-[1.6rem]">
                {filterId ? (
                  <button type="button" onClick={() => choose(filterId)} className="grid w-full text-left sm:grid-cols-[9rem_1fr]">
                    {art}
                    {copy}
                  </button>
                ) : (
                  <LocaleLink locale={locale} href={topic.href ?? "/promotion"} className="grid sm:grid-cols-[9rem_1fr]">
                    {art}
                    {copy}
                  </LocaleLink>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

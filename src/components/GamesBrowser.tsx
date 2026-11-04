"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Game } from "@/content/types";

export function GamesBrowser({
  games,
  images,
  allLabel,
  filterLabel,
}: {
  games: Game[];
  images: Record<string, string>;
  allLabel: string;
  filterLabel: string;
}) {
  const categories = useMemo(() => Array.from(new Set(games.map((game) => game.category))), [games]);
  const [active, setActive] = useState(allLabel);
  const visible = active === allLabel ? games : games.filter((game) => game.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={filterLabel}>
        {[allLabel, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${active === category ? "btn-primary" : "btn-ghost"}`}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((game) => (
          <li key={game.slug} className="surface overflow-hidden rounded-3xl">
            <div className="bg-[#1a100c]">
              <Image
                src={images[game.slug]}
                alt={game.name}
                width={256}
                height={320}
                className="mx-auto h-72 w-auto object-contain"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{game.category}</p>
              <h3 className="mt-1 text-lg font-semibold">{game.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{game.blurb}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

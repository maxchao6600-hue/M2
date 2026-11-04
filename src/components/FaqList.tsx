"use client";

import { useState } from "react";
import type { Faq } from "@/content/types";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q} className="surface rounded-2xl">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-cream"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                {item.q}
                <span aria-hidden className="text-gold">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            {expanded ? <p className="px-4 pb-4 text-sm leading-6 text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

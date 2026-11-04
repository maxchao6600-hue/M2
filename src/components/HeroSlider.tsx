"use client";

import { useEffect, useState } from "react";
import { BannerSplit } from "@/components/BannerSplit";
import { LocaleLink } from "@/components/LocaleLink";
import type { Locale } from "@/lib/site";

type Slide = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

type Props = {
  locale: Locale;
  slides: Slide[];
  prevLabel: string;
  nextLabel: string;
  gotoLabel: string;
};

export function HeroSlider({ locale, slides, prevLabel, nextLabel, gotoLabel }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  const slide = slides[index];

  return (
    <section
      className="mx-auto max-w-7xl px-4 pt-4 sm:px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <BannerSplit src={slide.image} alt={slide.alt} priority={index === 0}>
        <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{slide.eyebrow}</p>
        <h1 className="font-display mt-3 text-4xl leading-tight text-cream sm:text-5xl">{slide.title}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-cream/85">{slide.text}</p>
        <LocaleLink
          locale={locale}
          href={slide.href}
          className="btn-primary mt-6 inline-flex w-fit rounded-full px-6 py-3 text-sm font-semibold"
        >
          {slide.cta}
        </LocaleLink>
      </BannerSplit>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((item, slideIndex) => (
            <button
              key={item.image}
              type="button"
              className={`h-2.5 rounded-full ${slideIndex === index ? "w-8 bg-gold" : "w-2.5 bg-white/35"}`}
              aria-label={`${gotoLabel} ${slideIndex + 1}`}
              aria-current={slideIndex === index ? "true" : undefined}
              onClick={() => go(slideIndex)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" className="btn-ghost h-10 w-10 rounded-full" aria-label={prevLabel} onClick={() => go(index - 1)}>
            ‹
          </button>
          <button type="button" className="btn-ghost h-10 w-10 rounded-full" aria-label={nextLabel} onClick={() => go(index + 1)}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

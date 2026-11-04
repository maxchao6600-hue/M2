"use client";

import { useEffect, useState } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import type { Locale } from "@/lib/site";

type Slide = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
};

type Props = {
  locale: Locale;
  slides: Slide[];
  prevLabel: string;
  nextLabel: string;
  gotoLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function HeroSlider({
  locale,
  slides,
  prevLabel,
  nextLabel,
  gotoLabel,
  secondaryLabel,
  secondaryHref,
}: Props) {
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

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative min-h-[820px] md:min-h-[640px]">
        {slides.map((slide, slideIndex) => (
          <article
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              slideIndex === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            }`}
            inert={slideIndex !== index}
          >
            <HeroBackdrop variant={slideIndex} />
            <div className="relative mx-auto grid min-h-[820px] max-w-7xl items-start gap-8 px-4 pt-10 pb-24 md:min-h-[640px] md:grid-cols-2 md:items-center md:px-6 md:py-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{slide.eyebrow}</p>
                {slideIndex === index ? (
                  <h1 className="font-display mt-3 max-w-xl text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="font-display mt-3 max-w-xl text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-5 max-w-lg text-base leading-7 text-cream/85 sm:text-lg">{slide.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LocaleLink locale={locale} href={slide.href} className="btn-primary rounded-full px-6 py-3 text-sm font-semibold">
                    {slide.cta}
                  </LocaleLink>
                  <LocaleLink locale={locale} href={secondaryHref} className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold">
                    {secondaryLabel}
                  </LocaleLink>
                </div>
              </div>
              <HeroMotif variant={slideIndex} title={slide.title} />
            </div>
          </article>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 z-20 flex w-full items-center justify-between px-4 md:px-8">
        <div className="flex gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              className={`h-2.5 rounded-full transition-all ${
                slideIndex === index ? "w-8 bg-gold" : "w-2.5 bg-white/40"
              }`}
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

function HeroBackdrop({ variant }: { variant: number }) {
  const tones = [
    "radial-gradient(900px 420px at 75% 40%, rgba(255,107,26,0.55), transparent 60%), linear-gradient(100deg, #2a0d08, #120c09 55%, #3a160c)",
    "radial-gradient(800px 380px at 80% 30%, rgba(240,193,75,0.4), transparent 60%), linear-gradient(100deg, #241806, #120e0a 50%, #3a2208)",
    "radial-gradient(800px 380px at 70% 20%, rgba(226,59,47,0.45), transparent 58%), linear-gradient(100deg, #24080c, #12090b 55%, #3d1218)",
    "radial-gradient(760px 360px at 78% 45%, rgba(255,140,40,0.4), transparent 60%), linear-gradient(100deg, #1a1208, #100e0c 50%, #3a2410)",
  ];
  return <div className="absolute inset-0" style={{ background: tones[variant % tones.length] }} />;
}

function HeroMotif({ variant, title }: { variant: number; title: string }) {
  return (
    <div className="relative mx-auto h-44 w-full max-w-md sm:h-64 md:h-80" aria-hidden>
      <svg viewBox="0 0 420 360" className="h-full w-full drop-shadow-2xl">
        <title>{title}</title>
        {variant === 0 ? <SlotScene /> : null}
        {variant === 1 ? <RegisterScene /> : null}
        {variant === 2 ? <PhoneScene /> : null}
        {variant === 3 ? <PromoScene /> : null}
      </svg>
    </div>
  );
}

function SlotScene() {
  return (
    <g>
      <rect x="70" y="40" width="280" height="270" rx="28" fill="#2a120c" stroke="#f0c14b" strokeWidth="6" />
      <rect x="96" y="78" width="70" height="150" rx="12" fill="#1a0d08" />
      <rect x="176" y="78" width="70" height="150" rx="12" fill="#1a0d08" />
      <rect x="256" y="78" width="70" height="150" rx="12" fill="#1a0d08" />
      <rect x="108" y="96" width="46" height="34" rx="6" fill="#ff6b1a" />
      <rect x="188" y="130" width="46" height="34" rx="6" fill="#f0c14b" />
      <rect x="268" y="164" width="46" height="34" rx="6" fill="#fff1c9" />
      <circle cx="210" cy="268" r="22" fill="#ff6b1a" />
    </g>
  );
}

function RegisterScene() {
  return (
    <g>
      <rect x="90" y="50" width="240" height="250" rx="24" fill="#3a2208" stroke="#ffe7a3" strokeWidth="5" />
      <rect x="120" y="90" width="180" height="22" rx="8" fill="#fff1c9" />
      <rect x="120" y="128" width="180" height="22" rx="8" fill="#f0c14b" />
      <rect x="120" y="166" width="120" height="22" rx="8" fill="#ff6b1a" />
      <circle cx="300" cy="250" r="28" fill="#f0c14b" />
      <path d="M288 250 l8 8 16-18" fill="none" stroke="#3a2208" strokeWidth="4" />
    </g>
  );
}

function PhoneScene() {
  return (
    <g>
      <rect x="145" y="30" width="140" height="280" rx="24" fill="#1c120c" stroke="#ffb067" strokeWidth="6" />
      <rect x="162" y="68" width="106" height="170" rx="10" fill="#ff6b1a" />
      <circle cx="215" cy="270" r="12" fill="#f0c14b" />
      <rect x="70" y="120" width="70" height="90" rx="12" fill="#f0c14b" />
      <rect x="290" y="150" width="60" height="70" rx="12" fill="#fff1c9" />
    </g>
  );
}

function PromoScene() {
  return (
    <g>
      <rect x="60" y="80" width="300" height="180" rx="24" fill="#5a220f" stroke="#f0c14b" strokeWidth="5" />
      <path d="M90 200 L150 110 L210 180 L270 90 L330 200" fill="none" stroke="#ffe7a3" strokeWidth="8" />
      <circle cx="150" cy="110" r="12" fill="#ff6b1a" />
      <circle cx="270" cy="90" r="16" fill="#fff1c9" />
      <rect x="110" y="220" width="200" height="16" rx="8" fill="#f0c14b" />
    </g>
  );
}

import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { GamesBoard } from "@/components/GamesBoard";
import { JsonLd } from "@/components/JsonLd";
import { LobbyRail } from "@/components/LobbyRail";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import { GAME_IMAGES } from "@/lib/assets";
import { absoluteUrl, type Locale } from "@/lib/site";

const STEP_ART = ["fortune-tiger", "mahjong-ways-2", "wild-ape"] as const;

function Cover({ slug, alt, className }: { slug: string; alt: string; className: string }) {
  return <Image src={GAME_IMAGES[slug]} alt={alt} width={256} height={320} className={className} />;
}

export function GamesView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.popularGames;
  const guide = page.guide;
  const featured = dict.games.slice(0, 6);
  const hero = [dict.games[0], dict.games[1], dict.games[5]];

  return (
    <article className="mx-auto min-w-0 max-w-7xl overflow-x-clip px-4 py-6 sm:px-6 sm:py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: dict.crumbs.home, item: absoluteUrl(locale, "") },
            { "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(locale, path) },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <nav aria-label={dict.a11y.breadcrumb} className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <LocaleLink locale={locale} href="/" className="hover:text-gold">
              {dict.crumbs.home}
            </LocaleLink>
          </li>
          <li aria-hidden>/</li>
          <li className="text-cream">{page.h1}</li>
        </ol>
      </nav>

      <section className="relative mt-5 overflow-hidden rounded-[2rem] bg-[radial-gradient(640px_280px_at_88%_0%,rgba(216,58,18,0.48),transparent_60%),radial-gradient(420px_240px_at_0%_100%,rgba(240,193,75,0.18),transparent_55%),linear-gradient(165deg,#1a0d08,#090807)] px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
            <h1 className="font-display mt-2 text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{page.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#library" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.explore}
              </a>
              <a href="#categories" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.categoriesCta}
              </a>
            </div>
          </div>
          <div className="grid min-w-0 items-end gap-3 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="flex items-end justify-center overflow-hidden rounded-[1.6rem] bg-black/30 ring-1 ring-gold/30">
              <Cover slug={hero[0].slug} alt={guide.heroAlt} className="h-64 w-auto object-contain sm:h-80" />
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {hero.slice(1).map((game) => (
                <div key={game.slug} className="flex items-center justify-center rounded-2xl bg-black/30 p-2 ring-1 ring-orange/30">
                  <Cover slug={game.slug} alt={game.name} className="h-auto max-h-40 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.featuredTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.featuredLead}</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {featured.map((game, index) => (
            <li key={game.slug} className={index === 0 ? "col-span-2 lg:row-span-2" : ""}>
              <a href={`#game-${game.slug}`} className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1">
                <span className={`flex items-end justify-center bg-[#120e0c] ${index === 0 ? "h-64 sm:h-80" : "h-40 sm:h-48"}`}>
                  <Cover slug={game.slug} alt={game.name} className={`w-auto object-contain transition duration-300 group-hover:scale-105 ${index === 0 ? "h-60 sm:h-72" : "h-36 sm:h-44"}`} />
                </span>
                <span className="block p-4">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{guide.featuredMark}</span>
                  <span className="mt-1 block text-lg font-semibold text-cream">{game.name}</span>
                  <span className="mt-1 block text-xs text-muted">{game.category}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <GamesBoard locale={locale} games={dict.games} images={GAME_IMAGES} guide={guide} />

      <section className="mt-16 overflow-hidden">
        <h2 className="font-display text-3xl text-cream">{guide.railTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.railLead}</p>
        <div className="mt-5">
          <LobbyRail games={dict.games} images={GAME_IMAGES} label={guide.railLabel} prevLabel={guide.prev} nextLabel={guide.next} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.stepsTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.stepsLead}</p>
        <div className="relative mt-6">
          <div className="pointer-events-none absolute top-16 right-[12%] left-[12%] hidden h-px bg-gold/40 md:block" aria-hidden />
          <ol className="grid gap-4 md:grid-cols-3">
            {guide.steps.map((step, index) => (
              <li key={step.title} className="surface relative overflow-hidden rounded-3xl">
                <div className="flex h-36 items-end justify-center bg-[#120e0c]">
                  <Cover slug={STEP_ART[index]} alt="" className="h-32 w-auto object-contain" />
                </div>
                <div className="p-4">
                  <p className="font-display text-2xl text-gold">0{index + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.galleryTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.galleryLead}</p>
        <ul className="mt-6 grid grid-cols-3 gap-3 lg:grid-cols-5">
          {dict.games.map((game) => (
            <li key={game.slug}>
              <a href={`#game-${game.slug}`} className="surface block overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-0.5">
                <span className="flex h-28 items-end justify-center bg-[#120e0c] sm:h-36">
                  <Cover slug={game.slug} alt={game.name} className="h-24 w-auto object-contain sm:h-32" />
                </span>
                <span className="block px-2 py-2 text-center text-xs font-semibold break-words text-cream">{game.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.faqTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.faqLead}</p>
        <div className="mt-5">
          <FaqList items={guide.faqs} />
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#2a120c,#090807)]">
        <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8">
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{guide.closeTitle}</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">{guide.closeLead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LocaleLink locale={locale} href="/promotion" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.promoCta}
              </LocaleLink>
              <a href="#library" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.browseCta}
              </a>
              <LocaleLink locale={locale} href="/register" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.registerCta}
              </LocaleLink>
            </div>
          </div>
          <div className="flex items-end justify-center">
            <Cover slug="zeus" alt={dict.games[1].name} className="h-64 w-auto object-contain sm:h-80" />
          </div>
        </div>
      </section>
    </article>
  );
}

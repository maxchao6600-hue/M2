import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import { PromoShowcase } from "@/components/PromoShowcase";
import type { Dictionary, PromotionCampaign } from "@/content/types";
import { GAME_IMAGES } from "@/lib/assets";
import { absoluteUrl, type Locale } from "@/lib/site";

const BANNERS = {
  rollex: "/images/promotions/rollex-slot-casino.webp",
  "daily-rebate": "/images/promotions/daily-rebate.webp",
  fachai: "/images/promotions/fachai.webp",
} as const;

const STEP_ART = [
  { src: BANNERS.rollex, position: "object-left" },
  { src: BANNERS["daily-rebate"], position: "object-center" },
  { src: "/images/download/phone-lobby.jpg", position: "object-top" },
  { src: BANNERS.fachai, position: "object-right" },
] as const;

const TERM_PATHS = [
  "M12 3l7 3v6c0 4.2-2.7 7.4-7 9-4.3-1.6-7-4.8-7-9V6l7-3z",
  "M4 7h16M7 4h10v16H7zM10 11h4M10 15h4",
  "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  "M12 3v18M8 7h6a3 3 0 0 1 0 6H8",
  "M7 7h10v10H7zM4 4h4M16 4h4M4 16h4M16 16h4",
  "M5 19V5h10l4 4v10zM9 9h6M9 13h6",
] as const;

function Banner({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={828}
      height={332}
      priority={priority}
      className="h-auto w-full"
      sizes="(max-width: 1024px) 100vw, 640px"
    />
  );
}

function Highlight({
  campaign,
  viewDetails,
  tiles,
}: {
  campaign: PromotionCampaign;
  viewDetails: string;
  tiles: { slug: string; name: string }[];
}) {
  const banner = <Banner src={BANNERS[campaign.slug]} alt={campaign.imageAlt} />;
  const copy = (
    <div className="min-w-0">
      <h3 className="font-display text-3xl text-cream">{campaign.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{campaign.detail}</p>
      {campaign.chips ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {campaign.chips.map((chip) => (
            <li key={chip} className="rounded-full bg-orange px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
              {chip}
            </li>
          ))}
        </ul>
      ) : null}
      <a href={campaign.slug === "daily-rebate" ? "#daily-rebate" : "#terms"} className="btn-ghost mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
        {viewDetails}
      </a>
    </div>
  );

  if (campaign.slug === "rollex") {
    return (
      <article id={`campaign-${campaign.slug}`} className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-[#14100c]">
        {banner}
        <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          {copy}
          <ul className="grid gap-2">
            {campaign.points.map((point) => (
              <li key={point} className="rounded-2xl border border-gold/25 bg-black/30 px-4 py-3 text-sm text-gold-soft">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  if (campaign.slug === "fachai") {
    return (
      <article id={`campaign-${campaign.slug}`} className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#2a120c,#120e0c)] p-4 sm:p-6">
        <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl ring-1 ring-orange/40">{banner}</div>
          {copy}
        </div>
        <ul className="mt-5 grid grid-cols-3 gap-3">
          {tiles.map((tile) => (
            <li key={tile.slug} className="overflow-hidden rounded-2xl bg-black/40">
              <Image src={GAME_IMAGES[tile.slug]} alt={tile.name} width={240} height={320} className="h-28 w-full object-cover sm:h-40" />
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article id={`campaign-${campaign.slug}`} className="scroll-mt-28 grid items-center gap-5 overflow-hidden rounded-[2rem] border border-gold/30 bg-[#1a120c] p-4 sm:p-6 lg:grid-cols-[0.85fr_1.15fr]">
      {copy}
      <div className="overflow-hidden rounded-3xl ring-1 ring-gold/40">{banner}</div>
    </article>
  );
}

export function PromotionView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.promotion;
  const guide = page.guide;
  const slots = dict.games.slice(0, 8);
  const tiles = ["fortune-tiger", "zeus", "ways-of-the-qilin"].map((slug) => {
    const game = dict.games.find((item) => item.slug === slug);
    return { slug, name: game?.name ?? slug };
  });

  return (
    <article className="mx-auto min-w-0 max-w-6xl overflow-x-clip px-4 py-6 sm:px-6 sm:py-8">
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

      <section className="relative mt-5 overflow-hidden rounded-[2rem] bg-[radial-gradient(620px_280px_at_92%_0%,rgba(216,58,18,0.5),transparent_62%),radial-gradient(420px_220px_at_0%_100%,rgba(240,193,75,0.2),transparent_55%),linear-gradient(165deg,#241109,#090807)] px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
            <h1 className="font-display mt-2 text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{page.lead}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {guide.campaigns.map((campaign) => (
                <li key={campaign.slug}>
                  <a href={`#campaign-${campaign.slug}`} className="inline-flex rounded-full border border-gold/50 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-gold-soft">
                    {campaign.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#featured" className="btn-primary mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold">
              {guide.explore}
            </a>
          </div>
          <div className="grid min-w-0 gap-3">
            <div className="overflow-hidden rounded-[1.6rem] shadow-[0_24px_50px_rgba(0,0,0,0.45)] ring-1 ring-gold/40">
              <Banner src={BANNERS.rollex} alt={guide.heroAlt} priority />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="#campaign-daily-rebate" className="overflow-hidden rounded-2xl ring-1 ring-orange/40 transition duration-300 hover:-translate-y-0.5">
                <Banner src={BANNERS["daily-rebate"]} alt={guide.campaigns[1].imageAlt} />
              </a>
              <a href="#campaign-fachai" className="overflow-hidden rounded-2xl ring-1 ring-orange/40 transition duration-300 hover:-translate-y-0.5">
                <Banner src={BANNERS.fachai} alt={guide.campaigns[2].imageAlt} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PromoShowcase guide={guide} />

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.highlightsTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.highlightsLead}</p>
        <div className="mt-6 grid gap-6">
          {guide.campaigns.map((campaign) => (
            <Highlight key={campaign.slug} campaign={campaign} viewDetails={guide.viewDetails} tiles={tiles} />
          ))}
        </div>
      </section>

      <section id="participate" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.stepsTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.stepsLead}</p>
        <div className="relative mt-6">
          <div className="pointer-events-none absolute top-16 right-[8%] left-[8%] hidden h-px bg-gold/40 md:block" aria-hidden />
          <ol className="grid gap-4 md:grid-cols-4">
          {guide.steps.map((step, index) => {
            const art = STEP_ART[index];
            return (
              <li key={step.title} className="surface relative min-w-0 overflow-hidden rounded-3xl">
                <Image src={art.src} alt="" width={828} height={332} className={`h-28 w-full object-cover ${art.position}`} />
                <div className="p-4">
                  <p className="font-display text-2xl text-gold">0{index + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            );
          })}
          </ol>
        </div>
      </section>

      <section id="terms" className="mt-16 scroll-mt-28 overflow-hidden rounded-[2rem] bg-[#14100c] p-5 sm:p-8">
        <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0">
            <h2 className="font-display text-3xl text-cream">{guide.termsTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{guide.termsLead}</p>
            <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-gold/30">
              <Banner src={BANNERS["daily-rebate"]} alt={guide.campaigns[1].imageAlt} />
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {guide.terms.map((term, index) => (
              <li key={term.title} className="rounded-2xl border border-gold/20 bg-black/25 p-4">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d={TERM_PATHS[index] ?? TERM_PATHS[0]} />
                </svg>
                <h3 className="mt-2 text-base font-semibold text-cream">{term.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{term.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="daily-rebate" className="mt-16 scroll-mt-28 overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#ff8a3d,#d83a12_42%,#3a140c)]">
        <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
          <Banner src={BANNERS["daily-rebate"]} alt={guide.campaigns[1].imageAlt} />
          <div className="p-5 sm:p-7">
            <h2 className="font-display text-3xl text-white">{guide.rebateTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-white/85">{guide.rebateLead}</p>
            <ul className="mt-5 grid gap-3">
              {guide.rebateFacts.map((fact) => (
                <li key={fact.label} className="rounded-2xl bg-black/35 px-4 py-3">
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">{fact.label}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{fact.value}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-white/85">{guide.rebateNote}</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.playTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.playLead}</p>
        <h3 className="mt-6 text-lg font-semibold text-cream">{guide.slotsTitle}</h3>
        <ul className="game-rail mt-3 flex snap-x gap-4 overflow-x-auto pb-2">
          {slots.map((game) => (
            <li key={game.slug} className="w-40 shrink-0 snap-start sm:w-48">
              <LocaleLink locale={locale} href="/popular-games" className="surface block overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1">
                <Image src={GAME_IMAGES[game.slug]} alt={game.name} width={320} height={420} className="h-48 w-full object-cover" />
                <span className="block px-3 py-3">
                  <span className="block text-sm font-semibold text-cream">{game.name}</span>
                  <span className="mt-1 block text-xs text-gold">{game.category}</span>
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid items-center gap-5 overflow-hidden rounded-[2rem] bg-[#14100c] sm:grid-cols-[0.7fr_1.3fr]">
          <Image src="/images/providers/fachai.webp" alt={guide.fishingTitle} width={360} height={480} className="mx-auto h-52 w-auto object-contain p-4" />
          <div className="p-5 sm:py-6 sm:pr-6">
            <h3 className="text-2xl font-semibold text-cream">{guide.fishingTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{guide.fishingLead}</p>
            <LocaleLink locale={locale} href="/popular-games" className="btn-primary mt-4 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
              {guide.gamesCta}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.faqTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.faqLead}</p>
        <div className="mt-5">
          <FaqList items={guide.faqs} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.relatedTitle}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guide.related.map((item) => (
            <li key={item.href}>
              <LocaleLink locale={locale} href={item.href} className="surface block h-full rounded-3xl p-5 transition duration-300 hover:-translate-y-0.5">
                <h3 className="text-lg font-semibold text-cream">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#2a120c,#090807)]">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-6 sm:p-8">
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{guide.closeTitle}</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">{guide.closeLead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LocaleLink locale={locale} href="/popular-games" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.gamesCta}
              </LocaleLink>
              <LocaleLink locale={locale} href="/register" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.registerCta}
              </LocaleLink>
            </div>
          </div>
          <Banner src={BANNERS.fachai} alt={guide.campaigns[2].imageAlt} />
        </div>
      </section>
    </article>
  );
}

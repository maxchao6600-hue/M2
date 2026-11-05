import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import { GAME_IMAGES, PROVIDERS } from "@/lib/assets";
import { absoluteUrl, type Locale } from "@/lib/site";

const HOME = "/images/download/phone-home.jpg";
const LOBBY = "/images/download/phone-lobby.jpg";
const GAMES = "/images/download/phone-games.jpg";
const DESKTOP = "/images/download/desktop-home.jpg";

const LIVE = [
  { src: "/images/providers/evolution.webp", name: "Evolution" },
  { src: "/images/providers/pragmatic-play-live.webp", name: "Pragmatic Play Live" },
  { src: "/images/providers/playtech-live.webp", name: "Playtech Live" },
  { src: "/images/providers/sexy.webp", name: "Sexy" },
] as const;

const BENEFIT_IMAGES = [DESKTOP, HOME, LOBBY, "/images/games/fortune-tiger.webp", GAMES] as const;
const INSTALL_IMAGES = [HOME, LOBBY, GAMES, DESKTOP] as const;

export function DownloadView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.download;
  const guide = page.guide;
  const slots = dict.games.slice(0, 6);

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

      <section className="relative mt-5 overflow-hidden rounded-[2rem] bg-[radial-gradient(520px_240px_at_88%_12%,rgba(255,107,26,0.35),transparent_62%),radial-gradient(420px_220px_at_8%_90%,rgba(240,193,75,0.16),transparent_60%)] px-4 py-6 sm:px-8 sm:py-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
            <h1 className="font-display mt-2 text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{page.lead}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {guide.badges.map((badge) => (
                <li key={badge} className="rounded-full border border-gold/50 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-gold-soft uppercase">
                  {badge}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <LocaleLink locale={locale} href="/popular-games" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.explore}
              </LocaleLink>
              <LocaleLink locale={locale} href="/register" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.registerCta}
              </LocaleLink>
            </div>
          </div>
          <div className="relative mx-auto min-h-[460px] w-full max-w-[420px]">
            <PhoneShot src={HOME} alt={guide.homeAlt} className="ml-auto w-[76%] max-w-[280px]" priority />
            <PhoneShot src={LOBBY} alt={guide.lobbyAlt} className="absolute bottom-0 left-0 w-[48%] max-w-[180px] shadow-none" crop />
          </div>
        </div>
      </section>

      <section className="mt-14 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#14100c] p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <PhoneShot src={GAMES} alt={guide.gamesAlt} className="mx-auto w-full max-w-[260px]" />
        <div className="min-w-0">
          <h2 className="font-display text-3xl text-cream">{guide.androidTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{guide.androidLead}</p>
          <ol className="mt-5 grid gap-3">
            {guide.androidSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-cream/90">
                <span className="font-display text-gold">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-8 grid items-center gap-8 rounded-[2rem] border border-gold/20 p-5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-w-0 lg:order-2">
          <PhoneShot src={LOBBY} alt={guide.lobbyAlt} className="mx-auto w-full max-w-[260px]" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-3xl text-cream">{guide.iosTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{guide.iosLead}</p>
          <ol className="mt-5 grid gap-3">
            {guide.iosSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-cream/90">
                <span className="font-display text-gold">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,107,26,0.12),transparent_40%),#100c0a] p-5 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Monitor src={DESKTOP} alt={guide.desktopAlt} />
          <div className="min-w-0">
            <h2 className="font-display text-3xl text-cream">{guide.desktopTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{guide.desktopLead}</p>
            <ol className="mt-5 grid gap-3">
              {guide.desktopSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-cream/90">
                  <span className="font-display text-gold">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.installTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.installLead}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {guide.install.map((step, index) => (
            <li key={step.title} className="surface min-w-0 overflow-hidden rounded-3xl">
              <div className="relative h-44 bg-black">
                <Image src={INSTALL_IMAGES[index]} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover object-top" />
              </div>
              <div className="p-4">
                <p className="font-display text-gold">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 min-w-0">
        <h2 className="font-display text-3xl text-cream">{guide.playTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.playLead}</p>
        <h3 className="mt-8 text-xl font-semibold">{guide.slotsTitle}</h3>
        <ul className="game-rail mt-4 flex gap-4 overflow-x-auto pb-2">
          {slots.map((game) => (
            <li key={game.slug} className="w-40 shrink-0 sm:w-44">
              <LocaleLink locale={locale} href="/popular-games" className="block">
                <Image src={GAME_IMAGES[game.slug]} alt={game.name} width={320} height={420} className="h-52 w-full rounded-2xl object-cover" />
                <p className="mt-2 text-sm font-semibold">{game.name}</p>
                <p className="text-xs text-gold">{game.category}</p>
              </LocaleLink>
            </li>
          ))}
        </ul>
        <h3 className="mt-8 text-xl font-semibold">{guide.liveTitle}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{guide.liveLead}</p>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LIVE.map((item) => (
            <li key={item.name} className="overflow-hidden rounded-2xl bg-[#120e0c]">
              <Image src={item.src} alt={item.name} width={400} height={240} className="h-28 w-full object-cover" />
              <p className="px-3 py-2 text-sm font-semibold">{item.name}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#14100c] sm:grid sm:grid-cols-[1.1fr_0.9fr]">
          <Image src="/images/promotions/fachai.webp" alt={guide.fishingTitle} width={960} height={420} className="h-52 w-full object-cover sm:h-full" />
          <div className="p-5">
            <h3 className="text-xl font-semibold">{guide.fishingTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{guide.fishingLead}</p>
          </div>
        </div>
        <h3 className="mt-8 text-xl font-semibold">{guide.providersTitle}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{guide.providersLead}</p>
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {PROVIDERS.slice(0, 12).map((provider) => (
            <li key={provider.name} className="overflow-hidden rounded-2xl bg-[#120e0c]">
              <Image src={provider.src} alt={provider.name} width={240} height={140} className="h-16 w-full object-cover" />
              <p className="truncate px-2 py-1.5 text-xs font-semibold">{provider.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.benefitsTitle}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {guide.benefits.map((item, index) => (
            <li key={item.title} className={`surface min-w-0 overflow-hidden rounded-3xl ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <div className="relative h-36">
                <Image src={BENEFIT_IMAGES[index]} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.troubleTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.troubleLead}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {guide.troubles.map((item) => (
            <li key={item.title} className="rounded-3xl border border-orange/30 bg-[#100c0a] p-5">
              <h3 className="text-lg font-semibold text-gold-soft">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/contact-us" className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-gold-soft">
          {dict.nav.contact}
        </LocaleLink>
      </section>

      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="font-display text-3xl text-cream">{guide.faqTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{guide.faqLead}</p>
        <div className="mt-6">
          <FaqList items={guide.faqs} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.relatedTitle}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guide.related.map((item) => (
            <li key={item.href}>
              <LocaleLink locale={locale} href={item.href} className="surface block h-full rounded-3xl p-5 transition hover:border-gold">
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
  crop = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  crop?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-[1.8rem] border-8 border-[#241910] bg-black shadow-[0_24px_50px_rgba(0,0,0,0.45)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        priority={priority}
        className={crop ? "h-64 w-full object-cover object-top" : "h-auto w-full"}
      />
    </div>
  );
}

function Monitor({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="min-w-0">
      <div className="overflow-hidden rounded-2xl border-8 border-[#241910] bg-black shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
        <Image src={src} alt={alt} width={1440} height={900} className="h-auto w-full" />
      </div>
      <div className="mx-auto h-3 w-24 bg-[#241910]" />
      <div className="mx-auto h-2 w-40 rounded-b-xl bg-[#3a2c22]" />
    </div>
  );
}

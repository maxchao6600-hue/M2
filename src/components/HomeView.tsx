import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { HeroSlider } from "@/components/HeroSlider";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import { CATEGORY_IMAGES, GAME_IMAGES, HERO_SLIDES, PAYMENT_LOGOS, PHONE_SCREENS, PROVIDERS } from "@/lib/assets";
import type { Locale } from "@/lib/site";

export function HomeView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const slides = dict.home.slides.map((slide, index) => ({
    ...slide,
    image: HERO_SLIDES[index].src,
    alt: HERO_SLIDES[index].alt,
  }));

  return (
    <>
      <HeroSlider
        locale={locale}
        slides={slides}
        prevLabel={dict.a11y.prev}
        nextLabel={dict.a11y.next}
        gotoLabel={dict.a11y.gotoSlide}
      />

      <ul className="game-rail flex gap-3 overflow-x-auto border-y border-[rgba(240,193,75,0.16)] bg-black/30 px-4 py-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
        {dict.home.strip.map((item) => (
          <li key={item} className="shrink-0">
            {item}
          </li>
        ))}
      </ul>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading title={dict.home.popularTitle} lead={dict.home.popularLead} />
        <ul className="game-rail mt-8 flex gap-4 overflow-x-auto pb-1">
          {dict.games.map((game) => (
            <li key={game.slug} className="surface group w-44 shrink-0 overflow-hidden rounded-3xl">
              <div className="flex h-56 items-center justify-center bg-[#1a100c]">
                <Image
                  src={GAME_IMAGES[game.slug]}
                  alt={game.name}
                  width={256}
                  height={320}
                  className="h-52 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{game.category}</p>
                <h3 className="mt-1 font-semibold">{game.name}</h3>
              </div>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/popular-games" className="btn-ghost mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.viewAll}
        </LocaleLink>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <SectionHeading title={dict.home.categoryTitle} lead={dict.home.categoryLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.home.categories.map((category, index) => (
            <li key={category.name}>
              <LocaleLink locale={locale} href={category.href} className="surface flex h-full gap-4 rounded-3xl p-4">
                <span className="flex h-28 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#1a100c]">
                  <Image
                    src={CATEGORY_IMAGES[index]}
                    alt=""
                    width={180}
                    height={240}
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                <span>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{category.text}</p>
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading title={dict.home.studioTitle} lead={dict.home.studioLead} />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PROVIDERS.map((provider) => (
            <li key={provider.name} className="surface flex h-52 items-center justify-center rounded-3xl bg-[#1a100c] p-3">
              <Image src={provider.src} alt={provider.name} width={200} height={260} className="max-h-44 w-auto object-contain" />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{dict.home.studioNote}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.promoTitle} lead={dict.home.promoLead} />
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {dict.promos.map((promo) => (
            <li key={promo.slug} className="surface rounded-3xl p-5">
              <h3 className="text-xl font-semibold">{promo.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{promo.summary}</p>
              <ul className="mt-3 grid gap-1 text-sm text-cream/90">
                {promo.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/promotion" className="btn-primary mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.viewAll}
        </LocaleLink>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading title={dict.home.registerTitle} lead={dict.home.registerLead} />
          <ol className="mt-8 grid gap-4">
            {dict.home.steps.map((step, index) => (
              <li key={step.title} className="surface rounded-3xl p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <LocaleLink locale={locale} href="/register" className="btn-primary mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
            {dict.cta.register}
          </LocaleLink>
        </div>
        <div className="flex justify-center rounded-3xl bg-[#1a100c] p-6">
          <Image
            src={GAME_IMAGES["wild-ape"]}
            alt="Wild Ape"
            width={256}
            height={320}
            className="h-80 w-auto object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.downloadTitle} lead={dict.home.downloadLead} />
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {dict.home.platforms.map((platform, index) => (
            <li key={platform.name} className="surface rounded-3xl p-5">
              <div className="mx-auto mb-4 w-40 rounded-[1.8rem] border-4 border-[#2a2118] bg-black p-2">
                <div className="flex h-56 items-center justify-center overflow-hidden rounded-[1.2rem] bg-[#1a100c]">
                  <Image
                    src={PHONE_SCREENS[index]}
                    alt=""
                    width={256}
                    height={320}
                    className="h-52 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{platform.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{platform.text}</p>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/download" className="btn-ghost mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.download}
        </LocaleLink>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading title={dict.home.payTitle} lead={dict.home.payLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {dict.payments.map((method, index) => (
            <li key={method.name} className="surface flex gap-4 rounded-3xl p-4">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                <Image
                  src={PAYMENT_LOGOS[index].src}
                  alt={PAYMENT_LOGOS[index].name}
                  width={PAYMENT_LOGOS[index].width}
                  height={PAYMENT_LOGOS[index].height}
                  className="max-h-14 w-auto object-contain"
                />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{method.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{method.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/payment-methods" className="btn-ghost mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.learnMore}
        </LocaleLink>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.featureTitle} lead={dict.home.featureLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dict.home.features.map((feature) => (
            <li key={feature.title} className="surface rounded-3xl p-5">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionHeading title={dict.home.guideTitle} lead={dict.home.guideLead} />
        <ul className="mt-6 grid gap-2 text-sm leading-6 text-cream/90">
          {dict.home.guidePoints.map((point) => (
            <li key={point} className="surface rounded-2xl px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/topup-withdrawal-guide" className="btn-primary mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.readGuide}
        </LocaleLink>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.programTitle} lead={dict.home.programLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {dict.home.programs.map((program) => (
            <li key={program.href} className="surface rounded-3xl p-6">
              <h3 className="text-2xl font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{program.text}</p>
              <LocaleLink locale={locale} href={program.href} className="mt-4 inline-flex text-sm font-semibold text-gold">
                {dict.cta.learnMore}
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionHeading title={dict.home.faqTitle} lead={dict.home.faqLead} />
        <div className="mt-8">
          <FaqList items={dict.faqs.slice(0, 6)} />
        </div>
        <LocaleLink locale={locale} href="/faq" className="btn-ghost mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
          {dict.cta.viewAll}
        </LocaleLink>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
        <h2 className="font-display text-3xl text-cream">{dict.home.seoTitle}</h2>
        <div className="mt-6 grid gap-8">
          {dict.seoBlocks.map((block) => (
            <article key={block.heading}>
              <h3 className="text-xl font-semibold">{block.heading}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-3 text-sm leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHeading({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-3xl text-cream sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{lead}</p>
    </div>
  );
}

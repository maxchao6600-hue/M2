import { ArtFrame } from "@/components/ArtFrame";
import { FaqList } from "@/components/FaqList";
import { HeroSlider } from "@/components/HeroSlider";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";

export function HomeView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <HeroSlider
        locale={locale}
        slides={dict.home.slides}
        prevLabel={dict.a11y.prev}
        nextLabel={dict.a11y.next}
        gotoLabel={dict.a11y.gotoSlide}
        secondaryLabel={dict.cta.browseGames}
        secondaryHref="/popular-games"
      />

      <ul className="flex gap-3 overflow-x-auto border-y border-[rgba(240,193,75,0.16)] bg-black/30 px-4 py-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
        {dict.home.strip.map((item) => (
          <li key={item} className="shrink-0">
            {item}
          </li>
        ))}
      </ul>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading title={dict.home.popularTitle} lead={dict.home.popularLead} />
        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {dict.games.slice(0, 8).map((game, index) => (
            <li key={game.slug} className="surface w-56 shrink-0 overflow-hidden rounded-3xl">
              <ArtFrame tone={index} motif={index % 6} label={game.name} className="h-40 rounded-none" />
              <div className="p-4">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{game.category}</p>
                <h3 className="mt-1 font-semibold">{game.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{game.blurb}</p>
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
                <ArtFrame tone={index + 2} motif={(index + 1) % 6} label={category.name} className="h-24 w-28 shrink-0" />
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
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.home.studios.map((studio) => (
            <li key={studio.name} className="surface rounded-3xl p-5">
              <p className="font-display text-2xl text-gold">{studio.mark}</p>
              <h3 className="mt-3 text-lg font-semibold">{studio.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{studio.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{dict.home.studioNote}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.promoTitle} lead={dict.home.promoLead} />
        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {dict.promos.map((promo, index) => (
            <li key={promo.slug} className="surface grid overflow-hidden rounded-3xl md:grid-cols-[180px_1fr]">
              <ArtFrame tone={index + 3} motif={index + 2} label={promo.title} className="h-40 rounded-none md:h-full" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{promo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{promo.summary}</p>
                <ul className="mt-3 grid gap-1 text-sm text-cream/90">
                  {promo.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
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
        <ArtFrame tone={5} motif={5} label={dict.home.registerTitle} className="h-80" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.downloadTitle} lead={dict.home.downloadLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {dict.home.platforms.map((platform, index) => (
            <li key={platform.name} className="surface rounded-3xl p-5">
              <ArtFrame tone={index + 4} motif={index} label={platform.name} className="mb-4 h-28" />
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
              <ArtFrame tone={index + 6} motif={(index + 3) % 6} label={method.name} className="h-24 w-28 shrink-0" />
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

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
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
        </div>
        <ArtFrame tone={1} motif={1} label={dict.home.guideTitle} className="h-80" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title={dict.home.programTitle} lead={dict.home.programLead} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {dict.home.programs.map((program, index) => (
            <li key={program.href} className="surface rounded-3xl p-6">
              <ArtFrame tone={index + 7} motif={4 + index} label={program.title} className="mb-4 h-36" />
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

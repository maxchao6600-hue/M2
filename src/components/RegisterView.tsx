import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { RegisterForm } from "@/components/Forms";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import { PAGE_IMAGES } from "@/lib/assets";
import { absoluteUrl, type Locale } from "@/lib/site";

export function RegisterView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.register;
  const guide = page.guide;
  const art = PAGE_IMAGES.register;

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

      <section className="mt-5 grid min-w-0 items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
          <h1 className="font-display mt-2 text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
        </div>
        <div className="min-w-0 lg:row-span-2">
          <RegisterForm forms={dict.forms} locale={locale} title={guide.formTitle} />
        </div>
        <div className="min-w-0">
          <p className="max-w-xl text-base leading-7 text-muted">{page.lead}</p>
          <ul className="mt-4 grid gap-2">
            {guide.points.map((point) => (
              <li key={point} className="text-sm leading-6 text-cream/90">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl border border-gold/30 bg-[#120e0c] px-4 py-3 text-sm leading-6 text-gold-soft">{guide.ageNote}</p>
          <div className="relative mt-5 hidden h-40 overflow-hidden rounded-3xl bg-[#1a100c] md:block lg:h-44">
            <Image src={art.src} alt={guide.artAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain object-center" />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.processTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.processLead}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {guide.steps.map((step, index) => (
            <li key={step.title} className="surface min-w-0 rounded-3xl p-5">
              <p className="font-display text-2xl text-gold">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.requirementsTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.requirementsLead}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {guide.requirements.map((item) => (
            <li key={item.title} className="min-w-0 rounded-3xl border border-orange/35 bg-[#100c0a] p-5">
              <h3 className="text-lg font-semibold text-gold-soft">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.troubleTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.troubleLead}</p>
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {guide.troubles.map((item) => (
            <li key={item.id} id={item.id} className="surface min-w-0 scroll-mt-28 rounded-3xl p-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              <ul className="mt-3 grid gap-2">
                {item.steps.map((step) => (
                  <li key={step} className="text-sm leading-6 text-cream/90">
                    {step}
                  </li>
                ))}
              </ul>
              <LocaleLink locale={locale} href={item.href} className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-gold-soft">
                {item.link}
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-cream">{guide.securityTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{guide.securityLead}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guide.security.map((item) => (
            <li key={item.title} className="surface min-w-0 rounded-3xl p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
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
            <li key={item.href} className="min-w-0">
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

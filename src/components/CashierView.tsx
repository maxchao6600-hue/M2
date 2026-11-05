import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { Dictionary } from "@/content/types";
import { CASHIER_IMAGES, PAYMENT_LOGOS, POST_IMAGES } from "@/lib/assets";
import { absoluteUrl, type Locale } from "@/lib/site";

const NAV_ART = {
  methods: CASHIER_IMAGES.methods,
  topup: CASHIER_IMAGES.topup,
  withdrawal: CASHIER_IMAGES.withdraw,
  security: CASHIER_IMAGES.security,
} as const;

export function CashierView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.topup;
  const guide = page.guide;
  const relatedArt = [CASHIER_IMAGES.methods, POST_IMAGES["cashier-checklist"], POST_IMAGES["getting-started"], CASHIER_IMAGES.contact];
  const relatedAlt = [guide.alts.methods, guide.alts.checklist, guide.alts.account, guide.alts.contact];

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

      <section className="relative mt-5 overflow-hidden rounded-[2rem] bg-[radial-gradient(640px_280px_at_88%_0%,rgba(216,58,18,0.42),transparent_60%),radial-gradient(420px_240px_at_0%_100%,rgba(240,193,75,0.16),transparent_55%),linear-gradient(165deg,#1a0d08,#090807)] px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
            <h1 className="font-display mt-2 break-words text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{page.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#methods" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.methodsCta}
              </a>
              <a href="#topup" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.stepsCta}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30">
            <Image src={CASHIER_IMAGES.hero} alt={guide.alts.hero} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.navTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.navLead}</p>
        <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {guide.nav.map((item, index) => (
            <li key={item.id} className="min-w-0">
              <a href={`#${item.id}`} className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1">
                <span className={`relative block bg-[#120c09] ${index === 2 ? "order-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image src={NAV_ART[item.id]} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </span>
                <span className="p-4">
                  <h3 className="text-lg font-semibold text-cream">{item.title}</h3>
                  <span className="mt-2 block text-sm leading-6 text-muted">{item.text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="methods" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.methodsTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{guide.methodsLead}</p>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-gold-soft">{guide.methodsNote}</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {dict.payments.map((method, index) => {
            const logo = PAYMENT_LOGOS[index];
            return (
              <li key={method.name} className="surface grid gap-4 rounded-[1.6rem] p-4 sm:grid-cols-[7.5rem_1fr] sm:p-5">
                <span className="flex h-28 items-center justify-center rounded-2xl bg-white p-3">
                  <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="max-h-16 w-auto object-contain" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-cream">{guide.methodTitles[index] ?? method.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{method.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="topup" className="mt-16 scroll-mt-28">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <h2 className="font-display text-3xl text-cream">{guide.topupTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{guide.topupLead}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] ring-1 ring-orange/30">
            <Image src={CASHIER_IMAGES.topup} alt={guide.alts.topup} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
        <ol className="mt-6 grid gap-4">
          {guide.topupSteps.map((step, index) => (
            <li key={step.title} className="surface grid items-center gap-4 rounded-[1.6rem] p-4 sm:grid-cols-[6.5rem_1fr]">
              <span className={`flex h-24 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-gold/25 ${index % 2 ? "sm:order-2" : ""}`}>
                <StepGlyph index={index} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="withdrawal" className="mt-16 scroll-mt-28">
        <h2 className="font-display text-3xl text-cream">{guide.withdrawTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{guide.withdrawLead}</p>
        <div className="mt-5 grid items-start gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30 lg:aspect-auto lg:min-h-[28rem]">
            <Image src={CASHIER_IMAGES.withdraw} alt={guide.alts.withdraw} fill sizes="(max-width: 1024px) 100vw, 36vw" className="object-cover" />
          </div>
          <ol className="grid gap-3 border-l border-gold/40 pl-4">
            {guide.withdrawSteps.map((step, index) => (
              <li key={step.title} className="relative grid min-w-0 grid-cols-[3.25rem_1fr] items-center gap-3 rounded-2xl bg-black/20 px-3 py-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a120c] ring-1 ring-gold/30">
                  <WithdrawGlyph index={index} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.16em] text-orange">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-base font-semibold text-cream">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-4 rounded-[1.6rem] border border-gold/50 bg-[#140e0a] px-5 py-4 text-sm leading-6 text-gold-soft">{guide.withdrawReminder}</p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.compareTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.compareLead}</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(160deg,#3a160c,#120c09)] ring-1 ring-orange/40">
            <div className="relative h-36">
              <Image src={CASHIER_IMAGES.topup} alt="" fill sizes="50vw" className="object-cover opacity-80" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl text-cream">{guide.topupTitle}</h3>
              <dl className="mt-4 grid gap-3">
                <CompareRow label={guide.compareLabels.purpose} text={guide.topupCompare.purpose} />
                <CompareRow label={guide.compareLabels.start} text={guide.topupCompare.start} />
                <CompareRow label={guide.compareLabels.verify} text={guide.topupCompare.verify} />
                <CompareRow label={guide.compareLabels.keep} text={guide.topupCompare.keep} />
              </dl>
            </div>
          </article>
          <article className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(160deg,#2a2112,#100e0c)] ring-1 ring-gold/40">
            <div className="relative h-36">
              <Image src={CASHIER_IMAGES.withdraw} alt="" fill sizes="50vw" className="object-cover opacity-80" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl text-cream">{guide.withdrawTitle}</h3>
              <dl className="mt-4 grid gap-3">
                <CompareRow label={guide.compareLabels.purpose} text={guide.withdrawCompare.purpose} />
                <CompareRow label={guide.compareLabels.start} text={guide.withdrawCompare.start} />
                <CompareRow label={guide.compareLabels.verify} text={guide.withdrawCompare.verify} />
                <CompareRow label={guide.compareLabels.status} text={guide.withdrawCompare.status} />
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section id="security" className="mt-16 scroll-mt-28 overflow-hidden rounded-[2rem] border border-gold/40 bg-[#0c0a09] px-4 py-8 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem] ring-1 ring-gold/30">
            <Image src={CASHIER_IMAGES.security} alt={guide.alts.security} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-3xl text-cream">{guide.securityTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{guide.securityLead}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {guide.securityPoints.map((point) => (
                <li key={point.title} className="rounded-2xl border border-gold/25 bg-black/30 p-4">
                  <h3 className="text-base font-semibold text-gold-soft">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid items-end gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="font-display text-3xl text-cream">{guide.issuesTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{guide.issuesLead}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] ring-1 ring-gold/25 sm:aspect-[16/9]">
            <Image src={CASHIER_IMAGES.trouble} alt={guide.alts.trouble} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </div>
        </div>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guide.issues.map((issue, index) => (
            <li key={issue.title} className="surface rounded-[1.4rem] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/30 ring-1 ring-orange/30">
                <IssueGlyph index={index} />
              </span>
              <h3 className="mt-3 text-base font-semibold text-cream">{issue.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{issue.text}</p>
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

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.relatedTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.relatedLead}</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guide.related.map((item, index) => (
            <li key={item.href} className="min-w-0">
              <LocaleLink locale={locale} href={item.href} className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1">
                <span className="relative block aspect-[4/3] bg-[#120c09]">
                  <Image src={relatedArt[index]} alt={relatedAlt[index]} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                </span>
                <span className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-semibold text-cream">{item.title}</h3>
                  <span className="mt-2 text-sm leading-6 text-muted">{item.text}</span>
                  <span className="mt-4 text-sm font-semibold text-orange">{item.link}</span>
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function CompareRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-cream">{text}</dd>
    </div>
  );
}

function WithdrawGlyph({ index }: { index: number }) {
  const common = "h-6 w-6 text-gold";
  if (index === 0) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <circle cx="24" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 38c1.5-7 6-11 12-11s10.5 4 12 11" fill="none" stroke="#ff6b1a" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path d="M10 20h22v14H10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M32 24h6l-6 6" fill="none" stroke="#ff6b1a" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path d="M14 10h20v28H14z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19 20l3 3 7-7M19 30h10" fill="none" stroke="#ff6b1a" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <rect x="8" y="16" width="32" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 22h32" stroke="#ff6b1a" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path d="M12 32l16-16 8 2-2 8L18 42z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M24 20l4 4" stroke="#ff6b1a" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={common} aria-hidden>
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M24 16v9l6 4" fill="none" stroke="#ff6b1a" strokeWidth="1.8" />
    </svg>
  );
}

function IssueGlyph({ index }: { index: number }) {
  const common = "h-6 w-6 text-orange";
  if (index === 0) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M24 16v10" stroke="#f0c14b" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <circle cx="18" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="30" cy="24" r="8" fill="none" stroke="#f0c14b" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <rect x="14" y="12" width="6" height="24" rx="1" fill="currentColor" />
        <rect x="28" y="12" width="6" height="24" rx="1" fill="#f0c14b" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path d="M16 18a10 10 0 0 1 16 8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M32 18v8h-8" fill="none" stroke="#f0c14b" strokeWidth="1.8" />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path d="M24 10l14 24H10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M24 20v7" stroke="#f0c14b" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={common} aria-hidden>
      <path d="M14 14h20v20H14z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 24h8" stroke="#f0c14b" strokeWidth="1.8" />
    </svg>
  );
}

function StepGlyph({ index }: { index: number }) {
  const common = "h-10 w-10 text-gold";
  if (index === 0) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <circle cx="24" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 38c2-8 8-12 14-12s12 4 14 12" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <rect x="12" y="8" width="24" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M18 18h12M18 24h8" stroke="#ff6b1a" strokeWidth="1.7" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <rect x="8" y="12" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="28" y="12" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="27" width="12" height="9" rx="1.5" fill="none" stroke="#ff6b1a" strokeWidth="1.5" />
        <rect x="28" y="27" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <circle cx="22" cy="22" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M29 29l8 8" stroke="#ff6b1a" strokeWidth="1.7" />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <rect x="10" y="16" width="28" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="30" cy="24" r="4" fill="#ff6b1a" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={common} aria-hidden>
      <path d="M14 12h20v24H14z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M18 20h12M18 26h8" stroke="#ff6b1a" strokeWidth="1.7" />
    </svg>
  );
}

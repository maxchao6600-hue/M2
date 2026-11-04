import type { ReactNode } from "react";
import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { SOCIALS, type Locale } from "@/lib/site";
import type { Dictionary } from "@/content/types";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: Props) {
  const year = 2026;
  return (
    <footer className="mt-16 border-t border-[rgba(240,193,75,0.16)] bg-[#0c0a09]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/brand/m2-logo.webp" alt="M2 Casino" width={256} height={131} className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{dict.footer.blurb}</p>
          <p className="mt-4 text-sm font-semibold text-gold">{dict.footer.age}</p>
        </div>
        <FooterColumn title={dict.footer.explore}>
          <FooterLink locale={locale} href="/" label={dict.nav.home} />
          <FooterLink locale={locale} href="/popular-games" label={dict.nav.popularGames} />
          <FooterLink locale={locale} href="/promotion" label={dict.nav.promotion} />
          <FooterLink locale={locale} href="/blog" label={dict.nav.blog} />
          <FooterLink locale={locale} href="/download" label={dict.nav.download} />
          <FooterLink locale={locale} href="/about-us" label={dict.nav.about} />
        </FooterColumn>
        <FooterColumn title={dict.footer.guides}>
          <FooterLink locale={locale} href="/topup-withdrawal-guide" label={dict.nav.topup} />
          <FooterLink locale={locale} href="/payment-methods" label={dict.nav.payments} />
          <FooterLink locale={locale} href="/shareholder" label={dict.nav.shareholder} />
          <FooterLink locale={locale} href="/agent" label={dict.nav.agent} />
          <FooterLink locale={locale} href="/faq" label={dict.nav.faq} />
          <FooterLink locale={locale} href="/contact-us" label={dict.nav.contact} />
        </FooterColumn>
        <FooterColumn title={dict.footer.legal}>
          <FooterLink locale={locale} href="/responsible-gaming" label={dict.nav.responsible} />
          <FooterLink locale={locale} href="/privacy-policy" label={dict.nav.privacy} />
          <FooterLink locale={locale} href="/terms" label={dict.nav.terms} />
          <FooterLink locale={locale} href="/login" label={dict.nav.login} />
          <FooterLink locale={locale} href="/register" label={dict.nav.register} />
        </FooterColumn>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="surface rounded-3xl p-5">
          <h2 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">{dict.footer.payments}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {dict.payments.map((method) => (
              <li key={method.name} className="rounded-full border border-[rgba(240,193,75,0.25)] px-3 py-1 text-xs text-cream">
                {method.name}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-muted">{dict.footer.paymentNote}</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {dict.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  className="text-xs font-medium text-gold-soft hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="pb-8 text-xs leading-5 text-muted">{dict.footer.disclaimer}</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">{title}</h2>
      <ul className="mt-4 grid gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ locale, href, label }: { locale: Locale; href: string; label: string }) {
  return (
    <li>
      <LocaleLink locale={locale} href={href} className="text-sm text-cream/80 hover:text-gold-soft">
        {label}
      </LocaleLink>
    </li>
  );
}

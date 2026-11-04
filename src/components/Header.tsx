"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { localePath, type Locale } from "@/lib/site";
import type { Dictionary } from "@/content/types";

type Props = {
  locale: Locale;
  nav: Dictionary["nav"];
  ctaLogin: string;
  ctaRegister: string;
  languages: { locale: Locale; label: string }[];
};

const MAIN = [
  ["home", "/"],
  ["login", "/login"],
  ["register", "/register"],
  ["download", "/download"],
  ["promotion", "/promotion"],
  ["popularGames", "/popular-games"],
  ["blog", "/blog"],
] as const;

const TUTORIAL = [
  ["topup", "/topup-withdrawal-guide"],
  ["shareholder", "/shareholder"],
  ["agent", "/agent"],
  ["contact", "/contact-us"],
  ["faq", "/faq"],
] as const;

const MORE = [
  ["about", "/about-us"],
  ["payments", "/payment-methods"],
  ["responsible", "/responsible-gaming"],
  ["privacy", "/privacy-policy"],
  ["terms", "/terms"],
] as const;

export function Header(props: Props) {
  const pathname = usePathname();
  return <HeaderMenu key={pathname} {...props} pathname={pathname} />;
}

function HeaderMenu({
  locale,
  nav,
  ctaLogin,
  ctaRegister,
  languages,
  pathname,
}: Props & { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isCurrent(href: string) {
    const full = localePath(locale, href);
    if (href === "/") return pathname === full;
    return pathname === full || pathname.startsWith(`${full}/`);
  }

  function closeMenus() {
    setTutorialOpen(false);
    setMoreOpen(false);
    setLangOpen(false);
  }

  const tutorialCurrent = TUTORIAL.some(([, href]) => isCurrent(href));

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(240,193,75,0.18)] bg-[#100d0b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-6">
        <LocaleLink locale={locale} href="/" className="shrink-0" onClick={closeMenus}>
          <Image
            src="/images/brand/m2-logo.webp"
            alt="M2 Casino"
            width={256}
            height={131}
            priority
            className="h-11 w-auto"
          />
        </LocaleLink>

        <nav className="ml-2 hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {MAIN.map(([key, href]) => (
            <LocaleLink
              key={key}
              locale={locale}
              href={href}
              className="nav-link rounded-full px-2.5 py-2 text-[13px] font-medium"
              aria-current={isCurrent(href) ? "page" : undefined}
            >
              {nav[key]}
            </LocaleLink>
          ))}
          <div className="relative">
            <button
              type="button"
              className="nav-link inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] font-medium"
              aria-expanded={tutorialOpen}
              aria-current={tutorialCurrent ? "page" : undefined}
              onClick={() => {
                setTutorialOpen((value) => !value);
                setMoreOpen(false);
                setLangOpen(false);
              }}
            >
              {nav.tutorial}
              <Caret />
            </button>
            {tutorialOpen ? (
              <Dropdown>
                {TUTORIAL.map(([key, href]) => (
                  <LocaleLink
                    key={key}
                    locale={locale}
                    href={href}
                    className="block rounded-xl px-3 py-2 text-sm text-cream hover:bg-white/5"
                    aria-current={isCurrent(href) ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    {nav[key]}
                  </LocaleLink>
                ))}
              </Dropdown>
            ) : null}
          </div>
          <div className="relative">
            <button
              type="button"
              className="nav-link inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] font-medium"
              aria-expanded={moreOpen}
              onClick={() => {
                setMoreOpen((value) => !value);
                setTutorialOpen(false);
                setLangOpen(false);
              }}
            >
              {nav.more}
              <Caret />
            </button>
            {moreOpen ? (
              <Dropdown>
                {MORE.map(([key, href]) => (
                  <LocaleLink
                    key={key}
                    locale={locale}
                    href={href}
                    className="block rounded-xl px-3 py-2 text-sm text-cream hover:bg-white/5"
                    aria-current={isCurrent(href) ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    {nav[key]}
                  </LocaleLink>
                ))}
              </Dropdown>
            ) : null}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <button
              type="button"
              className="btn-ghost inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold"
              aria-expanded={langOpen}
              aria-label={nav.language}
              onClick={() => {
                setLangOpen((value) => !value);
                setTutorialOpen(false);
                setMoreOpen(false);
              }}
            >
              {nav.language}
              <Caret />
            </button>
            {langOpen ? (
              <Dropdown>
                {languages.map((language) => (
                  <LocaleLink
                    key={language.locale}
                    locale={language.locale}
                    href={stripLocale(pathname)}
                    className="block rounded-xl px-3 py-2 text-sm text-cream hover:bg-white/5"
                    hrefLang={language.locale === "zh" ? "zh-Hans" : language.locale}
                    aria-current={language.locale === locale ? "true" : undefined}
                    onClick={closeMenus}
                  >
                    {language.label}
                  </LocaleLink>
                ))}
              </Dropdown>
            ) : null}
          </div>
          <LocaleLink
            locale={locale}
            href="/login"
            className="btn-ghost rounded-full px-3 py-2 text-xs font-semibold"
          >
            {ctaLogin}
          </LocaleLink>
          <LocaleLink
            locale={locale}
            href="/register"
            className="btn-primary rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
          >
            {ctaRegister}
          </LocaleLink>
          <button
            type="button"
            className="btn-ghost inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? nav.closeMenu : nav.openMenu}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-gold" />
              <span className="block h-0.5 w-4 bg-gold" />
              <span className="block h-0.5 w-4 bg-gold" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[rgba(240,193,75,0.16)] bg-[#120e0c] px-4 py-4 lg:hidden">
          <div className="grid gap-1">
            {MAIN.map(([key, href]) => (
              <LocaleLink
                key={key}
                locale={locale}
                href={href}
                className="rounded-xl px-3 py-3 text-base text-cream hover:bg-white/5"
                aria-current={isCurrent(href) ? "page" : undefined}
              >
                {nav[key]}
              </LocaleLink>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              {nav.tutorial}
            </p>
            {TUTORIAL.map(([key, href]) => (
              <LocaleLink
                key={key}
                locale={locale}
                href={href}
                className="rounded-xl px-3 py-3 text-base text-cream hover:bg-white/5"
                aria-current={isCurrent(href) ? "page" : undefined}
              >
                {nav[key]}
              </LocaleLink>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">{nav.more}</p>
            {MORE.map(([key, href]) => (
              <LocaleLink
                key={key}
                locale={locale}
                href={href}
                className="rounded-xl px-3 py-3 text-base text-cream hover:bg-white/5"
                aria-current={isCurrent(href) ? "page" : undefined}
              >
                {nav[key]}
              </LocaleLink>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              {nav.language}
            </p>
            <div className="flex flex-wrap gap-2 px-3 py-2">
              {languages.map((language) => (
                <LocaleLink
                  key={language.locale}
                  locale={language.locale}
                  href={stripLocale(pathname)}
                  className="btn-ghost rounded-full px-3 py-2 text-sm"
                  hrefLang={language.locale === "zh" ? "zh-Hans" : language.locale}
                >
                  {language.label}
                </LocaleLink>
              ))}
            </div>
            <LocaleLink locale={locale} href="/login" className="btn-ghost mt-2 rounded-full px-4 py-3 text-center font-semibold">
              {ctaLogin}
            </LocaleLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Dropdown({ children }: { children: ReactNode }) {
  return (
    <div className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-[rgba(240,193,75,0.2)] bg-[#1a1410] p-2 shadow-2xl">
      {children}
    </div>
  );
}

function Caret() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="opacity-80">
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (parts[1] === "en" || parts[1] === "zh" || parts[1] === "ms") {
    const rest = parts.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getDictionary } from "@/content";
import { metadataBase } from "@/lib/seo";
import {
  HTML_LANG,
  LOCALES,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  isLocale,
  type Locale,
} from "@/lib/site";
import "../globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#090807",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    metadataBase,
    applicationName: SITE_NAME,
    icons: { icon: "/images/brand/m2-logo.webp", apple: "/images/brand/m2-logo.webp" },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return (
      <html lang="en">
        <body className="bg-ink text-cream">Page not found.</body>
      </html>
    );
  }

  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html lang={HTML_LANG[locale]} className={`${manrope.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/images/brand/m2-logo.webp`,
            sameAs: SOCIALS.map((social) => social.href),
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: `${SITE_URL}/${locale}`,
            inLanguage: ["en", "zh-Hans", "ms"],
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-orange focus:px-4 focus:py-2"
        >
          {dict.a11y.main}
        </a>
        <Suspense fallback={<div className="h-16 border-b border-white/10 bg-[#100d0b]" />}>
          <Header
            locale={locale}
            nav={dict.nav}
            ctaLogin={dict.cta.login}
            ctaRegister={dict.cta.register}
            languages={[
              { locale: "en", label: "English" },
              { locale: "zh", label: "中文" },
              { locale: "ms", label: "Bahasa Melayu" },
            ]}
          />
        </Suspense>
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}

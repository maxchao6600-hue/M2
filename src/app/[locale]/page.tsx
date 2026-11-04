import { HomeView } from "@/components/HomeView";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "", getDictionary(locale).home.seo);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeView locale={locale} dict={getDictionary(locale)} />;
}

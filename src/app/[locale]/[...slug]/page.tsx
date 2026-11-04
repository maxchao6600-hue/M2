import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROUTE_PAGES, getDictionary } from "@/content";
import { PageView, PostView } from "@/components/PageView";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, POST_SLUGS, isLocale } from "@/lib/site";

export function generateStaticParams() {
  const single = Object.keys(ROUTE_PAGES).map((route) => [route]);
  const posts = POST_SLUGS.map((slug) => ["blog", slug]);
  return LOCALES.flatMap((locale) =>
    [...single, ...posts].map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  if (slug.length === 2 && slug[0] === "blog") {
    const post = dict.posts.find((item) => item.slug === slug[1]);
    if (!post) return {};
    return buildMetadata(locale, `/blog/${post.slug}`, post.seo, { publishedTime: post.date });
  }
  if (slug.length === 1) {
    const key = ROUTE_PAGES[slug[0] as keyof typeof ROUTE_PAGES];
    if (!key) return {};
    return buildMetadata(locale, `/${slug[0]}`, dict.pages[key].seo);
  }
  return {};
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  if (slug.length === 2 && slug[0] === "blog") {
    const post = dict.posts.find((item) => item.slug === slug[1]);
    if (!post) notFound();
    return <PostView locale={locale} dict={dict} post={post} />;
  }

  if (slug.length === 1) {
    const key = ROUTE_PAGES[slug[0] as keyof typeof ROUTE_PAGES];
    if (!key) notFound();
    return <PageView locale={locale} dict={dict} pageKey={key} path={`/${slug[0]}`} />;
  }

  notFound();
}

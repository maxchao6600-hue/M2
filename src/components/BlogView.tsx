import Image from "next/image";
import { BlogBoard, type BlogCard } from "@/components/BlogBoard";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { BlogCategoryId, Dictionary, Post } from "@/content/types";
import { BLOG_SCENES, GAME_IMAGES, POST_IMAGES } from "@/lib/assets";
import { postCategoryId, postCoverAlt } from "@/lib/blog";
import { absoluteUrl, formatDate, SITE_URL, type Locale } from "@/lib/site";

const FEATURED_SLUG = "reading-the-lobby";
const PICK_SLUGS = ["getting-started", "cashier-checklist", "keeping-play-in-proportion"] as const;
const CATEGORY_SLUG: Record<BlogCategoryId, string> = {
  start: "getting-started",
  guides: "reading-the-lobby",
  payments: "cashier-checklist",
  responsible: "keeping-play-in-proportion",
};

export function BlogView({ locale, dict, path }: { locale: Locale; dict: Dictionary; path: string }) {
  const page = dict.pages.blog;
  const guide = page.guide;
  const featured = dict.posts.find((post) => post.slug === FEATURED_SLUG) ?? dict.posts[0];
  const picks = PICK_SLUGS.flatMap((slug) => {
    const post = dict.posts.find((item) => item.slug === slug);
    return post ? [post] : [];
  });
  const cards: BlogCard[] = [...dict.posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .flatMap((post) => {
      const category = postCategoryId(post.slug);
      const image = POST_IMAGES[post.slug];
      if (!category || !image) return [];
      return [
        {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          dateLabel: formatDate(locale, post.date),
          minutes: post.minutes,
          category,
          image,
          alt: postCoverAlt(guide, post.slug),
        },
      ];
    });
  const categoryArt = Object.fromEntries(
    guide.categories.map((item) => [
      item.id,
      { src: POST_IMAGES[CATEGORY_SLUG[item.id]], alt: postCoverAlt(guide, CATEGORY_SLUG[item.id]) },
    ]),
  ) as Record<BlogCategoryId, { src: string; alt: string }>;
  const slotName = dict.games.find((game) => game.slug === "fortune-tiger")?.name ?? "Fortune Tiger";
  const mahjongName = dict.games.find((game) => game.slug === "mahjong-ways-2")?.name ?? "Mahjong Ways 2";
  const sceneArt = {
    slots: { src: GAME_IMAGES["fortune-tiger"], alt: slotName, fit: "contain" as const },
    mahjong: { src: GAME_IMAGES["mahjong-ways-2"], alt: mahjongName, fit: "contain" as const },
    fishing: { src: BLOG_SCENES.fishing, alt: guide.alts.fishing, fit: "cover" as const },
    arcade: { src: BLOG_SCENES.arcade, alt: guide.alts.arcade, fit: "cover" as const },
    live: { src: BLOG_SCENES.live, alt: guide.alts.live, fit: "cover" as const },
  };
  const accountArt = {
    start: { src: POST_IMAGES["getting-started"], alt: guide.alts.start },
    cashier: { src: POST_IMAGES["cashier-checklist"], alt: guide.alts.cashier },
  };

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
          "@type": "Blog",
          name: page.h1,
          description: page.seo.description,
          inLanguage: locale === "zh" ? "zh-Hans" : locale,
          blogPost: dict.posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            description: post.excerpt,
            image: `${SITE_URL}${POST_IMAGES[post.slug]}`,
            url: absoluteUrl(locale, `/blog/${post.slug}`),
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

      <section className="relative mt-5 overflow-hidden rounded-[2rem] bg-[radial-gradient(640px_280px_at_88%_0%,rgba(216,58,18,0.48),transparent_60%),radial-gradient(420px_240px_at_0%_100%,rgba(240,193,75,0.18),transparent_55%),linear-gradient(165deg,#1a0d08,#090807)] px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{page.eyebrow}</p>
            <h1 className="font-display mt-2 break-words text-4xl leading-tight text-cream sm:text-5xl">{page.h1}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{page.lead}</p>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">{guide.featuredKicker}</p>
            <p className="font-display mt-2 text-2xl leading-snug text-cream">{featured.title}</p>
            <p className="mt-2 text-sm text-muted">
              {formatDate(locale, featured.date)} · {featured.minutes} {dict.blogUi.minutes}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LocaleLink locale={locale} href={`/blog/${featured.slug}`} className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.read}
              </LocaleLink>
              <a href="#categories" className="btn-ghost rounded-full px-5 py-3 text-sm font-semibold">
                {guide.browse}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30">
            <Image
              src={POST_IMAGES[featured.slug]}
              alt={postCoverAlt(guide, featured.slug)}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.featuredTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.featuredLead}</p>
        <LocaleLink
          locale={locale}
          href={`/blog/${featured.slug}`}
          className="surface mt-5 grid overflow-hidden rounded-[1.8rem] transition duration-300 hover:-translate-y-1 lg:grid-cols-[1.35fr_0.65fr]"
        >
          <span className="relative block aspect-[16/9] bg-[#120c09] lg:aspect-auto lg:min-h-[24rem]">
            <Image
              src={POST_IMAGES[featured.slug]}
              alt={postCoverAlt(guide, featured.slug)}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </span>
          <span className="flex flex-col justify-center p-6 sm:p-8">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
              {labelFor(guide, featured.slug)}
            </span>
            <span className="mt-3 text-sm text-muted">
              {formatDate(locale, featured.date)} · {featured.minutes} {dict.blogUi.minutes}
            </span>
            <h3 className="font-display mt-3 text-3xl leading-tight text-cream">{featured.title}</h3>
            <span className="mt-3 text-sm leading-7 text-muted">{featured.excerpt}</span>
            <span className="mt-6 text-sm font-semibold text-orange">{guide.read}</span>
          </span>
        </LocaleLink>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.picksTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{guide.picksLead}</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          {picks[0] ? (
            <LocaleLink
              locale={locale}
              href={`/blog/${picks[0].slug}`}
              className="surface group overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1 lg:col-span-3"
            >
              <span className="relative block aspect-[16/9] bg-[#120c09]">
                <Image
                  src={POST_IMAGES[picks[0].slug]}
                  alt={postCoverAlt(guide, picks[0].slug)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <PickCopy locale={locale} dict={dict} post={picks[0]} />
            </LocaleLink>
          ) : null}
          <div className="grid gap-4 lg:col-span-2">
            {picks.slice(1).map((post) => (
              <LocaleLink
                key={post.slug}
                locale={locale}
                href={`/blog/${post.slug}`}
                className="surface group grid overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1 sm:grid-cols-[11rem_1fr]"
              >
                <span className="relative block aspect-[16/9] bg-[#120c09] sm:aspect-auto sm:min-h-36">
                  <Image
                    src={POST_IMAGES[post.slug]}
                    alt={postCoverAlt(guide, post.slug)}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover"
                  />
                </span>
                <PickCopy locale={locale} dict={dict} post={post} compact />
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <BlogBoard
        locale={locale}
        cards={cards}
        guide={guide}
        minutesLabel={dict.blogUi.minutes}
        categoryArt={categoryArt}
      />

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.guidesTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{guide.guidesLead}</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {guide.gameTopics.map((topic) => {
            const art = sceneArt[topic.id];
            return (
              <li key={topic.id} className="min-w-0">
                <LocaleLink
                  locale={locale}
                  href="/blog/reading-the-lobby"
                  className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1"
                >
                  <span className={art.fit === "contain" ? "flex h-44 items-center justify-center bg-[#120c09]" : "relative block aspect-[4/3] bg-[#120c09]"}>
                    {art.fit === "contain" ? (
                      <Image src={art.src} alt={art.alt} width={256} height={320} className="h-40 w-auto object-contain" />
                    ) : (
                      <Image src={art.src} alt={art.alt} fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover" />
                    )}
                  </span>
                  <span className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold text-cream">{topic.title}</h3>
                    <span className="mt-2 text-sm leading-6 text-muted">{topic.text}</span>
                    <span className="mt-4 text-sm font-semibold text-orange">{topic.link}</span>
                  </span>
                </LocaleLink>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-cream">{guide.accountTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{guide.accountLead}</p>
        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-2">
          <div className="relative h-full min-h-64 overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30">
            <Image src={accountArt.start.src} alt={accountArt.start.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <ul className="grid gap-4">
            {guide.accountTopics.slice(0, 2).map((topic) => (
              <AccountCard key={topic.title} locale={locale} topic={topic} />
            ))}
          </ul>
        </div>
        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-2">
          <ul className="grid gap-4 lg:order-1">
            {guide.accountTopics.slice(2).map((topic) => (
              <AccountCard key={topic.title} locale={locale} topic={topic} />
            ))}
          </ul>
          <div className="relative h-full min-h-72 overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30 lg:order-2">
            <Image src={accountArt.cashier.src} alt={accountArt.cashier.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#f6efe4] px-4 py-8 text-[#24160f] sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem]">
            <Image src={POST_IMAGES["keeping-play-in-proportion"]} alt={guide.alts.care} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-3xl">{guide.careTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4636]">{guide.careLead}</p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {guide.carePoints.map((point, index) => (
                <li key={point.title} className="rounded-2xl border border-[#e0c27a] bg-white/70 p-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#9a3b12] uppercase">{index + 1}</p>
                  <h3 className="mt-2 text-base font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c4636]">{point.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <LocaleLink locale={locale} href="/blog/keeping-play-in-proportion" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
                {guide.careArticle}
              </LocaleLink>
              <LocaleLink locale={locale} href="/responsible-gaming" className="rounded-full border border-[#9a3b12] px-5 py-3 text-sm font-semibold text-[#9a3b12]">
                {guide.carePage}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden rounded-[2rem]">
        <Image src={BLOG_SCENES.live} alt="" fill sizes="100vw" className="object-cover" />
        <div className="relative bg-gradient-to-r from-black/80 via-black/70 to-black/45 px-5 py-10 sm:px-10 sm:py-14">
          <h2 className="font-display max-w-xl text-4xl text-cream">{guide.closeTitle}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-cream/80">{guide.closeLead}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {page.related.map((link) => (
              <li key={link.href}>
                <LocaleLink locale={locale} href={link.href} className="btn-primary inline-flex rounded-full px-5 py-3 text-sm font-semibold">
                  {link.label}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

function labelFor(guide: Dictionary["pages"]["blog"]["guide"], slug: string) {
  const category = postCategoryId(slug);
  return guide.categories.find((item) => item.id === category)?.label ?? "";
}

function PickCopy({ locale, dict, post, compact = false }: { locale: Locale; dict: Dictionary; post: Post; compact?: boolean }) {
  const guide = dict.pages.blog.guide;
  return (
    <span className={`block ${compact ? "p-4" : "p-5"}`}>
      <span className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{labelFor(guide, post.slug)}</span>
      <span className="mt-2 block text-xs text-muted">
        {formatDate(locale, post.date)} · {post.minutes} {dict.blogUi.minutes}
      </span>
      <h3 className={`mt-2 font-semibold text-cream ${compact ? "text-base" : "text-2xl"}`}>{post.title}</h3>
      {compact ? null : <span className="mt-2 block text-sm leading-6 text-muted">{post.excerpt}</span>}
      <span className="mt-3 block text-sm font-semibold text-orange">{guide.read}</span>
    </span>
  );
}

function AccountCard({
  locale,
  topic,
}: {
  locale: Locale;
  topic: Dictionary["pages"]["blog"]["guide"]["accountTopics"][number];
}) {
  return (
    <li className="surface rounded-[1.4rem] p-5">
      <h3 className="text-lg font-semibold text-cream">{topic.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{topic.text}</p>
      <LocaleLink locale={locale} href={topic.href} className="mt-3 inline-flex text-sm font-semibold text-orange hover:text-gold">
        {topic.link}
      </LocaleLink>
    </li>
  );
}

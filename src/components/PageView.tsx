import Image from "next/image";
import { ContactForm, LoginForm, RegisterForm } from "@/components/Forms";
import { FaqList } from "@/components/FaqList";
import { GamesBrowser } from "@/components/GamesBrowser";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { PageKey } from "@/content";
import type { Block, Dictionary, Post } from "@/content/types";
import { GAME_IMAGES, PAGE_IMAGES, PAYMENT_LOGOS, PHONE_SCREENS, POST_IMAGES, PROMO_IMAGES } from "@/lib/assets";
import { SOCIALS, absoluteUrl, formatDate, type Locale } from "@/lib/site";

export function PageView({
  locale,
  dict,
  pageKey,
  path,
}: {
  locale: Locale;
  dict: Dictionary;
  pageKey: PageKey;
  path: string;
}) {
  const page = dict.pages[pageKey];
  const crumbs = [
    { name: dict.crumbs.home, path: "" },
    { name: page.h1, path },
  ];
  const visual = pageKey in PAGE_IMAGES ? PAGE_IMAGES[pageKey as keyof typeof PAGE_IMAGES] : undefined;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJson(locale, crumbs)} />
      {pageKey === "faq" ? <JsonLd data={faqJson(dict)} /> : null}
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
      <header className={`mt-6 grid items-center gap-8 ${visual ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{page.eyebrow}</p>
          <h1 className="font-display mt-3 text-4xl text-cream sm:text-5xl">{page.h1}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{page.lead}</p>
        </div>
        {visual ? (
          <div className="relative h-64 overflow-hidden rounded-3xl bg-[#1a100c] sm:h-72">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
            />
          </div>
        ) : null}
      </header>

      <div className="mt-10 grid gap-8">
        {page.blocks.map((block) => (
          <BlockView key={block.heading} block={block} />
        ))}
      </div>

      <div className="mt-10">
        {pageKey === "login" ? <LoginForm forms={dict.forms} /> : null}
        {pageKey === "register" ? <RegisterForm forms={dict.forms} /> : null}
        {pageKey === "contact" ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm forms={dict.forms} />
            <SocialList dict={dict} />
          </div>
        ) : null}
        {pageKey === "popularGames" ? (
          <GamesBrowser games={dict.games} images={GAME_IMAGES} allLabel={dict.gamesUi.all} filterLabel={dict.gamesUi.filterLabel} />
        ) : null}
        {pageKey === "promotion" ? <PromoGrid dict={dict} /> : null}
        {pageKey === "payments" || pageKey === "topup" ? <PaymentGrid dict={dict} /> : null}
        {pageKey === "faq" ? <FaqList items={dict.faqs} /> : null}
        {pageKey === "blog" ? <PostList locale={locale} dict={dict} /> : null}
        {pageKey === "download" ? <PlatformNotes dict={dict} /> : null}
      </div>

      <aside className="mt-12">
        <h2 className="text-lg font-semibold">{dict.blogUi.related}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {page.related.map((link) => (
            <li key={link.href}>
              <LocaleLink locale={locale} href={link.href} className="btn-ghost rounded-full px-4 py-2 text-sm font-semibold">
                {link.label}
              </LocaleLink>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

export function PostView({ locale, dict, post }: { locale: Locale; dict: Dictionary; post: Post }) {
  const crumbs = [
    { name: dict.crumbs.home, path: "" },
    { name: dict.nav.blog, path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const others = dict.posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const image = POST_IMAGES[post.slug];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: locale === "zh" ? "zh-Hans" : locale,
          description: post.excerpt,
          mainEntityOfPage: absoluteUrl(locale, `/blog/${post.slug}`),
          author: { "@type": "Organization", name: "M2 Casino" },
          publisher: { "@type": "Organization", name: "M2 Casino" },
        }}
      />
      <JsonLd data={breadcrumbJson(locale, crumbs)} />
      <nav aria-label={dict.a11y.breadcrumb} className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <LocaleLink locale={locale} href="/" className="hover:text-gold">
              {dict.crumbs.home}
            </LocaleLink>
          </li>
          <li aria-hidden>/</li>
          <li>
            <LocaleLink locale={locale} href="/blog" className="hover:text-gold">
              {dict.nav.blog}
            </LocaleLink>
          </li>
          <li aria-hidden>/</li>
          <li className="text-cream">{post.title}</li>
        </ol>
      </nav>
      <header className="mt-6">
        <p className="text-sm text-gold">
          {dict.blogUi.published} {formatDate(locale, post.date)} · {post.minutes} {dict.blogUi.minutes}
        </p>
        <h1 className="font-display mt-3 text-4xl text-cream">{post.title}</h1>
        <p className="mt-4 text-base leading-7 text-muted">{post.excerpt}</p>
      </header>
      {image ? (
        <div className="mt-8 flex justify-center rounded-3xl bg-[#1a100c] p-4">
          <Image src={image} alt="" width={220} height={280} className="h-64 w-auto object-contain" />
        </div>
      ) : null}
      <div className="mt-8 grid gap-8">
        {post.blocks.map((block) => (
          <BlockView key={block.heading} block={block} />
        ))}
      </div>
      <aside className="mt-12">
        <h2 className="text-lg font-semibold">{dict.blogUi.related}</h2>
        <ul className="mt-4 grid gap-3">
          {others.map((item) => (
            <li key={item.slug}>
              <LocaleLink locale={locale} href={`/blog/${item.slug}`} className="text-gold hover:text-gold-soft">
                {item.title}
              </LocaleLink>
            </li>
          ))}
        </ul>
        <LocaleLink locale={locale} href="/blog" className="btn-ghost mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
          {dict.blogUi.allPosts}
        </LocaleLink>
      </aside>
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-cream">{block.heading}</h2>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-7 text-muted sm:text-base">
          {paragraph}
        </p>
      ))}
      {block.bullets ? (
        <ul className="mt-4 grid gap-2">
          {block.bullets.map((bullet) => (
            <li key={bullet} className="surface rounded-2xl px-4 py-3 text-sm text-cream">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function PromoGrid({ dict }: { dict: Dictionary }) {
  return (
    <ul className="grid gap-4">
      {dict.promos.map((promo) => (
        <li key={promo.slug} className="surface overflow-hidden rounded-3xl">
          <div className="relative h-52 bg-[#1a100c] sm:h-64">
            <Image
              src={PROMO_IMAGES[promo.slug]}
              alt={promo.title}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-contain"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold">{promo.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{promo.summary}</p>
            <ul className="mt-3 grid gap-1 text-sm">
              {promo.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PaymentGrid({ dict }: { dict: Dictionary }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {dict.payments.map((method, index) => (
        <li key={method.name} className="surface flex gap-4 rounded-3xl p-5">
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
            <h2 className="text-xl font-semibold">{method.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{method.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PostList({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <ul className="grid gap-4">
      {dict.posts.map((post) => {
        const image = POST_IMAGES[post.slug];
        return (
          <li key={post.slug} className={`surface overflow-hidden rounded-3xl ${image ? "grid md:grid-cols-[180px_1fr]" : ""}`}>
            {image ? (
              <div className="flex items-center justify-center bg-[#1a100c] p-3">
                <Image src={image} alt="" width={160} height={200} className="h-40 w-auto object-contain" />
              </div>
            ) : null}
            <div className="p-5">
              <p className="text-xs text-gold">
                {formatDate(locale, post.date)} · {post.minutes} {dict.blogUi.minutes}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                <LocaleLink locale={locale} href={`/blog/${post.slug}`} className="hover:text-gold">
                  {post.title}
                </LocaleLink>
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function PlatformNotes({ dict }: { dict: Dictionary }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {dict.home.platforms.map((platform, index) => (
        <li key={platform.name} className="surface rounded-3xl p-5">
          <div className="mx-auto mb-4 w-36 rounded-[1.6rem] border-4 border-[#2a2118] bg-black p-2">
            <div className="flex h-48 items-center justify-center overflow-hidden rounded-[1rem] bg-[#1a100c]">
              <Image src={PHONE_SCREENS[index]} alt="" width={220} height={280} className="h-44 w-auto object-contain" />
            </div>
          </div>
          <h2 className="text-lg font-semibold">{platform.name}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{platform.text}</p>
        </li>
      ))}
    </ul>
  );
}

function SocialList({ dict }: { dict: Dictionary }) {
  return (
    <aside className="surface h-fit rounded-3xl p-5">
      <h2 className="text-lg font-semibold">{dict.footer.follow}</h2>
      <ul className="mt-4 grid gap-2">
        {SOCIALS.map((social) => (
          <li key={social.href}>
            <a href={social.href} className="text-sm font-medium text-gold hover:text-gold-soft" target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function breadcrumbJson(locale: Locale, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(locale, crumb.path),
    })),
  };
}

function faqJson(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

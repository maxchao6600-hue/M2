import Image from "next/image";
import { ContactForm } from "@/components/Forms";
import { FaqList } from "@/components/FaqList";
import { DownloadView } from "@/components/DownloadView";
import { PromotionView } from "@/components/PromotionView";
import { LoginView } from "@/components/LoginView";
import { RegisterView } from "@/components/RegisterView";
import { BlogView } from "@/components/BlogView";
import { GamesView } from "@/components/GamesView";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import type { PageKey } from "@/content";
import type { Block, Dictionary, Post } from "@/content/types";
import { PAGE_IMAGES, PAYMENT_LOGOS, POST_IMAGES } from "@/lib/assets";
import { postCategoryId, postCoverAlt } from "@/lib/blog";
import { SOCIALS, SITE_URL, absoluteUrl, formatDate, type Locale } from "@/lib/site";

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
  if (pageKey === "login") return <LoginView locale={locale} dict={dict} path={path} />;
  if (pageKey === "register") return <RegisterView locale={locale} dict={dict} path={path} />;
  if (pageKey === "download") return <DownloadView locale={locale} dict={dict} path={path} />;
  if (pageKey === "promotion") return <PromotionView locale={locale} dict={dict} path={path} />;
  if (pageKey === "popularGames") return <GamesView locale={locale} dict={dict} path={path} />;
  if (pageKey === "blog") return <BlogView locale={locale} dict={dict} path={path} />;

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
        {pageKey === "contact" ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm forms={dict.forms} />
            <SocialList dict={dict} />
          </div>
        ) : null}
        {pageKey === "payments" || pageKey === "topup" ? <PaymentGrid dict={dict} /> : null}
        {pageKey === "faq" ? <FaqList items={dict.faqs} /> : null}
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
  const guide = dict.pages.blog.guide;
  const crumbs = [
    { name: dict.crumbs.home, path: "" },
    { name: dict.nav.blog, path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const others = dict.posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const image = POST_IMAGES[post.slug];
  const category = guide.categories.find((item) => item.id === postCategoryId(post.slug));

  return (
    <article className="mx-auto min-w-0 max-w-3xl overflow-x-clip px-4 py-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: locale === "zh" ? "zh-Hans" : locale,
          description: post.excerpt,
          image: image ? `${SITE_URL}${image}` : undefined,
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
        {category ? <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{category.label}</p> : null}
        <p className="mt-3 text-sm text-gold">
          {dict.blogUi.published} {formatDate(locale, post.date)} · {post.minutes} {dict.blogUi.minutes}
        </p>
        <h1 className="font-display mt-3 break-words text-3xl leading-tight text-cream sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-base leading-7 text-muted">{post.excerpt}</p>
      </header>
      {image ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.6rem] ring-1 ring-gold/30">
          <Image src={image} alt={postCoverAlt(guide, post.slug)} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>
      ) : null}
      <nav aria-label={guide.toc} className="surface mt-8 rounded-3xl p-5">
        <h2 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">{guide.toc}</h2>
        <ol className="mt-3 grid gap-2">
          {post.blocks.map((block, index) => (
            <li key={block.heading}>
              <a href={`#section-${index}`} className="text-sm text-cream hover:text-gold">
                {index + 1}. {block.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-8 grid gap-8">
        {post.blocks.map((block, index) => (
          <BlockView key={block.heading} block={block} id={`section-${index}`} />
        ))}
      </div>
      <aside className="mt-12">
        <h2 className="text-lg font-semibold">{dict.blogUi.related}</h2>
        <ul className="mt-4 grid gap-3">
          {others.map((item) => {
            const relatedImage = POST_IMAGES[item.slug];
            const relatedCategory = guide.categories.find((entry) => entry.id === postCategoryId(item.slug));
            return (
              <li key={item.slug}>
                <LocaleLink locale={locale} href={`/blog/${item.slug}`} className="surface grid grid-cols-[7.5rem_1fr] overflow-hidden rounded-2xl">
                  {relatedImage ? (
                    <span className="relative block min-h-24">
                      <Image src={relatedImage} alt={postCoverAlt(guide, item.slug)} fill sizes="120px" className="object-cover" />
                    </span>
                  ) : null}
                  <span className="p-3">
                    {relatedCategory ? <span className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">{relatedCategory.label}</span> : null}
                    <span className="mt-1 block font-semibold text-cream">{item.title}</span>
                  </span>
                </LocaleLink>
              </li>
            );
          })}
        </ul>
        <LocaleLink locale={locale} href="/blog" className="btn-ghost mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
          {dict.blogUi.allPosts}
        </LocaleLink>
      </aside>
    </article>
  );
}

function BlockView({ block, id }: { block: Block; id?: string }) {
  return (
    <section id={id} className={id ? "scroll-mt-28" : undefined}>
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const COPY = {
  en: {
    title: "This page is not on the table",
    text: "The link may be old. Head back to the lobby guide, or pick a page from the menu.",
    home: "Back to home",
  },
  zh: {
    title: "这张牌不在桌上",
    text: "链接可能已经过期。返回大厅指南，或从菜单选择一个页面。",
    home: "返回首页",
  },
  ms: {
    title: "Halaman ini tiada di atas meja",
    text: "Pautan itu mungkin sudah lama. Kembali ke panduan lobi, atau pilih halaman daripada menu.",
    home: "Kembali ke laman utama",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname() ?? "/en";
  const locale = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/ms") ? "ms" : "en";
  const copy = COPY[locale];

  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">404</p>
      <h1 className="font-display mt-3 text-4xl text-cream">{copy.title}</h1>
      <p className="mt-4 text-sm leading-7 text-muted">{copy.text}</p>
      <Link href={`/${locale}`} className="btn-primary mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold">
        {copy.home}
      </Link>
    </section>
  );
}

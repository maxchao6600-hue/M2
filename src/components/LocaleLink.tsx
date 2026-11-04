import Link from "next/link";
import type { ComponentProps } from "react";
import { localePath, type Locale } from "@/lib/site";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  locale: Locale;
  href: string;
};

export function LocaleLink({ locale, href, ...props }: Props) {
  return <Link href={localePath(locale, href)} {...props} />;
}

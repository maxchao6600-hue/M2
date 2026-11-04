import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "zh", "ms"];

function preferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (header.includes("zh")) return "zh";
  if (header.includes("ms")) return "ms";
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  const suffix = pathname === "/" ? "" : pathname;
  url.pathname = `/${preferredLocale(request)}${suffix}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

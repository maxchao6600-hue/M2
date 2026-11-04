import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  children: ReactNode;
};

export function BannerSplit({ src, alt, priority = false, children }: Props) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-[rgba(240,193,75,0.2)] bg-[#140c09] lg:grid-cols-[minmax(280px,0.82fr)_1.18fr]">
      <div className="order-2 flex flex-col justify-center px-5 py-8 sm:px-8 lg:order-1 lg:py-12">{children}</div>
      <div className="relative order-1 flex h-56 items-center justify-center bg-[#1a100c] sm:h-72 lg:order-2 lg:h-auto lg:min-h-[420px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

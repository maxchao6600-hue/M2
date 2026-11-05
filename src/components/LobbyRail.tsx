"use client";

import Image from "next/image";
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import type { Game } from "@/content/types";

const SPEED = 36;

export function LobbyRail({
  games,
  images,
  label,
  prevLabel,
  nextLabel,
}: {
  games: Game[];
  images: Record<string, string>;
  label: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const dragRef = useRef(false);
  const touchRef = useRef(false);
  const visibleRef = useRef(true);
  const pageVisibleRef = useRef(true);
  const reducedRef = useRef(false);
  const nudgeRef = useRef<{ from: number; distance: number; started: number } | null>(null);
  const resumeTimer = useRef(0);
  const pointerRef = useRef({ id: -1, x: 0, scroll: 0 });
  const copies = 3;

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reducedRef.current = motion.matches;
    };
    syncMotion();
    motion.addEventListener("change", syncMotion);
    const onVisibility = () => {
      pageVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 },
    );
    observer.observe(scroller);

    let frame = 0;
    let last = 0;
    let writing = false;
    const move = (node: HTMLElement, next: number) => {
      writing = true;
      node.scrollLeft = next;
      wrap(node);
      writing = false;
    };
    const tick = (now: number) => {
      const node = scrollerRef.current;
      if (node) {
        const nudge = nudgeRef.current;
        if (nudge) {
          const progress = Math.min(1, (now - nudge.started) / 320);
          const eased = 1 - (1 - progress) ** 3;
          move(node, nudge.from + nudge.distance * eased);
          if (progress >= 1) nudgeRef.current = null;
        } else if (!reducedRef.current && !hoverRef.current && !dragRef.current && !touchRef.current && visibleRef.current && pageVisibleRef.current) {
          const delta = last ? Math.min(now - last, 48) : 16;
          move(node, node.scrollLeft + (SPEED * delta) / 1000);
        }
      }
      last = now;
      frame = window.requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (writing || !touchRef.current) return;
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = window.setTimeout(() => {
        touchRef.current = false;
      }, 160);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer.current);
      scroller.removeEventListener("scroll", onScroll);
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, []);

  function step(direction: number) {
    const node = scrollerRef.current;
    const card = node?.querySelector("li");
    if (!node || !card) return;
    nudgeRef.current = { from: node.scrollLeft, distance: direction * (card.offsetWidth + 16), started: performance.now() };
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const node = scrollerRef.current;
    if (!node) return;
    dragRef.current = true;
    nudgeRef.current = null;
    pointerRef.current = { id: event.pointerId, x: event.clientX, scroll: node.scrollLeft };
    node.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current || event.pointerId !== pointerRef.current.id) return;
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollLeft = pointerRef.current.scroll - (event.clientX - pointerRef.current.x);
    wrap(node);
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current || event.pointerId !== pointerRef.current.id) return;
    dragRef.current = false;
    scrollerRef.current?.releasePointerCapture(event.pointerId);
  }

  function holdForTouch() {
    touchRef.current = true;
    nudgeRef.current = null;
    window.clearTimeout(resumeTimer.current);
  }

  function releaseTouch() {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      touchRef.current = false;
    }, 900);
  }

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}
    >
      <div
        ref={scrollerRef}
        className="game-rail flex w-full max-w-full cursor-grab overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing"
        style={{ touchAction: "pan-x pan-y" }}
        aria-label={label}
        aria-roledescription="carousel"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onTouchStart={holdForTouch}
        onTouchEnd={releaseTouch}
        onTouchCancel={releaseTouch}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <ul key={copy} data-set="" className="flex shrink-0 gap-4 pr-4" aria-hidden={copy > 0 ? true : undefined}>
            {games.map((game) => (
              <li key={`${copy}-${game.slug}`} className="surface w-40 shrink-0 overflow-hidden rounded-3xl sm:w-48">
                <div className="flex h-52 items-end justify-center bg-[#120e0c] sm:h-60">
                  <Image src={images[game.slug]} alt={copy === 0 ? game.name : ""} width={256} height={320} draggable={false} className="h-48 w-auto object-contain sm:h-56" />
                </div>
                <p className="px-3 py-3 text-sm font-semibold text-cream">{game.name}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 left-0 flex items-center justify-between px-1">
        <button type="button" className="btn-ghost pointer-events-auto h-10 w-10 rounded-full" aria-label={prevLabel} onClick={() => step(-1)}>
          ‹
        </button>
        <button type="button" className="btn-ghost pointer-events-auto h-10 w-10 rounded-full" aria-label={nextLabel} onClick={() => step(1)}>
          ›
        </button>
      </div>
    </div>
  );
}

function wrap(node: HTMLElement) {
  const set = node.querySelector<HTMLElement>("[data-set]");
  const loop = set?.offsetWidth ?? 0;
  if (loop <= 0) return;
  while (node.scrollLeft >= loop) node.scrollLeft -= loop;
  while (node.scrollLeft < 0) node.scrollLeft += loop;
}

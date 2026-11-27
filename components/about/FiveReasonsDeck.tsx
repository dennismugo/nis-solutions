"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
import {
  ShieldCheck,
  Layers,
  Compass,
  FileText,
  Headphones,
} from "lucide-react";

export interface ReasonItem {
  num: string;
  title: string;
  desc: string;
}

const CARD_THEMES = [
  {
    bg: "bg-white",
    border: "border-nis-navy/15",
    badgeBg: "bg-[#F85508] text-white",
    iconBox: "bg-[#EAF0FF] text-[#0111A2] border border-[#0111A2]/15",
    titleClass: "text-nis-navy",
    descClass: "text-gray-600",
    dividerClass: "border-nis-navy/10",
    Icon: ShieldCheck,
  },
  {
    bg: "bg-[#FFE4D4]",
    border: "border-[#E6602C]/25",
    badgeBg: "bg-[#0111A2] text-white",
    iconBox: "bg-white text-[#F85508] border border-[#E6602C]/20",
    titleClass: "text-nis-navy",
    descClass: "text-nis-navy/80",
    dividerClass: "border-[#E6602C]/20",
    Icon: Layers,
  },
  {
    bg: "bg-[#DCE7FF]",
    border: "border-[#0111A2]/20",
    badgeBg: "bg-[#00194F] text-white",
    iconBox: "bg-white text-[#0111A2] border border-[#0111A2]/20",
    titleClass: "text-nis-navy",
    descClass: "text-nis-navy/80",
    dividerClass: "border-[#0111A2]/15",
    Icon: Compass,
  },
  {
    bg: "bg-[#E6F4F1]",
    border: "border-[#00194F]/15",
    badgeBg: "bg-[#0111A2] text-white",
    iconBox: "bg-white text-[#E6602C] border border-[#00194F]/15",
    titleClass: "text-nis-navy",
    descClass: "text-nis-navy/80",
    dividerClass: "border-[#00194F]/12",
    Icon: FileText,
  },
  {
    bg: "bg-[#FFF8F2]",
    border: "border-[#E6602C]/20",
    badgeBg: "bg-[#F85508] text-white",
    iconBox: "bg-[#0111A2] text-white border border-[#0111A2]/20",
    titleClass: "text-nis-navy",
    descClass: "text-gray-700",
    dividerClass: "border-[#E6602C]/15",
    Icon: Headphones,
  },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeCubicIn = (t: number) => t * t * t;

export default function FiveReasonsDeck({
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: ReasonItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const bandShiftRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isStaticMode, setIsStaticMode] = useState(false);

  // Continuous smooth background marquee drift
  useEffect(() => {
    const marqueeEl = marqueeTrackRef.current;
    if (!marqueeEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let offset = 0;
    let lastTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const halfWidth = marqueeEl.scrollWidth / 2;
      if (halfWidth > 0) {
        offset -= 38 * dt;
        if (offset <= -halfWidth) offset += halfWidth;
        marqueeEl.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  // Clleancode-style stacked depth deck + cubic diagonal peel-off choreography
  useIsomorphicLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDisposed = false;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReduced || isNarrow) {
      setIsStaticMode(true);
      return;
    }

    setIsStaticMode(false);
    gsap.registerPlugin(ScrollTrigger);

    const tiles = tileRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!tiles.length) return;

    const totalCards = tiles.length;
    const stepSpacing = 1;
    const totalSpan = 1 + (totalCards - 1) * stepSpacing;

    // Clleancode exit motion parameters
    const EXIT_X_VW = 72;
    const EXIT_Y_VH = -19;
    const EXIT_ROTATE_DEG = -11;
    const BASE_SCALE = 1.04;
    const DEPTH_SCALE_STEP = 0.065;
    const HOLD_PORTION = 0.66;
    const FADE_WINDOW = 0.35;
    const ENTRY_START = 0.14;
    const ENTRY_LEN = 0.08;

    const renderAtProgress = (progress: number) => {
      if (isDisposed) return;

      // Stage 1: Glide marquee wrapper smoothly across viewport on initial arrival
      if (bandShiftRef.current) {
        const bandReveal = clamp01(progress / 0.16);
        const shiftVw = 65 * (1 - bandReveal);
        bandShiftRef.current.style.transform = `translate3d(${shiftVw.toFixed(
          2
        )}vw, 0, 0)`;
      }

      // Stage 2: Rise deck smoothly into stage (progress 0.14 -> 0.22) then peel 01..05 (0.22 -> 1.0)
      const deckRise = clamp01((progress - ENTRY_START) / ENTRY_LEN);
      const liftVh = 82 * (1 - deckRise);
      const peelProgress = clamp01(
        (progress - (ENTRY_START + ENTRY_LEN)) /
          (1 - (ENTRY_START + ENTRY_LEN))
      );

      tiles.forEach((tile, idx) => {
        const t = peelProgress * totalSpan - idx * stepSpacing;

        if (t > 1) {
          gsap.set(tile, {
            opacity: 0,
            pointerEvents: "none",
          });
          return;
        }

        const exitRatio = 1 - HOLD_PORTION;
        let queueDepth = 0;
        let exitEased = 0;

        if (t > HOLD_PORTION) {
          exitEased = easeCubicIn((t - HOLD_PORTION) / exitRatio);
        } else if (t < 0) {
          const wholeBehind = Math.floor(-t);
          const fracBehind = -t - wholeBehind;
          queueDepth =
            wholeBehind +
            (fracBehind >= exitRatio
              ? 1
              : 1 - easeCubicIn(1 - fracBehind / exitRatio));
        }

        const tiltBehind =
          queueDepth > 0
            ? (idx % 2 === 0 ? 1 : -1) * Math.min(queueDepth, 2.2) * 2.2
            : 0;
        const offsetYBehind = queueDepth * 1.1; // subtle vh stacked card edge peek

        const xVw = EXIT_X_VW * exitEased;
        const yVh = EXIT_Y_VH * exitEased + liftVh + offsetYBehind;
        const rotateDeg = EXIT_ROTATE_DEG * exitEased + tiltBehind;
        const scale = Math.max(0.78, BASE_SCALE - queueDepth * DEPTH_SCALE_STEP);
        const fadeOut =
          exitEased > 1 - FADE_WINDOW
            ? 1 - clamp01((exitEased - (1 - FADE_WINDOW)) / FADE_WINDOW)
            : 1;
        const entryFade = queueDepth > 3.6 ? Math.max(0, 1 - (queueDepth - 3.6)) : 1;
        const opacity = Math.min(fadeOut, entryFade) * Math.min(1, deckRise * 1.4);

        gsap.set(tile, {
          xPercent: -50,
          yPercent: -50,
          x: `${xVw.toFixed(2)}vw`,
          y: `${yVh.toFixed(2)}vh`,
          rotate: rotateDeg,
          scale,
          opacity,
          zIndex: Math.round(100 - 10 * queueDepth),
          pointerEvents: queueDepth < 0.25 && exitEased < 0.4 ? "auto" : "none",
        });
      });
    };

    const ctx = gsap.context(() => {
      renderAtProgress(0);

      ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => renderAtProgress(self.progress),
        onRefresh: (self) => renderAtProgress(self.progress),
      });
    }, trackRef);

    return () => {
      isDisposed = true;
      try {
        ctx.revert();
      } catch {
        // Ignore cleanup mismatch on route transition
      }
    };
  }, [items.length]);

  const marqueeText = `${heading} · `;

  return (
    <section
      id="how-we-work"
      aria-labelledby="five-reasons-heading"
      className="relative bg-gradient-to-br from-[#001166] via-[#000E52] to-[#000C42] text-white hairline-b"
    >
      <h2 id="five-reasons-heading" className="sr-only">
        {heading}
      </h2>

      {isStaticMode ? (
        /* Clean Mobile & Reduced-Motion Vertical Card Fallback */
        <div className="ns-container-large py-14 space-y-8">
          <div className="max-w-3xl">
            <p className="ns-heading-h2 text-white">{heading}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((reason, idx) => {
              const theme = CARD_THEMES[idx % CARD_THEMES.length];
              const Icon = theme.Icon;
              return (
                <div
                  key={reason.num}
                  className={`${theme.bg} border ${theme.border} p-6 sm:p-7 space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 ${theme.badgeBg}`}
                    >
                      {reason.num}
                    </span>
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${theme.iconBox}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3
                    className={`font-heading text-2xl leading-snug ${theme.titleClass}`}
                  >
                    {reason.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${theme.descClass}`}>
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Desktop / Tablet Tall Sticky Scroll Runway + 100vh Stage */
        <div ref={trackRef} className="relative h-[460vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8">
            {/* Background Layer: Oversized Drifting Fraunces Marquee */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 overflow-hidden"
            >
              <div ref={bandShiftRef} className="will-change-transform">
                <div
                  ref={marqueeTrackRef}
                  className="flex w-max items-center will-change-transform"
                >
                  {[0, 1].map((dup) => (
                    <div key={dup} className="flex items-center shrink-0">
                      {[0, 1, 2].map((repeat) => (
                        <span
                          key={repeat}
                          className="font-heading font-normal text-[4.5rem] sm:text-[6.75rem] lg:text-[8.75rem] tracking-[-0.03em] leading-none text-white/[0.48] px-6 whitespace-nowrap select-none"
                        >
                          {marqueeText}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Foreground Layer: Stacked Depth Card Deck */}
            <div className="relative z-10 flex-1 min-h-0">
              <ul className="relative w-full h-full m-0 p-0 list-none">
                {items.map((reason, idx) => {
                  const theme = CARD_THEMES[idx % CARD_THEMES.length];
                  const Icon = theme.Icon;

                  return (
                    <li
                      key={reason.num}
                      ref={(el) => {
                        tileRefs.current[idx] = el;
                      }}
                      className={`absolute top-1/2 left-1/2 w-[clamp(290px,24.5vw,380px)] aspect-[300/345] p-7 sm:p-8 flex flex-col justify-between border shadow-[0_28px_70px_-14px_rgba(0,4,28,0.55)] will-change-transform select-none ${theme.bg} ${theme.border}`}
                    >
                      {/* Top Stamp Row */}
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center gap-2 font-mono text-xs font-bold px-2.5 py-1 ${theme.badgeBg}`}
                        >
                          {reason.num}
                        </span>
                        <div
                          className={`w-12 h-12 flex items-center justify-center shrink-0 ${theme.iconBox}`}
                        >
                          <Icon className="w-6 h-6 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div
                        className={`space-y-3 mt-auto pt-4 border-t ${theme.dividerClass}`}
                      >
                        <h3
                          className={`font-heading font-normal text-2xl sm:text-[1.65rem] leading-[1.14] tracking-[-0.02em] ${theme.titleClass}`}
                        >
                          {reason.title}
                        </h3>
                        <p
                          className={`font-sans text-sm sm:text-[14.5px] leading-relaxed ${theme.descClass}`}
                        >
                          {reason.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

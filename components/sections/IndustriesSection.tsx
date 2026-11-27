"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import HalftoneLiquidImage from "@/components/ui/HalftoneLiquidImage";
import { ArrowRight } from "lucide-react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SECTOR_MEDIA = [
  {
    anchor: "banking",
    imageSrc: "/images/industries/banking-halftone.jpg",
    imageAlt:
      "Halftone editorial view of financial institution leaders working on banking systems",
  },
  {
    anchor: "insurance",
    imageSrc: "/images/industries/insurance-halftone.jpg",
    imageAlt:
      "Halftone editorial view of insurance advisors reviewing policy and claims data",
  },
  {
    anchor: "hospitality",
    imageSrc: "/images/industries/hospitality-halftone.jpg",
    imageAlt:
      "Halftone editorial view of hospitality reception built for guest continuity",
  },
  {
    anchor: "education",
    imageSrc: "/images/industries/education-halftone.jpg",
    imageAlt:
      "Halftone editorial view of Kenyan students learning in a modern classroom",
  },
  {
    anchor: "ngos",
    imageSrc: "/images/industries/ngos-halftone.jpg",
    imageAlt:
      "Halftone editorial view of NGO and development workers supporting field programmes",
  },
  {
    anchor: "corporate",
    imageSrc: "/images/industries/corporate-halftone.jpg",
    imageAlt:
      "Halftone editorial view of corporate executives collaborating across systems",
  },
];

export default function IndustriesSection() {
  const { h2, intro, sectors } = HOMEPAGE_COPY.industries;
  const total = sectors.length;
  const steps = total - 1;

  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const currentIdxRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const paintStep = useCallback(
    (idx: number, animate: boolean) => {
      const clamped = Math.max(0, Math.min(steps, idx));
      const track = trackRef.current;
      const targetCard = cardRefs.current[clamped];
      if (!track || !targetCard) return;

      const duration = animate ? 0.55 : 0;
      const ease = "power3.out";
      const targetX = -targetCard.offsetLeft;

      gsap.to(track, {
        x: targetX,
        duration,
        ease,
        overwrite: "auto",
      });

      cardRefs.current.forEach((_, n) => {
        const isActive = n === clamped;
        const mediaEl = mediaRefs.current[n];
        const bodyEl = bodyRefs.current[n];

        if (mediaEl) {
          gsap.to(mediaEl, {
            height: isActive ? "20.5rem" : "12.5rem",
            opacity: isActive ? 1 : 0.62,
            duration,
            ease,
            overwrite: "auto",
          });
        }

        if (bodyEl) {
          gsap.to(bodyEl, {
            opacity: isActive ? 1 : 0.3,
            duration,
            ease,
            overwrite: "auto",
          });
        }
      });

      currentIdxRef.current = clamped;
      setActiveIndex(clamped);
    },
    [steps]
  );

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) {
      // Mobile / reduced motion: highlight smoothly via state without ScrollTrigger pinning
      paintStep(activeIndex, false);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const HOLD_VH = 0.35;
    const STEP_VH = 0.55;
    const leadRatio = HOLD_VH / (HOLD_VH + STEP_VH * steps);

    const ctx = gsap.context(() => {
      paintStep(0, false);

      const snaps = [0];
      for (let sp = 0; sp <= steps; sp++) {
        const p = leadRatio + (1 - leadRatio) * (sp / steps);
        if (snaps[snaps.length - 1] !== p) snaps.push(p);
      }

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 72px",
        end: () => `+=${Math.round(window.innerHeight * (HOLD_VH + STEP_VH * steps))}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: snaps,
          duration: { min: 0.2, max: 0.45 },
          delay: 0.04,
          ease: "power2.out",
        },
        onUpdate: (self) => {
          const p = self.progress;
          const slideP = p <= leadRatio ? 0 : (p - leadRatio) / (1 - leadRatio);
          const nextIdx = Math.max(0, Math.min(steps, Math.round(slideP * steps)));
          if (nextIdx !== currentIdxRef.current) {
            paintStep(nextIdx, true);
          }
        },
        onRefresh: () => {
          paintStep(currentIdxRef.current, false);
        },
      });

      triggerRef.current = st;
    }, sectionRef);

    return () => {
      triggerRef.current = null;
      try {
        ctx.revert();
      } catch {
        // Guard against pin unmount race
      }
    };
  }, [paintStep, steps]);

  const goToIndex = (targetIdx: number) => {
    const clamped = Math.max(0, Math.min(steps, targetIdx));
    const st = triggerRef.current;

    if (st && st.isActive !== undefined) {
      const HOLD_VH = 0.35;
      const STEP_VH = 0.55;
      const leadRatio = HOLD_VH / (HOLD_VH + STEP_VH * steps);
      const targetProgress =
        clamped === 0 ? leadRatio : leadRatio + (1 - leadRatio) * (clamped / steps);
      const targetY = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: Math.round(targetY), behavior: "smooth" });
      paintStep(clamped, true);
      return;
    }

    paintStep(clamped, true);
  };

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="bg-[#001B9B] text-white py-14 lg:py-16 overflow-hidden"
      >
        <div className="ns-container-large space-y-10 lg:space-y-12">
          {/* Greenhouse-Style Pinned Split Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (4 cols): Eyebrow + Headline + Intro + Actions */}
            <div className="lg:col-span-4 space-y-6">
              <TextReveal className="space-y-6">
                <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
                  Industries
                </span>

                <h2 className="font-heading font-normal text-[1.85rem] sm:text-4xl lg:text-[3.25rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-white">
                  {h2}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {intro}
                </p>
              </TextReveal>

              <div data-animate="reveal-item" className="pt-2 flex flex-wrap items-center gap-5">
              <Button
                href="/industries"
                variant="outline"
                size="md"
                className="!border-white/35 !text-white hover:!bg-white hover:!text-[#001B9B] rounded-none"
              >
                Explore all industries
              </Button>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/90 underline underline-offset-4 hover:text-[#FFB08E] transition-colors"
              >
                Discuss your sector
              </Link>
            </div>
          </div>

          {/* Right Column (8 cols): Swipeable Mobile Deck -> Expanding-Height Pinned Desktop Track */}
          <div className="lg:col-span-8 overflow-x-auto snap-x snap-mandatory lg:overflow-hidden lg:h-[29.5rem] pb-2 lg:pb-0">
            <div ref={trackRef} className="flex items-start will-change-transform">
              {sectors.map((sector, idx) => {
                const media = SECTOR_MEDIA[idx] || SECTOR_MEDIA[0];
                const isActive = idx === activeIndex;
                const href = `/industries#${media.anchor}`;

                return (
                  <article
                    key={sector.name}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    aria-current={isActive ? "true" : "false"}
                    onClick={() => goToIndex(idx)}
                    className="snap-start w-[82vw] sm:w-[56%] lg:w-[52%] shrink-0 pr-5 sm:pr-8 cursor-pointer group"
                  >
                    {/* Media Container (Expands to 20.5rem active vs 12.5rem resting on desktop) */}
                    <div
                      ref={(el) => {
                        mediaRefs.current[idx] = el;
                      }}
                      className="h-[13.5rem] lg:h-[12.5rem] w-full overflow-hidden rounded-none bg-[#00157A] max-lg:!opacity-100 max-lg:!h-[13.5rem]"
                    >
                      <HalftoneLiquidImage
                        src={media.imageSrc}
                        alt={media.imageAlt}
                        objectPositionClass="object-center"
                      />
                    </div>

                    {/* Text Body Container (Full opacity on mobile, progressive focus on desktop) */}
                    <div
                      ref={(el) => {
                        bodyRefs.current[idx] = el;
                      }}
                      className="pt-4 space-y-2 max-lg:!opacity-100"
                    >
                      <div className="font-sans text-xs font-semibold text-[#FFB08E]">
                        {sector.name}
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href={href}
                          onClick={(e) => e.stopPropagation()}
                          className="font-heading font-normal text-lg sm:text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-white hover:text-[#FFB08E] transition-colors flex-1"
                        >
                          {sector.h1}
                        </Link>

                        <Link
                          href={href}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Explore ${sector.name}`}
                          className="w-9 h-9 shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#001B9B] group-hover:border-white transition-colors mt-0.5"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

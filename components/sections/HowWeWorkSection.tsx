"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import TextReveal from "@/components/ui/TextReveal";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CARD_REST_POSES = [
  { y: 0, rotate: -3.08, zIndex: 1 },
  { y: 30, rotate: 1.85, zIndex: 2 },
  { y: 8, rotate: -2.4, zIndex: 3 },
  { y: 36, rotate: 3.1, zIndex: 4 },
  { y: 14, rotate: -1.75, zIndex: 5 },
];

const PILL_LABELS = [
  "01 · DISCOVER",
  "02 · DEFINE",
  "03 · BUILD",
  "04 · DEPLOY",
  "05 · SUPPORT",
];

export default function HowWeWorkSection() {
  const { h2, steps } = HOMEPAGE_COPY.howWeWork;
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stageEl = stageRef.current;
    if (!stageEl) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, motion } = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          motion: boolean;
        };

        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!cards.length) return;

        if (!motion) {
          cards.forEach((card, idx) => {
            const pose = CARD_REST_POSES[idx % CARD_REST_POSES.length];
            gsap.set(card, {
              opacity: 1,
              y: desktop ? pose.y : 0,
              rotate: desktop ? pose.rotate : 0,
            });
          });
          return;
        }

        if (desktop) {
          // Match dontboardme.com desktop scroll choreography:
          // section pins cleanly while cards rise sequentially from below
          // into their staggered, playfully tilted deck positions.
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: stageEl,
              start: "top 80px",
              end: "+=175%",
              pin: true,
              scrub: 0.75,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          cards.forEach((card, idx) => {
            const pose = CARD_REST_POSES[idx % CARD_REST_POSES.length];
            gsap.set(card, {
              y: 380,
              rotate: 0,
              scale: 0.95,
              opacity: 0,
            });

            tl.to(
              card,
              {
                y: pose.y,
                rotate: pose.rotate,
                scale: 1,
                opacity: 1,
                duration: 0.9,
                ease: "power2.out",
              },
              idx * 0.52
            );
          });

          // Brief settle buffer before releasing pin to next section
          tl.to({}, { duration: 0.25 });
        } else {
          cards.forEach((card) => {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
              y: 52,
              opacity: 0,
              duration: 0.65,
              ease: "power2.out",
            });
          });
        }
      }
    );

    return () => {
      try {
        mm.revert();
      } catch {
        // Ignore GSAP pin revert race on fast unmount
      }
    };
  }, []);

  return (
    <section
      id="how-we-work"
      className="bg-white overflow-x-clip py-10 sm:py-14 lg:py-8"
    >
      <div className="relative">
        <div ref={stageRef} className="w-full py-8 lg:py-12 overflow-hidden">
          <div className="ns-container-large space-y-10 lg:space-y-12">
            {/* Left-Aligned Header */}
            <TextReveal className="max-w-[52.5rem] space-y-4">
              <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
                How We Work
              </span>
              <h2 className="ns-heading-h2 text-nis-navy">{h2}</h2>
            </TextReveal>

          {/* Enlarged Lookfor.ai Wavy-Cap Cards Strictly Within Container Width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-center gap-6 lg:gap-0 lg:-space-x-[1.2%] pt-2 pb-12 lg:pb-14">
            {steps.map((step, idx) => {
              const pillLabel = PILL_LABELS[idx] || `0${step.num}`;
              const pose = CARD_REST_POSES[idx % CARD_REST_POSES.length];

              return (
                <div
                  key={step.num}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  style={{ zIndex: pose.zIndex }}
                  className="relative lg:w-[20.8%] shrink-0 will-change-transform hover:!z-40"
                >
                  <article className="h-full min-h-[270px] sm:min-h-[285px] lg:min-h-[295px] xl:min-h-[315px] flex flex-col rounded-none overflow-hidden bg-white border border-[#001B9B]/30 shadow-[0_18px_42px_-14px_rgba(0,27,155,0.2)] transition-transform duration-300 ease-out hover:-translate-y-3">
                    {/* Top Cobalt Liquid Header with Glossy Wavy Seam & 3D Floating Pill */}
                    <div className="relative bg-[#001B9B] pt-7 pb-10 px-6 xl:px-7">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#001B9B] font-sans text-xs font-bold uppercase tracking-wider shadow-[0_6px_14px_rgba(0,0,0,0.24),inset_0_-2px_4px_rgba(0,27,155,0.14)]">
                        {pillLabel}
                      </span>

                      {/* Glossy 3D Sinusoidal Wave Edge Transition into White Card Body */}
                      <div className="pointer-events-none absolute left-0 right-0 bottom-0 translate-y-[1px]">
                        <svg
                          viewBox="0 0 320 34"
                          preserveAspectRatio="none"
                          className="w-full h-7 block"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 14 Q 20 3, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 L 320 34 L 0 34 Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M0 14 Q 20 3, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14"
                            fill="none"
                            stroke="rgba(165, 194, 255, 0.55)"
                            strokeWidth="3.5"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Lower Pure White Content Body */}
                    <div className="px-6 xl:px-7 pt-4 pb-8 flex-1 bg-white space-y-3">
                      <h3 className="font-sans font-bold text-nis-navy text-xl xl:text-[22px] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm xl:text-[15.5px] text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

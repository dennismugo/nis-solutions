"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import StepIsometricIllustration from "@/components/solutions/StepIsometricIllustration";
import type { EngagementStep } from "@/data/aboutCopy";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HorizontalDeliveryTrack({
  eyebrow = "Delivery Process",
  heading = "How we deliver",
  subtitle = "Every step documented in plain language, from initial discovery through configuration, testing and ongoing support.",
  steps,
  asH1 = false,
}: {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  steps: EngagementStep[];
  asH1?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      if (getScrollAmount() <= 0) return;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 0.85,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => {
      try {
        mm.revert();
      } catch {
        // Guard against GSAP pin unwrap timing on unmount
      }
    };
  }, [steps.length]);

  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="bg-white py-8 lg:py-10 border-b border-nis-navy/10 overflow-hidden"
      >
      <div className="ns-container-large space-y-6">
        {/* Top Row: Title */}
        <TextReveal className="max-w-3xl space-y-2">
          <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            {eyebrow}
          </span>
          {asH1 ? (
            <h1 className="font-heading font-normal text-[1.85rem] sm:text-4xl lg:text-[2.6rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
              {heading}
            </h1>
          ) : (
            <h2 className="font-heading font-normal text-[1.75rem] sm:text-4xl lg:text-[2.6rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
              {heading}
            </h2>
          )}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </TextReveal>

        {/* Desktop Scroll-Linked Horizontal Track (Centered Pin Viewport with Full Card Visibility) */}
        <div ref={viewportRef} className="hidden md:block overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-start gap-7 w-max will-change-transform py-1"
          >
            {steps.map((st, idx) => (
              <article
                key={st.step}
                className="shrink-0 w-[330px] lg:w-[355px] flex flex-col"
              >
                <StepIsometricIllustration
                  title={st.title}
                  desc={st.desc}
                  step={st.step}
                  index={idx}
                />
                <div className="pt-3.5 space-y-1.5">
                  <h3 className="font-heading text-xl lg:text-[1.45rem] text-nis-navy leading-[1.16] tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Cards (< md) */}
        <div className="md:hidden space-y-8">
          {steps.map((st, idx) => (
            <article key={st.step} className="flex flex-col">
              <StepIsometricIllustration
                title={st.title}
                desc={st.desc}
                step={st.step}
                index={idx}
              />
              <div className="pt-4 space-y-1.5">
                <h3 className="font-heading text-xl text-nis-navy leading-snug">
                  {st.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}

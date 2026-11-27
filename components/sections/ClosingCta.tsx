"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import HalftoneLiquidImage from "@/components/ui/HalftoneLiquidImage";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ClosingCta() {
  const { finalCta } = HOMEPAGE_COPY;
  const ctaRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ctaRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".cta-row-stagger", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 86%",
          once: true,
        },
      });
    }, ctaRef);

    return () => {
      try {
        ctx.revert();
      } catch {
        // Ignore cleanup errors on rapid unmount
      }
    };
  }, []);

  return (
    <>
      <section
        ref={ctaRef}
        className="w-full overflow-hidden bg-[#F5F7FA]"
      >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[560px]">
        {/* Left 50%: Full-Bleed Editorial Photograph (Halftone + Liquid Hover) */}
        <div
          data-animate="portrait-reveal"
          className="relative min-h-[340px] lg:min-h-full overflow-hidden bg-nis-navy"
        >
          <HalftoneLiquidImage
            src="/images/cta-woman-laptop-halftone.jpg"
            alt="Technology leader working on a laptop in Nairobi, Kenya"
            objectPositionClass="object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(245, 247, 250, 0.14) 0%, rgba(0, 25, 79, 0.12) 100%)",
            }}
          />
        </div>

        {/* Right 50%: Single Clean Editorial Action Block */}
        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#F5F7FA] via-[#FFFFFF] to-[#EEF2FF]">
          <div className="cta-row-stagger relative z-10 px-8 sm:px-12 lg:px-14 xl:px-20 py-14 lg:py-20 flex flex-col justify-center items-start space-y-5 max-w-2xl">
            <h2 className="font-heading font-normal text-[1.8rem] sm:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy text-balance">
              {finalCta.h2}
            </h2>

            <p className="ns-text-medium text-gray-600 leading-relaxed max-w-lg">
              {finalCta.body}
            </p>

            <div className="pt-1">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-none bg-nis-orange hover:bg-nis-blue text-white font-sans font-semibold text-sm px-7 py-3.5 transition-colors shadow-subtle"
              >
                <span className="relative inline-flex overflow-hidden leading-[1.25]">
                  <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                    {finalCta.primaryBtn}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0"
                  >
                    {finalCta.primaryBtn}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
      <BasetenPatternDivider />
    </>
  );
}

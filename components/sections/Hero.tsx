"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import HeroCommandBackground from "@/components/sections/HeroCommandBackground";

export default function Hero() {
  const { h1, subheading, primaryCta, secondaryCta } = HOMEPAGE_COPY.hero;

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { clearProps: "transform,opacity,clipPath" } });

      tl.from(".hero-corner-tick", {
        scale: 0,
        rotation: -90,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "back.out(2)",
      })
        .from(
          ".hero-word",
          {
            yPercent: 120,
            rotation: 2.5,
            opacity: 0,
            duration: 0.82,
            stagger: 0.065,
            ease: "power4.out",
          },
          0.08
        )
        .from(
          ".hero-cta-item",
          {
            y: 20,
            scale: 0.95,
            opacity: 0,
            duration: 0.62,
            stagger: 0.11,
            ease: "back.out(1.45)",
          },
          0.42
        )
        .from(
          ".hero-subcopy-reveal",
          {
            y: 18,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            duration: 0.72,
            ease: "power3.out",
          },
          0.56
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[#001B9B] text-white h-[calc(100svh-64px)] min-h-[calc(100svh-64px)] md:h-auto md:min-h-[100vh] flex items-center py-0 md:py-6 relative"
    >
      {/* Framed Inside Container Width Like Command Code (Solid Logo Blue #001B9B) */}
      <div className="ns-container-large w-full h-full md:h-auto">
        <div className="relative w-full h-full min-h-0 sm:min-h-[520px] lg:h-[calc(100vh-4.5rem)] lg:min-h-[560px] flex flex-col justify-center border border-white/20 bg-[#001B9B]">
          {/* Four Crisp Architectural Corner Markers */}
          <span
            aria-hidden="true"
            className="hero-corner-tick pointer-events-none absolute top-0 left-0 z-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#001B9B] border border-white/40 rounded-[3px] -translate-x-1/2 -translate-y-1/2"
          />
          <span
            aria-hidden="true"
            className="hero-corner-tick pointer-events-none absolute top-0 right-0 z-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#001B9B] border border-white/40 rounded-[3px] translate-x-1/2 -translate-y-1/2"
          />
          <span
            aria-hidden="true"
            className="hero-corner-tick pointer-events-none absolute bottom-0 left-0 z-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#001B9B] border border-white/40 rounded-[3px] -translate-x-1/2 translate-y-1/2"
          />
          <span
            aria-hidden="true"
            className="hero-corner-tick pointer-events-none absolute bottom-0 right-0 z-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#001B9B] border border-white/40 rounded-[3px] translate-x-1/2 translate-y-1/2"
          />

          {/* Solid Logo-Blue Canvas + Dashed Grid + Hover-Animated Soft Orange Staircase */}
          <HeroCommandBackground />

          {/* Centered mobile hero content, returning to the desktop left alignment */}
          <div className="relative z-10 pointer-events-none w-full h-full flex flex-col justify-center lg:w-[62%] px-5 sm:px-9 lg:px-12 py-7 sm:py-12 lg:py-0">
            <div className="w-full max-w-[720px] mx-auto space-y-5 sm:space-y-5 pointer-events-auto text-center lg:mx-0 lg:text-left">
              <h1
                aria-label={h1}
                className="font-heading font-normal text-[1.95rem] sm:text-[2.7rem] lg:text-[3.25rem] xl:text-[3.6rem] leading-[1.16] tracking-[-0.025em] text-white text-center lg:text-left text-balance"
              >
                {["Technology", "That", "Moves"].map((word) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden align-bottom pb-[0.06em] mr-[0.26em] last:mr-0"
                  >
                    <span className="hero-word inline-block will-change-transform">
                      {word}
                    </span>
                  </span>
                ))}
                <br className="hidden sm:inline" />{" "}
                {["Enterprises", "Forward."].map((word) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden align-bottom pb-[0.06em] mr-[0.26em] last:mr-0 italic text-white"
                  >
                    <span className="hero-word inline-block will-change-transform">
                      {word}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Action Buttons Fit Cleanly on Both Mobile and Desktop */}
              <div className="pt-0.5 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start sm:items-center gap-3">
                <div className="hero-cta-item w-full max-w-[21rem] sm:max-w-none sm:w-auto">
                  <Button
                    href="/contact"
                    variant="orange"
                    size="lg"
                    className="rounded-none w-full sm:w-auto justify-center"
                    withArrow
                  >
                    {primaryCta}
                  </Button>
                </div>
                <div className="hero-cta-item w-full max-w-[21rem] sm:max-w-none sm:w-auto">
                  <Button
                    href="/solutions"
                    variant="outline"
                    size="lg"
                    className="rounded-none w-full sm:w-auto justify-center !border-white/35 !text-white bg-white/[0.06] hover:!bg-white hover:!text-[#001B9B]"
                  >
                    {secondaryCta}
                  </Button>
                </div>
              </div>

              <p className="hero-subcopy-reveal text-sm sm:text-base text-white/85 max-w-lg mx-auto lg:mx-0 leading-[1.58] text-center lg:text-left text-balance">
                {subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

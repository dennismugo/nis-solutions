"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";

interface InnerPageHeroProps {
  eyebrow?: string;
  h1: string;
  subheading?: string;
  backHref?: string;
  backLabel?: string;
  badges?: string[];
  children?: React.ReactNode;
}

export default function InnerPageHero({
  h1,
  subheading,
  backHref,
  backLabel,
  badges,
  children,
}: InnerPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".inner-hero-grid", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.025,
        ease: "power1.out",
      });

      gsap.from(".inner-hero-title", {
        y: 24,
        opacity: 0,
        clipPath: "inset(0 0 28% 0)",
        duration: 0.72,
        ease: "power3.out",
        clearProps: "transform,opacity,clipPath",
      });

      gsap.from(".inner-hero-stagger", {
        y: 16,
        opacity: 0,
        duration: 0.62,
        delay: 0.1,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[#001B9B] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Subtle Dashed Architectural Grid Backdrop (Matched to Homepage Hero, no gradient boxes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:grid grid-cols-10 max-w-[1440px] mx-auto"
      >
        {Array.from({ length: 10 }).map((_, col) => (
          <div
            key={col}
            className="inner-hero-grid border-r border-dashed border-white/[0.08] last:border-r-0 h-full"
          />
        ))}
      </div>

      <div className="ns-container-large w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-5">
          {backHref && backLabel && (
            <div className="inner-hero-stagger">
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/75 hover:text-[#FFE4D4] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{backLabel}</span>
              </Link>
            </div>
          )}

          {badges && badges.length > 0 && (
            <div className="inner-hero-stagger flex flex-wrap items-center justify-center gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-block rounded-none border border-white/25 bg-white/10 text-white font-mono text-[11px] px-2.5 py-1"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <h1 className="inner-hero-title font-heading font-normal text-[2.1rem] sm:text-[2.75rem] lg:text-[3.35rem] leading-[1.06] tracking-[-0.03em] text-white max-w-4xl">
            {h1}
          </h1>

          {subheading && (
            <p className="inner-hero-stagger text-[15px] sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}

          {children && (
            <div className="inner-hero-stagger pt-2 w-full flex flex-col items-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

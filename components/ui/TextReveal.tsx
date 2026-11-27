"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * GSAP ScrollTrigger masked text reveal wrapper.
 * Safely keeps content visible without JavaScript or under reduced motion.
 */
export default function TextReveal({
  children,
  className = "",
  delay = 0,
  y = 26,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = wrapperRef.current;
    if (prefersReducedMotion || !el) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        clipPath: "inset(0 0 24% 0)",
        duration: 0.72,
        delay,
        ease: "power3.out",
        clearProps: "transform,opacity,clipPath",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    }, wrapperRef);

    return () => {
      try {
        ctx.revert();
      } catch {
        // Ignore cleanup errors during rapid route navigation
      }
    };
  }, [delay, y]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}

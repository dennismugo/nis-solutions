"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function GsapScrollOrchestrator({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Persistent site-wide Lenis smooth scroll synced with GSAP ticker + progress bar
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const updateProgress = ({ progress }: { progress: number }) => {
      ScrollTrigger.update();
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(
          1,
          Math.max(0, progress)
        )})`;
      }
    };

    lenis.on("scroll", updateProgress);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateProgress);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Re-bind targeted scroll animations synchronously before DOM unmount on route changes
  useIsomorphicLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const container = containerRef.current;
    if (prefersReducedMotion || !container) return;

    gsap.registerPlugin(ScrollTrigger);

    // Reset progress bar briefly on client-side navigation before ScrollTrigger refresh
    if (progressRef.current && window.scrollY === 0) {
      progressRef.current.style.transform = "scaleX(0)";
    }

    const ctx = gsap.context(() => {
      // 1. Staggered card & list grids
      const grids = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll('[data-animate="stagger-grid"]')
      );
      grids.forEach((grid) => {
        const items = Array.from(grid.children) as HTMLElement[];
        if (!items.length) return;

        gsap.from(items, {
          y: 40,
          scale: 0.97,
          opacity: 0,
          duration: 0.72,
          stagger: 0.11,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        });
      });

      // 2. Single editorial blocks / CTA bars
      const singles = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll('[data-animate="reveal-item"]')
      );
      singles.forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.68,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      // 3. Horizontal hairlines & dotted dividers draw smoothly from left
      const hairlines = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll('[data-animate="hairline"]')
      );
      hairlines.forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            once: true,
          },
        });
      });

      // 4. Halftone editorial portraits: clean clip-wipe + subtle settle zoom
      const portraits = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll('[data-animate="portrait-reveal"]')
      );
      portraits.forEach((frame) => {
        gsap.from(frame, {
          opacity: 0,
          scale: 1.04,
          clipPath: "inset(0 0 14% 0)",
          duration: 0.88,
          ease: "power3.out",
          clearProps: "transform,clipPath,opacity",
          scrollTrigger: {
            trigger: frame,
            start: "top 86%",
            once: true,
          },
        });
      });
    }, containerRef);

    const rafId = window.requestAnimationFrame(() => {
      try {
        ScrollTrigger.refresh();
      } catch {
        // Ignore refresh race on instant route unmount
      }
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      try {
        ctx.revert();
      } catch {
        // Guard against already-detached nodes during rapid navigation
      }
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="relative flex-1 w-full flex flex-col">
      {/* Subtle Top Brand-Orange Scroll Reading Progress Hairline */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#F85508] origin-left scale-x-0 z-[70] pointer-events-none will-change-transform"
      />
      {children}
    </div>
  );
}

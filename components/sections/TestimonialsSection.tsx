"use client";

import React, { useEffect, useRef, useState } from "react";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import TextReveal from "@/components/ui/TextReveal";

export default function TestimonialsSection() {
  const { subtitle, items } = HOMEPAGE_COPY.testimonials;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the 4 cards once for seamless continuous auto-scrolling
  const loopItems = [...items, ...items];

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speedPxPerSec = 42;

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 64);
      lastTime = now;

      if (!isPaused && container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          container.scrollLeft += (speedPxPerSec * dt) / 1000;
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section
      className="ns-section-default bg-white overflow-hidden"
      aria-label="Client Testimonials"
    >
      <div className="ns-container-large space-y-12">
        {/* Balanced 2-Line Centered Header */}
        <TextReveal className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            Testimonials
          </span>
          <h2 className="font-heading font-normal text-[1.75rem] sm:text-4xl lg:text-[2.65rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
            Trusted by organisations that
            <br className="hidden sm:inline" /> rely on quiet, dependable systems.
          </h2>
          <p className="ns-text-medium text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </TextReveal>

        {/* Auto-Scrolling 4-Card Carousel (Pause on Hover, Soft Light Neutral Surface & Edge Fade) */}
        <div
          data-animate="reveal-item"
          className="relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          {/* Scrolling Track: Exactly 4 Cards Visible Across Desktop Container */}
          <div
            ref={trackRef}
            className="w-full overflow-x-auto no-scrollbar flex gap-5 scroll-auto cursor-grab active:cursor-grabbing"
          >
            {loopItems.map((item, idx) => {
              const avatarTone =
                idx % 2 === 0
                  ? "bg-[#E6602C] text-white border-[#E6602C]"
                  : "bg-[#001B9B] text-white border-[#001B9B]";

              return (
                <article
                  key={`${item.name}-${idx}`}
                  className="shrink-0 w-[84vw] sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-3.75rem)/4)] bg-[#F7F7F8] border border-black/[0.04] p-6 sm:p-7 space-y-5"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 shrink-0 rounded-full border flex items-center justify-center font-mono text-xs font-bold ${avatarTone}`}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-sans text-sm font-bold text-nis-navy truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-snug">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="ns-text-small text-gray-800 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";

/**
 * 9-step 3D scroll-flipping architectural color transition band inspired by chandebootcamp.com/about:
 * - Palette in Nile ICT colors: Warm Ivory -> Peach -> Orange -> Cobalt -> Deep Dark Blue (#000C42) at bottom
 * - Smooth perspective rotateX(0 -> 90deg) staggered across 9 prisms as the section scrolls through view
 */
const FRONT_COLORS = [
  "#FFF7F2",
  "#FFE4D4",
  "#F5B293",
  "#E6602C",
  "#4C65C4",
  "#001B9B",
  "#00157B",
  "#00105D",
  "#000C42",
];

const FLIP_STAGGER = 0.07;
const PERSPECTIVE = 1600;

function smoothstep(x: number): number {
  const c = Math.max(0, Math.min(1, x));
  return c * c * (3 - 2 * c);
}

export default function SteppedFlipBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const stripRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bottomRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;
    let current = 0;
    let target = 0;
    let lastTime = performance.now();

    const measureTarget = () => {
      const rect = band.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const center = rect.top + rect.height / 2;
      const startY = vh * 0.85;
      const endY = vh * 0.55;
      const raw = (startY - center) / Math.max(1, startY - endY);
      target = Math.max(0, Math.min(1, raw));
    };

    const applyTransforms = (progress: number) => {
      const n = FRONT_COLORS.length;
      const firstStrip = stripRefs.current[0];
      const h = firstStrip ? firstStrip.getBoundingClientRect().height || 45 : 45;
      const k = PERSPECTIVE / (PERSPECTIVE + h / 2);
      const halfH = h / 2;

      for (let i = 0; i < n; i++) {
        const strip = stripRefs.current[i];
        const front = frontRefs.current[i];
        const bottom = bottomRefs.current[i];
        if (!strip || !front || !bottom) continue;

        const delay = i * FLIP_STAGGER;
        const span = 1 - (n - 1) * FLIP_STAGGER;
        const localT = smoothstep((progress - delay) / Math.max(0.1, span));

        strip.style.transform = `scale3d(${k.toFixed(5)}, ${k.toFixed(
          5
        )}, ${k.toFixed(5)}) rotateX(${(localT * 90).toFixed(3)}deg)`;

        front.style.transform = `translateZ(${halfH.toFixed(2)}px)`;
        front.style.opacity = String(
          Math.max(0, Math.min(1, (1 - localT) * 50))
        );

        bottom.style.transform = `rotateX(-90deg) translateZ(${halfH.toFixed(
          2
        )}px)`;
        bottom.style.opacity = String(Math.max(0, Math.min(1, localT * 50)));
      }
    };

    if (prefersReduced) {
      applyTransforms(0);
      return;
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      measureTarget();
      current += (target - current) * (1 - Math.exp(-dt * 9));
      applyTransforms(current);
      rafId = requestAnimationFrame(tick);
    };

    measureTarget();
    current = target;
    applyTransforms(current);
    rafId = requestAnimationFrame(tick);

    window.addEventListener("resize", measureTarget, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measureTarget);
    };
  }, []);

  return (
    <div
      ref={bandRef}
      aria-hidden="true"
      className="w-full overflow-x-clip bg-white select-none"
      style={{
        perspective: `${PERSPECTIVE}px`,
        perspectiveOrigin: "50% 50%",
      }}
    >
      <div className="flex flex-col w-full" style={{ transformStyle: "preserve-3d" }}>
        {FRONT_COLORS.map((frontColor, idx) => {
          const bottomColor = FRONT_COLORS[FRONT_COLORS.length - 1 - idx];
          return (
            <div
              key={idx}
              ref={(el) => {
                stripRefs.current[idx] = el;
              }}
              className="relative w-full h-8 sm:h-10 lg:h-[45px]"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {/* Front Face */}
              <span
                ref={(el) => {
                  frontRefs.current[idx] = el;
                }}
                className="absolute -inset-x-[1px] -inset-y-[1px] block"
                style={{
                  backgroundColor: frontColor,
                  backfaceVisibility: "hidden",
                }}
              />
              {/* Bottom 90-degree Flipped Face */}
              <span
                ref={(el) => {
                  bottomRefs.current[idx] = el;
                }}
                className="absolute -inset-x-[1px] -inset-y-[1px] block"
                style={{
                  backgroundColor: bottomColor,
                  backfaceVisibility: "hidden",
                  opacity: 0,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

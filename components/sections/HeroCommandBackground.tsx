"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type FadeMode = "left-fade" | "center-split" | "center-bright" | "edge-soft";

interface BlockSpec {
  id: string;
  colSpan: string;
  padding?: string;
  fade?: FadeMode;
  tint?: "soft-ember" | "warm-peach" | "amber-glow";
}

// Pure SVG turbulence noise data-URI so grain renders cleanly without external asset files
const GRAIN_DATA_URI = `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.52'/%3E%3C/svg%3E")`;

// 100% linear left-to-right and right-to-left white-to-orange gradients (zero center pinches)
const DIRECTIONAL_WHITE_ORANGE: Record<FadeMode, string> = {
  "left-fade":
    "linear-gradient(to right, #FFFFFF 0%, #FFE4D4 42%, #F4834E 76%, #E6602C 100%)",
  "center-split":
    "linear-gradient(to left, #FFFFFF 0%, #FFE4D4 42%, #F4834E 76%, #E6602C 100%)",
  "center-bright":
    "linear-gradient(to right, #FFFFFF 0%, #FFE4D4 38%, #E6602C 100%)",
  "edge-soft":
    "linear-gradient(to left, #FFFFFF 0%, #FFE4D4 38%, #E6602C 100%)",
};

// 10-column × 8-row staircase blocks strictly in columns 7–10 so the boxed text area (cols 1–6) stays clear
const DESKTOP_ROWS: (BlockSpec | null)[][] = [
  // Row 1: top-right anchor cell (col 10)
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r1-c10",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "soft-ember",
    },
  ],
  // Row 2: col 8 + span cols 9-10
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r2-c8",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "warm-peach",
    },
    {
      id: "r2-c9-10",
      colSpan: "col-span-2",
      padding: "p-2",
      fade: "center-bright",
      tint: "soft-ember",
    },
  ],
  // Row 3: col 9 + col 10
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r3-c9",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "center-bright",
      tint: "amber-glow",
    },
    {
      id: "r3-c10",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "center-split",
      tint: "soft-ember",
    },
  ],
  // Row 4: span cols 9-10
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r4-c9-10",
      colSpan: "col-span-2",
      padding: "p-2",
      fade: "left-fade",
      tint: "warm-peach",
    },
  ],
  // Row 5: col 8 + span cols 9-10
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r5-c8",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "soft-ember",
    },
    {
      id: "r5-c9-10",
      colSpan: "col-span-2",
      padding: "p-2",
      fade: "center-split",
      tint: "amber-glow",
    },
  ],
  // Row 6: col 9 + col 10
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r6-c9",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "center-split",
      tint: "warm-peach",
    },
    {
      id: "r6-c10",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "soft-ember",
    },
  ],
  // Row 7: lower terrace (col 7 + span cols 8-10)
  [
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r7-c7",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "amber-glow",
    },
    {
      id: "r7-c8-10",
      colSpan: "col-span-3",
      padding: "p-2",
      fade: "center-split",
      tint: "soft-ember",
    },
  ],
  // Row 8: bottom edge (col 8 + span cols 9-10)
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      id: "r8-c8",
      colSpan: "col-span-1",
      padding: "p-2",
      fade: "left-fade",
      tint: "warm-peach",
    },
    {
      id: "r8-c9-10",
      colSpan: "col-span-2",
      padding: "p-2",
      fade: "left-fade",
      tint: "soft-ember",
    },
  ],
];

type LineSpec = {
  colSpan: string;
  top?: "solid" | "dashed";
  right?: "solid" | "dashed";
  bottom?: "solid" | "dashed";
};

// Clean 10×8 dashed & solid blueprint grid enclosing a crisp 6-col × 5-row boxed content zone on cols 1–6, rows 2–6
const GRID_LINE_ROWS: LineSpec[][] = [
  // Row 1: clean dashed vertical guides across top margin
  Array.from({ length: 10 }, (_, idx) => ({
    colSpan: "col-span-1",
    right: idx < 9 ? "dashed" : undefined,
  })),
  // Row 2: top solid border across cols 1-6 + right solid divider at col 6
  [
    { colSpan: "col-span-6", top: "solid", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed" },
  ],
  // Row 3
  [
    { colSpan: "col-span-6", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed" },
  ],
  // Row 4
  [
    { colSpan: "col-span-6", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-2", top: "dashed" },
  ],
  // Row 5
  [
    { colSpan: "col-span-6", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-2", top: "dashed" },
  ],
  // Row 6
  [
    { colSpan: "col-span-6", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-1", top: "dashed" },
  ],
  // Row 7: bottom solid close of content box across cols 1-6 + right dashed staircase
  [
    { colSpan: "col-span-6", bottom: "solid", right: "solid" },
    { colSpan: "col-span-1", top: "dashed", right: "dashed" },
    { colSpan: "col-span-3", top: "dashed" },
  ],
  // Row 8: bottom margin dashed guides
  Array.from({ length: 10 }, (_, idx) => ({
    colSpan: "col-span-1",
    top: idx >= 6 ? "dashed" : undefined,
    right: idx < 9 ? "dashed" : undefined,
  })),
];

function getCellLineStyle(cell: LineSpec): React.CSSProperties {
  const dashed = "1px dashed rgba(255, 255, 255, 0.13)";
  const solid = "1px solid rgba(255, 255, 255, 0.24)";
  return {
    borderTop:
      cell.top === "solid" ? solid : cell.top === "dashed" ? dashed : undefined,
    borderRight:
      cell.right === "solid"
        ? solid
        : cell.right === "dashed"
        ? dashed
        : undefined,
    borderBottom:
      cell.bottom === "solid"
        ? solid
        : cell.bottom === "dashed"
        ? dashed
        : undefined,
  };
}

export default function HeroCommandBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const blockMapRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const activeSetRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let cancelled = false;
    const activeSet = activeSetRef.current;
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const stretchBlock = (el: HTMLDivElement, id: string, originSide: "left" | "right") => {
      const origin = originSide === "left" ? "left center" : "right center";
      const compressTarget = 0.22 + Math.random() * 0.3;

      gsap
        .timeline({
          onComplete: () => {
            activeSet.delete(id);
          },
        })
        // Telescope / contract cleanly along the grid rail
        .to(el, {
          scaleX: compressTarget,
          scaleY: 0.94,
          opacity: 0.82,
          transformOrigin: origin,
          duration: 0.48,
          ease: "power3.inOut",
        })
        // Snap-stretch forward past natural width with silky overshoot
        .to(el, {
          scaleX: 1.07,
          scaleY: 1.02,
          opacity: 1,
          transformOrigin: origin,
          duration: 0.42,
          ease: "expo.out",
        })
        // Settle softly back to exact grid boundary
        .to(el, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.65)",
          clearProps: "transform",
        });
    };

    const scheduleTimer = (fn: () => void, ms: number) => {
      const t = setTimeout(() => {
        timers.delete(t);
        if (!cancelled) fn();
      }, ms);
      timers.add(t);
    };

    const triggerStretchWave = (delayStep: number) => {
      const ids = Array.from(blockMapRef.current.keys()).filter(
        (id) => !activeSet.has(id)
      );
      if (ids.length === 0) return;

      const pickCount = Math.min(ids.length, Math.floor(Math.random() * 3) + 2);
      const pool = [...ids];
      for (let i = 0; i < pickCount; i++) {
        const pickIdx = Math.floor(Math.random() * pool.length);
        const pickedId = pool.splice(pickIdx, 1)[0];
        const el = blockMapRef.current.get(pickedId);
        if (el) {
          activeSet.add(pickedId);
          const originSide = pickedId.includes("c10") || i % 2 === 1 ? "right" : "left";
          scheduleTimer(() => stretchBlock(el, pickedId, originSide), i * delayStep);
        }
      }
    };

    const loop = () => {
      const nextDelay = 1700 + Math.random() * 2200;
      scheduleTimer(() => {
        triggerStretchWave(160);
        loop();
      }, nextDelay);
    };

    // Initial kinetic elastic entrance across all desktop blocks
    const entries = Array.from(blockMapRef.current.entries());
    entries.forEach(([id, el], idx) => {
      const fromRight = id.includes("c10") || idx % 2 === 1;
      gsap.fromTo(
        el,
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: fromRight ? "right center" : "left center",
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.9,
          delay: 0.14 + idx * 0.045,
          ease: "elastic.out(0.85, 0.72)",
          clearProps: "transform,opacity",
        }
      );
    });

    scheduleTimer(() => {
      triggerStretchWave(150);
      loop();
    }, 1350);

    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
      activeSet.clear();
      const els = Array.from(blockMapRef.current.values());
      if (els.length > 0) gsap.killTweensOf(els);
    };
  }, []);

  const handleHoverStretch = (id: string, fade?: FadeMode) => {
    const el = blockMapRef.current.get(id);
    if (!el || activeSetRef.current.has(id)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    activeSetRef.current.add(id);
    const origin =
      fade === "center-split" || fade === "edge-soft"
        ? "right center"
        : "left center";

    gsap
      .timeline({
        onComplete: () => {
          activeSetRef.current.delete(id);
        },
      })
      .to(el, {
        scaleX: 1.12,
        scaleY: 0.93,
        transformOrigin: origin,
        duration: 0.22,
        ease: "power2.out",
      })
      .to(el, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        clearProps: "transform",
      });
  };

  const setBlockRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      blockMapRef.current.set(id, el);
    } else {
      blockMapRef.current.delete(id);
    }
  };

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden bg-[#001B9B] z-0"
    >
      {/* Desktop: 10×8 Blueprint Dashed Lines + Boxed Left Compartment */}
      <div className="hidden lg:grid grid-cols-10 grid-rows-8 gap-0 w-full h-full absolute inset-0">
        {GRID_LINE_ROWS.flatMap((row, rIdx) =>
          row.map((cell, cIdx) => (
            <div
              key={`line-${rIdx}-${cIdx}`}
              className={cell.colSpan}
              style={getCellLineStyle(cell)}
            />
          ))
        )}
      </div>

      {/* Desktop: Stretching Orange Gradient Staircase Rectangles With Kinetic Elastic Hover */}
      <div className="hidden lg:grid grid-cols-10 grid-rows-8 gap-0 w-full h-full absolute inset-0">
        {DESKTOP_ROWS.flatMap((row, rIdx) =>
          row.map((block, cIdx) => {
            if (!block) {
              return (
                <div
                  key={`empty-${rIdx}-${cIdx}`}
                  className="col-span-1 pointer-events-none"
                />
              );
            }

            const fillGradient = DIRECTIONAL_WHITE_ORANGE[block.fade ?? "left-fade"];

            return (
              <div
                key={block.id}
                onMouseEnter={() => handleHoverStretch(block.id, block.fade)}
                className={`${block.colSpan} ${block.padding ?? "p-2"} pointer-events-auto cursor-pointer`}
              >
                <div
                  ref={setBlockRef(block.id)}
                  className="group relative w-full h-full overflow-hidden will-change-transform transition-shadow duration-300 hover:ring-1 hover:ring-white/85 hover:shadow-[0_0_32px_rgba(255,228,212,0.5)]"
                >
                  {/* 100% Opaque Pure White-to-Orange Gradient Block */}
                  <div
                    className="relative w-full h-full transition-all duration-300 ease-out group-hover:brightness-105 group-hover:saturate-125"
                    style={{ background: fillGradient }}
                  >
                    {/* Fine Tactile Film-Grain Texture */}
                    <div
                      className="absolute inset-0 mix-blend-soft-light pointer-events-none opacity-45"
                      style={{
                        backgroundImage: GRAIN_DATA_URI,
                        backgroundSize: "96px 96px",
                      }}
                    />
                  </div>
                  {/* Sweeping Diagonal Specular Sheen on Hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-full w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[135%] group-hover:opacity-100 z-30"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Tablet / Mobile Simplified 6×6 Blueprint Grid Only (No Orange Boxes) */}
      <div className="lg:hidden grid grid-cols-6 grid-rows-6 gap-0 w-full h-full absolute inset-0">
        {Array.from({ length: 36 }, (_, idx) => (
          <div
            key={`mob-${idx}`}
            className="border-r border-t border-dashed border-white/10"
          />
        ))}
      </div>
    </div>
  );
}

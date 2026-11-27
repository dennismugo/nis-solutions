"use client";

import React, { useMemo } from "react";

type DotWaveVariant = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Pure brand-color halftone micro-dot wave header (zero duo-tone polygon split, zero images).
 * Generates tight variable-radius Ben-Day dots undulating organically across the lower half.
 */
export default function StepIsometricIllustration({
  index,
}: {
  title?: string;
  desc?: string;
  step?: string;
  index: number;
}) {
  const variant = (index % 6) as DotWaveVariant;

  const themes: Record<
    DotWaveVariant,
    {
      bg: string;
      dotColor: string;
      phase: number;
    }
  > = {
    0: {
      bg: "#001B9B",
      dotColor: "#E6602C",
      phase: 0.2,
    },
    1: {
      bg: "#EAF0FF",
      dotColor: "#001B9B",
      phase: 1.3,
    },
    2: {
      bg: "#E6602C",
      dotColor: "#00194F",
      phase: 2.4,
    },
    3: {
      bg: "#00194F",
      dotColor: "#3D62FF",
      phase: 0.8,
    },
    4: {
      bg: "#FFE4D4",
      dotColor: "#E6602C",
      phase: 1.9,
    },
    5: {
      bg: "#1236FF",
      dotColor: "#FFE4D4",
      phase: 3.1,
    },
  };

  const cfg = themes[variant];

  const dots = useMemo(() => {
    const circles: Array<{ cx: number; cy: number; r: number }> = [];
    const cols = 48;
    const rows = 26;
    const dx = 380 / cols;
    const dy = 210 / rows;

    for (let row = 8; row <= rows; row++) {
      const y = row * dy;
      const offsetX = row % 2 === 0 ? dx * 0.5 : 0;

      for (let col = 0; col <= cols; col++) {
        const x = col * dx + offsetX;
        const t = x / 380;
        // Rolling multi-crest wave contour matching reference silhouette
        const crest =
          108 +
          Math.sin(t * Math.PI * 2.4 + cfg.phase) * 20 +
          Math.cos(t * Math.PI * 4.8 - cfg.phase * 0.7) * 9;

        const depth = y - crest;
        if (depth > 0) {
          const r = Math.min(2.35, Math.max(0.28, depth * 0.026));
          circles.push({
            cx: Number(x.toFixed(1)),
            cy: Number(y.toFixed(1)),
            r: Number(r.toFixed(2)),
          });
        }
      }
    }
    return circles;
  }, [cfg.phase]);

  return (
    <div
      className="relative h-36 sm:h-40 w-full overflow-hidden select-none"
      style={{ backgroundColor: cfg.bg }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 380 210"
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill={cfg.dotColor} fillOpacity="0.88">
          {dots.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
          ))}
        </g>
      </svg>
    </div>
  );
}

"use client";

import React from "react";
import HalftoneLiquidImage from "@/components/ui/HalftoneLiquidImage";

/**
 * Jasper-inspired editorial portrait frame:
 * - Portrait/tall aspect matching the adjacent content height
 * - Zero border radius
 * - Halftone print dots + liquid ripple hover via HalftoneLiquidImage
 * - Angled #E6602C stripes (bottom-right)
 */
export default function ChallengeEditorialPortrait({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] select-none">
      {/* Main Portrait Image Container (No border radius, no heavy outer box) */}
      <div
        data-animate="portrait-reveal"
        className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden bg-[#EAF0FF]"
      >
        <HalftoneLiquidImage
          src={src}
          alt={alt}
          objectPositionClass="object-[50%_20%]"
        />

        {/* Subtle Brand Blue Atmospheric Tint on Top-Right Edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#001B9B]/35 to-transparent mix-blend-multiply"
        />

        {/* Bottom-Right Angled Brand Orange Stripes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 -right-6 w-56 sm:w-64 space-y-2.5 -rotate-6 z-20"
        >
          <div className="h-3.5 sm:h-4 w-full bg-[#E6602C]" />
          <div className="h-3.5 sm:h-4 w-full bg-[#E6602C]" />
          <div className="h-3.5 sm:h-4 w-full bg-[#E6602C]" />
        </div>
      </div>
    </div>
  );
}

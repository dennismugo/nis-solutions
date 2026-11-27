"use client";

import React, { useEffect, useId, useRef, useState } from "react";

interface HalftoneLiquidImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPositionClass?: string;
}

/**
 * Renders any photographic asset with:
 * 1. Crisp Ben-Day halftone print dot texture overlay
 * 2. Interactive SVG feTurbulence + feDisplacementMap liquid warp & sheen on hover
 */
export default function HalftoneLiquidImage({
  src,
  alt,
  className = "",
  objectPositionClass = "object-center",
}: HalftoneLiquidImageProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `nis-liquid-${uid}`;

  const turbRef = useRef<SVGFETurbulenceElement | null>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const scaleRef = useRef(0);
  const phaseRef = useRef(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stepAnimation = () => {
    const target = hoveringRef.current ? 14 : 0;
    scaleRef.current += (target - scaleRef.current) * 0.14;

    if (hoveringRef.current) {
      phaseRef.current += 0.06;
    }

    if (dispRef.current) {
      const ripple = hoveringRef.current
        ? scaleRef.current + Math.sin(phaseRef.current) * 4.5
        : scaleRef.current;
      dispRef.current.setAttribute("scale", ripple.toFixed(2));
    }

    if (turbRef.current && hoveringRef.current) {
      const fx = 0.013 + Math.sin(phaseRef.current * 0.7) * 0.004;
      const fy = 0.02 + Math.cos(phaseRef.current * 0.5) * 0.005;
      turbRef.current.setAttribute(
        "baseFrequency",
        `${fx.toFixed(4)} ${fy.toFixed(4)}`
      );
    }

    if (hoveringRef.current || Math.abs(scaleRef.current) > 0.25) {
      rafRef.current = requestAnimationFrame(stepAnimation);
    } else {
      if (dispRef.current) dispRef.current.setAttribute("scale", "0");
      rafRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    hoveringRef.current = true;
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(stepAnimation);
    }
  };

  const handleMouseLeave = () => {
    hoveringRef.current = false;
    if (!rafRef.current && scaleRef.current > 0.25) {
      rafRef.current = requestAnimationFrame(stepAnimation);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group/liq relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Hidden SVG Liquid Displacement Filter Definition */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute w-0 h-0 overflow-hidden"
      >
        <defs>
          <filter
            id={filterId}
            x="-8%"
            y="-8%"
            width="116%"
            height="116%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.013 0.02"
              numOctaves={2}
              seed={4}
              result="liquidNoise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="liquidNoise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Photo With Dynamic SVG Liquid Filter & Smooth Scale */}
      <img
        src={src}
        alt={alt}
        style={prefersReduced ? undefined : { filter: `url(#${filterId})` }}
        className={`w-full h-full object-cover ${objectPositionClass} contrast-[1.06] saturate-[1.03] transition-transform duration-700 ease-out group-hover/liq:scale-[1.045] will-change-transform`}
      />

      {/* Crisp Editorial Halftone Print Dot Screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-65 transition-opacity duration-500 group-hover/liq:opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 25, 79, 0.34) 1.1px, transparent 1.25px), radial-gradient(circle, rgba(230, 96, 44, 0.14) 0.9px, transparent 1.1px)",
          backgroundSize: "5px 5px, 5px 5px",
          backgroundPosition: "0 0, 2.5px 2.5px",
        }}
      />

      {/* Liquid Highlight Gloss Wave on Hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] transition-transform duration-1000 ease-out group-hover/liq:translate-x-[140%]"
      />
    </div>
  );
}

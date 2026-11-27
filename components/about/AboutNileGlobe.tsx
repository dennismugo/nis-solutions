"use client";

import React from "react";

/**
 * GetProven-inspired spherical globe focal graphic for About Us:
 * - Soft pearl-to-slate 3D shaded sphere centered on Africa / East Africa
 * - Sweeping dotted orbital connection arcs in Nile ICT cobalt & orange
 * - Crisp centered pure-white brand plaque (zero border radius) over Nairobi hub
 */
export default function AboutNileGlobe() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] aspect-square flex items-center justify-center select-none">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_14px_40px_rgba(0,25,79,0.06)]"
        aria-label="Nile ICT Solutions regional and global delivery network globe"
        role="img"
      >
        <defs>
          {/* Smooth spherical 3D shading matching GetProven globe depth */}
          <radialGradient id="nisGlobeShade" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#F5F7FB" />
            <stop offset="86%" stopColor="#E7ECF5" />
            <stop offset="100%" stopColor="#DCE3F0" />
          </radialGradient>

          <clipPath id="nisGlobeClip">
            <circle cx="250" cy="250" r="228" />
          </clipPath>
        </defs>

        {/* Sphere Base */}
        <circle cx="250" cy="250" r="228" fill="url(#nisGlobeShade)" />

        {/* Stylized Continent Landmasses Centered on Africa & Europe/Asia/Americas */}
        <g clipPath="url(#nisGlobeClip)" fill="#D2D6DE">
          {/* Africa */}
          <path d="M225 182 C248 175, 276 178, 294 194 C312 210, 326 232, 344 246 C355 256, 352 276, 336 296 C322 316, 314 345, 304 374 C294 402, 272 418, 256 410 C242 402, 236 374, 230 348 C224 322, 214 300, 192 292 C168 282, 152 264, 156 236 C160 208, 188 190, 225 182 Z" />
          {/* Madagascar */}
          <path d="M352 344 C360 338, 366 346, 362 364 C358 380, 350 388, 344 378 C340 368, 344 352, 352 344 Z" />
          {/* Europe */}
          <path d="M188 158 C206 142, 236 130, 266 136 C284 140, 292 126, 278 112 C264 98, 240 86, 214 96 C192 104, 174 128, 188 158 Z" />
          {/* Middle East & Asia Edge */}
          <path d="M298 154 C326 142, 362 124, 412 128 C448 132, 466 168, 456 212 C446 250, 412 274, 384 260 C358 248, 342 222, 324 204 C308 188, 286 172, 298 154 Z" />
          {/* Americas West Edge */}
          <path d="M22 146 C52 132, 86 148, 96 184 C104 214, 86 244, 102 274 C122 308, 134 344, 118 392 C104 432, 74 446, 52 414 C32 384, 24 324, 20 264 C16 214, 10 172, 22 146 Z" />
        </g>

        {/* Sweeping Dotted Orbital Arcs (GetProven Aesthetic in Brand Cobalt & Orange) */}
        <g clipPath="url(#nisGlobeClip)" fill="none" strokeLinecap="round">
          <ellipse
            cx="250"
            cy="250"
            rx="246"
            ry="88"
            transform="rotate(-24 250 250)"
            stroke="#001B9B"
            strokeOpacity="0.6"
            strokeWidth="2.4"
            strokeDasharray="3.5 7"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="238"
            ry="110"
            transform="rotate(28 250 250)"
            stroke="#E6602C"
            strokeOpacity="0.65"
            strokeWidth="2.4"
            strokeDasharray="3.5 7"
          />
          <ellipse
            cx="255"
            cy="250"
            rx="112"
            ry="242"
            transform="rotate(14 255 250)"
            stroke="#001B9B"
            strokeOpacity="0.48"
            strokeWidth="2.2"
            strokeDasharray="3.5 7"
          />
          <ellipse
            cx="245"
            cy="250"
            rx="94"
            ry="240"
            transform="rotate(-38 245 250)"
            stroke="#E6602C"
            strokeOpacity="0.45"
            strokeWidth="2"
            strokeDasharray="3.5 7"
          />
        </g>

        {/* Subtle Inner Rim Highlight */}
        <circle
          cx="250"
          cy="250"
          r="227.5"
          fill="none"
          stroke="#001B9B"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* Nairobi / East Africa Hub Pulse Indicator */}
        <circle cx="312" cy="272" r="10" fill="#E6602C" fillOpacity="0.22" />
        <circle cx="312" cy="272" r="4.5" fill="#E6602C" />
      </svg>

      {/* Crisp Pure-White Centered Brand Plaque (Zero Border Radius) */}
      <div className="absolute z-10 bg-white border border-nis-navy/10 px-6 py-3.5 shadow-[0_14px_34px_-8px_rgba(0,25,79,0.2)] flex items-center justify-center">
        <img
          src="/logo-primary.png"
          alt="Nile ICT Solutions"
          className="h-9 sm:h-11 w-auto object-contain block"
        />
      </div>
    </div>
  );
}

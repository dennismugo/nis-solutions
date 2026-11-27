import React, { useId } from "react";

const DOT_VARIANTS = {
  navy: { fill: "#00194F", opacity: "0.28" },
  blue: { fill: "#001B9B", opacity: "0.42" },
  orange: { fill: "#E6602C", opacity: "0.45" },
} as const;

export default function BasetenPatternDivider({
  variant = "navy",
}: {
  variant?: keyof typeof DOT_VARIANTS;
}) {
  const uid = useId().replace(/:/g, "");
  const patternId = `nis-baseten-dots-${uid}`;
  const maskId = `nis-baseten-step-${uid}`;
  const { fill: dotFill, opacity: dotOpacity } = DOT_VARIANTS[variant];

  return (
    <div
      aria-hidden="true"
      className="w-full bg-white overflow-hidden select-none leading-[0]"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-[64px] sm:h-[82px] lg:h-[96px] block"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="0.58" fill={dotFill} fillOpacity={dotOpacity} />
          </pattern>

          <mask id={maskId}>
            <rect width="1440" height="100" fill="black" />
            {/* Upper stepped fine micro-dot bands */}
            <rect x="0" y="0" width="215" height="20" fill="white" />
            <rect x="360" y="0" width="160" height="20" fill="white" />
            <rect x="550" y="0" width="890" height="20" fill="white" />

            {/* Middle stepped band */}
            <rect x="215" y="20" width="145" height="25" fill="white" />
            <rect x="520" y="20" width="920" height="25" fill="white" />
            <rect x="0" y="40" width="1440" height="15" fill="white" />

            {/* Lower continuous fine micro-dot foundation strip */}
            <rect x="0" y="50" width="1440" height="50" fill="white" />
          </mask>
        </defs>

        <rect
          width="1440"
          height="100"
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}

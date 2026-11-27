import React from "react";
import Link from "next/link";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import { ArrowRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

const CARD_THEMES = [
  {
    topBg: "bg-[#DCEBFF]",
    bottomBg: "bg-[#EEF5FF]",
    meshColor: "rgba(0, 27, 155, 0.085)",
  },
  {
    topBg: "bg-[#FCE5DC]",
    bottomBg: "bg-[#FDF2EE]",
    meshColor: "rgba(230, 96, 44, 0.1)",
  },
  {
    topBg: "bg-[#DCFAD8]",
    bottomBg: "bg-[#EEFCEB]",
    meshColor: "rgba(13, 59, 30, 0.085)",
  },
  {
    topBg: "bg-[#E5E8FF]",
    bottomBg: "bg-[#F3F4FF]",
    meshColor: "rgba(0, 25, 79, 0.09)",
  },
];

function PillarIllustration({ index }: { index: number }) {
  if (index === 0) {
    // Enterprise ICT Infrastructure: Network nodes & shield fortress
    return (
      <svg viewBox="0 0 220 140" className="w-[78%] max-w-[220px] h-auto" aria-hidden="true">
        <rect x="28" y="22" width="164" height="32" fill="#FFFFFF" stroke="#00194F" strokeWidth="2.5" />
        <rect x="38" y="34" width="44" height="6" fill="#001B9B" />
        <circle cx="174" cy="38" r="4.5" fill="#E6602C" />

        <rect x="28" y="64" width="164" height="32" fill="#FFFFFF" stroke="#00194F" strokeWidth="2.5" />
        <rect x="38" y="76" width="68" height="6" fill="#00194F" />
        <circle cx="174" cy="80" r="4.5" fill="#001B9B" />

        <path d="M110 96V116M64 116H156" stroke="#00194F" strokeWidth="2.5" />
        <circle cx="64" cy="116" r="6" fill="#001B9B" />
        <circle cx="110" cy="116" r="6" fill="#E6602C" />
        <circle cx="156" cy="116" r="6" fill="#001B9B" />
      </svg>
    );
  }

  if (index === 1) {
    // Software and Digital Engineering: Connected workflow nodes (mirroring Content Pipelines style)
    return (
      <svg viewBox="0 0 220 140" className="w-[82%] max-w-[225px] h-auto" aria-hidden="true">
        <rect x="20" y="22" width="76" height="40" fill="#FFFFFF" stroke="#5B2611" strokeWidth="2.5" />
        <circle cx="31" cy="33" r="3" fill="#E6602C" />
        <rect x="29" y="42" width="46" height="5" fill="#5B2611" />
        <rect x="29" y="50" width="32" height="4" fill="#E6602C" fillOpacity="0.45" />

        <path d="M96 42H132M124 35L132 42L124 49" stroke="#5B2611" strokeWidth="2.5" fill="none" />
        <circle cx="154" cy="42" r="17" fill="#E6602C" />
        <path d="M154 59V82" stroke="#5B2611" strokeWidth="2.5" />

        <rect x="116" y="82" width="84" height="42" fill="#FFFFFF" stroke="#5B2611" strokeWidth="2.5" />
        <circle cx="127" cy="93" r="3" fill="#5B2611" />
        <rect x="125" y="102" width="54" height="5" fill="#E6602C" fillOpacity="0.65" />
        <rect x="125" y="111" width="38" height="4" fill="#5B2611" fillOpacity="0.45" />

        <path d="M116 103H84" stroke="#5B2611" strokeWidth="2.5" />
        <polygon points="62,84 42,120 82,120" fill="#E6602C" />
      </svg>
    );
  }

  if (index === 2) {
    // Enterprise Business Solutions: Structured open ledger / accuracy controls (mirroring Brand IQ style)
    return (
      <svg viewBox="0 0 220 140" className="w-[78%] max-w-[215px] h-auto" aria-hidden="true">
        <path
          d="M28 30C58 22 86 24 110 34C134 24 162 22 192 30V114C162 106 134 108 110 118C86 108 58 106 28 114V30Z"
          fill="#FFFFFF"
          stroke="#0D3B1E"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <line x1="110" y1="34" x2="110" y2="118" stroke="#0D3B1E" strokeWidth="3" />
        <path d="M44 50L50 56L62 43" stroke="#22C55E" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="70" y1="50" x2="96" y2="50" stroke="#0D3B1E" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 72L50 78L62 65" stroke="#22C55E" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="70" y1="72" x2="94" y2="72" stroke="#0D3B1E" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 94L50 100L62 87" stroke="#22C55E" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="70" y1="94" x2="90" y2="94" stroke="#0D3B1E" strokeWidth="3" strokeLinecap="round" />

        <rect x="124" y="46" width="52" height="10" fill="#BBF7D0" />
        <line x1="124" y1="72" x2="174" y2="72" stroke="#0D3B1E" strokeWidth="3" strokeLinecap="round" />
        <line x1="124" y1="88" x2="168" y2="88" stroke="#0D3B1E" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // Digital Growth and Online Solutions: Matrix table & browser presence grid
  return (
    <svg viewBox="0 0 220 140" className="w-[80%] max-w-[220px] h-auto" aria-hidden="true">
      <rect x="46" y="20" width="128" height="84" fill="#FFFFFF" stroke="#00194F" strokeWidth="2.5" />
      <rect x="46" y="20" width="128" height="15" fill="#00194F" />
      <rect x="54" y="44" width="112" height="10" fill="#93C5FD" />
      <line x1="46" y1="62" x2="174" y2="62" stroke="#00194F" strokeWidth="1.5" />
      <line x1="46" y1="78" x2="174" y2="78" stroke="#00194F" strokeWidth="1.5" />
      <line x1="90" y1="35" x2="90" y2="104" stroke="#00194F" strokeWidth="1.5" />
      <line x1="132" y1="35" x2="132" y2="104" stroke="#00194F" strokeWidth="1.5" />

      <circle cx="34" cy="96" r="16" fill="#FFFFFF" stroke="#001B9B" strokeWidth="2.5" />
      <path d="M27 99L32 94L36 97L41 91" stroke="#E6602C" strokeWidth="2.5" fill="none" />

      <circle cx="184" cy="48" r="15" fill="#FFFFFF" stroke="#001B9B" strokeWidth="2.5" />
      <circle cx="184" cy="48" r="5" fill="#001B9B" />

      <polygon points="104,92 122,102 108,116" fill="#001B9B" />
    </svg>
  );
}

export default function WhatWeDoSection() {
  const { intro, pillars } = HOMEPAGE_COPY.whatWeDo;

  return (
    <section className="ns-section-default bg-white">
      <div className="ns-container-large space-y-12 lg:space-y-14">
        {/* Centered 2-Line Header + Orangish Highlighter Eyebrow + Balanced Paragraph */}
        <TextReveal className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            What We Do
          </span>
          <h2 className="font-heading font-normal text-[1.75rem] sm:text-4xl lg:text-[3.1rem] xl:text-[3.4rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
            One partner. Four ways to move
            <br className="hidden md:inline" /> your organisation forward.
          </h2>
          <p className="text-base sm:text-[17px] text-gray-600 max-w-[44rem] mx-auto leading-relaxed">
            {intro}
          </p>
        </TextReveal>

        {/* 4 Jasper-Style Pastel Cards with Fine Small Mesh Grid Top Visual */}
        <div
          data-animate="stagger-grid"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {pillars.map((pillar, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];

            return (
              <article
                key={pillar.title}
                className="rounded-none flex flex-col overflow-hidden group"
              >
                {/* Top Half: Fine Small Mesh Grid Visual Panel */}
                <div
                  className={`relative h-52 sm:h-56 w-full flex items-center justify-center overflow-hidden ${theme.topBg}`}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.meshColor} 1px, transparent 1px), linear-gradient(to bottom, ${theme.meshColor} 1px, transparent 1px)`,
                    backgroundSize: "13px 13px",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.42) 0%, transparent 72%)",
                    }}
                  />
                  <div className="relative z-10 w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <PillarIllustration index={idx} />
                  </div>
                </div>

                {/* Bottom Half: Soft Tinted Content Panel */}
                <div
                  className={`flex-1 p-7 sm:p-8 flex flex-col justify-between space-y-6 ${theme.bottomBg}`}
                >
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-2xl leading-[1.2] tracking-[-0.02em] text-nis-navy">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {pillar.tagline}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#E6602C] hover:text-nis-blue transition-colors"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

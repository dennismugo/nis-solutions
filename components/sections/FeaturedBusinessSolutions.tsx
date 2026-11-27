import React from "react";
import Link from "next/link";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

function SolutionMockup({ id }: { id: "banking" | "insurance" | "document" }) {
  if (id === "banking") {
    return (
      <div className="relative w-[78%] max-w-[270px] mx-auto select-none">
        {/* Stacked Ghost Frame behind card */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-3 h-full bg-white/40"
        />
        <div className="relative bg-white p-6 text-center shadow-[0_14px_34px_-8px_rgba(0,25,79,0.16)] space-y-4">
          <div className="font-heading text-lg text-nis-navy">
            Core Member Ledger
          </div>

          <div className="w-16 h-16 mx-auto rounded-full bg-[#EEF2FF] border-2 border-[#001B9B] flex items-center justify-center">
            <div className="w-9 h-9 rounded-full border-2 border-[#E6602C] flex items-center justify-center font-mono text-xs font-bold text-[#001B9B]">
              99.9%
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-nis-navy font-medium">
            <Star className="w-3.5 h-3.5 text-[#001B9B]" />
            <span>Reconciled</span>
          </div>

          <div className="bg-[#E8EEFF] text-[#001B9B] font-mono text-[11px] font-medium px-3 py-1.5">
            Active in Core Banking
          </div>
        </div>
      </div>
    );
  }

  if (id === "insurance") {
    return (
      <div className="w-[78%] max-w-[270px] h-[236px] mx-auto border border-white/25 bg-white/[0.06] p-6 flex flex-col items-center justify-between text-white select-none">
        <div className="font-sans text-lg font-normal tracking-tight text-white">
          Claims &amp; Policy
        </div>

        {/* Clean Dual Sinusoidal Sync Wave */}
        <svg
          viewBox="0 0 240 48"
          className="w-full h-12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 24 C 40 8, 80 40, 120 24 C 160 8, 200 40, 240 24"
            stroke="#FFFFFF"
            strokeOpacity="0.85"
            strokeWidth="1.5"
          />
          <path
            d="M0 24 C 45 38, 90 10, 135 26 C 180 40, 210 14, 240 24"
            stroke="#FFB08E"
            strokeOpacity="0.85"
            strokeWidth="1.25"
          />
          <line
            x1="0"
            y1="24"
            x2="240"
            y2="24"
            stroke="#FFFFFF"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        </svg>

        <div className="border border-white/60 px-4 py-1.5 inline-flex items-center gap-2 text-xs font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>Synced</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[78%] max-w-[270px] mx-auto bg-white p-5 shadow-[0_14px_34px_-8px_rgba(91,38,17,0.16)] space-y-3.5 select-none">
      <div className="text-center space-y-1">
        <div className="w-8 h-8 mx-auto rounded-full bg-[#FFF1E8] border border-[#E6602C]/25 flex items-center justify-center text-[#E6602C]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="font-heading text-base text-nis-navy">Archive Index</div>
        <div className="font-mono text-[10px] text-gray-500">
          ✦ Indexed 3 secs ago
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-[#EEF3FF] px-3 py-2 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold text-nis-navy">
              Audit Records
            </div>
            <div className="text-[10px] text-gray-600">Role-based access</div>
          </div>
          <span className="w-6 h-6 rounded-full border border-[#001B9B]/35 flex items-center justify-center text-[#001B9B]">
            <Star className="w-3 h-3" />
          </span>
        </div>

        <div className="bg-[#FFF3EC] px-3 py-2 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold text-nis-navy">
              Approval Trail
            </div>
            <div className="text-[10px] text-gray-600">Full version history</div>
          </div>
          <span className="w-6 h-6 rounded-full border border-[#E6602C]/40 flex items-center justify-center text-[#C2410C]">
            <CheckCircle2 className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedBusinessSolutions() {
  const { h2, honestyLine } = HOMEPAGE_COPY.featuredSolutions;

  const solutions = [
    {
      id: "banking" as const,
      title: "Core banking systems",
      desc: "Central platforms for accounts, loans and transactions—accurate, auditable and ready to grow.",
      href: "/solutions/core-banking",
      frameBg: "bg-[#C7D6FF]",
    },
    {
      id: "insurance" as const,
      title: "Insurance management",
      desc: "Policies, premiums, claims, renewals and commissions unified into a single, accurate record.",
      href: "/solutions/insurance-management",
      frameBg: "bg-[#001B9B]",
    },
    {
      id: "document" as const,
      title: "Document management",
      desc: "Replace paper and scattered folders with searchable digital archives, permissions and approval history.",
      href: "/solutions/document-management",
      frameBg: "bg-[#F6A170]",
    },
  ];

  return (
    <section className="ns-section-default bg-[#EAF0FF]">
      <div className="ns-container-large space-y-12 lg:space-y-14">
        {/* Centered Editorial Header */}
        <TextReveal className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            Featured business solutions
          </span>
          <h2 className="ns-heading-h2 text-nis-navy">{h2}</h2>
          <p className="text-base sm:text-[17px] text-[#2B3B5C] leading-relaxed max-w-[49rem] mx-auto">
            {honestyLine}
          </p>
        </TextReveal>

        {/* 3-Column Greenhouse-Style Seamless Showcase (No Border Radius) */}
        <div
          data-animate="stagger-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
        >
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-none focus:outline-none"
            >
              {/* Top Square Color Illustration Tile */}
              <div
                className={`h-[310px] sm:h-[340px] w-full flex items-center justify-center px-6 ${item.frameBg}`}
              >
                <div className="w-full transition-transform duration-500 group-hover:scale-[1.03]">
                  <SolutionMockup id={item.id} />
                </div>
              </div>

              {/* Bottom Hairline Footer Row with Circular Arrow Button */}
              <div className="pt-5 pb-6 lg:pr-6 flex items-start justify-between gap-4 border-t border-nis-navy/15 mt-5 lg:mr-5">
                <div className="space-y-2">
                  <h3 className="font-heading font-normal text-xl sm:text-[1.75rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.02em] text-nis-navy group-hover:text-[#001B9B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2B3B5C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="w-8 h-8 shrink-0 rounded-full border border-nis-navy/35 flex items-center justify-center text-nis-navy group-hover:bg-nis-navy group-hover:text-white group-hover:border-nis-navy transition-colors mt-1"
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

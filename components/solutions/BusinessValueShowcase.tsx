"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ChevronRight,
  Layers,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export interface BusinessValueShowcaseProps {
  title: string;
  category: string;
  outcomes: string[];
  capabilities: string[];
  portraitSrc?: string;
  portraitAlt?: string;
}

const ROW_BADGES = [
  { bg: "bg-[#EEF2FF]", text: "text-[#0111A2]", Icon: ShieldCheck },
  { bg: "bg-[#FFF1EA]", text: "text-[#F85508]", Icon: Layers },
  { bg: "bg-[#E6F4EE]", text: "text-[#1B6B54]", Icon: TrendingUp },
  { bg: "bg-[#F3EEFF]", text: "text-[#5B42D6]", Icon: Activity },
];

export default function BusinessValueShowcase({
  title,
  outcomes,
  capabilities,
}: BusinessValueShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [includeInScope, setIncludeInScope] = useState(true);

  const visibleOutcomes = outcomes.slice(0, 4);
  const safeIdx = activeIdx < visibleOutcomes.length ? activeIdx : 0;
  const activeOutcome = visibleOutcomes[safeIdx] || outcomes[0] || title;
  const activeCap =
    capabilities[safeIdx] || capabilities[0] || "Core Implementation";
  const ActiveIcon = ROW_BADGES[safeIdx % ROW_BADGES.length].Icon;
  const activeBadge = ROW_BADGES[safeIdx % ROW_BADGES.length];

  return (
    <div className="relative rounded-2xl overflow-hidden p-5 sm:p-8 select-none shadow-[0_24px_60px_-20px_rgba(1,17,162,0.22)]">
      {/* Maze-Inspired Textured Cobalt Mosaic Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #5278F8 0%, #6E7DFF 50%, #3E58DB 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "34px 34px, 34px 34px, 17px 17px",
        }}
      />

      <div className="relative z-10 flex flex-col">
        {/* Back Floating Card: Clean Maze Stacked Outcome Rows */}
        <div className="w-full sm:w-[88%] sm:ml-auto bg-white rounded-xl border border-white/90 shadow-[0_24px_56px_-14px_rgba(0,25,79,0.26)] p-3.5 sm:p-4 space-y-2">
          {visibleOutcomes.map((item, idx) => {
            const isSelected = idx === safeIdx;
            const badge = ROW_BADGES[idx % ROW_BADGES.length];
            const RowIcon = badge.Icon;

            return (
              <button
                key={item}
                type="button"
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#F6F8FF] border-[#0111A2]/35 shadow-[0_2px_10px_-3px_rgba(1,17,162,0.16)]"
                    : "bg-white border-slate-200/80 hover:border-[#0111A2]/25 hover:bg-slate-50/70"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${badge.bg} ${badge.text}`}
                  >
                    <RowIcon className="w-4 h-4 stroke-[1.8]" />
                  </span>
                  <span
                    className={`text-xs sm:text-[13px] font-medium leading-snug line-clamp-2 ${
                      isSelected ? "text-[#00194F]" : "text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isSelected
                      ? "text-[#0111A2] translate-x-0.5"
                      : "text-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Front Overlapping Card: GetProven Clean Configuration Panel */}
        <div className="relative z-20 -mt-5 sm:-mt-7 w-full sm:w-[82%] sm:mr-auto bg-white rounded-xl border border-slate-200/90 shadow-[0_28px_64px_-12px_rgba(0,25,79,0.28)] p-4 sm:p-5 space-y-3.5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeBadge.bg} ${activeBadge.text}`}
              >
                <ActiveIcon className="w-4 h-4" />
              </span>
              <div className="text-sm font-semibold text-[#00194F] leading-snug">
                {activeCap}
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={includeInScope}
              aria-label="Include in project scope"
              onClick={() => setIncludeInScope((v) => !v)}
              className="flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span className="text-[11px] font-medium text-slate-500">
                Include
              </span>
              <span
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  includeInScope ? "bg-[#1B6B54]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                    includeInScope ? "translate-x-[18px]" : "translate-x-1"
                  }`}
                />
              </span>
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {activeOutcome}
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <span className="block text-[11px] text-slate-500">
                Solution area
              </span>
              <div className="rounded-md bg-[#F4F6F8] px-2.5 py-1.5 text-xs font-medium text-[#00194F] truncate">
                {title}
              </div>
            </div>
            <div className="space-y-1">
              <span className="block text-[11px] text-slate-500">
                Project status
              </span>
              <div className="rounded-md bg-[#F4F6F8] px-2.5 py-1.5 text-xs font-medium text-[#00194F] truncate">
                {includeInScope ? "Selected for rollout" : "Saved for phase 2"}
              </div>
            </div>
          </div>

          <div>
            <Link
              href={`/contact?solution=${encodeURIComponent(title)}&intent=demo`}
              className="inline-flex items-center justify-center rounded-lg bg-[#1B6B54] hover:bg-[#145542] text-white text-xs font-semibold px-4 py-2 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

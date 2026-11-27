"use client";

import React from "react";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import {
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  Globe,
  HardDrive,
  Layers,
  Network,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";

const FALLBACK_ICONS = [Layers, Cpu, ShieldCheck, Zap, Compass, ClipboardCheck];

function getModuleIcon(title: string, idx: number) {
  const t = title.toLowerCase();
  if (t.includes("camera") || t.includes("cctv") || t.includes("surveillance") || t.includes("remote monitoring")) {
    return Camera;
  }
  if (t.includes("nvr") || t.includes("dvr") || t.includes("storage") || t.includes("backup") || t.includes("database") || t.includes("server")) {
    return HardDrive;
  }
  if (t.includes("network") || t.includes("cabling") || t.includes("wi-fi") || t.includes("lan") || t.includes("wan") || t.includes("cabinet")) {
    return Network;
  }
  if (t.includes("security") || t.includes("firewall") || t.includes("risk") || t.includes("identity") || t.includes("endpoint") || t.includes("protection")) {
    return ShieldCheck;
  }
  if (t.includes("mobile") || t.includes("app") || t.includes("ios") || t.includes("android")) {
    return Smartphone;
  }
  if (t.includes("website") || t.includes("e-commerce") || t.includes("cms") || t.includes("landing")) {
    return Globe;
  }
  if (t.includes("seo") || t.includes("aeo") || t.includes("geo") || t.includes("marketing") || t.includes("advertising") || t.includes("analytics") || t.includes("conversion")) {
    return TrendingUp;
  }
  if (t.includes("software") || t.includes("api") || t.includes("integration") || t.includes("enterprise") || t.includes("automation") || t.includes("workflow")) {
    return Code2;
  }
  if (t.includes("relocation") || t.includes("office") || t.includes("workstation")) {
    return Truck;
  }
  if (t.includes("equipment") || t.includes("computing") || t.includes("printing") || t.includes("power") || t.includes("procurement") || t.includes("licensing")) {
    return Cpu;
  }
  if (t.includes("assessment") || t.includes("audit") || t.includes("planning") || t.includes("strategy") || t.includes("roadmap")) {
    return Compass;
  }
  return FALLBACK_ICONS[idx % FALLBACK_ICONS.length];
}

export interface SolutionModuleItem {
  title: string;
  desc: string;
}

export default function StackingSolutionCards({
  eyebrow = "Our Solution · What We Provide",
  heading = "Capabilities scoped around how your organisation actually works.",
  subtitle = "Combine individual components into one integrated, accountable scope without fragmented suppliers.",
  modules,
  ctaHref,
  ctaLabel,
}: {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  modules: SolutionModuleItem[];
  ctaHref: string;
  ctaLabel: string;
}) {
  if (!modules || modules.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-nis-navy/10">
      <div className="ns-container-large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <TextReveal>
              <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1 mb-4">
                {eyebrow}
              </span>
              <h2 className="font-heading font-normal text-[1.75rem] sm:text-4xl lg:text-[2.85rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
                {heading}
              </h2>
            </TextReveal>

            <p className="ns-text-medium text-gray-600 leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-2">
              <Button href={ctaHref} variant="orange" size="lg" withArrow>
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right Column: Sticky Layered Card Stack — strictly White & Blue alternation, no numbering */}
          <div className="lg:col-span-7 space-y-5 lg:pb-10">
            {modules.map((mod, idx) => {
              const isBlue = idx % 2 === 1;

              const surfaceClasses = isBlue
                ? "bg-[#001B9B] text-white border-[#001B9B]"
                : "bg-white text-nis-navy border-nis-navy/15";

              const topStickyRem = 6.5 + idx * 0.9;
              const ModIcon = getModuleIcon(mod.title, idx);

              return (
                <article
                  key={mod.title}
                  id={`module-${idx + 1}`}
                  style={{ ["--stack-top" as string]: `${topStickyRem}rem` }}
                  className={`scroll-mt-28 lg:sticky lg:[top:var(--stack-top)] border p-8 sm:p-10 min-h-[250px] sm:min-h-[275px] flex flex-col justify-between shadow-[0_-8px_28px_-12px_rgba(0,25,79,0.12)] transition-transform duration-300 ${surfaceClasses}`}
                >
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-current/15">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-10 h-10 flex items-center justify-center border ${
                          isBlue
                            ? "bg-white/10 border-white/20 text-[#FFE4D4]"
                            : "bg-[#E8EEFF] border-[#001B9B]/15 text-[#001B9B]"
                        }`}
                      >
                        <ModIcon className="w-5 h-5" />
                      </span>
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider font-medium ${
                          isBlue ? "text-[#EAF0FF]" : "text-nis-navy/70"
                        }`}
                      >
                        Capability Module
                      </span>
                    </div>

                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 ${
                        isBlue ? "text-[#FFE4D4]" : "text-[#001B9B]"
                      }`}
                    />
                  </div>

                  <div className="pt-6 space-y-3">
                    <h3
                      className={`font-heading text-2xl sm:text-[1.75rem] leading-[1.12] tracking-tight ${
                        isBlue ? "text-white" : "text-nis-navy"
                      }`}
                    >
                      {mod.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isBlue ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {mod.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

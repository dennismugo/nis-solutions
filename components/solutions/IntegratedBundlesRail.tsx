"use client";

import React, { useRef } from "react";
import Link from "next/link";
import TextRoll from "@/components/ui/TextRoll";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface IntegratedBundle {
  id: string;
  title: string;
  desc: string;
  items: { label: string; href: string }[];
}

export const INTEGRATED_BUNDLES: IntegratedBundle[] = [
  {
    id: "new-office-connected",
    title: "New Office, Fully Connected",
    desc: "Establish a new workplace with planned connectivity, genuine hardware and configured staff technology from day one.",
    items: [
      { label: "IT Consulting", href: "/solutions/it-consulting" },
      { label: "Infrastructure & Networking", href: "/solutions/infrastructure-networking" },
      { label: "ICT Equipment Supply", href: "/solutions/ict-equipment-supply" },
      { label: "Office Setup & Relocation", href: "/solutions/office-setup-relocation" },
    ],
  },
  {
    id: "secure-business-environment",
    title: "Secure Business Environment",
    desc: "Pair digital firewall, identity and backup protection with physical premise CCTV and resilient local switching.",
    items: [
      { label: "Infrastructure & Networking", href: "/solutions/infrastructure-networking" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "CCTV & Security Systems", href: "/solutions/cctv-security-systems" },
    ],
  },
  {
    id: "business-digital-transformation",
    title: "Business Digital Transformation",
    desc: "Modernise repetitive manual workflows, link finance/records tools and ship software and mobile portals.",
    items: [
      { label: "IT Consulting", href: "/solutions/it-consulting" },
      { label: "Software Development", href: "/solutions/software-development" },
      { label: "Web & Mobile Applications", href: "/solutions/web-mobile-applications" },
    ],
  },
  {
    id: "digital-presence-growth",
    title: "Digital Presence & Business Growth",
    desc: "Build a fast, structured website engineered for clarity alongside search and campaign attraction tied to enquiries.",
    items: [
      { label: "Website Development", href: "/solutions/website-development" },
      { label: "Digital Marketing", href: "/solutions/digital-marketing" },
    ],
  },
  {
    id: "infrastructure-modernisation",
    title: "Infrastructure Modernisation",
    desc: "Upgrade slow legacy offices through coordinated planning, verified hardware sourcing, clean cabling and security.",
    items: [
      { label: "IT Consulting", href: "/solutions/it-consulting" },
      { label: "ICT Equipment Supply", href: "/solutions/ict-equipment-supply" },
      { label: "Infrastructure & Networking", href: "/solutions/infrastructure-networking" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
    ],
  },
];

export default function IntegratedBundlesRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: -1 | 1) => {
    railRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="bg-[#001B9B] text-white py-16 lg:py-24 overflow-hidden">
      <div className="ns-container-large space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <TextReveal className="max-w-3xl space-y-3">
            <span className="inline-block rounded-none bg-[#FFE4D4] text-[#00194F] font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
              Integrated Solutions
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.04] tracking-[-0.03em] text-white">
              Connect the capabilities around one goal.
            </h2>
            <p className="ns-text-medium text-white/80 leading-relaxed max-w-2xl">
              Technology works best when equipment, networks, security and software are planned together under one accountable partner.
            </p>
          </TextReveal>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Scroll bundles left"
              className="group inline-flex items-center gap-2 px-4 py-2.5 border border-white/25 hover:border-white text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <TextRoll>Prev</TextRoll>
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Scroll bundles right"
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-[#E6602C] hover:bg-white hover:text-[#001B9B] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <TextRoll>Explore Bundles</TextRoll>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable / Swipeable Bundle Cards */}
        <div
          ref={railRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        >
          {INTEGRATED_BUNDLES.map((bundle, idx) => (
            <article
              key={bundle.id}
              className="snap-start shrink-0 w-[86vw] sm:w-[390px] bg-[#00157A] border border-white/20 p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold bg-[#E6602C] text-white px-2.5 py-0.5">
                    BUNDLE 0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-[#FFE4D4]">
                    {bundle.items.length} Solutions
                  </span>
                </div>

                <h3 className="font-heading text-2xl text-white leading-snug">
                  {bundle.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {bundle.desc}
                </p>

                <div className="pt-2 space-y-1.5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Combined Capabilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {bundle.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group text-[11px] font-mono px-2.5 py-1 bg-white/10 hover:bg-white hover:text-[#001B9B] border border-white/15 text-white transition-colors"
                      >
                        <TextRoll>{item.label}</TextRoll>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <Link
                  href={`/contact?solution=${encodeURIComponent(bundle.title)}`}
                  className="group inline-flex items-center justify-between w-full px-4 py-3 bg-white hover:bg-[#E6602C] text-[#001B9B] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  <TextRoll>Discuss this bundle</TextRoll>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

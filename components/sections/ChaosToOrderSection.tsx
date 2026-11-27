"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Server,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function ChaosToOrderSection() {
  const [activeView, setActiveView] = useState<"comparison" | "chaos" | "nile">(
    "comparison"
  );

  const chaosPoints = [
    {
      title: "Untagged Spaghetti Cabling",
      desc: "Loose patch cords draped over ceilings and stuffed into closets. A single accidental tug brings down entire accounting subnets with zero port labels.",
    },
    {
      title: "Consumer Retail Equipment",
      desc: "Unmanaged plastic routers from computer stores running default admin passwords, prone to thermal crashes and zero firmware security updates.",
    },
    {
      title: "Random ERP & Voice Drops",
      desc: "Broadcast storms and packet collisions during peak business hours. Management repeatedly blames the ISP when the local switch is actually bottlenecking.",
    },
    {
      title: "Ghosting Freelance Technicians",
      desc: "Emergency server crashes on Saturday or during month-end payroll leave staff scrambling for unreachable technicians with no SLA accountability.",
    },
  ];

  const nilePoints = [
    {
      title: "Fluke-Certified Structured Racks",
      desc: "Precision Cat6A terminations, horizontal cable managers, laser-printed patch panel numbering, and formal Fluke DSX-8000 test certificates for every drop.",
    },
    {
      title: "Tier-1 Enterprise Hardware",
      desc: "Authorized Cisco Catalyst switching, Fortinet Next-Gen firewalls, and MikroTik core routers with strict VLAN isolation and official manufacturer warranty.",
    },
    {
      title: "Dedicated Gigabit Backbones",
      desc: "10 Gbps fiber backbones with zero packet drop, QoS prioritization for banking transactions and VoIP, and pure online double-conversion UPS power protection.",
    },
    {
      title: "Contracted SLA & Direct Dispatch",
      desc: "Formal Service Level Agreements: sub-1-hour remote triage, sub-4-hour on-site dispatch in Nairobi CBD, and 24/7 emergency escalation for critical systems.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          badge="Problem vs. Solution"
          title="From unmanaged IT chaos to certified enterprise infrastructure."
          subtitle="Most Kenyan organizations don't have an IT problem—they have an infrastructure discipline problem. See the contrast between ad-hoc fixes and engineered reliability."
          centered
          className="mb-14"
        />

        {/* View Toggle Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-nis-surface border border-gray-200">
            <button
              type="button"
              onClick={() => setActiveView("comparison")}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold transition-all ${
                activeView === "comparison"
                  ? "bg-nis-navy text-white shadow-sm"
                  : "text-gray-600 hover:text-nis-navy"
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveView("chaos")}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold transition-all ${
                activeView === "chaos"
                  ? "bg-rose-700 text-white shadow-sm"
                  : "text-gray-600 hover:text-rose-700"
              }`}
            >
              Market Vulnerabilities
            </button>
            <button
              type="button"
              onClick={() => setActiveView("nile")}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold transition-all ${
                activeView === "nile"
                  ? "bg-nis-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-nis-blue"
              }`}
            >
              The Nile ICT Standard
            </button>
          </div>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: The Chaos (Red / Warning) */}
          {(activeView === "comparison" || activeView === "chaos") && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-rose-200/80">
                  <div className="p-2 rounded-lg bg-rose-100 text-rose-700">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-800">
                      COMMON MARKET PRACTICE
                    </span>
                    <h3 className="font-heading font-bold text-xl text-rose-950">
                      The Unmanaged IT Trap
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {chaosPoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-heading font-bold text-sm text-rose-950">
                          {item.title}
                        </div>
                        <p className="text-xs text-rose-900/80 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/80 text-xs font-mono text-rose-800 font-semibold">
                Result: Unplanned downtime, high employee friction & security exposure.
              </div>
            </div>
          )}

          {/* Right Column: The Nile ICT Certified Standard (Blue / Orange) */}
          {(activeView === "comparison" || activeView === "nile") && (
            <div className="rounded-2xl border border-nis-blue/30 bg-nis-navy-950 text-white p-7 sm:p-9 shadow-elevated flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-nis-blue/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-nis-blue/20 text-nis-orange">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-nis-orange">
                      THE NILE ICT COMMITMENT
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white">
                      Certified Enterprise Standard
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {nilePoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-4 h-4 text-nis-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-heading font-bold text-sm text-white">
                          {item.title}
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  Result: 99.99% Uptime, full documentation & peace of mind.
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-nis-orange hover:text-white transition-colors"
                >
                  <span>Schedule Site Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ShieldCheck,
  Server,
  Zap,
  MapPin,
  Lock,
  Cpu,
  Layers,
  ArrowUpRight,
  Database,
  Radio,
} from "lucide-react";

export default function EnterpriseBentoGrid() {
  return (
    <section className="bg-nis-navy-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 bg-tech-dots-dark opacity-15 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <SectionHeader
          badge="Enterprise Architecture Bento"
          title="Engineered for institutional scale and security."
          subtitle="Explore the structural pillars of our engineering stack: calibrated physical fiber, air-gapped security, financial APIs, and local dispatch."
          dark
          centered
          className="mb-16"
        />

        {/* Asymmetric Bento Grid (Jasper-Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Large 8-column Hero Bento (KDPA & Banking Security Posture) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#001033] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-nis-blue/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-nis-blue/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-nis-orange">
                  GOVERNANCE // 01
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  KDPA COMPLIANT
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Physical and digital data protection aligned with Kenyan regulatory law.
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                We design network architectures with mandatory compliance in mind. From the Kenya Data Protection Act (KDPA) to Central Bank of Kenya (CBK) operational risk guidelines, your customer data is safeguarded with encrypted VLAN segmentation, air-gapped backup storage, and tamper-proof audit trails.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white font-heading">
                    Data Sovereignty
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    100% In-Country Storage
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white font-heading">
                    Perimeter IPS
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Fortinet Deep Inspection
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white font-heading">
                    Audit Logging
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Cryptographic Timestamps
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Security Posture: Zero Trust Baseline</span>
              <span className="text-nis-orange font-mono font-bold">256-Bit Encrypted</span>
            </div>
          </div>

          {/* Card 2: 4-column Bento (10Gbps Fluke Certified Backbone) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#001033] border border-white/10 p-8 flex flex-col justify-between hover:border-nis-blue/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-nis-orange">
                  PHYSICAL LAYER // 02
                </span>
                <Server className="w-5 h-5 text-nis-blue" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white">
                10 Gbps Certified Structured Cabling
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                Every patch lead and fiber run is tested with our calibrated Fluke DSX-8000 analyzer. Printed compliance reports verify zero cross-talk, wiremap accuracy, and 15-year performance warranty.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs space-y-1.5">
                <div className="flex justify-between text-gray-400">
                  <span>Standard:</span>
                  <span className="text-white">TIA/EIA-568.2-D</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Frequency:</span>
                  <span className="text-white">500 MHz (Cat6A)</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Signal Attenuation:</span>
                  <span className="text-emerald-400">Sub-Threshold PASS</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-blue-300">
              Tested by Fluke Networks
            </div>
          </div>

          {/* Card 3: 4-column Bento (Nairobi Dispatch Desk) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#001033] border border-white/10 p-8 flex flex-col justify-between hover:border-nis-blue/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-nis-orange">
                  DISPATCH // 03
                </span>
                <MapPin className="w-5 h-5 text-nis-orange" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white">
                Nairobi CBD Engineering Lab
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                Operating out of <strong>Tom Mboya Street, Posta Building</strong>, our staging lab pre-burns and tests all network hardware and NVRs before physical dispatch to customer premises.
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Sub-2-Hour Remote Triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Sub-4-Hour On-Site Nairobi Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>24/7 SLA Critical Emergency Line</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              Active Fleet & Physical Inventory
            </div>
          </div>

          {/* Card 4: 8-column Bento (Core Banking & Safaricom MPESA Daraja Integration) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#001033] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-nis-blue/50 transition-all duration-300 group relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-nis-orange">
                  ENTERPRISE SOFTWARE // 04
                </span>
                <Database className="w-5 h-5 text-nis-blue" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Core banking engines & automated Safaricom MPESA Daraja rails.
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                We engineer and integrate robust financial software platforms for SACCOs, microfinance, and commercial enterprises. Featuring automatic C2B/B2B transaction matching, real-time ledger reconciliation, and custom underwriting workflows.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-md bg-white/10 text-blue-200 font-mono">
                  Safaricom Daraja API
                </span>
                <span className="text-xs px-3 py-1 rounded-md bg-white/10 text-blue-200 font-mono">
                  SASRA Audit Standards
                </span>
                <span className="text-xs px-3 py-1 rounded-md bg-white/10 text-blue-200 font-mono">
                  Real-Time Double Ledger
                </span>
                <span className="text-xs px-3 py-1 rounded-md bg-white/10 text-blue-200 font-mono">
                  Role-Based Dual Control
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Financial Infrastructure Discipline</span>
              <a
                href="/services/enterprise-systems-software"
                className="text-xs font-bold text-nis-orange hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Explore Financial Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

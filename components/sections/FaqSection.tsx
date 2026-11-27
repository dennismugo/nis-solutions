"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What core ICT and enterprise solutions does Nile ICT Solutions provide?",
      answer:
        "Nile ICT Solutions provides end-to-end technology solutions across four primary pillars: (1) ICT Infrastructure & Security (structured Cat6A/fiber cabling, Cisco/Mikrotik routing, commercial IP CCTV surveillance, and biometric access control), (2) Enterprise Systems & Software (core banking platforms, insurance management systems, and ERP integrations), (3) Digital Solutions & Web Engineering (Next.js enterprise portals and bespoke business platforms), and (4) Business Technology Support (SLA-contracted managed IT support and preventative hardware maintenance).",
    },
    {
      question: "Where is Nile ICT Solutions located and what areas do you serve?",
      answer:
        "Our head office and technical workshop are situated at Tom Mboya Street, Posta Building in Nairobi CBD, Kenya. We service corporate enterprises, financial institutions, logistics hubs, and commercial facilities throughout Nairobi, the Coast Region, Rift Valley, and wider East Africa.",
    },
    {
      question: "How quickly can your engineering team respond to critical network or server outages?",
      answer:
        "Under our contracted Enterprise Service Level Agreements (SLAs), clients receive guaranteed sub-1-hour remote triage, sub-2-hour remote remediation, and sub-4-hour on-site engineering dispatch within Nairobi commercial districts. Emergency phone and WhatsApp channels operate 24/7 for mission-critical banking and healthcare systems.",
    },
    {
      question: "Can Nile ICT Solutions test and certify existing office network cabling?",
      answer:
        "Yes. We utilize professional Fluke network cable analyzers to perform certified diagnostic testing on existing Cat5e, Cat6, Cat6A, and single/multimode fiber runs. We test for wire map, length, attenuation, near-end cross-talk (NEXT), and return loss, and provide formal certification documentation required by corporate IT audits.",
    },
    {
      question: "Do you build custom software or implement third-party enterprise platforms?",
      answer:
        "We do both depending on institutional requirements. For standard financial, banking, and insurance needs, we configure and integrate mature, proven core systems with local payment rails like Safaricom MPESA Daraja. For unique organizational workflows, our software engineering team builds custom web and database applications with Next.js, TypeScript, and modern relational databases.",
    },
    {
      question: "How do I request a site survey or formal project quotation?",
      answer:
        "You can initiate an inquiry directly by completing our online consultation form, emailing us at info@nileictsolutions.com, calling our dispatch desk at +254 795 121 583, or connecting via WhatsApp. An engineering consultant will schedule a preliminary physical site assessment or discovery call within 24 hours.",
    },
  ];

  return (
    <section className="bg-nis-surface py-20 lg:py-28 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Clear answers to your technology questions."
          subtitle="Everything you need to know about our engineering standards, service coverage, SLA response times, and project onboarding."
          centered
          className="mb-12"
        />

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-nis-blue"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-nis-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-nis-orange flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

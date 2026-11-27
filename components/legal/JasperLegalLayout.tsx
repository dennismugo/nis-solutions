import React from "react";
import TextReveal from "@/components/ui/TextReveal";
import { LAST_REVIEWED } from "@/data/aboutCopy";
import { BRAND } from "@/data/copydeck";
import { Check, Mail, Phone, ShieldCheck } from "lucide-react";

export interface LegalSectionItem {
  num: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface JasperLegalLayoutProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  sections: LegalSectionItem[];
}

export default function JasperLegalLayout({
  eyebrow = "Legal Information",
  title,
  subtitle,
  sections,
}: JasperLegalLayoutProps) {
  return (
    <div className="bg-white">
      {/* Minimal Editorial Header */}
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 bg-[#F7F5F2] border-b border-nis-navy/10">
        <div className="ns-container-large">
          <TextReveal className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-none bg-white border border-slate-300/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-nis-navy font-medium">
              <span className="w-1.5 h-1.5 bg-[#0111A2]" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="font-heading font-normal text-[2rem] sm:text-5xl lg:text-[3.5rem] leading-[1.18] tracking-[-0.025em] text-nis-navy">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <p className="pt-1 text-xs font-mono text-slate-500">
              Last reviewed: {LAST_REVIEWED.display} · Republic of Kenya
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Two-Column Sticky Legal Documentation Body */}
      <section className="py-14 lg:py-20 bg-white border-b border-nis-navy/10">
        <div className="ns-container-large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sticky Left Table of Contents & Governance Desk */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="bg-[#F7F5F2] rounded-none border border-slate-200/90 p-5 sm:p-6 space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                  On this page
                </div>
                <nav className="space-y-1.5">
                  {sections.map((sec) => (
                    <a
                      key={sec.num}
                      href={`#section-${sec.num}`}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 hover:text-[#0111A2] py-1 transition-colors"
                    >
                      <span className="font-mono text-[#F85508] font-semibold shrink-0">
                        {sec.num}
                      </span>
                      <span className="leading-snug">{sec.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Governance Contact Card */}
              <div className="rounded-none border border-slate-200/90 bg-white p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0111A2] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#F85508]" />
                  <span>Governance Desk</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Questions regarding NDAs, service terms, ODPC data rights or compliance?
                </p>
                <div className="space-y-1.5 text-xs font-medium text-nis-navy">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-2 hover:text-[#0111A2] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0111A2]" />
                    <span>{BRAND.email}</span>
                  </a>
                  <a
                    href={BRAND.phoneHref}
                    className="flex items-center gap-2 hover:text-[#0111A2] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0111A2]" />
                    <span>{BRAND.phone}</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Legal Document Prose Body */}
            <div className="lg:col-span-8 space-y-10">
              {sections.map((sec, idx) => (
                <article
                  key={sec.num}
                  id={`section-${sec.num}`}
                  data-animate="reveal-item"
                  className="scroll-mt-28 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-none bg-[#EAF0FF] text-[#0111A2]">
                      {sec.num}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-[1.75rem] leading-tight text-nis-navy">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[15px] sm:text-base text-slate-700 leading-[1.8]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-3 pt-1">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
                        >
                          <span className="w-5 h-5 rounded-none bg-[#EAF0FF] border border-[#0111A2]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#0111A2] stroke-[2.5]" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {idx < sections.length - 1 && (
                    <div
                      aria-hidden="true"
                      data-animate="hairline"
                      className="pt-6 border-b border-slate-200/90"
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

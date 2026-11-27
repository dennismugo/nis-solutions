"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextRoll from "@/components/ui/TextRoll";
import { CONTACT_COPY } from "@/data/contactCopy";
import { BRAND } from "@/data/copydeck";
import {
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const BASE_INTERESTS = [
  "IT Consulting",
  "Infrastructure and Networking",
  "Cybersecurity",
  "CCTV and Security Systems",
  "Managed IT Support",
  "Software Development",
  "Web and Mobile Applications",
  "Website Development",
  "Digital Marketing",
  "ICT Equipment Supply",
  "Office Setup and Relocation",
  "Core Banking Systems",
  "Insurance Management Systems",
  "Document Management Systems",
  "Enterprise Software",
  "Business Process Automation",
  "School Management & Learning Systems",
  "Supermarket POS / ERP Solution",
  "SACCO Solution / Apps / API Gateway",
  "Account Opening Solution",
  "Credit Management System",
  "Debt Collection System",
  "Event & Notifications Systems",
  "Real Estate / Rental Solution",
  "Tours and Travel Solution",
  "WhatsApp Banking & Chatbots",
  "Beneficiary Management System",
  "Customer Relationship Management (CRM)",
  "Accounts & Wallets Reconciliation Solution",
  "Business Reporting System",
];

const STIPPLE_FRAME_BG = {
  backgroundColor: "#FAFAFC",
  backgroundImage:
    "radial-gradient(rgba(0, 27, 155, 0.24) 1px, transparent 1px)",
  backgroundSize: "6px 6px",
};

const SUBTLE_CELL_DOTS = {
  backgroundImage:
    "radial-gradient(rgba(0, 27, 155, 0.16) 1px, transparent 1px)",
  backgroundSize: "6px 6px",
};

export default function ContactFormClient({
  initialSolution,
  initialBrief,
}: {
  initialSolution?: string;
  initialBrief?: string;
}) {
  const {
    h1,
    intro,
    tabs,
    successHeadline,
    successBody,
    whatsappPrefilled,
  } = CONTACT_COPY;

  const interestsList =
    initialSolution && !BASE_INTERESTS.includes(initialSolution)
      ? [initialSolution, ...BASE_INTERESTS]
      : BASE_INTERESTS;

  const [showOptionalContext, setShowOptionalContext] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    interest: initialSolution || "IT Consulting",
    sector: "Corporate Enterprise",
    orgSize: "10–50 staff",
    timeline: "Planning",
    message: initialBrief || "",
  });

  const defaultPlaceholder = tabs[0].placeholder;

  const dynamicWhatsappHref = `https://wa.me/254795121583?text=${encodeURIComponent(
    formData.interest
      ? whatsappPrefilled.service(formData.interest)
      : whatsappPrefilled.general
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="bg-white text-nis-navy pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden"
    >
      <div className="ns-container-large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
          {/* Left Column: Clean White Display Typography + Lower Stepped Blueprint Motif (Matches baseten.co/talk-to-us) */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pr-6">
            <div className="space-y-6 max-w-[33rem]">
              <h1 className="font-heading font-normal text-[1.95rem] sm:text-[2.75rem] lg:text-[3.35rem] leading-[1.18] tracking-[-0.025em] text-nis-navy">
                {h1}
              </h1>

              <p className="text-base sm:text-[1.0625rem] leading-[1.58] text-gray-600">
                {intro}{" "}
                <strong className="font-semibold text-nis-navy">
                  Connect with our engineering and systems team to work out the
                  practical next step.
                </strong>
              </p>

              {/* Direct Entity Contact Strip — Borderless Top, Tactile Architectural Grid */}
              <div className="pt-2 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                    className="group bg-[#F7F8FC] hover:bg-[#001B9B] p-4 flex items-center justify-between gap-3 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-9 h-9 shrink-0 bg-[#E8EEFF] group-hover:bg-white/15 text-[#001B9B] group-hover:text-white flex items-center justify-center transition-colors">
                        <Phone className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-nis-navy/60 group-hover:text-[#FFE4D4] transition-colors">
                          Telephone
                        </span>
                        <span className="block font-sans text-sm font-semibold text-nis-navy group-hover:text-white tabular-nums truncate transition-colors">
                          {BRAND.phone}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-nis-navy/35 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href={dynamicWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#FFF5EF] hover:bg-[#E6602C] p-4 flex items-center justify-between gap-3 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-9 h-9 shrink-0 bg-[#FFE4D4] group-hover:bg-white/20 text-[#E6602C] group-hover:text-white flex items-center justify-center transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[#E6602C] group-hover:text-white/90 transition-colors">
                          WhatsApp Desk
                        </span>
                        <span className="block font-sans text-sm font-semibold text-nis-navy group-hover:text-white truncate transition-colors">
                          Chat directly
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#E6602C]/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="group sm:col-span-2 bg-[#F7F8FC] hover:bg-[#00194F] px-4 py-3.5 flex items-center justify-between gap-3 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-9 h-9 shrink-0 bg-[#E8EEFF] group-hover:bg-white/15 text-[#001B9B] group-hover:text-white flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-nis-navy/60 group-hover:text-[#FFE4D4] transition-colors">
                          Email Engineering
                        </span>
                        <span className="block font-sans text-sm font-semibold text-nis-navy group-hover:text-white truncate transition-colors">
                          {BRAND.email}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-nis-navy/35 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                <div className="bg-[#F7F8FC]/70 px-4 py-3 flex items-start gap-3 text-xs text-nis-navy/75">
                  <MapPin className="w-4 h-4 text-[#E6602C] shrink-0 mt-0.5" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 w-full leading-relaxed">
                    <span className="font-medium text-nis-navy">
                      {BRAND.address}
                    </span>
                    <span className="font-mono text-[11px] text-gray-500">
                      Mon–Fri 8am–5pm · Sat 9am–1pm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stepped Architectural Grid & Subtle Stipple Motif (Bottom Left — Mirrored from baseten.co/talk-to-us) */}
            <div
              aria-hidden="true"
              className="hidden lg:block mt-16 select-none"
            >
              <div className="grid grid-cols-3 border-t border-l border-nis-navy/[0.07] max-w-[30rem]">
                <div className="h-14 border-r border-b border-nis-navy/[0.07]" />
                <div className="h-14 border-r border-b border-nis-navy/[0.07] bg-white" />
                <div className="h-14" />

                <div
                  className="h-14 border-r border-b border-nis-navy/[0.07]"
                  style={SUBTLE_CELL_DOTS}
                />
                <div className="h-14 border-r border-b border-nis-navy/[0.07]" />
                <div className="h-14 border-r border-t border-b border-nis-navy/[0.07]" />

                <div className="h-14 border-r border-b border-nis-navy/[0.07]" />
                <div
                  className="h-14 border-r border-b border-nis-navy/[0.07]"
                  style={SUBTLE_CELL_DOTS}
                />
                <div className="h-14 border-r border-b border-nis-navy/[0.07]" />
              </div>
            </div>
          </div>

          {/* Right Column: Stippled Dot-Matrix Frame Wrapping the Sharp White Form Card (Matches baseten.co/talk-to-us) */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-5" style={STIPPLE_FRAME_BG}>
              <div className="bg-white border border-nis-navy/10 p-6 sm:p-8">
                {submitted ? (
                  <div className="py-14 text-center space-y-6">
                    <div className="w-14 h-14 bg-[#EAF0FF] border border-[#001B9B]/20 text-[#001B9B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2.5 max-w-md mx-auto">
                      <span className="inline-block bg-[#FFE4D4] text-nis-navy font-mono text-xs px-2.5 py-1">
                        Enquiry Received
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl text-nis-navy">
                        {successHeadline}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {successBody}
                      </p>
                    </div>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="group px-5 py-3 bg-[#001B9B] hover:bg-[#E6602C] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <TextRoll>Send Another Enquiry</TextRoll>
                      </button>
                      <a
                        href={dynamicWhatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-nis-navy/20 hover:border-[#001B9B] text-nis-navy text-xs font-mono uppercase tracking-wider transition-colors"
                      >
                        Continue on WhatsApp ▸
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: First Name* | Last Name* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="first-name"
                          className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                        >
                          First Name
                          <span className="text-[#E6602C]">*</span>
                        </label>
                        <input
                          id="first-name"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="last-name"
                          className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                        >
                          Last Name
                          <span className="text-[#E6602C]">*</span>
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Business Email* (Half-width on sm+, exact Baseten rhythm) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="business-email"
                          className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                        >
                          Business Email
                          <span className="text-[#E6602C]">*</span>
                        </label>
                        <input
                          id="business-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="company-org"
                          className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                        >
                          Organisation
                        </label>
                        <input
                          id="company-org"
                          type="text"
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Phone Number (Full-width) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone-number"
                        className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                      />
                    </div>

                    {/* Row 4: What Do You Need Help With (Half-width on sm+) */}
                    <div className="sm:w-[calc(50%-0.625rem)] space-y-1.5">
                      <label
                        htmlFor="service-interest"
                        className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                      >
                        Service or System
                      </label>
                      <select
                        id="service-interest"
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full h-10 px-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                      >
                        {interestsList.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: How Can Nile ICT Help? (Full-width tall textarea) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="enquiry-message"
                        className="block font-mono text-[11px] uppercase tracking-[0.06em] text-nis-navy/70"
                      >
                        How can we help your organisation?
                        <span className="text-[#E6602C]">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={defaultPlaceholder}
                        className="w-full p-3 bg-white border border-nis-navy/20 text-sm text-nis-navy rounded-none focus:outline-none focus:border-[#001B9B]"
                      />
                    </div>

                    {/* Optional Qualification Expandable Drawer (Sector, Team Size, Timeline) */}
                    <div className="border-t border-nis-navy/10 pt-3">
                      <button
                        type="button"
                        onClick={() => setShowOptionalContext((v) => !v)}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#001B9B] hover:text-[#E6602C] transition-colors cursor-pointer"
                      >
                        <span>
                          {showOptionalContext
                            ? "Hide optional project context"
                            : "+ Add sector, team size & timeline (optional — faster reply)"}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            showOptionalContext ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showOptionalContext && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3.5">
                          <div className="space-y-1">
                            <label
                              htmlFor="opt-sector"
                              className="block font-mono text-[10px] uppercase tracking-wider text-nis-navy/70"
                            >
                              Sector
                            </label>
                            <select
                              id="opt-sector"
                              value={formData.sector}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  sector: e.target.value,
                                })
                              }
                              className="w-full h-9 px-2.5 bg-white border border-nis-navy/20 text-xs text-nis-navy rounded-none"
                            >
                              <option value="Banking, SACCO & Finance">
                                Banking &amp; Finance
                              </option>
                              <option value="Insurance">Insurance</option>
                              <option value="Hospitality & Travel">
                                Hospitality
                              </option>
                              <option value="Education">Education</option>
                              <option value="NGOs & Development">NGOs</option>
                              <option value="Corporate Enterprise">
                                Corporate
                              </option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label
                              htmlFor="opt-size"
                              className="block font-mono text-[10px] uppercase tracking-wider text-nis-navy/70"
                            >
                              Team Size
                            </label>
                            <select
                              id="opt-size"
                              value={formData.orgSize}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  orgSize: e.target.value,
                                })
                              }
                              className="w-full h-9 px-2.5 bg-white border border-nis-navy/20 text-xs text-nis-navy rounded-none"
                            >
                              <option value="1–10 staff">1–10 staff</option>
                              <option value="10–50 staff">10–50 staff</option>
                              <option value="50–250 staff">50–250 staff</option>
                              <option value="250+ staff">250+ staff</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label
                              htmlFor="opt-timeline"
                              className="block font-mono text-[10px] uppercase tracking-wider text-nis-navy/70"
                            >
                              Timeline
                            </label>
                            <select
                              id="opt-timeline"
                              value={formData.timeline}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  timeline: e.target.value,
                                })
                              }
                              className="w-full h-9 px-2.5 bg-white border border-nis-navy/20 text-xs text-nis-navy rounded-none"
                            >
                              <option value="Immediately">Immediately</option>
                              <option value="Within 30 days">
                                Within 30 days
                              </option>
                              <option value="1 to 3 months">1–3 months</option>
                              <option value="Planning">Planning ahead</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Consent Line */}
                    <p className="text-xs text-gray-600 leading-relaxed pt-1">
                      Nile ICT Solutions will handle your data pursuant to our{" "}
                      <Link
                        href="/privacy"
                        className="text-[#001B9B] hover:text-[#E6602C] underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    {/* Full-Width Rectangular Submit Bar (Left Label, Right Triangle — Matched to baseten.co/talk-to-us) */}
                    <button
                      type="submit"
                      className="group w-full h-11 px-4 bg-[#001B9B] hover:bg-[#E6602C] text-white font-sans text-sm font-medium rounded-none flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <TextRoll>Get in touch</TextRoll>
                      <span aria-hidden="true" className="text-[11px]">
                        ▸
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

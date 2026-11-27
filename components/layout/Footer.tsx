"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/data/copydeck";
import FooterWordmark from "@/components/layout/FooterWordmark";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nileictsolutions/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nileictsolutions/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden="true"
      >
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/nileict",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nile-ict-solutions/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Multi-Column Architectural Footer + Newsletter + Oversized Wordmark */}
      <div className="bg-gradient-to-b from-[#00194F] to-[#001138] text-white pt-12 sm:pt-16">
        <div className="ns-container-large">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1 (3 cols): Large Priority Links + Bottom Contact Icons & Legal */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-12">
              <div className="space-y-8">
                <div className="space-y-2.5">
                  <div className="text-[11px] font-sans text-gray-400">
                    Business systems
                  </div>
                  <ul className="space-y-1.5 text-lg font-sans font-normal text-white">
                    <li>
                      <Link
                        href="/solutions/core-banking"
                        className="hover:text-nis-orange transition-colors"
                      >
                        Core Banking
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/insurance-management"
                        className="hover:text-nis-orange transition-colors"
                      >
                        Insurance Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/document-management"
                        className="hover:text-nis-orange transition-colors"
                      >
                        Document Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/enterprise-software"
                        className="hover:text-nis-orange transition-colors"
                      >
                        Enterprise Software
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-sans text-gray-400">
                    Member platforms
                  </div>
                  <ul className="space-y-1.5 text-lg font-sans font-normal text-white">
                    <li>
                      <Link
                        href="/solutions/sacco-solutions-apps-api-gateway"
                        className="hover:text-nis-orange transition-colors"
                      >
                        SACCO Solution &amp; Apps
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-sans text-gray-400">
                    Start with Nile ICT
                  </div>
                  <ul className="space-y-1.5 text-lg font-sans font-normal text-white">
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-nis-orange transition-colors"
                      >
                        Discuss Your Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions"
                        className="hover:text-nis-orange transition-colors"
                      >
                        All Business Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-nis-orange transition-colors"
                      >
                        All Technology Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Left Socials + Legal Note */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2.5">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Nile ICT Solutions on ${social.name}`}
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-nis-orange text-white flex items-center justify-center transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs">
                  © {new Date().getFullYear()} Nile ICT Solutions. All rights reserved.
                  <br />
                  {BRAND.address}
                </p>
              </div>
            </div>

            {/* Column 2 (3 cols): Expanded Solutions Portfolio & Industries */}
            <div className="lg:col-span-3 space-y-8 text-sm">
              <div className="space-y-2.5">
                <div className="text-[11px] font-sans text-gray-400">
                  Expanded solutions
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>
                    <Link
                      href="/solutions/school-management-learning-systems"
                      className="hover:text-nis-orange transition-colors"
                    >
                      School Management &amp; LMS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/supermarket-pos-erp"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Supermarket POS / ERP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/digital-account-opening"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Account Opening Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/credit-management-system"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Credit Management System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/debt-collection-system"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Debt Collection System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/event-notification-systems"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Event &amp; Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/real-estate-rental-management"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Real Estate / Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/tours-travel-management-system"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Tours &amp; Travel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/whatsapp-banking-chatbots"
                      className="hover:text-nis-orange transition-colors"
                    >
                      WhatsApp Banking (Chatbots)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/beneficiary-management-system"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Beneficiary Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/customer-relationship-management-crm"
                      className="hover:text-nis-orange transition-colors"
                    >
                      CRM System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/accounts-wallets-reconciliation"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Accounts / Wallets Reconciliation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/business-reporting-system"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Reporting System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/automation"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Business Process Automation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <div className="text-[11px] font-sans text-gray-400">
                  Industries
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>
                    <Link
                      href="/industries#banking"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Banking and Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries#insurance"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries#hospitality"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries#education"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries#ngos"
                      className="hover:text-nis-orange transition-colors"
                    >
                      NGOs and Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 (2 cols): Services & Company */}
            <div className="lg:col-span-2 space-y-8 text-sm">
              <div className="space-y-2.5">
                <div className="text-[11px] font-sans text-gray-400">
                  Infrastructure &amp; Security
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>
                    <Link
                      href="/services/it-consulting"
                      className="hover:text-nis-orange transition-colors"
                    >
                      IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ict-infrastructure-networking"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Infrastructure &amp; Networking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cybersecurity"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cctv-security"
                      className="hover:text-nis-orange transition-colors"
                    >
                      CCTV &amp; Security Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/equipment-supply"
                      className="hover:text-nis-orange transition-colors"
                    >
                      ICT Equipment Supply
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/office-relocation"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Office Setup &amp; Relocation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <div className="text-[11px] font-sans text-gray-400">
                  Software &amp; Digital
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>
                    <Link
                      href="/services/software-development"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-mobile-apps"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Web &amp; Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/website-development"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digital-marketing"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <div className="text-[11px] font-sans text-gray-400">
                  Company
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-nis-orange transition-colors"
                    >
                      About Nile ICT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-nis-orange transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 (4 cols): Newsletter Form + Nairobi Office & Utility Links */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-12">
              <div className="space-y-4 max-w-sm">
                <h3 className="text-xl sm:text-2xl font-sans font-normal text-white leading-snug">
                  Technology updates in plain language
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {BRAND.blurb}
                </p>

                {subscribed ? (
                  <div className="p-3.5 bg-white/10 border border-white/20 text-xs text-emerald-300">
                    Thank you. You’re on the list for insights from Nile ICT Solutions.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="footer-newsletter-email"
                        className="block text-[11px] text-gray-300 font-medium"
                      >
                        Email address *
                      </label>
                      <input
                        id="footer-newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organisation.com"
                        className="w-full h-11 px-3.5 rounded-none bg-white text-nis-navy text-sm focus:outline-none focus:ring-2 focus:ring-nis-orange"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-none border border-white/50 hover:border-nis-orange hover:bg-nis-orange text-white text-xs font-sans font-semibold px-5 py-2 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="text-[11px] text-gray-400">
                    Nairobi office
                  </div>
                  <div className="text-white font-medium">{BRAND.phone}</div>
                  <div>{BRAND.email}</div>
                  <div className="text-gray-400">{BRAND.hours}</div>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-[11px] text-gray-300">
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Full-Width Interactive Miguel-Recio-Style Bottom Wordmark Band */}
        <div className="ns-container-large overflow-hidden pt-10 sm:pt-14 pb-2">
          <FooterWordmark text="NILE ICT" />
        </div>
      </div>
    </footer>
  );
}

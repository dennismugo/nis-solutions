"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { BRAND } from "@/data/copydeck";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowRight,
  Landmark,
  Building2,
  UserCheck,
  CreditCard,
  Receipt,
  ShieldCheck,
  GitCompare,
  BarChart3,
  HeartHandshake,
  GraduationCap,
  ShoppingCart,
  Home,
  Compass,
  FileText,
  Boxes,
  Zap,
  MessageCircle,
  Users,
  Bell,
  Network,
  Video,
  Code2,
  Smartphone,
  Globe,
  TrendingUp,
  Cpu,
  Truck,
} from "lucide-react";

type MegaMenuType = "solutions" | "services" | null;

interface MegaItem {
  title: string;
  sub: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: "blue" | "orange" | "navy";
}

const SOLUTIONS_COLUMNS: { heading: string; items: MegaItem[] }[] = [
  {
    heading: "Banking & Lending",
    items: [
      {
        title: "Core Banking Systems",
        sub: "Central accounts & loans",
        href: "/solutions/core-banking",
        icon: Landmark,
        tone: "blue",
      },
      {
        title: "SACCO Solution & Gateway",
        sub: "Ledgers, apps & APIs",
        href: "/solutions/sacco-solutions-apps-api-gateway",
        icon: Building2,
        tone: "orange",
      },
      {
        title: "Account Opening Solution",
        sub: "Guided digital KYC",
        href: "/solutions/digital-account-opening",
        icon: UserCheck,
        tone: "navy",
      },
      {
        title: "Credit Management System",
        sub: "Origination to approval",
        href: "/solutions/credit-management-system",
        icon: CreditCard,
        tone: "blue",
      },
      {
        title: "Debt Collection System",
        sub: "Structured recovery",
        href: "/solutions/debt-collection-system",
        icon: Receipt,
        tone: "orange",
      },
    ],
  },
  {
    heading: "Insurance & Finance",
    items: [
      {
        title: "Insurance Management",
        sub: "Policies, claims & renewals",
        href: "/solutions/insurance-management",
        icon: ShieldCheck,
        tone: "orange",
      },
      {
        title: "Accounts Reconciliation",
        sub: "Banks, wallets & ledgers",
        href: "/solutions/accounts-wallets-reconciliation",
        icon: GitCompare,
        tone: "blue",
      },
      {
        title: "Reporting System",
        sub: "Dashboards & packs",
        href: "/solutions/business-reporting-system",
        icon: BarChart3,
        tone: "navy",
      },
      {
        title: "Beneficiary Management",
        sub: "Programme & aid records",
        href: "/solutions/beneficiary-management-system",
        icon: HeartHandshake,
        tone: "orange",
      },
    ],
  },
  {
    heading: "Sector & Records",
    items: [
      {
        title: "School Management & LMS",
        sub: "Fees, attendance & portals",
        href: "/solutions/school-management-learning-systems",
        icon: GraduationCap,
        tone: "navy",
      },
      {
        title: "Supermarket POS / ERP",
        sub: "Checkout, stock & margin",
        href: "/solutions/supermarket-pos-erp",
        icon: ShoppingCart,
        tone: "blue",
      },
      {
        title: "Real Estate / Rental",
        sub: "Tenancies & rent tracking",
        href: "/solutions/real-estate-rental-management",
        icon: Home,
        tone: "orange",
      },
      {
        title: "Tours & Travel Solution",
        sub: "Itineraries & bookings",
        href: "/solutions/tours-travel-management-system",
        icon: Compass,
        tone: "navy",
      },
      {
        title: "Document Management",
        sub: "Searchable digital archives",
        href: "/solutions/document-management",
        icon: FileText,
        tone: "blue",
      },
    ],
  },
  {
    heading: "Software & Channels",
    items: [
      {
        title: "Enterprise Software",
        sub: "Custom internal tools",
        href: "/solutions/enterprise-software",
        icon: Boxes,
        tone: "blue",
      },
      {
        title: "Process Automation",
        sub: "Approvals & routine work",
        href: "/solutions/automation",
        icon: Zap,
        tone: "orange",
      },
      {
        title: "WhatsApp Banking",
        sub: "Approved chat service",
        href: "/solutions/whatsapp-banking-chatbots",
        icon: MessageCircle,
        tone: "navy",
      },
      {
        title: "CRM System",
        sub: "Leads & customer history",
        href: "/solutions/customer-relationship-management-crm",
        icon: Users,
        tone: "blue",
      },
      {
        title: "Event & Notifications",
        sub: "SMS, email & alerts",
        href: "/solutions/event-notification-systems",
        icon: Bell,
        tone: "orange",
      },
    ],
  },
];

const SERVICES_COLUMNS: { heading: string; items: MegaItem[] }[] = [
  {
    heading: "Infrastructure & Security",
    items: [
      {
        title: "IT Consulting",
        sub: "Practical technology plans",
        href: "/services/it-consulting",
        icon: Compass,
        tone: "blue",
      },
      {
        title: "Infrastructure & Networking",
        sub: "Cabling, Wi-Fi & connectivity",
        href: "/services/ict-infrastructure-networking",
        icon: Network,
        tone: "navy",
      },
      {
        title: "Cybersecurity",
        sub: "Close exposure & real risk",
        href: "/services/cybersecurity",
        icon: ShieldCheck,
        tone: "orange",
      },
      {
        title: "CCTV & Security Systems",
        sub: "Cameras, DVRs & monitoring",
        href: "/services/cctv-security",
        icon: Video,
        tone: "blue",
      },
    ],
  },
  {
    heading: "Software & Digital",
    items: [
      {
        title: "Software Development",
        sub: "Tailored business applications",
        href: "/services/software-development",
        icon: Code2,
        tone: "orange",
      },
      {
        title: "Web & Mobile Applications",
        sub: "Browser & phone experiences",
        href: "/services/web-mobile-apps",
        icon: Smartphone,
        tone: "blue",
      },
      {
        title: "Website Development",
        sub: "Fast search-friendly sites",
        href: "/services/website-development",
        icon: Globe,
        tone: "navy",
      },
      {
        title: "Digital Marketing",
        sub: "Search & campaign enquiries",
        href: "/services/digital-marketing",
        icon: TrendingUp,
        tone: "orange",
      },
    ],
  },
  {
    heading: "Equipment & Workplace",
    items: [
      {
        title: "ICT Equipment Supply",
        sub: "Hardware chosen for the work",
        href: "/services/equipment-supply",
        icon: Cpu,
        tone: "navy",
      },
      {
        title: "Office Setup & Relocation",
        sub: "Move premises, keep working",
        href: "/services/office-relocation",
        icon: Truck,
        tone: "blue",
      },
    ],
  },
];

const TONE_CLASSES: Record<MegaItem["tone"], string> = {
  blue: "bg-[#E8EEFF] text-[#001B9B]",
  orange: "bg-[#E8EEFF] text-[#001B9B]",
  navy: "bg-[#E8EEFF] text-[#001B9B]",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuType>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* 1. Top Announcement Bar (Hidden on mobile devices, Logo Blue #001B9B) */}
      <div className="hidden md:block bg-[#001B9B] text-white text-xs sm:text-[13px] relative z-[60]">
        <div className="ns-container-large py-4 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-center">
            <span className="text-white/90 font-sans">
              Enterprise ICT infrastructure, software and 19 business systems for organisations in Kenya.
            </span>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 font-sans font-semibold text-white hover:text-white/80 transition-colors"
            >
              <span>Explore solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Sticky Header Wrapper (anchors full-width Mega-Menu cleanly on hover) */}
      <header
        onMouseLeave={() => setActiveMega(null)}
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-nis-navy/10 py-3"
            : "bg-white border-b border-nis-navy/10 py-3.5"
        }`}
      >
        <div className="ns-container-large relative">
          <div className="flex items-center justify-between gap-6">
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-7 flex-1">
                {/* Solutions Trigger */}
                <Link
                  href="/solutions"
                  onMouseEnter={() => setActiveMega("solutions")}
                  onFocus={() => setActiveMega("solutions")}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                    pathname.startsWith("/solutions") ||
                    activeMega === "solutions"
                      ? "text-nis-blue"
                      : "text-nis-navy hover:text-nis-blue"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMega === "solutions" ? "rotate-180 text-nis-blue" : "opacity-70"
                    }`}
                  />
                </Link>

                {/* Services Trigger */}
                <Link
                  href="/services"
                  onMouseEnter={() => setActiveMega("services")}
                  onFocus={() => setActiveMega("services")}
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    pathname.startsWith("/services") || activeMega === "services"
                      ? "text-nis-blue"
                      : "text-nis-navy hover:text-nis-blue"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMega === "services" ? "rotate-180 text-nis-blue" : "opacity-70"
                    }`}
                  />
                </Link>

                <Link
                  href="/industries"
                  onMouseEnter={() => setActiveMega(null)}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    pathname === "/industries"
                      ? "text-nis-blue"
                      : "text-nis-navy hover:text-nis-blue"
                  }`}
                >
                  Industries
                </Link>

                <Link
                  href="/about"
                  onMouseEnter={() => setActiveMega(null)}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    pathname === "/about"
                      ? "text-nis-blue"
                      : "text-nis-navy hover:text-nis-blue"
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onMouseEnter={() => setActiveMega(null)}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    pathname === "/contact"
                      ? "text-nis-blue"
                      : "text-nis-navy hover:text-nis-blue"
                  }`}
                >
                  Contact
                </Link>
              </nav>

            {/* Right CTA Cluster (Sharp 0px Buttons) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button href="/solutions" variant="outline" size="md">
                Explore Solutions
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="!bg-[#001B9B] hover:!bg-[#001475]"
                withArrow
              >
                Discuss Your Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-600"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-none text-nis-navy hover:bg-gray-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width AskDecode-Style Mega Menu Panel */}
        {activeMega && (
          <div className="hidden lg:block absolute left-0 right-0 top-full pt-1.5 z-50">
            <div className="ns-container-large">
              <div className="bg-white border border-nis-navy/15 shadow-[0_26px_70px_-18px_rgba(0,25,79,0.22)] overflow-hidden">
                {/* Main Columns + Right Dark Interactive Spotlight Card */}
                <div className="grid grid-cols-12">
                  {/* Left 9 Columns: Categorized Menu Items with Icon Tiles */}
                  <div
                    className={`col-span-9 p-6 grid gap-6 ${
                      activeMega === "solutions" ? "grid-cols-4" : "grid-cols-3"
                    }`}
                  >
                    {(activeMega === "solutions"
                      ? SOLUTIONS_COLUMNS
                      : SERVICES_COLUMNS
                    ).map((col) => (
                      <div key={col.heading} className="space-y-3">
                        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-nis-navy/60">
                          {col.heading}
                        </div>

                        <div className="space-y-1.5">
                          {col.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveMega(null)}
                                className="group flex items-start gap-3 p-2 -mx-2 hover:bg-[#F5F7FA] transition-colors"
                              >
                                <div
                                  className={`w-8 h-8 shrink-0 flex items-center justify-center transition-colors ${TONE_CLASSES[item.tone]}`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-nis-navy group-hover:text-nis-blue leading-tight">
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] text-gray-500 leading-tight mt-0.5 truncate">
                                    {item.sub}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right 3 Columns: Dark Mini Interactive Prompt Preview Card */}
                  <div className="col-span-3 border-l border-nis-navy/10 bg-[#FAFBFD] p-5 flex flex-col justify-between space-y-4">
                    <div className="bg-gradient-to-br from-[#00194F] via-[#07206B] to-[#000B24] p-4 space-y-3 text-white">
                      <div className="border border-white/15 bg-white/5 px-3 py-2 text-[11px] text-gray-200 font-sans">
                        {activeMega === "solutions"
                          ? "Which business system fits our workflow?"
                          : "Start with the challenge in front of you..."}
                      </div>

                      <div className="space-y-1.5">
                        {(activeMega === "solutions"
                          ? [
                              {
                                label: "Automate bank & wallet matching",
                                href: "/solutions/accounts-wallets-reconciliation",
                              },
                              {
                                label: "Connect SACCO ledger & mobile app",
                                href: "/solutions/sacco-solutions-apps-api-gateway",
                              },
                              {
                                label: "Organise fees, records & parents",
                                href: "/solutions/school-management-learning-systems",
                              },
                            ]
                          : [
                              {
                                label: "Fix office Wi-Fi & cabling drops",
                                href: "/services/ict-infrastructure-networking",
                              },
                              {
                                label: "Assess network & security gaps",
                                href: "/services/cybersecurity",
                              },
                              {
                                label: "Plan IT setup before office move",
                                href: "/services/office-relocation",
                              },
                            ]
                        ).map((chip) => (
                          <Link
                            key={chip.href}
                            href={chip.href}
                            onClick={() => setActiveMega(null)}
                            className="block px-2.5 py-1.5 bg-white/10 hover:bg-nis-orange text-[11px] text-gray-100 hover:text-white transition-colors truncate"
                          >
                            {chip.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-nis-orange block">
                        In plain words
                      </span>
                      <h4 className="font-sans text-sm font-semibold text-nis-navy leading-snug">
                        Describe the problem. We’ll recommend the lightest fix.
                      </h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed">
                        Plain-language advice and clear next steps from our Nairobi team.
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => setActiveMega(null)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-nis-blue hover:text-nis-orange transition-colors pt-1 group"
                      >
                        <span>Discuss your project</span>
                        <span className="w-5 h-5 bg-nis-blue group-hover:bg-nis-orange text-white flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[62px] md:top-[108px] z-40 bg-white overflow-y-auto lg:hidden border-t border-gray-100 px-5 py-6 space-y-5">
          <div className="divide-y divide-gray-100">
            <Link
              href="/"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              Solutions
            </Link>
            <Link
              href="/services"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-base font-semibold text-nis-navy py-3"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200 space-y-3 text-sm">
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-400">
              Direct Contact
            </div>
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 font-semibold text-nis-navy"
            >
              <Phone className="w-4 h-4 text-nis-orange" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-emerald-700"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full !bg-[#001B9B] hover:!bg-[#001475]"
              withArrow
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

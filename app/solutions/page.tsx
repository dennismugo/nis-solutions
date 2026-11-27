import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import TextRoll from "@/components/ui/TextRoll";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import InnerPageHero from "@/components/inner/InnerPageHero";
import HorizontalDeliveryTrack from "@/components/solutions/HorizontalDeliveryTrack";
import { SOLUTIONS_PAGES_COPY } from "@/data/solutionsCopy";
import { TEN_CORE_SOLUTIONS } from "@/data/coreSolutionsMaster";
import { LAST_REVIEWED } from "@/data/aboutCopy";
import { shortenParagraph } from "@/lib/shortenParagraph";
import {
  Landmark,
  ShieldCheck,
  FileText,
  Boxes,
  Zap,
  GraduationCap,
  ShoppingCart,
  Building2,
  UserCheck,
  CreditCard,
  Receipt,
  Bell,
  Home,
  Compass,
  MessageCircle,
  HeartHandshake,
  Users,
  GitCompare,
  BarChart3,
  Network,
  Video,
  Code2,
  Smartphone,
  Globe,
  TrendingUp,
  Cpu,
  Truck,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: SOLUTIONS_PAGES_COPY.overview.seoTitle,
  description: SOLUTIONS_PAGES_COPY.overview.metaDescription,
  alternates: {
    canonical: "https://nileictsolutions.com/solutions",
  },
};

interface DirectoryCard {
  slug: string;
  title: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

const solutionGroups: {
  id: string;
  eyebrow: string;
  title: string;
  promise: string;
  items: DirectoryCard[];
}[] = [
  {
    id: "infrastructure-security",
    eyebrow: "01 · Infrastructure & Security",
    title: "Build a reliable, connected and secure technology foundation",
    promise:
      "Strategic IT consulting, resilient structured cabling, practical cybersecurity and premise CCTV.",
    items: [
      {
        slug: "it-consulting",
        title: "IT Consulting",
        summary: TEN_CORE_SOLUTIONS.itConsulting.answerFirst,
        icon: Compass,
        badge: "Solution 01",
      },
      {
        slug: "infrastructure-networking",
        title: "Infrastructure & Networking",
        summary: TEN_CORE_SOLUTIONS.infrastructureNetworking.answerFirst,
        icon: Network,
        badge: "Solution 02",
      },
      {
        slug: "cybersecurity",
        title: "Cybersecurity",
        summary: TEN_CORE_SOLUTIONS.cybersecurity.answerFirst,
        icon: ShieldCheck,
        badge: "Solution 03",
      },
      {
        slug: "cctv-security-systems",
        title: "CCTV & Security Systems",
        summary: TEN_CORE_SOLUTIONS.cctvSecurity.answerFirst,
        icon: Video,
        badge: "Solution 04",
      },
    ],
  },
  {
    id: "software-digital",
    eyebrow: "02 · Software & Digital",
    title: "Develop digital tools and experiences that improve operations and growth",
    promise:
      "Custom software, web and mobile apps, high-converting websites and measurable digital marketing.",
    items: [
      {
        slug: "software-development",
        title: "Software Development",
        summary: TEN_CORE_SOLUTIONS.softwareDevelopment.answerFirst,
        icon: Code2,
        badge: "Solution 05",
      },
      {
        slug: "web-mobile-applications",
        title: "Web & Mobile Applications",
        summary: TEN_CORE_SOLUTIONS.webMobileApps.answerFirst,
        icon: Smartphone,
        badge: "Solution 06",
      },
      {
        slug: "website-development",
        title: "Website Development",
        summary: TEN_CORE_SOLUTIONS.websiteDevelopment.answerFirst,
        icon: Globe,
        badge: "Solution 07",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        summary: TEN_CORE_SOLUTIONS.digitalMarketing.answerFirst,
        icon: TrendingUp,
        badge: "Solution 08",
      },
    ],
  },
  {
    id: "equipment-workplace",
    eyebrow: "03 · Equipment & Workplace",
    title: "Equip, configure and move workplaces with minimal disruption",
    promise:
      "Genuine hardware sourcing matched to workloads alongside end-to-end office setup and relocation.",
    items: [
      {
        slug: "ict-equipment-supply",
        title: "ICT Equipment Supply",
        summary: TEN_CORE_SOLUTIONS.equipmentSupply.answerFirst,
        icon: Cpu,
        badge: "Solution 09",
      },
      {
        slug: "office-setup-relocation",
        title: "Office Setup & Relocation",
        summary: TEN_CORE_SOLUTIONS.officeRelocation.answerFirst,
        icon: Truck,
        badge: "Solution 10",
      },
    ],
  },
  {
    id: "financial-banking",
    eyebrow: "04 · Financial, Banking & Lending Systems",
    title: "Financial institutions, SACCOs, insurance and reconciliation",
    promise:
      "Audit-ready ledgers, automated mobile wallet matching, credit origination and policy administration.",
    items: [
      {
        slug: "core-banking",
        title: "Core Banking Systems",
        summary: SOLUTIONS_PAGES_COPY.items.coreBanking.answerFirst,
        icon: Landmark,
        badge: "Banking",
      },
      {
        slug: "sacco-solutions-apps-api-gateway",
        title: "SACCO Solution / Apps / API Gateway",
        summary: SOLUTIONS_PAGES_COPY.items.saccoSolution.answerFirst,
        icon: Building2,
        badge: "SACCOs",
      },
      {
        slug: "insurance-management",
        title: "Insurance Management Systems",
        summary: SOLUTIONS_PAGES_COPY.items.insuranceManagement.answerFirst,
        icon: ShieldCheck,
        badge: "Insurance",
      },
      {
        slug: "digital-account-opening",
        title: "Account Opening Solution",
        summary: SOLUTIONS_PAGES_COPY.items.accountOpening.answerFirst,
        icon: UserCheck,
        badge: "Onboarding",
      },
      {
        slug: "credit-management-system",
        title: "Credit Management System",
        summary: SOLUTIONS_PAGES_COPY.items.creditManagement.answerFirst,
        icon: CreditCard,
        badge: "Lending",
      },
      {
        slug: "debt-collection-system",
        title: "Debt Collection System",
        summary: SOLUTIONS_PAGES_COPY.items.debtCollection.answerFirst,
        icon: Receipt,
        badge: "Collections",
      },
      {
        slug: "whatsapp-banking-chatbots",
        title: "WhatsApp Banking (Chatbots)",
        summary: SOLUTIONS_PAGES_COPY.items.whatsappBanking.answerFirst,
        icon: MessageCircle,
        badge: "Messaging",
      },
      {
        slug: "accounts-wallets-reconciliation",
        title: "Accounts / Wallets Reconciliation Solution",
        summary: SOLUTIONS_PAGES_COPY.items.accountsReconciliation.answerFirst,
        icon: GitCompare,
        badge: "Reconciliation",
      },
    ],
  },
  {
    id: "sector-enterprise",
    eyebrow: "05 · Sector, Records & Enterprise Operations",
    title: "Education, retail, property, travel, documents and workflows",
    promise:
      "Connected operational systems built around real Kenyan teams across schools, retail, NGOs and corporates.",
    items: [
      {
        slug: "document-management",
        title: "Document Management Systems",
        summary: SOLUTIONS_PAGES_COPY.items.documentManagement.answerFirst,
        icon: FileText,
        badge: "Records",
      },
      {
        slug: "enterprise-software",
        title: "Enterprise Software",
        summary: SOLUTIONS_PAGES_COPY.items.enterpriseSoftware.answerFirst,
        icon: Boxes,
        badge: "Custom Build",
      },
      {
        slug: "automation",
        title: "Business Process Automation",
        summary: SOLUTIONS_PAGES_COPY.items.automation.answerFirst,
        icon: Zap,
        badge: "Automation",
      },
      {
        slug: "school-management-learning-systems",
        title: "School Management & Learning Systems",
        summary: SOLUTIONS_PAGES_COPY.items.schoolManagement.answerFirst,
        icon: GraduationCap,
        badge: "Education",
      },
      {
        slug: "supermarket-pos-erp",
        title: "Supermarket POS / ERP Solution",
        summary: SOLUTIONS_PAGES_COPY.items.supermarketPosErp.answerFirst,
        icon: ShoppingCart,
        badge: "Retail",
      },
      {
        slug: "real-estate-rental-management",
        title: "Real Estate / Rental Solution",
        summary: SOLUTIONS_PAGES_COPY.items.realEstateRental.answerFirst,
        icon: Home,
        badge: "Property",
      },
      {
        slug: "tours-travel-management-system",
        title: "Tours and Travel Solution",
        summary: SOLUTIONS_PAGES_COPY.items.toursTravel.answerFirst,
        icon: Compass,
        badge: "Travel",
      },
      {
        slug: "beneficiary-management-system",
        title: "Beneficiary Management System",
        summary: SOLUTIONS_PAGES_COPY.items.beneficiaryManagement.answerFirst,
        icon: HeartHandshake,
        badge: "Programmes",
      },
      {
        slug: "customer-relationship-management-crm",
        title: "Customer Relationship Management System (CRM)",
        summary: SOLUTIONS_PAGES_COPY.items.crm.answerFirst,
        icon: Users,
        badge: "CRM",
      },
      {
        slug: "event-notification-systems",
        title: "Event & Notifications Systems",
        summary: SOLUTIONS_PAGES_COPY.items.eventNotifications.answerFirst,
        icon: Bell,
        badge: "Alerts",
      },
      {
        slug: "business-reporting-system",
        title: "Reporting System",
        summary: SOLUTIONS_PAGES_COPY.items.reportingSystem.answerFirst,
        icon: BarChart3,
        badge: "Reporting",
      },
    ],
  },
];

export default function SolutionsPage() {
  const { overview } = SOLUTIONS_PAGES_COPY;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://nileictsolutions.com/solutions#webpage",
        url: "https://nileictsolutions.com/solutions",
        name: overview.seoTitle,
        description: overview.metaDescription,
        dateModified: LAST_REVIEWED.iso,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nileictsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: "https://nileictsolutions.com/solutions",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: overview.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Framed Blueprint Solutions Hero */}
      <InnerPageHero
        eyebrow="Technology & Enterprise Solutions"
        h1={overview.h1}
        subheading={shortenParagraph(overview.intro)}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="orange" size="lg" withArrow>
            Talk to Us
          </Button>
        </div>
      </InnerPageHero>

      {/* 2. Horizontal Interactive Delivery Timeline (Desktop Horizontal / Mobile Vertical) */}
      <HorizontalDeliveryTrack
        eyebrow="Engagement Sequence"
        heading={overview.processHeading}
        subtitle="We assess first, plan clearly, integrate carefully and stay accountable after go-live."
        steps={overview.processSteps}
      />

      {/* 3. Categorized Solutions Directory */}
      <section className="ns-section-default bg-[#F5F7FA] hairline-b">
        <div className="ns-container-large space-y-20">
          {solutionGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24 space-y-8">
              <TextReveal className="max-w-3xl space-y-2.5">
                <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs font-medium px-2.5 py-1">
                  {group.eyebrow}
                </span>
                <h2 className="ns-heading-h3 text-nis-navy">{group.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {group.promise}
                </p>
              </TextReveal>

              <div
                data-animate="stagger-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {group.items.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      className="group bg-white border border-nis-navy/15 hover:border-[#001B9B] transition-colors flex flex-col justify-between"
                    >
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="w-10 h-10 bg-[#E8EEFF] border border-[#001B9B]/15 flex items-center justify-center text-[#001B9B] group-hover:bg-[#001B9B] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="font-sans text-base font-semibold text-nis-navy group-hover:text-[#001B9B] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        <p className="ns-text-small text-gray-600 leading-relaxed line-clamp-3">
                          {sol.summary}
                        </p>
                      </div>

                      <div className="px-6 py-3.5 border-t border-nis-navy/15 flex items-center justify-between text-xs font-semibold text-[#001B9B] group-hover:bg-[#EAF0FF] transition-colors">
                        <TextRoll>Explore solution</TextRoll>
                        <ArrowRight className="w-4 h-4 text-[#E6602C] transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BasetenPatternDivider variant="blue" />

      <ClosingCta />
    </>
  );
}

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import TextRoll from "@/components/ui/TextRoll";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import InnerPageHero from "@/components/inner/InnerPageHero";
import StackingSolutionCards from "@/components/solutions/StackingSolutionCards";
import HorizontalDeliveryTrack from "@/components/solutions/HorizontalDeliveryTrack";
import BusinessValueShowcase from "@/components/solutions/BusinessValueShowcase";
import BusinessChallengeSplit from "@/components/solutions/BusinessChallengeSplit";
import { SOLUTIONS_PAGES_COPY } from "@/data/solutionsCopy";
import { TEN_CORE_SOLUTIONS, type RichSolutionItem } from "@/data/coreSolutionsMaster";
import { getSolutionVisuals } from "@/data/solutionImages";
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
  Calendar,
  Check,
  ClipboardList,
  MessageSquare,
} from "lucide-react";

const ALL_SOLUTION_COPY: Record<string, RichSolutionItem> = {
  ...TEN_CORE_SOLUTIONS,
  ...SOLUTIONS_PAGES_COPY.items,
};

type AllSolutionKey = keyof typeof ALL_SOLUTION_COPY;

interface SolutionMeta {
  title: string;
  canonicalSlug: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  copyKey: AllSolutionKey;
}

const CANONICAL_SOLUTIONS: Record<string, SolutionMeta> = {
  // 10 Core Technology Solutions (Website Content Master PDF)
  "it-consulting": {
    title: "IT Consulting",
    canonicalSlug: "it-consulting",
    category: "Infrastructure & Security",
    icon: Compass,
    copyKey: "itConsulting",
  },
  "infrastructure-networking": {
    title: "Infrastructure & Networking",
    canonicalSlug: "infrastructure-networking",
    category: "Infrastructure & Security",
    icon: Network,
    copyKey: "infrastructureNetworking",
  },
  cybersecurity: {
    title: "Cybersecurity",
    canonicalSlug: "cybersecurity",
    category: "Infrastructure & Security",
    icon: ShieldCheck,
    copyKey: "cybersecurity",
  },
  "cctv-security-systems": {
    title: "CCTV & Security Systems",
    canonicalSlug: "cctv-security-systems",
    category: "Infrastructure & Security",
    icon: Video,
    copyKey: "cctvSecurity",
  },
  "software-development": {
    title: "Software Development",
    canonicalSlug: "software-development",
    category: "Software & Digital",
    icon: Code2,
    copyKey: "softwareDevelopment",
  },
  "web-mobile-applications": {
    title: "Web & Mobile Applications",
    canonicalSlug: "web-mobile-applications",
    category: "Software & Digital",
    icon: Smartphone,
    copyKey: "webMobileApps",
  },
  "website-development": {
    title: "Website Development",
    canonicalSlug: "website-development",
    category: "Software & Digital",
    icon: Globe,
    copyKey: "websiteDevelopment",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    canonicalSlug: "digital-marketing",
    category: "Software & Digital",
    icon: TrendingUp,
    copyKey: "digitalMarketing",
  },
  "ict-equipment-supply": {
    title: "ICT Equipment Supply",
    canonicalSlug: "ict-equipment-supply",
    category: "Equipment & Workplace",
    icon: Cpu,
    copyKey: "equipmentSupply",
  },
  "office-setup-relocation": {
    title: "Office Setup & Relocation",
    canonicalSlug: "office-setup-relocation",
    category: "Equipment & Workplace",
    icon: Truck,
    copyKey: "officeRelocation",
  },

  // 5 Enterprise Business Solutions + 14 Detailed Sector Systems
  "core-banking": {
    title: "Core Banking Systems",
    canonicalSlug: "core-banking",
    category: "Business Systems",
    icon: Landmark,
    copyKey: "coreBanking",
  },
  "insurance-management": {
    title: "Insurance Management Systems",
    canonicalSlug: "insurance-management",
    category: "Business Systems",
    icon: ShieldCheck,
    copyKey: "insuranceManagement",
  },
  "document-management": {
    title: "Document Management Systems",
    canonicalSlug: "document-management",
    category: "Business Systems",
    icon: FileText,
    copyKey: "documentManagement",
  },
  "enterprise-software": {
    title: "Enterprise Software",
    canonicalSlug: "enterprise-software",
    category: "Business Systems",
    icon: Boxes,
    copyKey: "enterpriseSoftware",
  },
  automation: {
    title: "Business Process Automation",
    canonicalSlug: "automation",
    category: "Business Systems",
    icon: Zap,
    copyKey: "automation",
  },
  "school-management-learning-systems": {
    title: "School Management & Learning Systems",
    canonicalSlug: "school-management-learning-systems",
    category: "Education",
    icon: GraduationCap,
    copyKey: "schoolManagement",
  },
  "supermarket-pos-erp": {
    title: "Supermarket POS / ERP Solution",
    canonicalSlug: "supermarket-pos-erp",
    category: "Retail & ERP",
    icon: ShoppingCart,
    copyKey: "supermarketPosErp",
  },
  "sacco-solutions-apps-api-gateway": {
    title: "SACCO Solution, Apps & API Gateway",
    canonicalSlug: "sacco-solutions-apps-api-gateway",
    category: "SACCO & Financial Institutions",
    icon: Building2,
    copyKey: "saccoSolution",
  },
  "digital-account-opening": {
    title: "Account Opening Solution",
    canonicalSlug: "digital-account-opening",
    category: "Onboarding & KYC",
    icon: UserCheck,
    copyKey: "accountOpening",
  },
  "credit-management-system": {
    title: "Credit Management System",
    canonicalSlug: "credit-management-system",
    category: "Lending Operations",
    icon: CreditCard,
    copyKey: "creditManagement",
  },
  "debt-collection-system": {
    title: "Debt Collection System",
    canonicalSlug: "debt-collection-system",
    category: "Recovery & Collections",
    icon: Receipt,
    copyKey: "debtCollection",
  },
  "event-notification-systems": {
    title: "Event & Notifications Systems",
    canonicalSlug: "event-notification-systems",
    category: "Notifications & Alerts",
    icon: Bell,
    copyKey: "eventNotifications",
  },
  "real-estate-rental-management": {
    title: "Real Estate & Rental Solution",
    canonicalSlug: "real-estate-rental-management",
    category: "Property Management",
    icon: Home,
    copyKey: "realEstateRental",
  },
  "tours-travel-management-system": {
    title: "Tours and Travel Solution",
    canonicalSlug: "tours-travel-management-system",
    category: "Hospitality & Travel",
    icon: Compass,
    copyKey: "toursTravel",
  },
  "whatsapp-banking-chatbots": {
    title: "WhatsApp Banking & Chatbots",
    canonicalSlug: "whatsapp-banking-chatbots",
    category: "Customer Channels",
    icon: MessageCircle,
    copyKey: "whatsappBanking",
  },
  "beneficiary-management-system": {
    title: "Beneficiary Management System",
    canonicalSlug: "beneficiary-management-system",
    category: "Programmes & NGOs",
    icon: HeartHandshake,
    copyKey: "beneficiaryManagement",
  },
  "customer-relationship-management-crm": {
    title: "Customer Relationship Management System (CRM)",
    canonicalSlug: "customer-relationship-management-crm",
    category: "Customer Relationships",
    icon: Users,
    copyKey: "crm",
  },
  "accounts-wallets-reconciliation": {
    title: "Accounts & Wallets Reconciliation Solution",
    canonicalSlug: "accounts-wallets-reconciliation",
    category: "Finance & Reconciliation",
    icon: GitCompare,
    copyKey: "accountsReconciliation",
  },
  "business-reporting-system": {
    title: "Reporting System",
    canonicalSlug: "business-reporting-system",
    category: "Reporting & Decisions",
    icon: BarChart3,
    copyKey: "reportingSystem",
  },
};

const SOLUTIONS_REGISTRY: Record<string, SolutionMeta> = {
  ...CANONICAL_SOLUTIONS,
  "school-management": CANONICAL_SOLUTIONS["school-management-learning-systems"],
  "sacco-solution": CANONICAL_SOLUTIONS["sacco-solutions-apps-api-gateway"],
  "account-opening": CANONICAL_SOLUTIONS["digital-account-opening"],
  "credit-management": CANONICAL_SOLUTIONS["credit-management-system"],
  "debt-collection": CANONICAL_SOLUTIONS["debt-collection-system"],
  "event-notifications": CANONICAL_SOLUTIONS["event-notification-systems"],
  "real-estate-rental": CANONICAL_SOLUTIONS["real-estate-rental-management"],
  "tours-travel": CANONICAL_SOLUTIONS["tours-travel-management-system"],
  "whatsapp-banking": CANONICAL_SOLUTIONS["whatsapp-banking-chatbots"],
  "beneficiary-management": CANONICAL_SOLUTIONS["beneficiary-management-system"],
  crm: CANONICAL_SOLUTIONS["customer-relationship-management-crm"],
  "accounts-reconciliation": CANONICAL_SOLUTIONS["accounts-wallets-reconciliation"],
  "reporting-system": CANONICAL_SOLUTIONS["business-reporting-system"],
  "cctv-security": CANONICAL_SOLUTIONS["cctv-security-systems"],
  "equipment-supply": CANONICAL_SOLUTIONS["ict-equipment-supply"],
  "office-relocation": CANONICAL_SOLUTIONS["office-setup-relocation"],
};

export function generateStaticParams() {
  return Object.keys(SOLUTIONS_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = SOLUTIONS_REGISTRY[slug];
  if (!config) return {};

  const copy = ALL_SOLUTION_COPY[config.copyKey];

  return {
    title: copy.seoTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `https://nileictsolutions.com/solutions/${config.canonicalSlug}`,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = SOLUTIONS_REGISTRY[slug];

  if (!config) {
    return notFound();
  }

  const copy: RichSolutionItem = ALL_SOLUTION_COPY[config.copyKey];
  const visuals = getSolutionVisuals(config.copyKey);

  const related = (copy.relatedSlugs || [])
    .map((relSlug) => CANONICAL_SOLUTIONS[relSlug])
    .filter(Boolean);

  const whatsappText =
    copy.whatsappPrefill ||
    `Hello Nile ICT Solutions, I’m interested in your ${config.title}. Could we talk?`;
  const whatsappHref = `https://wa.me/254795121583?text=${encodeURIComponent(
    whatsappText
  )}`;

  // Ensure every solution page gets rich StackingSolutionCards modules
  const stackModules =
    copy.modules && copy.modules.length > 0
      ? copy.modules
      : copy.whatWeDo.map((item, idx) => ({
          title: item,
          desc:
            copy.whatYouGet[idx] ||
            `Implemented with clear documentation, role-based access and direct engineering support across Kenya.`,
        }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: config.title,
        serviceType: config.category,
        description: copy.answerFirst,
        dateModified: LAST_REVIEWED.iso,
        provider: { "@id": "https://nileictsolutions.com/#organization" },
        areaServed: { "@type": "Country", name: "Kenya" },
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
          {
            "@type": "ListItem",
            position: 3,
            name: config.title,
            item: `https://nileictsolutions.com/solutions/${config.canonicalSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({
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

      {/* 1. Framed Blueprint Solution Hero — Strictly 2 Buttons: Book a Demo + Lead Generation */}
      <InnerPageHero
        eyebrow={copy.solutionNumber || config.category}
        h1={copy.h1}
        subheading={shortenParagraph(copy.answerFirst)}
        backHref="/solutions"
        backLabel="Back to all Solutions"
        badges={[config.title]}
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <Button
            href={`/contact?solution=${encodeURIComponent(
              config.title
            )}&intent=demo&brief=${encodeURIComponent(
              `I would like to book a live demo for ${config.title}.`
            )}`}
            variant="orange"
            size="lg"
            withArrow
          >
            Book a Demo
          </Button>
          <Button
            href={`/contact?solution=${encodeURIComponent(
              config.title
            )}&intent=quote&brief=${encodeURIComponent(
              `Please prepare a tailored system scope, implementation timeline and proposal for ${config.title}.`
            )}`}
            variant="white"
            size="lg"
          >
            Get a Quote
          </Button>
        </div>
      </InnerPageHero>

      {/* 2A. Jasper-Style Split Section: The Business Challenge (Text Left + Portrait Right) */}
      <BusinessChallengeSplit
        heading="Operational friction we eliminate."
        problem={copy.problem}
        challenges={copy.challenges}
        whoItIsFor={copy.whoItIsFor || copy.isForYou?.yes}
        solutionTitle={config.title}
        portraitSrc={visuals.challengeImage}
        portraitAlt={visuals.challengeAlt}
      />

      {/* 2B. Jasper-Style Split Section: Business Value (Interactive UI Showcase Left + Boxed-Tick Outcomes Right) */}
      <section className="ns-section-default bg-[#F5F7FA] hairline-b">
        <div className="ns-container-large space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <BusinessValueShowcase
                title={config.title}
                category={copy.categoryGroup || config.category}
                outcomes={copy.whatYouGet}
                capabilities={stackModules.map((m) => m.title)}
                portraitSrc={visuals.valueImage}
                portraitAlt={visuals.valueAlt}
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <TextReveal className="space-y-3">
                <span className="inline-block rounded-none bg-[#EAF0FF] text-[#001B9B] font-mono text-xs font-bold px-2.5 py-1">
                  Business Value
                </span>
                <h2 className="ns-heading-h2 text-nis-navy">
                  {copy.whatYouGetHeading || "The value to your business"}
                </h2>
              </TextReveal>

              <ul data-animate="stagger-grid" className="space-y-5">
                {copy.whatYouGet.map((val, idx) => {
                  const candidateDesc =
                    stackModules[idx]?.desc ||
                    copy.whatWeDo[idx] ||
                    `Delivered with clear documentation, quality assurance and accountable support across Kenya.`;
                  const explanation =
                    candidateDesc.trim().toLowerCase() === val.trim().toLowerCase()
                      ? copy.whatWeDo[idx] ||
                        `Delivered with clear documentation, quality assurance and accountable support across Kenya.`
                      : candidateDesc;
                  return (
                    <li key={val} className="flex items-start gap-3.5">
                      <span className="w-6 h-6 bg-[#EAF0FF] border border-[#001B9B]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#001B9B]" />
                      </span>
                      <div className="space-y-1">
                        <div className="font-sans font-semibold text-base text-nis-navy leading-snug">
                          {val}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {explanation}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Jasper-Inspired Sticky Stacking Capability Deck */}
      <StackingSolutionCards
        eyebrow="Our Solution · What We Provide"
        heading={`How ${config.title} is scoped around your real environment.`}
        subtitle="Select or scroll through each capability module below—scoped individually or combined into one accountable project."
        modules={stackModules}
        ctaHref={`/contact?solution=${encodeURIComponent(config.title)}`}
        ctaLabel="Get a Quote"
      />

      {/* 4. Horizontal Scroll Delivery Timeline (Desktop Horizontal / Mobile Vertical) */}
      {copy.engagementSteps && copy.engagementSteps.length > 0 && (
        <HorizontalDeliveryTrack
          eyebrow="Transparent Delivery Process"
          heading={copy.engagementStepsHeading || "How we deliver"}
          subtitle="Clear stages from initial discovery through configuration, testing and ongoing support."
          steps={copy.engagementSteps}
        />
      )}

      <BasetenPatternDivider variant="blue" />

      {/* 9. Related Connected Solutions — Brand Blue Background */}
      {related.length > 0 && (
        <section className="relative overflow-hidden ns-section-medium bg-gradient-to-br from-[#001B9B] via-[#001684] to-[#001166] text-white hairline-b">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,240,255,0.14),transparent_55%)]"
          />
          <div className="relative z-10 ns-container-large space-y-6">
            <span className="inline-block rounded-none bg-white/15 border border-white/25 text-white font-mono text-xs font-medium px-2.5 py-1">
              Connected Capabilities
            </span>
            <h2 className="ns-heading-h3 text-white">
              Often paired with {config.title}
            </h2>
            <div
              data-animate="stagger-grid"
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {related.map((rel) => {
                const RelIcon = rel.icon;
                const relCopy = ALL_SOLUTION_COPY[rel.copyKey];
                return (
                  <Link
                    key={rel.canonicalSlug}
                    href={`/solutions/${rel.canonicalSlug}`}
                    className="group bg-white border border-white/20 hover:border-[#E6602C] p-6 flex flex-col justify-between space-y-4 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-[#E8EEFF] flex items-center justify-center text-[#001B9B] group-hover:bg-[#001B9B] group-hover:text-white transition-colors">
                        <RelIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-sans text-base font-semibold text-nis-navy group-hover:text-[#001B9B]">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {relCopy.answerFirst}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#001B9B] pt-3 border-t border-nis-navy/10">
                      <TextRoll>Explore solution</TextRoll>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E6602C] transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}

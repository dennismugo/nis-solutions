import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nileictsolutions.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Solution routes (10 Core Solutions + Enterprise Systems & 14 Modules)
  const solutionSlugs = [
    "it-consulting",
    "infrastructure-networking",
    "cybersecurity",
    "cctv-security-systems",
    "software-development",
    "web-mobile-applications",
    "website-development",
    "digital-marketing",
    "ict-equipment-supply",
    "office-setup-relocation",
    "core-banking",
    "insurance-management",
    "document-management",
    "enterprise-software",
    "automation",
    "school-management-learning-systems",
    "supermarket-pos-erp",
    "sacco-solutions-apps-api-gateway",
    "digital-account-opening",
    "credit-management-system",
    "debt-collection-system",
    "event-notification-systems",
    "real-estate-rental-management",
    "tours-travel-management-system",
    "whatsapp-banking-chatbots",
    "beneficiary-management-system",
    "customer-relationship-management-crm",
    "accounts-wallets-reconciliation",
    "business-reporting-system",
  ];
  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Dynamic Service routes
  const serviceSlugs = [
    "it-consulting",
    "ict-infrastructure-networking",
    "networking-cabling",
    "cybersecurity-it-support",
    "cybersecurity",
    "cctv-security",
    "managed-it-support",
    "enterprise-systems-software",
    "software-development",
    "digital-solutions",
    "web-mobile-apps",
    "website-development",
    "digital-marketing",
    "equipment-supply",
    "office-relocation",
    "business-technology-support",
  ];
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...solutionRoutes, ...serviceRoutes];
}

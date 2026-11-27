import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { PILLARS, SERVICES } from "@/data/services";
import {
  Network,
  ShieldCheck,
  Database,
  Globe,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PillarsSection() {
  const getIcon = (pillarId: string) => {
    switch (pillarId) {
      case "infrastructure":
        return <Network className="w-6 h-6 text-nis-blue" />;
      case "enterprise-systems":
        return <Database className="w-6 h-6 text-nis-blue" />;
      case "digital-solutions":
        return <Globe className="w-6 h-6 text-nis-orange" />;
      default:
        return <Headphones className="w-6 h-6 text-nis-orange" />;
    }
  };

  return (
    <section className="bg-nis-surface py-20 lg:py-28 border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Strategic Architecture"
            title="Four pillars engineered for operational resilience."
            subtitle="Rather than offering generic IT services, we organize our capabilities around the four core operational disciplines that modern organizations require to operate securely and scale."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-nis-blue hover:text-nis-orange transition-colors"
          >
            <span>Explore full services directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The 4 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            // Find services belonging to this pillar
            const relatedServices = SERVICES.filter(
              (s) => s.pillar === pillar.name
            );

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-nis-surface border border-gray-100 group-hover:bg-nis-blue/10 transition-colors">
                      {getIcon(pillar.id)}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-nis-navy group-hover:text-nis-blue transition-colors mb-3">
                    {pillar.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Capabilities Included:
                    </div>
                    {relatedServices.length > 0 ? (
                      relatedServices.map((srv) => (
                        <div key={srv.id} className="space-y-1.5">
                          <Link
                            href={`/services/${srv.slug}`}
                            className="text-xs font-bold text-nis-navy hover:text-nis-blue flex items-center gap-1.5 transition-colors"
                          >
                            <ArrowRight className="w-3.5 h-3.5 text-nis-orange" />
                            <span>{srv.title}</span>
                          </Link>
                          <div className="grid grid-cols-1 gap-1 pl-5">
                            {srv.capabilities.slice(0, 2).map((cap, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-gray-500 flex items-center gap-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-nis-blue" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-gray-500">
                        Consultative custom implementation tailored to corporate specifications.
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-nis-orange hover:text-nis-orange-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Request Pillar Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

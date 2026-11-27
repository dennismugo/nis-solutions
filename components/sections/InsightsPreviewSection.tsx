import React from "react";
import Link from "next/link";
import { INSIGHTS } from "@/data/insights";
import { ArrowRight } from "lucide-react";

export default function InsightsPreviewSection() {
  return (
    <section className="ns-section-default bg-white hairline-b">
      <div className="ns-container-large space-y-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[52.5rem] space-y-4">
            <h2 className="ns-heading-h2 text-nis-navy">
              Straight answers to technology questions.
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold text-sm text-nis-blue hover:text-nis-orange transition-colors shrink-0 group"
          >
            <span>Read all insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Jasper-style Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-nis-navy/15 divide-y md:divide-y-0 md:divide-x divide-nis-navy/15 bg-white">
          {INSIGHTS.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group p-7 sm:p-8 flex flex-col justify-between space-y-8 hover:bg-[#F5F7FA] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-nis-orange font-semibold">
                    {post.category}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="ns-heading-h6 text-nis-navy group-hover:text-nis-blue transition-colors">
                  {post.title}
                </h3>

                <p className="ns-text-small text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-nis-navy/15 flex items-center justify-between text-xs font-semibold text-nis-blue">
                <span>Read guide</span>
                <ArrowRight className="w-4 h-4 text-nis-orange transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

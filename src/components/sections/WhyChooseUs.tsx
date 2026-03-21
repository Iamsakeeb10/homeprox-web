"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, BarChart, Zap } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Swift scheduling and transparent communication throughout every project engagement.",
  },
  {
    icon: Award,
    title: "Superior Workmanship",
    description:
      "Expert execution with meticulous attention to detail and guaranteed lasting value.",
  },
  {
    icon: BarChart,
    title: "Scalable Services",
    description: "Flexible solutions available for individual properties through large-scale portfolios.",
  },
];

const stats = [
  { value: "10+ Years", label: "Experience" },
  { value: "500+ Properties", label: "Maintained" },
  { value: "Statewide", label: "Coverage" },
  { value: "Fully Insured", label: "Protection" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Partner With HomeProX"
            subtitle="Industry-leading maintenance with responsive team members, demonstrated quality outcomes, and complete professionalism."
            align="center"
            className="titleClassName text-white"
          />
        </AnimatedSection>

        {/* Feature Cards Grid — 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 h-full hover:bg-white/10 hover:border-teal/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      className="w-5 h-5 text-teal"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-surface-300">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Stats Row */}
        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 border-t border-white/15">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.value}>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-teal mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-surface-300 text-sm">
                    {stat.label}
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/15" />
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

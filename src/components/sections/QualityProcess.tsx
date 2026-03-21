"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Camera, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Complete Documentation",
    description: "Full photo and video documentation from beginning to end—initial assessment, progress tracking, and final verification—ensuring total transparency and complete accountability."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Verified Team Members",
    description: "Comprehensive screening procedures and certification validation guaranteeing only the most reliable, experienced professionals deliver HomeProX services on your properties."
  },
  {
    number: "03",
    icon: Bell,
    title: "Proactive Communication",
    description: "Regular touchpoints and status updates preceding, occurring during, and following all services—keeping you fully informed at every stage."
  }
];

export function QualityProcess() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Our Quality Assurance Process"
            subtitle="Three-stage approach designed to maintain peak standards on every property throughout Texas."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-teal/20 via-teal/60 to-teal/20" />

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.2}
              className="h-full"
            >
              <div className="relative bg-surface-50 border border-surface-200 rounded-2xl p-5 lg:p-6 text-center h-full flex flex-col hover:border-teal/30 hover:shadow-card transition-all duration-300">
                {/* Step Number Badge with Ping Effect */}
                <div className="relative w-14 h-14 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-teal/10 animate-ping opacity-30" />
                  <div className="relative w-14 h-14 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-teal">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <step.icon className="w-10 h-10 text-teal mx-auto mb-4" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-muted flex-grow">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

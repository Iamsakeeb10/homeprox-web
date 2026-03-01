"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Camera, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Detailed Documentation",
    description: "We provide before photos, progress documentation, and completion photos. This ensures transparency, accountability, and verifiable results."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Vendor & Team Screening",
    description: "We conduct thorough background checks and verify qualifications to ensure that only professional and trustworthy team members represent MEGAFIXX on your property."
  },
  {
    number: "03",
    icon: Bell,
    title: "Proactive Communication",
    description: "We notify stakeholders before service visits and provide status updates throughout the job lifecycle. Upon completion, we follow up to confirm satisfaction."
  }
];

export function QualityProcess() {
  return (
    <section className="py-20 lg:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Our Quality Assurance Process"
            subtitle="Maintaining high standards across Texas requires structured processes."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t border-gold/30" />

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.2}
              className="h-full"
            >
              <div className="relative bg-navy-950 border border-navy-700 rounded-xl p-8 text-center h-full flex flex-col">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-navy-950 font-display text-2xl font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <step.icon className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted flex-grow">
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

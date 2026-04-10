"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Camera, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Complete Documentation",
    description:
      "Full photo and video documentation from beginning to end—initial assessment, progress tracking, and final verification—ensuring total transparency and complete accountability.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Verified Team Members",
    description:
      "Comprehensive screening procedures and certification validation guaranteeing only the most reliable, experienced professionals deliver HomeProX services on your properties.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Proactive Communication",
    description:
      "Regular touchpoints and status updates preceding, occurring during, and following all services—keeping you fully informed at every stage.",
  },
];

export function QualityProcess() {
  return (
    <section className="pt-24 lg:pt-32 bg-surface-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-skyblue/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection variant="fadeUp">
          <div className="mb-12 lg:mb-16">
            <SectionHeading
              title="Our Quality Assurance Process"
              subtitle="Three-stage approach designed to maintain peak standards on every property throughout Texas."
              align="left"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <AnimatedSection variant="fadeUp" className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 rounded-3xl border border-surface-200 bg-white p-6 lg:p-7 shadow-card">
              <div className="inline-flex items-center rounded-full bg-teal/10 border border-teal/20 px-3 py-1.5 mb-4">
                <span className="font-accent text-xs tracking-[0.14em] text-teal uppercase">
                  Quality First
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                Structured Oversight at Every Stage
              </h3>
              <p className="font-body text-text-muted leading-relaxed">
                Every assignment follows the same accountability framework:
                transparent records, vetted professionals, and proactive client
                communication. The process scales cleanly from individual sites
                to large property portfolios.
              </p>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-8 relative">
            <div className="hidden lg:block absolute top-8 bottom-8 left-[2.1rem] w-px bg-gradient-to-b from-teal/20 via-teal/50 to-teal/20" />

            <div className="space-y-5 lg:space-y-6">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={step.number}
                  variant="fadeUp"
                  delay={index * 0.15}
                >
                  <div className="group relative flex items-start gap-4 lg:gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-full bg-teal/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-[4.2rem] h-[4.2rem] rounded-2xl border border-teal/30 bg-white flex flex-col items-center justify-center shadow-card">
                        <span className="font-display text-[0.72rem] font-semibold tracking-wider text-text-muted">
                          STEP
                        </span>
                        <span className="font-display text-xl font-bold text-teal leading-none">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-full rounded-2xl border border-surface-200 bg-white p-5 lg:p-6 shadow-card transition-all duration-300 group-hover:border-teal/35 group-hover:shadow-card-hover ${
                        index % 2 === 1 ? "lg:ml-6" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-teal/12 border border-teal/20 flex items-center justify-center shrink-0">
                          <step.icon
                            className="w-5 h-5 text-teal"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-xl lg:text-2xl font-bold text-charcoal mb-2">
                            {step.title}
                          </h3>
                          <p className="font-body text-text-muted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

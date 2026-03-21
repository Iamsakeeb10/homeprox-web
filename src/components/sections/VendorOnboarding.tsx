import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Submit Your Profile",
    description:
      "Share details about your organization, services, coverage areas, and qualifications.",
  },
  {
    number: "02",
    title: "Review & Assessment",
    description:
      "We evaluate your credentials, coverage requirements, previous experience, and qualifications.",
  },
  {
    number: "03",
    title: "Start Your Partnership",
    description:
      "Get approved and start receiving work in your selected areas that match your experience.",
  },
];

export default function VendorOnboarding() {
  return (
    <section className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Simple Three-Step Process"
            subtitle="From profile to first opportunity—quick and transparent"
            align="center"
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-teal/20 via-teal/60 to-teal/20"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimatedSection key={step.number} variant="fadeUp" delay={index * 0.15}>
              <div className="relative bg-white border border-surface-200 rounded-2xl shadow-card p-5 lg:p-6 text-center hover:border-teal/40 hover:shadow-card-hover transition-all duration-300">
                {/* Step Number with Ping Effect */}
                <div className="relative w-14 h-14 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-teal/10 animate-ping opacity-30" />
                  <div className="relative w-14 h-14 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-teal">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

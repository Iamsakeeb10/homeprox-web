import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Provide your company details, service types, coverage areas, and compliance documents.",
  },
  {
    number: "02",
    title: "Review & Approval",
    description:
      "Our team reviews your qualifications, insurance, experience, and service capabilities.",
  },
  {
    number: "03",
    title: "Start Receiving Work Orders",
    description:
      "Once approved, you'll begin receiving structured work assignments within your coverage area.",
  },
];

export default function VendorOnboarding() {
  return (
    <section className="py-20 lg:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="A Structured Path to Getting Work Orders"
            subtitle="Simple 3-step onboarding process"
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-surface-200"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimatedSection key={step.number} variant="fadeUp" delay={index * 0.15}>
              <div className="relative bg-white border border-surface-200 rounded-xl shadow-card p-8 text-center hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange text-white font-display text-xl font-bold mb-5 shadow-orange-glow">
                  {step.number}
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

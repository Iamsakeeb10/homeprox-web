import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const benefits = [
  {
    title: "Consistent Work Opportunities",
    description:
      "We provide steady work orders across property maintenance, turnovers, preservation, and exterior services.",
  },
  {
    title: "Fast & Transparent Payments",
    description:
      "Clear scope approvals, structured invoicing, and timely payments.",
  },
  {
    title: "Professional Work Environment",
    description:
      "Work within a system that values documentation, communication, and accountability.",
  },
  {
    title: "Statewide Coverage Opportunities",
    description:
      "Serve properties in your preferred service areas with scalable growth potential.",
  },
];

export default function VendorWhyPartner() {
  return (
    <>
      {/* Subtext strip */}
      <div className="bg-charcoal text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm sm:text-base text-center text-surface-300 tracking-wide">
            Serving Residential Portfolios&nbsp;•&nbsp;Investment
            Properties&nbsp;•&nbsp;Managed Communities&nbsp;•&nbsp;Institutional
            Assets
          </p>
        </div>
      </div>

      {/* Why partner section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Why Partner With MEGAFIXX?"
              subtitle="Built for Professionals. Designed for Growth."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-xl shadow-card p-6 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4">
                  <span className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const benefits = [
  {
    title: "Ongoing Assignments",
    description:
      "Consistent work orders covering maintenance, property turnovers, asset preservation, and yard services.",
  },
  {
    title: "Clear Payment Terms",
    description:
      "Detailed scope specifications, uncomplicated billing, and reliable payment processing.",
  },
  {
    title: "Professional Framework",
    description:
      "Collaborate with systems emphasizing thorough documentation, proactive engagement, and shared responsibility.",
  },
  {
    title: "Market Expansion",
    description:
      "Select service regions matching your capacity and grow your business across multiple areas.",
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
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Why Choose HomeProX"
              subtitle="Developed for professionals delivering excellent work."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-5 lg:p-6 hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4">
                  <span className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-teal" />
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

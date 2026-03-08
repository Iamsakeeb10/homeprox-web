import { CheckCircle2, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const required = [
  "Active General Liability Insurance",
  "Valid Identification & Business Registration",
  "Relevant Trade Experience",
  "Ability to provide Before/During/After Photo Documentation",
  "Reliable Communication & Timely Completion",
];

const preferred = [
  "Property Maintenance Experience",
  "Turnover or Preservation Background",
  "Multi-trade Capability",
];

export default function VendorRequirements() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="What We Look For in Vendors"
            subtitle="We partner with licensed and insured professionals who meet our service standards."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Required */}
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <div className="bg-white border border-surface-200 rounded-xl shadow-card p-8 h-full">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-orange inline-block" />
                Requirements
              </h3>
              <ul className="space-y-4">
                {required.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="font-body text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Preferred */}
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="bg-surface-50 border border-surface-200 rounded-xl shadow-card p-8 h-full">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-amber inline-block" />
                Preferred
              </h3>
              <ul className="space-y-4">
                {preferred.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber fill-amber mt-0.5 flex-shrink-0" />
                    <span className="font-body text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

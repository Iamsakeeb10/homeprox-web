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
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Vendor Partner Criteria"
            subtitle="We work with certified and bonded experts who deliver our quality standards."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Required */}
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-5 lg:p-6 h-full">
              <div className="h-1 w-full bg-gradient-to-r from-teal to-teal/20 rounded-t-2xl -mx-5 lg:-mx-6 -mt-5 lg:-mt-6 mb-6" />
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Requirements
              </h3>
              <ul className="space-y-4">
                {required.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <span className="font-body text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Preferred */}
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="bg-surface-50 border border-surface-200 rounded-2xl shadow-card p-5 lg:p-6 h-full">
              <div className="h-1 w-full bg-gradient-to-r from-skyblue to-skyblue/20 rounded-t-2xl -mx-5 lg:-mx-6 -mt-5 lg:-mt-6 mb-6" />
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Preferred
              </h3>
              <ul className="space-y-4">
                {preferred.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-skyblue fill-skyblue mt-0.5 flex-shrink-0" />
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

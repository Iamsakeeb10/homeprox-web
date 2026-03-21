import {
  Wrench,
  RefreshCcw,
  Leaf,
  Droplets,
  Trash2,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCategories = [
  { icon: Wrench, label: "General Property Maintenance" },
  { icon: RefreshCcw, label: "Rental Turnovers" },
  { icon: Leaf, label: "Landscaping & Exterior Work" },
  { icon: Droplets, label: "Minor Plumbing & Electrical" },
  { icon: Trash2, label: "Trash Outs & Cleanouts" },
  { icon: Shield, label: "Property Preservation" },
];

export default function VendorServices() {
  return (
    <section className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Available Work Categories"
            subtitle="Vendors can work in these areas based on qualifications."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={cat.label} variant="scaleIn" delay={index * 0.08} className="h-full">
                <div className="h-full min-h-[120px] bg-white border border-surface-200 rounded-2xl shadow-card p-5 lg:p-6 text-center hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="font-body text-sm font-medium text-charcoal leading-snug">
                    {cat.label}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

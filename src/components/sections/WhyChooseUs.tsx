"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Fast scheduling and clear communication from first request to completion.",
  },
  {
    icon: Award,
    title: "Superior Workmanship",
    description:
      "Consistent, professional outcomes backed by detailed execution standards.",
  },
];

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="py-20 lg:py-24 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Partner With HomeProX"
            subtitle="Industry-leading maintenance with responsive team members, demonstrated quality outcomes, and complete professionalism."
            align="center"
            className="text-white"
            titleClassName="text-white"
            subtitleClassName="text-surface-200"
          />
        </AnimatedSection>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-card">
            <div className="bg-gradient-to-r from-teal/10 via-white/0 to-white/0 p-6 lg:p-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-teal/20 rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Built for Long-Term Partnership
                  </h3>
                  <p className="font-body text-surface-200 text-sm lg:text-base max-w-3xl">
                    HomeProX combines rapid response, dependable workmanship,
                    and proactive communication to keep operations smooth across
                    single sites and growing portfolios.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 0, x: -20 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-teal" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-semibold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="font-body text-surface-300 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-white/10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="font-body text-surface-300 text-sm">
                  Need a dependable maintenance partner for your properties?
                </p>
                <Link
                  href="/contact?tab=quote"
                  className="inline-flex items-center gap-2 text-teal font-accent font-medium text-sm hover:text-teal-dark transition-colors duration-300"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

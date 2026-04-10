"use client";

import ClientOnboardingForm from "@/components/forms/ClientOnboardingForm";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";

const BENEFITS = [
  "Reliable Vendor Network",
  "Fast Response Times",
  "Work Order Transparency",
  "Photo Documentation",
  "Scalable Property Maintenance Solutions",
] as const;

export default function ClientsPageInteractive() {
  const [showForm, setShowForm] = useState(false);
  const formSectionRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = () => {
    if (showForm) {
      setShowForm(false);
      setTimeout(() => {
        ctaSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return;
    }

    setShowForm(true);
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleFormSuccess = () => {
    setTimeout(() => {
      setShowForm(false);
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        ctaSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 650);
    }, 2800);
  };

  return (
    <>
      {/* Ready to Partner CTA Banner */}
      <section className="py-20 lg:py-28 bg-surface-50 border-t-2 border-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              ref={ctaSectionRef}
              className="bg-surface-100 border border-teal/30 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Ready to Partner with HomeProX?
              </h2>
              <p className="font-body text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                At HomeProX Services LLC, our clients are at the center of
                everything we do. We are committed to exceeding expectations and
                delivering consistent, professional property maintenance
                services across Texas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a
                  href="tel:6822773555"
                  className="flex items-center gap-2 font-body text-charcoal hover:text-teal transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-teal" aria-hidden="true" />
                  (682) 277-3555
                </a>
                <a
                  href="mailto:info@homeproxsvcs.com"
                  className="flex items-center gap-2 font-body text-charcoal hover:text-teal transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-teal" aria-hidden="true" />
                  info@homeproxsvcs.com
                </a>
              </div>
              <Button variant="primary" size="lg" onClick={handleGetStarted}>
                {showForm ? "Close Application Form" : "Get Started"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conditional Client Onboarding Form Section */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            ref={formSectionRef}
            id="client-onboarding"
            className="scroll-mt-24"
            key="client-onboarding-form"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }
            }
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -40 }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* WHY PARTNER BENEFIT STRIP */}
            <div className="bg-charcoal py-10 lg:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {BENEFITS.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center gap-2"
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.25 + index * 0.07,
                        duration: 0.35,
                      }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-teal flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-white font-medium">
                        {benefit}
                      </span>
                      {index < BENEFITS.length - 1 && (
                        <span
                          className="hidden lg:block border-r border-white/20 h-4 ml-6"
                          aria-hidden="true"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* FORM SECTION */}
            <div className="bg-surface-50 py-20 lg:py-28">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <SectionHeading
                    title="Become a HomeProX Client"
                    subtitle="Partner with HomeProX for reliable property maintenance and field service support. Our team supports property managers, investors, asset managers, and organizations across residential and commercial portfolios."
                    align="center"
                  />
                </motion.div>

                {/* Form Card */}
                <motion.div
                  className="mt-10 bg-white rounded-2xl shadow-card border border-surface-200 p-8 sm:p-10"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <ClientOnboardingForm onSuccess={handleFormSuccess} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

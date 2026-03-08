"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "How quickly are vendors approved?",
    answer:
      "Approval timelines vary, but most qualified vendors receive a response within 5–10 business days.",
  },
  {
    question: "How are payments processed?",
    answer:
      "Payments are issued based on approved work orders and submitted documentation.",
  },
  {
    question: "Can I choose my coverage area?",
    answer: "Yes. Vendors select their preferred service areas during onboarding.",
  },
  {
    question: "Do you guarantee work volume?",
    answer:
      "Work volume depends on service demand and performance consistency.",
  },
];

export default function VendorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions from prospective vendor partners."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.question} variant="fadeUp" delay={index * 0.08}>
              <div className="border border-surface-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-surface-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-base font-semibold text-charcoal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

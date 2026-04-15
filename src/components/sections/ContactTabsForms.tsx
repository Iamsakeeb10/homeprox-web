"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { useEffect, useState } from "react";

type ContactTab = "contact" | "quote";

interface ContactTabsFormsProps {
  initialTab: ContactTab;
}

const TAB_STYLES =
  "rounded-full px-5 py-2.5 font-accent text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal/40";

export function ContactTabsForms({ initialTab }: ContactTabsFormsProps) {
  const [activeTab, setActiveTab] = useState<ContactTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-surface-200 bg-white p-3">
        <button
          type="button"
          onClick={() => setActiveTab("contact")}
          className={`${TAB_STYLES} ${
            activeTab === "contact"
              ? "bg-teal text-white shadow-sm"
              : "bg-surface-50 text-charcoal hover:bg-surface-100"
          }`}
          aria-pressed={activeTab === "contact"}
        >
          Contact
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("quote")}
          className={`${TAB_STYLES} ${
            activeTab === "quote"
              ? "bg-teal text-white shadow-sm"
              : "bg-surface-50 text-charcoal hover:bg-surface-100"
          }`}
          aria-pressed={activeTab === "quote"}
        >
          Get a Quote
        </button>
      </div>

      <div className="bg-surface-50 rounded-2xl p-10 md:p-14 border border-surface-200">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2 text-center">
          {activeTab === "contact" ? "Send us a Message" : "Request a Quote"}
        </h2>
        <p className="font-body text-text-muted text-center mb-10">
          {activeTab === "contact"
            ? "Have questions? Fill out the form below and we'll get back to you shortly."
            : "Tell us about your property needs and our team will follow up within 24 hours."}
        </p>

        {activeTab === "contact" ? <ContactForm /> : <QuoteForm />}
      </div>
    </div>
  );
}

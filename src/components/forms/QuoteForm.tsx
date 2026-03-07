"use client";

import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { validateForm } from "@/lib/utils/formValidation";
import { ContactFormData } from "@/types";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const propertyTypes = [
  "Residential",
  "Commercial",
  "Multi-Unit",
  "REO/Bank Owned",
  "Other"
];

export function QuoteForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceNeeded: "",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsSuccess(true)
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          propertyType: '',
          serviceNeeded: '',
          location: '',
          message: '',
        })
        setErrors({})
      } else {
        setSubmitError(data.error || 'Something went wrong. Please call us directly at (469) 378-9262.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection or call us at (469) 378-9262.')
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success Message */}
      {isSuccess && (
        <div
          className="bg-blue/10 border border-blue/30 rounded-lg p-4 text-blue"
          role="alert"
          aria-live="polite"
        >
          <div>
            <h3 className="font-display text-lg font-bold mb-2">Thank you!</h3>
            <p className="font-body">
              We&apos;ll be in touch within 24 hours. Our team at MEGAFIXX Home Services LLC will review your request and contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error Summary (Screen Reader Only) */}
      {Object.keys(errors).length > 0 && (
        <div className="sr-only" role="alert" aria-live="polite">
          Please correct the errors in the form.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block font-body text-sm font-medium text-navy mb-2">
          Full Name <span className="text-blue">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.fullName ? "border-error" : "border-surface-200"
          } rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300`}
          placeholder="John Doe"
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-error" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block font-body text-sm font-medium text-navy mb-2">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
          placeholder="ABC Property Management"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-body text-sm font-medium text-navy mb-2">
          Email Address <span className="text-blue">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.email ? "border-error" : "border-surface-200"
          } rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300`}
          placeholder="john@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-body text-sm font-medium text-navy mb-2">
          Phone Number <span className="text-blue">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.phone ? "border-error" : "border-surface-200"
          } rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300`}
          placeholder="(469) 555-1234"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="propertyType" className="block font-body text-sm font-medium text-navy mb-2">
          Property Type <span className="text-blue">*</span>
        </label>
        <div className="relative">
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`w-full px-4 py-3 pr-10 bg-white border ${
              errors.propertyType ? "border-error" : "border-surface-200"
            } rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 appearance-none cursor-pointer`}
            aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
            aria-invalid={errors.propertyType ? "true" : "false"}
          >
            <option value="" disabled>Select Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type} className="bg-white">
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
            aria-hidden="true"
          />
        </div>
        {errors.propertyType && (
          <p id="propertyType-error" className="mt-1 text-sm text-error" role="alert">
            {errors.propertyType}
          </p>
        )}
      </div>

      {/* Service Needed */}
      <div>
        <label htmlFor="serviceNeeded" className="block font-body text-sm font-medium text-navy mb-2">
          Service Needed <span className="text-blue">*</span>
        </label>
        <div className="relative">
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={handleChange}
            className={`w-full px-4 py-3 pr-10 bg-white border ${
              errors.serviceNeeded ? "border-error" : "border-surface-200"
            } rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 appearance-none cursor-pointer`}
            aria-describedby={errors.serviceNeeded ? "serviceNeeded-error" : undefined}
            aria-invalid={errors.serviceNeeded ? "true" : "false"}
          >
            <option value="" disabled>Select a Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title} className="bg-white">
                {service.title}
              </option>
            ))}
            <option value="Multiple Services" className="bg-white">
              Multiple Services
            </option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
            aria-hidden="true"
          />
        </div>
        {errors.serviceNeeded && (
          <p id="serviceNeeded-error" className="mt-1 text-sm text-error" role="alert">
            {errors.serviceNeeded}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block font-body text-sm font-medium text-navy mb-2">
          Property Location / City, TX <span className="text-blue">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.location ? "border-error" : "border-surface-200"
          } rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300`}
          placeholder="Dallas, TX"
          aria-describedby={errors.location ? "location-error" : undefined}
          aria-invalid={errors.location ? "true" : "false"}
        />
        {errors.location && (
          <p id="location-error" className="mt-1 text-sm text-error" role="alert">
            {errors.location}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-navy mb-2">
          Message / Project Details <span className="text-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-white border ${
            errors.message ? "border-error" : "border-surface-200"
          } rounded-lg text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 resize-none`}
          placeholder="Tell us about your property maintenance needs..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        Send Request
      </Button>
      {submitError && (
        <p className="text-error text-sm text-center mt-2" role="alert">{submitError}</p>
      )}
    </form>
  );
}

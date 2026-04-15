"use client";

import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Loader2,
  Send,
  Upload,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

const INQUIRY_OPTIONS: { value: string; label: string; disabled?: boolean }[] =
  [
    { value: "", label: "Select an option...", disabled: true },
    { value: "maintenance", label: "Property Maintenance Service" },
    { value: "client", label: "Client Partnership" },
    { value: "vendor", label: "Vendor Application" },
    { value: "inquiry", label: "General Inquiry" },
    { value: "support", label: "Support" },
  ];

type InquiryValue = string;

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryValue;
  message: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
  agreeToTerms?: string;
  attachments?: string;
}

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const inputBase =
  "bg-surface-50 border border-surface-200 rounded-lg px-4 py-3 font-body text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors duration-200 w-full";
const inputError = "border-error focus:ring-error/30";
const labelBase =
  "block font-accent text-sm font-semibold text-charcoal mb-1.5";

function getServiceNeededLabel(value: InquiryValue): string {
  const option = INQUIRY_OPTIONS.find((o) => o.value === value);
  return option && option.label ? option.label : "";
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.inquiryType) e.inquiryType = "Please select an inquiry type.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    if (!form.agreeToTerms)
      e.agreeToTerms = "You must agree to the Terms and Conditions to submit.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const addAttachments = (newFiles: File[]) => {
    const oversized = newFiles.filter((f) => f.size > MAX_FILE_BYTES);
    if (oversized.length > 0) {
      setErrors((prev) => ({
        ...prev,
        attachments: `Some files exceed the 10 MB limit: ${oversized.map((f) => f.name).join(", ")}`,
      }));
      return;
    }
    setErrors((prev) => ({ ...prev, attachments: undefined }));
    setAttachments((prev) => [...prev, ...newFiles]);
    setSubmitError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    addAttachments(newFiles);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    addAttachments(droppedFiles);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => ({ ...prev, attachments: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsLoading(true);
    try {
      const payload = new FormData();
      payload.append("fullName", form.name.trim());
      payload.append("companyName", "");
      payload.append("email", form.email.trim());
      payload.append("phone", form.phone.trim() || "");
      payload.append("propertyType", "");
      payload.append("serviceNeeded", getServiceNeededLabel(form.inquiryType));
      payload.append("location", "");
      payload.append("message", form.message.trim());
      payload.append("agreeToTerms", String(form.agreeToTerms));
      payload.append("formSource", "contact");
      attachments.forEach((file, i) => {
        payload.append(`attachment_${i}`, file, file.name);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setSubmitError(
          data?.error ?? "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitError("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-teal-muted flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-teal" size={32} />
        </div>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
          Message Sent!
        </h3>
        <p className="font-body text-text-muted max-w-sm mx-auto">
          Thank you for reaching out. Our team will respond within 1 business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="contact-name" className={labelBase}>
          Name
          <span className="text-teal ml-0.5" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? inputError : ""}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p
            id="contact-name-error"
            className="mt-1.5 text-sm text-error font-body"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelBase}>
          Email
          <span className="text-teal ml-0.5" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`${inputBase} ${errors.email ? inputError : ""}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          suppressHydrationWarning
        />
        {errors.email && (
          <p
            id="contact-email-error"
            className="mt-1.5 text-sm text-error font-body"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelBase}>
          Phone <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="contact-inquiryType" className={labelBase}>
          What can we help you with?
          <span className="text-teal ml-0.5" aria-hidden="true">
            *
          </span>
        </label>
        <div className="relative">
          <select
            id="contact-inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className={`${inputBase} appearance-none pr-10 ${errors.inquiryType ? inputError : ""}`}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={
              errors.inquiryType ? "contact-inquiryType-error" : undefined
            }
          >
            {INQUIRY_OPTIONS.map((opt) => (
              <option
                key={opt.value || "empty"}
                value={opt.value}
                disabled={opt.disabled === true}
              >
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted"
            size={20}
            aria-hidden
          />
        </div>
        {errors.inquiryType && (
          <p
            id="contact-inquiryType-error"
            className="mt-1.5 text-sm text-error font-body"
            role="alert"
          >
            {errors.inquiryType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Message
          <span className="text-teal ml-0.5" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Please tell us how we can assist you."
          className={`${inputBase} resize-y min-h-[120px] ${errors.message ? inputError : ""}`}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="mt-1.5 text-sm text-error font-body"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className={labelBase}>
          Attachments{" "}
          <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <div
          role="button"
          tabIndex={0}
          className="border-2 border-dashed border-surface-300 rounded-xl p-6 text-center hover:border-teal/50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-muted flex items-center justify-center">
              <Upload className="w-5 h-5 text-teal" />
            </div>
            <div>
              <p className="font-body font-medium text-charcoal">
                Click to upload or drag &amp; drop files
              </p>
              <p className="font-body text-sm text-text-muted mt-1">
                PDF, JPG, PNG - up to 10 MB per file
              </p>
            </div>
          </div>
        </div>

        {attachments.length > 0 && (
          <ul className="space-y-2 mt-3">
            {attachments.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between bg-surface-50 border border-surface-200 rounded-lg px-4 py-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-body text-sm text-charcoal truncate">
                    {file.name}
                  </span>
                  <span className="font-body text-xs text-text-muted shrink-0">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  className="ml-3 text-text-muted hover:text-error transition-colors shrink-0"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
        {errors.attachments && (
          <p className="mt-1.5 text-sm text-error font-body" role="alert">
            {errors.attachments}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="contact-agreeToTerms"
            name="agreeToTerms"
            checked={form.agreeToTerms}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-surface-300 text-teal focus:ring-teal focus:ring-offset-0 cursor-pointer"
            aria-describedby={
              errors.agreeToTerms ? "contact-agreeToTerms-error" : undefined
            }
            aria-invalid={errors.agreeToTerms ? "true" : "false"}
          />
          <label
            htmlFor="contact-agreeToTerms"
            className="font-body text-sm text-charcoal cursor-pointer"
          >
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-teal hover:text-teal-dark underline underline-offset-2"
            >
              Terms and Conditions
            </Link>{" "}
            provided by the company. By providing my phone number, I agree to
            receive text messages from HomeProX Services LLC.
          </label>
        </div>
        {errors.agreeToTerms && (
          <p
            id="contact-agreeToTerms-error"
            className="mt-1.5 text-sm text-error font-body"
            role="alert"
          >
            {errors.agreeToTerms}
          </p>
        )}
      </div>

      {submitError && (
        <p
          className="text-sm text-error font-body"
          role="alert"
          aria-live="polite"
        >
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="w-4 h-4" aria-hidden="true" />
        )}
        Send Message
      </Button>
    </form>
  );
}

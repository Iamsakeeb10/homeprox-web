import { ContactFormData } from "@/types";

export function validateEmail(email: string): { valid: boolean; message: string } {
  if (!email.trim()) {
    return { valid: false, message: "Email address is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address" };
  }

  return { valid: true, message: "" };
}

export function validatePhone(phone: string): { valid: boolean; message: string } {
  if (!phone.trim()) {
    return { valid: false, message: "Phone number is required" };
  }

  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, "");
  
  // Check if it has 10 digits (US phone number format)
  if (digitsOnly.length < 10) {
    return { valid: false, message: "Please enter a valid phone number" };
  }

  return { valid: true, message: "" };
}

export function validateRequired(value: string, fieldName: string): { valid: boolean; message: string } {
  if (!value.trim()) {
    return { valid: false, message: `${fieldName} is required` };
  }

  return { valid: true, message: "" };
}

export function validateForm(formData: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  // Full Name
  const fullNameValidation = validateRequired(formData.fullName, "Full name");
  if (!fullNameValidation.valid) {
    errors.fullName = fullNameValidation.message;
  }

  // Email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.message;
  }

  // Phone
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.valid) {
    errors.phone = phoneValidation.message;
  }

  // Property Type
  const propertyTypeValidation = validateRequired(formData.propertyType, "Property type");
  if (!propertyTypeValidation.valid) {
    errors.propertyType = propertyTypeValidation.message;
  }

  // Service Needed
  const serviceNeededValidation = validateRequired(formData.serviceNeeded, "Service needed");
  if (!serviceNeededValidation.valid) {
    errors.serviceNeeded = serviceNeededValidation.message;
  }

  // Location
  const locationValidation = validateRequired(formData.location, "Property location");
  if (!locationValidation.valid) {
    errors.location = locationValidation.message;
  }

  // Message
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  // Terms and Conditions
  if (!formData.agreeToTerms) {
    errors.agreeToTerms = "You must agree to the Terms and Conditions to submit.";
  }

  return errors;
}

# MEGAFIXX Nodemailer Integration Documentation

## Overview

This document provides a comprehensive guide to how **nodemailer** is integrated throughout the MEGAFIXX application to handle email sending for three primary workflows:

1. **Contact Form** - General inquiries and customer messages
2. **Quote Form** - Service quote requests from potential clients
3. **Vendor Application** - Vendor onboarding and applications

---

## Environment Configuration

The email system is powered by Gmail's SMTP server. All credentials are stored in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://megafixxhomeservices.com
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=client@megafixxhomeservices.com
EMAIL_PASS=MegaFixx@2025
CONTACT_EMAIL=client@megafixxhomeservices.com
```

### Environment Variables Breakdown

| Variable | Purpose | Value |
|----------|---------|-------|
| `EMAIL_HOST` | SMTP server host | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port for secure connection | `465` |
| `EMAIL_USER` | Gmail account email for sending | `client@megafixxhomeservices.com` |
| `EMAIL_PASS` | Gmail app-specific password | `MegaFixx@2025` |
| `CONTACT_EMAIL` | Default recipient for all form submissions | `client@megafixxhomeservices.com` |
| `NEXT_PUBLIC_SITE_URL` | Application's public URL | `https://megafixxhomeservices.com` |

> **Note:** `NEXT_PUBLIC_SITE_URL` is prefixed with `NEXT_PUBLIC_` making it available in the browser, while email credentials remain server-side only.

---

## Nodemailer Transporter Setup

### File: `src/lib/utils/mailer.ts`

```typescript
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

**Configuration Details:**

- **Host:** `smtp.gmail.com` - Google's SMTP server
- **Port:** `465` - Secure SSL/TLS connection
- **Secure:** `true` - Enables SSL encryption (required for port 465)
- **Authentication:** Uses Gmail credentials from environment variables

This transporter is imported and reused across all API routes for consistent email delivery.

---

## API Routes & Email Workflows

### 1. Contact Form - `/api/contact`

**File:** `src/app/api/contact/route.ts`

#### Triggered By
- Contact page form submission (`src/components/forms/ContactForm.tsx`)
- Quote page form submission (`src/components/forms/QuoteForm.tsx`)
- Client onboarding form (identified via `formSource` parameter)

#### Form Data Structure

```typescript
interface ContactFormData {
  fullName: string
  companyName?: string
  email: string
  phone: string
  propertyType: string
  serviceNeeded: string
  location: string
  message: string
  agreeToTerms: boolean
  formSource: 'contact' | 'quote' | 'client-onboarding'
}
```

#### Email Flow

**1. OWNER NOTIFICATION EMAIL**
- **Recipient:** `process.env.CONTACT_EMAIL` (client@megafixxhomeservices.com)
- **From:** `"MEGAFIXX Website" <client@megafixxhomeservices.com>`
- **Subject:** Dynamic based on form type:
  - Contact: `"New Contact Message from {fullName}"`
  - Quote: `"New Quote Request from {fullName}"`
  - Client Onboarding: `"New Client Application from {fullName} — {companyName}"`

**Email Content:**
- Company branding header with tan/beige theme (#F5EFE0, #C89B3C)
- Contact person details (name, email, phone, company)
- Form submission details based on type
- Message or project details in highlighted section

**2. CLIENT CONFIRMATION EMAIL**
- **Recipient:** User's email address (from form submission)
- **From:** `"MEGAFIXX Home Services LLC" <client@megafixxhomeservices.com>`
- **Subject:** Dynamic based on form type:
  - Contact: `"We received your message — MEGAFIXX Home Services LLC"`
  - Quote: `"We received your request — MEGAFIXX Home Services LLC"`
  - Client Onboarding: `"We received your MEGAFIXX client application"`

**Email Content:**
- Personalized greeting with user's first name
- Confirmation of submission type
- Summary of their request
- Contact information for urgent inquiries:
  - Phone: `(469) 378-9262`
  - Email: `info@megafixxx.com`
- 24-hour response guarantee

#### Implementation Details

```typescript
// 1. Validate required fields
if (!fullName || !email || !phone || !serviceNeeded) {
  return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 })
}

// 2. Determine form type
const isContactForm = formSource === 'contact'
const isClientOnboarding = formSource === 'client-onboarding'

// 3. Build dynamic subject and content based on type
const ownerSubject = isClientOnboarding
  ? `New Client Application from ${fullName} — ${companyName || 'Unknown Company'}`
  : isContactForm
  ? `New Contact Message from ${fullName}`
  : `New Quote Request from ${fullName}`

// 4. Send owner notification
await transporter.sendMail({
  from: `"MEGAFIXX Website" <${process.env.EMAIL_USER}>`,
  to: process.env.CONTACT_EMAIL,
  subject: ownerSubject,
  html: /* formatted HTML */
})

// 5. Send client confirmation
await transporter.sendMail({
  from: `"MEGAFIXX Home Services LLC" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: clientSubject,
  html: /* formatted HTML */
})
```

---

### 2. Vendor Application - `/api/vendor`

**File:** `src/app/api/vendor/route.ts`

#### Triggered By
- Vendor application form submission
- Handles multipart/form-data with file attachments
- Used by vendor registration page (`src/app/api/vendor/route.ts`)

#### Form Data Structure

```typescript
{
  companyName: string      // Required
  contactPerson: string    // Required
  phone: string           // Required
  email: string           // Required
  website?: string        // Optional
  yearsInBusiness: string
  serviceCategories: string
  coverageAreas: string
  serviceRadius: string
  attachment_0?: File     // Optional file uploads
  attachment_1?: File
  // ... more attachments as needed
}
```

#### File Attachment Handling

- **Max file size per attachment:** 10 MB (10,485,760 bytes)
- **Number of attachments:** Unlimited (dynamically parsed)
- **Supported formats:** Any file type

```typescript
const MAX_FILE_BYTES = 10 * 1024 * 1024

// Extract attachments from FormData
const attachments: nodemailer.SendMailOptions['attachments'] = []
let i = 0
while (data.get(`attachment_${i}`)) {
  const file = data.get(`attachment_${i}`) as File
  if (file && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: `File "${file.name}" exceeds the 10 MB size limit.` },
        { status: 400 }
      )
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    attachments.push({
      filename: file.name,
      content: buffer,
      contentType: file.type,
    })
  }
  i++
}
```

#### Email Delivery

- **Recipient:** `process.env.CONTACT_EMAIL`
- **From:** `"MEGAFIXX Vendor Portal" <client@megafixxhomeservices.com>`
- **ReplyTo:** Vendor's email (allows direct response)
- **Subject:** `New Vendor Application — {companyName}`
- **Attachments:** All uploaded files included in email

#### Email Template

**Header Section (Dark Theme #1C1C1E):**
- Title: "New Vendor Application"
- Subtitle: "MEGAFIXX Property Maintenance Network" (Orange accent #E8621A)

**Content Section (Light Background #f9f9f9):**

**Company Information Table:**
- Company Name
- Contact Person
- Phone
- Email (clickable mailto link)
- Website (or "—" if not provided)
- Years in Business

**Services & Coverage Table:**
- Service Categories
- Coverage Areas
- Service Radius

**Attachments Section:**
- Lists all attached files with count and filenames
- Shows "No files uploaded." if empty

---

## Form Components

### Contact Form

**File:** `src/components/forms/ContactForm.tsx`

#### Form Fields
- **Name** (required)
- **Email** (required, validated)
- **Phone** (optional)
- **Inquiry Type** (required, dropdown with options):
  - Property Maintenance Service
  - Client Partnership
  - Vendor Application
  - General Inquiry
  - Support
- **Message** (required, min 10 characters)
- **Terms & Conditions** (required checkbox)

#### Client-side Validation
```typescript
const validate = (): boolean => {
  const e: FormErrors = {}
  if (!form.name.trim()) e.name = "Name is required."
  if (!form.email.trim()) e.email = "Email is required."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = "Please enter a valid email address."
  if (!form.inquiryType) e.inquiryType = "Please select an inquiry type."
  if (!form.message.trim()) e.message = "Message is required."
  else if (form.message.trim().length < 10)
    e.message = "Message must be at least 10 characters."
  if (!form.agreeToTerms) e.agreeToTerms = "You must agree to the Terms and Conditions."
  return Object.keys(e).length === 0
}
```

#### Form Submission

```typescript
const payload = {
  fullName: form.name.trim(),
  companyName: "",
  email: form.email.trim(),
  phone: form.phone.trim() || "",
  propertyType: "",
  serviceNeeded: getServiceNeededLabel(form.inquiryType),
  location: "",
  message: form.message.trim(),
  agreeToTerms: form.agreeToTerms,
  formSource: "contact" as const,
}

const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
})
```

#### User Feedback
- **Success:** "Message Sent!" confirmation with icon
- **Error:** Displays error message with option to retry
- **Loading:** Button shows loading spinner during submission

---

### Quote Form

**File:** `src/components/forms/QuoteForm.tsx`

#### Form Fields
- **Full Name** (required)
- **Company Name** (optional)
- **Email** (required, validated)
- **Phone** (required)
- **Property Type** (required, dropdown):
  - Residential
  - Commercial
  - Multi-Unit
  - REO/Bank Owned
  - Other
- **Service Needed** (required, populated from `services.ts`)
- **Location** (required, e.g., "Dallas, TX")
- **Message / Project Details** (required)
- **Terms & Conditions** (required checkbox)

#### Form Validation

Uses centralized `validateForm()` utility from `src/lib/utils/formValidation`:
```typescript
const validationErrors = validateForm(formData)
if (Object.keys(validationErrors).length > 0) {
  setErrors(validationErrors)
  return
}
```

#### Form Submission

```typescript
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    ...formData,
    formSource: "quote"  // Identifies form type
  }),
})
```

#### User Feedback
- **Success:** Success message with 24-hour response guarantee
- **Error:** Displays error with fallback phone number `(469) 378-9262`
- **Network Error:** Shows network error with phone fallback

---

## Data Flow Diagrams

### Contact Form Email Flow

```
┌─────────────────────────┐
│  Contact Form Component │
│  (ContactForm.tsx)      │
└────────┬────────────────┘
         │ Submit (POST)
         ▼
┌─────────────────────────┐
│  Client-side Validation │
│  - Required fields      │
│  - Email format         │
│  - Message length       │
└────────┬────────────────┘
         │ Valid? Continue
         ▼
┌─────────────────────────────────┐
│  POST /api/contact              │
│  - Parse request body (JSON)    │
│  - Extract form fields          │
│  - Set formSource: "contact"    │
└────────┬────────────────────────┘
         │
         ├──────────────────────────┐
         │                          │
         ▼                          ▼
    ┌────────────────────┐  ┌──────────────────────┐
    │ Owner Notification │  │ Client Confirmation  │
    │ Email              │  │ Email                │
    │ To: CONTACT_EMAIL  │  │ To: user@email.com   │
    │ - Form Details     │  │ - Greeting           │
    │ - Message          │  │ - Summary            │
    │ - Contact Info     │  │ - 24hr Guarantee     │
    └────────┬───────────┘  └──────────┬───────────┘
             │                         │
             └────────┬────────────────┘
                      │
                      ▼
             ┌─────────────────────┐
             │  Nodemailer (Gmail) │
             │  SMTP: smtp.gmail.com
             │  Port: 465 (SSL)    │
             └─────────────────────┘
```

### Vendor Application Email Flow

```
┌──────────────────────────┐
│  Vendor Form Submission  │
│  (multipart/form-data)   │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Validate Form Fields        │
│  - Company Name              │
│  - Contact Person            │
│  - Email & Phone             │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Process File Attachments    │
│  - Check size (<10MB each)   │
│  - Convert to Buffer         │
│  - Collect in array          │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Build Email HTML            │
│  - Format company info       │
│  - Format services & coverage│
│  - List attachments          │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Send via Nodemailer         │
│  - From: MEGAFIXX Portal     │
│  - To: CONTACT_EMAIL         │
│  - ReplyTo: vendor's email   │
│  - Attachments: files[]      │
└──────────────────────────────┘
```

---

## Error Handling & Validation

### Server-side Validation

#### Contact API
```typescript
if (!fullName || !email || !phone || !serviceNeeded) {
  return NextResponse.json(
    { error: 'Required fields are missing.' },
    { status: 400 }
  )
}

// Check environment variables
if (!toAddress || !process.env.EMAIL_USER) {
  console.error("[/api/contact] Missing env: CONTACT_EMAIL or EMAIL_USER")
  return NextResponse.json(
    { error: 'Server email configuration is missing.' },
    { status: 500 }
  )
}
```

#### Vendor API
```typescript
// Basic required fields check
if (!companyName || !contactPerson || !email || !phone) {
  return NextResponse.json(
    { error: 'Required fields are missing.' },
    { status: 400 }
  )
}

// File size validation
if (file.size > MAX_FILE_BYTES) {
  return NextResponse.json(
    { error: `File "${file.name}" exceeds the 10 MB size limit.` },
    { status: 400 }
  )
}
```

### Error Recovery

```typescript
try {
  // ... email sending logic
  await transporter.sendMail({ /* ... */ })
  return NextResponse.json({ success: true }, { status: 200 })
} catch (error) {
  console.error('[/api/contact] Error:', error)
  return NextResponse.json(
    { error: 'Internal server error. Please try again later.' },
    { status: 500 }
  )
}
```

---

## Email Templates & Styling

### Color Scheme for Emails

**Contact/Quote Emails:**
- Primary Background: `#F5EFE0` (Light Tan)
- Accent Color: `#C89B3C` (Gold/Brown)
- Text Color: `#7A6A52` (Muted Brown)
- Primary Text: `#1C1410` (Dark Brown)

**Vendor Emails:**
- Primary Background: `#1C1C1E` (Dark Gray)
- Accent Color: `#E8621A` (Orange)
- Secondary Background: `#f9f9f9` (Light Gray)
- Text Color: `#71717a` (Medium Gray)

### HTML Email Structure

All emails follow a consistent structure:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <!-- Header Section -->
  <div style="background: [COLOR]; padding: 24px; text-align: center;">
    <h1 style="color: [TEXT]; margin: 0;">[TITLE]</h1>
    <p style="color: [ACCENT]; margin: 8px 0 0;">[SUBTITLE]</p>
  </div>

  <!-- Content Section -->
  <div style="background: [BACKGROUND]; padding: 32px;">
    <!-- Dynamic content based on form type -->
    <table style="width: 100%; border-collapse: collapse;">
      <!-- Field rows -->
    </table>
    <!-- Message section -->
  </div>

  <!-- Footer Section -->
  <div style="background: [COLOR]; padding: 16px; text-align: center;">
    <p style="color: [TEXT]; margin: 0; font-size: 12px;">MEGAFIXX Home Services LLC</p>
  </div>
</div>
```

---

## Debugging & Logging

### Console Logs

```typescript
// Successful vendor application email
console.log(`[/api/vendor] Vendor application email sent to ${toAddress} (${companyName})`)

// Email errors
console.error("[/api/vendor] Error:", error)
console.error('[Email send error:', error)

// Configuration issues
console.error("[/api/contact] Missing env: CONTACT_EMAIL or EMAIL_USER")
```

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| "Failed to send email" | Missing env vars | Verify `.env.local` has all required variables |
| "Invalid login credentials" | Wrong password/email | Use app-specific password for Gmail (not account password) |
| "EHLO failed" | Network/firewall issue | Check internet connection, firewall rules |
| "Email not delivered" | Recipient marked as spam | Check spam folder, verify recipient email |
| "File attachment failed" | File size >10MB | Reduce file size or increase MAX_FILE_BYTES |

---

## Security Considerations

1. **Environment Variables:** All credentials stored in `.env.local` (not committed to git)
2. **App-Specific Passwords:** Gmail requires app-specific password, not account password
3. **Server-side Processing:** File handling and email sending done server-side only
4. **No Sensitive Data in Emails:** User emails contain summaries only
5. **HTTPS Requirement:** `NEXT_PUBLIC_SITE_URL` should be HTTPS in production
6. **Form Validation:** Both client-side and server-side validation prevent injection attacks

---

## Future Improvements

1. **Email Templates:** Consider using email template engine (mjml, handlebars)
2. **Queue System:** Implement job queue for async email processing
3. **Rate Limiting:** Add rate limiting to prevent abuse
4. **Email Verification:** Add email verification step for contact/quote forms
5. **Logging Database:** Store email logs in database for auditing
6. **Retry Logic:** Implement exponential backoff for failed emails
7. **Email Analytics:** Track open rates and click-through rates
8. **Webhook Handlers:** Add webhook handlers for bounce/complaint management

---

## Summary

The MEGAFIXX email system is a well-integrated solution using:

- **Nodemailer** for SMTP email delivery via Gmail
- **Environment-based configuration** for secure credential management
- **Three primary workflows**: Contact forms, Quote requests, and Vendor applications
- **Dual email delivery**: Notifications to admin + confirmations to users
- **File attachment support**: Up to 10MB per file for vendor applications
- **Professional HTML templates** with brand-consistent styling
- **Comprehensive error handling** and logging

All email workflows are initiated through Next.js API routes (`/api/contact` and `/api/vendor`), ensuring secure server-side processing with validated client submissions.

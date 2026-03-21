## Form Submission Flows (HomeProX)

This document explains **how each form submits data**, **where the request goes**, and **what happens on the server**.

---

## 1. Quote Form

- **Component**: `QuoteForm` (`src/components/forms/QuoteForm.tsx`)  
- **Used on page**: `Get a Quote` page (`src/app/quote/page.tsx`)  
- **Endpoint**: `POST /api/contact` (`src/app/api/contact/route.ts`)  
- **Payload type**: `ContactFormData` (`src/types/index.ts`)

### 1.1. Client-side flow

- The form state is held in `formData` (a `ContactFormData` object with `formSource: "quote"`).
- On submit (`handleSubmit` in `QuoteForm`):
  - It runs `validateForm(formData)` from `src/lib/utils/formValidation.ts`.
  - If there are validation errors, they are stored in `errors` and the request is **not** sent.
  - If valid, it sends a `fetch` request:
    - **Method**: `POST`
    - **URL**: `/api/contact`
    - **Headers**: `Content-Type: application/json`
    - **Body**: `JSON.stringify({ ...formData, formSource: "quote" })`
- On success (`res.ok && data.success`):
  - `isSuccess` is set to `true`.
  - The form is reset to empty values (with `formSource` kept as `"quote"`).
  - A success alert is rendered at the top of the form.
- On failure:
  - An error message is shown (`submitError`) with guidance to call the office if needed.

### 1.2. Server-side flow (`POST /api/contact`)

- The handler parses the JSON body into `ContactFormData`.
- It derives `source` from `formSource` (default `"quote"` if missing).
- It sets flags:
  - `isContactForm = source === "contact"`
  - `isClientOnboarding = source === "client-onboarding"`
- For quote forms (`formSource: "quote"`):
  - `ownerSubject` becomes `New Quote Request from ${fullName}`.
  - `clientSubject` becomes `We received your request — HomeProX Home Services LLC`.
  - `headerLine` becomes `New Quote Request Received`.
- **Email 1 (to HomeProX owner)**:
  - Sent via shared `transporter` from `@/lib/utils/mailer`.
  - Contains a table with the quote details: full name, company, email, phone, property type, service needed, location, and message.
  - Footer includes the business address.
- **Email 2 (to the requester)**:
  - Confirms the request and summarizes key fields: `serviceNeeded`, `propertyType`, and `location`.
  - States that the team will follow up within 24 hours.
- If any error occurs while sending:
  - It logs the error and returns `{ success: false, error: 'Failed to send email. Please try again.' }` with HTTP 500.

---

## 2. Contact Form

- **Component**: `ContactForm` (`src/components/forms/ContactForm.tsx`)  
- **Used on page**: `Contact` page (`src/app/contact/page.tsx`)  
- **Endpoint**: `POST /api/contact` (same handler as quote form)  
- **Payload type**: `ContactFormData` (manually mapped)

### 2.1. Client-side flow

- Local form state lives in `form` with:
  - `name`, `email`, `phone`, `inquiryType`, `message`, `agreeToTerms`.
- Validation (`validate` inside `ContactForm`):
  - Ensures `name`, `email`, `inquiryType`, `message` are present.
  - Validates email with a simple regex.
  - Requires the Terms checkbox to be checked.
- On submit (`handleSubmit`):
  - Prevents default form submission.
  - Runs `validate()`. If any errors, it populates `errors` and aborts.
  - Builds a `payload` shaped like `ContactFormData`:
    - `fullName` from `name`
    - `companyName` empty string
    - `email`, `phone`, `message` from user input
    - `propertyType` and `location` as empty strings
    - `serviceNeeded` is derived from `inquiryType` using `getServiceNeededLabel`.
    - `agreeToTerms` from checkbox
    - `formSource: "contact"`
  - Sends `fetch("/api/contact", { method: "POST", headers, body: JSON.stringify(payload) })`.
- On success (`res.ok && data.success`):
  - `success` state is set to `true`, and the form is replaced with a “Message Sent!” thank-you panel.
- On failure:
  - A generic or server-provided error is shown in `submitError`.

### 2.2. Server-side flow (`POST /api/contact`)

- Uses the same route handler as the quote form.
- For contact submissions (`formSource: "contact"`):
  - `ownerSubject`: `New Contact Message from ${fullName}`.
  - `clientSubject`: `We received your message — HomeProX Home Services LLC`.
  - `headerLine`: `New Contact Message Received`.
- Both owner and client confirmation emails are structured like the quote emails, but messaging is adjusted to reflect a **contact message** instead of a quote or client application.

---

## 3. Client Onboarding Form (New Client Application)

- **Component**: `ClientOnboardingForm` (`src/components/forms/ClientOnboardingForm.tsx`)  
- **Used on page**: client-focused flows (e.g. `/clients` page imports this component)  
- **Endpoint**: `POST /api/contact` (same JSON endpoint)  
- **Payload type**:
  - Local UI type: `ClientOnboardingFormData` (`src/types/index.ts`)
  - Mapped server payload: `ContactFormData` (with `formSource: "client-onboarding"`)

### 3.1. Client-side flow

- Local state uses `ClientOnboardingFormData` with fields like:
  - `companyName`, `contactPerson`, `email`, `phone`, `companyType`, `services[]`, `portfolioSize`, `propertyLocations`, `additionalNotes`, `agreeToTerms`.
- Validation is handled by `validateClientOnboarding`:
  - Ensures all required company and contact fields are present and valid.
  - Uses `validateEmail` and `validatePhone` utilities for those fields.
  - Requires at least one selected service, a portfolio size, property locations, and agreement to Terms & Conditions.
- Before submitting, the UI maps onboarding data into a `ContactFormData` payload via `mapToContactPayload`:
  - `fullName` ← `contactPerson`
  - `companyName` ← `companyName`
  - `email`, `phone` copied directly
  - `propertyType` ← human-readable label for `companyType`
  - `serviceNeeded` ← comma-separated list of selected service labels
  - `location` ← `propertyLocations`
  - `message` ← combination of `additionalNotes` plus a derived “Portfolio Size” line
  - `formSource: "client-onboarding"`
- On submit (`handleSubmit`):
  - Runs validation; if errors exist, they are set on `errors` and the call is aborted.
  - Sends `fetch("/api/contact", { method: "POST", headers, body: JSON.stringify(payload) })`.
- On success:
  - `isSuccess` becomes `true`, errors are cleared, and an animated thank-you panel is shown.
  - Optional `onSuccess` callback is invoked if provided by the parent.
- On failure:
  - A friendly error is set in `submitError`, prompting the user to try again or contact via email.

### 3.2. Server-side flow (`POST /api/contact`)

- For client onboarding (`formSource: "client-onboarding"`):
  - `ownerSubject`: `New Client Application from ${fullName} — ${companyName || 'Unknown Company'}`.
  - `clientSubject`: `We received your HomeProX client application`.
  - `headerLine`: `New Client Application Received`.
- Owner email:
  - Uses “Company Type” and “Property Locations” labels for `propertyType` and `location`.
  - Shows “Additional Notes / Portfolio Details” for the message section.
- Client confirmation email:
  - Uses `"Your Application Summary"` as the header within the summary box.
  - Echoes key fields back (service(s), company type, property locations).

---

## 4. Vendor Application Form

- **Component**: `VendorApplicationForm` (`src/components/forms/VendorApplicationForm.tsx`)  
- **Used on page**: `Vendors` page (`src/app/vendors/page.tsx`)  
- **Endpoint**: `POST /api/vendor` (`src/app/api/vendor/route.ts`)  
- **Payload format**: `multipart/form-data` (because of file uploads)

### 4.1. Client-side flow

- Local state uses `VendorFormData` (from `src/types/vendor.ts`) with fields like:
  - `companyName`, `contactPerson`, `phone`, `email`, `website`, `yearsInBusiness`
  - `serviceCategories` (multi-select)
  - `coverageAreas`, `serviceRadius`
  - `attachments` (array of `File`)
  - `agreeToTerms` (boolean)
- Navigation is broken into **4 steps**:
  1. Company Information  
  2. Services Offered  
  3. Documents & Attachments (optional)  
  4. Review & Submit
- Each step validates only the relevant subset of fields using `validateStep(step, formData)` before allowing the user to continue.
- File handling:
  - Files are added via input or drag-and-drop (`addAttachments`).
  - Any file over **10 MB** is rejected client-side with a validation error.
- On final submit (`handleSubmit` in `VendorApplicationForm`):
  - Re-validates step 3 (core fields) and checks `agreeToTerms`.
  - Builds a `FormData` instance:
    - Appends text fields (`companyName`, `contactPerson`, `phone`, `email`, `website`, `yearsInBusiness`, `coverageAreas`, `serviceRadius`).
    - Appends `serviceCategories` as a single comma-separated string.
    - Appends each attachment as `attachment_0`, `attachment_1`, etc.
  - Sends:
    - **Method**: `POST`
    - **URL**: `/api/vendor`
    - **Body**: `FormData` (no manual headers so the browser sets `multipart/form-data` correctly).
- On success:
  - `isSuccess` becomes `true` and a success screen is shown indicating review within 5–10 business days.
- On failure:
  - The error message from the API (or a generic one) is displayed in `submitError`.

### 4.2. Server-side flow (`POST /api/vendor`)

- The route uses `NextRequest` and `NextResponse` for file-friendly handling.
- It calls `request.formData()` to read multipart fields and files.
- Basic server validation:
  - Ensures `companyName`, `contactPerson`, `email`, and `phone` are present; otherwise returns HTTP 400 with an error JSON.
- File processing:
  - Iterates through `attachment_0`, `attachment_1`, … until none found.
  - Rejects any file exceeding **10 MB** (same limit as client), returning HTTP 400 with a size error.
  - Converts each file to a Node `Buffer` and attaches it to a `nodemailer` `attachments` array.
- Email creation:
  - Builds an HTML email summarizing:
    - Company information (company name, contact person, phone, email, website, years in business).
    - Services & coverage (service categories, coverage areas, service radius).
    - Attachment details (count and filenames).
  - Determines the target address from `CONTACT_EMAIL` (fallback `EMAIL_USER`).
- Sending:
  - Uses the shared `transporter` for `sendMail`, with:
    - `from`: `"HomeProX Vendor Portal" <EMAIL_USER>`
    - `to`: the configured contact email
    - `replyTo`: vendor’s email
    - `subject`: `New Vendor Application — ${companyName}`
    - `html`: the built HTML summary
    - `attachments`: any uploaded files
- On success, returns `{ success: true }` (HTTP 200).  
- On any error, logs details and returns `{ error: "Internal server error. Please try again later." }` with HTTP 500.

---

## 5. Summary of Endpoints

- **`POST /api/contact`**
  - Accepts JSON `ContactFormData`.
  - Shared for:
    - Quote requests (`QuoteForm`, `formSource: "quote"`)
    - General contact messages (`ContactForm`, `formSource: "contact"`)
    - Client onboarding / new client applications (`ClientOnboardingForm`, `formSource: "client-onboarding"`)
  - Sends:
    - One email to HomeProX (owner/admin).
    - One confirmation email back to the submitter.

- **`POST /api/vendor`**
  - Accepts `multipart/form-data` with text fields and optional file attachments.
  - Used **only** by the `VendorApplicationForm`.
  - Sends a single email with application details and any attached files to HomeProX.


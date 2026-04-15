# Nodemailer Integration Guide

This document describes how the MEGAFIXX project integrates `nodemailer` into Next.js API routes for contact, quote, client onboarding, and vendor application email workflows. It can be reused in another project with minimal adaptation.

---

## 1. Overview

The integration uses:

- `nodemailer` for SMTP email delivery
- a reusable transporter utility in `src/lib/utils/mailer.ts`
- a JSON-based `/api/contact` route for contact, quote, and onboarding submissions
- a multipart `/api/vendor` route for vendor applications with file attachments
- strict server-side validation and environment-based configuration

---

## 2. Required Packages

Install `nodemailer` and its types:

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

---

## 3. Environment Variables

Store these values in your local environment and production environment manager. Do not commit sensitive credentials.

```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_USER=info@megafixxx.com
EMAIL_PASS=your_smtp_password_here
CONTACT_EMAIL=info@megafixxx.com
```

### Meaning

- `EMAIL_HOST` - SMTP server host
- `EMAIL_PORT` - SMTP port (465 for SSL, 587 for TLS)
- `EMAIL_USER` - SMTP username/email
- `EMAIL_PASS` - SMTP password
- `CONTACT_EMAIL` - destination email address for form notifications

---

## 4. Transporter Utility

Create a reusable transporter utility file: `src/lib/utils/mailer.ts`

```ts
import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST ?? "";
const user = process.env.EMAIL_USER ?? "";
const pass = process.env.EMAIL_PASS ?? "";
const port = Number(process.env.EMAIL_PORT ?? 465);
const secure = port === 465;

export function getMailerConfigError(): string | null {
  if (!host) return "Missing EMAIL_HOST";
  if (!user) return "Missing EMAIL_USER";
  if (!pass) return "Missing EMAIL_PASS";
  if (pass.startsWith("__SET_")) {
    return "EMAIL_PASS is still a placeholder";
  }
  return null;
}

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
  ...(secure ? {} : { requireTLS: true }),
});
```

### Notes

- `secure` is `true` when port is `465`, otherwise `false`
- Use `requireTLS` for non-465 ports
- `getMailerConfigError()` provides quick config validation before sending

---

## 5. Contact / Quote / Client Onboarding Route

File: `src/app/api/contact/route.ts`

### Purpose

Handles incoming JSON form submissions for:

- general contact messages
- quote requests
- client onboarding applications

### Request Shape

The route expects a JSON body shaped like:

```ts
type ContactFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  location: string;
  message: string;
  agreeToTerms: boolean;
  formSource: "contact" | "quote" | "client-onboarding";
};
```

### Implementation

```ts
import { getMailerConfigError, transporter } from "@/lib/utils/mailer";
import type { ContactFormData } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const mailerConfigError = getMailerConfigError();
    if (mailerConfigError) {
      return NextResponse.json(
        {
          success: false,
          error: `Server email configuration error: ${mailerConfigError}`,
        },
        { status: 500 },
      );
    }

    const body: ContactFormData = await req.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      propertyType,
      serviceNeeded,
      location,
      message,
      formSource,
    } = body;

    const source = formSource ?? "quote";
    const isClientOnboarding = source === "client-onboarding";

    const subject = isClientOnboarding
      ? `New Client Application from ${fullName} — ${companyName || "Unknown Company"}`
      : source === "contact"
        ? `New Contact Message from ${fullName}`
        : `New Quote Request from ${fullName}`;

    const headerLine = isClientOnboarding
      ? "New Client Application Received"
      : source === "contact"
        ? "New Contact Message Received"
        : "New Quote Request Received";

    await transporter.verify();

    const emailResult = await transporter.sendMail({
      from: `"MEGAFIXX Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject,
      html: `...`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const smtpError = error as { code?: string };
    if (smtpError?.code === "EAUTH") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email authentication failed. Verify EMAIL_USER and EMAIL_PASS in your environment variables.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
```

### Key Behaviors

- validates SMTP config before sending
- builds a dynamic subject based on `formSource`
- sends email to `CONTACT_EMAIL`
- formats the message as HTML
- handles `EAUTH` explicitly and general failures generically

### HTML Content

The actual HTML in the current implementation includes:

- a branded header section
- a summary table with form fields
- a highlighted message block
- a footer with company address

This can be adapted to your brand and email layout.

---

## 6. Vendor Application Route

File: `src/app/api/vendor/route.ts`

### Purpose

Handles multipart form submissions for vendor applications, including file attachments.

### Key Behavior

- parses `FormData`
- validates required text fields
- validates file sizes
- converts file attachments to `Buffer`
- sends a single email with attachments
- uses `replyTo` to permit direct replies to the vendor email
- exports `dynamic = "force-dynamic"` for App Router multipart handling

### Implementation

```ts
import { getMailerConfigError, transporter } from "@/lib/utils/mailer";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const mailerConfigError = getMailerConfigError();
    if (mailerConfigError) {
      return NextResponse.json(
        { error: `Server email configuration error: ${mailerConfigError}` },
        { status: 500 },
      );
    }

    const data = await request.formData();
    const companyName = data.get("companyName") as string;
    const contactPerson = data.get("contactPerson") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const website = data.get("website") as string;
    const yearsInBusiness = data.get("yearsInBusiness") as string;
    const serviceCategories = data.get("serviceCategories") as string;
    const coverageAreas = data.get("coverageAreas") as string;
    const serviceRadius = data.get("serviceRadius") as string;

    if (!companyName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 },
      );
    }

    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    let i = 0;
    while (data.get(`attachment_${i}`)) {
      const file = data.get(`attachment_${i}`) as File;
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { error: `File "${file.name}" exceeds the 10 MB size limit.` },
            { status: 400 },
          );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
      i++;
    }

    const html = `...`;

    const toAddress = process.env.CONTACT_EMAIL ?? process.env.EMAIL_USER;
    if (!toAddress || !process.env.EMAIL_USER) {
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 },
      );
    }

    await transporter.verify();

    await transporter.sendMail({
      from: `"MEGAFIXX Vendor Portal" <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Vendor Application — ${companyName}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const smtpError = error as { code?: string };
    if (smtpError?.code === "EAUTH") {
      return NextResponse.json(
        {
          error:
            "Email authentication failed. Verify EMAIL_USER and EMAIL_PASS in your environment variables.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
```

### Attachment Handling

- Each file is expected under `attachment_0`, `attachment_1`, `attachment_2`, ...
- Each attachment is converted to a `Buffer` before sending
- If any file exceeds 10 MB, the route rejects the request

---

## 7. Client-side Form Submission

### JSON-based Contact / Quote Form

Example payload pattern:

```ts
const payload = {
  fullName: form.name.trim(),
  companyName: form.companyName?.trim() ?? "",
  email: form.email.trim(),
  phone: form.phone.trim() || "",
  propertyType: form.propertyType || "",
  serviceNeeded: form.serviceNeeded || "",
  location: form.location?.trim() || "",
  message: form.message.trim(),
  agreeToTerms: form.agreeToTerms,
  formSource: "contact",
};

await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
```

### Multipart Vendor Form

Example upload logic:

```ts
const body = new FormData();
body.append("companyName", form.companyName);
body.append("contactPerson", form.contactPerson);
body.append("email", form.email);
body.append("phone", form.phone);
body.append("serviceCategories", form.serviceCategories.join(", "));
body.append("coverageAreas", form.coverageAreas);
body.append("serviceRadius", form.serviceRadius);

selectedFiles.forEach((file, index) => {
  body.append(`attachment_${index}`, file);
});

await fetch("/api/vendor", {
  method: "POST",
  body,
});
```

---

## 8. Reusing in Another Project

### Minimal adaptation steps

1. Copy `src/lib/utils/mailer.ts`
2. Copy `src/app/api/contact/route.ts`
3. Copy `src/app/api/vendor/route.ts`
4. Add required environment variables
5. Adjust email subject lines, sender name, and HTML template to match your brand
6. Update client-side form field names to match your payload shape
7. Add route-specific validation if your fields differ

### Recommended changes for reuse

- Replace hard-coded brand names and addresses
- Replace `CONTACT_EMAIL` with your recipient email
- Update `formSource` values if you use different submission types
- Store `EMAIL_PASS` securely in production
- Consider using a template engine if you need more advanced email design

---

## 9. Troubleshooting

### Common error codes

- `EAUTH` - invalid SMTP credentials
- `ECONNECTION` - network or SMTP connection error
- `ETIMEDOUT` - SMTP server timeout
- `EMESSAGE` - invalid message formatting

### Debugging tips

- Verify all env vars are loaded in your runtime
- Test transporter configuration locally with `transporter.verify()`
- Use `console.log()` around `sendMail()` to inspect runtime data
- Check spam/junk folder for delivered emails
- Confirm `process.env.CONTACT_EMAIL` is correct and reachable

---

## 10. Summary

This guide documents the complete nodemailer integration used in MEGAFIXX:

- Reusable transporter utility
- Next.js API routes for JSON form submissions and multipart vendor uploads
- environment-based SMTP configuration
- file attachment support
- branded email templates and error handling

Use this file as a reference when adding a similar feature to another Next.js project.

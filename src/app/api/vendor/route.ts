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

    // ── Extract text fields ──────────────────────────────────────────────────
    const companyName = data.get("companyName") as string;
    const contactPerson = data.get("contactPerson") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const website = data.get("website") as string;
    const yearsInBusiness = data.get("yearsInBusiness") as string;

    const serviceCategories = data.get("serviceCategories") as string;
    const serviceOtherDetails = data.get("serviceOtherDetails") as string;

    const serviceCities = data.get("serviceCities") as string;
    const serviceCounties = data.get("serviceCounties") as string;
    const zipCodes = data.get("zipCodes") as string;
    const serviceRadius = data.get("serviceRadius") as string;
    const travelOutsideArea = data.get("travelOutsideArea") as string;

    const epaCertified = data.get("epaCertified") as string;
    const backgroundCheck = data.get("backgroundCheck") as string;
    const sameDayService = data.get("sameDayService") as string;
    const turnaround2448 = data.get("turnaround2448") as string;
    const additionalNotes = data.get("additionalNotes") as string;

    // Basic server-side validation
    if (!companyName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 },
      );
    }

    // ── Extract file attachments (document_0, document_1, ...) ───────────────
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    const uploadedDocumentLabels: string[] = [];
    let i = 0;

    while (data.get(`document_${i}`)) {
      const file = data.get(`document_${i}`) as File;
      const label =
        (data.get(`document_label_${i}`) as string) || `Document ${i + 1}`;

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
        uploadedDocumentLabels.push(`${label}: ${file.name}`);
      }
      i++;
    }

    // ── Build email HTML ─────────────────────────────────────────────────────
    const submittedOn = new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    });

    const html = `
<div style="font-family: Arial, sans-serif; max-width: 760px; margin: 0 auto; color: #1C1C1E; line-height: 1.5;">
  <p style="margin: 0 0 16px;">A new vendor application has been submitted through the HomeProX vendor onboarding portal.</p>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Vendor Information</h2>
  <ul style="margin: 0 0 16px 20px; padding: 0;">
    <li><strong>Business Name:</strong> ${companyName}</li>
    <li><strong>Contact Person:</strong> ${contactPerson}</li>
    <li><strong>Phone Number:</strong> ${phone}</li>
    <li><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></li>
    <li><strong>Website:</strong> ${website || "—"}</li>
    <li><strong>Years in Business:</strong> ${yearsInBusiness ? `In business for ${yearsInBusiness} years` : "—"}</li>
    <li><strong>EIN / Tax ID:</strong> Provided via onboarding documents (if submitted)</li>
    <li><strong>Preferred Contact Method:</strong> Email / Phone</li>
  </ul>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Services Offered</h2>
  <p style="margin: 0 0 16px;">
    ${serviceCategories || "—"}${
      serviceOtherDetails?.trim()
        ? `<br /><strong>Other Service:</strong> ${serviceOtherDetails.trim()}`
        : ""
    }
  </p>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Coverage Area</h2>
  <ul style="margin: 0 0 16px 20px; padding: 0;">
    <li><strong>Cities:</strong> ${serviceCities || "—"}</li>
    <li><strong>Counties:</strong> ${serviceCounties || "—"}</li>
    <li><strong>ZIP Codes:</strong> ${zipCodes || "—"}</li>
    <li><strong>Service Radius:</strong> ${serviceRadius || "—"}</li>
    <li><strong>Willing to Travel Outside Area:</strong> ${travelOutsideArea || "—"}</li>
  </ul>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Operational Capabilities</h2>
  <ul style="margin: 0 0 16px 20px; padding: 0;">
    <li><strong>Licensed:</strong> See uploaded documents</li>
    <li><strong>Insured:</strong> See uploaded documents</li>
    <li><strong>EPA Certified:</strong> ${epaCertified || "—"}</li>
    <li><strong>W9 Available:</strong> ${uploadedDocumentLabels.some((item) => item.toLowerCase().includes("w9")) ? "Yes" : "Not indicated"}</li>
    <li><strong>Background Check Authorized:</strong> ${backgroundCheck || "—"}</li>
    <li><strong>Same-Day Service:</strong> ${sameDayService || "—"}</li>
    <li><strong>Meet 24-48 Hour Deadlines:</strong> ${turnaround2448 || "—"}</li>
    ${additionalNotes?.trim() ? `<li><strong>Additional Notes:</strong> ${additionalNotes.trim()}</li>` : ""}
  </ul>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Uploaded Documents</h2>
  <p style="margin: 0 0 16px;">
    ${
      uploadedDocumentLabels.length > 0
        ? uploadedDocumentLabels.join("<br />")
        : "No documents uploaded."
    }
  </p>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Vendor Agreement Confirmation</h2>
  <p style="margin: 0 0 16px;">
    The vendor has electronically acknowledged and agreed to the HomeProX Vendor Terms &amp; Conditions and confirmed that all submitted information is accurate and that they operate as an independent contractor with all required licenses and insurance.
  </p>

  <h2 style="font-size: 18px; margin: 0 0 8px;">Application Status</h2>
  <p style="margin: 0 0 16px;">
    <strong>Status:</strong> Pending Review<br />
    <strong>Submitted On:</strong> ${submittedOn}
  </p>

  <p style="margin: 0 0 16px;">All uploaded documents and attachments are included with this submission email for onboarding review.</p>
  <p style="margin: 0;">
    HomeProX Services LLC<br />
    Vendor Onboarding System<br />
    <a href="https://homeproxsvcs.com" target="_blank" rel="noopener noreferrer">https://homeproxsvcs.com</a>
  </p>
</div>
    `;

    const toAddress =
      process.env.VENDOR_EMAIL ??
      process.env.CONTACT_EMAIL ??
      process.env.EMAIL_USER;
    if (!toAddress || !process.env.EMAIL_USER) {
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 },
      );
    }

    await transporter.verify();

    await transporter.sendMail({
      from: `"HomeProX Vendor Portal" <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Vendor Application Submitted – ${companyName}`,
      html,
      attachments,
    });

    console.log(
      `[/api/vendor] Vendor application email sent to ${toAddress} (${companyName})`,
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const smtpError = error as {
      code?: string;
      message?: string;
      response?: string;
    };
    console.error("[/api/vendor] SMTP Error details:", {
      code: smtpError?.code,
      message: smtpError?.message,
      response: smtpError?.response,
    });

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

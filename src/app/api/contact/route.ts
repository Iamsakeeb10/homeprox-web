import { getMailerConfigError, transporter } from "@/lib/utils/mailer";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
]);
const ALLOWED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png"]);

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

    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    let fullName = "";
    let companyName = "";
    let email = "";
    let phone = "";
    let propertyType = "";
    let serviceNeeded = "";
    let location = "";
    let message = "";
    let formSource = "";

    const contentType = req.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const body = (await req.json()) as Record<string, unknown>;
      const getBodyString = (key: string) =>
        typeof body[key] === "string" ? body[key].trim() : "";

      fullName = getBodyString("fullName");
      companyName = getBodyString("companyName");
      email = getBodyString("email");
      phone = getBodyString("phone");
      propertyType = getBodyString("propertyType");
      serviceNeeded = getBodyString("serviceNeeded");
      location = getBodyString("location");
      message = getBodyString("message");
      formSource = getBodyString("formSource");
    } else {
      const data = await req.formData();
      const getString = (key: string) => {
        const value = data.get(key);
        return typeof value === "string" ? value.trim() : "";
      };

      fullName = getString("fullName");
      companyName = getString("companyName");
      email = getString("email");
      phone = getString("phone");
      propertyType = getString("propertyType");
      serviceNeeded = getString("serviceNeeded");
      location = getString("location");
      message = getString("message");
      formSource = getString("formSource");

      let i = 0;
      while (data.get(`attachment_${i}`)) {
        const file = data.get(`attachment_${i}`);
        if (file instanceof File && file.size > 0) {
          if (file.size > MAX_FILE_BYTES) {
            return NextResponse.json(
              {
                success: false,
                error: `File "${file.name}" exceeds the 10 MB size limit.`,
              },
              { status: 400 },
            );
          }

          const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
          if (
            !ALLOWED_MIME_TYPES.has(file.type) ||
            !ALLOWED_EXTENSIONS.has(extension)
          ) {
            return NextResponse.json(
              {
                success: false,
                error: `File "${file.name}" has an unsupported format.`,
              },
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
    }

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Required fields are missing.",
        },
        { status: 400 },
      );
    }

    const source = formSource || "quote";
    const isContactForm = source === "contact";
    const isClientOnboarding = source === "client-onboarding";

    const subject = isClientOnboarding
      ? `New Client Application from ${fullName} — ${companyName || "Unknown Company"}`
      : isContactForm
        ? `New Contact Message from ${fullName}`
        : `New Quote Request from ${fullName}`;

    const headerLine = isClientOnboarding
      ? "New Client Application Received"
      : isContactForm
        ? "New Contact Message Received"
        : "New Quote Request Received";

    const toAddress = process.env.CONTACT_EMAIL ?? process.env.EMAIL_USER;
    if (!toAddress || !process.env.EMAIL_USER) {
      return NextResponse.json(
        {
          success: false,
          error: "Server email configuration is missing.",
        },
        { status: 500 },
      );
    }

    await transporter.verify();

    await transporter.sendMail({
      from: `"HomeProX Website" <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email || undefined,
      subject,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #F5EFE0; padding: 24px; text-align: center;">
            <h1 style="color: #14B8A6; margin: 0; font-size: 24px;">HomeProX Services LLC</h1>
            <p style="color: #7A6A52; margin: 8px 0 0;">${headerLine}</p>
          </div>
          <div style="background: #EDE3CC; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #7A6A52; width: 40%;">Full Name</td><td style="padding: 10px 0; color: #1C1410; font-weight: bold;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Company</td><td style="padding: 10px 0; color: #1C1410;">${companyName || "N/A"}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Email</td><td style="padding: 10px 0; color: #14B8A6;">${email}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Phone</td><td style="padding: 10px 0; color: #1C1410;">${phone}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">${isClientOnboarding ? "Company Type" : "Property Type"}</td><td style="padding: 10px 0; color: #1C1410;">${propertyType}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Service Needed</td><td style="padding: 10px 0; color: #1C1410;">${serviceNeeded}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">${isClientOnboarding ? "Property Locations" : "Location"}</td><td style="padding: 10px 0; color: #1C1410;">${location}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #F5EFE0; border-left: 4px solid #14B8A6; border-radius: 4px;">
              <p style="color: #7A6A52; margin: 0 0 8px; font-size: 13px;">Attachments</p>
              <p style="color: #1C1410; margin: 0;">${
                attachments.length > 0
                  ? `${attachments.length} file(s) attached: ${attachments.map((a) => a.filename).join(", ")}`
                  : "No files uploaded."
              }</p>
            </div>
            <div style="margin-top: 24px; padding: 16px; background: #F5EFE0; border-left: 4px solid #14B8A6; border-radius: 4px;">
              <p style="color: #7A6A52; margin: 0 0 8px; font-size: 13px;">${
                isClientOnboarding
                  ? "Additional Notes / Portfolio Details"
                  : "Message / Project Details"
              }</p>
              <p style="color: #1C1410; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background: #F5EFE0; padding: 16px; text-align: center;">
            <p style="color: #7A6A52; margin: 0; font-size: 12px;">HomeProX Services LLC — 517 WATERVIEW DR, COPPELL, TX 75019</p>
          </div>
        </div>
      `,
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

    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}

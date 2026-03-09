import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { transporter } from "@/lib/utils/mailer";

// File size guard (10 MB per file)
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    // ── Extract text fields ──────────────────────────────────
    const companyName = data.get("companyName") as string;
    const contactPerson = data.get("contactPerson") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const website = data.get("website") as string;
    const yearsInBusiness = data.get("yearsInBusiness") as string;
    const serviceCategories = data.get("serviceCategories") as string;
    const coverageAreas = data.get("coverageAreas") as string;
    const serviceRadius = data.get("serviceRadius") as string;

    // Basic server-side validation
    if (!companyName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // ── Extract file attachments (attachment_0, attachment_1, ...) ─────────
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    let i = 0;
    while (data.get(`attachment_${i}`)) {
      const file = data.get(`attachment_${i}`) as File;
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { error: `File "${file.name}" exceeds the 10 MB size limit.` },
            { status: 400 }
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

    // ── Build email HTML ─────────────────────────────────────
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1C1C1E;">
        <div style="background: #1C1C1E; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Vendor Application</h1>
          <p style="color: #E8621A; margin: 6px 0 0; font-size: 14px;">MEGAFIXX Property Maintenance Network</p>
        </div>
        <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 8px 8px;">

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Company Information</h2>
          <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #71717a; width: 180px;">Company Name</td><td style="padding: 6px 0; font-weight: 600;">${companyName}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Contact Person</td><td style="padding: 6px 0; font-weight: 600;">${contactPerson}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #E8621A;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Website</td><td style="padding: 6px 0;">${website || "—"}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Years in Business</td><td style="padding: 6px 0;">${yearsInBusiness}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Services & Coverage</h2>
          <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #71717a; width: 180px;">Service Categories</td><td style="padding: 6px 0;">${serviceCategories}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Coverage Areas</td><td style="padding: 6px 0;">${coverageAreas}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Service Radius</td><td style="padding: 6px 0;">${serviceRadius}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Attachments</h2>
          <p style="color: #71717a; font-size: 14px;">${
            attachments.length > 0
              ? `${attachments.length} file(s) attached: ${attachments.map((a) => a.filename).join(", ")}`
              : "No files uploaded."
          }</p>

        </div>
        <p style="text-align: center; color: #a1a1aa; font-size: 12px; margin-top: 16px;">
          MEGAFIXX Home Services LLC &nbsp;•&nbsp; Vendor Network Application
        </p>
      </div>
    `;

    const toAddress = process.env.CONTACT_EMAIL ?? process.env.EMAIL_USER;
    if (!toAddress || !process.env.EMAIL_USER) {
      console.error("[/api/vendor] Missing env: CONTACT_EMAIL or EMAIL_USER");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `"MEGAFIXX Vendor Portal" <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Vendor Application — ${companyName}`,
      html,
      attachments,
    });

    console.log(`[/api/vendor] Vendor application email sent to ${toAddress} (${companyName})`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[/api/vendor] Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Required for Next.js App Router to handle multipart/form-data
export const dynamic = "force-dynamic";

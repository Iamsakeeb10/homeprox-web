import { NextResponse } from 'next/server'
import { transporter } from '@/lib/utils/mailer'
import type { ContactFormData } from '@/types'

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json()

    const { fullName, companyName, email, phone, propertyType, serviceNeeded, location, message } = body

    // 1. Notification email to MEGAFIXX owner
    await transporter.sendMail({
      from: `"MEGAFIXX Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0F1E; padding: 24px; text-align: center;">
            <h1 style="color: #C89B3C; margin: 0; font-size: 24px;">MEGAFIXX Home Services LLC</h1>
            <p style="color: #A0AEC0; margin: 8px 0 0;">New Quote Request Received</p>
          </div>
          <div style="background: #111827; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #A0AEC0; width: 40%;">Full Name</td><td style="padding: 10px 0; color: #ffffff; font-weight: bold;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Company</td><td style="padding: 10px 0; color: #ffffff;">${companyName || 'N/A'}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Email</td><td style="padding: 10px 0; color: #C89B3C;">${email}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Phone</td><td style="padding: 10px 0; color: #ffffff;">${phone}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Property Type</td><td style="padding: 10px 0; color: #ffffff;">${propertyType}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Service Needed</td><td style="padding: 10px 0; color: #ffffff;">${serviceNeeded}</td></tr>
              <tr><td style="padding: 10px 0; color: #A0AEC0;">Location</td><td style="padding: 10px 0; color: #ffffff;">${location}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #1A2340; border-left: 4px solid #C89B3C; border-radius: 4px;">
              <p style="color: #A0AEC0; margin: 0 0 8px; font-size: 13px;">Message / Project Details</p>
              <p style="color: #ffffff; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background: #0A0F1E; padding: 16px; text-align: center;">
            <p style="color: #A0AEC0; margin: 0; font-size: 12px;">MEGAFIXX Home Services LLC — Collin County, Texas</p>
          </div>
        </div>
      `,
    })

    // 2. Confirmation email to the client who submitted the form
    await transporter.sendMail({
      from: `"MEGAFIXX Home Services LLC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your request — MEGAFIXX Home Services LLC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0F1E; padding: 24px; text-align: center;">
            <h1 style="color: #C89B3C; margin: 0; font-size: 24px;">MEGAFIXX Home Services LLC</h1>
            <p style="color: #A0AEC0; margin: 8px 0 0;">Texas Statewide Property Maintenance</p>
          </div>
          <div style="background: #111827; padding: 32px;">
            <h2 style="color: #ffffff; margin: 0 0 16px;">Hi ${fullName},</h2>
            <p style="color: #A0AEC0; line-height: 1.7;">Thank you for reaching out to <strong style="color: #C89B3C;">MEGAFIXX Home Services LLC</strong>. We've received your quote request and a member of our team will be in touch within <strong style="color: #ffffff;">24 hours</strong>.</p>
            <div style="margin: 24px 0; padding: 20px; background: #1A2340; border-left: 4px solid #C89B3C; border-radius: 4px;">
              <p style="color: #A0AEC0; margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your Request Summary</p>
              <p style="color: #ffffff; margin: 4px 0;"><strong style="color: #A0AEC0;">Service:</strong> ${serviceNeeded}</p>
              <p style="color: #ffffff; margin: 4px 0;"><strong style="color: #A0AEC0;">Property Type:</strong> ${propertyType}</p>
              <p style="color: #ffffff; margin: 4px 0;"><strong style="color: #A0AEC0;">Location:</strong> ${location}</p>
            </div>
            <p style="color: #A0AEC0; line-height: 1.7;">If you need to reach us sooner, don't hesitate to call or email directly:</p>
            <p style="margin: 8px 0;"><a href="tel:4693789262" style="color: #C89B3C; text-decoration: none; font-weight: bold;">📞 (469) 378-9262</a></p>
            <p style="margin: 8px 0;"><a href="mailto:info@megafixxhomeservices.com" style="color: #C89B3C; text-decoration: none;">✉️ info@megafixxhomeservices.com</a></p>
          </div>
          <div style="background: #0A0F1E; padding: 16px; text-align: center;">
            <p style="color: #A0AEC0; margin: 0; font-size: 12px;">© 2026 MEGAFIXX Home Services LLC — Collin County, Texas. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}

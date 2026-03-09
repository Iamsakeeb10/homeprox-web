import { NextResponse } from 'next/server'
import { transporter } from '@/lib/utils/mailer'
import type { ContactFormData } from '@/types'

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json()

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
    } = body

    const source = formSource ?? 'quote'
    const isContactForm = source === 'contact'
    const isClientOnboarding = source === 'client-onboarding'

    const ownerSubject = isClientOnboarding
      ? `New Client Application from ${fullName} — ${companyName || 'Unknown Company'}`
      : isContactForm
      ? `New Contact Message from ${fullName}`
      : `New Quote Request from ${fullName}`

    const clientSubject = isClientOnboarding
      ? 'We received your MEGAFIXX client application'
      : isContactForm
      ? 'We received your message — MEGAFIXX Home Services LLC'
      : 'We received your request — MEGAFIXX Home Services LLC'

    const headerLine = isClientOnboarding
      ? 'New Client Application Received'
      : isContactForm
      ? 'New Contact Message Received'
      : 'New Quote Request Received'

    // 1. Notification email to MEGAFIXX owner
    await transporter.sendMail({
      from: `"MEGAFIXX Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: ownerSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #F5EFE0; padding: 24px; text-align: center;">
            <h1 style="color: #C89B3C; margin: 0; font-size: 24px;">MEGAFIXX Home Services LLC</h1>
            <p style="color: #7A6A52; margin: 8px 0 0;">${headerLine}</p>
          </div>
          <div style="background: #EDE3CC; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #7A6A52; width: 40%;">Full Name</td><td style="padding: 10px 0; color: #1C1410; font-weight: bold;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Company</td><td style="padding: 10px 0; color: #1C1410;">${companyName || 'N/A'}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Email</td><td style="padding: 10px 0; color: #C89B3C;">${email}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Phone</td><td style="padding: 10px 0; color: #1C1410;">${phone}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">${isClientOnboarding ? 'Company Type' : 'Property Type'}</td><td style="padding: 10px 0; color: #1C1410;">${propertyType}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">Service Needed</td><td style="padding: 10px 0; color: #1C1410;">${serviceNeeded}</td></tr>
              <tr><td style="padding: 10px 0; color: #7A6A52;">${isClientOnboarding ? 'Property Locations' : 'Location'}</td><td style="padding: 10px 0; color: #1C1410;">${location}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #F5EFE0; border-left: 4px solid #C89B3C; border-radius: 4px;">
              <p style="color: #7A6A52; margin: 0 0 8px; font-size: 13px;">${
                isClientOnboarding ? 'Additional Notes / Portfolio Details' : 'Message / Project Details'
              }</p>
              <p style="color: #1C1410; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background: #F5EFE0; padding: 16px; text-align: center;">
            <p style="color: #7A6A52; margin: 0; font-size: 12px;">MEGAFIXX Home Services LLC — 815 Table Rock ST, Princeton, TX,75407</p>
          </div>
        </div>
      `,
    })

    // 2. Confirmation email to the client who submitted the form
    await transporter.sendMail({
      from: `"MEGAFIXX Home Services LLC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: clientSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #F5EFE0; padding: 24px; text-align: center;">
            <h1 style="color: #C89B3C; margin: 0; font-size: 24px;">MEGAFIXX Home Services LLC</h1>
            <p style="color: #7A6A52; margin: 8px 0 0;">Texas Statewide Property Maintenance</p>
          </div>
          <div style="background: #EDE3CC; padding: 32px;">
            <h2 style="color: #1C1410; margin: 0 0 16px;">Hi ${fullName},</h2>
            <p style="color: #7A6A52; line-height: 1.7;">Thank you for reaching out to <strong style="color: #C89B3C;">MEGAFIXX Home Services LLC</strong>. We've received your ${
              isClientOnboarding ? 'client application' : isContactForm ? 'message' : 'quote request'
            } and a member of our team will be in touch within <strong style="color: #1C1410;">24 hours</strong>.</p>
            <div style="margin: 24px 0; padding: 20px; background: #F5EFE0; border-left: 4px solid #C89B3C; border-radius: 4px;">
              <p style="color: #7A6A52; margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">${
                isClientOnboarding ? 'Your Application Summary' : 'Your Request Summary'
              }</p>
              <p style="color: #1C1410; margin: 4px 0;"><strong style="color: #7A6A52;">Service:</strong> ${serviceNeeded}</p>
              <p style="color: #1C1410; margin: 4px 0;"><strong style="color: #7A6A52;">${
                isClientOnboarding ? 'Company Type' : 'Property Type'
              }:</strong> ${propertyType}</p>
              <p style="color: #1C1410; margin: 4px 0;"><strong style="color: #7A6A52;">${
                isClientOnboarding ? 'Property Locations' : 'Location'
              }:</strong> ${location}</p>
            </div>
            <p style="color: #7A6A52; line-height: 1.7;">If you need to reach us sooner, don't hesitate to call or email directly:</p>
            <p style="margin: 8px 0;"><a href="tel:4693789262" style="color: #C89B3C; text-decoration: none; font-weight: bold;">📞 (469) 378-9262</a></p>
            <p style="margin: 8px 0;"><a href="mailto:info@megafixxhomeservices.com" style="color: #C89B3C; text-decoration: none;">✉️ info@megafixxhomeservices.com</a></p>
          </div>
          <div style="background: #F5EFE0; padding: 16px; text-align: center;">
            <p style="color: #7A6A52; margin: 0; font-size: 12px;">© 2026 MEGAFIXX Home Services LLC — 815 Table Rock ST, Princeton, TX,75407. All rights reserved.</p>
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

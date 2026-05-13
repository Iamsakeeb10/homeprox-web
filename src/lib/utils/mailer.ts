import nodemailer from "nodemailer";

export function getMailerConfigError(): string | null {
  if (!process.env.EMAIL_HOST) return "EMAIL_HOST is not configured.";
  if (!process.env.EMAIL_PORT) return "EMAIL_PORT is not configured.";
  if (!process.env.EMAIL_USER) return "EMAIL_USER is not configured.";
  if (!process.env.EMAIL_PASS) return "EMAIL_PASS is not configured.";
  return null;
}

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

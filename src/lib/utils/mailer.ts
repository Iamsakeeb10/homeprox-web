import nodemailer from 'nodemailer'

const host = process.env.EMAIL_HOST ?? ''
const user = process.env.EMAIL_USER ?? ''
const pass = process.env.EMAIL_PASS ?? ''
const port = Number(process.env.EMAIL_PORT ?? 465)
const secure = port === 465

export function getMailerConfigError(): string | null {
  if (!host) return 'Missing EMAIL_HOST'
  if (!user) return 'Missing EMAIL_USER'
  if (!pass) return 'Missing EMAIL_PASS'
  if (pass.startsWith('__SET_')) {
    return 'EMAIL_PASS is still a placeholder'
  }
  return null
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
})

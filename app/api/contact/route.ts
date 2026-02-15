import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Message from ${body.name}`,
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p>${body.message}</p>
    `
  })

  return NextResponse.json({ success: true })
}

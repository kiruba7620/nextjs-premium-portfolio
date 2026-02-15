import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate body
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing fields' },
        { status: 400 }
      )
    }

    // Validate env variables
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("❌ Missing ENV variables", {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS ? "SET" : "NOT SET",
        EMAIL_TO: process.env.EMAIL_TO
      })

      return NextResponse.json(
        { success: false, error: 'Server config error' },
        { status: 500 }
      )
    }

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
        <p><b>Message:</b></p>
        <p>${body.message}</p>
      `
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error: any) {
    console.error("❌ Contact API Error:", error)

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
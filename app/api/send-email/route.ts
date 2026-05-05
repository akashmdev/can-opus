import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 587,
  secure: false,
  auth: {
    user: 'smtp@mail.creuto.in',
    pass: 'SMTp@@$%2025',
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, ...fields } = body;

    let subject = '';
    let html = '';

    if (formType === 'enquiry') {
      const { name, email, phone, enquiryFor, message } = fields;
      subject = `New Enquiry: ${enquiryFor} — from ${name}`;
      html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#1e293b;margin-bottom:20px;">📬 New Enquiry Received</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:140px;border-radius:4px;">Full Name</td><td style="padding:8px 12px;">${name}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Enquiry For</td><td style="padding:8px 12px;">${enquiryFor}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;vertical-align:top;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${message}</td></tr>
          </table>
          <p style="color:#64748b;font-size:12px;margin-top:24px;">Sent via CanOpus Enquiry Form</p>
        </div>
      `;
    } else if (formType === 'contact') {
      const { name, email, company, phone, subject: sub, service, message } = fields;
      subject = `New Contact Message: ${sub} — from ${name}`;
      html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#1e293b;margin-bottom:20px;">📩 New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:140px;border-radius:4px;">Full Name</td><td style="padding:8px 12px;">${name}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Company</td><td style="padding:8px 12px;">${company || '—'}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Phone</td><td style="padding:8px 12px;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Service</td><td style="padding:8px 12px;">${service || '—'}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;">Subject</td><td style="padding:8px 12px;">${sub}</td></tr>
            <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;border-radius:4px;vertical-align:top;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${message}</td></tr>
          </table>
          <p style="color:#64748b;font-size:12px;margin-top:24px;">Sent via CanOpus Contact Form</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    await transporter.sendMail({
      from: '"CanOpus Website" <smtp@mail.creuto.in>',
      to: 'info@canopus.live',
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

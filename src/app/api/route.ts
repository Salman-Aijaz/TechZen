import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, services } = await req.json();

    const emailContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Selected Services:</strong> ${services.join(', ')}</p>
    `;

    const response = await resend.emails.send({
      from: 'Techzen <onboarding@resend.dev>',
      to: 'muhammadsalmansk27@gmail.com',
      subject: 'New Contact Form Submission',
      html: emailContent,
    });

    console.log('Email sent successfully:', response);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    // More detailed error response
    return NextResponse.json({ success: false, error: 'Failed to send email. Please check the server logs for more details.' }, { status: 500 });
  }
}

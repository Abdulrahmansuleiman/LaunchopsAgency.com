import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Note: Configure your email credentials in environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, source } = await request.json();

    // Validate input
    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmailContent = `
      <h2>New Lead Magnet Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Your LaunchOps Demo Video is Ready!',
      html: `
        <h2>Hey ${fullName}!</h2>
        <p>Thanks for requesting the demo video. Here are some key takeaways from what LaunchOps can do:</p>
        <ul>
          <li>Qualify 30-100 leads automatically every month</li>
          <li>Book appointments 24/7 without manual work</li>
          <li>Let your team focus on closing, not qualifying</li>
        </ul>
        <p><a href="https://youtube.com/example" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">Watch Demo Video</a></p>
        <p>Ready to get started?</p>
        <p><a href="https://calendly.com/launchops-automation/30min">Book Your Free Consultation</a></p>
      `,
    });

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead Magnet Request - ${fullName}`,
      html: adminEmailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

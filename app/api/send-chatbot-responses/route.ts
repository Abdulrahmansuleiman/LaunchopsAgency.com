import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const { businessType, monthlyLeads, mainChallenge, name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmailContent = `
      <h2>New Chatbot Conversation</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business Type:</strong> ${businessType}</p>
      <p><strong>Monthly Leads:</strong> ${monthlyLeads}</p>
      <p><strong>Main Challenge:</strong> ${mainChallenge}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'We\'ll Be In Touch Soon!',
      html: `
        <h2>Hi ${name}!</h2>
        <p>Thanks for chatting with us! Based on your responses, we've identified the perfect LaunchOps plan for your business.</p>
        <p>Our team will reach out within 24 hours with a personalized proposal and timeline.</p>
        <p>In the meantime, here are some resources that might help:</p>
        <ul>
          <li><a href="https://calendly.com/launchops-automation/30min">View Our Pricing</a></li>
          <li><a href="https://yoursite.com/how-it-works">How LaunchOps Works</a></li>
        </ul>
        <p>Have questions? Reply to this email anytime.</p>
      `,
    });

    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Qualified Lead - ${name}`,
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

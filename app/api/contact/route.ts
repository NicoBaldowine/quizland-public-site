import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { reason, title, email, message } = body;

    // Create transporter with more secure settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: {
        name: 'Quizland Contact Form',
        address: process.env.EMAIL_USER as string
      },
      to: process.env.EMAIL_USER,
      replyTo: email, // Allow direct reply to sender
      subject: `Contact Form: ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        From: ${email}
        Reason: ${reason}
        Title: ${title}
        
        Message:
        ${message}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    }, { 
      status: 200 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    });
  }
}

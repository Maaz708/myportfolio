// app/api/send-message/route.ts
// app/api/send-message/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate required env vars
        const gmailUser = process.env.GMAIL_USER;
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
        if (!gmailUser || !gmailAppPassword) {
            return NextResponse.json(
                { error: 'Email service is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD.' },
                { status: 500 }
            );
        }

        const isProduction = process.env.NODE_ENV === 'production';

        async function createVerifiedTransporter() {
            const common = {
                auth: { user: gmailUser, pass: gmailAppPassword },
                pool: true,
                logger: !isProduction,
                debug: !isProduction,
                connectionTimeout: 15000,
                socketTimeout: 15000,
                greetingTimeout: 10000,
                family: 4,
                tls: { minVersion: 'TLSv1.2' },
            } as const;

            // Try SMTPS (465)
            try {
                const t465 = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    ...common,
                });
                await t465.verify();
                return t465;
            } catch (e) {
                // Fall back to STARTTLS (587)
                const t587 = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    requireTLS: true,
                    ...common,
                });
                await t587.verify();
                return t587;
            }
        }

        const transporter = await createVerifiedTransporter();

        // Set up email data
        const mailOptions = {
            from: gmailUser,
            to: gmailUser,
            replyTo: email, // Reply-to will be the sender's email
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Message from Portfolio</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #666; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `,
            text: `
New Contact Message from Portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
            `,
        };

        // Send mail
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error('Error sending email:', error);
        const message =
            !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                ? `Failed to send message: ${(error as Error)?.message || 'Unknown error'}`
                : 'Failed to send message. Please try again later.';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
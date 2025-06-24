// app/api/send-message/route.ts
// app/api/send-message/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Set up email data
    const mailOptions = {
        from: email, // Sender address
        to: process.env.SMTP_USER, // Your email
        subject: subject, // Subject line
        text: message, // Plain text body
        html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`, // HTML body
    };

    try {
        // Send mail
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send message. Please try again later.' }), { status: 500 });
    }
}
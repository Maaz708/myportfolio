// app/api/send-message/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json(); // This is where you read the JSON body

    // Here you would typically send the email using a service like SendGrid, Nodemailer, etc.
    console.log('Message received:', data);

    // For now, just return a success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
}
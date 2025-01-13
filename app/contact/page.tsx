// app/contact/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create the message object
    const messageData = {
      name,
      email,
      subject,
      message,
    };

    // Send the message to your backend or email service
    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        alert('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        // Handle error
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-r from-red-500 to-pink-600">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-fuchsia-900">
              Let's discuss how we can work together
              <p> Connect through my email for any buisness purpose</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="font-orbitron text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-background/50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-background/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-background/50"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-background/50 min-h-[150px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="font-orbitron text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MailIcon className="h-6 w-6 text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">maaz7084@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="h-6 w-6 text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+91 Confidential</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPinIcon className="h-6 w-6 text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
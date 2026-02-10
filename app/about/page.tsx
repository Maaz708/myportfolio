"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-r from-violet-500 to-rose-600">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-white">
              A proactive Computer Science student specializing in Backend Development and software development
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="font-orbitron text-2xl font-bold text-cyan-500 mb-4">Education</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-muted-foreground">SEA College of Engineering, Bangalore</p>
                    <p className="text-sm text-cyan-500">8.5 CGPA | Graduated May 2025</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Intermediate School, CBSE Board</h3>
                    <p className="text-muted-foreground">Pratapgarh, U.P.</p>
                    <p className="text-sm text-cyan-500">78.9% | 2019</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">High School, CBSE Board</h3>
                    <p className="text-muted-foreground">Pratapgarh, U.P.</p>
                    <p className="text-sm text-cyan-500">10 CGPA | 2017</p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-orbitron text-2xl font-bold text-cyan-500 mb-4">Professional Summary</h2>
                <p className="text-muted-foreground">
                I’m a backend-focused developer specializing in Django and Python, with hands-on experience building production-ready web applications from scratch. I enjoy designing clean backend architectures, implementing secure authentication, managing databases, and deploying applications to real-world environments.

I’ve worked on projects such as a Django-based blog platform and am currently exploring e-commerce systems, payment integrations, and AI-powered recommendation features. My development approach emphasizes scalability, security, and maintainability rather than just local demos.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
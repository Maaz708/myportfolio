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
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A proactive Computer Science student specializing in cybersecurity and software development
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
                    <p className="text-sm text-cyan-500">8.5 CGPA | Expected May 2025</p>
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
                  A dedicated computer science student with a focus on cybersecurity and software development.
                  Experienced in Python programming, SQL database management, and Linux system administration.
                  Successfully completed the Google Cybersecurity certification program and demonstrated strong
                  problem-solving abilities through innovative security solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
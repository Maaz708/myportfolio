"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/racecar7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0  from-background to-transparent z-10" />
        <div className="cyber-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-800 mb-6">
            Hi, I am Mohd Maaz
            <br />
            <span className="text-2xl md:text-4xl">Software Engineer & Cybersecurity Enthusiast</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto  from-black">
            Dedicated software engineering student specializing in cybersecurity tools and software development, with expertise in Python development, system security, Automation work with Gen AI and personal AI agents
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-background"
              onClick={() => window.location.href = '#projects'}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10"
              onClick={() => window.location.href = 'http://localhost:3000/contact'}
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/mohd-maaz-1277121b1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 2.1 }}
              className="text-black hover:text-cyan-500 transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:maaz7084@gmail.com"
              whileHover={{ scale: 2.1 }}
              className="text-black hover:text-cyan-500 transition-colors"
            >
              <MailIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://github.com/maaz708"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 2.1 }}
              className="text-black hover:text-cyan-500 transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div >
  );
}
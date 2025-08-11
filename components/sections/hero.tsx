"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';


export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Robot Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/MwIjWnBz8q2hzhOe/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="cyber-grid absolute inset-0 opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-44 h-44 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/mypic.jpg"
                  alt="Mohd Maaz"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Glowing effect around the image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left flex-1 lg:ml-80"
          >
            <h1 className="font-orbitron text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Hi, I am Mohd Maaz
              </span>
              <br />
              <span className="text-lg md:text-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Software Engineer & Cybersecurity Enthusiast
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-transparent bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text max-w-2xl mx-auto lg:mx-0">
              Dedicated software engineering student specializing in cybersecurity tools and software development, with expertise in Python development, system security, Automation work with Gen AI and personal AI agents
            </p>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '#projects'}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-border text-white hover:from-pink-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start gap-6">
              <motion.a
                href="https://www.linkedin.com/in/mohd-maaz-1277121b1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 2.1 }}
                className="text-blue-400 hover:text-cyan-300 transition-all duration-300"
              >
                <LinkedinIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:maaz7084@gmail.com"
                whileHover={{ scale: 2.1 }}
                className="text-red-400 hover:text-pink-300 transition-all duration-300"
              >
                <MailIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/maaz708"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 2.1 }}
                className="text-purple-400 hover:text-indigo-300 transition-all duration-300"
              >
                <GithubIcon className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  );
}
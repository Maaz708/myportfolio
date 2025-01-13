"use client";

import { motion } from 'framer-motion';
import { Shield, Code, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'AI assistant Automation System',
    category: 'Virtual Assistant',
    icon: Shield,
    description: 'Developed using Python automation scripts for daily tasks.',
  },
  {
    title: 'Cyber Autopsy',
    category: 'Cybersecurity',
    icon: Terminal,
    description: 'Implemented cyber forensics for malware and file analysis.',
  },
  {
    title: 'Fake News Detection',
    category: 'Machine Learning',
    icon: Code,
    description: 'Designed and implemented a web app which can detect fake news using fastapi.',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in cybersecurity and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm hover:border-cyan-500 transition-colors h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <project.icon className="h-8 w-8 mb-4 text-cyan-500" />
                  <div>
                    <span className="text-sm text-cyan-500">{project.category}</span>
                    <h3 className="font-orbitron text-xl font-bold mt-2 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
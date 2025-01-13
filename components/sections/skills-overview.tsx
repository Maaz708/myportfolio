"use client";

import { motion } from 'framer-motion';
import {
  Code2,
  Shield,
  Terminal,
  Database,
  Server,
  GitBranch
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const skills = [
  {
    title: 'Security Tools',
    description: 'Network Security Monitoring, Vulnerability Assessment, Security Automation',
    icon: Shield,
  },
  {
    title: 'Programming',
    description: 'Python (Intermediate), SQL (Intermediate), Shell Scripting',
    icon: Code2,
  },
  {
    title: 'Operating Systems',
    description: 'Linux (Advanced), Windows, System Administration',
    icon: Terminal,
  },
  {
    title: 'Databases',
    description: 'MySQL, SQL Server, Database Security',
    icon: Database,
  },
  {
    title: 'System Administration',
    description: 'Network Security, Access Control, Security Protocols',
    icon: Server,
  },
  {
    title: 'Development Tools',
    description: 'VS Code, Git, Security Testing Tools',
    icon: GitBranch,
  },
];

export function SkillsOverview() {
  return (
    <section className="py-24 px-6" id="skills" >
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-black-500 to-purple-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in cybersecurity and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:border-cyan-500 transition-colors bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <skill.icon className="h-8 w-8 mb-4 text-cyan-500 group-hover:text-fuchsia-500 transition-colors" />
                  <CardTitle className="font-orbitron">{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
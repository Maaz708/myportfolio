"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Google Cybersecurity Certification',
    company: 'Google (Coursera)',
    period: 'May 2024 – Oct 2024',
    location: 'Bangalore, India',
    achievements: [
      'Developed and implemented Python-based security automation scripts',
      'Mastered Linux security administration',
      'Created automated security monitoring solutions',
      'Conducted vulnerability assessments'
    ]
  },
  {
    title: 'Innovation Program',
    company: 'Inspire Internship',
    period: 'January 2018',
    location: 'Bareily, India',
    achievements: [
      'Secured 2nd position for innovative cybersecurity solutions',
      'Collaborated with cross-functional teams',
      'Proposed and implemented creative security solutions'
    ]
  },
  {
    title: 'Generative AI fo Educators',
    company: 'By Google',
    period: 'June 22, 2024',
    location: 'Bangalore, India',
    achievements: [
      'Exploring generative AI tools for personal assistant',
      'Discovering strategies for working with AI tools',
      'Practice these tools to plan and update lessons, prepare instructional materials, manage administrative tasks and more. '
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-cyan-200/20 to-background" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track record of success in cybersecurity with forensic tools for data mining and extraction and software development using AI&ML to develop websites and comprehensive study of No-code tools.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm hover:border-cyan-500 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-cyan-500">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {experience.company} | {experience.period}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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
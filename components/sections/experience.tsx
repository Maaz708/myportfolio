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
    title: 'Introduction to Software Engineering',
    company: 'IBM (Coursera)',
    period: 'August 2025',
    location: 'Bangalore, India',
    achievements: [
      'Studied software development life cycle methodologies.',
      'Learned best practices for coding, testing, and maintenance.',
      'Gained insights into agile and waterfall development models.'
    ]
  },
  {
    title: 'Getting Started with Git and GitHub',
    company: 'IBM (Coursera)',
    period: 'September 2025',
    location: 'Bangalore, India',
    achievements: [
      'Learned essential version control concepts with Git.',
      'Managed and collaborated on projects using GitHub workflows.',
      'Gained practical skills in branching, merging, and repository management. '
    ]
  },
  {
    title: 'Introduction to HTML, CSS, & JavaScript',
    company: 'IBM (Coursera)',
    period: 'September 2025',
    location: 'Bangalore, India',
    achievements: [
      'Built responsive web pages using HTML and CSS.',
      'Added interactivity and dynamic behavior with JavaScript.',
      'Developed a foundational understanding of front-end web development.'
    ]
  },
  {
    title: 'Introduction to Cloud Computing',
    company: 'IBM (Coursera)',
    period: 'August, 2025',
    location: 'Bangalore, India',
    achievements: [
      'Explored cloud service models and deployment options.',
      'Learned about key cloud infrastructure components.',
      'Understood benefits and challenges of cloud adoption.'
    ]
  },
  {
    title: 'Getting Started with DevOps on AWS',
    company: 'IBM (Coursera)',
    period: 'June 22, 2024',
    location: 'Bangalore, India',
    achievements: [
      'Mastered DevOps fundamentals and continuous integration/delivery (CI/CD) concepts.',
      'Gained hands-on experience with AWS automation and infrastructure management.',
      'Understood collaboration between development and operations teams for efficient deployments.'
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
            Professional Certificates
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

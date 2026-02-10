// app/portfolio/page.tsx
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FeaturedProjects } from '@/components/sections/featured-projects'; // Import the FeaturedProjects component
import { Testimonials } from '@/components/sections/testimonials'; // Import the Testimonials component

type PortfolioProject = {
  title: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string;
  icon?: LucideIcon;
  technologies?: string[];
  details?: string[];
  achievements?: string[];
};

const portfolioProjects: PortfolioProject[] = [
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
  },
  {
    title: 'Google Cybersecurity Certificate',
    description: 'Hands on practice with Security Information and Event Management(SIEM) tools and Intrusion Detection Systems(IDS) and automate tasks with Python.',
    icon: Shield,
    technologies: ['Python', 'Security Tools', 'Automation'],
    details: [
      'Implemented automated threat detection algorithms',
      'Created real-time monitoring dashboard',
      'Integrated with existing security tools'
    ]
  },
  {
    title: 'Cyber Investigation Tools',
    description: 'Optimized security protocols and command-line tools for enhanced system protection.',
    icon: Terminal,
    technologies: ['Linux', 'Bash', 'Security'],
    details: [
      'Real time network Monitoring',
      'Optimized system performance',
      'Malware detection Algorithms'
    ]
  },
  
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image for the First Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/cyberimg1.jpg)' }}
      />

      <div className="relative z-10 min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Showcasing my projects and achievements in cybersecurity and software development
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm hover:border-cyan-500 transition-colors">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        {project.icon && (
                          <project.icon className="h-8 w-8 text-cyan-500 flex-shrink-0" />
                        )}
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-2xl font-orbitron font-bold mb-2">
                              {project.title}
                            </h2>
                            {project.description && (
                              <p className="text-muted-foreground">{project.description}</p>
                            )}
                            {project.company && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {project.company}
                                {project.period && ` • ${project.period}`}
                                {project.location && ` • ${project.location}`}
                              </p>
                            )}
                          </div>
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-cyan-500/10 text-cyan-500"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                          {project.details && project.details.length > 0 && (
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                              {project.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          )}
                          {project.achievements && project.achievements.length > 0 && (
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                              {project.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Render the FeaturedProjects component */}
            <FeaturedProjects />

            {/* Render the Testimonials component */}
            <Testimonials />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
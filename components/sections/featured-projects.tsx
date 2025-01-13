"use client";

import { motion } from 'framer-motion';
import { Play, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Virtual Assistant with Nlp and Automation',
    category: 'Computer Science',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    description: 'An Ai assistant which can help you with daily tasks and automate it.',
  },
  {
    title: 'Gaming Website',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
    description: 'Frontend creation of a gaming website.',
  },
  {
    title: 'Fake news detector',
    category: 'News',
    thumbnail: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80',
    description: 'AI driven web app for fake news detection.',
  },
  {
    title: 'Cyber Autopsy',
    category: 'Cybersecurity',
    thumbnail: 'cyber.png',
    description: 'Implemented cyber forensics for malware and file analysis.',
  },

];

export function FeaturedProjects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-cyan-200/20 to-background">
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
            Explore our latest work and creative endeavors.
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
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-0">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="icon"
                        className="bg-cyan-500 hover:bg-cyan-600 text-background"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
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

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
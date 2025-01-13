"use client";

import { motion } from 'framer-motion';
import {
  Film,
  Edit,
  Pen,
  Camera,
  MonitorPlay,
  Sparkles,
  SquareParkingIcon,
  ProjectorIcon
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { machine } from 'os';

const services = [
  {
    title: 'Projects building',
    description: 'Professional project work with custom tools for researchers and students.',
    icon: ProjectorIcon,
  },
  {
    title: 'FrontEnd Websites',
    description: 'Build stylish websites with react.',
    icon: SquareParkingIcon,
  },
  {
    title: 'AI Agents',
    description: 'Custom AI agents for professional buisnessman and organisations.',
    icon: MonitorPlay,
  },
  {
    title: 'Freelancer',
    description: 'Comprehensive skills for blog and report writings.',
    icon: Pen,
  },
  {
    title: 'Portfolio Websites',
    description: 'Professional websites with stylish animations and grading.',
    icon: Sparkles,
  },
  {
    title: 'Audio Books',
    description: 'Produce audio books for trending topics for various purpose.',
    icon: Film,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-red-900 to-violet-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Services powered by creativity and technology to help students for future benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:border-cyan-500 transition-colors bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-4 text-cyan-500 group-hover:text-fuchsia-500 transition-colors" />
                  <CardTitle className="font-orbitron">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
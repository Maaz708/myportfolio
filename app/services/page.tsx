// app/services/page.tsx
"use client";

import { motion } from 'framer-motion';
import {
    Film,
    Edit,
    Pen,
    Camera,
    MonitorPlay,
    Sparkles,
    ProjectorIcon,
    SquareParkingIcon
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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

export function Services() {
    return (
        <section className="py-24 px-6 bg-gradient-to-r from-rose-500 to-purple-600">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 text-white"
                >
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-white max-w-2xl mx-auto">
                        Artificial Intelligence modern technologies to help you create projects with our services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:border-cyan-500 transition-colors bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105">
                                <CardHeader className="flex flex-col items-center p-6">
                                    <service.icon className="h-10 w-10 mb-4 text-cyan-500 group-hover:text-fuchsia-500 transition-colors" />
                                    <CardTitle className="font-orbitron text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                                    <CardDescription className="text-gray-600 text-center">{service.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Default export for the page
const ServicesPage = () => {
    return (
        <div>
            <Services />
        </div>
    );
};

export default ServicesPage;
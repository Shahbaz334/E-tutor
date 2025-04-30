"use client";

import { motion } from '@/components/motion-wrapper';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    value: "50K+",
    label: "Students",
    description: "Learners from 150+ countries"
  },
  {
    icon: <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    value: "500+",
    label: "Courses",
    description: "In various in-demand fields"
  },
  {
    icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    value: "97%",
    label: "Success Rate",
    description: "Of our graduates find employment"
  },
  {
    icon: <Globe className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    value: "200+",
    label: "Instructors",
    description: "Industry professionals & experts"
  }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Our <span className="text-primary">Impact</span> in Numbers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We've helped thousands of students achieve their educational and career goals.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary/10"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground text-center">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
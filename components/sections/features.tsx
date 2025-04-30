"use client";

import { motion } from '@/components/motion-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Video, Medal, Calendar, Star } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Comprehensive Curriculum",
    description: "Access a wide range of courses designed by industry experts for all skill levels."
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "Live Virtual Classrooms",
    description: "Engage in real-time learning with instructors and peers in interactive sessions."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Collaborative Learning",
    description: "Work on group projects and learn from a community of like-minded individuals."
  },
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
    title: "Industry Certifications",
    description: "Earn recognized credentials that validate your skills to potential employers."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace with courses that adapt to your busy lifestyle."
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Personalized Support",
    description: "Receive dedicated mentorship and guidance throughout your learning journey."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Why Choose <span className="text-primary">Learn to Shine</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Our platform offers a unique learning experience with features designed to help you succeed in your educational journey.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors hover:shadow-md">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from 'react';
import { motion } from '@/components/motion-wrapper';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import CourseCard from '@/components/ui/course-card';
import { Star, Users, Clock } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'web-dev', name: 'Web Development' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'business', name: 'Business' },
];

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React and Node.js in this comprehensive course.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    category: 'web-dev',
    rating: 4.8,
    students: 12453,
    duration: '24 hours',
    level: 'Beginner',
    instructor: 'Sarah Johnson',
    price: 89.99,
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data analysis, visualization, and machine learning.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    category: 'data-science',
    rating: 4.9,
    students: 8792,
    duration: '32 hours',
    level: 'Intermediate',
    instructor: 'Michael Chen',
    price: 99.99,
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Learn to create beautiful, user-friendly interfaces that engage and convert.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    category: 'design',
    rating: 4.7,
    students: 6234,
    duration: '18 hours',
    level: 'All Levels',
    instructor: 'Emma Rodriguez',
    price: 79.99,
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Develop effective marketing campaigns across multiple digital channels.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    category: 'marketing',
    rating: 4.6,
    students: 5289,
    duration: '16 hours',
    level: 'Beginner',
    instructor: 'David Thompson',
    price: 69.99,
  },
  {
    id: 5,
    title: 'Business Analytics & Intelligence',
    description: 'Learn to make data-driven business decisions with powerful analytics tools.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    category: 'business',
    rating: 4.8,
    students: 4327,
    duration: '22 hours',
    level: 'Intermediate',
    instructor: 'Lisa Wong',
    price: 94.99,
  },
  {
    id: 6,
    title: 'JavaScript Frameworks Deep Dive',
    description: 'Master React, Vue, and Angular with hands-on projects and real-world applications.',
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
    category: 'web-dev',
    rating: 4.9,
    students: 7823,
    duration: '28 hours',
    level: 'Advanced',
    instructor: 'Alex Rodriguez',
    price: 109.99,
  },
];

export default function CourseShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-primary">Courses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Explore our most popular courses designed to help you develop in-demand skills for today's job market.
          </motion.p>
        </div>
        
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="font-medium">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
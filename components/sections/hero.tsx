"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from '@/components/motion-wrapper';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20">
              Unlock Your Potential Today
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Learn, Grow, <span className="text-primary">Shine</span> in Your Career
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Get started on your educational journey with expert-led courses designed to help you succeed in today's competitive world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="sm:w-auto text-base font-medium">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="sm:w-auto text-base font-medium">
                Learn More
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search for courses, programs..." 
                  className="pl-10 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px] w-full">
              <Image 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                alt="Students learning" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M2 14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M2 20c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M14 14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M14 20c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium">5000+ Courses</h3>
                    <p className="text-sm text-muted-foreground">From top instructors</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Industry Certificates</h3>
                    <p className="text-sm text-muted-foreground">Boost your resume</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
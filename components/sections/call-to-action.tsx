"use client";

import { motion } from '@/components/motion-wrapper';
import { Button } from '@/components/ui/button';
import { BookOpen, Star, Clock, Shield } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Join thousands of satisfied students and transform your career with our industry-leading courses and expert instructors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Access to 500+ courses</h3>
                  <p className="text-sm text-primary-foreground/80">Learn at your own pace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Expert instructors</h3>
                  <p className="text-sm text-primary-foreground/80">Learn from the best</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Lifetime access</h3>
                  <p className="text-sm text-primary-foreground/80">Learn on your schedule</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">30-day money-back</h3>
                  <p className="text-sm text-primary-foreground/80">Risk-free guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" className="font-medium">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 font-medium">
                View Pricing Plans
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Sign Up For Our Newsletter</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get updates on new courses, special offers, and educational content delivered straight to your inbox.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="" disabled selected>Select your interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div className="pt-2">
                <Button className="w-full bg-white text-primary hover:bg-white/90" size="lg">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-center text-primary-foreground/70 pt-2">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
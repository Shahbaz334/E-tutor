"use client";

import { motion } from '@/components/motion-wrapper';
import Image from 'next/image';

// Using placeholder names for partners
const partners = [
  { name: "TechCorp", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=TechCorp" },
  { name: "GlobalEdu", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=GlobalEdu" },
  { name: "FutureLabs", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=FutureLabs" },
  { name: "InnovateX", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=InnovateX" },
  { name: "EduSphere", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=EduSphere" },
  { name: "BrightPath", logo: "https://via.placeholder.com/200x80/f2f2f2/666666?text=BrightPath" },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
          >
            Trusted by <span className="text-primary">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            We collaborate with leading companies to ensure our curriculum meets industry standards.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="relative h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
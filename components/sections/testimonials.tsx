"use client";

import { motion } from '@/components/motion-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Learn to Shine transformed my career. The web development course gave me the skills to land my dream job in just 6 months. The instructors were incredibly supportive throughout my journey.",
    author: "Jessica Williams",
    title: "Frontend Developer",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
  },
  {
    id: 2,
    content: "As someone transitioning careers, the data science program provided exactly what I needed. The curriculum was comprehensive and the mentorship was invaluable. I'm now working as a junior data analyst!",
    author: "Michael Rodriguez",
    title: "Data Analyst",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
  },
  {
    id: 3,
    content: "The design course exceeded all my expectations. The projects were challenging yet engaging, and I was able to build a portfolio that impressed my employers. Highly recommend for aspiring designers.",
    author: "Sarah Chen",
    title: "UI/UX Designer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
  },
  {
    id: 4,
    content: "I completed the digital marketing certification while working full-time. The flexible schedule made it possible to balance both. The skills I gained helped me secure a promotion within three months!",
    author: "James Wilson",
    title: "Marketing Specialist",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
  },
  {
    id: 5,
    content: "The business analytics course was precisely what our startup needed. The practical knowledge I gained helped us make data-driven decisions that significantly improved our growth trajectory.",
    author: "Elena Patel",
    title: "Startup Founder",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
  },
];

export default function Testimonials() {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

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
            What Our <span className="text-primary">Students Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Hear from our students who have transformed their careers through our courses.
          </motion.p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full">
                  <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                    <CardContent className="pt-6 pb-2">
                      <Quote className="h-8 w-8 text-primary/40 mb-4" />
                      <p className="text-md">{testimonial.content}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>{getInitials(testimonial.author)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
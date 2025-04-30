"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Users, Clock } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  instructor: string;
  price: number;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
    }
  };

  // Get instructor initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className={`${getLevelColor(course.level)}`}>
            {course.level}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({Math.floor(course.students / 100)} reviews)</span>
          </div>
          <div className="text-lg font-bold">${course.price}</div>
        </div>
        <h3 className="font-semibold text-lg mt-2 line-clamp-2">
          {course.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{new Intl.NumberFormat().format(course.students)} students</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col space-y-4">
        <div className="w-full h-px bg-border" />
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{getInitials(course.instructor)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
          
          <Button size="sm" asChild>
            <Link href={`/courses/${course.id}`}>Enroll Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
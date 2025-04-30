"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, BookOpen, Lightbulb } from 'lucide-react';

const courses = [
  {
    title: "Web Development",
    href: "/courses/web-development",
    description: "Learn to build modern, responsive websites with HTML, CSS, and JavaScript.",
  },
  {
    title: "Data Science",
    href: "/courses/data-science",
    description: "Master data analysis, visualization, and machine learning techniques.",
  },
  {
    title: "Digital Marketing",
    href: "/courses/digital-marketing",
    description: "Develop skills in SEO, social media marketing, and digital advertising.",
  },
  {
    title: "Graphic Design",
    href: "/courses/graphic-design",
    description: "Create stunning visual content with industry-standard tools and techniques.",
  },
];

const programs = [
  {
    title: "Career Certification",
    href: "/programs/career-certification",
    description: "Industry-recognized certifications to boost your resume.",
  },
  {
    title: "Bootcamps",
    href: "/programs/bootcamps",
    description: "Intensive, immersive learning experiences for rapid skill development.",
  },
  {
    title: "Degree Programs",
    href: "/programs/degree",
    description: "Accredited online degree programs in partnership with top universities.",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-background/95" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Learn to Shine</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle({
                      className: cn(pathname === "/" && "text-primary font-medium")
                    })}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {courses.map((course) => (
                        <ListItem
                          key={course.title}
                          title={course.title}
                          href={course.href}
                          className={cn(pathname === course.href && "bg-muted")}
                        >
                          {course.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {programs.map((program) => (
                        <ListItem
                          key={program.title}
                          title={program.title}
                          href={program.href}
                          className={cn(pathname === program.href && "bg-muted")}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle({
                      className: cn(pathname === "/about" && "text-primary font-medium")
                    })}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle({
                      className: cn(pathname === "/contact" && "text-primary font-medium")
                    })}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-2 ml-4">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-background shadow-lg z-20 border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={cn("px-4 py-2 rounded-md hover:bg-muted transition-colors", 
                pathname === "/" && "bg-muted font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <div className="font-medium">Courses</div>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {courses.map((course) => (
                  <Link 
                    key={course.title}
                    href={course.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="font-medium">Programs</div>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {programs.map((program) => (
                  <Link 
                    key={program.title}
                    href={program.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/about" 
              className={cn("px-4 py-2 rounded-md hover:bg-muted transition-colors", 
                pathname === "/about" && "bg-muted font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={cn("px-4 py-2 rounded-md hover:bg-muted transition-colors", 
                pathname === "/contact" && "bg-muted font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
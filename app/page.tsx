import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import CourseShowcase from '@/components/sections/course-showcase';
import Testimonials from '@/components/sections/testimonials';
import Stats from '@/components/sections/stats';
import Partners from '@/components/sections/partners';
import CallToAction from '@/components/sections/call-to-action';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CourseShowcase />
      <Stats />
      <Testimonials />
      <Partners />
      <CallToAction />
    </>
  );
}
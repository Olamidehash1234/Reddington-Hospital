import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroSection from './hero';
import Clients from './clients';
import Aboutsection from './about';
import ServicesPage from './services';
import DoctorsSection from './doctors';
import TestimonialPage from './testimonials';
import BlogPage from './blog';
import InsurancePartners from './insurance'
import HMOsection from './HMO'
import Newsletter from './Newsletter';

const Homepage = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    sections.forEach((section) => {
      gsap.set(section, { autoAlpha: 0, y: 40 });
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={(el) => { sectionsRef.current[0] = el; }}>
        <HeroSection />
      </div>
      <div ref={(el) => { sectionsRef.current[1] = el; }}>
        <Clients />
      </div>
      <div ref={(el) => { sectionsRef.current[2] = el; }}>
        <Aboutsection />
      </div>
      <div ref={(el) => { sectionsRef.current[3] = el; }}>
        <ServicesPage />
      </div>
      <div ref={(el) => { sectionsRef.current[4] = el; }}>
        <DoctorsSection />
      </div>
      <div ref={(el) => { sectionsRef.current[5] = el; }}>
        <TestimonialPage />
      </div>
      <div ref={(el) => { sectionsRef.current[6] = el; }}>
        <BlogPage />
      </div>
      <div ref={(el) => { sectionsRef.current[7] = el; }}>
        <InsurancePartners />
      </div>
      <div ref={(el) => { sectionsRef.current[8] = el; }}>
        <HMOsection />
      </div>
      <div ref={(el) => { sectionsRef.current[9] = el; }}>
        <Newsletter />
      </div>
    </div>
  );
};

export default Homepage;

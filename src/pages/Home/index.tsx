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
  return (
    <div>
        <HeroSection />
        <Clients />
        <Aboutsection />
        <ServicesPage />
        <DoctorsSection />
        <TestimonialPage />
        <BlogPage/>
        <InsurancePartners />
        <HMOsection />
        <Newsletter />
    </div>
  );
};

export default Homepage;

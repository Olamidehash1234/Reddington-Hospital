import HeroSection from './hero';
import Clients from './clients';
import Aboutsection from './about';
import ServicesPage from './services';
import DoctorsSection from './doctors';
import TestimonialPage from './testimonials';
import BlogPage from './blog';
// import Partners from './partners'
// import Feedback from './feedback'

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
        {/* <Partners /> */}
        {/* <Feedback /> */}
    </div>
  );
};

export default Homepage;

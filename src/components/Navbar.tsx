import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled,] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 30);
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // GSAP Animation for mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, scaleY: 0, transformOrigin: 'top' },
          { opacity: 1, scaleY: 1, duration: 0.2, ease: 'back.out' }
        );
      } else {
        gsap.to(
          mobileMenuRef.current,
          { opacity: 0, scaleY: 0, duration: 0.2, ease: 'back.in' }
        );
      }
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Find a Doctor', href: '/' },
    { name: 'Our Branches', href: '/' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/45 z-40 transition-opacity duration-200 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Main Navbar */}
      <nav className={`max-w-[2600px] mx-auto fixed z-50 ${
        isScrolled 
          ? 'top-0 left-0 right-0 w-full' 
          : 'lg:top-[30px] top-[20px] left-[12px] right-[12px] lg:left-[30px] lg:right-[30px]'
      }`}>
        {/* Navbar Container */}
        <div className={`bg-[#E40714] shadow-lg px-6 py-4 lg:py-[23px] lg:px-[40px] ${
          isScrolled ? 'rounded-none' : isOpen ? 'rounded-t-[30px]' : 'rounded-full'
        }`}>
          <div className="mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <img 
                src="/logo-white.svg" 
                alt="Reddington Hospital" 
                className="w-[150px] h-[40px] lg:w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex whitespace-nowrap items-center space-x-[20px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Emergency Response */}
              <button className=" hidden lg:flex text-white items-center hover:underline underline-offset-[4px] space-x-2 px-4 rounded-full">
                <img src="/icon/call.svg" alt="" />
                <span className="text-sm font-medium">Emergency Response</span>
              </button>
              {/* Request Appointment Button */}
              <button className="bg-[#FFFFFF] text-[#E40714] px-6 py-2 lg:px-[16px] lg:py-[12px] rounded-[20px] font-semibold text-sm hover:bg-opacity-90 transition-all">
                Request Appointment
              </button>
            </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white flex-shrink-0"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside Navbar */}
      <div 
        ref={mobileMenuRef}
        className={`fixed left-[12px] right-[12px] z-[100] lg:hidden origin-top ${
          isScrolled ? 'top-[60px]' : 'top-[90px]'
        } ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ opacity: 0 }}
      >
        <div className={`bg-[#E40714] shadow-lg px-6 py-4 ${
          !isScrolled ? 'rounded-b-[30px]' : ''
        }`}>
          <div className="flex flex-col space-y-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white text-sm font-medium hover:opacity-80 transition-opacity px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Emergency & CTA */}
            <div className="pt-4 border-t border-white border-opacity-30 space-y-3">
              <button className="flex items-center space-x-2 text-white hover:underline underline-offset-[4px] w-full justify-center">
                <img src="/icon/call.svg" alt="" className="w-[30px] h-[30px]" />
                <span className="text-white text-sm font-medium">Emergency Response</span>
              </button>

              <button className="w-full bg-white text-[#E40714] px-6 py-[14px] rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all">
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

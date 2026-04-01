import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

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
    { name: 'Find a Doctor', href: '/doctor' },
    { name: 'Our Branches', href: '/our-branches' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const emergencyButton = (
    <button
      type="button"
      className="text-white items-center hover:underline underline-offset-[4px] space-x-2 px-4 rounded-full flex"
    >
      <img src="/icon/call.svg" alt="" />
      <span className="text-sm font-medium">Emergency Response</span>
    </button>
  );

  const appointmentButton = (
    <button
      type="button"
      className="bg-[#FFFFFF] text-[#E40714] px-6 py-2 lg:px-[16px] lg:py-[12px] rounded-[20px] font-semibold text-sm hover:bg-opacity-90 transition-all whitespace-nowrap"
    >
      Request Appointment
    </button>
  );

  return (
    <>
      {/* Backdrop: mobile (&lt;1025) + tablet mid (1025–1400) when menu open; hidden ≥1401 */}
      <div
        className={`navbar-menu-backdrop inset-0 bg-black/45 z-40 transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Main Navbar */}
      <nav className="max-w-[2600px] absolute lg:px-[30px] w-full px-[12px] pt-[20px] lg:pt-[30px] lg:pb-0 z-50">
        <div
          className={`bg-[#E40714] shadow-lg px-6 py-4 lg:py-[23px] lg:px-[40px] ${
            isOpen ? 'rounded-t-[30px]' : 'rounded-full'
          }`}
        >
          <div className="mx-auto flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0 min-w-0">
              <img
                src="/logo-white.svg"
                alt="Reddington Hospital"
                className="w-[150px] h-[40px] lg:w-auto"
              />
            </Link>

            <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1">
              {/* Desktop nav + inline emergency — visible ≥1401px via CSS */}
              <div className="navbar-desktop-nav hidden md:hidden items-center space-x-[20px] min-w-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative text-white text-[14px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-[1px] after:h-[1px] after:w-full after:bg-white after:origin-left after:transition-transform after:duration-300 ${
                      isActiveLink(link.href)
                        ? 'after:scale-x-100'
                        : 'after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="navbar-emergency-desktop flex items-center space-x-6 flex-shrink-0">
                  {emergencyButton}
                  {appointmentButton}
                </div>
              </div>

              {/* Mid breakpoint (1025–1400): desktop emergency beside menu button; hidden on mobile & full desktop */}
              <div className="navbar-emergency-mid hidden items-center space-x-4 lg:space-x-6 flex-shrink-0">
                {emergencyButton}
                {/* {appointmentButton} */}
              </div>

              <button
                type="button"
                onClick={toggleMenu}
                className="navbar-mobile-btn text-white flex-shrink-0"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet menu panel — hidden ≥1401px via CSS */}
      <div
        ref={mobileMenuRef}
        className={`navbar-mobile-menu absolute navbar-mobile-menu-outer top-[90px] z-[50] px-[0px] navbar-mobile-menu-position flex min-w-0 flex-col box-border ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ opacity: 0 }}
      >
        <div
          className="bg-[#E40714] navbar-mobile-menu2 w-full min-w-0 px-6 py-4 rounded-b-[30px]"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-white text-sm font-medium transition-all duration-300 px-2 py-2 after:absolute after:left-2 after:right-2 after:-bottom-[2px] after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-300 ${
                  isActiveLink(link.href)
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0 hover:after:scale-x-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white border-opacity-30 space-y-3">
              <button
                type="button"
                className="navbar-emergency-mobile flex items-center space-x-2 text-white hover:underline underline-offset-[4px] w-full justify-center"
              >
                <img src="/icon/call.svg" alt="" className="w-[30px] h-[30px]" />
                <span className="text-white text-sm font-medium">Emergency Response</span>
              </button>

              <button
                type="button"
                className="w-full bg-white text-[#E40714] px-6 py-[14px] rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

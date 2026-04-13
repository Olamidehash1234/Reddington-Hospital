import { Link } from 'react-router-dom';

const Footer = () => {
  const imgSvg = '/icon/facebook.svg';
  const imgGroup = '/icon/ig.svg';
  const imgGroup1 = '/icon/linkedln.svg';
  const imgYoutubeLine = '/icon/youtube.svg';

  const companyLinks = [
    'About Us',
    'Our Departments',
    'Find a Doctor',
    'Our Branches',
    'Contact Us',
    'Accreditations & Awards',
  ];

  const departmentsLinks = [
    'Interventional Cardiology',
    'Surgical services',
    'Interventional Radiology',
    'Diagnostic Imaging',
    'Clinical Laboratory',
    'Endoscopy',
    'Emergency Response',
    'General Paediactric Service',
    'Clinical Specialities',
  ];

  const mediaLinks = [
    { text: 'Blog & Article', path: '/blog&insights' },
    { text: 'News & Events', path: '/blog&insights' },
    { text: 'Careers', path: '/career' }
  ];

  return (
    <footer className="relative bg-white text-[#2d2d2d] border-t border-[#2d2d2d]/10 overflow-hidden">
      <img src="/icon/illustrations/ft-1.svg" alt="Decorative Circle" className="absolute bottom-[0px] left-[0px] z-10"></img>

      <div className="px-[16px] lg:px-[80px] py-[50px] lg:py-[60px]">
        <div className="flex flex-wrap justify-between lg:flex-row gap-[40px] lg:gap-[55px]">
          <div className="flex flex-col">
            <div className="flex items-start">
              <img src="/icon/footer-logo.svg" alt="" />
            </div>

            <p className="mt-[14px] text-[14px] lg:text-[15px] leading-[24px] max-w-[313px]">
              Renowned at home and abroad for medical excellence, attracting world-class specialist
              Doctors and Surgeons committed to your health and wellbeing.
            </p>

            <div className="mt-[18px] flex items-center gap-[10px]">
              {[
                { src: imgSvg, label: 'Facebook' },
                { src: imgGroup, label: 'Instagram' },
                { src: imgGroup1, label: 'LinkedIn' },
                { src: imgYoutubeLine, label: 'YouTube' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to="#"
                  aria-label={item.label}
                  className="w-[48px] h-[35px] rounded-[20px] border border-[#2D2D2D] flex items-center justify-center transition-opacity hover:opacity-80 text-[#2D2D2D]"
                >
                  <img src={item.src} alt="" aria-hidden="true" className="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap md:flex-wrap lg:flex-row justify-between gap-[36px] md:gap-[30px] lg:gap-[48px]">
            {/* Left: Logo + description + socials */}
            {/* Company */}
            <div>
              <h3 className="text-[18px] lg:text-[22px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Company
              </h3>
              <ul className="mt-[18px] space-y-[14px] text-[#2D2D2D] text-[14px] lg:text-[15px] leading-[19px]">
                {companyLinks.map((t) => (
                  <li key={t}>
                    <Link to="#" className="hover:opacity-80 text-[#2D2D2D]">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Departments */}
            <div>
              <h3 className="text-[18px] lg:text-[22px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Our Departments
              </h3>
              <ul className="mt-[18px] space-y-[14px] text-[#2D2D2D] text-[14px] lg:text-[15px] leading-[19px]">
                {departmentsLinks.map((t) => (
                  <li key={t}>
                    <Link to="#" className="hover:opacity-80 text-[#2D2D2D]">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-[18px] lg:text-[22px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Media
              </h3>
              <ul className="mt-[18px] space-y-[14px] text-[#2D2D2D] text-[14px] lg:text-[15px] leading-[19px]">
                {mediaLinks.map((item) => (
                  <li key={item.text}>
                    <Link to={item.path} className="hover:opacity-80 text-[#2D2D2D]">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-[18px] lg:text-[22px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Contact Information
              </h3>
              <div className="mt-[18px] text-[14px] lg:text-[15px] leading-[28px] space-y-[10px]">
                <p className="font-medium">• 12 Idowu Martins Street, V.I, Lagos</p>
                <p>09165359769, 012715340 - 4</p>
                <p className="font-medium">• Lekki Phase 1, Lagos</p>
                <p>+234 916 535 9769</p>
                <p className="font-medium">• Ikeja GRA, Lagos</p>
                <p>+234 812 800 8187</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
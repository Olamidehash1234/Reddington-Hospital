import React from 'react';

const Footer = () => {
  const imgSvg = 'https://www.figma.com/api/mcp/asset/89ac3c38-b4a1-40fe-b990-a42e225b6ff8';
  const imgGroup = 'https://www.figma.com/api/mcp/asset/04eb9db4-ef2a-4bae-92a6-584a758317e8';
  const imgGroup1 = 'https://www.figma.com/api/mcp/asset/e4836a17-f9ed-48f3-924e-f899295a6adc';
  const imgYoutubeLine = 'https://www.figma.com/api/mcp/asset/aba6fc6e-1d18-4dfc-8e93-ced874e0c974';

  // Two-part “Reddington Hospital” logo as per Figma.
  const imgLogoPart1 = 'https://www.figma.com/api/mcp/asset/d09fe4db-031c-491d-9d04-9c23720dce7e';
  const imgLogoPart2 = 'https://www.figma.com/api/mcp/asset/970c005e-b6a1-42d9-bfe4-f3ac56537dce';

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

  const mediaLinks = ['Blog & Article', 'News & Events', 'Careers'];

  return (
    <footer className="bg-white text-[#2d2d2d] border-t border-[#2d2d2d]/10">
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[50px] lg:py-[60px]">
        <div className="grid grid-cols-1 gap-[36px] lg:grid-cols-5 lg:gap-[48px]">
          {/* Left: Logo + description + socials */}
          <div className="flex flex-col">
            <div className="flex items-start gap-[18px]">
              <div className="relative w-[170px] h-[44px] shrink-0">
                <img
                  src={imgLogoPart1}
                  alt="Reddington Hospital"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <img
                  src={imgLogoPart2}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="mt-[14px] text-[14px] lg:text-[16px] leading-[24px] max-w-[340px] font-['Montserrat:Regular']">
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
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="w-[40px] h-[40px] rounded-full border border-[#2d2d2d] flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img src={item.src} alt="" aria-hidden="true" className="w-[16px] h-[16px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-['TexGyreAdventor'] text-[18px] lg:text-[24px] text-black">
              Company
            </h3>
            <ul className="mt-[18px] space-y-[12px] font-['Montserrat:Medium'] text-[14px] lg:text-[16px] leading-[19px]">
              {companyLinks.map((t) => (
                <li key={t}>
                  <a href="#" className="hover:opacity-80">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Departments */}
          <div>
            <h3 className="font-['TexGyreAdventor'] text-[18px] lg:text-[24px] text-black">
              Our Departments
            </h3>
            <ul className="mt-[18px] space-y-[12px] font-['Montserrat:Medium'] text-[14px] lg:text-[16px] leading-[19px]">
              {departmentsLinks.map((t) => (
                <li key={t}>
                  <a href="#" className="hover:opacity-80">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h3 className="font-['TexGyreAdventor'] text-[18px] lg:text-[24px] text-black">
              Media
            </h3>
            <ul className="mt-[18px] space-y-[12px] font-['Montserrat:Medium'] text-[14px] lg:text-[16px] leading-[19px]">
              {mediaLinks.map((t) => (
                <li key={t}>
                  <a href="#" className="hover:opacity-80">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-['TexGyreAdventor'] text-[18px] lg:text-[24px] text-black">
              Contact Information
            </h3>
            <div className="mt-[18px] font-['Montserrat:Medium'] text-[14px] lg:text-[16px] leading-[28px] space-y-[10px]">
              <p>12 Idowu Martins Street, V.I, Lagos</p>
              <p>09165359769, 012715340 - 4</p>
              <p>Lekki Phase 1, Lagos</p>
              <p>+234 916 535 9769</p>
              <p>Ikeja GRA, Lagos</p>
              <p>+234 812 800 8187</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

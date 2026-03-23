import { Link } from 'react-router-dom';

const Footer = () => {
  const imgSvg = 'https://www.figma.com/api/mcp/asset/89ac3c38-b4a1-40fe-b990-a42e225b6ff8';
  const imgGroup = 'https://www.figma.com/api/mcp/asset/04eb9db4-ef2a-4bae-92a6-584a758317e8';
  const imgGroup1 = 'https://www.figma.com/api/mcp/asset/e4836a17-f9ed-48f3-924e-f899295a6adc';
  const imgYoutubeLine = 'https://www.figma.com/api/mcp/asset/aba6fc6e-1d18-4dfc-8e93-ced874e0c974';

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
      <div className="px-[16px] lg:px-[80px] py-[50px] lg:py-[60px]">
        <div className="flex flex-wrap justify-between lg:flex-row gap-[55px]">
          <div className="flex flex-col">
            <div className="flex items-start gap-[18px]">
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
                  className="w-[40px] h-[40px] rounded-full border border-[#2d2d2d] flex items-center justify-center transition-opacity hover:opacity-80 text-[#2D2D2D]"
                >
                  <img src={item.src} alt="" aria-hidden="true" className="w-[16px] h-[16px]" />
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
                {mediaLinks.map((t) => (
                  <li key={t}>
                    <Link to="#" className="hover:opacity-80 text-[#2D2D2D]">
                      {t}
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
import { Link } from 'react-router-dom';

const Footer = () => {
  const imgSvg = '/icon/facebook.svg';
  const imgGroup = '/icon/ig.svg';
  const imgGroup1 = '/icon/linkedln.svg';
  const imgYoutubeLine = '/icon/youtube.svg';

  const companyLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'Our Departments', path: '/services' },
    { text: 'Find a Doctor', path: '/doctors' },
    { text: 'Our Branches', path: '/our-branches' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'Accreditations and Awards', path: '/awards' },
  ];

  const departmentGroups = [
    {
      title: 'Clinical Departments',
      links: [
        { text: 'Emergency Medicine', path: '/services#emergency-medicine' },
        { text: 'Internal Medicine', path: '/services' },
        { text: 'Surgery', path: '/services#general-surgery' },
        { text: 'Obstetrics and Gynaecology', path: '/services#obstetrics-and-gynaecology' },
        { text: 'Paediatrics', path: '/services#paediatrics' },
        { text: 'Family Medicine', path: '/services#family-medicine' },
        { text: 'Psychiatry and Clinical Psychology', path: '/services' },
        { text: 'Ophthalmology', path: '/services#ophthalmology-eye-care' },
        { text: 'Ear, Nose and Throat (ENT)', path: '/services#ear-nose-and-throat-ent' },
        { text: 'Dental Services', path: '/services#dentistry-and-maxillofacial-surgery' },
        { text: 'Physiotherapy', path: '/services#physiotherapy' },
      ],
    },
    {
      title: 'Diagnostic and Therapeutic Departments',
      links: [
        { text: 'Laboratory Services', path: '/services' },
        { text: 'Radiology and Imaging', path: '/services#diagnostic-imaging-purple-ray' },
        { text: 'Pharmacy', path: '/services' },
        { text: 'Nutrition and Dietetics', path: '/services' },
      ],
    },
    {
      title: 'Specialized Centers',
      links: [
        { text: 'Wellness and Executive Medical Check-up Center', path: '/services#health-screening-and-wellness' },
        { text: 'Cardiac Center - Cath Lab and Cardiac Surgery', path: '/services#cardiology' },
        { text: 'Dialysis Center - Haemodialysis and Peritoneal Dialysis', path: '/services#nephrology-and-dialysis' },
      ],
    },
  ];

  const mediaLinks = [
    { text: 'Articles', path: '/blog&insights' },
    { text: 'News & Events', path: '/blog&insights' },
    { text: 'Careers', path: '/career' }
  ];

  return (
    <footer className="relative bg-white text-[#2d2d2d] border-t border-[#2d2d2d]/10 overflow-hidden">
      <img src="/icon/illustrations/ft-1.svg" alt="Decorative Circle" className="absolute bottom-[0px] left-[0px] z-10"></img>

      <div className="px-[16px] lg:px-[40px] py-[50px] lg:py-[60px]">
        <div className="flex flex-wrap lg:flex-row gap-[40px] lg:gap-[40px]">
          <div className="flex flex-col">
            <div className="flex items-start">
              <img src="/icon/footer-logo.svg" alt="" className='lg:w-[250px]'/>
            </div>

            <p className="mt-[14px] text-[14px] lg:text-[14px] leading-[24px] max-w-[280px]">
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

          <div className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[36px] md:gap-[30px] lg:gap-[0px]">
            {/* Left: Logo + description + socials */}
            {/* Company */}
            <div>
              <h3 className="text-[18px] lg:text-[18px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Company
              </h3>
              <ul className="mt-[18px] space-y-[14px] text-[#2D2D2D] text-[14px] lg:text-[15px] leading-[19px]">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <Link to={link.path} className="hover:opacity-80 text-[#2D2D2D]">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Departments */}
            <div>
              <h3 className="text-[18px] lg:text-[18px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Our Departments
              </h3>
              <div className="mt-[18px] space-y-[16px] text-[#2D2D2D] text-[14px] lg:text-[14px] leading-[19px]">
                {departmentGroups.map((group) => (
                  <div key={group.title}>
                    <p className="font-semibold text-black">{group.title}</p>
                    <ul className="mt-[10px] space-y-[8px]">
                      {group.links.map((link) => (
                        <li key={link.text}>
                          <Link to={link.path} className="hover:opacity-80 text-[#2D2D2D]">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-[18px] lg:text-[18px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
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
              <h3 className="text-[18px] lg:text-[18px] text-black" style={{ fontFamily: 'TexGyreAdventor' }}>
                Contact Information
              </h3>
              <div className="mt-[15px] text-[14px] lg:text-[14px] max-w-[250px] leading-[22px] space-y-[10px]">
                <p className="font-medium">• Reddington Multi Specialist Hospital, Victoria Island</p>
                <p>09165359769, 012715340 - 4</p>
                <p className="font-medium">• Reddington Lekki Hospital, Lekki Phase 1</p>
                <p>+234 916 535 9769</p>
                <p className="font-medium">• Reddington Hospital, Ikeja GRA</p>
                <p>09093928064, 07078760874, 07078761595, 08092804119</p>
                <p className="font-medium">• Reddington Maxy Super Speciality Centre, 14 Akin Olugbade Street, Victoria Island</p>
                <p>0803 585 6227, 0810 129 1300, 0816 294 4221</p>
                <p className="font-medium">• Reddington Breast & Gynae Centre, 276A Kofo Abayomi Street, Victoria Island</p>
                <p>09071978966, 09072776884</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

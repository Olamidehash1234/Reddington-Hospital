import DoctorCard from '../../components/DoctorCard';
import { Link } from 'react-router-dom'

export default function DoctorsSection() {
    const doctorImage = '/image/home/doctor/dct-1.png';
    const doctors = [
        {
            id: 1,
            name: 'Dr. Abiodun Osibamowo',
            specialization: 'Internal Medicine and Medical Director',
            image: doctorImage,
            location: "Reddington V.I",
        },
        {
            id: 2,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
            location: "Reddington V.I",
        },
        {
            id: 3,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
            location: "Reddington V.I",
        },
        {
            id: 4,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
            location: "Reddington V.I",
        },
    ];

    const visibleDoctors = doctors.slice();

    return (
        <section className="relative bg-[#E40714] py-[60px] lg:py-[100px] overflow-hidden">
            {/* Decorative background elements */}
            <img src="/icon/illustrations/dct-tp-lft.svg" alt="Decorative Circle" className="absolute border-white top-[0px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/dct-lp-md.svg" alt="Decorative Circle" className="absolute top-[70px] left-[500px] z-10"></img>
            <img src="/icon/illustrations/dct-md.svg" alt="Decorative Circle" className="absolute top-[290px] left-[660px] z-10"></img>
            <img src="/icon/illustrations/dct-lft.svg" alt="Decorative Circle" className="absolute top-[210px] right-[390px] z-10"></img>
            <img src="/icon/illustrations/dct-rgt.svg" alt="Decorative Circle" className="absolute top-[0px] right-[0px] z-10"></img>

            <div className="flex items-center gap-3 mb-[10px] lg:mb-[0px]">
                <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#FFFFFF]"></div>
                <span className="text-[#FFFFFF] font-medium text-sm lg:text-[15px]">
                    Our Expert Doctors
                </span>
            </div>

            <div className="px-[16px] lg:px-[80px] mx-auto">
                {/* Header Section */}
                <div className="flex items-end justify-between mb-[40px] lg:mb-[40px]">
                    <div>
                        {/* Heading */}
                        <h2 className="text-white text-[24px] lg:text-[45px] leading-tight mb-[10px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                            Meet Our Specialists
                        </h2>

                        {/* Description */}
                        <p className="text-white text-[13px] font-medium  lg:text-[16px] leading-[19px] lg:leading-[19px] max-w-[596px]">
                            World-class doctors and surgeons committed to your health and
                            wellbeing, bringing international expertise to Nigerian healthcare.
                        </p>
                    </div>

                    {/* View All Button */}
                    <button className="hidden lg:block bg-white text-[#E40714] px-[24px] py-[16px] rounded-full font-medium text-[14px] hover:bg-gray-100 transition-colors whitespace-nowrap">
                        View All Specialists
                    </button>
                </div>

                {/* Doctors Grid/Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[40px]">
                        {visibleDoctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <Link to ="/doctor">
                        <button className="lg:hidden w-full bg-white text-[#E40714] px-[24px] py-[14px] rounded-[12px] font-medium text-[13px] hover:bg-gray-100 transition-colors mt-[30px]">
                            View All Specialists
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

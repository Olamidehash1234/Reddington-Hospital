import { useState } from 'react';

export default function DoctorsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const doctorImage = '/image/home/doctor/dct-1.png';
    const doctors = [
        {
            id: 1,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
        },
        {
            id: 2,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
        },
        {
            id: 3,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
        },
        {
            id: 4,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
        },
        {
            id: 5,
            name: 'Dr Seyi Oyesola',
            specialization: 'Critical Care Consultant',
            image: doctorImage,
        },
    ];

    const itemsPerView = 4;
    const totalSlides = Math.ceil(doctors.length / itemsPerView);
    const goToSlide = (index: number) => setCurrentIndex(index);

    const visibleDoctors = doctors.slice(
        currentIndex * itemsPerView,
        (currentIndex + 1) * itemsPerView
    );

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
                            <div key={doctor.id} className="flex flex-col items-center">
                                {/* Doctor Image Card */}
                                <div className="relative mb-[20px] w-full z-20">
                                    <div className="relative w-full h-[350px] lg:h-[355px]">
                                        {/* Photo */}
                                        {/* Inset photo + asymmetric corner rounding (only TL + BR) */}
                                        <div className="absolute left-[3.45%] right-[3.79%] top-[3.28%] bottom-[3.93%] lg:left-[10px] lg:right-[11px] lg:top-[15px] lg:bottom-[10px] overflow-hidden rounded-tl-[19.33%] rounded-br-[19.33%] lg:rounded-tl-[61px] lg:rounded-br-[61px] rounded-tr-none rounded-bl-none">
                                            <img
                                                src={doctor.image}
                                                alt={doctor.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Top border arc */}
                                        <div className="absolute left-0 top-0 w-full h-[17.05%] lg:h-[52px] border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-white rounded-tl-[61px] lg:rounded-tl-[61px] rounded-tr-none rounded-br-none rounded-bl-none" />

                                        {/* Bottom border arc */}
                                        <div className="absolute left-0 bottom-0 w-full h-[17.05%] lg:h-[52px] overflow-hidden">
                                            <div className="h-full w-full rotate-180 origin-center">
                                                <div className="h-full w-full border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-white rounded-tl-[61px] lg:rounded-tl-[61px] rounded-tr-none rounded-br-none rounded-bl-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Doctor Info */}
                                <div className="relative w-full flex flex-col gap-[5px] items-start">
                                    {/* Small divider line under the name */}
                                    <h3
                                        className="text-white text-[16px] leading-[24px] font-bold not-italic"
                                        style={{ fontFamily: 'TexGyreAdventor' }}
                                    >
                                        {doctor.name}
                                    </h3>
                                    <div className="w-[42px] h-[1px] bg-[#FFFFFF] mt-[0px]"></div>

                                    <p className="text-white text-[14px] leading-[14px] font-medium tracking-[-0.28px]">
                                        {doctor.specialization}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <button className="lg:hidden w-full bg-white text-[#E40714] px-[24px] py-[14px] rounded-[12px] font-medium text-[13px] hover:bg-gray-100 transition-colors mt-[30px]">
                        View All Specialists
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div className="hidden lg:flex flex items-center justify-center gap-[8px] mt-[50px] lg:mt-[60px]">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentIndex
                                ? 'bg-white w-[24px] h-[8px] rounded-full'
                                : 'bg-white/50 w-[8px] h-[8px] rounded-full hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

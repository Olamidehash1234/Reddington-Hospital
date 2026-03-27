const DoctorHero = () => {
    return (
        <div className="relative h-[300px] lg:h-[424px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover"
            >
                <img src="/image/doctor/hero.png" alt="" className="w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#2D2D2D66]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-8 mt-[30px] lg:mt-[50px]">
                <div className="text-center">
                    {/* Heading */}
                    <h1 className="text-[24px] lg:text-[48px] font-bold lg:leading-normal text-white capitalize" style={{ fontFamily: "TexGyreAdventor" }}>
                        Find a Specialist
                    </h1>
                    <p className="text-[#FFFFFF] text-[14px] lg:text-[16] font-bold leading-[20px]">
                        Find & Connect with the right specialist from our team of highly trained surgeons and medical experts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DoctorHero;
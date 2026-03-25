interface DoctorCardProps {
    doctor: {
        id: number;
        name: string;
        specialization: string;
        image: string;
    };
    className?: string;
}

export default function DoctorCard({ doctor, className = '' }: DoctorCardProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
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
                {/* Doctor Name */}
                <h3
                    className="text-white text-[16px] leading-[24px] font-bold not-italic"
                    style={{ fontFamily: 'TexGyreAdventor' }}
                >
                    {doctor.name}
                </h3>
                <div className="w-[42px] h-[1px] bg-[#FFFFFF] mt-[0px]"></div>

                {/* Doctor Specialization */}
                <p className="text-white text-[14px] leading-[14px] font-medium tracking-[-0.28px]">
                    {doctor.specialization}
                </p>
            </div>
        </div>
    );
}

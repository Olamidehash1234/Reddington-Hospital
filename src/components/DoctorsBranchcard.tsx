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
            <div className="relative z-20 mb-[20px] w-full">
                <div className="relative h-[300px] w-full sm:h-[320px] lg:h-[355px]">
                    <div className="absolute bottom-[3.93%] left-[3.45%] right-[3.79%] top-[3.28%] overflow-hidden rounded-br-[52px] rounded-tl-[52px] rounded-bl-none rounded-tr-none lg:bottom-[10px] lg:left-[10px] lg:right-[11px] lg:top-[10px] lg:rounded-br-[52px] lg:rounded-tl-[52px]">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-0 top-0 h-[17.05%] w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#FFFFFF] lg:h-[52px]" />

                    <div className="absolute bottom-0 left-0 h-[17.05%] w-full overflow-hidden lg:h-[52px]">
                        <div className="h-full w-full origin-center rotate-180">
                            <div className="h-full w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#FFFFFF] lg:rounded-tl-[52px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Doctor Info */}
            <div className="relative w-full flex flex-col gap-[5px] items-start">
                {/* Doctor Name */}
                <h3
                    className="text-white uppercase text-[15px] leading-[24px] font-semibold not-italic"
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

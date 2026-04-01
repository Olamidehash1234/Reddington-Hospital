interface DoctorCardProps {
    doctor: {
        id: number;
        name: string;
        specialty: string;
        image: string;
        hospital: string;
    };
    className?: string;
}

export default function DoctorCard({ doctor, className = '' }: DoctorCardProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            {/* Doctor Image Card */}
            <div className="relative mb-[20px] w-full z-20">
                <div className="relative w-full h-[350px] lg:h-[400px]">
                    {/* Photo */}
                    {/* Inset photo + asymmetric corner rounding (only TL + BR) */}
                    <div className="absolute bottom-[3.93%] left-[3.45%] right-[3.79%] top-[3.28%] overflow-hidden rounded-br-[52px] rounded-tl-[52px] rounded-bl-none rounded-tr-none lg:bottom-[10px] lg:left-[10px] lg:right-[11px] lg:top-[10px] lg:rounded-br-[52px] lg:rounded-tl-[52px]">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Top border arc */}
                    <div className="absolute left-0 top-0 h-[17.05%] w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#FFFFFF] lg:h-[52px]" />

                    {/* Bottom border arc */}
                    <div className="absolute left-0 bottom-0 w-full h-[17.05%] lg:h-[52px] overflow-hidden">
                        <div className="h-full w-full rotate-180 origin-center">
                            <div className="h-full w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#ffffff] lg:rounded-tl-[52px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Doctor Info */}
            <div className="relative w-full flex flex-col gap-[6px] items-start">
                {/* Doctor Name */}
                <h3
                    className="text-white text-[16px] leading-[24px] not-italic"
                    style={{ fontFamily: 'TexGyreAdventor' }}
                >
                    {doctor.name}
                </h3>
                <div className="w-[42px] h-[1px] bg-[#FFFFFF] mt-[0px]"></div>

                {/* Doctor Specialization */}
                <p className="text-white text-[14px] leading-[14px] font-medium tracking-[-0.28px]">
                    {doctor.specialty}
                </p>

                <p className="text-white text-[14px] leading-[24px]" style={{fontFamily: 'TexGyreAdventor'}}>
                    {doctor.hospital}
                </p>
            </div>
        </div>
    );
}

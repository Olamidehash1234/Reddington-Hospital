import { useState } from "react"
import { inHouseDoctors, externalDoctors, type Doctor } from "../../data/doctors"

function DoctorCard({ doctor }: { doctor: Doctor }) {
    return (
        <div className="flex w-full flex-col items-start">
            <div className="relative z-20 mb-[20px] w-full">
                <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[400px]">
                    <div className="absolute bottom-[3.93%] border left-[3.45%] right-[3.79%] top-[3.28%] overflow-hidden rounded-br-[52px] rounded-tl-[52px] rounded-bl-none rounded-tr-none lg:bottom-[10px] lg:left-[10px] lg:right-[11px] lg:top-[10px] lg:rounded-br-[52px] lg:rounded-tl-[52px]">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-0 top-0 h-[17.05%] w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#E40714] lg:h-[52px]" />

                    <div className="absolute bottom-0 left-0 h-[17.05%] w-full overflow-hidden lg:h-[52px]">
                        <div className="h-full w-full origin-center rotate-180">
                            <div className="h-full w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#E40714] lg:rounded-tl-[52px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex w-full flex-col items-start gap-[2px]">
                <h3
                    className="w-full text-[15px] leading-[24px] text-[#2D2D2D] lg:text-[14px]"
                    style={{ fontFamily: "TexGyreAdventor" }}
                >
                    {doctor.name}
                </h3>
                <div className="w-[42px] h-[1px] bg-[#2D2D2D] mt-[0px]"></div>
                <p className="text-[12px] leading-[19px] tracking-[-0.24px] text-[#2D2D2D] lg:text-[13px] lg:leading-[22px]">
                    {doctor.specialty}
                </p>
                <p className="text-[12px] leading-[19px] tracking-[-0.24px] text-[#E40714] lg:text-[13px] lg:leading-[22px] font-semibold">
                    {doctor.hospital}
                </p>
            </div>
        </div>
    )
}

export default function Doctors() {
    const [activeTab, setActiveTab] = useState<"in-house" | "external">("in-house")
    const doctors = activeTab === "in-house" ? inHouseDoctors : externalDoctors

    return (
        <div className="relative bg-[#E4071405] px-[16px] py-[40px] lg:px-[80px] lg:py-[40px]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full gap-[7px] lg:gap-[10px] bg-white border border-[#6F7271] lg:border-[#ADB4BF] rounded-full py-[14px] lg:px-[20px] px-[24px] lg:px-[33px]">
                    <img src="/icon/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto"/>
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[14px] text-gray-700 placeholder:text-[#0C214166]"
                    />
                </div>
            </div>

            <div className="mb-[28px] flex flex-col justify-center gap-[20px] lg:mb-[40px] lg:flex-row">
                <div
                    className="flex lg:rounded-[20px] mx-auto lg:w-auto w-[370px] items-center justify-center rounded-[16px] border border-[#E40714] p-[8px]"
                    role="tablist"
                    aria-label="Doctor groups"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "in-house"}
                        onClick={() => setActiveTab("in-house")}
                        className={`lg:rounded-[20px] rounded-[16px] px-[18px] py-[12px] text-[13px] font-semibold transition-colors lg:px-[40px] lg:py-[18px] lg:text-[14px] ${
                            activeTab === "in-house"
                                ? "bg-[#E40714] text-white"
                                : "bg-transparent text-[#E40714]"
                        }`}
                    >
                        In - House Consultant
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "external"}
                        onClick={() => setActiveTab("external")}
                        className={`lg:rounded-[20px] rounded-[14px] px-[18px] py-[12px] text-[13px] font-semibold transition-colors lg:px-[40px] lg:py-[18px] lg:text-[14px] ${
                            activeTab === "external"
                                ? "bg-[#E40714] text-white"
                                : "bg-transparent text-[#E40714]"
                        }`}
                    >
                        External Consultant
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[40px] lg:gap-y-[32px]">
                {doctors.map((doctor) => (
                    <DoctorCard key={`${activeTab}-${doctor.id}`} doctor={doctor} />
                ))}
            </div>
        </div>
    )
}
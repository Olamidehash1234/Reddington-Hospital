export default function ServicesPage() {
    return (
        <section>
            <div className="bg-[#E4071405] pt-[40px] lg:py-[80px]">
                <div className="flex items-center gap-3 mb-4 lg:mb-[20px]">
                    <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                    <span className="text-[#E40714] font-medium text-sm lg:text-[15px]">
                        Our Services
                    </span>
                </div>

                <div className="px-[16px] lg:px-20">
                    {/* Headline */}
                    <div className="lg:flex justify-between items-end">
                        <div>
                            <div>
                                <h1 className="text-[#000000] tracking-tight leading-[24px] lg:leading-[100%] lg:tracking-[-1.8px]">
                                    <span className=" text-[24px] lg:text-[44px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                                        Comprehensive Medical Services
                                    </span>
                                </h1>
                            </div>

                            <div className="mt-[20px] lg:max-w-[561px] lg:mt-[15px] text-[#02070D] text-[14px] lg:text-[16px] lg:leading-[27px] leading-[20px] space-y-4">
                                <p>
                                    The most advanced independent tertiary hospital with the highest standards of technology and professional expertise.
                                </p>
                            </div>
                        </div>

                        <div>
                            <button className="px-[40px] text-[14px] font-semibold rounded-[20px] py-[16px] bg-[#E40714] text-[#FFFFFF]">
                                View All Services
                            </button>
                        </div>
                    </div>

                    <div className="mt-[40px] flex flex-col gap-[40px] lg:gap-[16px] lg:flex-row w-full">
                        <div className="flex flex-col gap-[16px] w-full lg:w-[35%]">
                            <div className="">
                                <img src="/image/home/grid-1.png" alt="" className="w-full object-cover" />
                            </div>
                            <div className="w-full lg:h-[373px] rounded-[16px] overflow-hidden">
                                <img src="/image/home/grid-2.png" alt="" className="w-full object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[16px] w-full lg:w-[65%]">
                            {/* first div inside the second div */}
                            <div className="flex flex-row gap-[16px] w-full">
                                <div className="w-full lg:w-[65%] lg:h-[375px] rounded-[16px] overflow-hidden">
                                    <img src="/image/home/grid-3.png" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full lg:w-[35%] lg:h-[375px] rounded-[16px] overflow-hidden">
                                    <img src="/image/home/grid-4.png" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* second div inside the second div */}
                            <div className="flex flex-row gap-[16px] w-full">
                                <div className="w-full lg:h-[217px] rounded-[16px] overflow-hidden">
                                    <img src="/image/home/grid-5.png" alt="" className="w-full h-full object-cover"/>
                                </div>

                                <div className="w-full lg:h-[217px] rounded-[16px] overflow-hidden">
                                    <img src="/image/home/grid-6.png" alt="" className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
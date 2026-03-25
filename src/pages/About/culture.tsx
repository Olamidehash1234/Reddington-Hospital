export default function Culture() {
    return (
        <section className="bg-[#F9F9F9] pb-[40px] lg:pb-[80px]">
            <div>
                <div className="flex items-center gap-3 mb-[10px] lg:mb-[20px]">
                    <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                    <span className="text-[#E40714] font-medium text-sm lg:text-[24px]">
                        Our Culture
                    </span>
                </div>

                {/* Headline */}
                <div className="px-[16px] lg:px-[80px]">
                    <p className="text-[#2D2D2D] text-[13px] lg:text-[16px] leading-[20px] lg:leading-[26px]">
                        At the heart of Reddington lies a culture defined not merely by clinical excellence, but by genuine humanity. We believe that healing extends beyond diagnosis and treatment—it encompasses how we make our patients feel at every point of contact. Our culture is built upon five core pillars: putting patient safety at the centre of all we do, delivering service excellence with warmth and attentiveness, pursuing continuous improvement in every process and outcome, conducting ourselves with unwavering honesty and integrity, and recognising that the best results emerge when we work together as one cohesive team. This is why a Reddington patient experiences more than advanced medicine; they experience respect, compassion, and a sincere commitment to their wellbeing. It is a culture that attracts the finest consultants and nurses—professionals who share our belief that healthcare is not just what we do, but who we are.
                    </p>

                    {/* Vision + Core Values (from Figma) */}
                    <div className="mt-[20px] lg:mt-[50px] flex flex-col gap-[16px] lg:gap-[40px]">
                        {/* Our Vision card */}
                        <div className="w-full">
                            {/* Mobile layout */}
                            <div className="lg:hidden rounded-[12px] bg-[#E40714] text-white px-[16px] py-[16px]">
                                <div className="flex items-center gap-[12px]">
                                    <div className="shrink-0 rounded-[10px] bg-[rgba(247,133,132,0.5)] p-[10px]">
                                        <img
                                            alt=""
                                            className="block size-[24px]"
                                            src="https://www.figma.com/api/mcp/asset/6b76120b-8902-4ce8-abfb-909be94d90f2"
                                        />
                                    </div>
                                    <p className=" text-[20px] leading-[normal]" style={{ fontFamily: "TexGyreAdventor" }}>
                                        Our Vision
                                    </p>
                                </div>
                                <p className="mt-[12px] font-medium text-[14px] leading-[20px]">
                                    To be Nigeria&apos;s most advanced independent tertiary hospital working to the highest standards of technology and of care.
                                </p>
                            </div>

                            {/* Desktop layout (pixel-matched to Figma frame) */}
                            <div className="grid grid-cols-2 gap-[40px] justify-between">
                                <div className="relative hidden lg:block rounded-[12px]">
                                    <img src="/icon/illustrations/mission.svg" alt="mission Frame" className="relative w-full h-full object-cover" />
                                    <div className="absolute left-[26px] top-[25px]">
                                        <img
                                            alt=""
                                            className=""
                                            src="/icon/mission.svg"
                                        />
                                    </div>
                                    <p className="absolute left-[80px] top-[28px] text-[22px] lg:text-[24px] leading-[normal] whitespace-nowrap" style={{ fontFamily: "TexGyreAdventor" }}>
                                        Our Mission
                                    </p>
                                    <p className="absolute left-[26px] top-[90px] w-[577px] text-[16px] leading-[20px] lg:leading-[24px]">
                                        To deliver a comprehensive first-world medical service exceeding all expectations of our valued patients.
                                    </p>
                                </div>

                                <div className="hidden lg:block relative h-full rounded-[12px] text-white overflow-hidden">
                                    <img src="/icon/illustrations/vision.svg" alt="Vision Frame" className="relative w-full h-full object-cover" />
                                    <div className="absolute left-[26px] top-[25px]">
                                        <img
                                            alt=""
                                            className=""
                                            src="/icon/vision.svg"
                                        />
                                    </div>
                                    <p className="absolute left-[80px] top-[28px] text-[22px] lg:text-[24px] leading-[normal] whitespace-nowrap" style={{ fontFamily: "TexGyreAdventor" }}>
                                        Our Vision
                                    </p>
                                    <p className="absolute left-[26px] top-[90px] w-[577px] text-[16px] leading-[20px] lg:leading-[24px]">
                                        To be Nigeria&apos;s most advanced independent tertiary hospital working to the highest standards of technology and of care.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Core Values panel */}
                        <div className="w-full">
                            {/* Mobile layout */}
                            <div className="lg:hidden rounded-[12px] border border-[#E40714] bg-white px-[16px] py-[16px]">
                                <p className="text-[20px] leading-[normal] text-black">
                                    Our Core Values
                                </p>
                                <p className="mt-[8px]  text-[13px] text-[#2D2D2D]">
                                    <span className="leading-[19px]">{`The principles that drive our pursuit in medical excellence - `}</span>
                                    <span className=" font-semibold leading-[19px] text-[#E40714]">
                                        PRACTICE
                                    </span>
                                </p>

                                <div className="mt-[18px] grid grid-cols-1 gap-[18px]">
                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/aa2a5e94-2e16-484f-844a-e97fd996bf87" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Patient Safety
                                            </p>
                                        </div>
                                        <p className="mt-[10px] text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            Your safety and wellbeing always come first.
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f9b4d700-a2ce-431b-99a6-e1e4600e3249" />
                                            </div>
                                            <p className="mt-[2px] font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Respect
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            You will be treated with dignity, kindness, and respect.
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/fe58af18-9cb7-4de9-8540-0f06096d5b1a" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Accountability
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            We take responsibility for our actions and your care
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/7c655244-0cdd-4ce8-a4d0-3a61c540dd66" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Compassion
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            We listen, care, and support you with empathy.
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/90c93c59-a46f-4471-a9ce-caf5b72bb610" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Trust
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            You can rely on us to be honest, dependable, and professional.
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/07209bb9-5141-40bc-8b2d-b0db497ba07a" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Integrity
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            We do what is right, always.
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f10b304b-1593-496c-83cb-629942a0e884" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Clinical Excellence
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            We provide high-quality care based on the best
                                        </p>
                                    </div>

                                    <div className="border-b border-[#2D2D2D] pb-[18px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="shrink-0 rounded-[10px] bg-[#E40714] p-[10px]">
                                                <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f3658aa0-1b3d-4836-9fd5-f5f1c861775d" />
                                            </div>
                                            <p className="mt-[2px]  font-semibold text-[14px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                                Effective Communication
                                            </p>
                                        </div>
                                        <p className="mt-[10px]  text-[14px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                            We explain things clearly and keep you informed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop layout (pixel-matched to Figma frame) */}
                            <div className="relative hidden lg:block rounded-[12px]">
                                <img src="/icon/illustrations/values-frame.svg" alt="Core Values Frame" className="relative w-full h-full object-cover" />
                                <p className="absolute left-[39px] top-[39px]  text-[24px] leading-[normal] text-black whitespace-nowrap" style={{ fontFamily: "TexGyreAdventor" }}>
                                    Our Core Values
                                </p>
                                <p className="absolute left-[39px] top-[81px]  font-normal text-[16px] text-[#2D2D2D] whitespace-nowrap">
                                    <span className="leading-[19px]">{`The principles that drive our pursuit in medical excellence - `}</span>
                                    <span className=" font-semibold leading-[19px] text-[#E40714]">
                                        PRACTICE
                                    </span>
                                </p>

                                {/* Row 1 */}
                                <div className="absolute left-[39px] top-[120px] w-[258px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/aa2a5e94-2e16-484f-844a-e97fd996bf87" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Patient Safety
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[258px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        Your safety and wellbeing always come first.
                                    </p>
                                </div>

                                <div className="absolute left-[calc(25%+7.5px)] top-[120px] w-[297px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f9b4d700-a2ce-431b-99a6-e1e4600e3249" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Respect
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[297px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        You will be treated with dignity, kindness, and respect.
                                    </p>
                                </div>

                                <div className="absolute left-[calc(50%+15px)] top-[120px] w-[298px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/fe58af18-9cb7-4de9-8540-0f06096d5b1a" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Accountability
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[298px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        We take responsibility for our actions and your care
                                    </p>
                                </div>

                                <div className="absolute left-[calc(75%+23.5px)] top-[120px] w-[288px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/7c655244-0cdd-4ce8-a4d0-3a61c540dd66" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Compassion
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[298px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        We listen, care, and support you with empathy.
                                    </p>
                                </div>

                                {/* Row 2 */}
                                <div className="absolute left-[39px] top-[296px] w-[258px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/90c93c59-a46f-4471-a9ce-caf5b72bb610" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Trust
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[258px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        You can rely on us to be honest, dependable, and professional.
                                    </p>
                                </div>

                                <div className="absolute left-[calc(25%+7.5px)] top-[296px] w-[297px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/07209bb9-5141-40bc-8b2d-b0db497ba07a" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Integrity
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[297px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        We do what is right, always.
                                    </p>
                                </div>

                                <div className="absolute left-[calc(50%+15px)] top-[296px] w-[298px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f10b304b-1593-496c-83cb-629942a0e884" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Clinical Excellence
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[298px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        We provide high-quality care based on the best
                                    </p>
                                </div>

                                <div className="absolute left-[calc(75%+23.5px)] top-[296px] w-[298px] h-[152px] border-b border-[#2D2D2D]">
                                    <div className="absolute left-0 top-[20px] rounded-[10px] bg-[#E40714] p-[10px]">
                                        <img alt="" className="block size-[24px]" src="https://www.figma.com/api/mcp/asset/f3658aa0-1b3d-4836-9fd5-f5f1c861775d" />
                                    </div>
                                    <p className="absolute left-[54px] top-[33px]  font-semibold text-[16px] leading-[19px] text-[#2D2D2D] whitespace-nowrap">
                                        Effective Communication
                                    </p>
                                    <p className="absolute left-0 top-[84px] w-[298px]  font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#2D2D2D]">
                                        We explain things clearly and keep you informed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
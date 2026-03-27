export default function HeroEuracare() {
    // Update to new video ID and parameters
    const videoId = "lf4LaNDlgcI";
    const videoSrc = `https://www.youtube.com/embed/${videoId}?si=Q6VFw_wxLDZvBzs2`;

    return (
        <section className="relative bg-white">

            <img src="/icon/illustrations/tp-lft.svg" alt="Decorative Circle" className="absolute top-[165px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/abt-md.svg" alt="Decorative Circle" className="absolute bottom-[10px] lg:left-[620px] z-10"></img>
            <img src="/icon/illustrations/abt-rgt.svg" alt="Decorative Circle" className="absolute top-[350px] lg:top-[60px] right-[0px] z-10"></img>

            <div className="pt-[40px] lg:py-[80px]">
                <div className="flex items-center gap-3 mb-4 lg:mb-[20px]">
                    <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                    <span className="text-[#E40714] font-medium text-sm lg:text-[15px]">
                        About Reddington
                    </span>
                </div>
                <div className="grid items-start px-[16px] lg:px-20 gap-[30px] lg:grid-cols-2 lg:gap-[80px]">
                    {/* Text column */}
                    <div>
                        {/* Headline */}
                        <h1 className="text-[#000000] tracking-tight leading-[24px] lg:leading-[40px] lg:tracking-[-1.8px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                            <span className=" text-[22px] lg:text-[44px]">
                                Committed to Your Health & Wellbeing
                            </span>
                        </h1>

                        <div className="mt-[20px] lg:mt-[40px] text-[#02070D] text-[13px] lg:text-[16px] tracking-[-0.54px] lg:leading-[27px] leading-[20px] space-y-4">
                            <p>
                                For over two decades, the Reddington Healthcare Group has stood as a pioneer in Nigerian medicine, renowned for attracting world-class specialist doctors and surgeons
                            </p>

                            <p>As the first independent hospital in Nigeria to receive full international accreditation, our commitment to excellence is proven. Today, our network spans multiple multi-specialist hospitals and dedicated sub-specialty clinics across Lagos, ensuring that expert, patient-centred care is always within your reach.</p>
                        </div>

                        {/* cta button */}
                        <button className=" hidden lg:block border border-[#E40714] lg:px-[80px] px-[40px] py-[0px] lg:py-[16px] rounded-[12px] mt-[20px] lg:mt-[45px] font-medium tracking-[-0.84px] text-[14px] leading-[40px] lg:text-[14px] lg:leading-[100%] text-[#E40714]">
                            Read more...
                        </button>
                    </div>

                    {/* Video column */}
                    <div className="w-full relative">
                        <div className="lg:h-[480px] h-[270px] overflow-hidden lg:rounded-[16px] rounded-[8px] shadow-xl bg-black relative z-20">
                            <iframe
                                className="h-full w-full"
                                src={videoSrc}
                                title="YouTube video player"
                                loading="lazy"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                        {/* Optional helper text (hidden for screen readers only if you prefer) */}
                        <span className="sr-only">Promotional video about Euracare treatment</span>
                    </div>

                    <button className=" block lg:hidden border border-[#E40714] lg:px-[80px] px-[40px] py-[0px] lg:py-[16px] rounded-[12px] mb-[40px] lg:mt-[45px] font-medium tracking-[-0.84px] text-[14px] leading-[40px] lg:text-[14px] lg:leading-[100%] text-[#E40714]">
                            Read more...
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function AwardsSection() {
    const awards = [
        'NHEA - Outstanding Service Delivery in 2014, 2015, 2016',
        'NHEA - NHEA - Winning Award Status in the Best Hospital Performance',
        'ST. Racheal\'s Pharma - Professional Excellence Award, March 29, 2020 (Awarded to Chairman)',
        'African Students\' Union Parliament - Hard work and Dedication to National Development, August 2015 (Awarded to Chairman)',
        'Pan African International Magazine - Award of Excellence for Most Outstanding Private Health Care Provider of the Year, 23rd September 2018',
        'HEFAMAA - Excellence Award for Advancing Diagnostic accuracy in Patient Safety, September 2024',
        'AXA Mansard Health - Healthcare Provider with the Largest Coverage, November 2023',
        'Africamed - Excellent Partner Award',
    ]

    const accreditations = [
        'COHSASA Accreditation 2012 (The first independent hospital in Nigeria to achieve the feat)',
        'COHSASA Accreditation 2015 (The first healthcare facility in Nigeria to be reaccredited at its first attempt)',
        'COHSASA Accreditation 2018 - 2021',
        'COHSASA Accreditation 2023 - 2026',
    ]

    return (
        <section className="relative px-[16px] lg:px-[80px] py-[40px] lg:py-[65px] bg-[#F9F9F9] overflow-hidden">

            <img src="/icon/illustrations/awrd-1.svg" alt="Decorative Circle" className="absolute top-[265px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/awd-3.svg" alt="Decorative Circle" className="absolute bottom-[20px] lg:left-[610px] z-10"></img>
            <img src="/icon/illustrations/abt-rgt.svg" alt="Decorative Circle" className="absolute top-[20px] lg:top-[0px] right-[0px] z-10"></img>
            <img src="/icon/illustrations/awd-4.svg" alt="Decorative Circle" className="hidden lg:block absolute top-[350px] lg:top-[600px] right-[0px] z-10"></img>

            <div className="">
                <div className="space-y-[20px] text-[#2D2D2D] lg:space-y-[35px] text-[13px] lg:text-[16px] lg:leading-[22px] leading-[20px] trackiing-[-3%]">
                    <p>
                        Beyond our landmark COHSASA accreditations, the Reddington Healthcare Group has earned widespread recognition for its contribution to Nigerian medicine. We have been honoured as the Best Private Healthcare Provider in Nigeria at the prestigious Nigerian Healthcare Excellence Awards (NHEA) on multiple occasions, including 2014, 2015, and 2016—with our Duchess International Hospital facility adding further wins in 2023 and 2024. This consistent recognition spanning a decade reflects our enduring commitment to outstanding service delivery.
                    </p>

                    <p>
                        Our excellence has been acknowledged across the healthcare spectrum. In 2024, we received the HEFAMAA Excellence Award for Advancing Diagnostic Accuracy in Patient Safety, while AXA Mansard Health recognised us as the Healthcare Provider with the Largest Coverage in 2023. The Nightingale Merit Award for Excellence in Nursing Care Delivery (2013) speaks to the dedication of our clinical teams, and our status as Mindray's West Africa Official Reference Hospital affirms our technical leadership.
                    </p>

                    <p>
                        International honours include the Pan African International Magazine Award of Excellence for Most Outstanding Private Healthcare Provider (2018) and recognition from Africamed as an Excellent Partner. Our Chairman has also been personally honoured—with the St. Racheal's Pharma Professional Excellence Award (2020) and the African Students' Union Parliament Award for Hard Work and Dedication to National Development (2015)—reflecting leadership that inspires excellence at every level.
                    </p>
                </div>

                <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                    <div className="relative rounded-[12px] z-10">
                        <img src="/icon/illustrations/awd-frame1.svg" alt="mission Frame" className="relative w-full h-[750px] lg:h-fit object-cover" />
                        <p className="absolute left-[20px] top-[25px] text-[22px] lg:text-[24px] leading-[normal] whitespace-nowrap" style={{ fontFamily: "TexGyreAdventor" }}>
                            List Of Awards
                        </p>
                        <div className="absolute left-[30px] right-[30px] top-[75px] right-[20px] space-y-[10px]">
                            {awards.map((award, index) => (
                                <div className="flex flex-row gap-[10px] align-center items-start">
                                    <div>•</div>
                                    <p key={index} className="text-[13px] pt-[3px] lg:text-[15px] leading-[20px] text-[#1A1A1A] list-disc list-inside">
                                        {award}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-rows-2">
                        <div className="relative rounded-[12px] text-white overflow-hidden">
                            <img src="/icon/illustrations/awd-frame2.svg" alt="Vision Frame" className="relative w-full h-[360px] lg:h-full object-cover" />
                            <p className="absolute left-[20px] top-[25px] text-[22px] lg:text-[24px] leading-[normal] whitespace-nowrap" style={{ fontFamily: "TexGyreAdventor" }}>
                                Accreditations
                            </p>
                            <div className="absolute left-[30px] right-[30px] top-[75px] right-[20px] space-y-[10px]">
                                {accreditations.map((accreditation, index) => (
                                    <div className="flex flex-row gap-[10px] align-center items-start">
                                        <p className="">•</p>
                                        <p key={index} className="text-[13px] pt-[3px] lg:text-[15px] leading-[20px] text-white list-disc list-inside">
                                            {accreditation}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
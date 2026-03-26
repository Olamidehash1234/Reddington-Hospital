import { Link } from "react-router-dom"

export default function AwardsSection() {
    return (
        <div className="relative bg-[#E40714] px-[16px] lg:px-[80px] py-[40px] lg:py-[80px]">

            <img src="/icon/illustrations/awd-1.svg" alt="Decorative Circle" className="w-[100px] h-[100px] lg:w-auto lg:h-auto absolute bottom-[0px] left-[0px] z-10" pointer-events-none />
            <img src="/icon/illustrations/awd-2.svg" alt="Decorative Circle" className="w-[100px] h-[100px] lg:w-auto lg:h-auto absolute top-[0px] lg:bottom-[0px] right-[0px] z-10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-between mb-[20px] lg:mb-[40px] lg:items-end">
                <div className="">
                    <p className="text-[#fff] text-[14px] lg:text-[18px]">
                        Recognition
                    </p>

                    <h1 className="text-[#fff] text-[22px] lg:text-[32px] leading-normal" style={{ fontFamily: "TexGyreAdventor" }}>
                        Awards & Accreditation
                    </h1>
                </div>

                <Link to={"/awards"}>
                    <button className="hidden lg:block bg-white text-[#E40714] px-[28px] py-[18px] rounded-full font-medium text-[14px] hover:bg-gray-100 transition-colors whitespace-nowrap">
                        View All Awards
                    </button>
                </Link>

            </div>
            <div className="space-y-[20px] mb-[10px] lg:mb-[20px] text-[#FFFFFF] font-medium lg:space-y-[30px] text-[13px] lg:text-[16px] lg:leading-[19px] leading-[20px]">
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

            <Link to={"/awards"}>
                <button className="block w-full mt-[30px] lg:hidden bg-white text-[#E40714] px-[28px] py-[14px] rounded-[12px] font-medium text-[14px] hover:bg-gray-100 transition-colors whitespace-nowrap">
                    View All Awards
                </button>
            </Link>
        </div>
    )
}
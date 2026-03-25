export default function Herosection() {
    return (
        <section className="relative bg-[#F9F9F9] py-[40px] lg:pt-[40px] lg:pb-[80px]">

            <img src="/icon/illustrations/tp-lft.svg" alt="Decorative Circle" className="absolute bottom-[-90px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/md.svg" alt="Decorative Circle" className="absolute top-[240px] lg:top-[140px] lg:left-[520px] z-10"></img>
            <img src="/icon/illustrations/md.svg" alt="Decorative Circle" className="absolute top-[470px] lg:top-[260px] right-[90px] lg:right-[520px] z-10"></img>
            <img src="/icon/illustrations/hst-rgt.svg" alt="Decorative Circle" className="absolute top-[0px] lg:top-[0px] right-[0px] z-10"></img>


            <div>
                <div className="flex items-center gap-3 mb-[10px] lg:mb-[20px]">
                    <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                    <span className="text-[#E40714] font-medium text-sm lg:text-[24px]">
                        Our History
                    </span>
                </div>

                <div className="px-[16px] lg:px-[80px]">
                    <div className="space-y-[20px] lg:space-y-[35px] text-[13px] lg:text-[16px] lg:leading-[24px] leading-[20px] trackiing-[-3%]">
                        <p>
                            For over two decades, the Reddington Healthcare Group has stood as a pioneer in Nigerian medicine, renowned for attracting world-class specialist doctors and surgeons. As the first independent hospital in Nigeria to receive full international accreditation, our commitment to excellence is proven. Today, our network spans multiple multi-specialist hospitals and dedicated sub-specialty clinics across Lagos, ensuring that expert, patient-centred care is always within your reach.
                        </p>

                        <p>
                            When you choose Reddington, you are placing your health in the hands of Nigeria's most decorated private healthcare provider. We are proud to have been the first independent hospital in Nigeria to receive full international accreditation from COHSASA—a standard of quality we have consistently retained through rigorous re-accreditation. Our pioneering spirit has led to numerous Nigerian 'firsts': the first digital Cardiac Catheterisation Laboratory, the first 64-slice CT scanner, and the first 3D Digital Breast Tomosynthesis in West Africa, among many others.
                        </p>

                        <p>
                            This culture of innovation has earned us repeated recognition, including the NHEA Award for Private Healthcare Provider of the Year. But beyond the awards and technology, what matters most is what it means to be a Reddington patient. It means access to the largest pool of specialist consultants of any independent hospital in Nigeria. It means being cared for in purpose-built facilities designed for your comfort and safety. It means experiencing a team relentlessly committed to continuous improvement, because we believe your health journey should be defined by clinical excellence, genuine compassion, and an unwavering focus on your wellbeing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Link } from "react-router-dom"

export default function Leadership() {
    return (
        <div className="relative bg-[#E4071405] px-[16px] lg:px-[80px] py-[40px] lg:py-[80px]">

            <img src="/icon/illustrations/ld-1.svg" alt="Decorative Circle" className="w-[70px] h-[70px] opacity-50 lg:w-auto lg:h-auto absolute bottom-[0px] left-[0px] z-10" pointer-events-none />
            <img src="/icon/illustrations/ld-2.png" alt="Decorative Circle" className="w-[100px] h-[100px] lg:w-auto lg:h-auto absolute top-[0px] lg:bottom-[0px] right-[0px] z-10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-between mb-[20px] lg:mb-[40px] lg:items-end">
                <div className="space-y-[10px] mb-[20px] lg:mb-0">
                    <h1 className="text-[#000000] text-[22px] lg:text-[32px] leading-normal" style={{ fontFamily: "TexGyreAdventor" }}>
                        Our Leadership
                    </h1>

                    <p className="text-[#2D2D2D] text-[13px] lg:text-[15px] leading-[19px] lg:leading-[22px] max-w-[665px]">
                        We trust that this group of professionals will assist us in taking the giant leap forward and support us in directing, organizing, and implementing our strategic plans and aspirations.
                    </p>
                </div>

                <Link to={"/awards"}>
                    <button className=" bg-white text-[#E40714] px-[28px] py-[18px] rounded-full font-medium text-[14px] hover:bg-gray-100 transition-colors whitespace-nowrap">
                        View All Awards
                    </button>
                </Link>
            </div>

        </div>
    )
}
import { Link, useParams } from "react-router-dom"
import { branches } from "../../../data/branches"
import { branchNameToSlug } from "../../../utils/slugify"

export default function BranchHero() {
    const { name } = useParams<{ name: string }>()
    const branch = branches.find((b) => branchNameToSlug(b.name) === name)

    if (!branch) return null

    return (
        <div className="relative w-full h-[300px] lg:h-[424px] flex">

            <img src="/icon/illustrations/br-hr1.svg" alt="Decorative Circle" className="absolute bottom-[-50px] left-[0px] z-10 pointer-events-none"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[120px] left-[490px] z-10"></img>
            <img src="/icon/illustrations/br-hr3.svg" alt="Decorative Circle" className="absolute bottom-[50px] left-[570px] z-10"></img>

            {/* Left Section - Content */}
            <div className="realtive w-full lg:w-1/2 lg:mt-[110px] bg-[#F9F9F9] items-center flex flex-row  p-[16px] lg:pl-[70px] lg:pr-[25px] lg:gap-[42px]">
                <Link to="/our-branches">
                    <div className="flex flex-row gap-[8px] items-center cursor-pointer">
                        <div className="flex items-center justify-center">
                            <img src="/icon/branch-hero.svg" alt="" className="w-[20px] h-[20px] lg:h-full lg:w-full" />
                        </div>
                    </div>
                </Link>
                <h1
                    className="text-[26px] lg:text-[40px] leading-normal text-[#E40714]"
                    style={{ fontFamily: "TexGyreAdventor" }}
                >
                    {branch.name}
                </h1>
            </div>

            {/* Right Section - Image */}
            <div className="flex w-1/2">
                <img
                    src={branch.Heroimage}
                    alt={branch.name}
                    className="h-full w-full lg:h-[424px] rounded-b-[12px] object-cover"
                />
            </div>
        </div>
    )
}

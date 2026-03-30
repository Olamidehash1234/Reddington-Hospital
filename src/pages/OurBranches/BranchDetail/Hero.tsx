import { Link, useParams } from "react-router-dom"
import { branches } from "../../../data/branches"
import { branchNameToSlug } from "../../../utils/slugify"

export default function BranchHero() {
    const { name } = useParams<{ name: string }>()
    const branch = branches.find((b) => branchNameToSlug(b.name) === name)

    if (!branch) return null

    return (
        <div className="relative h-[300px] w-full lg:h-[424px] overflow-hidden">
            <img
                src={branch.Heroimage}
                alt={branch.name}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2D2D2D66] flex flex-col justify-end p-[20px] lg:p-[80px]">
                <Link to="/our-branches">
                    <div className="flex flex-row gap-[8px] items-center cursor-pointer">
                        <img src="/icon/back.svg" alt="" />
                        <p className="text-[#FFFFFF]">
                            All Branches
                        </p>
                    </div>
                </Link>
                <h1
                    className="text-[28px] lg:text-[48px] font-bold leading-normal text-white"
                    style={{ fontFamily: "TexGyreAdventor" }}
                >
                    {branch.name}
                </h1>
            </div>
        </div>
    )
}

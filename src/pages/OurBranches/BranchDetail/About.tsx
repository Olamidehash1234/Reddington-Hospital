import { useParams } from "react-router-dom"
import { branches } from "../../../data/branches"

export default function BranchAbout() {
    const { id } = useParams<{ id: string }>()
    const branchId = parseInt(id || "1", 10)
    const branch = branches.find((b) => b.id === branchId)

    if (!branch) return null

    return (
        <section className="relative bg-[#F9F9F9] py-[20px] lg:pt-[40px] lg:pb-[80px]">
            <div className="flex items-center gap-3 mb-[10px] lg:mb-[0px]">
                <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                <span className="text-[#E40714] font-medium text-sm leading-normal lg:text-[36px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                    About {branch.name}
                </span>
            </div>

            <div className="px-[16px] lg:px-[80px]">
                <p className="text-[14px] mt-[20px] lg:text-[16px] lg:leading-[28px] text-[#2D2D2D]">
                    {branch.fullDescription}
                </p>
            </div>
        </section>
    )
}

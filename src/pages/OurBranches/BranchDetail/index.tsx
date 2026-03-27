import { useParams } from "react-router-dom"
import { branches } from "../../../data/branches"
import BranchHero from "./Hero"
import BranchAbout from "./About"
import BranchServices from "./Services"

export default function BranchDetail() {
    const { id } = useParams<{ id: string }>()
    const branchId = parseInt(id || "1", 10)
    const branch = branches.find((b) => b.id === branchId)

    if (!branch) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-[18px] text-[#2D2D2D]">Branch not found</p>
            </div>
        )
    }

    return (
        <div className="w-full">
            <BranchHero />
            <BranchAbout />
            <BranchServices />
        </div>
    )
}

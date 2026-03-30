import { useParams } from "react-router-dom"
import { branches } from "../../../data/branches"
import { branchNameToSlug } from "../../../utils/slugify"
import BranchHero from "./Hero"
import BranchAbout from "./About"
import BranchServices from "./Services"
import BranchDoctors from "./Doctors"
import BranchContact from './Contact'
import Newsletter from "../../Home/Newsletter"

export default function BranchDetail() {
    const { name } = useParams<{ name: string }>()
    const branch = branches.find((b) => branchNameToSlug(b.name) === name)

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
            <BranchDoctors />
            <BranchContact />
            <Newsletter />
        </div>
    )
}

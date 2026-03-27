import { useParams } from "react-router-dom"
import { branches } from "../../../data/branches"

export default function BranchServices() {
    const { id } = useParams<{ id: string }>()
    const branchId = parseInt(id || "1", 10)
    const branch = branches.find((b) => b.id === branchId)

    if (!branch) return null

    return (
        <section className="relative bg-[#E4071405] px-[16px] py-[40px] lg:px-[80px] lg:py-[80px]">
            <div className="">
                <div className="text-center mb-[40px] lg:mb-[60px]">
                    <h2
                        className="text-[24px] lg:text-[32px] font-bold leading-normal text-[#E40714] mb-[10px]"
                        style={{ fontFamily: "TexGyreAdventor" }}
                    >
                        Our Key Services
                    </h2>
                    <p className="text-[13px] lg:text-[15px] leading-[20px] text-[#2D2D2D]">
                        Multi and Sub-Specialty care across all disciplines
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[24px]">
                    {branch.services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[200px] lg:h-[240px] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                                <p className="text-white font-semibold text-[14px] lg:text-[16px] leading-[22px] p-[16px] lg:p-[20px]">
                                    {service.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

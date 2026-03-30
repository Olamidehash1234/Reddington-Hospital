import { useParams } from "react-router-dom"
import { branches } from "../../../data/branches"
import { branchNameToSlug } from "../../../utils/slugify"
// import { useState, useEffect } from "react"

export default function BranchServices() {
    const { name } = useParams<{ name: string }>()
    const branch = branches.find((b) => branchNameToSlug(b.name) === name)
    // const [expandedServiceId, setExpandedServiceId] = useState<number | null>(null)

    if (!branch) return null

    // // Close expanded description when clicking outside
    // useEffect(() => {
    //     if (expandedServiceId === null || branchId !== 4) return

    //     function handleClickOutside(event: MouseEvent) {
    //         const target = event.target as HTMLElement | null
    //         if (!target) return

    //         const expandedCard = target.closest<HTMLElement>(
    //             `[data-service-card-id="${expandedServiceId}"]`
    //         )

    //         if (!expandedCard) setExpandedServiceId(null)
    //     }

    //     document.addEventListener("mousedown", handleClickOutside)
    //     return () => document.removeEventListener("mousedown", handleClickOutside)
    // }, [expandedServiceId, branchId])

    // Render Maxy Special Centre with detailed descriptions
    if (branch.name === "Reddington Maxy Super-Specialty Centre") {
        return (
            <section className="bg-[#E4071405] px-4 py-10 lg:px-[80px] lg:py-[80px]">
                <div className="text-center mb-[40px] lg:mb-[60px]">
                    <h2
                        className="text-[24px] lg:text-[32px] font-bold leading-normal text-[#E40714] mb-[10px]"
                        style={{ fontFamily: "TexGyreAdventor" }}
                    >
                        Our Key Services
                    </h2>
                    <p className="text-[13px] lg:text-[15px] leading-[20px] text-[#2D2D2D]">
                        {branch.servicesDescription}
                    </p>
                </div>

                <div className="grid gap-6 lg:gap-[13px] lg:gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
                    {branch.services.map((service, index) => (
                        <div
                            key={index}
                            data-service-card-id={index}
                            className="bg-[#E4071405] rounded-2xl transition overflow-hidden flex flex-col cursor-pointer"
                        >
                            <div className="relative h-[200px] lg:h-[240px] w-full bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                    onLoad={(e) => {
                                        const img = e.target as HTMLImageElement
                                        img.style.opacity = "1"
                                    }}
                                    style={{ opacity: 0 }}
                                />
                            </div>
                            <div className="p-5 lg:pt-[20px] flex flex-col flex-grow">
                                <h3 className="font-medium text-[14px] lg:text-[16px] tracking-[-0.5px] leading-[26px] mb-[20px]">
                                    {service.name}
                                </h3>
                                <p className="text-[13px] lg:text-[14px] leading-[24px] text-[#2D2D2DCC] tracking-[-0.5px]">Services rendered:</p>
                                {service.description && (
                                    <ul className="text-[13px] ml-[12px] text-[#2D2D2DCC] leading-[20px] lg:leading-[22px] list-disc list-inside">
                                        {Array.isArray(service.description) ? (
                                            service.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))
                                        ) : (
                                            <li>{service.description}</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    // Render default styling for other branches
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
                        {branch.servicesDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
                    {branch.services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[200px] lg:h-[300px] rounded-2xl overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover transition-transform duration-300 object-cover"
                            />
                            <div className="absolute inset-0 flex items-end">
                                <div className="w-full px-[10px] py-[21px] lg:px-[10px] lg:py-[21px]" style={{
                                    backgroundImage: 'linear-gradient(140deg, rgba(26, 26, 26, 0.00) -44.46%, rgba(26, 26, 26, 0.72) 77.1%)'
                                }}>
                                    <p className="text-white text-[14px] lg:text-[15px] leading-[22px]" style={{fontFamily : "TexGyreAdventor"}}>
                                        {service.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

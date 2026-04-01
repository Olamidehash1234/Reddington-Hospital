import { useNavigate } from "react-router-dom"
import { branches } from "../../data/branches"
import { branchNameToSlug } from '../../utils/slugify'
export default function Branches() {
    const navigate = useNavigate()

    return (
        <section className="relative bg-[#F5F5F5] px-[16px] py-[40px] lg:px-[80px] lg:py-[80px]">

            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[32px]">
                {branches.map((branch) => (
                    <div key={branch.id} className="flex flex-col bg-white rounded-2xl overflow-hidden">
                        {/* Image */}
                        <div className="relative h-[200px] w-full bg-gray-100">
                            <img
                                src={branch.image}
                                alt={branch.name}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-[20px] lg:p-[24px]">
                            {/* Name */}
                            <h3 className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#000000] mb-[12px]">
                                {branch.name}
                            </h3>

                            {/* Location */}
                            <div className="flex flex-row gap-[8px] mb-[16px]">
                                <img
                                    src="/icon/location.svg"
                                    alt="location"
                                    className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]"
                                />
                                <p className="text-[13px] lg:text-[13px] leading-[18px] text-[#2D2D2D]">
                                    {branch.location}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-[12px] lg:text-[14px] leading-[20px] text-ellipsis text-[#2D2D2D] mb-[20px] flex-grow">
                                {branch.description}
                            </p>

                            {/* Learn More Button */}
                            <button
                                onClick={() => navigate(`/branches/${branchNameToSlug(branch.name)}`)}
                                className="text-[#E40714] font-semibold text-[13px] hover:underline text-left inline"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

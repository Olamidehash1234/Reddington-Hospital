import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DoctorCard from '../../../components/DoctorsBranchcard'
import { branches } from '../../../data/branches'

export default function BranchDoctors() {
    const { id } = useParams<{ id: string }>()
    const branchId = parseInt(id || "1", 10)
    const branch = branches.find((b) => b.id === branchId)
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!branch) return null

    const itemsPerView = 8
    const totalPages = Math.ceil(branch.doctors.length / itemsPerView)
    const showPagination = branch.doctors.length > 8
    const hasNextPage = currentIndex < totalPages - 1
    const hasPrevPage = currentIndex > 0

    const visibleDoctors = branch.doctors.slice(
        currentIndex * itemsPerView,
        (currentIndex + 1) * itemsPerView
    )

    const handleNextPage = () => {
        if (hasNextPage) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrevPage = () => {
        if (hasPrevPage) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <section className="relative bg-[#E40714] py-[60px] lg:py-[100px] overflow-hidden">
            {/* Decorative background elements */}
            <img src="/icon/illustrations/dct-tp-lft.svg" alt="Decorative Circle" className="absolute border-white top-[0px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/br-md.svg" alt="Decorative Circle" className="absolute border-white top-[500px] left-[590px] left-[0px] z-10"></img>
            <img src="/icon/illustrations/dct-rgt.svg" alt="Decorative Circle" className="absolute top-[0px] right-[0px] z-10"></img>

            <div className="px-[16px] lg:px-[80px] mx-auto">
                {/* Header Section */}
                <div className="flex items-end justify-between mb-[40px] lg:mb-[40px]">
                    <div>
                        {/* Heading */}
                        <h2 className="text-white text-[24px] lg:text-[45px] leading-tight mb-[10px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                            Meet Our Specialists
                        </h2>

                        {/* Description */}
                        <p className="text-white text-[13px] font-medium  lg:text-[16px] leading-[19px] lg:leading-[19px] max-w-[596px]">
                            World-class doctors and surgeons committed to your health and
                            wellbeing, bringing international expertise to Nigerian healthcare.
                        </p>
                    </div>

                    {/* Navigation Buttons - Desktop */}
                    {showPagination && (
                    <div className="hidden lg:flex gap-[30px]">
                        <button
                            onClick={handlePrevPage}
                            disabled={!hasPrevPage}
                            className={`font-medium text-[14px] transition-colors whitespace-nowrap ${
                                hasPrevPage
                                    ? ''
                                    : 'cursor-not-allowed opacity-60'
                            }`}
                        >
                            <img src="/icon/arrow-left2.svg" alt=""className='w-[57px] h-[57px]'/>
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={!hasNextPage}
                            className={`font-medium text-[14px] transition-colors whitespace-nowrap ${
                                hasNextPage
                                    ? ''
                                    : 'cursor-not-allowed opacity-50'
                            }`}
                        >
                            <img src="/icon/arrow-right2.svg" alt="" />
                        </button>
                    </div>
                    )}
                </div>

                {/* Doctors Grid/Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[40px]">
                        {visibleDoctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </div>

                    {/* Navigation Buttons - Mobile */}
                    {showPagination && (
                    <div className="lg:hidden flex justify-between gap-[12px] mt-[30px]">
                        <button
                            onClick={handlePrevPage}
                            disabled={!hasPrevPage}
                            className={`font-medium text-[13px] transition-colors ${
                                hasPrevPage
                                    ? ''
                                    : ' cursor-not-allowed opacity-50'
                            }`}
                        >
                            <img src="/icon/arrow-left2.svg" alt="" className='w-[30px] h-[30px]'/>
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={!hasNextPage}
                            className={`font-medium text-[13px] transition-colors ${
                                hasNextPage
                                    ? ''
                                    : 'cursor-not-allowed opacity-50'
                            }`}
                        >
                            <img src="/icon/arrow-right2.svg" alt="" className='w-[30px] h-[30px]'/>
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}

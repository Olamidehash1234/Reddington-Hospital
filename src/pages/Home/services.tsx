import { Link } from "react-router-dom"
import { useState, useEffect, useRef, type Key } from "react"

const serviceAnchorMap: Record<string, string> = {
    Cardiology: "cardiology",
    "Diagnostic Imaging": "diagnostic-imaging-purple-ray",
    "Surgical Services": "general-surgery",
    "Emergency Services": "emergency-medicine",
    "Clinical Laboratory": "health-screening",
    Endoscopy: "gastroenterology-and-endoscopy",
};

const serviceCards = [
    {
        title: 'Cardiology',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603094/cardiology-1_iciq6q.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603100/grid-1_goqeiq.png', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603105/cardiology-2_plp3sj.jpg']
    },
    {
        title: 'Diagnostic Imaging',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603766/img-1_xs9ijb.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603186/img-2_u73gxu.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603753/img-3_g94yni.jpg']
    },
    {
        title: 'Surgical Services',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603828/surg-1_dif5hf.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603301/surg-2_lw3l9i.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603294/surg-3_wfr6an.jpg']
    },
    {
        title: 'Emergency Services',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603086/emerg-1_dxvafh.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603109/emerg-2_yyydxa.jpg']
    },
    {
        title: 'Clinical Laboratory',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603711/lab-1_rg3mgm.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603842/lab-2_lrnavm.jpg', 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603799/lab-3_pgmudl.jpg']
    },
    {
        title: 'Endoscopy',
        images: ['https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603136/endo-1_k8diac.jpg']
    },
];

const ServiceCard = ({ card, height }: { card: typeof serviceCards[0]; height: string }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isHovering) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
            }, 1500);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            setCurrentImageIndex(0);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovering, card.images.length]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <Link
            to={`/services#${serviceAnchorMap[card.title]}`}
            className="block"
            aria-label={`View ${card.title} details`}
        >
            <div
                className="relative rounded-[12px] overflow-hidden group cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                <div className={`${height} w-full bg-gray-100 relative overflow-hidden`}>
                    {card.images.map((image: string | undefined, index: Key | null | undefined) => (
                        <img
                            key={index}
                            src={image}
                            alt={card.title}
                            className={`w-full h-full object-cover transition-all duration-300 ease-out absolute inset-0 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                    {/* Title overlay at bottom */}
                    <h3 className="absolute bottom-0 left-0 right-0 text-white font-semibold text-[14px] lg:text-[15px] py-[21px] px-[30px]" style={{ backgroundImage: 'linear-gradient(140deg, rgba(26, 26, 26, 0.00) -44.46%, rgba(26, 26, 26, 0.64) 77.1%)' }}>
                        {card.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default function ServicesPage() {
    return (
        <section>
            <div className="bg-[#E4071405] pt-[40px] lg:py-[80px]">
                <div className="flex items-center gap-3 mb-4 lg:mb-[20px]">
                    <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
                    <span className="text-[#E40714] font-medium text-sm lg:text-[15px]">
                        Our Services
                    </span>
                </div>

                <div className="px-[16px] lg:px-20">
                    {/* Headline */}
                    <div className="lg:flex justify-between items-end">
                        <div>
                            <div>
                                <h1 className="text-[#000000] tracking-tight leading-[24px] lg:leading-[100%] lg:tracking-[-1.8px]">
                                    <span className=" text-[20px] lg:text-[44px]" style={{ fontFamily: 'TexGyreAdventor' }}>
                                        Comprehensive Medical Services
                                    </span>
                                </h1>
                            </div>

                            <div className="mt-[10px] lg:max-w-[561px] lg:mt-[15px] text-[#02070D] text-[13px] lg:text-[16px] lg:leading-[27px] leading-[20px] space-y-4">
                                <p>
                                    The most advanced independent tertiary hospital with the highest standards of technology and professional expertise.
                                </p>
                            </div>
                        </div>

                        <Link to="/services">
                            <button className="hidden lg:block px-[40px] text-[14px] font-semibold rounded-[20px] py-[16px] bg-[#E40714] text-[#FFFFFF]">
                                View All Services
                            </button>
                        </Link>

                    </div>

                    <div className="mt-[30px] flex flex-col gap-[14px] lg:gap-[16px] lg:flex-row w-full">
                        <div className="flex flex-col gap-[14px] w-full lg:w-[35%]">
                            {/* Service Card 1 */}
                            <ServiceCard
                                card={serviceCards[0]}
                                height="h-[170px] lg:h-[219px]"
                            />

                            {/* Service Card 2 */}
                            <ServiceCard
                                card={serviceCards[1]}
                                height="lg:h-[373px] h-[170px]"
                            />
                        </div>

                        <div className="flex flex-col gap-[14px] w-full lg:w-[65%]">
                            {/* first div inside the second div */}
                            <div className="flex lg:flex-row flex-col gap-[16px] w-full">
                                {/* Service Card 3 */}
                                <div className="w-full lg:w-[65%]">
                                    <ServiceCard
                                        card={serviceCards[2]}
                                        height="h-[170px] lg:h-[375px]"
                                    />
                                </div>

                                {/* Service Card 4 */}
                                <div className="w-full lg:w-[35%]">
                                    <ServiceCard
                                        card={serviceCards[3]}
                                        height="h-[170px] lg:h-[375px]"
                                    />
                                </div>
                            </div>

                            {/* second div inside the second div */}
                            <div className="flex lg:flex-row flex-col gap-[14px] w-full">
                                {/* Service Card 5 */}
                                <div className="w-full">
                                    <ServiceCard
                                        card={serviceCards[4]}
                                        height="lg:h-[217px] h-[170px]"
                                    />
                                </div>

                                {/* Service Card 6 */}
                                <div className="w-full">
                                    <ServiceCard
                                        card={serviceCards[5]}
                                        height="lg:h-[217px] h-[170px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/services">
                        <button className="block lg:hidden mt-[20px] mb-[40px] w-full px-[40px] text-[13px] font-semibold rounded-[12px] py-[14px] bg-[#E40714] text-[#FFFFFF]">
                            View All Services
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

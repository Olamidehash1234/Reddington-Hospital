import { Link } from "react-router-dom"
import { useState, useEffect, useRef, type Key } from "react"

const serviceCards = [
    { 
        title: 'Cardiology', 
        images: ['/image/home/cardiology-1.jpg', '/image/home/grid-1.png', '/image/home/cardiology-2.jpg']
    },
    { 
        title: 'Diagnostic Imaging', 
        images: ['/image/home/img-1.jpg', '/image/home/img-2.jpg', '/image/home/img-3.jpg']
    },
    { 
        title: 'Surgical Services', 
        images: ['/image/home/surg-1.jpg', '/image/home/surg-2.jpg', '/image/home/surg-3.jpg']
    },
    { 
        title: 'Emergency Services', 
        images: ['/image/home/emerg-1.jpg', '/image/home/emerg-2.jpg']
    },
    { 
        title: 'Clinical Laboratory', 
        images: ['/image/home/lab-1.jpg', '/image/home/lab-2.jpg', '/image/home/lab-3.jpg']
    },
    { 
        title: 'Endoscopy', 
        images: ['/image/home/endo-1.jpg']
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
                        className={`w-full h-full object-cover transition-all duration-300 ease-out absolute inset-0 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                {/* Title overlay at bottom */}
                <h3 className="absolute bottom-0 left-0 right-0 text-white font-medium text-[14px] lg:text-[15px] py-[21px] px-[30px]" style={{backgroundImage : 'linear-gradient(140deg, rgba(26, 26, 26, 0.00) -44.46%, rgba(26, 26, 26, 0.64) 77.1%)'}}>
                    {card.title}
                </h3>
            </div>
        </div>
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
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const stats = [
    { value: 20, label: 'Years of Experience' },
    { value: 24, rightValue: 7, separator: '/', label: 'Emergency Service' },
    { value: 726000, label: 'Patients Treated' },
    { value: 6, label: 'Branches' },
    { value: 463, label: 'Deliveries' },
];

export default function HeroSection() {
    // Carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const slideRefs = useRef<Array<HTMLImageElement | null>>([]);
    const carouselImages = [
        '/image/home/hero/img1.png',
        '/image/home/hero/img2.png',
        '/image/home/hero/img3.png',
        '/image/home/hero/img4.png',
        '/image/home/hero/img5.png',
        '/image/home/hero/img6.png',
        '/image/home/hero/img7.png',
        '/image/home/hero/img8.png',
        '/image/home/hero/img9.png',
        '/image/home/hero/img10.png',
    ];

    // Countdown state
    const [displayValues, setDisplayValues] = useState(stats.map(() => 0));
    const [displayRightValues, setDisplayRightValues] = useState(
        stats.map((stat) => (stat.rightValue ?? 0))
    );

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    // GSAP slide transition (smooth fade + slight zoom)
    useEffect(() => {
        slideRefs.current.forEach((slide, index) => {
            if (!slide) return;
            const isActive = index === currentImageIndex;
            gsap.to(slide, {
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.02,
                duration: 0.9,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        });
    }, [currentImageIndex]);

    // Count-up animation from 0 to each final stat value
    useEffect(() => {
        setDisplayValues(stats.map(() => 0));
        setDisplayRightValues(stats.map(() => 0));

        const tweens = stats.map((stat, index) => {
            const mainCounter = { value: 0 };
            const mainTween = gsap.to(mainCounter, {
                value: stat.value,
                duration: 2.8,
                delay: index * 0.12,
                ease: 'power2.out',
                onUpdate: () => {
                    setDisplayValues((prev) => {
                        const next = [...prev];
                        next[index] = Math.floor(mainCounter.value);
                        return next;
                    });
                },
            });

            if (typeof stat.rightValue === 'number') {
                const rightCounter = { value: 0 };
                const rightTween = gsap.to(rightCounter, {
                    value: stat.rightValue,
                    duration: 2.8,
                    delay: index * 0.12,
                    ease: 'power2.out',
                    onUpdate: () => {
                        setDisplayRightValues((prev) => {
                            const next = [...prev];
                            next[index] = Math.floor(rightCounter.value);
                            return next;
                        });
                    },
                });

                return [mainTween, rightTween];
            }

            return [mainTween];
        });

        return () => {
            tweens.flat().forEach((tween) => tween.kill());
        };
    }, []);

    return (
        <section className="relative lg:pt-[120px] pt-[70px] overflow-hidden">
            {/* Decorative circles - positioned absolutely */}
            <img src="/icon/illustrations/tp-lft.svg" alt="Decorative Circle" className="absolute top-[50px] left-[0px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[340px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft3.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[660px] -z-10"></img>
            <img src="/icon/illustrations/md.svg" alt="Decorative Circle" className="absolute top-[280px] left-[660px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[1140px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[97px] right-[-10px] -z-10"></img>
            <img src="/icon/illustrations/bt-rgt.svg" alt="Decorative Circle" className="absolute top-[291px] right-[-10px] -z-10"></img>
            <img src="/icon/illustrations/bt-lft.svg" alt="Decorative Circle" className="absolute bottom-[60px] left-[0px] -z-10"></img>

            <div className="px-[16px] pt-[40px] lg:pt-[47px] lg:pb-0 lg:px-[80px] mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center mb-12">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[26px] lg:text-5xl font-normal text-[#000000] mb-6 leading-tight" style={{ fontFamily: 'TexGyreAdventor' }}>
                            Welcome To Reddington<br />
                            <span>Multispecialist Hospital</span>
                        </h1>
                    </div>

                    {/* Right Side - Description */}
                    <div className="flex flex-col justify-center">
                        <div className="lg:border-l-[1px] border-[#2D2D2D] lg:pl-6">
                            <p className="text-[#2D2D2D] text-[16px] lg:text-[24px] lg:tracking-[-4%] leading-[24px] lg:leading-[100%]">
                                Reddington is your trusted partner for exceptional health. We combine internationally trained specialists with cutting-edge technology to provide comprehensive, patient-centred care across Lagos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Image Carousel Section */}
                <div className="relative mb-8 lg:mb-0">
                    <div className="relative rounded-lg overflow-hidden h-[390px] lg:h-[486px] z-0">
                        {/* Carousel Images with Fade Transition */}
                        {carouselImages.map((image, index) => (
                            <img
                                key={index}
                                ref={(el) => {
                                    slideRefs.current[index] = el;
                                }}
                                src={image}
                                alt={`Medical Team ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ opacity: index === 0 ? 1 : 0 }}
                            />
                        ))}

                        {/* Image overlay decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Statistics Bar - Positioned at bottom left of image */}
                    <div className="absolute bottom-0 left-0 right-0 lg:right-auto bg-[#E40714] rounded-b-lg lg:rounded-tl lg:rounded-xl px-4 lg:px-[17px] py-6 lg:py-[19px] shadow-xl">
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[30px]">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <p className="text-[18px] lg:text-[40px] font-medium text-white mb-1 lg:mb-2 tabular-nums">
                                        {typeof stat.rightValue === 'number'
                                            ? `${displayValues[index]}${stat.separator ?? '/'}${displayRightValues[index]}`
                                            : displayValues[index]}
                                    </p>
                                    <p className="text-[12px] text-white opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
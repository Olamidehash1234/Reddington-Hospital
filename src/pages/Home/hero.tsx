import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { branches as allBranches } from '../../data/branches';
import { branchNameToSlug } from '../../utils/slugify';
import ResponsiveImage from '../../components/ResponsiveImage';
// import Navbar from '../../components/Navbar';

const stats = [
    { value: 20, label: 'Years of Experience', suffix: '+' },
    { value: 24, rightValue: 7, separator: '/', label: 'Emergency Service' },
    { value: 726000, label: 'Patients Treated', suffix: '+' },
    { value: 6, label: 'Branches' },
    { value: 4558, label: 'Deliveries' },
];

// Helper function to format numbers with commas
const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

type BranchBubble = {
    displayName: string;
    branchName: string;
    accent: string;
};

function BranchBubbles({ enabled = true }: { enabled?: boolean }) {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(enabled);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const bubbleRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const tweensRef = useRef<gsap.core.Tween[]>([]);

    const bubbles: BranchBubble[] = useMemo(() => {
        const palette = ['#E40714', '#FF3B30', '#AF52DE', '#007AFF', '#34C759', '#FF9500'];

        // Home stat says 6 branches; keep the bubble set tight and readable.
        return allBranches.slice(0, 6).map((b, i) => {
            const simplified = b.name
                .replace(/^reddington\s+/i, '')
                .replace(/\s+hospital/i, '')
                .replace(/\s+multi-specialist/i, '')
                .replace(/\s+care/i, '')
                .replace(/\s+centre/i, '')
                .replace(/\s+center/i, '')
                .trim();

            return {
                displayName: simplified.length ? simplified : b.name,
                branchName: b.name,
                accent: palette[i % palette.length],
            };
        });
    }, []);

    useEffect(() => {
        if (!enabled) {
            setIsVisible(false);
            return;
        }
        setIsVisible(true);
    }, [enabled]);

    useEffect(() => {
        if (!isVisible) return;
        const container = containerRef.current;
        if (!container) return;

        const killAll = () => {
            tweensRef.current.forEach((t) => t.kill());
            tweensRef.current = [];
        };

        const getBounds = () => {
            const rect = container.getBoundingClientRect();
            // keep bubbles in-view and away from very top navbar area
            return {
                w: rect.width,
                h: rect.height,
                padX: Math.min(48, Math.max(16, rect.width * 0.04)),
                padTop: 110,
                padBottom: Math.min(56, Math.max(24, rect.height * 0.06)),
            };
        };

        const placeAndAnimate = () => {
            killAll();
            const { w, h, padX, padTop, padBottom } = getBounds();
            const safeH = Math.max(240, h - padTop - padBottom);

            bubbleRefs.current.forEach((el, i) => {
                if (!el) return;

                const size = 116; // consistent bubble size
                el.style.width = `${size}px`;
                el.style.height = `${size}px`;

                const startX = gsap.utils.random(padX, Math.max(padX, w - padX - size), 1);
                const startY = gsap.utils.random(padTop, Math.max(padTop, padTop + safeH - size), 1);

                gsap.set(el, { x: startX, y: startY, opacity: 0, scale: 0.85, rotate: gsap.utils.random(-6, 6, 1) });

                // Intro pop-in
                tweensRef.current.push(
                    gsap.to(el, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        delay: 0.06 * i,
                        ease: 'back.out(1.8)',
                        overwrite: 'auto',
                    })
                );

                // Continuous float (position)
                const driftX = gsap.utils.random(40, 110, 1) * (i % 2 === 0 ? 1 : -1);
                const driftY = gsap.utils.random(30, 90, 1) * (i % 3 === 0 ? 1 : -1);

                tweensRef.current.push(
                    gsap.to(el, {
                        x: `+=${driftX}`,
                        y: `+=${driftY}`,
                        duration: gsap.utils.random(3.8, 6.2, 0.1),
                        ease: 'sine.inOut',
                        repeat: -1,
                        yoyo: true,
                        overwrite: 'auto',
                    })
                );

                // Gentle wobble (rotation + scale micro)
                tweensRef.current.push(
                    gsap.to(el, {
                        rotate: `+=${gsap.utils.random(-8, 8, 1)}`,
                        scale: gsap.utils.random(0.98, 1.03, 0.01),
                        duration: gsap.utils.random(2.6, 4.4, 0.1),
                        ease: 'sine.inOut',
                        repeat: -1,
                        yoyo: true,
                        overwrite: 'auto',
                    })
                );
            });
        };

        placeAndAnimate();

        const onResize = () => {
            // Re-place + re-bound on resize so bubbles don’t drift out of view
            placeAndAnimate();
        };

        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            killAll();
        };
    }, [isVisible, bubbles.length]);

    const handleCancel = () => {
        const bubbles = bubbleRefs.current.filter(Boolean) as HTMLButtonElement[];
        tweensRef.current.forEach((t) => t.kill());
        tweensRef.current = [];

        gsap.to(bubbles, {
            opacity: 0,
            scale: 0.9,
            duration: 0.35,
            ease: 'power2.inOut',
            stagger: 0.03,
            overwrite: 'auto',
            onComplete: () => setIsVisible(false),
        });
    };

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-[70] overflow-hidden pointer-events-none"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.35),transparent_60%)] opacity-60" />

            <button
                type="button"
                onClick={handleCancel}
                className="pointer-events-auto absolute right-4 top-[96px] lg:right-8 lg:top-[112px] rounded-full bg-black/70 text-white text-sm px-4 py-2 backdrop-blur-md border border-white/25 hover:bg-black/80 transition"
                aria-label="Cancel bubbles animation"
            >
                <img src="/icon/close.svg" alt="" />
            </button>

            {bubbles.map((b, i) => (
                <button
                    type="button"
                    key={b.branchName}
                    ref={(el) => {
                        bubbleRefs.current[i] = el;
                    }}
                    onClick={() => navigate(`/branches/${branchNameToSlug(b.branchName)}`)}
                    className="absolute rounded-full pointer-events-auto select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/10"
                    style={{
                        background:
                            'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95), rgba(255,255,255,0.45) 35%, rgba(255,255,255,0.16) 62%, rgba(255,255,255,0.08) 100%)',
                        boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(255,255,255,0.35)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                    }}
                >
                    {/* Hospital-equipment icon (stethoscope + ECG) */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 h-full w-full"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id={`ring-${i}`} x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor={b.accent} stopOpacity="0.55" />
                                <stop offset="1" stopColor={b.accent} stopOpacity="0.12" />
                            </linearGradient>
                        </defs>

                        <circle cx="50" cy="50" r="47" fill="none" stroke={`url(#ring-${i})`} strokeWidth="2.5" />

                        {/* ECG line */}
                        <path
                            d="M16 58h16l6-12 8 20 7-16 6 8h19"
                            fill="none"
                            stroke={b.accent}
                            strokeOpacity="0.55"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
                        <span className="sr-only">{b.displayName}</span>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <span
                                className="text-[12px] lg:text-[13px] font-semibold tracking-[-0.01em] text-black/80"
                                style={{ textShadow: '0 1px 0 rgba(255,255,255,0.65)' }}
                            >
                                {b.displayName}
                            </span>
                            <span className="text-[10px] lg:text-[11px] font-medium text-black/50">
                                View branch
                            </span>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default function HeroSection() {
    // Carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const slideRefs = useRef<Array<HTMLImageElement | null>>([]);
    const carouselImages = [
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603139/img1_esbjjz.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603123/img2_uoyupa.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603165/img3_nordso.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603157/img4_us87jl.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603142/img5_vai25p.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603171/img6_z6of1x.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603175/img7_bxvea5.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603163/img8_kmp8gg.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603171/img9_lcrsfh.png',
        'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603136/img10_xfidmw.png',
    ];
    const loadedSlides = useMemo(() => {
        const nextIndex = (currentImageIndex + 1) % carouselImages.length;
        return new Set([0, currentImageIndex, nextIndex]);
    }, [currentImageIndex, carouselImages.length]);

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
        <section className="relative lg:pt-[120px] pt-[80px] overflow-hidden">
            <BranchBubbles enabled />
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
                        {carouselImages.map((image, index) =>
                            loadedSlides.has(index) ? (
                                <ResponsiveImage
                                    key={index}
                                    ref={(el) => {
                                        slideRefs.current[index] = el;
                                    }}
                                    src={image}
                                    alt={`Medical Team ${index + 1}`}
                                    width={1600}
                                    height={972}
                                    crop="fill"
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    sizes="(min-width: 1024px) 90vw, 100vw"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ opacity: index === 0 ? 1 : 0 }}
                                />
                            ) : null
                        )}

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
                                            ? `${formatNumber(displayValues[index])}${stat.separator ?? '/'}${formatNumber(displayRightValues[index])}`
                                            : `${formatNumber(displayValues[index])}${stat.suffix ?? ''}`}</p>
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

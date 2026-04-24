import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../../data/services";

const createServiceAnchor = (title: string) =>
    title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[()]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export default function ServicesGrid() {
    const [expandedServiceId, setExpandedServiceId] = useState<number | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const serviceId = location.hash.slice(1);

        const scrollToService = () => {
            const target = document.getElementById(serviceId);
            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        const frame = window.requestAnimationFrame(() => {
            window.requestAnimationFrame(scrollToService);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location.hash]);

    // Close expanded description when clicking outside the expanded service card.
    useEffect(() => {
        if (expandedServiceId === null) return;

        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement | null;
            if (!target) return;

            const expandedCard = target.closest<HTMLElement>(
                `[data-service-card-id="${expandedServiceId}"]`
            );

            if (!expandedCard) setExpandedServiceId(null);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [expandedServiceId]);

    const clampStyle = {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: 6,
        WebkitBoxOrient: "vertical",
    } as CSSProperties;

    function ServiceDescription({
        description,
        fullDescription,
        isExpanded,
        onToggle,
    }: {
        description: string;
        fullDescription?: string;
        isExpanded: boolean;
        onToggle: () => void;
    }) {
        const descRef = useRef<HTMLParagraphElement>(null);
        const [hasOverflow, setHasOverflow] = useState(false);

        useEffect(() => {
            if (isExpanded) return;

            const el = descRef.current;
            if (!el) return;

            const measure = () => {
                setHasOverflow(el.scrollHeight > el.clientHeight + 1);
            };

            measure();
            window.addEventListener("resize", measure);
            return () => window.removeEventListener("resize", measure);
        }, [isExpanded, description]);

        return (
            <>
                <p
                    ref={descRef}
                    className="text-[13px] text-[#2D2D2DCC] leading-[20px] lg:leading-[20px] flex-grow"
                    style={isExpanded ? undefined : clampStyle}
                >
                    {isExpanded ? fullDescription ?? description : description}
                </p>

                {hasOverflow && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle();
                        }}
                        className="text-[#E40714] font-semibold text-[13px] hover:underline text-left inline"
                    >
                        Read{isExpanded ? " Less" : " More"}
                    </button>
                )}
            </>
        );
    }

    return (
        <section className="px-4 py-10 lg:px-[80px] lg:pt-[40px]">
            {/* Search & Sort Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 lg:mb-[40px]">
                <div className="flex items-center w-full gap-[7px] lg:gap-[10px] bg-white border border-[#6F7271] lg:border-[#ADB4BF] rounded-full py-[14px] lg:px-[20px] px-[24px] lg:px-[33px]">
                    <img src="/icon/search.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto"/>
                    <input
                        type="text"
                        placeholder="Search for a medical specialty"
                        className="w-full outline-none bg-transparent text-[14px] lg:text-[14px] text-gray-700 placeholder:text-[#0C214166]"
                    />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-6 lg:gap-[13px] lg:gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {services.map((service) => {
                    const isExpanded = expandedServiceId === service.id;

                    return (
                        <div
                            key={service.id}
                            id={createServiceAnchor(service.title)}
                            data-service-card-id={service.id}
                            className="bg-[#E4071405] rounded-2xl transition overflow-hidden flex flex-col cursor-pointer scroll-mt-28"
                        >
                            <div className="relative h-[200px] lg:h-[240px] w-full bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                    onLoad={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.style.opacity = "1";
                                    }}
                                    style={{ opacity: 0 }}
                                />
                            </div>
                            <div className="p-5 lg:pt-[20px] flex flex-col flex-grow">
                                <h3 className="font-medium  text-[14px] lg:text-[15px] tracking-[-0.5px] leading-[26px] mb-[20px]">
                                    {service.title}
                                </h3>
                                <ServiceDescription
                                    description={service.description}
                                    fullDescription={service.fullDescription}
                                    isExpanded={isExpanded}
                                    onToggle={() =>
                                        setExpandedServiceId(isExpanded ? null : service.id)
                                    }
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* No results message */}
            {services.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#02070D] text-lg">No services found</p>
                    <p className="text-[#02070D] text-sm mt-2">Try adjusting your search terms</p>
                </div>
            )}
        </section>
    );
}

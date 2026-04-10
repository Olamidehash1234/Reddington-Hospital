import { useMemo, useRef, useState } from "react";
import { branches } from "../../data/branches";

type ContactLocation = {
    id: number;
    title: string;
    subtitle: string;
    phone: string;
    query: string;
};

function buildMapEmbedUrl(query: string) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

export default function Map() {
    const contactLocations = useMemo<ContactLocation[]>(() => {
        const preferredBranches = [
            "Reddington Multi-Specialist Hospital V.I",
            "Reddington Hospital Ikeja",
            "Reddington Care Hospital Lekki",
        ];

        return preferredBranches
            .map((name) => branches.find((branch) => branch.name === name))
            .filter((branch): branch is NonNullable<typeof branch> => Boolean(branch))
            .map((branch, index) => ({
                id: branch.id,
                title:
                    index === 0
                        ? "Reddington Hospital, Victoria Island - HQ"
                        : branch.name,
                subtitle: branch.location,
                phone: branch.contact?.[0] ?? "",
                query: `${branch.name}, ${branch.location}`,
            }));
    }, []);

    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [activeLocationId, setActiveLocationId] = useState<number>(
        contactLocations[0]?.id ?? 0
    );

    const activeLocation =
        contactLocations.find((location) => location.id === activeLocationId) ??
        contactLocations[0];

    if (!activeLocation) {
        return null;
    }

    return (
        <section className="bg-[#F9F9F9] px-[16px] pt-[30px] lg:pt-[50px] lg:px-[80px] lg:pb-[0px]">
            <div className="">
                <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-[0.95fr_1.1fr] lg:items-stretch lg:gap-[28px]">
                    <div className="flex flex-col gap-[18px] lg:gap-[30px]">
                        {contactLocations.map((location) => {
                            const isActive = location.id === activeLocation.id;

                            return (
                                <button
                                    key={location.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveLocationId(location.id);
                                        setTimeout(() => {
                                            if (window.innerWidth < 1024 && mapContainerRef.current) {
                                                mapContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }, 0);
                                    }}
                                    className={`group flex w-full items-start justify-between rounded-[20px] border px-[18px] py-[20px] text-left transition-all duration-300 lg:px-[20px] lg:py-[22px] ${isActive
                                            ? "border-[#FF1D16] bg-[#FF1D16] text-white shadow-[0_16px_40px_rgba(228,7,20,0.16)]"
                                            : "border border-dashed border-[#E40714]/35 bg-white text-[#111111] hover:border-[#E40714] hover:shadow-[0_14px_32px_rgba(17,17,17,0.06)]"
                                        }`}
                                >
                                    <div className="flex items-start gap-[14px]">
                                        <div
                                            className={`mt-[2px] flex h-[35px] w-[35px] items-center justify-center rounded-[10px] ${isActive
                                                    ? "bg-white/14 text-white"
                                                    : "bg-[#FF1D16] text-white"
                                                }`}
                                        >
                                            <img src="/icon/location-c.svg" className="" />
                                        </div>

                                        <div className="space-y-[8px]">
                                            <h3
                                                className={`text-[16px] lg:text-[20px] leading-normal ${isActive ? "text-white" : "text-[#2D2D2D]"
                                                    }`}
                                                style={{ fontFamily: "TexGyreAdventor" }}
                                            >
                                                {location.title}
                                            </h3>
                                            <p
                                                className={`text-[13px] lg:text-[14px] font-medium leading-[19px] ${isActive ? "text-white/90" : "text-[#4B4B4B]"
                                                    }`}
                                            >
                                                {location.subtitle}
                                            </p>
                                            <p
                                                className={`text-[13px] lg:text-[14px] font-medium leading-[19px] ${isActive ? "text-white" : "text-[#6F7271]"
                                                    }`}
                                            >
                                                <a href={`tel:${location.phone}`} className="hover:underline">
                                                    {location.phone}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`mt-[2px] flex h-[28px] w-[28px] items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${isActive
                                                ? "text-white"
                                                : "text-[#2D2D2D] "
                                            }`}
                                        aria-hidden="true"
                                    >
                                        {isActive ? (
                                            <img src="/icon/left.svg" alt="" />
                                        ) : (
                                            <img src="/icon/left-black.svg" alt="" />
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div ref={mapContainerRef} className="overflow-hidden rounded-[14px] lg:rounded-[24px] border border-[#E5E5E5] bg-white shadow-[0_14px_40px_rgba(17,17,17,0.06)] scroll-mt-[25px] lg:scroll-mt-0">
                        <iframe
                            key={activeLocation.id}
                            title={`${activeLocation.title} map`}
                            src={buildMapEmbedUrl(activeLocation.query)}
                            className="h-[360px] w-full lg:h-full lg:min-h-[316px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

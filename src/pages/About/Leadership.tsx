type Leader = {
    id: number
    name: string
    title: string
    image: string
}

const leaders: Leader[] = [
    {
        id: 1,
        name: "Dr. Adeyemi Onabowale",
        title: "Founder/CEO",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/DR._ADEYEMI_ONOBOWALE_mbe6ng.png",
    },
    {
        id: 2,
        name: "Dr. Ekundayo Omogbehin",
        title: "Group Chief Operating Officer",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/DR._EKUNDAYO_OMOGBEHIN_jsdpko.png",
    },
    {
        id: 3,
        name: "Dr. Olafunke Ijimakin",
        title: "Director of Medical Services & Compliance",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/DR._OLAFUNKE_IJIMAKIN_cgyoq1.png",
    },
    {
        id: 4,
        name: "Dami Ogala",
        title: "Group Operations & Strategy Advisor",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/DAMI_OGALA_oyyxzn.png",
    },
    {
        id: 5,
        name: "Andy Cunliffe",
        title: "General Manager, Victoria Island",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/ANDY_CUNLIFFE_zy30sm.png",
    },
    {
        id: 6,
        name: "Bola Akinsola",
        title: "Executive Director, Reddington Hospital Ikeja",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/Bola_Akinsola_azn9nk.png",
    },
    {
        id: 7,
        name: "Gbolahan Sonoiki",
        title: "Group Chief Financial Officer",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/GBOLAHAN_SONOIKI_wtbytc.png",
    },
    {
        id: 8,
        name: "Fisayo Eluyera",
        title: "Group Legal Counsel",
        image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/Fisayo_Eluyera_lm9xbe.png",
    },
]

function LeadershipMemberCard({ leader }: { leader: Leader }) {
    return (
        <div className="flex w-full flex-col items-start">
            <div className="relative z-20 mb-[20px] w-full">
                <div className="relative h-[300px] w-full sm:h-[320px] lg:h-[355px]">
                    <div className="absolute bottom-[3.93%] left-[3.45%] right-[3.79%] top-[3.28%] overflow-hidden rounded-br-[52px] rounded-tl-[52px] rounded-bl-none rounded-tr-none lg:bottom-[10px] lg:left-[10px] lg:right-[11px] lg:top-[10px] lg:rounded-br-[52px] lg:rounded-tl-[52px]">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-0 top-0 h-[17.05%] w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#E40714] lg:h-[52px]" />

                    <div className="absolute bottom-0 left-0 h-[17.05%] w-full overflow-hidden lg:h-[52px]">
                        <div className="h-full w-full origin-center rotate-180">
                            <div className="h-full w-full rounded-br-none rounded-tl-[52px] rounded-tr-none border-l-[2.636px] border-r-[2.636px] border-t-[2.636px] border-solid border-[#E40714] lg:rounded-tl-[52px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex w-full flex-col items-start gap-[2px]">
                <h3
                    className="w-full text-[15px] leading-[24px] text-[#2D2D2D] lg:text-[14px]"
                    style={{ fontFamily: "TexGyreAdventor" }}
                >
                    {leader.name}
                </h3>
                <div className="w-[42px] h-[1px] bg-[#2D2D2D] mt-[0px]"></div>
                <p className="text-[12px] leading-[19px] tracking-[-0.24px] text-[#2D2D2D] lg:text-[13px] lg:leading-[22px]">
                    {leader.title}
                </p>
            </div>
        </div>
    )
}

export default function Leadership() {
    return (
        <div className="relative bg-[#E4071405] px-[16px] py-[40px] lg:px-[80px] lg:py-[80px]">
            <img
                src="/icon/illustrations/ld-1.svg"
                alt=""
                className="pointer-events-none absolute bottom-[0px] left-[0px] z-10 h-[70px] w-[70px] opacity-30 lg:h-auto lg:w-auto"
            />
            <img
                src="/icon/illustrations/ld-rgt.svg"
                alt=""
                className="pointer-events-none absolute right-[0px] top-[0px] z-10 h-[100px] w-[100px] opacity-30  lg:bottom-[0px] lg:top-0 lg:h-auto lg:w-auto"
            />

            <div className="mb-[28px] flex flex-col gap-[20px] lg:mb-[40px]">
                <div className="space-y-[10px]">
                    <h1
                        className="text-[22px] leading-normal text-[#000000] lg:text-[32px]"
                        style={{ fontFamily: "TexGyreAdventor" }}
                    >
                        Our Leadership
                    </h1>

                    <p className="max-w-[665px] text-[13px] leading-[19px] text-[#2D2D2D] lg:text-[15px] lg:leading-[22px]">
                        We trust that this group of professionals will assist us in taking the giant leap forward and support us in directing, organizing, and implementing our strategic plans and aspirations.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[40px] lg:gap-y-[32px]">
                {leaders.map((leader) => (
                    <LeadershipMemberCard key={leader.id} leader={leader} />
                ))}
            </div>
        </div>
    )
}

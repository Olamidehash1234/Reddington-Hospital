import { awardMedias } from '../../data/awardMedias';

export default function AwardsMediaSection() {
    return (
        <section className="relative px-[16px] lg:px-[80px] py-[60px] lg:py-[80px] bg-[#E4071405]">
            {/* Decorative background elements */}
            <img src="/icon/illustrations/awrd-1.svg" alt="Decorative Circle" className="absolute top-[100px] left-[0px] z-10 opacity-10"></img>
            <img src="/icon/illustrations/abt-rgt.svg" alt="Decorative Circle" className="absolute top-[50px] right-[0px] z-10 opacity-10"></img>

            <div className="max-w-[1400px] mx-auto">
                {/* Title */}
                <h2 
                    className="text-center text-[24px] lg:text-[32px] text-[#000000] mb-[40px] lg:mb-[40px]"
                    style={{ fontFamily: 'TexGyreAdventor' }}
                >
                    Our Award Medias
                </h2>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[27px]">
                    {awardMedias.map((media) => (
                        <div
                            key={media.id}
                            className="relative rounded-[12px] overflow-hidden group cursor-pointer h-[290px] lg:h-[300px] shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={media.image}
                                alt={media.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

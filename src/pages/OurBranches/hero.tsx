import ResponsiveImage from "../../components/ResponsiveImage";

const DoctorHero = () => {
    return (
        <div className="relative h-[300px] lg:h-[424px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover"
            >
                <ResponsiveImage
                    src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603475/hero_xaclsn.png"
                    alt=""
                    width={1600}
                    height={424}
                    crop="fill"
                    priority
                    sizes="100vw"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#2D2D2D66]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-8 mt-[30px] lg:mt-[50px]">
                <div className="text-center">
                    {/* Heading */}
                    <h1 className="text-[24px] mb-[10px] lg:mb-0 lg:text-[48px] font-bold lg:leading-normal text-white capitalize" style={{ fontFamily: "TexGyreAdventor" }}>
                        Our Specialist Facilities
                    </h1>
                    <p className="text-[#FFFFFF] text-[13px] lg:text-[16] max-w-[857px] font-bold leading-[20px]">
                        Reddington's family of specialist centres and sister groups, delivering world-class healthcare across Lagos and beyond.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DoctorHero;

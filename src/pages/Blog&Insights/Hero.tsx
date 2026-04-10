import ResponsiveImage from "../../components/ResponsiveImage";
const BlogHero = () => {
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
                        Insights & Updates
                    </h1>
                    <p className="text-[#FFFFFF] text-[13px] lg:text-[16] max-w-[786px] font-bold leading-[20px]">
                        Stay informed with the latest health tips, hospital news, research breakthroughs, and community events from the Reddington Hospital Group.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;
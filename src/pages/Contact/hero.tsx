import ResponsiveImage from "../../components/ResponsiveImage";

const ContactHero = ({
    title = "Contact Us",
    description = "Please fill the form below or call the numbers attached to each branch to book an appointment.",
    imageSrc = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603424/hero_fnclxb.png",
    imageAlt = "",
    className = "",
}: {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
}) => {
    return (
        <div className={`relative h-[300px] lg:h-[424px] overflow-hidden ${className}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover"
            >
                <ResponsiveImage
                    src={imageSrc}
                    alt={imageAlt}
                    // width={1600}
                    // height={424}
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
                        {title}
                    </h1>
                    <p className="text-[#FFFFFF] text-[16px] lg:text-[18px] max-w-[857px] leading-[24px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;

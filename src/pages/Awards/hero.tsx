import ResponsiveImage from "../../components/ResponsiveImage";

const AwardsSection = () => {
  return (
    <div className="relative h-[300px] lg:h-[424px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
      >
        <ResponsiveImage
          src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603048/hero_qkuxpj.png"
          alt=""
          width={1600}
          height={424}
          crop="fill"
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0000001A]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 lg:px-[70px] mt-[30px] lg:mt-[50px]">
        <div className="flex align-center text-center gap-[10px]">
            <img src="/arrow.svg" alt="" />
          {/* Heading */}
          <h1 className="text-[24px] lg:text-[48px] font-bold lg:leading-normal text-white capitalize" style={{ fontFamily : "TexGyreAdventor"}}>
            Awards & Recognition
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;

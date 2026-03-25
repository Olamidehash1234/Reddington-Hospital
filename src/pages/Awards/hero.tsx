const AwardsSection = () => {
  return (
    <div className="relative h-[300px] lg:h-[424px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
      >
        <img src="/image/Awards/hero.png" alt="" className="w-full h-full object-cover"/>
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
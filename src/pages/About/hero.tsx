const AboutUsHero = () => {
  return (
    <div className="relative h-[500px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
      >
        <img src="/image/about/about.png" alt="" className="w-full h-full object-cover"/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0000001A]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-8 lg:mt-[50px]">
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-[40px] lg:text-[48px] font-bold lg:leading-normal text-white capitalize" style={{ fontFamily : "TexGyreAdventor"}}>
            About Reddington Hospital
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
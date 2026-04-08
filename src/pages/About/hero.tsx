const AboutUsHero = () => {
  return (
    <div className="relative h-[300px] lg:h-[424px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
      >
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603062/about_idyymu.png" alt="" className="w-full h-full object-cover"/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0000001A]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-8 mt-[30px] lg:mt-[50px]">
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-[24px] lg:text-[48px] font-bold lg:leading-normal text-white capitalize" style={{ fontFamily : "TexGyreAdventor"}}>
            About Reddington Hospital
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
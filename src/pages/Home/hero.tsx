export default function HeroSection() {
    const stats = [
        { value: '20+', label: 'Years of Experience' },
        { value: '24/7', label: 'Emergency Service' },
        { value: '726,000+', label: 'Patients Treated' },
        { value: '6', label: 'Branches' },
        { value: '463+', label: 'Deliveries' },
    ];

    return (
        <section className="relative lg:pt-[120px] pt-[70px] overflow-hidden">
            {/* Decorative circles - positioned absolutely */}
            <img src="/icon/illustrations/tp-lft.svg" alt="Decorative Circle" className="absolute top-[50px] left-[0px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[340px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft3.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[660px] -z-10"></img>
            <img src="/icon/illustrations/md.svg" alt="Decorative Circle" className="absolute top-[280px] left-[660px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[-20px] left-[1140px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft2.svg" alt="Decorative Circle" className="absolute top-[97px] right-[-10px] -z-10"></img>
            <img src="/icon/illustrations/bt-rgt.svg" alt="Decorative Circle" className="absolute top-[291px] right-[-10px] -z-10"></img>
            <img src="/icon/illustrations/tp-lft.svg" alt="Decorative Circle" className="absolute top-[50px] left-[0px] -z-10"></img>
            <img src="/icon/illustrations/bt-lft.svg" alt="Decorative Circle" className="absolute bottom-[60px] left-[0px] -z-10"></img>

            <div className="px-[16px] pt-[40px] lg:pt-[47px] lg:pb-0 lg:px-[80px]  mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-12 items-center mb-12">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[26px] lg:text-5xl font-normal text-[#000000] mb-6 leading-tight" style={{ fontFamily: 'TexGyreAdventor' }}>
                            Welcome To Reddington<br />
                            <span>Multispecialist Hospital</span>
                        </h1>
                    </div>

                    {/* Right Side - Description */}
                    <div className="flex flex-col justify-center">
                        <div className="lg:border-l-[1px] border-[#2D2D2D] lg:pl-6">
                            <p className="text-[#2D2D2D] text-[16px] lg:text-[24px] lg:tracking-[-4%] leading-[24px] lg:leading-[100%]">
                                Reddington is your trusted partner for exceptional health. We combine internationally trained specialists with cutting-edge technology to provide comprehensive, patient-centred care across Lagos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="relative mb-8 lg:mb-0">
                    <div className="relative rounded-lg overflow-hidden h-[290px] lg:h-[496px] z-0">
                        {/* Placeholder for hero image */}
                        <img 
                            src="/image/home/Subtract.png" 
                            alt="Medical Team" 
                            className="w-full object-cover "
                        />
                        {/* Image overlay decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Statistics Bar - Positioned at bottom left of image */}
                    <div className="absolute bottom-0 left-0 right-0 lg:right-auto bg-[#E40714] rounded-b-lg lg:rounded-tl lg:rounded-xl px-4 lg:px-[17px] py-6 lg:py-[19px] shadow-xl">
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[30px]">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <p className="text-[18px] lg:text-3xl font-bold text-white mb-1 lg:mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-[14px] lg:text-sm text-white opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
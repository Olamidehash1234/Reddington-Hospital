export default function InsurancePartners() {
  const partners = [
    {
      name: "Shell",
      logo: (
        <img src="/icon/clients/shell.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Maritime Insurance",
      logo: (
        <img src="/icon/clients/maritime.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Access Bank",
      logo: (
        <img src="/icon/clients/access.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Oando",
      logo: (
       <img src="/icon/clients/oando.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "This day",
      logo: (
        <img src="/icon/clients/thisday.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Total",
      logo: (
        <img src="/icon/clients/total.svg" alt="" className="w-auto h-auto object-cover"/>
      )
    },
    {
      name: "Bua",
      logo: (
        <img src="/icon/clients/bua.svg" alt="" className="w-auto h-auto object-cover" />
      )
    },
    {
      name: "Flower mill",
      logo: (
        <img src="/icon/clients/flowermill.svg" alt="" className="w-auto h-auto object-cover" />
      )
    },
    {
      name: "Tolara",
      logo: (
        <img src="/icon/clients/tolara.svg" alt="" className="w-auto h-auto object-cover" />
      )
    }
  ];

  return (
    <div className="bg-[#F8EDEE] mt-[40px] lg:mt-[60px] py-[40px] px-4 lg:pl-20 lg:pr-0 overflow-x-hidden">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          {/* Label */}
          <div className="flex-shrink-0">
            <h3 className="text-[#1A1A1A] font-medium text-center text-sm lg:text-base whitespace-nowrap">
              Our Clients:
            </h3>
          </div>
          
          {/* Partners Marquee */}
          <div className="flex-1">
            <div className=" overflow-x-hidden scrollbar-hide pr-4 lg:pr-8">
              <div className="flex items-center gap-[40px] lg:gap-[30px] animate-marquee whitespace-nowrap">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-auto lg:h-auto transition-opacity hover:opacity-80 min-w-[200px]"
                  >
                    {partner.logo}
                  </div>
                ))}
                {/* Duplicate for seamless marquee */}
                {partners.map((partner, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex items-center justify-center h-auto lg:h-auto transition-opacity hover:opacity-80 min-w-[200px]"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
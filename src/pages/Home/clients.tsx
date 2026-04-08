export default function InsurancePartners() {
  const partners = [
    {
      name: "Shell",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606719/shell_j6rsrg.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "Maritime Insurance",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606732/maritime_rwitq4.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "Access Bank",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606729/access_qdaijg.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "Oando",
      logo: (
       <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606713/oando_zl5ufe.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "This day",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606718/thisday_diq38c.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "Total",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606721/total_aoaaij.svg" alt="" className="h-full w-full object-contain"/>
      )
    },
    {
      name: "Bua",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606711/bua_qvba1c.svg" alt="" className="h-full w-full object-contain" />
      )
    },
    {
      name: "Flower mill",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606710/flowermill_ll3x8p.svg" alt="" className="h-full w-full object-contain" />
      )
    },
    {
      name: "Tolara",
      logo: (
        <img src="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606718/tolara_d7mnxq.svg" alt="" className="h-full w-full object-contain" />
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
              <div className="flex items-center gap-[22px] lg:gap-[30px] animate-marquee whitespace-nowrap">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-[40px] lg:h-[50px] transition-opacity hover:opacity-80 min-w-[132px] lg:min-w-[190px]"
                  >
                    {partner.logo}
                  </div>
                ))}
                {/* Duplicate for seamless marquee */}
                {partners.map((partner, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex items-center justify-center h-[40px] lg:h-[50px] transition-opacity hover:opacity-80 min-w-[132px] lg:min-w-[190px]"
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
          width: max-content;
          animation: marquee 42s linear infinite;
          will-change: transform;
        }
        @media (min-width: 1024px) {
          .animate-marquee {
            animation-duration: 28s;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
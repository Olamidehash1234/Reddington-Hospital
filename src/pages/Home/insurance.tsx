export default function InsurancePartners() {
  // Logo images from Figma (node 546:6029)
  const logos = {
    r46: '/icon/Insurancelogos/AIG.svg',
    r47: '/icon/Insurancelogos/AIMS.svg',
    r48: '/icon/Insurancelogos/allianz.svg',
    r49: '/icon/Insurancelogos/anvil.svg',
    r50: '/icon/Insurancelogos/april.svg',
    r51: '/icon/Insurancelogos/assist.svg',
    r52: '/icon/Insurancelogos/bupa.svg',
    r53: '/icon/Insurancelogos/cigna.svg',
    r54: '/icon/Insurancelogos/expedise.svg',
    r55: '/icon/Insurancelogos/euro.svg',
    r57: '/icon/Insurancelogos/Geo.svg',
    r58: '/icon/Insurancelogos/healix.svg',
    r59: '/icon/Insurancelogos/henner.svg',
    r60: '/icon/Insurancelogos/international.svg',
    r61: '/icon/Insurancelogos/mso.svg',
    r62: '/icon/Insurancelogos/msh.svg',
    r63: '/icon/Insurancelogos/now.svg',
    r64: '/icon/Insurancelogos/ses.svg',
    r65: '/icon/Insurancelogos/swan.svg',
    r78: '/icon/Insurancelogos/tie.svg',
    r79: '/icon/Insurancelogos/tricare.svg',
    r80: '/icon/Insurancelogos/benefit.svg',
  };

  const rows = [
    // Top row (8 logos)
    [
      { src: logos.r46, w: 100, h: 100 },
      { src: logos.r47, w: 150, h: 55.5 },
      { src: logos.r48, w: 150, h: 30 },
      { src: logos.r49, w: 112.5, h: 91.125 },
      { src: logos.r50, w: 150, h: 42 },
      { src: logos.r51, w: 150, h: 42 },
      { src: logos.r52, w: 100, h: 100 },
      { src: logos.r53, w: 100, h: 100 },
    ],
    // Middle row (8 logos)
    [
      { src: logos.r54, w: 150, h: 48 },
      { src: logos.r55, w: 150, h: 55.5 },
      { src: logos.r57, w: 100, h: 100 },
      { src: logos.r58, w: 100, h: 100 },
      { src: logos.r59, w: 100, h: 100 },
      { src: logos.r60, w: 150, h: 100 },
      { src: logos.r61, w: 150, h: 64.5 },
      { src: logos.r62, w: 100, h: 100 },
    ],
    // Bottom row (6 logos)
    [
      { src: logos.r63, w: 100, h: 100 },
      { src: logos.r64, w: 100, h: 100 },
      { src: logos.r65, w: 100, h: 100 },
      { src: logos.r78, w: 150, h: 48 },
      { src: logos.r79, w: 100, h: 100 },
      { src: logos.r80, w: 200, h: 40 },
    ],
  ];

  const Logo = ({ src, w, h }: { src: string; w: number; h: number }) => (
    <div
      className="flex-none"
      style={{
        width: w,
        height: h,
      }}
    >
      <img src={src} alt="" aria-hidden="true" className="w-full h-full object-contain" />
    </div>
  );

  return (
    <section className="bg-[rgba(228,7,20,0.05)] py-[60px] lg:py-[80px]">
      <div className="relative max-w-[1440px] mx-auto px-[16px] lg:px-[80px]">
        <h2
          className="text-[#1a1a1a] text-[36px] text-center leading-[30px]"
          style={{ fontFamily: 'TexGyreAdventor' }}
        >
          Our International Insurance Partners
        </h2>

        <div className="mt-[32px] flex flex-col gap-[22px]">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap justify-center items-center gap-x-[30px] gap-y-[22px]"
            >
              {row.map((p, idx) => (
                <Logo key={idx} src={p.src} w={p.w} h={p.h} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

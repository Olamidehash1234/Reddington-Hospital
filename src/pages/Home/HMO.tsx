export default function InsurancePartners() {
  // Logo images from Figma (node 546:6029)
  const logos = {
    r46: '/icon/HMO/alleanza.svg',
    r47: '/icon/HMO/red.svg',
    r48: '/icon/HMO/avon.svg',
    r49: '/icon/HMO/axa.svg',
    r50: '/icon/HMO/bastion.svg',
    r51: '/icon/HMO/hallmark.svg',
    r52: '/icon/HMO/health.svg',
    r53: '/icon/HMO/hms.svg',
    r54: '/icon/HMO/leadway.svg',
    r55: '/icon/HMO/twt.svg',
    r57: '/icon/HMO/mediplan.svg',
    r58: '/icon/HMO/nem.svg',
    r59: '/icon/HMO/nnpc.svg',
    r60: '/icon/HMO/novo.svg',
    r61: '/icon/HMO/redcare.svg',
    r62: '/icon/HMO/reliance.svg',
    r63: '/icon/HMO/sunu.svg',
    r64: '/icon/HMO/united.svg',
  };

  const rows = [
    // Top row (8 logos)
    [
      { src: logos.r46, w: 100, h: 100 },
      { src: logos.r47, w: 100, h: 100 },
      { src: logos.r48, w: 100, h: 100 },
      { src: logos.r49, w: 100, h: 100 },
      { src: logos.r50, w: 100, h: 100 },
      { src: logos.r51, w: 100, h: 100 },
      { src: logos.r52, w: 100, h: 100 },
      { src: logos.r53, w: 100, h: 100 },
      { src: logos.r54, w: 100, h: 100 },
    ],
    // Middle row (8 logos)
    [
      { src: logos.r55, w: 100, h: 100 },
      { src: logos.r57, w: 100, h: 100 },
      { src: logos.r58, w: 100, h: 100 },
      { src: logos.r59, w: 100, h: 100 },
      { src: logos.r60, w: 100, h: 100 },
      { src: logos.r61, w: 100, h: 100 },
      { src: logos.r62, w: 100, h: 100 },
      { src: logos.r63, w: 150, h: 75 },
      { src: logos.r64, w: 150, h: 31.5 },
    ],
  ];

  const Logo = ({ src, w, h }: { src: string; w: number; h: number }) => (
    <div
      className="flex-none"
      style={{
        width: `clamp(${Math.round(w * 0.65)}px, 18vw, ${w}px)`,
        height: `clamp(${Math.round(h * 0.65)}px, 18vw, ${h}px)`,
      }}
    >
      <img src={src} alt="" aria-hidden="true" className="w-full h-full object-contain" />
    </div>
  );

  return (
    <section className="bg-[#F9F9F9] py-[60px] lg:py-[80px]">
      <div className="relative mx-auto px-[16px] lg:px-[80px]">
        <h2
          className="text-[#1a1a1a] lg:text-[36px] text-[24px] text-center leading-[30px]"
          style={{ fontFamily: 'TexGyreAdventor' }}
        >
          Our HMO Partners
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

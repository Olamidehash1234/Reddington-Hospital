export default function InsurancePartners() {
  // Logo images from Figma (node 546:6029)
  const logos = {
    r46: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604274/alleanza_fyrd9h.svg',
    r47: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606644/red_wvmtb5.svg',
    r48: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604280/avon_pgeh69.svg',
    r49: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604276/axa_kdeams.svg',
    r50: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604273/bastion_il10le.svg',
    r51: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604277/hallmark_oufzf9.svg',
    r52: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604279/health_ni3az8.svg',
    r53: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775604318/hms_fo2h8w.svg',
    r54: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606650/leadway_pb3suy.svg',
    r55: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606653/twt_lbzn29.svg',
    r57: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606650/mediplan_v3x1sh.svg',
    r58: '/icon/HMO/nem.svg',
    r59: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606641/nnpc_wgidfo.svg',
    r60: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606659/novo_ztnjva.svg',
    r61: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606650/redcare_zhup4z.svg',
    r62: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606653/reliance_e7naw3.svg',
    r63: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606653/sunu_skzxju.svg',
    r64: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606653/united_svjqkn.svg',
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

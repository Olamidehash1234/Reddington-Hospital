export default function InsurancePartners() {
  // Logo images from Figma (node 546:6029)
  const logos = {
    r46: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606658/AIG_mrkddx.svg',
    r47: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606660/AIMS_zv8oad.svg',
    r48: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606663/allianz_e8ilo3.svg',
    r49: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606659/anvil_bvxmm6.svg',
    r50: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606661/april_cn8xot.svg',
    r51: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606661/assist_igaugh.svg',
    r52: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606663/bupa_dyfudw.svg',
    r53: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606664/cigna_qjswew.svg',
    r54: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606664/expedise_yxp3v2.svg',
    r55: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606666/euro_m0jdu2.svg',
    r57: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606665/Geo_vssysx.svg',
    r58: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606666/healix_z32k03.svg',
    r59: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606667/henner_zcbd5x.svg',
    r60: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606673/international_qo4e61.svg',
    r61: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606669/mso_ip1efl.svg',
    r62: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606667/msh_i1hjlw.svg',
    r63: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606668/now_hfv869.svg',
    r64: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606731/ses_ice6cv.svg',
    r65: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606672/swan_rej9dv.svg',
    r78: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606672/tie_qv5vy7.svg',
    r79: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606673/tricare_lvvqan.svg',
    r80: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775606662/benefit_k3yr09.svg',
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
      { src: logos.r80, w: 150, h: 40 },
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
    <section className="bg-[rgba(228,7,20,0.05)] py-[40px] lg:py-[80px]">
      <div className="relative mx-auto px-[16px] lg:px-[80px]">
        <h2
          className="text-[#1a1a1a] lg:text-[36px] text-[24px] text-center leading-[30px]"
          style={{ fontFamily: 'TexGyreAdventor' }}
        >
          Our International Insurance Partners
        </h2>

        <div className="mt-[32px] flex flex-col gap-[22px]">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-x-[30px] gap-y-[22px]"
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

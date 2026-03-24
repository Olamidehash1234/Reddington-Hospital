export default function BlogSection() {
  // Assets taken from the Figma node 546:5865
  const heroImg =
    'image/home/blog/heart.png';
  // const headerUnderline = 'https://www.figma.com/api/mcp/asset/ee4978e9-b91d-4e3d-86e4-2a7ff78c50d7';

  const featured = {
    title: 'WHAT DO YOU KNOW ABOUT YOUR HEART',
    date: 'Posted on, February 14, 2024',
    description:
      'As a central part of the circulatory system, the heart is primarily responsible for pumping blood and distributing oxygen and nutrients throughout the body.',
  };

  const items = [
    featured,
    {
      title: 'WHAT DO YOU KNOW ABOUT YOUR HEART',
      date: 'Posted on, February 14, 2024',
      description:
        'As a central part of the circulatory system, the heart is primarily responsible for pumping blood and distributing oxygen and nutrients throughout the body.',
    },
    {
      title: 'WHAT DO YOU KNOW ABOUT YOUR HEART',
      date: 'Posted on, February 14, 2024',
      description:
        'As a central part of the circulatory system, the heart is primarily responsible for pumping blood and distributing oxygen and nutrients throughout the body.',
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-[60px] lg:py-[80px]">
      <div className="flex items-center gap-3 mb-[10px] lg:mb-[0px]">
        <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
        <span className="text-[#E40714] font-medium text-sm lg:text-[15px]">
          Blog & News
        </span>
      </div>
      <div className="relative mx-auto px-[16px] lg:px-[80px]">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end">
          {/* Header */}
          <h2
            className="mt-[0px] text-black font-['TexGyreAdventor'] text-[24px] lg:text-[36px] leading-tight"
            style={{ fontFamily: 'TexGyreAdventor' }}
          >
            Latest News From Us
          </h2>
          <div className="hidden lg:flex flex-col gap-[18px] lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center justify-start lg:justify-end">
              <button className="bg-[#E40714] text-white px-[30px] py-[14px] rounded-[20px] font-semibold text-[14px] whitespace-nowrap">
                Read More News
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[36px] lg:mt-[46px] flex flex-col lg:grid lg:grid-cols-2 lg:gap-[20px] gap-[20px]">
          {/* Featured card */}
          <article className="relative w-full rounded-[12px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(247,133,132,0.05)] flex-none">
            <div className="lg:h-[632px] h-[420px] w-full">
              <img
                src={heroImg}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom gradient overlay (necessary overlay positioning) */}
            <div
              className="absolute left-0 right-0 bottom-0 w-full rounded-b-[12px]"
              style={{
                backgroundImage: 'linear-gradient(197deg, rgba(228, 7, 20, 0.10) -141.18%, #E40714 88.2%)', backdropFilter: "blur(2px)",
              }}
            >
              <div className="p-[18px] flex items-end justify-between gap-[16px]">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-white font-semibold text-[15px] lg:text-[18px] leading-[19px] lg:leading-[30px]">
                    {featured.title}
                  </h3>
                  <p className="text-white font-medium text-[14px] lg:text-[16px] leading-[19px]">
                    {featured.date}
                  </p>
                  <p className="text-white/90 font-medium text-[12px] lg:text-[14px] lg:max-w-[500px] leading-[19px] overflow-hidden">
                    {featured.description}
                  </p>
                </div>

                {/* Arrow button (no absolute positioning) */}
                <button
                  type="button"
                  aria-label="Read more"
                  className="hidden lg:flex items-center justify-center flex-none"
                >
                  <img
                    src="/icon/arrow.svg"
                    alt=""
                    aria-hidden="true"
                    className=""
                  />
                </button>
              </div>
            </div>
          </article>

          {/* Right column items */}
          <div className="flex flex-col gap-[20px]">
            {items.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className="lg:flex-1 min-h-0 flex flex-col sm:flex-row overflow-hidden rounded-[12px] bg-white border-[rgba(111,114,113,0.3)] border-[0.5px]"
              >
                {/* Image */}
                <div className="flex-none w-full sm:w-[250px] overflow-hidden">
                  <img
                    src={heroImg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 p-[16px] lg:p-[18px] flex flex-col gap-[10px] lg:gap-[14px]">
                  <h3 className="font-semibold text-[#2d2d2d] text-[14px] lg:text-[18px] leading-[19px] lg:leading-[22px]">
                    {item.title}
                  </h3>
                  <p className="font-medium text-[#2d2d2d] text-[13px] lg:text-[16px] leading-[19px]">
                    {item.date}
                  </p>

                  <p className="font-normal text-[#2d2d2d] text-[12px] lg:text-[14px] leading-[19px] overflow-hidden text-ellipsis">
                    {item.description}
                  </p>

                  <button className="text-[#e40714] font-medium lg:text-[14px] text-[12px] leading-[19px] underline w-fit lg:mt-[10px]">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:hidden lg:flex flex-col gap-[18px] lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center justify-start lg:justify-end">
              <button className="bg-[#E40714] w-full mt-[10px] mb-[0px] text-white px-[30px] py-[14px] rounded-[12px] font-semibold text-[13px] whitespace-nowrap">
                Read More News
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


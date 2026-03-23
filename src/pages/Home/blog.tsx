export default function BlogSection() {
  // Assets taken from the Figma node 546:5865
  const heroImg =
    'https://www.figma.com/api/mcp/asset/6db81169-06c0-44de-b26f-3980ee7194c9';
  const arrowDownIcon = 'https://www.figma.com/api/mcp/asset/a39edeb5-6277-4d45-b239-9ef9be998e99';
  const headerUnderline = 'https://www.figma.com/api/mcp/asset/ee4978e9-b91d-4e3d-86e4-2a7ff78c50d7';

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
    <section className="relative bg-white overflow-hidden py-[60px] lg:py-[90px]">
      <div className="relative mx-auto px-[16px] lg:px-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-[18px] lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-[30px] lg:w-[50px] bg-[#E40714]" />
              <span className="text-[#E40714] font-medium text-[14px] lg:text-[16px]">
                Blog &amp; News
              </span>
            </div>
            <img
              src={headerUnderline}
              alt=""
              aria-hidden="true"
              className="mt-[10px] w-[70px] h-auto"
            />
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <button className="bg-[#E40714] text-white px-[30px] py-[14px] rounded-[20px] font-semibold text-[14px] whitespace-nowrap">
              Read More News
            </button>
          </div>
        </div>

        <h2
          className="mt-[14px] text-black font-['TexGyreAdventor'] text-[32px] lg:text-[36px] leading-tight"
          style={{ fontFamily: 'TexGyreAdventor' }}
        >
          Latest News From Us
        </h2>

        {/* Cards */}
        <div className="mt-[36px] lg:mt-[46px] flex flex-col lg:flex-row lg:items-stretch lg:gap-[40px] gap-[28px]">
          {/* Featured card */}
          <article className="relative lg:w-[606px] w-full rounded-[12px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(247,133,132,0.05)] flex-none">
            <div className="aspect-[606/632] w-full">
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
                backgroundImage:
                  'linear-gradient(180deg, rgba(228, 7, 20, 0.10) 0%, rgba(228, 7, 20, 0.92) 70%, rgb(228, 7, 20) 100%)',
              }}
            >
              <div className="p-[18px] flex items-end justify-between gap-[16px]">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-white font-semibold text-[18px] leading-[22px]">
                    {featured.title}
                  </h3>
                  <p className="text-white font-medium text-[14px] leading-[19px]">
                    {featured.date}
                  </p>
                  <p className="text-white/90 font-medium text-[14px] leading-[19px] text-ellipsis overflow-hidden">
                    {featured.description}
                  </p>
                </div>

                {/* Arrow button (no absolute positioning) */}
                <button
                  type="button"
                  aria-label="Read more"
                  className="w-[56px] h-[56px] rounded-full bg-[#E40714] flex items-center justify-center flex-none"
                >
                  <img
                    src={arrowDownIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-[24px] h-[24px]"
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
                className="lg:flex-1 min-h-0 flex flex-col sm:flex-row overflow-hidden rounded-[12px] bg-white border-[rgba(111,114,113,0.3)] border-b-[0.5px] border-r-[0.5px] border-t-[0.5px]"
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
                <div className="flex-1 p-[18px] flex flex-col gap-[14px]">
                  <h3 className="font-semibold text-[#2d2d2d] text-[18px] leading-[22px]">
                    {item.title}
                  </h3>
                  <p className="font-medium text-[#2d2d2d] text-[16px] leading-[19px]">
                    {item.date}
                  </p>

                  <p className="text-[#e40714] font-medium text-[14px] leading-[19px] underline w-fit">
                    Read More
                  </p>

                  <p className="font-normal text-[#2d2d2d] text-[14px] leading-[19px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useMemo, useState } from 'react';

type Testimonial = {
  id: string;
  text: string;
  name: string;
  initial: string;
};

export default function TestimonialPage() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: 't1',
        text: `"The care I received at Reddington was exceptional. The doctors and nurses at The Grays Cardiology Centre were incredibly attentive and professional. I felt truly cared for throughout my entire treatment journey."`,
        name: 'Chioma Adebayo',
        initial: 'C',
      },
      {
        id: 't2',
        text: `"From the first consultation to the final follow-up, the care at Reddington was consistent, professional, and compassionate. I always felt informed and supported."`,
        name: 'Amaka Nwosu',
        initial: 'A',
      },
      {
        id: 't3',
        text: `"Excellent experience overall. The entire team was attentive, the facility was clean, and my treatment plan made me feel confident every step of the way."`,
        name: 'Ngozi Okafor',
        initial: 'N',
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex] ?? testimonials[0];

  // Figma assets (used directly for arrows/icons)
  const arrowLeftIcon = 'https://www.figma.com/api/mcp/asset/a3898837-1443-452a-8b1c-cd0f15400491';
  const arrowRightIcon = 'https://www.figma.com/api/mcp/asset/d18aeee2-9cf7-4e01-bc00-24c3ef5c41a2';

  // Star asset (node 546:5927 / 546:5931 pipeline in Figma)
  const starImg = 'https://www.figma.com/api/mcp/asset/d28fdafd-ce5d-43be-b687-72bacc13abbe';

  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);

  const onPrev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const onNext = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative bg-white overflow-hidden py-[60px] lg:py-[80px]">

      <div className="flex items-center gap-3 mb-4 lg:mb-[0px]">
        <div className="h-0.5 w-[20px] lg:w-[70px] bg-[#E40714]"></div>
        <span className="text-[#E40714] font-medium text-sm lg:text-[15px]">
          Testimonials
        </span>
      </div>

      {/* Decorative blobs (visible on large screens like in Figma) */}
      <div className="hidden lg:block absolute left-[0px] top-[20px]">
        <img src="/icon/illustrations/tst-top-lft.svg" alt="" />
      </div>
      <div className="hidden lg:block absolute left-[calc(66.67%+10px)] top-[355px]">
        <img src="/icon/illustrations/tst-md-rgt.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="hidden lg:block absolute right-[0px] top-[0px]">
        <img src="/icon/illustrations/tst-top-rgt.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="hidden lg:block absolute left-[60px] top-[420px] w-[252px] h-[275px]">
        <img src="/icon/illustrations/tst-btm-lft.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative mx-auto px-[16px] lg:px-[80px]">
        {/* Header */}
        <div className="relative">
          <h2
            className="text-[#000000] text-[32px] lg:text-[45px] leading-tight mb-[10px]" style={{ fontFamily: 'TexGyreAdventor' }}
          >
            What Our Patients Say
          </h2>
          <p className="text-[#000000] text-[16px] font-medium  lg:text-[15px] leading-[19px]">
            Hear from our patients who have experienced our world-class care
          </p>
        </div>

        {/* Carousel Row */}
        <div className="mt-[36px] lg:mt-[46px]">
          <div className="relative lg:grid lg:grid-cols-[84px_1fr_84px] lg:items-center lg:gap-[40px]">
            {/* Left arrow */}
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous testimonial"
              className="hidden lg:flex items-center justify-center w-[60px] h-[60px]"
            >
              <img src={arrowLeftIcon} alt="" className="w-full h-full" />
            </button>

            {/* Card */}
            <div className="w-full">
              <div className="bg-[rgba(249,249,249,0.1)] border-2 border-[#E4071433] border-solid rounded-[12px]">
                {/* Quote + content layout (no absolute positioning) */}
                <div className="p-[20px] lg:py-[20px] lg:px-[40px]">
                  <div className="flex items-start gap-[16px]">
                    <div className="space-y-[24px] flex-1">

                      <img src="/icon/quote.svg" alt="" />

                      <p className="font-medium text-[16px] lg:text-[18px] leading-[26px] text-[#000000]">
                        {active.text}
                      </p>

                      {/* Stars */}
                      <div className="flex items-center gap-[4px]">
                        {stars.map((idx) => (
                          <img
                            key={idx}
                            src={starImg}
                            alt=""
                            aria-hidden="true"
                            className="w-[20px] h-[20px]"
                          />
                        ))}
                      </div>

                      {/* Name row */}
                      <div className="flex items-center gap-[10px]">
                        <div className="bg-[#e40714] w-[32px] h-[32px] rounded-[20px] flex items-center justify-center">
                          <span className="font-medium text-[16px] text-white leading-[26px]">
                            {active.initial}
                          </span>
                        </div>
                        <p className="font-medium text-[16px] text-black whitespace-nowrap">
                          {active.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className="hidden lg:flex items-center justify-center w-[60px] h-[60px] rotate-180 justify-self-end"
            >
              <img src={arrowRightIcon} alt="" className="w-full h-full" />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="flex lg:hidden items-center justify-between mt-[18px]">
            <button type="button" onClick={onPrev} className="w-[44px] h-[44px]">
              <img src={arrowLeftIcon} alt="" className="w-full h-full" />
            </button>
            <button type="button" onClick={onNext} className="w-[44px] h-[44px]">
              <img src={arrowRightIcon} alt="" className="w-full h-full" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-[26px]">
            <div className="flex items-center justify-center gap-[8px]">
              {Array.from({ length: testimonials.length }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#e40714] w-[24px] h-[8px] rounded-full'
                      : 'bg-[#d9d9d9] w-[8px] h-[8px] rounded-full hover:bg-[#e40714]/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


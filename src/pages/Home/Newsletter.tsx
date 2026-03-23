import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  // Figma assets for the subscribe button icon (node 546:5976)
  const imgMask = 'https://www.figma.com/api/mcp/asset/21080fd5-0f1a-4aea-8dcf-d6345840a792';
  const imgIcon = '/icon/subscribe.svg';

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend in this project yet; keep it simple.
  };

  return (
    <section className="relative bg-[#E40714] overflow-hidden py-[40px] lg:py-[60px] px-[16px] lg:px-[80px]">
      {/* Decorative vectors (kept absolute because they are background decoration) */}
      <div className="hidden lg:block absolute left-[0px] top-[0px] pointer-events-none">
        <div className="h-full w-full">
          <img
            src="/icon/illustrations/mouse-1.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute right-[0px] bottom-[0px] pointer-events-none">
        <div className="h-full w-full">
          <img
            src="/icon/illustrations/mouse-2.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[24px]">
        {/* Text */}
        <div className="space-y-[14px] max-w-[620px]">
          <h1
            className="text-white text-[36px] lg:text-[36px] leading-[normal]"
            style={{ fontFamily: 'TexGyreAdventor' }}
          >
            Stay Updated with Health Tips
          </h1>
          <p className="text-[16px] font-medium leading-[19px] text-[#FFFFFF]">
            Subscribe to our newsletter for healthy living tips, hospital news, and exclusive health insights from our
            medical experts.
          </p>
        </div>

        {/* Input + button frame */}
        <form onSubmit={onSubmit} className="w-full lg:w-[613px]">
          <div className="w-full border-[1.5px] border-solid border-white rounded-[12px] px-[20px] py-[10px] flex items-center gap-[10px]">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your email address"
              aria-label="Enter Your email address"
              className="flex-1 text-[14px] text-start text-white placeholder:text-white bg-transparent border-0 outline-none font-medium leading-[19px]"
            />

            {/* Button (inside the parent frame div; no absolute positioning) */}
            <button
              type="submit"
              className="flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[8px] bg-white border border-[#e40714] border-solid"
            >
              <span className="relative overflow-clip w-[24px] h-[24px] shrink-0">
                {/* Masked send icon similar to Figma */}
                <span
                  className="absolute inset-0"
                  style={{
                    WebkitMaskImage: `url('${imgMask}')`,
                    maskImage: `url('${imgMask}')`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: '24px 24px',
                    maskSize: '24px 24px',
                  }}
                >
                  <img
                    src={imgIcon}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full"
                  />
                </span>
              </span>

              <span className="text-[#e40714] text-[14px] font-semibold leading-[19px] whitespace-nowrap">
                Subscribe
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
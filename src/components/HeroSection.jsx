import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:my-[50px] my-8 font-primaryFont">
      <div className="container grid grid-cols-12 gap-3">
        <div className="xl:col-span-6 col-span-12 overflow-hidden flex items-center w-full xl:h-full md:h-[400px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="relative w-[100%] h-full" data-aos="fade-right">
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/main-banner-1.jpg"
                  alt=""
                />
                <div className="absolute xl:top-12 lg:top-[200px] md:top-12 top-4 left-4 flex flex-col h-full md:left-12">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-red-600 text-[15px]">
                      SUPERCHARGED PROS.
                    </h1>
                    <h1 className="text-3xl font-[500]">Special Sale</h1>
                    <div className="flex flex-col text-sm text-zinc-700">
                      <span>From $999.00 or 41.62/mo.</span>
                      <span>For 24 mo. Footnote*</span>
                    </div>
                    <div>
                      <button className="text-[14px] bg-clr-accent px-3 py-1 text-white rounded-full">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[100%] h-full" data-aos="fade-right">
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/main-banner.jpg"
                  alt=""
                />
                <div className="absolute xl:top-12 lg:top-[200px] md:top-12 top-4 left-4 flex flex-col h-full md:left-12">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-red-600 text-[15px]">
                      SUPERCHARGED PROS.
                    </h1>
                    <h1 className="text-3xl font-[500]">Special Sale</h1>
                    <div className="flex flex-col text-sm text-zinc-700">
                      <span>From $999.00 or 41.62/mo.</span>
                      <span>For 24 mo. Footnote*</span>
                    </div>
                    <div>
                      <button className="text-[14px] bg-clr-accent px-3 py-1 text-white rounded-full">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="xl:col-span-3 col-span-6 flex flex-col gap-3 w-full h-full"
          data-aos="fade-down"
        >
          <div className=" w-full">
            <div className="relative">
              <img
                src="/images/catbanner-01.jpg"
                className="w-full rounded-lg           "
                alt=""
              />
              <div className="absolute top-7 flex flex-col h-full left-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-red-600 text-[13px]">
                    SUPERCHARGED PROS.
                  </h1>
                  <h1 className="text-xl font-[500] hidden md:block">
                    Laptops Max
                  </h1>
                  <div className="md:flex flex-col text-sm text-zinc-700 hidden">
                    <span>From $1699.00 or </span>
                    <span>$64.62/mo.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src="/images/catbanner-02.jpg"
                className="w-full rounded-lg"
                alt=""
              />
              <div className="absolute top-7 flex flex-col h-full left-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-red-600 text-[13px]">15% OFF</h1>
                  <h1 className="text-xl font-[500] hidden md:block">
                    SmartWatch 7
                  </h1>
                  <div className="md:flex flex-col text-sm text-zinc-700 hidden">
                    <span>Shop the latest band </span>
                    <span>styles and colors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="xl:col-span-3 col-span-6 flex flex-col gap-3"
          data-aos="fade-up"
        >
          <div>
            <div className="relative">
              <img
                src="/images/catbanner-03.jpg"
                className="w-full rounded-lg"
                alt=""
              />
              <div className="absolute top-7 flex flex-col h-full left-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-red-600 text-[13px]">NEW ARRIVAL</h1>
                  <h1 className="text-xl font-[500] hidden md:block">
                    Buy IPAD Air
                  </h1>
                  <div className="md:flex hidden flex-col text-sm text-zinc-700">
                    <span>From $599.00 or </span>
                    <span>$49.91/mo. for 12mo.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src="/images/catbanner-04.jpg"
                className="w-full rounded-lg"
                alt=""
              />
              <div className="absolute top-7 flex flex-col h-full left-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-red-600 text-[13px]">FREE ENGRAVING</h1>
                  <h1 className="text-xl font-[500] hidden md:block">
                    AirPods Max
                  </h1>
                  <div className="md:flex hidden flex-col text-sm text-zinc-700">
                    <span>High-fidelity playback & </span>
                    <span>ultra-low distortion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

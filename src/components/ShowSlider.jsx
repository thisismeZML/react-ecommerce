import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { photos } from "@/Slider/slider";
import Aos from "aos";

const ShowSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    Aos.init({
        duration :1000,
        delay : 300
    })
  },[])

  return (
    <div className="container my-[50px] font-primaryFont" data-aos="fade-up">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {photos.map(({ id, image, description, header }) => (
          <SwiperSlide
            key={id}
            className="w-full bg-clr-accent py-12 text-white"
          >
            <div className="h-full grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 px-8">
              <div className="flex flex-col gap-3 justify-center px-11">
                <p className="text-5xl">{header}</p>
                <p className="">{description}</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img className="h-[300px] object-cover" src={image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default ShowSlider;

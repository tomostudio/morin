import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

const HeroSlider = ({ className }) => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        className={`${className}`}
      >
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Image
              src={`/assets/hero-slider/hero-1.jpg`}
              placeholder={"assets/hero-slider/hero-placeholder.png"}
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Image
              src={`/assets/hero-slider/hero-2.jpg`}
              placeholder={"assets/hero-slider/hero-placeholder.png"}
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Image
              src={`/assets/hero-slider/hero-3.jpg`}
              placeholder={"assets/hero-slider/hero-placeholder.png"}
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Image
              src={`/assets/hero-slider/hero-4.jpg`}
              placeholder={"assets/hero-slider/hero-placeholder.png"}
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

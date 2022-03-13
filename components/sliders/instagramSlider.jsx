import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import InstagramCard from "../module/instagramCard";

const InstagramSlider = ({ data }) => {
  return (
    <Swiper
      breakpoints={{
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        550: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2.5, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1400: { slidesPerView: 4.7, spaceBetween: 30 },
        1600: { slidesPerView: 5.4, spaceBetween: 30 },
      }}
      loop={true}
      freeMode={true}
      centeredSlides={true}
      modules={[FreeMode]}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={`${item.title}${index}`}>
          <InstagramCard
            imgSrc={item.imgSrc}
            imgPlaceholder={item.imgPlaceholder}
            imgAlt={item.imgAlt}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InstagramSlider;

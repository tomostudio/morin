import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import RecipeCard from "../module/recipeCard";

const RecipeSlider = ({ data }) => {
  return (
    <Swiper
      breakpoints={{
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      freeMode={true}
      modules={[FreeMode]}
      style={{ padding: "0 16px" }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.title}>
          <RecipeCard
            imgSrc={item.imgSrc}
            imgPlaceholder={item.imgPlaceholder}
            imgAlt={item.imgAlt}
            title={item.title}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipeSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import RecipeCard from "../shared-module/recipeCard";
import urlFor from "@/helpers/sanity/urlFor";

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
      style={{ padding: "20px 16px" }}
    >
      {data?.slice(0,3).map((item) => (
        <SwiperSlide key={item.title}>
          <RecipeCard
            imgSrc={urlFor(item.thumbnail).url()}
            imgPlaceholder={urlFor(item.thumbnail).url()}
            imgAlt={item.thumbnail.alt}
            title={item.title}
            link={`/recipes/${item.slug.current}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipeSlider;

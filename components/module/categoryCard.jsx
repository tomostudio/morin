import colors from "@/helpers/colors";
import React from "react";
import MorinButton from "../utils/morinButton";
import { SunRay } from "../utils/svg";

const CategoryCard = ({ title, description, link }) => {
  return (
    <div className="relative flex flex-wrap w-full rounded-2xl overflow-hidden mb-4 last:mb-0 lg:mb-5 lg:odd:flex-row-reverse lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px]">
      <div className="relative w-full min-h-[245px] bg-morin-lightBlue lg:w-1/2">
        <div className="flex items-center jusfity-center w-full h-full scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 2xl:ml-0 lg:-translate-y-1/2">
          <SunRay className="block animate-spin-slow" />
        </div>
        <div className="w-full h-full"></div>
      </div>

      <div className="relative flex flex-col w-full text-center items-center text-morin-blue bg-white pt-11 pb-5 px-4 z-1 lg:w-1/2 lg:items-start lg:justify-center lg:text-left lg:px-10">
        <span className="font-nutmeg font-bold text-ctitle leading-none mb-3 lg:text-h2 lg:mb-7 xl:text-h1 xl:mb-8">
          {title}
        </span>
        <span className="max-w-[240px] mb-3 lg:mb-7 xl:mb-8">
          {description}
        </span>
        <MorinButton
          color={colors.morinBlue}
          destination={link}
          className="lg:ml-0"
        >
          See All {title}
        </MorinButton>
      </div>
    </div>
  );
};

export default CategoryCard;

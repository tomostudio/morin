import Image from "next/image";
import React from "react";
import colors from "@/helpers/colors";
import FancyLink from "../utils/fancyLink";
import { Arrow } from "../utils/svg";

const HighlightCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  date,
  title,
  link,
}) => {
  return (
    <div className="flex flex-wrap w-full h-full min-h-[160px] rounded-2xl overflow-hidden xl:min-h-[215px]">
      <div className="relative w-5/12">
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder="blur"
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-wrap flex-col w-7/12 text-morin-blue bg-white p-3 xl:py-4 xl:px-5">
        <span className="mb-1.5 xl:mb-2">{date}</span>
        <span className="text-mtitleSmall font-bold leading-tight mt-0 mb-5 xl:text-ctitle">
          {title}
        </span>
        <FancyLink
          destination={link}
          className="flex w-fit items-center text-[14px] font-semibold mt-auto"
        >
          <span className="pt-px md:pt-0.5 lg:pt-px">See Events</span>
          <div className="w-4 ml-2 xl:w-6">
            <Arrow color={colors.morinBlue} />
          </div>
        </FancyLink>
      </div>
    </div>
  );
};

export default HighlightCard;

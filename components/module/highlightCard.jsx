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
    <div className="flex flex-wrap w-full h-full min-h-[160px] rounded-[15px] overflow-hidden xl:min-h-[215px]">
      <div className="relative w-[45%]">
        <Image
          src={imgSrc}
          placeholder={imgPlaceholder}
          alt={imgAlt}
          width={215}
          height={215}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-wrap flex-col w-[55%] text-morin-blue bg-white p-[13px] xl:py-[15px] xl:px-[20px]">
        <span className="mb-[5px] xl:mb-[10px]">{date}</span>
        <span className="text-[22px] font-bold leading-tight mt-0 mb-[20px] xl:text-ctitle">{title}</span>
        <FancyLink destination={link} className="flex items-center text-[14px] font-semibold mt-auto">
          See Events
          <div className="w-[18px] ml-[10px] xl:w-[25px]">
            <Arrow color={colors.morinBlue} />
          </div>
        </FancyLink>
      </div>
    </div>
  );
};

export default HighlightCard;

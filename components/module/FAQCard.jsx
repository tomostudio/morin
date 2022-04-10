import colors from "@/helpers/colors";
import React from "react";
import FancyLink from "../utils/fancyLink";
import MorinButton from "../utils/morinButton";
import { Arrow } from "../utils/svg";

const FAQCard = ({ title, onClick }) => {
  return (
    <div className="relative transition-all duration-300 hover:rotate-3 hover:shadow-lg flex flex-col justify-between w-full h-full min-h-[210px] bg-morin-skyBlue text-morin-blue rounded-2xl p-4 overflow-hidden md:min-h-[350px] md:p-5 lg:min-h-[400px] lg:p-7 xl:min-h-[490px] xl:p-10 2xl:min-h-[600px]">
      <FancyLink
        onClick={onClick}
        className="w-full h-full absolute top-0 left-0"
      />
      <div />
      <span className="font-nutmeg text-default text-center leading-tight md:text-mtitleSmall xl:text-mtitle 2xl:text-mtitleBig">
        {title}
      </span>
      <span className="flex flex-wrap items-center justify-center w-9 h-6 border-morin-blue border-solid border-2 rounded-full px-2 mx-auto md:w-11 md:h-8">
        <Arrow color={colors.morinBlue} />
      </span>
    </div>
  );
};

export default FAQCard;

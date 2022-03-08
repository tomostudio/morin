import Image from "next/image";
import FancyLink from "../utils/fancyLink";
import { Arrow, ArrowLarge } from "../utils/svg";

const RecipeCard = ({ imgSrc, imgPlaceholder, imgAlt, title, link }) => {
  return (
    <div className="relative rounded-[20px] overflow-hidden">
      <FancyLink
        destination={link}
        a11yText={`Navigate to ${title ? title : "recipe"}`}
        className="flex flex-wrap flex-col items-center justify-between w-full h-full text-white text-center py-5 px-[15px] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-1 xl:py-[30px] xl:px-[20px]"
      >
        <span className="block font-nutmeg font-bold text-[22px] leading-tight max-w-[180px] lg:text-[28px] xl:text-ctitle xl:max-w-[280px]">
          {title}
        </span>
        <div className="flex items-center justify-center w-[35px] h-[25px] rounded-[25px] border-2 border-white border-solid px-[7px] lg:w-[45px] lg:h-[30px] lg:px-[10px] xl:w-[60px] xl:h-[45px] xl:px-[12px]">
          <span className="block w-full lg:hidden"><Arrow /></span>
          <span className="hidden w-full lg:block"><ArrowLarge /></span>
        </div>
      </FancyLink>

      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          placeholder={imgPlaceholder}
          alt={imgAlt}
          width={387}
          height={487}
          layout="responsive"
          // layout="fill"
          // objectFit="cover"
        />
      </div>
    </div>
  );
};

export default RecipeCard;

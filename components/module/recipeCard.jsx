import Image from "next/image";
import FancyLink from "../utils/fancyLink";
import { Arrow, ArrowLarge } from "../utils/svg";

const RecipeCard = ({ imgSrc, imgPlaceholder, imgAlt, title, link }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      <FancyLink
        destination={link}
        a11yText={`Navigate to ${title ? title : "recipe"}`}
        className="flex flex-wrap flex-col items-center justify-between w-full h-full text-white text-center py-5 px-4 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-1 xl:py-8 xl:px-5"
      >
        <span className="block font-nutmeg font-bold text-mtitleSmall leading-tight max-w-[180px] lg:text-mtitle xl:text-ctitle xl:max-w-[280px]">
          {title}
        </span>
        <div className="flex items-center justify-center w-9 h-6 rounded-3xl border-2 border-white border-solid px-2 lg:w-11 lg:h-8 lg:px-2 xl:w-16 xl:h-11 xl:px-3">
          <span className="block w-full lg:hidden">
            <Arrow />
          </span>
          <span className="hidden w-full lg:block">
            <ArrowLarge />
          </span>
        </div>
      </FancyLink>

      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder="blur"
          alt={imgAlt}
          width={387}
          height={487}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default RecipeCard;

import Image from "next/image";
import FancyLink from "../utils/fancyLink";
import { Arrow } from "../utils/svg";

const CategoryCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  title,
  link,
  noTitle = false,
}) => {
  return (
    <div className="relative w-full h-full min-h-screen">
      <Image
        src={imgSrc}
        placeholder={imgPlaceholder}
        alt={imgAlt}
        objectFit="cover"
        layout="fill"
      />

      {!noTitle && (
        <div className="text-center absolute left-1/2 bottom-[40px] -translate-x-1/2 z-1 lg:flex lg:items-center lg:justify-between lg:w-full lg:px-10">
          <span className="font-nutmeg font-semibold text-white text-ctitleBig xl:text-h1">
            {title}
          </span>
          <FancyLink
            destination={link}
            className="w-full h-full absolute top-0 left-0 lg:flex lg:justify-center lg:items-center lg:w-[60px] lg:h-[45px] lg:border-2 lg:border-solid lg:border-white lg:rounded-[45px] lg:relative lg:top-auto lg:left-auto"
          >
            <div className="hidden lg:block lg:w-[32px]">
              <Arrow />
            </div>
          </FancyLink>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;

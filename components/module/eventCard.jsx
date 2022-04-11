import Image from "next/image";
import StrokeButton from "../utils/strokeButton";
import FancyLink from "../utils/fancyLink";

const EventCard = ({ imgSrc, imgAlt, type, date, title, link }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden xl:rounded-3xl">
      <div className="relative">
        <Image
          src={imgSrc}
          blurDataURL={imgSrc}
          alt={imgAlt}
          placeholder="blur"
          width={590}
          height={350}
          objectFit="cover"
          layout="responsive"
        />

        <div className="hidden items-center justify-between w-full absolute top-0 left-0 p-5 lg:flex">
          <div className="flex items-center w-fit h-8 bg-white text-morin-blue font-semibold rounded-full px-3">
            <span className="pt-1">{type}</span>
          </div>
          <StrokeButton className="pl-2 pr-2 mx-0" />
        </div>
      </div>

      <div className="flex flex-col text-morin-blue leading-none py-5 px-4 lg:px-7 xl:py-6 xl:px-8">
        <span className="font-semibold mb-1 lg:font-medium lg:mb-1.5">
          {date}
        </span>
        <span className="text-mtitle font-nutmeg font-bold lg:font-semibold xl:text-ctitle">
          {title}
        </span>
      </div>

      <FancyLink destination={link} className="w-full h-full absolute top-0 left-0 z-1" />
    </div>
  );
};

export default EventCard;

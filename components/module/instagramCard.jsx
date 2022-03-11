import Image from "next/image";
import React from "react";
import FancyLink from "../utils/fancyLink";

const InstagramCard = ({ imgSrc, imgPlaceholder, imgAlt, link }) => {
  return (
    <div className="relative min-w-[225px] min-h-[225px] rounded-[10px] overflow-hidden">
      <Image
        src={imgSrc}
        placeholder={imgPlaceholder}
        alt={imgAlt}
        width={285}
        height={285}
        layout="responsive"
      />
      <FancyLink blank destination={link} className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default InstagramCard;

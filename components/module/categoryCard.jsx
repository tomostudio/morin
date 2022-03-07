import Image from "next/image";
import React from "react";

const CategoryCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt
}) => {
  return (
    <div className="">
      <Image src={imgSrc} placeholder={imgPlaceholder} alt={imgAlt} objectFit="cover" layout="fill" />
    </div>
  );
};

export default CategoryCard;

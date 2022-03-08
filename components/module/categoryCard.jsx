import Image from "next/image";

const CategoryCard = ({ imgSrc, imgPlaceholder, imgAlt }) => {
  return (
    <div className="relative">
      <Image
        src={imgSrc}
        placeholder={imgPlaceholder}
        alt={imgAlt}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
};

export default CategoryCard;

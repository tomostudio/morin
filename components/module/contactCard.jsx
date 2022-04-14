import Image from "next/image";
import colors from "@/helpers/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import StrokeButton from "../micro-module/strokeButton";

const ImageGallery = ({ name, images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      // loop={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {images?.map((item, index) => (
        <SwiperSlide>
          <Image
            src={item}
            blurDataURL={item}
            placeholder="blur"
            alt={`${name} (${index})`}
            layout="responsive"
            width={750}
            height={480}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ContactCard = ({
  imageData,
  label,
  companyName,
  address,
  phone,
  email,
  maps,
}) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden lg:flex-row">
      <div className="contact-card-slider lg:w-3/5">
        <ImageGallery name={label} images={imageData} />
      </div>
      <div className="flex flex-col text-center text-morin-blue bg-morin-skyBlue pt-16 pb-7 px-20 lg:w-2/5 lg:text-left lg:justify-between lg:px-10 lg:pt-8 lg:pb-12">
        <span className="text-mtitle font-nutmeg font-bold mb-3 lg:mb-8 xl:text-h2">
          {label}
        </span>

        <div className="flex flex-col xl:max-w-xs">
          <span className="font-semibold mb-4 xl:mb-8">{companyName}</span>

          <span className="mb-4 xl:mb-8">{address}</span>

          {phone && <span>Phone : {phone}</span>}
          {email && <span className="mb-4 xl:mb-8">Email : {email}</span>}

          <StrokeButton
            className="mt-2 lg:ml-0 xl:mt-4"
            color={colors.morinBlue}
            destination={maps}
            targetBlank
          >
            View in Maps
          </StrokeButton>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

import Image from 'next/image';
import colors from '@/helpers/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import StrokeButton from '../micro-module/strokeButton';
import { PortableText } from '@portabletext/react';
import urlFor from '@/helpers/sanity/urlFor';

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
      {images?.map(
        (item, index) =>
          item.asset && (
            <SwiperSlide key={index}>
              <div className='relative w-full h-30rem max-md:h-56'>
                <Image
                  src={urlFor(item).auto('format').width(1000).url()}
                  blurDataURL={urlFor(item)
                    .auto('format')
                    .width(700)
                    .blur(25)
                    .url()}
                  placeholder='blur'
                  alt={`${name} (${index})`}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

const ContactCard = ({
  imageData,
  label,
  companyName,
  description,
  maps,
  lang,
}) => {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden lg:flex-row'>
      <div className='contact-card-slider lg:w-3/5'>
        <ImageGallery name={label} images={imageData} />
      </div>
      <div className='flex flex-col text-center text-morin-blue bg-morin-skyBlue pt-16 pb-7 px-20 lg:w-2/5 lg:text-left lg:justify-between lg:px-10 lg:pt-8 lg:pb-12'>
        <span className='text-mtitle font-nutmeg font-bold mb-3 lg:mb-8 xl:text-h2'>
          {label}
        </span>

        <div className='flex flex-col xl:max-w-xs'>
          <span className='font-semibold mb-4 xl:mb-8'>{companyName}</span>

          <PortableText
            value={description}
            components={{
              block: {
                normal: ({ children }) => <p>{children}</p>,
              },
            }}
          />

          {/* <span className="mb-4 xl:mb-8">{address}</span>

          {phone && <span>Phone : {phone}</span>}
          {email && <span className="mb-4 xl:mb-8">Email : {email}</span>} */}
        </div>
        <StrokeButton
          className='mt-2 lg:ml-0 xl:mt-4'
          color={colors.morinBlue}
          destination={maps}
          targetBlank
        >
          {lang === 'id' ? 'Lihat di Peta' : 'View in Maps'}
        </StrokeButton>
      </div>
    </div>
  );
};

export default ContactCard;

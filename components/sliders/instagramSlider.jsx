import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import InstagramCard from '../module/instagramCard';

const InstagramSlider = ({ data }) => {
  const instagramData = [
    {
      imgSrc: '/instagram/instagram-1.jpg',
      imgPlaceholder: '/instagram/instagram-1.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
    {
      imgSrc: '/instagram/instagram-2.jpg',
      imgPlaceholder: '/instagram/instagram-2.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
    {
      imgSrc: '/instagram/instagram-3.jpg',
      imgPlaceholder: '/instagram/instagram-3.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
    {
      imgSrc: '/instagram/instagram-1.jpg',
      imgPlaceholder: '/instagram/instagram-1.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
    {
      imgSrc: '/instagram/instagram-2.jpg',
      imgPlaceholder: '/instagram/instagram-2.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
    {
      imgSrc: '/instagram/instagram-3.jpg',
      imgPlaceholder: '/instagram/instagram-3.png',
      imgAlt: 'Caption of image here...',
      link: '/link-to-instagram-post',
    },
  ];

  return (
    <div>
      <Swiper
        // slidesPerView={4}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1400: { slidesPerView: 4 },
          1600: { slidesPerView: 6 },
        }}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        modules={[FreeMode]}
      >
        {instagramData.map((item, index) => (
          <SwiperSlide key={index}>
            <InstagramCard
              imgSrc={item.imgSrc}
              imgPlaceholder={item.imgPlaceholder}
              imgAlt={item.imgAlt}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramSlider;

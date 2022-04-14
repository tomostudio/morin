import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import HighlightCard from '../shared-module/highlightCard';

const HighlightSlider = ({ data }) => {
  return (
    <>
      <div className='w-full md:hidden'>
        {data?.slice(0, 3)?.map((item) => (
          <div className='mb-[10px] last:mb-0' key={item.title}>
            <HighlightCard
              imgSrc={item.imgSrc}
              imgPlaceholder={item.imgPlaceholder}
              imgAlt={item.imgAlt}
              date={item.date}
              title={item.title}
              link={item.link}
            />
          </div>
        ))}
      </div>
      <div className='hidden w-full md:block lg:mb-4 xl:mb-9 '>
        <Swiper
          breakpoints={{
            768: { slidesPerView: 2.4 },
            1024: { slidesPerView: 2.7 },
            1600: { slidesPerView: 3.4 },
          }}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode]}
          style={{ padding: '0 16px' }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={`${item.title}(${index})`}>
              <HighlightCard
                imgSrc={item.imgSrc}
                imgPlaceholder={item.imgPlaceholder}
                imgAlt={item.imgAlt}
                date={item.date}
                title={item.title}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HighlightSlider;

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import HighlightCard from '../shared-module/highlightCard'
import urlFor from '@/helpers/sanity/urlFor'

const HighlightSlider = ({ data }) => {
  return (
    <>
      <div className="w-full md:hidden">
        {data?.slice(0, 3).map((item) => (
          <div className="mb-[10px] last:mb-0" key={item.title}>
            <HighlightCard
              imgSrc={urlFor(item.thumbnail).url()}
              imgPlaceholder={urlFor(item.thumbnail).url()}
              imgAlt={item.thumbnail.alt}
              date={item.date}
              title={item.title}
              link={`/events/${item.slug.current}`}
            />
          </div>
        ))}
      </div>
      <div className="hidden w-full md:block lg:mb-4 xl:mb-9  ">
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
          {data?.slice(0, 3).map((item, index) => (
            <SwiperSlide key={`${item.title}(${index})`}>
              <HighlightCard
                imgSrc={urlFor(item.thumbnail).url()}
                imgPlaceholder={urlFor(item.thumbnail).url()}
                imgAlt={item.thumbnail.alt}
                date={item.date}
                title={item.title}
                link={`/events/${item.slug.current}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default HighlightSlider

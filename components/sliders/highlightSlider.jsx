import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import HighlightCard from '../shared-module/highlightCard'
import urlFor from '@/helpers/sanity/urlFor'
import dateParse from '../utils/dateParse'

const HighlightSlider = ({ data, lang }) => {
  return (
    <>
      <div className="w-full md:hidden">
        {data?.slice(0, 3).map((item) =>
          lang === 'id' ? (
            <div className="mb-[10px] last:mb-0" key={item.title_id}>
              <HighlightCard
                imgSrc={urlFor(item.thumbnail).url()}
                imgPlaceholder={urlFor(item.thumbnail).url()}
                imgAlt={item.thumbnail.alt}
                date={dateParse(item.date, lang)}
                title={item.title_id}
                link={`/events/${item.slug.current}`}
                lang={lang}
              />
            </div>
          ) : (
            <div className="mb-[10px] last:mb-0" key={item.title_en}>
              <HighlightCard
                imgSrc={urlFor(item.thumbnail).url()}
                imgPlaceholder={urlFor(item.thumbnail).url()}
                imgAlt={item.thumbnail.alt}
                date={dateParse(item.date, lang)}
                title={item.title_en}
                link={`/events/${item.slug.current}`}
                lang={lang}
              />
            </div>
          ),
        )}
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
          {data?.slice(0, 3).map((item, index) =>
            lang === 'id' ? (
              <SwiperSlide key={`${item.title_id}(${index})`}>
                <HighlightCard
                  imgSrc={urlFor(item.thumbnail).url()}
                  imgPlaceholder={urlFor(item.thumbnail).url()}
                  imgAlt={item.thumbnail.alt}
                  date={dateParse(item.date, lang)}
                  title={item.title_id}
                  link={`/events/${item.slug.current}`}
                  lang={lang}
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={`${item.title_en}(${index})`}>
                <HighlightCard
                  imgSrc={urlFor(item.thumbnail).url()}
                  imgPlaceholder={urlFor(item.thumbnail).url()}
                  imgAlt={item.thumbnail.alt}
                  date={dateParse(item.date, lang)}
                  title={item.title_en}
                  link={`/events/${item.slug.current}`}
                  lang={lang}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </>
  )
}

export default HighlightSlider

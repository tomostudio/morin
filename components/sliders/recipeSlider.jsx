import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import RecipeCard from '../shared-module/recipeCard'
import urlFor from '@/helpers/sanity/urlFor'

const RecipeSlider = ({ data, lang }) => {
  return (
    <Swiper
      breakpoints={{
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        600: { slidesPerView: 2.5, spaceBetween: 15 },
        800: { slidesPerView: 3, spaceBetween: 20 },
      }}
      freeMode={true}
      modules={[FreeMode]}
      style={{ padding: '20px 16px' }}
    >
      {data?.slice(0, 3).map((item) => (
        <SwiperSlide key={item.title_id}>
          {item.thumbnail.asset && (
            <RecipeCard
              imgSrc={urlFor(item.thumbnail).width(600).auto('format').url()}
              imgPlaceholder={urlFor(item.thumbnail)
                .width(300)
                .blur(50)
                .auto('format')
                .url()}
              imgAlt={item.thumbnail.alt}
              title={lang === 'id' ? item.title_id : item.title_en}
              link={`/recipes/${item.slug.current}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default RecipeSlider

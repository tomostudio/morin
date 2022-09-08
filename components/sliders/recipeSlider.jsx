import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import RecipeCard from '../shared-module/recipeCard';
import urlFor from '@/helpers/sanity/urlFor';
import { useDraggable } from 'react-use-draggable-scroll';

const RecipeSlider = ({ data, lang }) => {
  const sliderRef = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(sliderRef); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <div
        {...events}
        ref={sliderRef}
        className='flex px-4 space-x-4 lg:px-8 py-6 overflow-x-auto hidescrollbar'
      >
        {data
          ?.slice(0, 3)
          .map(
            (item, index) =>
              item.thumbnail.asset && (
                <RecipeCard
                  imgSrc={urlFor(item.thumbnail)
                    .width(600)
                    .auto('format')
                    .url()}
                  imgPlaceholder={urlFor(item.thumbnail)
                    .width(300)
                    .blur(50)
                    .auto('format')
                    .url()}
                  key={index}
                  imgAlt={item.thumbnail.alt}
                  title={lang === 'id' ? item.title_id : item.title_en}
                  link={`/recipes/${item.slug.current}`}
                  className={`w-1/3 min-w-[240px] md:min-w-[360px]`}
                />
              )
          )}
      </div>
    </>
  );
};

export default RecipeSlider;

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
        className=' flex py-6 overflow-x-auto hidescrollbar'
      >
        <div className='w-4 lg:w-8 flex-shrink-0' />
        <div className='space-x-4 flex flex-shrink-0 flex-grow'>
          {data
            ?.slice(0, 3)
            .map(
              (item, index) =>
                item.thumbnail.asset && (
                  <RecipeCard
                    imgSrc={urlFor(item.thumbnail)
                      .auto('format')
                      .url()}
                    imgPlaceholder={urlFor(item.thumbnail)
                      .width(200)
                      .blur(50)
                      .auto('format')
                      .url()}
                    key={index}
                    imgAlt={item.thumbnail.alt}
                    title={lang === 'id' ? item.title?.id : item.title?.en}
                    link={`/recipes/${item.slug.current}`}
                    color={item.titleColor}
                    className={`w-1/3 min-w-[240px] md:min-w-[360px]`}
                  />
                )
            )}
        </div>
        <div className='w-4 lg:w-8 h-auto flex-shrink-0' />
      </div>
    </>
  );
};

export default RecipeSlider;

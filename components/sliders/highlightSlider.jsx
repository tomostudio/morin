import React, { useRef } from 'react';
import HighlightCard from '../shared-module/highlightCard';
import urlFor from '@/helpers/sanity/urlFor';
import dateParse from '../utils/dateParse';
import { useDraggable } from 'react-use-draggable-scroll';

const HighlightSlider = ({ data, lang, button }) => {
  const sliderRef = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(sliderRef); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <div
        {...events}
        ref={sliderRef}
        className=' w-full lg:mb-4 xl:mb-9 overflow-scroll hidescrollbar flex max-w-screen-2xl py-4 mx-auto '
      >
        <div className='hidden md:block w-4 lg:w-8 flex-shrink-0' />
        <div className='flex flex-col justify-center items-center md:justify-start md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-5 flex-shrink-0 flex-grow'>
          {data?.slice(0, 3).map((item, index) => (
            <div
              key={
                lang === 'id'
                  ? `${item.title_id}(${index})`
                  : `${item.title_en}(${index})`
              }
              className='w-full md:w-1/3 min-w-[350px] max-w-xl md:max-w-none'
            >
              <HighlightCard
                imgSrc={urlFor(item.thumbnail).auto('format').width(400).url()}
                imgPlaceholder={urlFor(item.thumbnail)
                  .auto('format')
                  .width(200)
                  .blur(25)
                  .url()}
                imgAlt={item.thumbnail.alt}
                date={dateParse(item.date, lang)}
                title={lang === 'id' ? item.title_id : item.title_en}
                link={`/events/${item.slug.current}`}
                lang={lang}
                button={button}
              />
            </div>
          ))}
        </div>
        <div className='hidden md:block  w-4 lg:w-8 flex-shrink-0' />
      </div>
    </>
  );
};

export default HighlightSlider;

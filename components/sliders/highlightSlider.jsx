import React from 'react'
import HighlightCard from '../shared-module/highlightCard'
import urlFor from '@/helpers/sanity/urlFor'
import dateParse from '../utils/dateParse'
import ScrollContainer from 'react-indiana-drag-scroll'

const HighlightSlider = ({ data, lang, button }) => {
  return (
    <>
      <ScrollContainer
        vertical={false}
        className=" w-full lg:mb-4 xl:mb-9 overflow-scroll hidescrollbar flex flex-col md:flex-row justify-center items-center md:justify-start max-w-screen-2xl px-4 lg:px-8 py-4 mx-auto space-y-5 space-x-0 md:space-y-0 md:space-x-5"
      >
        {data?.slice(0, 3).map((item, index) =>
          lang === 'id' ? (
            <div
              key={`${item.title_id}(${index})`}
              className="w-full md:w-1/3 min-w-[350px] max-w-xl md:max-w-none"
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
                title={item.title_id}
                link={`/events/${item.slug.current}`}
                lang={lang}
                button={button}
              />
            </div>
          ) : (
            <div
              key={`${item.title_en}(${index})`}
              className="w-full md:w-1/3 min-w-[350px] max-w-xl md:max-w-none"
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
                title={item.title_en}
                link={`/events/${item.slug.current}`}
                lang={lang}
                button={button}
              />
            </div>
          ),
        )}
      </ScrollContainer>
    </>
  )
}

export default HighlightSlider

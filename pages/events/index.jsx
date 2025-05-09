import { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
import Layout from '@/components/module/layout'
import StrokeButton from '@/components/micro-module/strokeButton'
import EventCard from '@/components/shared-module/eventCard'
import colors from '@/helpers/colors'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import dateParse from '@/components/utils/dateParse'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import { Parallax } from 'react-scroll-parallax'

const Events = ({ eventPageAPI, eventAPI, seoAPI, footerAPI, translation }) => {
  const [seo] = seoAPI
  const [event] = eventPageAPI
  const [footer] = footerAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor(event.langColor)
    useEffectInit({ context: ctx })

    return () => {}
  }, [])

  let displayData = 6
  const dataIncrease = 6
  const [showButton, setShowButton] = useState(
    eventAPI.length <= displayData ? false : true,
  )
  const [dataEvent, setDataEvent] = useState(eventAPI.slice(0, displayData))

  const loadMore = () => {
    displayData += dataIncrease
    setDataEvent(eventAPI.slice(0, displayData))

    if (eventAPI.length <= displayData) setShowButton(false)
  }

  return (
    <Layout>
      <SEO
        title={ctx.language === 'id' ? 'Acara' : 'Events'}
        pagelink={router.pathname}
        inputSEO={event.seo?.id}
        defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        className="w-full bg-morin-skyBlue"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <div className="relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <Parallax
            translateY={['-100px', '0px']}
            className="relative w-full h-[110%]"
          >
            <Image
              src={urlFor(event.background).auto('format').width(1600).url()}
              blurDataURL={urlFor(event.background)
                .auto('format')
                .blur(25)
                .url()}
              placeholder="blur"
              alt={event.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </Parallax>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? event.title.id : event.title.en}
            </h1>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 my-5 md:my-10 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {dataEvent?.map((item, index) => (
              <div className="w-full" key={`${item.title.en}[${index}]`}>
                <EventCard
                  imgSrc={urlFor(item.thumbnail).auto('format').url()}
                  blur={urlFor(item.thumbnail)
                    .auto('format')
                    .width(600)
                    .blur(25)
                    .url()}
                  imgAlt={ctx.language === 'id' ? item.title.id : item.title.en}
                  type={
                    ctx.language === 'id'
                      ? item.eventCategory[0].title.id
                      : item.eventCategory[0].title.en
                  }
                  date={dateParse(item.date, ctx.language)}
                  title={ctx.language === 'id' ? item.title.id : item.title.en}
                  link={`/events/${item.slug.current}`}
                />
              </div>
            ))}
          </div>
          {showButton && (
            <div className="w-full mt-5 md:mt-10">
              <StrokeButton
                ariaLabel="button_event_show"
                arrow={false}
                color={colors.morinBlue}
                onClick={loadMore}
              >
                {ctx.language === 'id'
                  ? 'Menampilkan lebih banyak'
                  : 'Show More'}
              </StrokeButton>
            </div>
          )}
        </div>

        <Footer
          event={eventAPI.length > 0 ? true : false}
          lang={ctx.language}
          button={translation.menu_lang}
          faq={seo.advance_setting.hide_faq}
          mailchimp={footer.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const eventPageAPI = await client.fetch(`
  *[_type == "event"]
  `)
  const eventAPI = await client.fetch(`
  *[_type == "eventList"] {
    ...,
    eventCategory[]->,
  }
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `)
  const [translation] = translationAPI
  if (eventAPI.length > 0) {
    return {
      props: {
        eventPageAPI,
        eventAPI,
        seoAPI,
        footerAPI,
        translation,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

export default Events

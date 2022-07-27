import { useEffect } from 'react'
import Image from 'next/image'
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

const eventsData = [
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Morin in UPH',
    image: '/event/event-1.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Workshop',
    date: '24 Juli 2021',
    title: 'Cooking Workshop',
    image: '/event/event-2.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Factory Tour with SDN',
    image: '/event/event-3.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Morin in UPH',
    image: '/event/event-1.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Workshop',
    date: '24 Juli 2021',
    title: 'Cooking Workshop',
    image: '/event/event-2.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Factory Tour with SDN',
    image: '/event/event-3.jpg',
    link: '/events/event-id',
  },
]

const Events = ({ eventAPI, eventListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [event] = eventAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false })

    return () => {}
  }, [])

  return (
    <Layout>
      <SEO
        title={ctx.language === 'id' ? 'Acara' : 'Events'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? event.seo_id : event.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <div className="w-full bg-morin-skyBlue">
        <div className="relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              priority
              src={urlFor(event.background).url()}
              placeholder={urlFor(event.background).url()}
              alt={event.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? 'Acara terakhir' : 'Latest Events'}
            </h1>
          </div>
        </div>

        <div className="px-4 my-5 md:my-10 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              {eventListAPI?.map((item, index) => (
                <div className="w-full" key={`${item.title_en}[${index}]`}>
                  <EventCard
                    imgSrc={urlFor(item.thumbnail).url()}
                    imgAlt={
                      ctx.language === 'id' ? item.title_id : item.title_en
                    }
                    type={
                      ctx.language === 'id'
                        ? item.eventCategory[0].title_id
                        : item.eventCategory[0].title_en
                    }
                    date={dateParse(item.date, ctx.language)}
                    title={
                      ctx.language === 'id' ? item.title_id : item.title_en
                    }
                    link={`/events/${item.slug.current}`}
                  />
                </div>
              ))}
            </div>
            <div className="w-full mt-5 md:mt-10">
              <StrokeButton
                arrow={false}
                color={colors.morinBlue}
                onClick={() => console.log('load more')}
              >
                {ctx.language === 'id'
                  ? 'Menampilkan lebih banyak'
                  : 'Show More'}
              </StrokeButton>
            </div>
          </div>
        </div>

        <Footer lang={ctx.language} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const eventAPI = await client.fetch(`
  *[_type == "event"]
  `)
  const eventListAPI = await client.fetch(`
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
  return {
    props: {
      eventAPI,
      eventListAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Events

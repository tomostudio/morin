import Container from '@/components/module/container'
import Layout from '@/components/module/layout'
import Header from '@/components/module/header'
import Footer from '@/components/module/footer'
import Image from 'next/image'
import colors from '@/helpers/colors'
import HighlightCard from '@/components/shared-module/highlightCard'
import { useEffectInit } from '@/components/utils/preset'
import { useEffect } from 'react'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import { PortableText } from '@portabletext/react'
import urlFor from '@/helpers/sanity/urlFor'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import dateParse from '@/components/utils/dateParse'

const EventTag = ({ label }) => {
  return (
    <div className="flex items-center h-6 font-semibold leading-none border-2 border-solid border-morin-blue rounded-full px-4 mr-2 last:mr-0 md:h-8 md:mr-5">
      <span className="pt-0.5 md:pt-1">{label}</span>
    </div>
  )
}

const eventCategory = ['Group Event', 'Tour']

const highlightData = [
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Morin in UPH',
    title: 'Morin in UPH',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-2.jpg',
    imgPlaceholder: '/highlight/highlight-2.png',
    imgAlt: 'Cooking Workshop',
    title: 'Cooking Workshop',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
]

const EventDetail = ({ eventAPI, eventListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [event] = eventAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <Layout className="overflow-hidden pt-[86px] lg:pt-32">
      <Header hamburgerColor="bg-black" lang={router.locale} />
      <SEO
        title={router.locale == 'id' ? event.title_id : event.title_en}
        pagelink={router.pathname}
        inputSEO={router.locale === 'id' ? event.seo_id : event.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && router.locale === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <div className="text-morin-blue leading-tight">
        <div className="text-center mb-7 md:mb-10 lg:mb-12 xl:mb-16">
          <span className="block font-semibold mb-2.5">{dateParse(event.date, router.locale, true)}</span>
          <h1 className="font-nutmeg text-mtitleBig mx-auto mb-3 md:text-h2 md:max-w-md md:mb-4">
            {router.locale === 'id' ? event.title_id : event.title_en}
          </h1>
          {event.eventCategory?.length > 0 && (
            <div className="flex flex-wrap items-center justify-center">
              {event.eventCategory?.map((item) => (
                <EventTag
                  label={router.locale === 'id' ? item.title_id : item.title_en}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:max-w-screen-2xl lg:px-8 mb-8 lg:mb-14">
          <PortableText
            value={
              router.locale === 'id'
                ? event.description_id
                : event.description_en
            }
            components={{
              block: {
                normal: ({ children }) =>
                  children[0] === '' ? (
                    <br />
                  ) : (
                    <div className="max-w-screen-md mx-auto">
                      <div className="font-medium leading-relaxed">
                        <p className="mb-4 md:mb-5">{children}</p>
                      </div>
                    </div>
                  ),
                h1: ({ children }) => (
                  <div className="max-w-screen-md mx-auto">
                    <h2 className="text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16">
                      {children}
                    </h2>
                  </div>
                ),
                h2: ({ children }) => (
                  <div className="max-w-screen-md mx-auto">
                    <h2 className="text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16">
                      {children}
                    </h2>
                  </div>
                ),
                h3: ({ children }) => (
                  <div className="max-w-screen-md mx-auto">
                    <h2 className="text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16">
                      {children}
                    </h2>
                  </div>
                ),
                h4: ({ children }) => (
                  <div className="max-w-screen-md mx-auto">
                    <h2 className="text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16">
                      {children}
                    </h2>
                  </div>
                ),
                h5: ({ children }) => (
                  <div className="max-w-screen-md mx-auto">
                    <h2 className="text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16">
                      {children}
                    </h2>
                  </div>
                ),
              },
              types: {
                imageComponent: (props) =>
                  props.value.option ? (
                    <div className="relative w-full h-full lg:h-[700px] aspect-w-16 aspect-h-9 mx-auto mb-8 px-8 lg:rounded-2xl overflow-hidden md:mb-10 lg:mb-12">
                      <Image
                        src={urlFor(props.value.image).url()}
                        blurDataURL={urlFor(props.value.image).url()}
                        alt={props.value.image.alt}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  ) : (
                    <div className="max-w-screen-md mx-auto">
                      <div className="mb-8 md:mb-10 lg:px-24 lg:mb-12 xl:px-28">
                        <Image
                          src={urlFor(props.value.image).url()}
                          blurDataURL={urlFor(props.value.image).url()}
                          alt={props.value.image.alt}
                          placeholder="blur"
                          width={590}
                          height={400}
                          layout="responsive"
                        />
                      </div>
                    </div>
                  ),
              },
            }}
          />
        </div>
      </div>

      <div className="w-full flex flex-col bg-morin-skyBlue justify-center relative pb-0 rounded-t-[40px] py-10">
        <div className="mx-auto w-full flex flex-col px-4 lg:px-8 max-w-screen-2xl ">
          <div className="mb-7 md:mb-8 lg:mb-10">
            <h2 className="font-nutmeg font-normal text-mtitleSmall text-center text-morin-blue mb-7 lg:mb-12">
              {router.locale === 'id' ? 'Acara Lainnya' : 'Other Events'}
            </h2>

            <div className="flex flex-wrap mx-auto md:max-w-4xl">
              {eventListAPI?.slice(0, 2).map((item, index) => (
                <div
                  className="w-full mb-2 md:w-1/2 md:mb-0 md:px-2.5"
                  key={`${item.title_en}[${index}]`}
                >
                  <HighlightCard
                    imgSrc={urlFor(item.thumbnail).url()}
                    imgPlaceholder={urlFor(item.thumbnail).url()}
                    imgAlt={item.thumbnail.alt}
                    date={dateParse(item.date, router.locale)}
                    title={
                      router.locale === 'id' ? item.title_id : item.title_en
                    }
                    link={`/events/${item.slug.current}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer lang={router.locale} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const res = await client.fetch(`
        *[_type == "eventList"]
      `)

  const paths = []

  res.map((data) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          eventSlug: data.slug.current,
        },
        locale,
      })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const eventAPI = await client.fetch(
    `
      *[_type == "eventList" && slug.current == "${params.eventSlug}"] {
        ...,
        eventCategory[]->,
      } 
    `,
  )
  const eventListAPI = await client.fetch(`
  *[_type == "eventList"]
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

export default EventDetail

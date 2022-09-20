import { useEffect } from 'react'
import Container from '@/components/module/container'
import Layout from '@/components/module/layout'
import Header from '@/components/module/header'
import Footer from '@/components/module/footer'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { PortableText } from '@portabletext/react'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'

const GetMorin = ({
  getMorinAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [seo] = seoAPI
  const [getMorin] = getMorinAPI
  const [footer] = footerAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor('black')
    useEffectInit({ context: ctx })
  }, [])
  return (
    <Layout className="overflow-hidden pt-[86px] lg:pt-32">
      <SEO
        title={ctx.language === 'id' ? 'Dapatkan Morin!' : 'Get Morin!'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? getMorin.seo?.id : getMorin.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div initial="initial" animate="enter" exit="exit" variants={fade}>
        <Container className="mt-8 lg:mt-0">
          <div className="flex flex-col space-y-10 lg:space-y-20 mb-10 lg:mb-20 leading-tight">
            {getMorin.Shops?.map((item, id) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row lg:space-x-48 w-full"
              >
                <h2 className="text-ctitle md:text-mtitleBig m-0 lg:text-h2 text-center lg:text-left font-nutmeg text-morin-blue w-full lg:w-1/5 flex-shrink-0">
                  {ctx.language === 'id' ? item.title.id : item.title.en}
                </h2>
                <div className="w-full flex flex-col items-center lg:items-start mt-5 lg:mt-0 md:mt-8 md:space-y-8 space-y-5 lg:space-y-12 justify-start">
                  {id === 0 && !seo.advance_setting.hide_shop ? (
                    <FancyLink
                      blank
                      destination={getMorin.shop.link}
                      className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
                    >
                      <span className="block pt-1">{getMorin.shop.title}</span>
                    </FancyLink>
                  ) : (
                    <></>
                  )}
                  {item.contents?.map((data, idContent) => (
                    <div
                      key={idContent}
                      className="flex flex-col w-full justify-start"
                    >
                      <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                        {ctx.language === 'id' ? data.title.id : data.title.en}
                      </span>
                      {data.option === 'link' ? (
                        <div className="mt-4 lg:mt-10 md:mt-6 getmorin-list">
                          {data.links?.map((dataLink, idLink) => (
                            <FancyLink
                              key={idLink}
                              destination={dataLink.url ? dataLink.url : '#'}
                              className=" flex justify-center items-center rounded-2xl shadow-softer hover:shadow-normal hover:-translate-y-1 transition-all duration-300"
                            >
                              <div className="relative w-full h-full">
                                {dataLink.image?.asset && (
                                  <Image
                                    src={urlFor(dataLink.image)
                                      .auto('format')
                                      .url()}
                                    blurDataURL={urlFor(dataLink.image)
                                      .auto('format')
                                      .width(150)
                                      .blur(25)
                                      .url()}
                                    placeholder="blur"
                                    alt={dataLink.image.alt}
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                )}
                              </div>
                            </FancyLink>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-5 lg:mt-10 md:mt-6 grid grid-cols-2 gap-6">
                          {data.texts.map((dataText, idText) => (
                            <div
                              key={idText}
                              className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue"
                            >
                              <span className="font-bold">
                                {ctx.language === 'id'
                                  ? dataText.title.id
                                  : dataText.title.en}
                              </span>
                              <PortableText
                                value={dataText.description}
                                components={{
                                  block: {
                                    normal: ({ children }) => (
                                      <p className="leading-5 text-center lg:text-left">
                                        {children}
                                      </p>
                                    ),
                                  },
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
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
  const getMorinAPI = await client.fetch(`
  *[_type == "getMorin"]
  `)
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
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
  return {
    props: {
      getMorinAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default GetMorin

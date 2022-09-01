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

const GetMorin = ({ getMorinAPI, seoAPI, footerAPI }) => {
  const [seo] = seoAPI
  const [getMorin] = getMorinAPI
  const [footer] = footerAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])
  return (
    <Layout className="overflow-hidden pt-[86px] lg:pt-32">
      <SEO
        title={ctx.language === 'id' ? 'Dapatkan Morin!' : 'Get Morin!'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? getMorin.seo_id : getMorin.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div initial="initial" animate="enter" exit="exit" variants={fade}>
        <Container className="mt-8 lg:mt-0">
          <div className="flex flex-col leading-tight">
            <div className="flex flex-col lg:flex-row lg:space-x-48 w-full">
              <h2 className="text-ctitle md:text-mtitleBig m-0 lg:text-h2 text-center lg:text-left font-nutmeg text-morin-blue lg:w-72 w-full">
                {ctx.language === 'id'
                  ? getMorin.language.shop_online.id
                  : getMorin.language.shop_online.en}
              </h2>
              <div className="w-full flex flex-col items-center lg:items-start mt-5 lg:mt-0 md:mt-8 md:space-y-8 space-y-5 lg:space-y-12 justify-start">
                {!getMorin.shop.hide_shop && (
                  <FancyLink
                    blank
                    destination={getMorin.shop.link}
                    className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
                  >
                    <span className="block pt-1">{getMorin.shop.title}</span>
                  </FancyLink>
                )}
                <div className="flex flex-col w-full justify-start">
                  <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                    {ctx.language === 'id'
                      ? getMorin.language.marketplace.id
                      : getMorin.language.marketplace.en}
                  </span>
                  <div className="mt-4 lg:mt-10 md:mt-6 getmorin-list">
                    {getMorin.shopOnline.map((item, index) => (
                      <FancyLink
                        key={index}
                        destination="#"
                        className=" flex justify-center items-center rounded-2xl shadow-softer"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={urlFor(item.image)
                              .auto('format')
                              .width(175)
                              .url()}
                            blurDataURL={urlFor(item.image)
                              .auto('format')
                              .width(150)
                              .blur(25)
                              .url()}
                            placeholder="blur"
                            alt={item.image.alt}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </FancyLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-48 mt-10 mb-10 lg:mt-20 lg:mb-20 w-full">
              <h2 className="text-ctitle md:text-mtitleBig m-0 lg:text-h2 text-center lg:text-left font-nutmeg text-morin-blue lg:w-72 w-full">
                {ctx.language === 'id'
                  ? getMorin.language.shop_offline.id
                  : getMorin.language.shop_offline.en}
              </h2>
              <div className="w-full flex flex-col items-center lg:items-start mt-6 lg:mt-0 md:mt-8 md:space-y-8 space-y-6 lg:space-y-12 justify-start">
                <div className="flex flex-col w-full justify-start">
                  <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                    {ctx.language === 'id'
                      ? getMorin.language.distributor.id
                      : getMorin.language.distributor.en}
                  </span>
                  <div className="mt-4 lg:mt-10 md:mt-6 getmorin-list">
                    {getMorin.shopOffline.majorDistributors.map(
                      (item, index) => (
                        <FancyLink
                          key={index}
                          destination="#"
                          className=" flex justify-center items-center rounded-2xl shadow-softer"
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={urlFor(item.image)
                                .auto('format')
                                .width(175)
                                .url()}
                              blurDataURL={urlFor(item.image)
                                .auto('format')
                                .width(150)
                                .blur(25)
                                .url()}
                              placeholder="blur"
                              alt={item.image.alt}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        </FancyLink>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full justify-start">
                  <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                    {ctx.language === 'id'
                      ? getMorin.language.retail.id
                      : getMorin.language.retail.en}
                  </span>
                  <div className="mt-5 lg:mt-10 md:mt-6 grid grid-cols-2 gap-6">
                    {getMorin.shopOffline.retailers.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue"
                      >
                        <span className="font-bold">
                          {ctx.language === 'id'
                            ? item.title_id
                            : item.title_en}
                        </span>
                        <PortableText
                          value={item.description}
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
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer lang={ctx.language} button={seo.menu_lang} footer={footer} />
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const getMorinAPI = await client.fetch(`
  *[_type == "getMorin"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      getMorinAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default GetMorin

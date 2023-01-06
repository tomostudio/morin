import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import ProductCard from '@/components/shared-module/productCard'
import { useEffectInit } from '@/components/utils/preset'
import Image from 'next/legacy/image'
import { useEffect } from 'react'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import colors from '@/helpers/colors'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'

const ProductList = ({
  productTypeAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  productAPI,
  translation,
}) => {
  const [seo] = seoAPI
  const [productType] = productTypeAPI
  const [footer] = footerAPI
  const [product] = productAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor('black')
    useEffectInit({ context: ctx })
  }, [])

  return (
    <motion.div
      className="w-full bg-morin-skyBlue"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={fade}
    >
      <Layout className="overflow-hidden pt-[86px] lg:pt-32">
        {/* <Header /> */}
        <SEO
          title={
            ctx.language === 'id' ? productType.title.id : productType.title.en
          }
          pagelink={router.pathname}
          inputSEO={productType.seo?.id}
          defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />

        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-11"
        >
          <div className=" max-w-xs text-morin-blue text-center mb-12 mx-auto md:max-w-md relative">
            <div className="relative">
              <h1 className="relative w-fit text-h2 font-nutmeg mt-0 mb-1 mx-auto lg:px-8 lg:mb-3 xl:text-h1">
                {ctx.language === 'id'
                  ? productType.title.id
                  : productType.title.en}
              </h1>

              <p className="font-semibold max-w-[400px] mx-auto">
                {ctx.language === 'id'
                  ? productType.description.id
                  : productType.description.en}
              </p>
              <div className="w-full h-full absolute-center hidden lg:block ">
                {/* Decor Left */}
                <div className="w-[25vw] max-w-md aspect-1 absolute top-0 right-auto left-0 -translate-x-full -translate-y-1/3 select-none rotate-[8deg]">
                  {ctx.language === 'id' ? (
                    <Image
                      src={urlFor(productType.decor.decor1.image.id)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor1.image.id)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor1.image.id.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor.decor1.image.en)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor1.image.en)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor1.image.en.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  )}
                </div>
                {/* Decor Right */}
                <div className="w-[25vw] max-w-md aspect-1 absolute top-0 right-0 left-auto translate-x-full -translate-y-1/3 select-none  rotate-[-8deg]">
                  {ctx.language === 'id' ? (
                    <Image
                      src={urlFor(productType.decor.decor2.image.id)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor2.image.id)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor2.image.id.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor.decor2.image.en)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor2.image.en)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor2.image.en.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5">
            {productType.products?.map((item, index) => (
              <div
                className="w-1/2 px-1.5 mb-3 md:w-1/3 lg:px-2.5 lg:mb-5"
                key={`${item.title.en}${index}`}
              >
                <ProductCard
                  title={ctx.language === 'id' ? item.title.id : item.title.en}
                  bgColor={
                    item.backgroundColor
                      ? item.backgroundColor.hex
                      : colors.morinLightBlue
                  }
                  imgSrc={urlFor(item.thumbnail).auto('format').url()}
                  thumbnailFruit={item.thumbnailFruit}
                  imgPlaceholder={urlFor(item.thumbnail)
                    .width(500)
                    .auto('format')
                    .blur(10)
                    .url()}
                  imgAlt={item.thumbnail.alt}
                  link={`${productType.slug.current}/${item.slug.current}`}
                />
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
      </Layout>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "productType"]
      `)

  const paths = []

  res.map((data) => {
    return paths.push({
      params: {
        productType: data.slug.current,
      },
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productTypeAPI = await client.fetch(
    `
      *[_type == "productType" && slug.current == "${params.productType}" ] {
        ...,
        decor {
          decor1->,
          decor2->
        },
        products[]->,
        "product": *[_type=='productList' && references(^._id)]
      } 
    `,
  )
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const productAPI = await client.fetch(`
  *[_type == "product"]
  `)
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `)
  const [translation] = translationAPI

  return {
    props: {
      productTypeAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      productAPI,
      translation,
    },
  }
}

export default ProductList

import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import ProductCard from '@/components/shared-module/productCard'
import { useEffectInit } from '@/components/utils/preset'
import Image from 'next/image'
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
    ctx.setLangColor(product.langColor)
    useEffectInit({ context: ctx, mobileDark: true })
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
            ctx.language === 'id' ? productType.title_id : productType.title_en
          }
          pagelink={router.pathname}
          inputSEO={
            ctx.language === 'id' ? productType.seo_id : productType.seo_en
          }
          defaultSEO={
            typeof seo !== 'undefined' && ctx.language === 'id'
              ? seo.seo_id
              : seo.seo_en
          }
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />

        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-11"
        >
          <div className=" max-w-xs text-morin-blue text-center mb-12 mx-auto md:max-w-md">
            <h1 className="relative w-fit text-ctitle font-nutmeg mt-0 mb-1 mx-auto md:text-mtitleBig lg:text-h2 lg:px-8 lg:mb-3 xl:text-h1">
              {ctx.language === 'id'
                ? productType.title_id
                : productType.title_en}
              <div className="w-full h-full absolute-center hidden lg:block ">
                {/* Decor Left */}
                <div className="w-full h-96 absolute top-0 -left-10 -translate-x-full -translate-y-1/3 select-none rotate-[8deg]">
                  {ctx.language === 'id' ? (
                    <Image
                      src={urlFor(productType.decor.decor1.image_id)
                        .auto('format')
                        .width(400)
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor1.image_id)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor1.image_id.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor.decor1.image_en)
                        .auto('format')
                        .width(400)
                        .height(385)
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor1.image_en)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor1.image_en.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  )}
                </div>
                {/* Decor Right */}
                <div className="w-full h-96 absolute top-0 left-auto -right-10 translate-x-full -translate-y-1/3 select-none  rotate-[-8deg]">
                  {ctx.language === 'id' ? (
                    <Image
                      src={urlFor(productType.decor.decor2.image_id)
                        .auto('format')
                        .width(500)
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor2.image_id)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor2.image_id.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor.decor2.image_en)
                        .auto('format')
                        .width(500)
                        .url()}
                      blurDataURL={urlFor(productType.decor.decor2.image_en)
                        .auto('format')
                        .width(300)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={productType.decor.decor2.image_en.alt}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  )}
                </div>
              </div>
            </h1>

            <p className="font-semibold max-w-[400px] mx-auto">
              {ctx.language === 'id'
                ? productType.description_id
                : productType.description_en}
            </p>
          </div>

          <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5">
            {productType.product?.map((item, index) => (
              <div
                className="w-1/2 px-1.5 mb-3 md:w-1/3 lg:px-2.5 lg:mb-5"
                key={`${item.title_en}${index}`}
              >
                <ProductCard
                  title={ctx.language === 'id' ? item.title_id : item.title_en}
                  bgColor={
                    item.backgroundColor
                      ? item.backgroundColor.hex
                      : colors.morinLightBlue
                  }
                  imgSrc={urlFor(item.thumbnail)
                    .auto('format')
                    .width(800)
                    .url()}
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
          lang={ctx.language}
          button={translation.menu_lang}
          faq={seo.hide_faq}
          mailchimp={seo.mailchimpID}
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
      *[_type == "productType" && slug.current == "${params.productType}"] {
        ...,
        decor {
          decor1->,
          decor2->
        },
        "product": *[_type=='productList' && references(^._id)]
      } 
    `,
  )
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
      seoAPI,
      footerAPI,
      productAPI,
      translation,
    },
  }
}

export default ProductList

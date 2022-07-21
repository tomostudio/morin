import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
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

const ProductList = ({ productTypeAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [productType] = productTypeAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <div className="w-full bg-morin-skyBlue">
      <Layout className="overflow-hidden pt-[86px] lg:pt-32">
        {/* <Header /> */}
        <SEO
          title={
            router.locale === 'id' ? productType.title_id : productType.title_en
          }
          pagelink={router.pathname}
          inputSEO={
            router.locale === 'id' ? productType.seo_id : productType.seo_en
          }
          defaultSEO={
            typeof seo !== 'undefined' && router.locale === 'id'
              ? seo.seo_id
              : seo.seo_en
          }
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />

        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-11"
        >
          <div className="max-w-xs text-morin-blue text-center mb-12 mx-auto md:max-w-md">
            <h1 className="relative w-fit text-ctitle font-nutmeg mt-0 mb-1 mx-auto md:text-mtitleBig lg:text-h2 lg:px-8 lg:mb-3 xl:text-h1">
              {router.locale === 'id'
                ? productType.title_id
                : productType.title_en}
              <div className="w-full h-full absolute-center hidden lg:block">
                <div className="w-fit absolute top-0 left-0 -translate-x-full -translate-y-1/3 select-none">
                  {router.locale === 'id' ? (
                    <Image
                      src={urlFor(productType.decor_id.decor1.image).url()}
                      placeholder={urlFor(
                        productType.decor_id.decor1.image,
                      ).url()}
                      alt={productType.decor_id.decor1.image.alt}
                      width={385}
                      height={385}
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor_en.decor1.image).url()}
                      placeholder={urlFor(
                        productType.decor_en.decor1.image,
                      ).url()}
                      alt={productType.decor_en.decor1.image.alt}
                      width={385}
                      height={385}
                    />
                  )}
                </div>
                <div className="w-fit absolute top-0 left-0 translate-x-[100%] select-none">
                  {router.locale === 'id' ? (
                    <Image
                      src={urlFor(productType.decor_id.decor2.image).url()}
                      placeholder={urlFor(
                        productType.decor_id.decor2.image,
                      ).url()}
                      alt={productType.decor_id.decor2.image.alt}
                      width={420}
                      height={120}
                    />
                  ) : (
                    <Image
                      src={urlFor(productType.decor_en.decor2.image).url()}
                      placeholder={urlFor(
                        productType.decor_en.decor2.image,
                      ).url()}
                      alt={productType.decor_en.decor2.image.alt}
                      width={420}
                      height={120}
                    />
                  )}
                </div>
              </div>
            </h1>

            <p className="font-semibold max-w-[400px] mx-auto">
              {router.locale === 'id'
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
                {console.log(item.thumbnailFruit)}
                <ProductCard
                  title={router.locale === "id" ? item.title_id : item.title_en}
                  bgColor={item.backgroundColor ? item.backgroundColor.hex : colors.morinLightBlue}
                  imgSrc={urlFor(item.thumbnail).url()}
                  thumbnailFruit={item.thumbnailFruit}
                  imgPlaceholder={urlFor(item.thumbnail).url()}
                  imgAlt={item.thumbnail.alt}
                  link={`${productType.slug.current}/${item.slug.current}`}
                />
              </div>
            ))}
          </div>
        </Container>

        <Footer lang={router.locale} />
      </Layout>
    </div>
  )
}

export async function getStaticPaths({ locales }) {
  const res = await client.fetch(`
        *[_type == "productType"]
      `)

  const paths = []

  res.map((data) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          productType: data.slug.current,
        },
        locale,
      })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productTypeAPI = await client.fetch(
    `
      *[_type == "productType" && slug.current == "${params.productType}"] {
        ...,
        decor_en {
          decor1->,
          decor2->
        },
        decor_id {
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

  return {
    props: {
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default ProductList

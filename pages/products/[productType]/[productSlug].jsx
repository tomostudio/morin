import CategoryCard from '@/components/module/categoryCard'
import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
import Layout from '@/components/module/layout'
import FancyLink from '@/components/utils/fancyLink'
import MorinTabs from '@/components/micro-module/morinTabs'
import RecipeSlider from '@/components/sliders/recipeSlider'
import { SunRay } from '@/components/utils/svg'
import Image from 'next/image'
import ProductCard from '@/components/shared-module/productCard'
import StrokeButton from '@/components/micro-module/strokeButton'
import colors from '@/helpers/colors'
import { useEffectInit } from '@/components/utils/preset'
import { useEffect } from 'react'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'

const tabData = [
  {
    id: 'tab-1',
    title: '17gr',
    value: '17gr',
    ariaText: '17gr',
  },
  {
    id: 'tab-2',
    title: '170gr',
    value: '170gr',
    ariaText: '170gr',
  },
  {
    id: 'tab-3',
    title: '330gr',
    value: '330gr',
    ariaText: '330gr',
  },
  {
    id: 'tab-4',
    title: '590gr',
    value: '590gr',
    ariaText: '590gr',
  },
]

const recipeSliderData = [
  {
    imgSrc: '/recipe/recipe-1.jpg',
    imgPlaceholder: '/recipe/recipe-1.png',
    imgAlt: 'Mixed Berry Jam Tartlets',
    title: 'Mixed Berry Jam Tartlets',
    link: '/recipe/recipe-id',
  },
  {
    imgSrc: '/recipe/recipe-2.jpg',
    imgPlaceholder: '/recipe/recipe-2.png',
    imgAlt: 'Strawberry Trifle',
    title: 'Strawberry Trifle',
    link: '/recipe/recipe-id',
  },
  {
    imgSrc: '/recipe/recipe-3.jpg',
    imgPlaceholder: '/recipe/recipe-3.png',
    imgAlt: 'Chocolate Fudge Cupcakes',
    title: 'Chocolate Fudge Cupcakes',
    link: '/recipe/recipe-id',
  },
]

const moreProductData = [
  {
    title: 'Blueberry Jam',
    bgColor: '#ECE3FF',
    imgSrc: '/product/blueberry.png',
    imgBg: '/product/blueberry-bg.png',
    imgPlaceholder: '/product/blueberry.png',
    imgAlt: 'Blueberry Jam',
    link: '/product/product-id',
  },
  {
    title: 'Strawberry Jam',
    bgColor: '#FFE6E5',
    imgSrc: '/product/strawberry.png',
    imgBg: '/product/strawberry-bg.png',
    imgPlaceholder: '/product/strawberry.png',
    imgAlt: 'Strawberry Jam',
    link: '/product/product-id',
  },
  {
    title: 'Pineapple Jam',
    bgColor: '#FFF7B0',
    imgSrc: '/product/pineapple.png',
    imgBg: '/product/pineapple-bg.png',
    imgPlaceholder: '/product/pineapple.png',
    imgAlt: 'Pineapple Jam',
    link: '/product/product-id',
  },
  {
    title: 'Raspberry Jam',
    bgColor: '#FFDFD9',
    imgSrc: '/product/raspberry.png',
    imgBg: '/product/raspberry-bg.png',
    imgPlaceholder: '/product/raspberry.png',
    imgAlt: 'Raspberry Jam',
    link: '/product/product-id',
  },
]

const ProductDetail = ({ productAPI, productListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [product] = productAPI
  const router = useRouter()

  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <Layout className="overflow-hidden">
      {/* <Header hamburgerColor='bg-black' /> */}
      <SEO
        title={router.locale === 'id' ? product.title_id : product.title_en}
        pagelink={router.pathname}
        inputSEO={router.locale === 'id' ? product.seo_id : product.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && router.locale === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <div className="w-full">
        <div
          className="relative w-full h-[450px] lg:h-[500px] xl:h-[700px]"
          style={{
            backgroundColor: product.backgroundColor
              ? product.backgroundColor.hex
              : colors.morinLightBlue,
          }}
        >
          <div className="absolute w-full h-full translate-y-[50px] overflow-hidden md:translate-y-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-top-1/2 md:translate-y-0">
              <SunRay className="w-[750px] h-[750px] animate-spin-slow md:w-[1455px] md:h-[1455px] xl:w-[2000px] xl:h-[2000px]" />
            </div>
            <div className="w-full h-full max-w-sm absolute-center xl:max-w-screen-2xl">
              <div
                className={`w-[75px] absolute top-20 -left-5 xl:w-auto xl:top-8 xl:left-80`}
              >
                <Image
                  src={urlFor(product.thumbnailFruit.fruit1).url()}
                  blurDataURL={urlFor(product.thumbnailFruit.fruit1).url()}
                  placeholder="blur"
                  alt={product.thumbnailFruit.fruit1.alt}
                  width={150}
                  height={150}
                />
              </div>
              <div
                className={`w-[75px] absolute top-28 right-2 xl:w-auto xl:top-20 xl:right-[415px]`}
              >
                <Image
                  src={urlFor(product.thumbnailFruit.fruit2).url()}
                  blurDataURL={urlFor(product.thumbnailFruit.fruit2).url()}
                  placeholder="blur"
                  alt={product.thumbnailFruit.fruit2.alt}
                  width={150}
                  height={150}
                />
              </div>
              {product.thumbnailFruit.fruit3.asset && (
                <div
                  className={`w-[90px] absolute bottom-14 left-2 xl:w-auto xl:bottom-auto xl:top-16 xl:left-auto xl:right-14`}
                >
                  <Image
                    src={urlFor(product.thumbnailFruit.fruit3).url()}
                    blurDataURL={urlFor(product.thumbnailFruit.fruit3).url()}
                    placeholder="blur"
                    alt={product.thumbnailFruit.fruit3.alt}
                    width={190}
                    height={190}
                  />
                </div>
              )}
              <div
                className={`w-auto hidden absolute top-1/2 -left-4 -translate-y-1/2 xl:block 2xl:left-0`}
              >
                <Image
                  src={urlFor(product.thumbnailFruit.fruit1).url()}
                  blurDataURL={urlFor(product.thumbnailFruit.fruit1).url()}
                  placeholder="blur"
                  alt={product.thumbnailFruit.fruit1.alt}
                  width={210}
                  height={210}
                />
              </div>
              <div
                className={`w-10 absolute top-1/2 left-20 xl:w-auto xl:left-auto xl:right-[400px]`}
              >
                <Image
                  src={urlFor(product.thumbnailFruit.fruit2).url()}
                  blurDataURL={urlFor(product.thumbnailFruit.fruit2).url()}
                  placeholder="blur"
                  alt={product.thumbnailFruit.fruit2.alt}
                  width={80}
                  height={80}
                />
              </div>
              {product.thumbnailFruit.fruit3.asset && (
                <div
                  className={`w-[150px] absolute bottom-20 -right-12 xl:w-auto`}
                >
                  <Image
                    src={urlFor(product.thumbnailFruit.fruit3).url()}
                    blurDataURL={urlFor(product.thumbnailFruit.fruit3).url()}
                    placeholder="blur"
                    alt={product.thumbnailFruit.fruit3.alt}
                    width={335}
                    height={335}
                  />
                </div>
              )}
              <div
                className={`w-auto hidden absolute -bottom-2 left-60 xl:block`}
              >
                <Image
                  src={urlFor(product.thumbnailFruit.fruit1).url()}
                  blurDataURL={urlFor(product.thumbnailFruit.fruit1).url()}
                  placeholder="blur"
                  alt={product.thumbnailFruit.fruit1.alt}
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>

          <Container className="z-1 pt-[86px] lg:pt-36 xl:pt-56">
            <div className="text-center text-morin-red">
              <span className="font-semibold tracking-widest mb-1.5 md:mb-2.5 xl:mb-4 uppercase">
                MORIN{' '}
                {router.locale === 'id'
                  ? product.type.title_id
                  : product.type.title_en}
              </span>
              <h1 className="font-nutmeg text-ctitle leading-none px-4 mb-0 md:text-h2 xl:text-h1">
                {router.locale === 'id' ? product.title_id : product.title_en}
              </h1>
            </div>
            <div className="flex flex-wrap justify-center w-full h-80 px-12 translate-y-12 xl:translate-y-24">
              <div className="relative w-full h-full max-w-[250px] mx-auto xl:max-w-[370px]">
                <Image
                  src={urlFor(product.thumbnail).url()}
                  blurDataURL={urlFor(product.thumbnail).url()}
                  placeholder="blur"
                  alt={product.thumbnail.alt}
                  width={370}
                  height={455}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <div className="hidden max-w-screen-2xl w-full h-full absolute bottom-0 left-1/2 -translate-x-1/2  xl:block">
                <div className="absolute bottom-0 left-52 2xl:left-64">
                  {router.locale === 'id' ? (
                    <Image
                      src={urlFor(product.decor_id.decor1.image).url()}
                      placeholder={urlFor(product.decor_id.decor1.image).url()}
                      alt={product.decor_id.decor1.image.alt}
                      width={320}
                      height={140}
                    />
                  ) : (
                    <Image
                      src={urlFor(product.decor_en.decor1.image).url()}
                      placeholder={urlFor(product.decor_en.decor1.image).url()}
                      alt={product.decor_en.decor1.image.alt}
                      width={320}
                      height={140}
                    />
                  )}
                </div>
                <div className="absolute bottom-0 right-52 2xl:right-64">
                  {router.locale === 'id' ? (
                    <Image
                      src={urlFor(product.decor_id.decor2.image).url()}
                      placeholder={urlFor(product.decor_id.decor2.image).url()}
                      alt={product.decor_id.decor2.image.alt}
                      width={325}
                      height={170}
                    />
                  ) : (
                    <Image
                      src={urlFor(product.decor_en.decor2.image).url()}
                      placeholder={urlFor(product.decor_en.decor2.image).url()}
                      alt={product.decor_en.decor2.image.alt}
                      width={325}
                      height={170}
                    />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="relative pt-20 pb-10 md:pt-28 md:pb-14 xl:pt-56 xl:pb-16">
          <div className="product-detail-curve" />
          <MorinTabs
            tabData={product.listWeight}
            onChange={(e) => console.log('tab', e)}
            className="mx-auto mb-6 md:mb-8"
          />
          <h2 className="max-w-screen-lg font-nutmeg text-mtitle text-center text-morin-red leading-tight mb-8 px-4 mx-auto md:text-mtitleBig xl:text-h2 md:px-8 lg:mb-10 xl:mb-14">
            {router.locale === 'id'
              ? product.description_id
              : product.description_en}
          </h2>
          <FancyLink
            blank
            destination="#"
            className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal mx-auto px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
          >
            <span className="block pt-1">
              {router.locale === 'id'
                ? 'Dapatkan Produk Ini'
                : 'Get This Product'}
            </span>
          </FancyLink>
        </div>

        {product.recipes?.length > 0 && (
          <div className="max-w-screen-2xl mx-auto">
            <div className="relative bg-morin-peach rounded-2xl overflow-hidden py-8 px-8 md:px-0 xl:rounded-[40px] xl:pt-11 xl:pb-14 xl:px-4 2xl:px-6">
              <h2 className="font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-6 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8">
                {router.locale === 'id'
                  ? 'Hal-hal yang dapat Anda buat'
                  : 'Things you can make'}
              </h2>
              <div className="w-[calc(100%+64px)] -mx-8 md:w-full md:mx-0">
                <RecipeSlider
                  data={product.recipes}
                  onClick={(url) => handleImageGallery(url)}
                />
              </div>
              <div className="hidden w-fit mt-7 mx-auto md:block xl:mt-8">
                <StrokeButton destination="/recipes" color={colors.morinRed}>
                  {router.locale === 'id'
                    ? 'Lihat Semua Resep'
                    : 'See All Recipes'}
                </StrokeButton>
              </div>
            </div>
          </div>
        )}

        {productListAPI?.length > 0 && (
          <div className="max-w-screen-2xl mx-auto">
            <div className="py-8 px-4 lg:px-8 xl:pt-11 xl:pb-14 2xl:px-0">
              <h2 className="font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-7 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8">
                {router.locale === 'id' ? 'Produk Sejenis' : 'Similar Products'}
              </h2>

              <div className="flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5">
                {product.similar.option
                  ? productListAPI?.slice(0, 3).map((item, index) => (
                      <div
                        className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                        key={`${item.title_en}${index}`}
                      >
                        <ProductCard
                          title={
                            router.locale === 'id'
                              ? item.title_id
                              : item.title_en
                          }
                          bgColor={item.backgroundColor ? item.backgroundColor.hex : colors.morinLightBlue}
                          imgSrc={urlFor(item.thumbnail).url()}
                          imgBg={'/product/strawberry-bg.png'}
                          imgPlaceholder={urlFor(item.thumbnail).url()}
                          imgAlt={item.thumbnail.alt}
                          link={`${product.type.slug.current}/${item.slug.current}`}
                          small
                        />
                      </div>
                    ))
                  : product.similar.manual?.map((item, index) => (
                      <div
                        className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                        key={`${item.title_en}${index}`}
                      >
                        <ProductCard
                          title={
                            router.locale === 'id'
                              ? item.title_id
                              : item.title_en
                          }
                          bgColor={item.backgroundColor ? item.backgroundColor.hex : colors.morinLightBlue}
                          imgSrc={urlFor(item.thumbnail).url()}
                          imgBg={'/product/strawberry-bg.png'}
                          imgPlaceholder={urlFor(item.thumbnail).url()}
                          imgAlt={item.thumbnail.alt}
                          link={`${product.type.slug.current}/${item.slug.current}`}
                          small
                        />
                      </div>
                    ))}
              </div>

              <StrokeButton
                color={colors.morinRed}
                destination="/products"
                className="md:hidden"
              >
                {router.locale === 'id'
                  ? 'Lihat Semua Produk'
                  : 'See All Products'}
              </StrokeButton>
            </div>
          </div>
        )}
      </div>

      <Footer lang={router.locale} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const res = await client.fetch(`
        *[_type == "productList"] {
          ...,
          type->,
        }
      `)

  const paths = []

  res.map((data) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          productSlug: data.slug.current,
          productType: data.type.slug.current,
        },
        locale,
      })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productAPI = await client.fetch(
    `
      *[_type == "productList" && slug.current == "${params.productSlug}"] {
        ...,
        type->,
        decor_en {
          decor1->,
          decor2->
        },
        decor_id {
          decor1->,
          decor2->
        },
        recipes[]->,
        similar {
          ...,
          manual[]->
        }
      }
    `,
  )
  const productListAPI = await client.fetch(`
  *[_type == "productList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

  return {
    props: {
      productAPI,
      productListAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default ProductDetail

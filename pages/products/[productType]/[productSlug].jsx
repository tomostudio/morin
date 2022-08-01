import CategoryCard from '@/components/module/categoryCard'
import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
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
import { useEffect, useState } from 'react'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'

const ProductDetail = ({ productAPI, productListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [product] = productAPI
  const router = useRouter()
  const [productCurrent, setProductCurrent] = useState(
    product.listWeight.find((data) => data.defaultWeight === true).title,
  )

  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <Layout className="overflow-hidden">
      {/* <Header hamburgerColor='bg-black' /> */}
      <SEO
        title={ctx.language === 'id' ? product.title_id : product.title_en}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? product.seo_id : product.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        className="w-full "
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <div className="w-full">
          {/* Initial Cover */}
          <div className="relative w-full h-screen min-h-[750px] z-0 flex flex-col justify-between">
            <div
              className="h-full w-full absolute z-0"
              style={{
                backgroundColor: product.backgroundColor
                  ? product.backgroundColor.hex
                  : colors.morinLightBlue,
              }}
            >
              {/* Background Elements */}
              <div className="absolute w-full h-3/4 translate-y-[50px] overflow-hidden md:translate-y-0 z-1">
                <Parallax
                  translateY={['-300px', '300px']}
                  className="w-full h-full absolute top-0 left-0"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[50%] md:translate-y-[-30%] w-[100vw] max-w-[1500px] h-auto aspect-[1/1] z-1">
                    <Image
                      src={`/RAY.svg`}
                      objectFit="contain"
                      layout="fill"
                      className="animate-spin-slow "
                    />
                  </div>
                </Parallax>
                <div
                  className={`w-full h-full max-w-sm absolute-center xl:max-w-screen-2xl z-2 product-elements layout layout-4 ${product.thumbnailFruit.layout}`}
                >
                  <Parallax
                    translateY={['-100px', '100px']}
                    className="w-full h-full absolute top-0 left-0"
                  >
                    {/* Fruit 1 */}
                    {product.thumbnailFruit.fruit1.asset && (
                      <div className={`fruits fruit1`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit1)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit1)
                            .width(200)
                            .auto('format')
                            .blur(50)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit1.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    {/* Fruit 2 */}
                    {product.thumbnailFruit.fruit2.asset && (
                      <div className={`fruits fruit2`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit2.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    {/* Fruit 3 */}
                    {product.thumbnailFruit.fruit3.asset && (
                      <div className={`fruits fruit3`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit3)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit3)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit3.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                  </Parallax>
                  <Parallax
                    translateY={['-150px', '200px']}
                    className="w-full h-full absolute top-0 left-0"
                  >
                    {/* Fruit 4 */}
                    {product.thumbnailFruit.fruit1.asset && (
                      <div className={`fruits fruit4`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit1)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit1)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit1.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    {/* Fruit 5 */}
                    {product.thumbnailFruit.fruit2.asset && (
                      <div className={`fruits fruit5`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit2.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    {/* Fruit 6 */}
                    {product.thumbnailFruit.fruit3.asset && (
                      <div className={`fruits fruit6`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit3)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit3)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit3.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                  </Parallax>
                  <Parallax
                    translateY={['-150px', '300px']}
                    className="w-full h-full absolute top-0 left-0"
                  >
                    {/* Fruit 7 */}
                    {product.thumbnailFruit.fruit1.asset && (
                      <div className={`fruits fruit7`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit1)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit1)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit1.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    {/* Fruit 8 */}
                    {product.thumbnailFruit.fruit2.asset && (
                      <div className={`fruits fruit8`}>
                        <Image
                          src={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(500)
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit2)
                            .auto('format')
                            .width(250)
                            .blur(25)
                            .url()}
                          placeholder="blur"
                          alt={product.thumbnailFruit.fruit2.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                  </Parallax>
                </div>
              </div>
              {/* Solid Cover */}
              <div className="absolute w-full h-1/4 bg-white bottom-0 z-1">
                <div className="product-detail-curve top-0 translate-y-[-100%] translate-x-[-50%]" />
              </div>
            </div>
            {/* Title Text */}
            <div
              className={`text-center z-2 lg:pt-36 xl:pt-56 justify-between relative`}
              style={{
                color: product.textColor ? product.textColor.hex : '#175BA7',
              }}
            >
              <span className="font-semibold tracking-widest mb-1.5 md:mb-2.5 xl:mb-4 uppercase text-inherit">
                MORIN{' '}
                {ctx.language === 'id'
                  ? product.type.title_id
                  : product.type.title_en}
              </span>
              <h1 className="font-nutmeg text-ctitle leading-none px-4 mb-0 md:text-h2 xl:text-h1 text-inherit">
                {ctx.language === 'id' ? product.title_id : product.title_en}
              </h1>
            </div>
            {/* Product */}
            <div className="flex flex-wrap justify-center items-end w-full px-12 relative z-2 bottom-0">
              <div className="w-80vw md:w-[35vw] min-w-[250px] aspect-[1/1] h-96 z-2 relative border border-solid border-black">
                {product.listWeight.map((data, id) => (
                  <div
                    className={`${
                      productCurrent === data.title
                        ? 'absolute fade-in top-0'
                        : 'opacity-0 relative'
                    }  z-2 w-full h-full`}
                    key={id}
                  >
                    <Image
                      src={urlFor(data.image).auto('format').width(800).url()}
                      blurDataURL={urlFor(data.image)
                        .auto('format')
                        .width(600)
                        .blur(25)
                        .url()}
                      placeholder="blur"
                      alt={data.image.alt}
                      objectFit="contain"
                      objectPosition={'bottom center'}
                      layout="fill"
                    />
                  </div>
                ))}
              </div>
              {/* Information & Curve */}
              <div className="absolute w-full h-[25vh] min-h-[250px]  z-0">
                <div className="hidden max-w-screen-2xl w-full h-full absolute bottom-0 left-1/2 -translate-x-1/2  xl:block ">
                  <div className="absolute bottom-[10%] left-12 2xl:right-[50%] 2xl:left-auto 2xl:translate-x-[-50%] w-[30%] h-[80%] border border-solid border-black ">
                    {ctx.language === 'id'
                      ? product.decor_id && (
                          <Image
                            src={urlFor(product.decor_id.decor1.image).url()}
                            blurDataURL={urlFor(
                              product.decor_id.decor1.image,
                            ).url()}
                            placeholder="blur"
                            alt={product.decor_id.decor1.image.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )
                      : product.decor_en && (
                          <Image
                            src={urlFor(product.decor_en.decor1.image).url()}
                            blurDataURL={urlFor(product.decor_en.decor1.image)
                              .auto('format')
                              .url()}
                            placeholder="blur"
                            alt={product.decor_en.decor1.image.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )}
                  </div>
                  <div className="absolute bottom-[10%] right-12 2xl:left-[50%] 2xl:right-auto 2xl:translate-x-[50%] w-[30%] h-[80%] border border-solid border-black">
                    {ctx.language === 'id'
                      ? product.decor_id && (
                          <Image
                            src={urlFor(product.decor_id.decor2.image).url()}
                            blurDataURL={urlFor(product.decor_id.decor2.image)
                              .auto('format')
                              .url()}
                            placeholder="blur"
                            alt={product.decor_id.decor2.image.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )
                      : product.decor_en && (
                          <Image
                            src={urlFor(product.decor_en.decor2.image).url()}
                            blurDataURL={urlFor(product.decor_en.decor2.image)
                              .auto('format')
                              .url()}
                            placeholder="blur"
                            alt={product.decor_en.decor2.image.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 mb-10">
            <MorinTabs
              tabData={product.listWeight}
              onChange={(e) => setProductCurrent(e)}
              className="mx-auto mb-6 md:mb-8"
            />
          </div>
          <div className="relative pt-5 pb-5 md:pb-14 xl:pb-16">
            <h2
              className="max-w-screen-lg font-nutmeg text-mtitle text-center font-medium leading-tight mb-8 px-4 mx-auto md:text-mtitleBig xl:text-h2 md:px-8 lg:mb-10 xl:mb-14"
              style={{
                color: product.textColor ? product.textColor.hex : '#175BA7',
              }}
            >
              {ctx.language === 'id'
                ? product.description_id
                : product.description_en}
            </h2>
            {
              product.linkStore &&
              <FancyLink
                blank
                destination={product.linkStore}
                className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal mx-auto px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
              >
                <span className="block pt-1">
                  {ctx.language === 'id'
                    ? 'Dapatkan Produk Ini'
                    : 'Get This Product'}
                </span>
              </FancyLink>
            }
          </div>

          {product.recipes?.length > 0 && (
            <div className="max-w-screen-2xl mx-auto">
              <div className="relative bg-morin-peach rounded-2xl overflow-hidden py-8 px-8 md:px-0 xl:rounded-[40px] xl:pt-11 xl:pb-14 xl:px-4 2xl:px-6">
                <h2 className="font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-6 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8">
                  {ctx.language === 'id'
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
                    {ctx.language === 'id'
                      ? 'Lihat Semua Resep'
                      : 'See All Recipes'}
                  </StrokeButton>
                </div>
              </div>
            </div>
          )}

          {product.similar.option ? (
            productListAPI.length > 0 && (
              <div className="max-w-screen-2xl mx-auto">
                <div className="py-8 px-4 lg:px-8 xl:pt-11 xl:pb-14 2xl:px-0">
                  <h2 className="font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-7 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8">
                    {ctx.language === 'id'
                      ? 'Produk Sejenis'
                      : 'Similar Products'}
                  </h2>

                  <div className="flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5 justify-center">
                    {product.similar.option
                      ? productListAPI?.slice(0, 3).map((item, index) => (
                          <div
                            className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                            key={`${item.title_en}${index}`}
                          >
                            <ProductCard
                              title={
                                ctx.language === 'id'
                                  ? item.title_id
                                  : item.title_en
                              }
                              bgColor={
                                item.backgroundColor
                                  ? item.backgroundColor.hex
                                  : colors.morinLightBlue
                              }
                              imgSrc={urlFor(item.thumbnail)
                                .auto('format')
                                .width(800)
                                .url()}
                              imgPlaceholder={urlFor(item.thumbnail)
                                .width(500)
                                .auto('format')
                                .blur(50)
                                .url()}
                              thumbnailFruit={item.thumbnailFruit}
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
                                ctx.language === 'id'
                                  ? item.title_id
                                  : item.title_en
                              }
                              bgColor={
                                item.backgroundColor
                                  ? item.backgroundColor.hex
                                  : colors.morinLightBlue
                              }
                              imgSrc={urlFor(item.thumbnail)
                                .auto('format')
                                .width(800)
                                .url()}
                              imgBg={'/product/strawberry-bg.png'}
                              thumbnailFruit={item.thumbnailFruit}
                              imgPlaceholder={urlFor(item.thumbnail)
                                .width(500)
                                .auto('format')
                                .blur(50)
                                .url()}
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
                    {ctx.language === 'id'
                      ? 'Lihat Semua Produk'
                      : 'See All Products'}
                  </StrokeButton>
                </div>
              </div>
            )
          ) : product.similar.manual.length > 0 && (
            <div className="max-w-screen-2xl mx-auto">
              <div className="py-8 px-4 lg:px-8 xl:pt-11 xl:pb-14 2xl:px-0">
                <h2 className="font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-7 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8">
                  {ctx.language === 'id'
                    ? 'Produk Sejenis'
                    : 'Similar Products'}
                </h2>

                <div className="flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5 justify-center">
                  {product.similar.manual?.map((item, index) => (
                    <div
                      className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                      key={`${item.title_en}${index}`}
                    >
                      <ProductCard
                        title={
                          ctx.language === 'id' ? item.title_id : item.title_en
                        }
                        bgColor={
                          item.backgroundColor
                            ? item.backgroundColor.hex
                            : colors.morinLightBlue
                        }
                        imgSrc={urlFor(item.thumbnail)
                          .auto('format')
                          .width(800)
                          .url()}
                        imgBg={'/product/strawberry-bg.png'}
                        thumbnailFruit={item.thumbnailFruit}
                        imgPlaceholder={urlFor(item.thumbnail)
                          .width(500)
                          .auto('format')
                          .blur(50)
                          .url()}
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
                  {ctx.language === 'id'
                    ? 'Lihat Semua Produk'
                    : 'See All Products'}
                </StrokeButton>
              </div>
            </div>
          )}
        </div>

        <Footer lang={ctx.language} />
      </motion.div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "productList"] {
          ...,
          type->,
        }
      `)

  const paths = []

  res.map((data) => {
    return paths.push({
      params: {
        productSlug: data.slug.current,
        productType: data.type.slug.current,
      },
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

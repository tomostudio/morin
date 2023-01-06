import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import FancyLink from '@/components/utils/fancyLink'
import MorinTabs from '@/components/micro-module/morinTabs'
import RecipeSlider from '@/components/sliders/recipeSlider'
import Image from 'next/legacy/image'
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

const ProductDetail = ({
  productAPI,
  productListAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
  productType,
  productTypeListAPI,
}) => {
  const [seo] = seoAPI
  const [product] = productAPI
  const [footer] = footerAPI
  const router = useRouter()
  const [productCurrent, setProductCurrent] = useState(
    product.listWeight.find((data) => data.defaultWeight === true).title,
  )

  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor(product.langColor)
    useEffectInit({ context: ctx })
  }, [])

  return (
    <Layout className="overflow-hidden">
      <SEO
        title={ctx.language === 'id' ? product.title.id : product.title.en}
        pagelink={router.pathname}
        inputSEO={product.seo?.id}
        defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
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
          <div className="relative w-full max-h-[650px] h-[75vh] md:max-h-[750px] md:min-h-[650px] lg:max-h-[900px] lg:h-screen lg:min-h-[750px] z-0 flex flex-col justify-between">
            <div
              className="h-full w-full absolute z-0"
              style={{
                backgroundColor: product.backgroundColor
                  ? product.backgroundColor.hex
                  : colors.morinLightBlue,
              }}
            >
              {/* Background Elements */}
              <div className="absolute w-full h-3/4 overflow-hidden  z-1">
                <Parallax
                  translateY={['-300px', '300px']}
                  className="w-full h-full absolute top-0 left-0"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[50%] md:translate-y-[-30%] w-[100vw] max-w-[1500px] h-auto aspect-[1/1] z-1">
                    <Image
                      src={`/RAY.svg`}
                      objectFit="contain"
                      layout="fill"
                      priority
                      className="animate-spin-slow "
                    />
                  </div>
                </Parallax>
                <div
                  className={`w-full h-full  absolute-center lg:max-w-screen-2xl z-2 product-elements layout layout-${product.thumbnailFruit.layout}`}
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
                            .url()}
                          blurDataURL={urlFor(product.thumbnailFruit.fruit1)
                            .width(200)
                            .auto('format')
                            .blur(20)
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
                <div className="product-detail-curve top-0 translate-y-[-95%] translate-x-[-50%]" />
              </div>
            </div>
            {/* Title Text */}
            <div
              className={`text-center z-2 pt-36 lg:pt-56 justify-between relative`}
              style={{
                color: product.textColor ? product.textColor.hex : '#175BA7',
              }}
            >
              <span className="font-semibold tracking-widest mb-1.5 md:mb-2.5 lg:mb-4 uppercase text-inherit">
                {ctx.language === 'id'
                  ? `MORIN ${productType.title.id}`
                  : `MORIN ${productType.title.en}`}
              </span>
              <h1 className="font-nutmeg text-ctitle leading-none px-4 mb-0 md:text-h2 lg:text-h1 text-inherit">
                {ctx.language === 'id' ? product.title.id : product.title.en}
              </h1>
            </div>
            {/* Product */}
            <div className="flex flex-wrap justify-center items-end w-full px-12 relative z-2 bottom-0">
              <div className="w-[80vw] lg:w-[40vw] min-w-[250px] max-w-[400px] lg:max-w-none aspect-[1/1] h-auto max-h-[400px] z-2 relative">
                {product.listWeight.map((data, id) => (
                  <div
                    className={`${
                      productCurrent === data.title
                        ? 'relative fade-in top-0'
                        : 'opacity-0 absolute'
                    }  z-2 w-full h-full`}
                    key={id}
                  >
                    <Image
                      src={urlFor(data.image).auto('format').url()}
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
                <div className="hidden max-w-screen-2xl w-full h-full absolute bottom-0 left-1/2 -translate-x-1/2  lg:block ">
                  {/* Decor 1 */}
                  <div className="absolute bottom-[10%] right-[50%] left-auto translate-x-[-45%] xl:translate-x-[-35%] w-[30%] h-[80%] rotate-[8deg]">
                    {ctx.language === 'id'
                      ? product.decor && (
                          <Image
                            src={urlFor(product.decor.decor1.image.id).url()}
                            blurDataURL={urlFor(
                              product.decor.decor1.image.id,
                            ).url()}
                            placeholder="blur"
                            alt={product.decor.decor1.image.id.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )
                      : product.decor && (
                          <Image
                            src={urlFor(product.decor.decor1.image.en).url()}
                            blurDataURL={urlFor(product.decor.decor1.image.en)
                              .auto('format')
                              .url()}
                            placeholder="blur"
                            alt={product.decor.decor1.image.en.alt}
                            layout={'fill'}
                            objectFit={'contain'}
                          />
                        )}
                  </div>
                  {/* Decor 2 */}
                  <div className="absolute bottom-[10%] left-[50%] translate-x-[45%] xl:translate-x-[35%] w-[30%] h-[80%] rotate-[-8deg]">
                    {product.decor && (
                      <Image
                        src={urlFor(
                          ctx.language === 'id'
                            ? product.decor.decor2.image.id
                            : product.decor.decor2.image.en,
                        ).url()}
                        blurDataURL={urlFor(
                          ctx.language === 'id'
                            ? product.decor.decor2.image.id
                            : product.decor.decor2.image.en,
                        )
                          .auto('format')
                          .url()}
                        placeholder="blur"
                        alt={product.decor.decor2.image.id.alt}
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
          <div className="relative pt-5 pb-5 md:pb-14 lg:pb-16">
            <h2
              className="max-w-screen-lg font-nutmeg text-mtitle text-center font-medium leading-tight mb-8 px-4 mx-auto md:text-h4 lg:text-h2 md:px-8 lg:mb-10"
              style={{
                color: product.textColor ? product.textColor.hex : '#175BA7',
              }}
            >
              {ctx.language === 'id'
                ? product.description?.id
                : product.description?.en}
            </h2>
            {!seo.advance_setting.hide_shop && (
              <FancyLink
                a11yText={`Navigate to shop`}
                blank
                destination={
                  product.getProduct.custom_link
                    ? product.getProduct.linkProduct &&
                      `${product.getProduct.linkProduct}`
                    : `${process.env.NEXT_PUBLIC_STORE_URL}${
                        product.getProduct.linkStore
                          ? product.getProduct.linkStore.shopifyProduct.handle
                          : ''
                      }`
                }
                className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal mx-auto px-4 lg:h-14 lg:text-mtitle lg:rounded-full lg:px-8"
              >
                <span className="block pt-1">
                  {ctx.language === 'id'
                    ? translation.productLanguage.linkStore.id
                    : translation.productLanguage.linkStore.en}
                </span>
              </FancyLink>
            )}
          </div>
          {product.recipes?.length > 0 && (
            <div className="max-w-screen-2xl mx-auto">
              <div className="relative bg-morin-peach rounded-2xl overflow-hidden py-8 px-8 md:px-0 lg:rounded-[40px] lg:pt-11 lg:pb-14 lg:px-4 2xl:px-6">
                <h2 className="font-nutmeg font-normal text-[22pt] text-morin-red text-center leading-tight mb-6 mx-auto md:text-h4 lg:text-h2 lg:mb-8">
                  {ctx.language === 'id'
                    ? translation.productLanguage.recipe.title.id
                    : translation.productLanguage.recipe.title.en}
                </h2>
                <div className="w-[calc(100%+64px)] -mx-8 md:w-full md:mx-0">
                  <RecipeSlider
                    data={product.recipes}
                    onClick={(url) => handleImageGallery(url)}
                  />
                </div>
                <div className="hidden w-fit mt-7 mx-auto md:block lg:mt-8">
                  <StrokeButton
                    ariaLabel="button_recipe_product"
                    destination="/recipes"
                    color={colors.morinRed}
                  >
                    {ctx.language === 'id'
                      ? translation.productLanguage.recipe.btn.id
                      : translation.productLanguage.recipe.btn.en}
                  </StrokeButton>
                </div>
              </div>
            </div>
          )}
          {/* Improve Loop */}
          {product.similar.option
            ? productListAPI.length > 0 && (
                <div className="max-w-screen-2xl mx-auto">
                  <div className="py-8 px-4 lg:px-8 lg:pt-11 lg:pb-14 2xl:px-0">
                    <h2 className="font-nutmeg font-normal text-[22pt] text-morin-red text-center leading-tight mb-7 mx-auto md:text-h4 lg:text-h2 lg:mb-8">
                      {ctx.language === 'id'
                        ? translation.productLanguage.similar.id
                        : translation.productLanguage.similar.en}
                    </h2>

                    <div className="flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5 justify-center">
                      {true
                        ? productListAPI
                            ?.filter((item) => item.type)
                            .filter((item) => item._id !== product._id)
                            .slice(0, 3)
                            .map((item, index) => (
                              <div
                                className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                                key={`${item.title.en}${index}`}
                              >
                                <ProductCard
                                  title={
                                    ctx.language === 'id'
                                      ? item.title.id
                                      : item.title.en
                                  }
                                  bgColor={
                                    item.backgroundColor
                                      ? item.backgroundColor.hex
                                      : colors.morinLightBlue
                                  }
                                  imgSrc={urlFor(item.thumbnail)
                                    .auto('format')
                                    .url()}
                                  imgPlaceholder={urlFor(item.thumbnail)
                                    .width(500)
                                    .auto('format')
                                    .blur(20)
                                    .url()}
                                  thumbnailFruit={item.thumbnailFruit}
                                  imgAlt={item.thumbnail.alt}
                                  link={`/products/${
                                    productTypeListAPI
                                      .map((data) => {
                                        return {
                                          ...data,
                                          products: data.products.find(
                                            (e) => e._id === item._id,
                                          ),
                                        }
                                      })
                                      .find((e) => e.products).slug.current
                                  }/${item.slug.current}`}
                                  small
                                />
                              </div>
                            ))
                        : product.similar.manual &&
                          product.similar.manual?.map((item, index) => (
                            <div
                              className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                              key={`${item.title.en}${index}`}
                            >
                              <ProductCard
                                title={
                                  ctx.language === 'id'
                                    ? item.title.id
                                    : item.title.en
                                }
                                bgColor={
                                  item.backgroundColor
                                    ? item.backgroundColor.hex
                                    : colors.morinLightBlue
                                }
                                imgSrc={urlFor(item.thumbnail)
                                  .auto('format')
                                  .url()}
                                imgBg={'/product/strawberry-bg.png'}
                                thumbnailFruit={item.thumbnailFruit}
                                imgPlaceholder={urlFor(item.thumbnail)
                                  .width(500)
                                  .auto('format')
                                  .blur(20)
                                  .url()}
                                imgAlt={item.thumbnail.alt}
                                link={`/products/${
                                  productTypeListAPI
                                    .map((data) => {
                                      return {
                                        ...data,
                                        products: data.products.find(
                                          (e) => e._id === item._id,
                                        ),
                                      }
                                    })
                                    .find((e) => e.products).slug.current
                                }/${item.slug.current}`}
                                small
                              />
                            </div>
                          ))}
                    </div>

                    <StrokeButton
                      ariaLabel="button_all_product"
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
            : product.similar.manual &&
              product.similar.manual.length > 0 && (
                <div className="max-w-screen-2xl mx-auto">
                  <div className="py-8 px-4 lg:px-8 lg:pt-11 lg:pb-14 2xl:px-0">
                    <h2 className="font-nutmeg font-normal text-[22pt] text-morin-red text-center leading-tight mb-7 mx-auto md:text-h4 lg:text-h2 lg:mb-8">
                      {ctx.language === 'id'
                        ? translation.productLanguage.similar.id
                        : translation.productLanguage.similar.en}
                    </h2>

                    <div className="flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5 justify-center">
                      {product.similar.manual?.map((item, index) => (
                        <div
                          className="w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5"
                          key={`${item.title.en}${index}`}
                        >
                          <ProductCard
                            title={
                              ctx.language === 'id'
                                ? item.title.id
                                : item.title.en
                            }
                            bgColor={
                              item.backgroundColor
                                ? item.backgroundColor.hex
                                : colors.morinLightBlue
                            }
                            imgSrc={urlFor(item.thumbnail).auto('format').url()}
                            imgBg={'/product/strawberry-bg.png'}
                            thumbnailFruit={item.thumbnailFruit}
                            imgPlaceholder={urlFor(item.thumbnail)
                              .width(500)
                              .auto('format')
                              .blur(20)
                              .url()}
                            imgAlt={item.thumbnail.alt}
                            link={`/products/${
                              productTypeListAPI
                                .map((data) => {
                                  return {
                                    ...data,
                                    products: data.products.find(
                                      (e) => e._id === item._id,
                                    ),
                                  }
                                })
                                .find((e) => e.products).slug.current
                            }/${item.slug.current}`}
                            small
                          />
                        </div>
                      ))}
                    </div>

                    <StrokeButton
                      ariaLabel="button_all_product"
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

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "productType"] {
          slug,
          products[]->
        }
      `)

  const paths = []

  res.map((data) => {
    data.products.map((item) => {
      return paths.push({
        params: {
          productType: data.slug.current,
          productSlug: item.slug.current,
        },
      })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productTypeAPI = await client.fetch(
    `
      *[_type == "productType" && slug.current == "${params.productType}"] {
        title,
        slug
      }
    `,
  )
  const productAPI = await client.fetch(
    `
      *[_type == "productList" && slug.current == "${params.productSlug}"] {
        ...,
        decor {
          decor1->,
          decor2->
        },
        recipes[]->,
        similar {
          ...,
          manual[]-> {
            ...,
            type->
          }
        },
        getProduct {
          ...,
          linkStore->
        }
      }
    `,
  )
  const productListAPI = await client.fetch(`
    *[_type == "productList"]
  `)
  const productTypeListAPI = await client.fetch(
    `
      *[_type == "productType"] {
        ...,
        products[]->,
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
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `)
  const [translation] = translationAPI
  const [productType] = productTypeAPI

  return {
    props: {
      productAPI,
      productListAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
      productType,
      productTypeListAPI,
    },
  }
}

export default ProductDetail

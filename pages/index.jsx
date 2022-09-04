import { useRef, useEffect, useState } from 'react'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '@/components/module/layout'
import Footer from '@/components/module/footer'
import Container from '@/components/module/container'
import { fade } from '@/helpers/transitions'
import colors from '@/helpers/colors'
import HeroSlider from '@/components/sliders/heroSlider'
import HighlightSlider from '@/components/sliders/highlightSlider'
import RecipeSlider from '@/components/sliders/recipeSlider'
import StrokeButton from '@/components/micro-module/strokeButton'
import SolidButton from '@/components/micro-module/solidButton'
import HeroCategory from '@/components/module/heroCategory'
import { HeartSmall, HeartLarge, Scribble } from '@/components/utils/svg'
import { useEffectInit } from '@/components/utils/preset'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import Script from 'next/script'

export default function Home({
  homeAPI,
  recipeAPI,
  recipeListAPI,
  eventAPI,
  productAPI,
  productTypeAPI,
  seoAPI,
  footerAPI,
}) {
  const [home] = homeAPI
  const [seo] = seoAPI
  const [product] = productAPI
  const [recipe] = recipeAPI
  const [footer] = footerAPI
  const router = useRouter()

  const ctx = useAppContext()

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 250) {
        ctx.setLangColor(home.langColor)
      }
    }

    setTimeout(() => {
      document.addEventListener('scroll', scrollListener, false)
    }, 50) // load delay
    return () => {
      document.removeEventListener('scroll', scrollListener, false)
    }
  }, [])

  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false })

    return () => {}
  }, [])

  return (
    <>
      <SEO
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? home.seo_id : home.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div initial="initial" animate="enter" exit="exit" variants={fade}>
        <Layout>
          {/* Slider Section */}
          <section className="scrollsection">
            <HeroSlider
              data={home}
              className="min-h-screen w-full"
              lang={ctx.language}
            />
          </section>
          {/* Sticky Section */}
          <section className="z-0">
            <Container
              border={false}
              background={colors.offWhite}
              bgTail={false}
              safeWidth={false}
              className="!px-0 z-1"
            >
              <div className="flex w-full flex-col lg:flex-row flex-nowrap lg:items-start">
                {/* Sticky */}
                <div className="home-sticky w-full shrink-0 px-8 lg:sticky lg:top-[86px] lg:min-w-fit lg:flex lg:min-h-[calc(100vh-86px)] lg:w-3/12 lg:flex-col lg:justify-between 2xl:px-0">
                  <div className="mt-24 mb-20 lg:mt-7 lg:max-w-sm lg:pr-8 max-w-lg mx-auto flex flex-col items-center justify-center lg:items-start just">
                    <h2 className=" mb-5 text-center font-nutmeg text-mtitle font-normal leading-tight text-morin-blue lg:mb-[30px] lg:text-left lg:text-ctitleSmall xl:leading-[32px] ">
                      {ctx.language === 'id'
                        ? product.description_id
                        : product.description_en}
                    </h2>
                    <StrokeButton
                      destination="/products"
                      color={colors.morinBlue}
                      className="lg:mx-0"
                    >
                      {ctx.language === 'id'
                        ? home.language.btn_product_type.id
                        : home.language.btn_product_type.en}
                    </StrokeButton>
                  </div>
                  <div className="mx-auto mb-5 flex flex-wrap justify-center lg:mx-0 lg:mb-10 space-x-4 lg:space-x-6 lg:justify-start">
                    <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                      <Image
                        src={`/halal.svg`}
                        alt={'Halal'}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                      <Image
                        src={`/pom.svg`}
                        alt={'Badan POM'}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative  -8 w-8 lg:h-12 lg:w-12">
                      <Image
                        src={`/topbrand.svg`}
                        alt={'Top Brand'}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="shrink w-full">
                  {productTypeAPI?.map((i, id) => (
                    <div className="relative h-screen" key={i.title_id}>
                      <HeroCategory
                        imgSrc={urlFor(i.background)
                          .width(1920)
                          .auto('format')
                          .url()}
                        categoryData={i}
                        imgPlaceholder={urlFor(i.background)
                          .width(1000)
                          .auto('format')
                          .blur(50)
                          .url()}
                        imgAlt={i.background}
                        title={ctx.language === 'id' ? i.title_id : i.title_en}
                        link={`/products/${i.slug.current}`}
                        end={id >= productTypeAPI.length - 1 && true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
          <section>
            <Container
              border={true}
              background={colors.morinPeach}
              bgTail={true}
              safeWidth={true}
            >
              <div className="flex w-full flex-wrap">
                <div className="mb-8 w-full text-center md:w-7/12 md:text-left lg:mb-5 xl:mb-11 xl:w-8/12">
                  <h2 className="relative mx-auto mb-4 max-w-[175px] font-nutmeg text-ctitle font-bold leading-tight text-morin-red md:mx-0 md:mb-2 md:max-w-fit lg:text-h2 lg:leading-tight xl:text-h1">
                    {ctx.language === 'id' ? (
                      <>{home.language.recipe.title.id}</>
                    ) : (
                      <>{home.language.recipe.title.en}</>
                    )}
                    <div className="absolute -top-0.5 left-[calc(100%-15px)] w-8 md:hidden">
                      <HeartSmall className="md:hidden" />
                    </div>
                    <div className="lg:w-18 absolute -top-1 left-[calc(100%+5px)] hidden w-14 md:block lg:top-2 lg:left-[calc(100%+10px)] xl:w-24">
                      <HeartLarge className="hidden md:block" />
                    </div>
                  </h2>
                  <p className="mx-auto max-w-[300px]  text-morin-red text-defaultSmall md:mx-0 lg:max-w-[500px] lg:text-default xl:max-w-[600px]">
                    {ctx.language === 'id'
                      ? recipe.description_id
                      : recipe.description_en}
                  </p>
                </div>
                <div className="order-3 w-full md:order-none md:ml-auto md:w-fit md:pl-12">
                  <StrokeButton destination="/recipes" color={colors.morinRed}>
                    {ctx.language === 'id'
                      ? home.language.recipe.btn.id
                      : home.language.recipe.btn.en}
                  </StrokeButton>
                </div>
                <div className="-mx-3 mb-8 w-[calc(100%+24px)] md:-mx-4 md:mb-0 md:w-[calc(100%+32px)]">
                  <RecipeSlider data={recipeListAPI} lang={ctx.language} />
                </div>
              </div>
            </Container>
          </section>
          <section>
            <Container
              border={true}
              background={colors.morinSkyBlue}
              bgTail={true}
              safeWidth={false}
              classNameOuter="pb-0"
            >
              <Container
                border={false}
                background={'transparent'}
                bgTail={false}
                safeWidth={true}
              >
                <div className="flex w-full flex-wrap">
                  <div className="mb-6 w-full text-center md:w-7/12 md:text-left lg:mb-10 xl:mb-14 xl:w-8/12">
                    <h2 className="relative mx-auto mb-0 max-w-[160px] pb-5 font-nutmeg text-ctitle font-bold leading-none text-morin-blue md:mx-0 md:mb-2 md:w-fit md:max-w-none md:pb-0 lg:text-h2">
                      {ctx.language === 'id'
                        ? home.language.event.title.id
                        : home.language.event.title.en}
                      <div className="absolute left-1/2 bottom-0 h-3.5 w-full -translate-x-1/2 md:left-auto md:right-0 md:-bottom-4 md:w-40 md:translate-x-0 lg:-bottom-5 lg:h-5 lg:w-60">
                        <Scribble />
                      </div>
                    </h2>
                  </div>
                  <div className="ml-auto hidden w-fit pl-12 md:block">
                    <StrokeButton
                      destination="/events"
                      color={colors.morinBlue}
                    >
                      {ctx.language === 'id'
                        ? home.language.event.btn_all.id
                        : home.language.event.btn_all.en}
                    </StrokeButton>
                  </div>
                </div>
              </Container>
              <div className="relative overflow-hidden bg-morin-skyBlue px-0 pb-10 md:px-0 xl:pb-14">
                <HighlightSlider
                  data={eventAPI}
                  lang={ctx.language}
                  button={home.language.event.btn_card}
                />
                <div className="mx-auto mt-7 w-fit md:hidden">
                  <StrokeButton destination="/events" color={colors.morinBlue}>
                    {ctx.language === 'id'
                      ? home.language.event.btn_all.id
                      : home.language.event.btn_all.en}
                  </StrokeButton>
                </div>
                <div
                  className={`absolute bottom-0 -z-1 h-10 w-full translate-y-full bg-morin-skyBlue`}
                />
              </div>
            </Container>
          </section>
          <section>
            <Container
              border={true}
              bgTail={false}
              safeWidth={true}
              background={colors.white}
              classNameOuter="pb-0"
            >
              <div className="mb-8 flex w-full flex-nowrap flex-col lg:flex-row">
                <h2 className="mx-auto mt-0 mb-2 w-full max-w-[260px] text-center font-nutmeg text-mtitleSmall font-normal leading-tight text-morin-blue md:mx-0 md:mb-0 md:w-[calc(100%-135px)] md:max-w-none md:pr-4 md:text-left lg:text-ctitle xl:text-mtitleBig">
                  {ctx.language === 'id'
                    ? home.language.instagram.title.id
                    : home.language.instagram.title.en}
                </h2>
                <div>
                  <SolidButton
                    destination={home.instagram.url}
                    arrow={false}
                    targetBlank={true}
                    color={colors.morinBlue}
                  >
                    {home.instagram.title}
                  </SolidButton>
                </div>
              </div>
            </Container>
            <div className="pb-10 xl:pb-14">
              <Script
                src="https://apps.elfsight.com/p/platform.js"
                strategy="afterInteractive"
              />
              <div className="elfsight-app-401f1315-3937-4774-a0c6-f84f38d62aae" />
            </div>
          </section>
          <Footer lang={ctx.language} button={seo.menu_lang} faq={seo.hide_faq} footer={footer} />
        </Layout>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"]
  `)
  const recipeAPI = await client.fetch(`
  *[_type == "recipe"]
  `)
  const recipeListAPI = await client.fetch(`
  *[_type == "recipeList"]
  `)
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
  `)
  const productAPI = await client.fetch(`
  *[_type == "product"]
  `)
  const productTypeAPI = await client.fetch(`
  *[_type == "productType"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      homeAPI,
      recipeAPI,
      recipeListAPI,
      eventAPI,
      productAPI,
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}

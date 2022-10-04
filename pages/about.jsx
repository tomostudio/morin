import React, { useState, useEffect } from 'react'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import Container from '@/components/module/container'
import StrokeButton from '@/components/micro-module/strokeButton'
import AboutCard from '@/components/module/aboutCard'
import { useEffectInit } from '@/components/utils/preset'
import PageModal from '@/components/module/pageModal'
import colors from '@/helpers/colors'
import { useAppContext } from 'context/state'
import {
  DoubleSparkle,
  Highlight,
  HighlightMobile,
  Line,
  Wrinkle,
  ThreeTopLine,
} from '@/components/utils/svg'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { PortableText } from '@portabletext/react'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import { AboutModalComponents } from '@/components/utils/editorModal'

const About = ({ aboutAPI, eventAPI, seoAPI, footerAPI, translation }) => {
  const [modal, setModal] = useState(null)
  const [about] = aboutAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const router = useRouter()

  const openModal = (id) => {
    setModal(id)
  }

  const closeModal = () => {
    setModal(null)
  }

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
      <SEO
        title={ctx.language === 'id' ? 'Tentang Kami' : 'About'}
        pagelink={router.pathname}
        inputSEO={about.seo?.id}
        defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Layout className="relative pt-16 overflow-hidden">
        <div className="w-[150vw] aspect-[1/1] absolute inset-0 -translate-x-1/2 -translate-y-1/2 -top-20 left-1/2 z-1 ">
          <Parallax translateY={['-200px', '200px']} className="w-full h-full ">
            <Image
              src="/RAY.svg"
              layout="fill"
              objectFit="contain"
              className="animate-spin-slow"
            />
          </Parallax>
        </div>

        <div className="relative w-full min-h-screen max-w-screen-2xl  flex flex-col justify-between z-2">
          <div className="relative pt-28 pb-32 px-8 xl:pb-36 z-2">
            <div className="relative max-w-md text-morin-blue text-center mx-auto lg:max-w-xl xl:max-w-3xl">
              <div className="relative">
                <h1 className="font-poppins font-semibold text-defaultSmall leading-none relative z-2 tracking-widest mt-0 mb-6 lg:text-default lg:mb-10 xl:mb-20">
                  {ctx.language === 'id' ? about.title.id : about.title.en}
                </h1>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <Highlight className="hidden lg:block" />
                  <HighlightMobile className="lg:hidden" />
                </div>
              </div>
              <div className="relative mb-8 lg:mb-16 xl:mb-28">
                <p className="font-nutmeg text-mtitleBig leading-tight lg:text-h2  ">
                  {/* This is Manual Adjustment dont Change */}
                  {ctx.language === 'id'
                    ? 'Selama lebih dari 40 tahun, Morin telah hadir menemani momen sarapan keluarga Indonesia.'
                    : 'For more than 40 years, Morin has been present to accompany Indonesian family breakfast moments.'}
                </p>
                <div
                  className={`absolute left-0 lg:left-auto  rotate-[-20deg] lg:rotate-[20deg] scale-x-[-100%]  translate-y-[-60%] ${
                    ctx.language === 'id'
                      ? 'left-[0%] sm:left-0 lg:left-auto translate-x-[0%] lg:translate-x-[50%] lg:right-[0%] xl:right-[25%] top-0 lg:translate-y-[-65%]'
                      : 'translate-x-[-30%] lg:translate-x-0 left-[10%] lg:left-auto  lg:right-[0%] xl:right-[22.5%] top-0 lg:translate-y-[-60%]'
                  } `}
                >
                  <ThreeTopLine
                    className={`h-[70px] w-auto lg:h-[119px] lg:w-[123px]`}
                  />
                </div>
                <div
                  className={`absolute hidden lg:block  left-0 scale-125  ${
                    ctx.language === 'id'
                      ? 'lg:translate-x-[-50%] xl:translate-x-[-125%] lg:top-[20%] xl:top-[25%]'
                      : 'lg:translate-x-[0%] xl:translate-x-[-50%] lg:top-[17%] xl:top-[25%]'
                  } `}
                >
                  <DoubleSparkle className="h-[69px] w-[46px]" />
                </div>
                <div
                  className={`absolute hidden lg:block right-0 ${
                    ctx.language === 'id'
                      ? 'right-0 lg:scale-150 xl:scale-150 lg:translate-x-[50%] xl:translate-x-[100%] lg:bottom-[25%] xl:bottom-[30%]'
                      : 'right-0 lg:scale-125 xl:scale-125 lg:translate-x-[75%] xl:translate-x-[50%] lg:bottom-[20%] xl:bottom-[30%] '
                  } `}
                >
                  <Wrinkle className="h-[28px] w-auto" />
                </div>
                <div
                  className={`absolute lg:top-auto bottom-[-5%] lg:bottom-[-5%] xl:bottom-[-8%] ${
                    ctx.language === 'id'
                      ? 'right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-[8%] lg:right-0 xl:right-[50%] xl:translate-x-[50%]'
                      : 'left-[50%] translate-x-[-50%] xs:translate-x-0 xs:left-[7%] lg:right-auto lg:left-[0%] xl:left-auto xl:right-[35%]'
                  } `}
                >
                  <Line className="h-[20px] w-auto lg:h-[32px] lg:w-[312px]" />
                </div>
              </div>
              <StrokeButton
                ariaLabel="button_about"
                color={colors.morinBlue}
                arrow={false}
                onClick={() =>
                  openModal(about.contents?.find((data) => data.first)._key)
                }
              >
                {ctx.language === 'en'
                  ? about.contents?.find((data) => data.first).button.en
                  : about.contents?.find((data) => data.first).button.id}
              </StrokeButton>
            </div>
            <Parallax
              translateY={['0px', '-150px']}
              className="absolute top-[15%] sm:top-[10%] lg:top-[10%] right-[-40px] md:right-[-80px] lg:right-[-120px] "
            >
              <div className="relative aspect-[1/1] w-[175px] sm:w-[200px] md:w-[258px] lg:w-[382px] rotate-12">
                <Image
                  src={urlFor(about.backgrounds.imageLeft).auto('format').url()}
                  blurDataURL={urlFor(about.backgrounds.imageLeft)
                    .auto('format')
                    .width(350)
                    .blur(50)
                    .url()}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Parallax>
            <Parallax
              translateY={['0px', '-100px']}
              className="absolute bottom-[-5%] lg:bottom-[5%] left-[-40px] md:left-[-80px] lg:left-[-120px]"
            >
              <div className="relative aspect-[1/1] w-[175px] sm:w-[200px] md:w-[258px] lg:w-[382px] -rotate-12">
                <Image
                  src={urlFor(about.backgrounds.imageRight)
                    .auto('format')
                    .url()}
                  blurDataURL={urlFor(about.backgrounds.imageRight)
                    .auto('format')
                    .width(350)
                    .blur(50)
                    .url()}
                  placeholder="blur"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Parallax>
          </div>

          <Container
            className="pl-0 pr-0"
            classNameOuter="px-4 mb-8 lg:px-0 lg:mb-12 xl:mb-14"
          >
            <div className="grid grid-cols-2 gap-7">
              {about.contents.map(
                (data, id) =>
                  !data.first && (
                    <AboutCard
                      titleDescription={
                        ctx.language === 'en'
                          ? data.titleDescription.en
                          : data.titleDescription.id
                      }
                      title={
                        ctx.language === 'en'
                          ? data.titleCover.en
                          : data.titleCover.id
                      }
                      button={
                        ctx.language === 'en' ? data.button.en : data.button.id
                      }
                      imgSrc={urlFor(data.thumbnail).auto('format').url()}
                      imgPlaceholder={urlFor(data.thumbnail)
                        .auto('format')
                        .width(400)
                        .blur(25)
                        .url()}
                      imgAlt={data.thumbnail.alt}
                      onClick={() => openModal(data._key)}
                    />
                  ),
              )}
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
        </div>
      </Layout>
      {about.contents.map((data, id) => (
        <PageModal
          key={id}
          isOpen={modal === data._key ? true : false}
          onRequestClose={closeModal}
          className="text-morin-blue"
        >
          <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
            {ctx.language === 'en'
              ? data.titleDescription.en
              : data.titleDescription.id}
          </span>
          <div className="content about">
            <PortableText
              value={
                ctx.language === 'en'
                  ? data.description.en
                  : data.description.id
              }
              components={AboutModalComponents}
            />
          </div>
        </PageModal>
      ))}
    </motion.div>
  )
}

export async function getStaticProps() {
  const aboutAPI = await client.fetch(`
  *[_type == "about"]
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
      aboutAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default About

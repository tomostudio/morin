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

const About = ({ aboutAPI, seoAPI, footerAPI }) => {
  const [modalOne, setModalOne] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [modalZero, setModalZero] = useState(false)
  const [about] = aboutAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const router = useRouter()

  const openModal = (type) => {
    switch (type) {
      case 'OUR PROCESS':
        setModalOne(true)
        break
      case 'VISI & MISI':
        setModalTwo(true)
        break
      case 'MAIN MODAL':
        setModalZero(true)
        break
      default:
        return null
    }
  }

  const closeModal = () => {
    setModalOne(false)
    setModalTwo(false)
    setModalZero(false)
  }

  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor(about.langColor.hex)
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
      <SEO
        title={ctx.language === 'id' ? 'Tentang Kami' : 'About'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? about.seo_id : about.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
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

        <div className="relative w-full min-h-screen flex flex-col justify-between z-2">
          <div className="relative pt-28 pb-32 px-8 xl:pb-36">
            <div className="relative max-w-md text-morin-blue text-center mx-auto lg:max-w-xl xl:max-w-3xl">
              <div className="relative">
                <h1 className="font-poppins font-semibold text-defaultSmall leading-none tracking-widest mt-0 mb-6 lg:text-default lg:mb-10 xl:mb-20">
                  {ctx.language === 'id' ? about.title_id : about.title_en}
                </h1>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <Highlight className="hidden lg:block" />
                  <HighlightMobile className="lg:hidden" />
                </div>
              </div>
              <div className="relative mb-8 lg:mb-16 xl:mb-28">
                <p className="font-nutmeg text-mtitleBig leading-tight lg:text-h2  ">
                  {ctx.language === 'id'
                    ? about.description_id
                    : about.description_en}
                </p>
                <div
                  className={`absolute left-0 lg:left-auto  rotate-[-20deg] lg:rotate-[20deg] scale-x-[-100%] translate-x-[-50%] lg:translate-x-0 translate-y-[-60%] ${
                    ctx.language === 'id'
                      ? 'left-[10%] sm:left-0 lg:left-auto  lg:right-[5%] xl:right-[25%] top-0 lg:translate-y-[-65%]'
                      : 'left-[10%] lg:left-auto  lg:right-[5%] xl:right-[27.5%] top-0 lg:translate-y-[-65%] '
                  } `}
                >
                  <ThreeTopLine
                    className={`h-[70px] w-auto lg:h-[119px] lg:w-[123px]`}
                  />
                </div>
                <div
                  className={`absolute hidden lg:block  left-0 ${
                    ctx.language === 'id'
                      ? 'lg:translate-x-[-25%] xl:translate-x-[-75%] lg:top-[17%] xl:top-[25%]'
                      : 'lg:translate-x-[0%] xl:translate-x-[-50%] lg:top-[17%] xl:top-[25%]'
                  } `}
                >
                  <DoubleSparkle className="h-[69px] w-[46px]" />
                </div>
                <div
                  className={`absolute hidden lg:block right-0 ${
                    ctx.language === 'id'
                      ? 'right-0 lg:scale-125 xl:scale-100 lg:translate-x-[-10%] xl:translate-x-[120%] lg:bottom-[20%] xl:bottom-[30%]'
                      : 'right-0  lg:scale-125 xl:scale-100 lg:translate-x-[75%] xl:translate-x-[50%] lg:bottom-[20%] xl:bottom-[30%] '
                  } `}
                >
                  <Wrinkle className="h-[28px] w-auto" />
                </div>
                <div
                  className={`absolute lg:top-auto bottom-[-5%] lg:bottom-[-5%] xl:bottom-[-8%] ${
                    ctx.language === 'id'
                      ? 'right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-[8%] lg:right-0'
                      : 'left-[5%] lg:right-auto lg:left-[0%] xl:left-auto xl:right-[35%]'
                  } `}
                >
                  <Line className="h-[20px] w-auto lg:h-[32px] lg:w-[312px]" />
                </div>
              </div>
              <StrokeButton
                color={colors.morinBlue}
                arrow={false}
                onClick={() => openModal('MAIN MODAL')}
              >
                {ctx.language === 'id'
                  ? about.first_more.btn.id
                  : about.first_more.btn.en}
              </StrokeButton>
            </div>
            <Parallax
              translateY={['0px', '-150px']}
              className="absolute top-[15%] lg:top-[10%] right-[-40px] md:right-[-80px] lg:right-[-120px] "
            >
              <div className="relative aspect-[1/1] w-[200px] md:w-[258px] lg:w-[382px] rotate-12">
                <Image
                  src={urlFor(about.backgrounds.imageLeft)
                    .auto('format')
                    .width(500)
                    .url()}
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
              className="absolute bottom-[0%] lg:bottom-[5%] left-[-40px] md:left-[-80px] lg:left-[-120px]"
            >
              <div className="relative aspect-[1/1] w-[200px] md:w-[258px] lg:w-[382px] -rotate-12">
                <Image
                  src={urlFor(about.backgrounds.imageRight)
                    .auto('format')
                    .width(500)
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
            classNameOuter="px-4 mb-8 lg:px-8 lg:mb-12 xl:mb-14"
          >
            <div className="flex flex-wrap md:-mx-2 xl:-mx-4">
              <div className="w-full mb-3 last:mb-0 md:w-1/2 md:mb-0 md:px-2 xl:px-4">
                <AboutCard
                  type="OUR PROCESS"
                  title={
                    ctx.language === 'id'
                      ? about.our_process.titleCover_id
                      : about.our_process.titleCover_en
                  }
                  button={about.our_process.btn}
                  imgSrc={urlFor(about.our_process.thumbnail)
                    .auto('format')
                    .width(800)
                    .url()}
                  imgPlaceholder={urlFor(about.our_process.thumbnail)
                    .auto('format')
                    .width(400)
                    .blur(25)
                    .url()}
                  imgAlt={about.our_process.thumbnail.alt}
                  onClick={() => openModal('OUR PROCESS')}
                  lang={ctx.language}
                />
              </div>
              <div className="w-full mb-3 last:mb-0 md:w-1/2 md:mb-0 md:px-2 xl:px-4">
                <AboutCard
                  type="VISI & MISI"
                  title={
                    ctx.language === 'id'
                      ? about.visi_misi.titleCover_id
                      : about.visi_misi.titleCover_en
                  }
                  button={about.visi_misi.btn}
                  imgSrc={urlFor(about.visi_misi.thumbnail)
                    .auto('format')
                    .width(800)
                    .url()}
                  imgPlaceholder={urlFor(about.visi_misi.thumbnail)
                    .auto('format')
                    .width(400)
                    .blur(25)
                    .url()}
                  imgAlt={about.visi_misi.thumbnail.alt}
                  onClick={() => openModal('VISI & MISI')}
                  lang={ctx.language}
                />
              </div>
            </div>
          </Container>

          <Footer lang={ctx.language} button={seo.menu_lang} footer={footer} />
        </div>
      </Layout>

      <PageModal
        isOpen={modalZero}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          {ctx.language === 'id'
            ? about.first_more.title_id
            : about.first_more.title_en}
        </span>

        <PortableText
          value={
            ctx.language === 'id'
              ? about.first_more.description_id
              : about.first_more.description_en
          }
          components={{
            block: {
              normal: ({ children }) => (
                <p className="font-medium mb-5">{children}</p>
              ),
            },
            types: {
              image: (props) => (
                <div className="relative w-full h-30rem max-md:h-56 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(props.value).auto('format').width(850).url()}
                    blurDataURL={urlFor(props.value)
                      .auto('format')
                      .width(500)
                      .blur(25)
                      .url()}
                    placeholder="blur"
                    alt={props.value.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              ),
            },
          }}
        />
      </PageModal>
      <PageModal
        isOpen={modalOne}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          {ctx.language === 'id'
            ? about.visi_misi.titleDescription_id
            : about.visi_misi.titleDescription_en}
        </span>

        <PortableText
          value={
            ctx.language === 'id'
              ? about.visi_misi.description_id
              : about.visi_misi.description_en
          }
          components={{
            block: {
              normal: ({ children }) => (
                <p className="font-medium mb-5">{children}</p>
              ),
            },
            types: {
              image: (props) => (
                <div className="relative w-full h-30rem max-md:h-56 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(props.value).auto('format').width(850).url()}
                    blurDataURL={urlFor(props.value)
                      .auto('format')
                      .width(500)
                      .blur(25)
                      .url()}
                    placeholder="blur"
                    alt={props.value.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              ),
            },
          }}
        />
      </PageModal>

      <PageModal
        isOpen={modalTwo}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          {ctx.language === 'id'
            ? about.our_process.titleDescription_id
            : about.our_process.titleDescription_en}
        </span>

        <PortableText
          value={
            ctx.language === 'id'
              ? about.our_process.description_id
              : about.our_process.description_en
          }
          components={{
            block: {
              normal: ({ children }) => (
                <p className="font-medium mb-5">{children}</p>
              ),
            },
            types: {
              image: (props) => (
                <div className="relative w-full h-30rem max-md:h-56 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(props.value).auto('format').width(850).url()}
                    blurDataURL={urlFor(props.value)
                      .auto('format')
                      .width(500)
                      .blur(25)
                      .url()}
                    placeholder="blur"
                    alt={props.value.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              ),
            },
          }}
        />
      </PageModal>
    </motion.div>
  )
}

export async function getStaticProps() {
  const aboutAPI = await client.fetch(`
  *[_type == "about"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      aboutAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default About

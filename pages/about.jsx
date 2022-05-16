import React, { useState, useEffect } from 'react'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
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
  SunRay,
  SunRaySmaller,
  Wrinkle,
  ThreeTopLine,
} from '@/components/utils/svg'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { PortableText } from '@portabletext/react'

const aboutData = [
  {
    type: 'OUR PROCESS',
    title: 'Bagaimana Morin Dibuat?',
    imgSrc: '/about/card-1.png',
    imgPlaceholder: '/about/card-1.png',
    imgAlt: 'Bagaimana Morin Dibuat?',
  },
  {
    type: 'VISI & MISI',
    title: 'Lorem Ipsum Dolor sit Amet',
    imgSrc: '/about/card-2.png',
    imgPlaceholder: '/about/card-2.png',
    imgAlt: 'Lorem Ipsum Dolor sit Amet',
  },
]

const About = ({ aboutAPI, seoAPI }) => {
  const [modalOne, setModalOne] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [about] = aboutAPI
  const [seo] = seoAPI
  const router = useRouter()

  const openModal = (type) => {
    switch (type) {
      case 'OUR PROCESS':
        setModalOne(true)
        break
      case 'VISI & MISI':
        setModalTwo(true)
        break
      default:
        return null
    }
  }

  const closeModal = () => {
    setModalOne(false)
    setModalTwo(false)
  }

  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <div className="w-full bg-morin-skyBlue ">
      <SEO
        title={'About'}
        pagelink={router.pathname}
        inputSEO={about.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Layout className="relative pt-16 overflow-hidden">
        <div className="w-[150vw] aspect-square absolute inset-0 -translate-x-1/2 -translate-y-1/2 -top-20 left-1/2 z-1 ">
          {/* <SunRaySmaller className='w-full h-full animate-spin-slow' /> */}
          <Image
            src="/RAY.svg"
            layout="fill"
            objectFit="contain"
            className="animate-spin-slow"
          />
        </div>

        <div className="relative w-full min-h-screen flex flex-col justify-between z-2">
          {/* <Header /> */}

          <div className="relative pt-28 pb-32 px-8 xl:pb-36">
            <div className="relative max-w-xs text-morin-blue text-center mx-auto lg:max-w-xl xl:max-w-3xl">
              <div className="relative">
                <h1 className="font-poppins font-semibold text-defaultSmall leading-none tracking-widest mt-0 mb-6 lg:text-default lg:mb-10 xl:mb-20">
                  WHO WE ARE
                </h1>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <Highlight className="hidden lg:block" />
                  <HighlightMobile className="lg:hidden" />
                </div>
              </div>
              <div className="relative">
                <p className="font-nutmeg text-mtitle leading-tight mb-8 lg:text-h2 lg:mb-16 xl:text-h2 xl:mb-28">
                  Selama lebih dari 40 tahun, Morin hadir menemani momen-momen
                  sarapan keluarga Indonesia.
                </p>
                <div className="absolute left-0 lg:left-auto aboutLineMobile top-[13%] lg:top-[-30%] lg:right-[20%] lg:scale-100">
                  <ThreeTopLine className="h-[34px] w-[32px] lg:h-[119px] lg:w-[123px]" />
                </div>
                <div className="absolute hidden lg:block top-[28%] left-[3%]">
                  <DoubleSparkle className="h-[69px] w-[46px]" />
                </div>
                <div className="absolute hidden lg:block top-[40%] right-0">
                  <Wrinkle className="h-[28px] w-[66px]" />
                </div>
                <div className="absolute top-[38%] right-[33%] lg:top-auto lg:bottom-[-10%] lg:right-[15%]">
                  <Line className="h-[13px] w-[86px] lg:h-[32px] lg:w-[312px]" />
                </div>
              </div>
              <StrokeButton color={colors.morinBlue} arrow={false}>
                Read More
              </StrokeButton>
            </div>
            <div className="absolute top-[4%] lg:top-[13%] right-[-40px] md:right-[-80px] lg:right-[-120px] rotate-[11deg]">
              <div className="relative w-[129px] h-[129px] md:w-[258px] md:h-[258px] lg:w-[382px] lg:h-[382px]">
                <Image
                  src={urlFor(about.backgrounds.imageLeft).url()}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="absolute bottom-[7%] lg:bottom-[5%] left-[-40px] md:left-[-80px] lg:left-[-120px] rotate-[-11deg]">
              <div className="relative w-[129px] h-[132px] md:w-[258px] md:h-[264px] lg:w-[382px] lg:h-[390px]">
                <Image
                  src={urlFor(about.backgrounds.imageRight).url()}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <Container
            className="pl-0 pr-0"
            classNameOuter="px-4 mb-8 lg:px-8 lg:mb-12 xl:mb-14"
          >
            <div className="flex flex-wrap md:-mx-2 xl:-mx-4">
              <div className="w-full mb-3 last:mb-0 md:w-1/2 md:mb-0 md:px-2 xl:px-4">
                <AboutCard
                  type="OUR PROCESS"
                  title={about.our_process.title}
                  imgSrc={urlFor(about.our_process.thumbnail).url()}
                  imgPlaceholder={urlFor(about.our_process.thumbnail).url()}
                  imgAlt={about.our_process.thumbnail.alt}
                  onClick={() => openModal('OUR PROCESS')}
                />
              </div>
              <div className="w-full mb-3 last:mb-0 md:w-1/2 md:mb-0 md:px-2 xl:px-4">
                <AboutCard
                  type="VISI & MISI"
                  title={about.visi_misi.title}
                  imgSrc={urlFor(about.visi_misi.thumbnail).url()}
                  imgPlaceholder={urlFor(about.visi_misi.thumbnail).url()}
                  imgAlt={about.visi_misi.thumbnail.alt}
                  onClick={() => openModal('VISI & MISI')}
                />
              </div>
            </div>
          </Container>

          <Footer />
        </div>
      </Layout>

      <PageModal
        isOpen={modalOne}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          {about.visi_misi.titleDescription}
        </span>

        <PortableText
          value={about.visi_misi.description}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="font-medium mb-5">{children}</p>
              ),
            },
            types: {
              image: (props) => (
                <div className="mb-5">
                  <Image
                    src={urlFor(props.value).url()}
                    blurDataURL={urlFor(props.value).url()}
                    placeholder="blur"
                    alt={props.value.alt}
                    width={795}
                    height={460}
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
          {about.our_process.titleDescription}
        </span>

        <PortableText
          value={about.our_process.description}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="font-medium mb-5">{children}</p>
              ),
            },
            types: {
              image: (props) => (
                <div className="mb-5">
                  <Image
                    src={urlFor(props.value).url()}
                    blurDataURL={urlFor(props.value).url()}
                    placeholder="blur"
                    alt={props.value.alt}
                    width={795}
                    height={460}
                  />
                </div>
              ),
            },
          }}
        />
      </PageModal>
    </div>
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

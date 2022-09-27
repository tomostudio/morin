import React, { useState, useEffect } from 'react'
import Layout from '@/components/module/layout'
import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import FAQCard from '@/components/module/FAQCard'
import { MorinLogo } from '@/components/utils/svg'
import BasicModal from '@/components/module/basicModal'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import FancyLink from '@/components/utils/fancyLink'
import { SunRaySmaller } from '@/components/utils/svg'

const FAQ = ({
  faqAPI,
  faqListAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [seo] = seoAPI
  const [faq] = faqAPI
  const [footer] = footerAPI
  const router = useRouter()
  const [modalData, setModalData] = useState(false)
  const [modalState, setModalState] = useState(false)

  const requestCloseModal = () => {
    setModalState(false)
  }
  const afterCloseModal = () => {
    setModalData(false)
    document.querySelector('body').removeAttribute('class')
  }

  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor('black')
    useEffectInit({ context: ctx })
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={fade}
      className="w-full bg-white"
    >
      <SEO
        title={ctx.language === 'id' ? 'Tanya Jawab' : 'FAQ'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? faq.seo?.id : faq.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Layout className="overflow-hidden pt-[86px] lg:pt-32">
        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-8 lg:px-8 lg:mb-12 xl:mb-14"
        >
          <div className="mb-16">
            <div className=" w-full md:w-3/4 text-morin-blue mx-auto text-center font-nutmeg text-h2 lg:text-h1 leading-none  font-bold">
              {ctx.language === 'id' ? faq.title.id : faq.title.en}
            </div>
          </div>

          <div className="flex flex-wrap -mx-1 lg:-mx-2.5">
            {faqListAPI?.map((item, index) =>
              ctx.language === 'id' ? (
                <div
                  className="w-1/2 px-2 mb-4 md:w-1/3 lg:px-2.5 lg:mb-5"
                  key={index}
                >
                  <FAQCard
                    title={item.title.id}
                    onClick={() => {
                      setModalState(true)
                      document.querySelector('body').classList.add('faq')
                      setModalData(item)
                    }}
                  />
                </div>
              ) : (
                <div
                  className="w-1/2 px-2 mb-4 md:w-1/3 lg:px-2.5 lg:mb-5"
                  key={index}
                >
                  <FAQCard
                    title={item.title.en}
                    onClick={() => {
                      setModalState(true)
                      document.querySelector('body').classList.add('faq')
                      setModalData(item)
                    }}
                  />
                </div>
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
      </Layout>

      <BasicModal
        isOpen={modalState}
        onRequestClose={requestCloseModal}
        onAfterClose={afterCloseModal}
        classNameModalContent={`${modalData?.option ? 'odd' : 'even'}`}
        closeTimeoutMS={300}
      >
        <div className="fixed z-20 top-3 left-4 md:hidden">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className="group pointer-events-auto relative h-9 block"
          >
            <MorinLogo className="relative z-2 h-full w-full" />
            <div className="pointer-events-none absolute  top-[50%] left-[50%] -z-1 translate-x-[-50%] translate-y-[-50%] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <SunRaySmaller className="h-96 w-96 animate-spin-slow" />
            </div>
          </FancyLink>
        </div>
        <div className="flex flex-col justify-center w-full h-full bg-white absolute-center px-8 md:bg-transparent md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 text-morin-blue md:text-inherit">
          <span className="block font-nutmeg text-[22pt] md:text-h4 leading-tight mb-6 lg:font-bold lg:mb-8">
            {ctx.language === 'id' ? modalData?.title?.id : modalData?.title?.en}
          </span>
          <p className="text-default ">
            {ctx.language === 'id'
              ? modalData?.description?.id
              : modalData?.description?.en}
          </p>
        </div>
      </BasicModal>
    </motion.div>
  )
}

export async function getStaticProps() {
  const faqAPI = await client.fetch(`
  *[_type == "faq"]
  `)
  const faqListAPI = await client.fetch(`
  *[_type == "faqList"]
  `)
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const [seo] = seoAPI
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const translationAPI = await client.fetch(`
  *[_type == "translation"]
  `)
  const [translation] = translationAPI
    return {
      props: {
        faqAPI,
        faqListAPI,
        eventAPI,
        seoAPI,
        footerAPI,
        translation,
      },
    }
}

export default FAQ

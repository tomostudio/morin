import React, { useState, useEffect } from 'react'
import Layout from '@/components/module/layout'
import Container from '@/components/module/container'
import Header from '@/components/module/header'
import Footer from '@/components/module/footer'
import { FAQMobile, FAQDesktop } from '@/components/utils/svg'
import FAQCard from '@/components/module/FAQCard'
import BasicModal from '@/components/module/basicModal'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'

const FAQData = [
  {
    id: 1,
    question: 'Where can I get recipes using your product?',
    answer:
      'Silahkan kunjungi halaman resep kami untuk mencari resep dan tips berkreasi dengan Morin.',
  },
  {
    id: 2,
    question: 'Do I need to refrigerate your jam?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 3,
    question:
      'Do I have to refrigerate your Peanut Butter and Chocolate product?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 4,
    question: 'What is the difference between jam and spread?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 5,
    question: 'Where can I purchase the specific product?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 6,
    question: 'Are your products Halal?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 7,
    question:
      'I have a suggestion or idea for a new product/ promotion. How can I let you know?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 8,
    question: 'Is the product made in Indonesia?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
]

const FAQ = ({ faqAPI, faqListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [faq] = faqAPI
  const router = useRouter()
  const [modalData, setModalData] = useState(false)

  const closeModal = () => {
    setModalData(false)
  }

  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <div className="w-full bg-white">
      <SEO
        title={router.locale === 'id' ? 'Tanya Jawab' : 'Faq'}
        pagelink={router.pathname}
        inputSEO={router.locale === 'id' ? faq.seo_id : faq_seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && router.locale === 'id'
            ? seo.seo_id
            : seo.seo_en
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
              {router.locale === 'id'
                ? 'Pertanyaan yang Sering Diajukan'
                : 'Frequently Asked Questions'}
            </div>
            {/* <div className="max-w-[350px] mx-auto md:hidden">
              <FAQMobile />
            </div>
            <div className="hidden max-w-[970px] mx-auto md:block">
              <FAQDesktop />
            </div> */}
          </div>

          <div className="flex flex-wrap -mx-1 lg:-mx-2.5">
            {faqListAPI?.map((item, index) =>
              router.locale === 'id' ? (
                <div
                  className="w-1/2 px-1 mb-2 md:w-1/3 lg:px-2.5 lg:mb-5"
                  key={index}
                >
                  <FAQCard
                    title={item.title_id}
                    onClick={() => setModalData(item)}
                  />
                </div>
              ) : (
                <div
                  className="w-1/2 px-1 mb-2 md:w-1/3 lg:px-2.5 lg:mb-5"
                  key={index}
                >
                  <FAQCard
                    title={item.title_en}
                    onClick={() => setModalData(item)}
                  />
                </div>
              ),
            )}
          </div>
        </Container>

        <Footer lang={router.locale} />
      </Layout>

      <BasicModal
        isOpen={Object?.keys(modalData)?.length > 0 ? true : false}
        onRequestClose={closeModal}
        classNameModalContent={`${modalData?.option ? 'odd' : 'even'}`}
      >
        <div className="flex flex-col justify-center w-full h-full bg-white absolute-center px-8 md:bg-transparent md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0">
          <span className="block font-semibold text-mtitleSmall leading-tight mb-6 lg:font-bold lg:mb-8">
            {router.locale === 'id' ? modalData?.title_id : modalData?.title_en}
          </span>
          <p className="text-default lg:text-mtitleSmall">
            {router.locale === 'id'
              ? modalData?.description_id
              : modalData?.description_en}
          </p>
        </div>
      </BasicModal>
    </div>
  )
}

export async function getStaticProps() {
  const faqAPI = await client.fetch(`
  *[_type == "faq"]
  `)
  const faqListAPI = await client.fetch(`
  *[_type == "faqList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      faqAPI,
      faqListAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default FAQ

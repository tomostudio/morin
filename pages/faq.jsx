import React, { useState, useEffect } from 'react';
import Layout from '@/components/module/layout';
import Container from '@/components/module/container';
import Header from '@/components/module/header';
import Footer from '@/components/module/footer';
import { FAQMobile, FAQDesktop } from '@/components/utils/svg';
import FAQCard from '@/components/module/FAQCard';
import BasicModal from '@/components/module/basicModal';
import { useEffectInit } from '@/components/utils/preset';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';

const FAQ = ({ faqAPI, faqListAPI, seoAPI }) => {
  const [seo] = seoAPI;
  const [faq] = faqAPI;
  const router = useRouter();
  const [modalData, setModalData] = useState(false);

  const closeModal = () => {
    setModalData(false);
    document.querySelector('body').removeAttribute('class');
  };

  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true });
  }, []);

  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={fade}
      className='w-full bg-white'
    >
      <SEO
        title={ctx.language === 'id' ? 'Tanya Jawab' : 'Faq'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? faq.seo_id : faq.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Layout className='overflow-hidden pt-[86px] lg:pt-32'>
        <Container
          className='pl-0 pr-0'
          classNameOuter='px-4 mb-8 lg:px-8 lg:mb-12 xl:mb-14'
        >
          <div className='mb-16'>
            <div className=' w-full md:w-3/4 text-morin-blue mx-auto text-center font-nutmeg text-h2 lg:text-h1 leading-none  font-bold'>
              {ctx.language === 'id'
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

          <div className='flex flex-wrap -mx-1 lg:-mx-2.5'>
            {faqListAPI?.map((item, index) =>
              ctx.language === 'id' ? (
                <div
                  className='w-1/2 px-1 mb-2 md:w-1/3 lg:px-2.5 lg:mb-5'
                  key={index}
                >
                  <FAQCard
                    title={item.title_id}
                    onClick={() => {
                      document.querySelector('body').classList.add('faq');
                      setModalData(item);
                    }}
                  />
                </div>
              ) : (
                <div
                  className='w-1/2 px-1 mb-2 md:w-1/3 lg:px-2.5 lg:mb-5'
                  key={index}
                >
                  <FAQCard
                    title={item.title_en}
                    onClick={() => {
                      document.querySelector('body').classList.add('faq');
                      setModalData(item);
                    }}
                  />
                </div>
              )
            )}
          </div>
        </Container>

        <Footer lang={ctx.language} />
      </Layout>

      <BasicModal
        isOpen={Object?.keys(modalData)?.length > 0 ? true : false}
        onRequestClose={closeModal}
        classNameModalContent={`${modalData?.option ? 'odd' : 'even'}`}
      >
        <div className='flex flex-col justify-center w-full h-full bg-white absolute-center px-8 md:bg-transparent md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0'>
          <span className='block font-semibold text-mtitleSmall leading-tight mb-6 lg:font-bold lg:mb-8'>
            {ctx.language === 'id' ? modalData?.title_id : modalData?.title_en}
          </span>
          <p className='text-default lg:text-mtitleSmall'>
            {ctx.language === 'id'
              ? modalData?.description_id
              : modalData?.description_en}
          </p>
        </div>
      </BasicModal>
    </motion.div>
  );
};

export async function getStaticProps() {
  const faqAPI = await client.fetch(`
  *[_type == "faq"]
  `);
  const faqListAPI = await client.fetch(`
  *[_type == "faqList"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      faqAPI,
      faqListAPI,
      seoAPI,
      footerAPI,
    },
  };
}

export default FAQ;

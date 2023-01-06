import { useEffect } from 'react';
import client from '@/helpers/sanity/client';
import { useAppContext } from 'context/state';
import SEO from '@/components/utils/seo';
import { useEffectInit } from '@/components/utils/preset';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';

const Error500 = ({ seoAPI }) => {
  const [seo] = seoAPI;
  const router = useRouter();

  const ctx = useAppContext();
  useEffect(() => {
    ctx.setLangColor('black');
    useEffectInit({ context: ctx });
  }, []);

  return (
    <>
      <SEO
        title={'500'}
        pagelink={router.pathname}
        inputSEO={seo.seo?.id}
        defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        className='w-full bg-morin-skyBlue min-h-screen'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
      >
        <div className='w-full relative z-2 flex justify-center flex-col items-center  min-h-screen content'>
          <h1 className='text-morin-blue'>Error 500</h1>
          <p className='-mt-5'>Page Not Found</p>
        </div>
        <div className='w-screen h-screen absolute top-0 left-0 z-1 overflow-hidden'>
          <div className='w-screen aspect-1 absolute inset-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '>
            <Image
              src='/RAY.svg'
              layout='fill'
              objectFit='contain'
              className='animate-spin-slow'
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticProps() {
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
  `)
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `);
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `);
  const translationAPI = await client.fetch(`
      *[_type == "translation"]
      `);
  const [translation] = translationAPI;
  return {
    props: {
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  };
}

export default Error500;

import { useEffect } from 'react';
import Layout from '@/components/module/layout';
import Footer from '@/components/module/footer';
import Container from '@/components/module/container';
import React from 'react';
import ContactCard from '@/components/module/contactCard';
import { useEffectInit } from '@/components/utils/preset';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import { useRouter } from 'next/router';
import SEO from '@/components/utils/seo';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';

const Contact = ({ contactAPI, contactListAPI, seoAPI, footerAPI }) => {
  const [seo] = seoAPI;
  const [contact] = contactAPI;
  const [footer] = footerAPI
  const router = useRouter();
  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true });
  }, []);
  return (
    <Layout className='pt-[86px] lg:pt-32'>
      <SEO
        title={ctx.language === 'id' ? 'Kontak' : 'Contact'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? contact.seo_id : contact.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div initial='initial' animate='enter' exit='exit' variants={fade}>
        <Container
          className='pl-0 pr-0'
          classNameOuter='px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-16'
        >
          <h1 className='text-morin-blue text-ctitle font-nutmeg font-bold mx-auto mb-8 md:text-ctitleBig lg:text-h2 xl:text-h1 xl:mb-16'>
            {ctx.language === 'id' ? contact.title_id : contact.title_en}
          </h1>

          {contactListAPI?.map((item, index) => (
            <div className='mb-4 last:mb-0' key={index}>
              <ContactCard
                imageData={item.images}
                label={ctx.language === 'id' ? item.title_id : item.title_en}
                button={contact.btn_lang}
                companyName={item.name}
                description={
                  ctx.language === 'id'
                    ? item.description_id
                    : item.description_en
                }
                maps={item.maps}
                lang={ctx.language}
              />
            </div>
          ))}
        </Container>

        <Footer lang={ctx.language} button={seo.menu_lang} footer={footer} />
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const contactAPI = await client.fetch(`
  *[_type == "contact"]
  `);
  const contactListAPI = await client.fetch(`
  *[_type == "contactList"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      contactAPI,
      contactListAPI,
      seoAPI,
      footerAPI,
    },
  };
}

export default Contact;

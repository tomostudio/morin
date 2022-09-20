import Container from '@/components/module/container';
import Layout from '@/components/module/layout';
import Header from '@/components/module/header';
import Footer from '@/components/module/footer';
import Image from 'next/image';
import colors from '@/helpers/colors';
import HighlightCard from '@/components/shared-module/highlightCard';
import { useEffectInit } from '@/components/utils/preset';
import { useEffect } from 'react';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import { PortableText } from '@portabletext/react';
import urlFor from '@/helpers/sanity/urlFor';
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';
import dateParse from '@/components/utils/dateParse';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import { useNextSanityImage } from 'next-sanity-image';

const EventTag = ({ label }) => {
  return (
    <div className='flex items-center h-6 font-semibold leading-none border-2 border-solid border-morin-blue rounded-full px-4 mr-2 last:mr-0 md:h-8 md:mr-5'>
      <span className='pt-0.5 md:pt-1'>{label}</span>
    </div>
  );
};

const EventDetail = ({
  eventAPI,
  eventListAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [seo] = seoAPI
  const [event] = eventAPI
  const [footer] = footerAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor("black")
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <Layout className='overflow-hidden pt-[86px] lg:pt-32'>
      <SEO
        title={ctx.language == 'id' ? event.title.id : event.title.en}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? event.seo?.id : event.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div
        className='w-full '
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
      >
        <div className='text-morin-blue leading-tight'>
          <div className='text-center mb-7 md:mb-10  '>
            <span className='block font-semibold mb-2.5'>
              {dateParse(event.date, ctx.language, true)}
            </span>
            <h1 className='font-nutmeg text-[48px] mx-auto mb-3 md:text-h1 md:mb-4 max-w-screen-xl font-bold'>
              {ctx.language === 'id' ? event.title.id : event.title.en}
            </h1>
            {event.eventCategory?.length > 0 && (
              <div className='flex flex-wrap items-center justify-center'>
                {event.eventCategory?.map((item, id) => (
                  <EventTag
                    label={
                      ctx.language === 'id' ? item.title.id : item.title.en
                    }
                    key={id}
                  />
                ))}
              </div>
            )}
          </div>

          <div className=' w-full px-4 md:px-0 mb-7 md:mb-10 md:w-content max-w-screen-md max-h-max mx-auto flex justify-center'>
            <Image
              className='rounded-2xl overflow-hidden'
              {...useNextSanityImage(client, event.cover_image)}
              layout='intrinsic'
            />
          </div>
          <div className='lg:max-w-screen-2xl lg:px-8 mb-8 lg:mb-14 mx-auto content'>
            <PortableText
              value={
                ctx.language === 'id'
                  ? event.description?.id
                  : event.description?.en
              }
              components={{
                block: {
                  normal: ({ children }) =>
                    children[0] === '' ? <br /> : <p>{children}</p>,
                  h1: ({ children }) => <h1>{children}</h1>,
                  h2: ({ children }) => <h2>{children}</h2>,
                  h3: ({ children }) => <h3>{children}</h3>,
                  h4: ({ children }) => <h4>{children}</h4>,
                  h5: ({ children }) => <h5>{children}</h5>,
                },
                types: {
                  imageComponent: (props) => {
                    const imageProps = useNextSanityImage(
                      client,
                      props.value.image
                    );
                    if (props.value.option) {
                      return (
                        <div className='image '>
                          <Image
                            {...imageProps}
                            layout='intrinsic'
                            objectFit='cover'
                            objectPosition={'center center'}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div className='image fit '>
                          <div>
                            <Image {...imageProps} layout='intrinsic' />
                          </div>
                        </div>
                      );
                    }
                  },
                },
              }}
            />
          </div>
        </div>

        <div className='w-full flex flex-col bg-morin-skyBlue justify-center relative pb-0 rounded-t-[40px] py-10'>
          <div className='mx-auto w-full flex flex-col px-8 max-w-screen-2xl '>
            <div className='mb-7 md:mb-8 lg:mb-10'>
              <h2 className='font-nutmeg font-normal text-mtitleSmall text-center text-morin-blue mb-7 lg:mb-12'>
                {ctx.language === 'id'
                  ? translation.eventLanguage.event.title.id
                  : translation.eventLanguage.event.title.en}
              </h2>

              <div className='flex flex-wrap md:flex-nowrap mx-auto md:max-w-4xl md:space-x-3'>
                {eventListAPI?.slice(0, 2).map((item, index) => (
                  <div
                    className='w-full mb-4 md:w-1/2 md:mb-0'
                    key={`${item.title.en}[${index}]`}
                  >
                    <HighlightCard
                      imgSrc={urlFor(item.thumbnail)
                        .auto('format')
                        .url()}
                      imgPlaceholder={urlFor(item.thumbnail)
                        .auto('format')
                        .width(200)
                        .blur(25)
                        .url()}
                      imgAlt={item.thumbnail.alt}
                      date={dateParse(item.date, ctx.language)}
                      title={
                        ctx.language === 'id' ? item.title.id : item.title.en
                      }
                      button={translation.eventLanguage.event.btn}
                      link={`/events/${item.slug.current}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer
            lang={ctx.language}
            button={translation.menu_lang}
            faq={seo.advance_setting.hide_faq}
            mailchimp={footer.mailchimpID}
            footer={footer}
            translation={translation}
          />
        </div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "eventList"]
      `);

  const paths = [];

  res.map((data) => {
    return paths.push({
      params: {
        eventSlug: data.slug.current,
      },
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const eventAPI = await client.fetch(
    `
      *[_type == "eventList" && slug.current == "${params.eventSlug}"] {
        ...,
        eventCategory[]->,
      } 
    `
  );
  const eventListAPI = await client.fetch(`
  *[_type == "eventList"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `);
  const [translation] = translationAPI;

  return {
    props: {
      eventAPI,
      eventListAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  };
}

export default EventDetail;

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

const EventTag = ({ label }) => {
  return (
    <div className='flex items-center h-6 font-semibold leading-none border-2 border-solid border-morin-blue rounded-full px-4 mr-2 last:mr-0 md:h-8 md:mr-5'>
      <span className='pt-0.5 md:pt-1'>{label}</span>
    </div>
  );
};

const EventDetail = ({ eventAPI, eventListAPI, seoAPI }) => {
  const [seo] = seoAPI;
  const [event] = eventAPI;
  const router = useRouter();
  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true });
  }, []);

  return (
    <Layout className='overflow-hidden pt-[86px] lg:pt-32'>
      <SEO
        title={ctx.language == 'id' ? event.title_id : event.title_en}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? event.seo_id : event.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
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
          <div className='text-center mb-7 md:mb-10 lg:mb-12 xl:mb-16'>
            <span className='block font-semibold mb-2.5'>
              {dateParse(event.date, ctx.language, true)}
            </span>
            <h1 className='font-nutmeg text-mtitleBig mx-auto mb-3 md:text-h2 md:max-w-md md:mb-4'>
              {ctx.language === 'id' ? event.title_id : event.title_en}
            </h1>
            {event.eventCategory?.length > 0 && (
              <div className='flex flex-wrap items-center justify-center'>
                {event.eventCategory?.map((item) => (
                  <EventTag
                    label={
                      ctx.language === 'id' ? item.title_id : item.title_en
                    }
                  />
                ))}
              </div>
            )}
          </div>

          <div className='lg:max-w-screen-2xl lg:px-8 mb-8 lg:mb-14 mx-auto'>
            <PortableText
              value={
                ctx.language === 'id'
                  ? event.description_id
                  : event.description_en
              }
              components={{
                block: {
                  normal: ({ children }) =>
                    children[0] === '' ? (
                      <br />
                    ) : (
                      <div className='max-w-screen-md mx-auto'>
                        <div className='font-medium leading-relaxed'>
                          <p className='mb-4 md:mb-5'>{children}</p>
                        </div>
                      </div>
                    ),
                  h1: ({ children }) => (
                    <div className='max-w-screen-md mx-auto'>
                      <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                        {children}
                      </h2>
                    </div>
                  ),
                  h2: ({ children }) => (
                    <div className='max-w-screen-md mx-auto'>
                      <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                        {children}
                      </h2>
                    </div>
                  ),
                  h3: ({ children }) => (
                    <div className='max-w-screen-md mx-auto'>
                      <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                        {children}
                      </h2>
                    </div>
                  ),
                  h4: ({ children }) => (
                    <div className='max-w-screen-md mx-auto'>
                      <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                        {children}
                      </h2>
                    </div>
                  ),
                  h5: ({ children }) => (
                    <div className='max-w-screen-md mx-auto'>
                      <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                        {children}
                      </h2>
                    </div>
                  ),
                },
                types: {
                  imageComponent: (props) =>
                    props.value.option ? (
                      <div className='relative w-full h-full aspect-w-16 aspect-h-9 mx-auto mb-8 px-8 lg:rounded-2xl overflow-hidden md:mb-10 lg:mb-12'>
                        <Image
                          src={urlFor(props.value.image)
                            .auto('format')
                            .width(1800)
                            .url()}
                          blurDataURL={urlFor(props.value.image)
                            .auto('format')
                            .width(1500)
                            .blur(25)
                            .url()}
                          alt={props.value.image.alt}
                          placeholder='blur'
                          layout='fill'
                          objectFit='cover'
                          objectPosition='center'
                        />
                      </div>
                    ) : (
                      <div className='max-w-screen-md mx-auto'>
                        <div className='relative max-w-xl mx-auto rounded-xl overflow-hidden mb-8 md:mb-10 h-30rem max-md:h-56 lg:mb-12'>
                          <Image
                            src={urlFor(props.value.image)
                              .auto('format')
                              .width(650)
                              .url()}
                            blurDataURL={urlFor(props.value.image)
                              .auto('format')
                              .width(500)
                              .blur(25)
                              .url()}
                            alt={props.value.image.alt}
                            placeholder='blur'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                          />
                        </div>
                      </div>
                    ),
                },
              }}
            />
          </div>
        </div>

        <div className='w-full flex flex-col bg-morin-skyBlue justify-center relative pb-0 rounded-t-[40px] py-10'>
          <div className='mx-auto w-full flex flex-col px-4 lg:px-8 max-w-screen-2xl '>
            <div className='mb-7 md:mb-8 lg:mb-10'>
              <h2 className='font-nutmeg font-normal text-mtitleSmall text-center text-morin-blue mb-7 lg:mb-12'>
                {ctx.language === 'id' ? 'Acara Lainnya' : 'Other Events'}
              </h2>

              <div className='flex flex-wrap mx-auto md:max-w-4xl'>
                {eventListAPI?.slice(0, 2).map((item, index) => (
                  <div
                    className='w-full mb-2 md:w-1/2 md:mb-0 md:px-2.5'
                    key={`${item.title_en}[${index}]`}
                  >
                    <HighlightCard
                      imgSrc={urlFor(item.thumbnail)
                        .auto('format')
                        .width(400)
                        .url()}
                      imgPlaceholder={urlFor(item.thumbnail)
                        .auto('format')
                        .width(200)
                        .blur(25)
                        .url()}
                      imgAlt={item.thumbnail.alt}
                      date={dateParse(item.date, ctx.language)}
                      title={
                        ctx.language === 'id' ? item.title_id : item.title_en
                      }
                      link={`/events/${item.slug.current}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer lang={ctx.language} />
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
  `);

  return {
    props: {
      eventAPI,
      eventListAPI,
      seoAPI,
      footerAPI,
    },
  };
}

export default EventDetail;

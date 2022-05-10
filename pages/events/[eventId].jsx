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

const EventTag = ({ label }) => {
  return (
    <div className='flex items-center h-6 font-semibold leading-none border-2 border-solid border-morin-blue rounded-full px-4 mr-2 last:mr-0 md:h-8 md:mr-5'>
      <span className='pt-0.5 md:pt-1'>{label}</span>
    </div>
  );
};

const eventCategory = ['Group Event', 'Tour'];

const highlightData = [
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Morin in UPH',
    title: 'Morin in UPH',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-2.jpg',
    imgPlaceholder: '/highlight/highlight-2.png',
    imgAlt: 'Cooking Workshop',
    title: 'Cooking Workshop',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
];

const EventDetail = () => {
  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true });
  }, []);

  return (
    <Layout className='overflow-hidden pt-[86px] lg:pt-32'>
      <Header hamburgerColor='bg-black' />

      <div className='text-morin-blue leading-tight'>
        <div className='text-center mb-7 md:mb-10 lg:mb-12 xl:mb-16'>
          <span className='block font-semibold mb-2.5'>
            Thursday, 21-06-2021
          </span>
          <h1 className='font-nutmeg text-mtitleBig mx-auto mb-3 md:text-h2 md:max-w-md md:mb-4'>
            Factory Tour with SDN
          </h1>
          {eventCategory?.length > 0 && (
            <div className='flex flex-wrap items-center justify-center'>
              {eventCategory?.map((item) => (
                <EventTag label={item} />
              ))}
            </div>
          )}
        </div>

        <div className='lg:max-w-screen-2xl lg:px-8 mb-8 lg:mb-14'>
          <div className='relative w-full h-full lg:h-[700px] aspect-w-16 aspect-h-9 mx-auto mb-8 px-8 lg:rounded-2xl overflow-hidden md:mb-10 lg:mb-12'>
            <Image
              src='/event/detail-1.jpg'
              blurDataURL='/event/detail-1.png'
              placeholder='blur'
              // width={1200}
              // height={700}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>

          <Container className='mt-8 lg:mt-0'>
            <div className='max-w-screen-md mx-auto'>
              <h2 className='text-mtitleSmall font-nutmeg font-normal leading-snug mb-7 lg:text-mtitleBig lg:mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum turpis aliquam, viverra netus amet in vel auctor amet
                sit.
              </h2>

              <div className='mb-8 md:mb-10 lg:px-24 lg:mb-12 xl:px-28'>
                <Image
                  src='/event/detail-2.jpg'
                  blurDataURL='/event/detail-2.png'
                  placeholder='blur'
                  width={590}
                  height={400}
                  layout='responsive'
                />
              </div>

              <div className='font-medium leading-relaxed'>
                <p className='mb-4 md:mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Bibendum turpis aliquam, viverra netus amet in vel auctor
                  amet. Scelerisque a sagittis ornare in sit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Bibendum turpis
                  aliquam, viverra netus amet in vel auctor amet. Scelerisque a
                  sagittis ornare in sit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Bibendum turpis aliquam.
                </p>

                <p className='mb-4 md:mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Bibendum turpis aliquam, viverra netus amet in vel auctor
                  amet. Scelerisque a sagittis ornare in sit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Bibendum turpis
                  aliquam, viverra netus amet in vel auctor amet. Scelerisque a
                  sagittis ornare in sit.
                </p>

                <p className='mb-4 md:mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Bibendum turpis aliquam, viverra netus amet in vel auctor
                  amet. Scelerisque a sagittis ornare in sit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Bibendum turpis
                  aliquam, viverra netus amet in vel auctor amet. Scelerisque a
                  sagittis ornare in sit.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className='w-full flex flex-col bg-morin-skyBlue justify-center relative pb-0 rounded-t-[40px] py-10'>
        <div className='mx-auto w-full flex flex-col px-4 lg:px-8 max-w-screen-2xl '>
          <div className='mb-7 md:mb-8 lg:mb-10'>
            <h2 className='font-nutmeg font-normal text-mtitleSmall text-center text-morin-blue mb-7 lg:mb-12'>
              Other Events
            </h2>

            <div className='flex flex-wrap mx-auto md:max-w-4xl'>
              {highlightData?.map((item, index) => (
                <div
                  className='w-full mb-2 md:w-1/2 md:mb-0 md:px-2.5'
                  key={`${item.title}[${index}]`}
                >
                  <HighlightCard
                    imgSrc={item.imgSrc}
                    imgPlaceholder={item.imgPlaceholder}
                    imgAlt={item.imgAlt}
                    date={item.date}
                    title={item.title}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default EventDetail;

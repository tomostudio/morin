import { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Layout from '@/components/module/layout';
import Header from '@/components/module/header';
import Footer from '@/components/module/footer';
import Container from '@/components/module/container';
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx';
import FancyLink from '@/components/utils/fancyLink';
import { fade } from '@/helpers/transitions';
import locooptions from '@/helpers/locooptions';
import colors from '@/helpers/colors';
import PushScrollGlobal from '@/helpers/globalscroll';
import HeroSlider from '@/components/sliders/heroSlider';
import HighlightSlider from '@/components/sliders/highlightSlider';
import InstagramSlider from '@/components/sliders/instagramSlider';
import RecipeSlider from '@/components/sliders/recipeSlider';
import StrokeButton from '@/components/micro-module/strokeButton';
import SolidButton from '@/components/micro-module/solidButton';
import HeroCategory from '@/components/module/heroCategory';
import { HeartSmall, HeartLarge, Scribble } from '@/components/utils/svg';
import { useEffectInit } from '@/components/utils/preset';
import client from '@/helpers/sanity/client';
import { useAppContext } from 'context/state';

export default function Home({ homeAPI, seoAPI, footerAPI }) {
  const [home] = homeAPI;
  const categoryData = [
    {
      imgSrc: '/category/category-1.jpg',
      imgProduct: '/category/hover-1.png',
      imgPlaceholder: '/category/category-1.png',
      imgAlt: 'Spreads',
      title: 'Spreads',
      link: '/products/spreads',
    },
    {
      imgSrc: '/category/category-2.jpg',
      imgProduct: '/category/hover-2.png',
      imgPlaceholder: '/category/category-2.png',
      imgAlt: 'Jams',
      title: 'Jams',
      link: '/products/jams',
    },
    {
      imgSrc: '/category/category-3.jpg',
      imgProduct: '/category/hover-3.png',
      imgPlaceholder: '/category/category-3.png',
      imgAlt: 'Toppings',
      title: 'Toppings',
      link: '/products/toppings',
    },
    {
      imgSrc: '/category/category-4.jpg',
      imgProduct: '/category/hover-4.png',
      imgPlaceholder: '/category/category-4.png',
      imgAlt: 'Fillings',
      title: 'Fillings',
      link: '/products/fillings',
    },
  ];

  const recipeData = [
    {
      imgSrc: '/recipe/recipe-1.jpg',
      imgPlaceholder: '/recipe/recipe-1.png',
      imgAlt: 'Mixed Berry Jam Tartlets',
      title: 'Mixed Berry Jam Tartlets',
      link: '/recipe/recipe-id',
    },
    {
      imgSrc: '/recipe/recipe-2.jpg',
      imgPlaceholder: '/recipe/recipe-2.png',
      imgAlt: 'Strawberry Trifle',
      title: 'Strawberry Trifle',
      link: '/recipe/recipe-id',
    },
    {
      imgSrc: '/recipe/recipe-3.jpg',
      imgPlaceholder: '/recipe/recipe-3.png',
      imgAlt: 'Chocolate Fudge Cupcakes',
      title: 'Chocolate Fudge Cupcakes',
      link: '/recipe/recipe-id',
    },
  ];

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
    {
      imgSrc: '/highlight/highlight-1.jpg',
      imgPlaceholder: '/highlight/highlight-1.png',
      imgAlt: 'Brown Fox Jumps',
      title: 'Brown Fox Jumps',
      date: '24 Juli 2021',
      link: '/highlight/highlight-id',
    },
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
    {
      imgSrc: '/highlight/highlight-1.jpg',
      imgPlaceholder: '/highlight/highlight-1.png',
      imgAlt: 'Brown Fox Jumps',
      title: 'Brown Fox Jumps',
      date: '24 Juli 2021',
      link: '/highlight/highlight-id',
    },
  ];

  const context = useAppContext();
  useEffect(() => {
    useEffectInit();

    // Remove Watermark for Instagram
    setTimeout(() => {
      if (document.querySelector('.eapps-link'))
        document.querySelector('.eapps-link').remove();
    }, 1000);

    context.setMobileDark(true);
    console.log(context);

    return () => {};
  }, []);

  return (
    <>
      <NextSeo />
      {/* <Header mobileDark={false} /> */}
      <LazyMotion features={domAnimation}>
        <m.div initial='initial' animate='enter' exit='exit' variants={fade}>
          <Layout>
            {/* Slider Section */}
            <section className='scrollsection'>
              <HeroSlider data={home} className='min-h-screen w-full' />
            </section>
            {/* Sticky Section */}
            <section className='z-0'>
              <Container
                border={false}
                background={colors.offWhite}
                bgTail={false}
                safeWidth={false}
                className='!px-0 z-1'
              >
                <div className='flex w-full flex-col lg:flex-row flex-nowrap lg:items-start'>
                  {/* Sticky */}
                  <div className='home-sticky w-full shrink-0 px-8 lg:sticky lg:top-[86px] lg:min-w-fit lg:flex lg:min-h-[calc(100vh-86px)] lg:w-3/12 lg:flex-col lg:justify-between 2xl:px-0'>
                    <div className='mt-24 mb-20 lg:mt-7 lg:max-w-sm lg:pr-8 max-w-lg mx-auto flex flex-col items-center justify-center lg:items-start just'>
                      <h2 className=' mb-5 text-center font-nutmeg text-mtitle font-normal leading-tight text-morin-blue lg:mb-[30px] lg:text-left lg:text-ctitleSmall xl:leading-[32px] '>
                        Jodohnya Roti! Lorem Ipsum sit Amet Lorem Ipsum Amet
                        Lorem.
                      </h2>
                      <StrokeButton
                        destination='/products'
                        color={colors.morinBlue}
                        className='lg:mx-0'
                      >
                        See All Products
                      </StrokeButton>
                    </div>
                    <div className='mx-auto mb-5 flex flex-wrap justify-center lg:mx-0 lg:mb-10 space-x-4 lg:space-x-6 lg:justify-start'>
                      <div className='relative h-8 w-8 lg:h-12 lg:w-12'>
                        <Image
                          src={`/halal.svg`}
                          alt={'Halal'}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                      <div className='relative h-8 w-8 lg:h-12 lg:w-12'>
                        <Image
                          src={`/pom.svg`}
                          alt={'Badan POM'}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                      <div className='relative  -8 w-8 lg:h-12 lg:w-12'>
                        <Image
                          src={`/topbrand.svg`}
                          alt={'Top Brand'}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='shrink w-full'>
                    {categoryData?.map((i, id) => {
                      return (
                        <div className='relative h-screen' key={i.title}>
                          <HeroCategory
                            imgSrc={i.imgSrc}
                            imgProduct={i.imgProduct}
                            imgPlaceholderProduct={i.imgProduct}
                            imgPlaceholder={i.imgPlaceholder}
                            imgAlt={i.imgAlt}
                            title={i.title}
                            link={i.link}
                            end={id >= categoryData.length - 1 && true}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Container>
            </section>
            <section>
              <Container
                border={true}
                background={colors.morinPeach}
                bgTail={true}
                safeWidth={true}
              >
                <div className='flex w-full flex-wrap'>
                  <div className='mb-8 w-full text-center md:w-7/12 md:text-left lg:mb-5 xl:mb-11 xl:w-8/12'>
                    <h2 className='relative mx-auto mb-4 max-w-[175px] font-nutmeg text-ctitle font-bold leading-tight text-morin-red md:mx-0 md:mb-2 md:max-w-fit lg:text-h2 lg:leading-tight xl:text-h1'>
                      Recipes <br className='md:hidden' /> from Love
                      <div className='absolute -top-0.5 left-[calc(100%-15px)] w-8 md:hidden'>
                        <HeartSmall className='md:hidden' />
                      </div>
                      <div className='lg:w-18 absolute -top-1 left-[calc(100%+5px)] hidden w-14 md:block lg:top-2 lg:left-[calc(100%+10px)] xl:w-24'>
                        <HeartLarge className='hidden md:block' />
                      </div>
                    </h2>
                    <p className='mx-auto max-w-[300px]  text-morin-red text-defaultSmall md:mx-0 lg:max-w-[500px] lg:text-default xl:max-w-[600px]'>
                      Lorem Ipsum Dolor sit Amet Lorem Ipsum Dolor sit Amet
                      Lorem Ipsum Dolor sit Amet Lorem Ipsum Amet Lorem Ipsum.
                    </p>
                  </div>
                  <div className='order-3 w-full md:order-none md:ml-auto md:w-fit md:pl-12'>
                    <StrokeButton
                      destination='/recipes'
                      color={colors.morinRed}
                    >
                      See All Recipes
                    </StrokeButton>
                  </div>
                  <div className='-mx-8 mb-8 w-[calc(100%+64px)] md:-mx-4 md:mb-0 md:w-[calc(100%+32px)]'>
                    <RecipeSlider data={recipeData} />
                  </div>
                </div>
              </Container>
            </section>
            <section>
              <Container
                border={true}
                background={colors.morinSkyBlue}
                bgTail={true}
                safeWidth={false}
                classNameOuter='pb-0'
              >
                <Container
                  border={false}
                  background={'transparent'}
                  bgTail={false}
                  safeWidth={true}
                >
                  <div className='flex w-full flex-wrap'>
                    <div className='mb-6 w-full text-center md:w-7/12 md:text-left lg:mb-10 xl:mb-14 xl:w-8/12'>
                      <h2 className='relative mx-auto mb-0 max-w-[160px] pb-5 font-nutmeg text-ctitle font-bold leading-none text-morin-blue md:mx-0 md:mb-2 md:w-fit md:max-w-none md:pb-0 lg:text-h2'>
                        Events Highlight
                        <div className='absolute left-1/2 bottom-0 h-3.5 w-full -translate-x-1/2 md:left-auto md:right-0 md:-bottom-4 md:w-40 md:translate-x-0 lg:-bottom-5 lg:h-5 lg:w-60'>
                          <Scribble />
                        </div>
                      </h2>
                    </div>
                    <div className='ml-auto hidden w-fit pl-12 md:block'>
                      <StrokeButton
                        destination='/events'
                        color={colors.morinBlue}
                      >
                        See All Events
                      </StrokeButton>
                    </div>
                  </div>
                </Container>
                <div className='relative overflow-hidden bg-morin-skyBlue px-8 pb-10 md:px-0 xl:pb-14'>
                  <HighlightSlider data={highlightData} />
                  <div className='mx-auto mt-7 w-fit md:hidden'>
                    <StrokeButton
                      destination='/events'
                      color={colors.morinBlue}
                    >
                      See All Events
                    </StrokeButton>
                  </div>
                  <div
                    className={`absolute bottom-0 -z-1 h-10 w-full translate-y-full bg-morin-skyBlue`}
                  />
                </div>
              </Container>
            </section>
            <section>
              <Container
                border={true}
                bgTail={false}
                safeWidth={true}
                background={colors.white}
                classNameOuter='pb-0'
              >
                <div className='mb-8 flex w-full flex-nowrap flex-col lg:flex-row'>
                  <h2 className='mx-auto mt-0 mb-2 w-full max-w-[260px] text-center font-nutmeg text-mtitleSmall font-normal leading-tight text-morin-blue md:mx-0 md:mb-0 md:w-[calc(100%-135px)] md:max-w-none md:pr-4 md:text-left lg:text-ctitle xl:text-mtitleBig'>
                    Get Daily Inspirations from our Social Media
                  </h2>
                  <div>
                    <SolidButton
                      destination='https://www.instagram.com/morin_jam/'
                      arrow={false}
                      targetBlank={true}
                      color={colors.morinBlue}
                    >
                      @morin_jam
                    </SolidButton>
                  </div>
                </div>
              </Container>
              <div className='pb-10 xl:pb-14'>
                {/* <InstagramSlider /> */}
                <script
                  src='https://apps.elfsight.com/p/platform.js'
                  defer
                ></script>
                <div className='elfsight-app-401f1315-3937-4774-a0c6-f84f38d62aae'></div>
              </div>
            </section>
            <Footer />
          </Layout>
        </m.div>
      </LazyMotion>
    </>
  );
}

export async function getStaticProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      homeAPI,
      seoAPI,
      footerAPI,
    },
  };
}

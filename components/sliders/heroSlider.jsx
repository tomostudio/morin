import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import Container from '../module/container';
import StrokeButton from '../micro-module/strokeButton';
import colors from '@/helpers/colors';
import urlFor from '@/helpers/sanity/urlFor';

const HeroSlider = ({ data, className, lang }) => {
  return (
    <div className='hero-slider'>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        effect='fade'
        speed={1000}
        className={`${className}`}
      >
        {lang === 'id'
          ? data.component_id.map((item, index) =>
              item.option ? (
                <SwiperSlide key={index}>
                  <div className='relative w-screen h-screen'>
                    <Container className='h-screen z-1'>
                      <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className='mx-auto md:hidden'>
                          <Image
                            src={urlFor(item.textImage.imageMobile)
                              .auto('format')
                              .url()}
                            // placeholder={``}
                            alt={item.textImage.imageDesktop.alt}
                            width={350}
                            height={230}
                          />
                        </div>
                        <div className='mx-auto hidden md:block'>
                          <Image
                            src={urlFor(item.textImage.imageDesktop)
                              .auto('format')
                              .url()}
                            // placeholder={``}
                            alt={item.textImage.imageDesktop.alt}
                            width={950}
                            height={375}
                          />
                        </div>

                        <StrokeButton
                          destination='/products'
                          color={colors.white}
                          className='mt-5 md:mt-0'
                        >
                          Temukan lebih banyak lagi
                        </StrokeButton>
                      </div>
                    </Container>

                    <Image
                      src={urlFor(item.background)
                        .auto('format')
                        .width(1920)
                        .url()}
                      blurDataURL={urlFor(item.background)
                        .auto('format')
                        .width(800)
                        .blur(50)
                        .url()}
                      placeholder='blur'
                      alt={item.background.alt}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={index}>
                  <div className='relative w-screen h-screen'>
                    <Container className='h-screen z-1'>
                      <div className='w-full h-full flex flex-col justify-center'>
                        <span className='max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight'>
                          {item.title}
                        </span>
                        <StrokeButton
                          destination='/products'
                          color={colors.white}
                          className='mt-5'
                        >
                          Temukan lebih banyak lagi
                        </StrokeButton>
                      </div>
                    </Container>

                    <Image
                      src={urlFor(item.background)
                        .auto('format')
                        .width(1920)
                        .url()}
                      blurDataURL={urlFor(item.background)
                        .auto('format')
                        .width(800)
                        .blur(50)
                        .url()}
                      placeholder='blur'
                      alt={item.background.alt}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </SwiperSlide>
              )
            )
          : data.component_en.map((item, index) =>
              item.option ? (
                <SwiperSlide key={index}>
                  <div className='relative w-screen h-screen'>
                    <Container className='h-screen z-1'>
                      <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className='mx-auto md:hidden'>
                          <Image
                            src={urlFor(item.textImage.imageMobile).url()}
                            // placeholder={``}
                            alt={item.textImage.imageDesktop.alt}
                            width={350}
                            height={230}
                          />
                        </div>
                        <div className='mx-auto hidden md:block'>
                          <Image
                            src={urlFor(item.textImage.imageDesktop).url()}
                            // placeholder={``}
                            alt={item.textImage.imageDesktop.alt}
                            width={950}
                            height={375}
                          />
                        </div>

                        <StrokeButton
                          destination='/products'
                          color={colors.white}
                          className='mt-5 md:mt-0'
                        >
                          Find Out More
                        </StrokeButton>
                      </div>
                    </Container>

                    <Image
                      src={urlFor(item.background)
                        .auto('format')
                        .width(1920)
                        .url()}
                      blurDataURL={urlFor(item.background)
                        .auto('format')
                        .width(800)
                        .blur(50)
                        .url()}
                      placeholder='blur'
                      alt={item.background.alt}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={index}>
                  <div className='relative w-screen h-screen'>
                    <Container className='h-screen z-1'>
                      <div className='w-full h-full flex flex-col justify-center'>
                        <span className='max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight'>
                          {item.title}
                        </span>
                        <StrokeButton
                          destination='/products'
                          color={colors.white}
                          className='mt-5'
                        >
                          Find Out More
                        </StrokeButton>
                      </div>
                    </Container>

                    <Image
                      src={urlFor(item.background)
                        .auto('format')
                        .width(1920)
                        .url()}
                      blurDataURL={urlFor(item.background)
                        .auto('format')
                        .width(800)
                        .blur(50)
                        .url()}
                      placeholder='blur'
                      alt={item.background.alt}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </SwiperSlide>
              )
            )}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

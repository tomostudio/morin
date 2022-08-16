import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import Container from '../module/container'
import StrokeButton from '../micro-module/strokeButton'
import colors from '@/helpers/colors'
import urlFor from '@/helpers/sanity/urlFor'

const HeroSlider = ({ data, className, lang }) => {
  return (
    <div className="hero-slider">
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
        effect="fade"
        speed={1000}
        className={`${className}`}
      >
        {lang === 'id'
          ? data.component_id.map((item, index) =>
              item.option ? (
                <SwiperSlide key={index}>
                  <div className="relative w-screen h-screen">
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="relative w-full h-64 mx-auto md:hidden">
                          <Image
                            src={urlFor(item.textImage.imageMobile).url()}
                            blurDataURL={urlFor(
                              item.textImage.imageMobile,
                            ).url()}
                            placeholder="blur"
                            alt={item.textImage.imageDesktop.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>
                        <div className="relative w-full max-w-[950px] h-80 mx-auto hidden md:flex md:justify-center">
                          <Image
                            src={urlFor(item.textImage.imageDesktop).url()}
                            blurDataURL={urlFor(
                              item.textImage.imageDesktop,
                            ).url()}
                            placeholder="blur"
                            alt={item.textImage.imageDesktop.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>

                        <StrokeButton
                          destination="/products"
                          color={colors.white}
                          hover="black"
                          className="mt-5 md:mt-0"
                        >
                          {lang === 'en'
                            ? data.language.btn_slider.en
                            : data.language.btn_slider.id}
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
                      placeholder="blur"
                      alt={item.background.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={index}>
                  <div className="relative w-screen h-screen">
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center">
                        <span className="max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight">
                          {item.title}
                        </span>
                        <StrokeButton
                          destination="/products"
                          hover="black"
                          color={colors.white}
                          className="mt-5"
                        >
                          {lang === 'en'
                            ? data.language.btn_slider.en
                            : data.language.btn_slider.id}
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
                      placeholder="blur"
                      alt={item.background.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ),
            )
          : data.component_en.map((item, index) =>
              item.option ? (
                <SwiperSlide key={index}>
                  <div className="relative w-screen h-screen">
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="relative w-full h-64 mx-auto md:hidden">
                          <Image
                            src={urlFor(item.textImage.imageMobile).url()}
                            blurDataURL={urlFor(
                              item.textImage.imageMobile,
                            ).url()}
                            placeholder="blur"
                            alt={item.textImage.imageDesktop.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>
                        <div className="relative w-full max-w-[950px] h-80 mx-auto hidden md:flex md:justify-center">
                          <Image
                            src={urlFor(item.textImage.imageDesktop).url()}
                            blurDataURL={urlFor(
                              item.textImage.imageDesktop,
                            ).url()}
                            placeholder="blur"
                            alt={item.textImage.imageDesktop.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>

                        <StrokeButton
                          destination="/products"
                          hover="black"
                          color={colors.white}
                          className="mt-5 md:mt-0"
                        >
                          {lang === 'en'
                            ? data.language.btn_slider.en
                            : data.language.btn_slider.id}
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
                      placeholder="blur"
                      alt={item.background.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={index}>
                  <div className="relative w-screen h-screen">
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center">
                        <span className="max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight">
                          {item.title}
                        </span>
                        <StrokeButton
                          destination="/products"
                          hover="black"
                          color={colors.white}
                          className="mt-5"
                        >
                          {lang === 'en'
                            ? data.language.btn_slider.en
                            : data.language.btn_slider.id}
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
                      placeholder="blur"
                      alt={item.background.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ),
            )}
      </Swiper>
    </div>
  )
}

export default HeroSlider

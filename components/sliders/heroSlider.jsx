import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import Container from '../module/container'
import StrokeButton from '../micro-module/strokeButton'
import colors from '@/helpers/colors'
import urlFor from '@/helpers/sanity/urlFor'
import { useAppContext } from 'context/state'
import { useEffect } from 'react'

const HeroSlider = ({ data, className, lang }) => {
  useEffect(() => {
    lang === 'id'
      ? ctx.setLangColor(data.component.id[0].langColor)
      : ctx.setLangColor(data.component.en[0].langColor)
  }, [])

  const ctx = useAppContext()
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        className={`${className}`}
        onTransitionEnd={(e) => {
          const currentSlide = () => {
            const idLength = data.component.id.length
            const enLength = data.component.en.length

            if (e.activeIndex <= 0) {
              return lang === 'id' ? idLength - 1 : enLength - 1
            } else if (lang === 'id' && e.activeIndex > idLength) {
              return 0
            } else if (lang === 'en' && e.activeIndex > enLength) {
              return 0
            } else {
              return e.activeIndex - 1
            }
          }

          const getColor =
            lang === 'id'
              ? data.component.id[currentSlide()].langColor
              : data.component.en[currentSlide()].langColor

          ctx.setLangColor(getColor)
        }}
      >
        {lang === 'id'
          ? data.component.id.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-screen h-screen">
                  {item.option ? (
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="relative w-full h-64 mx-auto md:hidden">
                          {item.textImage?.imageMobile.asset && (
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
                          )}
                        </div>
                        <div className="relative w-full max-w-[950px] h-80 mx-auto hidden md:flex md:justify-center">
                          {item.textImage?.imageDesktop.asset && (
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
                          )}
                        </div>

                        <StrokeButton
                          ariaLabel="button_heroSliderIDTRUE"
                          targetBlank={item.button.customLink ? true : false}
                          destination={
                            item.button.customLink
                              ? item.button.link
                              : '/products'
                          }
                          color={
                            item.langColor === 'white'
                              ? colors.white
                              : colors.black
                          }
                          hover={`${
                            item.langColor === 'white' ? 'white' : 'black'
                          }`}
                          className="mt-5 md:mt-0"
                        >
                          {item.button.title}
                        </StrokeButton>
                      </div>
                    </Container>
                  ) : (
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center">
                        <span
                          className={`${
                            item.langColor === 'white'
                              ? 'text-white'
                              : 'text-black'
                          } max-w-4xl mb-6 mx-auto text-ctitleBig font-nutmeg leading-none  text-center lg:text-h1 lg:leading-tight`}
                        >
                          {item.title}
                        </span>
                        <StrokeButton
                          ariaLabel="button_heroSliderIDFALSE"
                          targetBlank={item.button.customLink ? true : false}
                          destination={
                            item.button.customLink
                              ? item.button.link
                              : '/products'
                          }
                          color={
                            item.langColor === 'white'
                              ? colors.white
                              : colors.black
                          }
                          hover={`${
                            item.langColor === 'white' ? 'white' : 'black'
                          }`}
                          className="mt-5 md:mt-0"
                        >
                          {item.button.title}
                        </StrokeButton>
                      </div>
                    </Container>
                  )}
                  <Image
                    src={urlFor(item.background).auto('format').url()}
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
            ))
          : data.component.en.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-screen h-screen">
                  {item.option ? (
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="relative w-full h-64 mx-auto md:hidden">
                          {item.textImage?.imageMobile.asset && (
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
                          )}
                        </div>
                        <div className="relative w-full max-w-[950px] h-80 mx-auto hidden md:flex md:justify-center">
                          {item.textImage?.imageDesktop.asset && (
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
                          )}
                        </div>
                        <StrokeButton
                          ariaLabel="button_heroSliderENTRUE"
                          targetBlank={item.button.customLink ? true : false}
                          destination={
                            item.button.customLink
                              ? item.button.link
                              : '/products'
                          }
                          color={
                            item.langColor === 'white'
                              ? colors.white
                              : colors.black
                          }
                          hover={`${
                            item.langColor === 'white' ? 'white' : 'black'
                          }`}
                          className="mt-5 md:mt-0"
                        >
                          {item.button.title}
                        </StrokeButton>
                      </div>
                    </Container>
                  ) : (
                    <Container className="h-screen z-1">
                      <div className="w-full h-full flex flex-col justify-center">
                        <span
                          className={`${
                            item.langColor === 'white'
                              ? 'text-white'
                              : 'text-black'
                          } max-w-4xl mb-6 mx-auto text-ctitleBig font-nutmeg leading-none  text-center lg:text-h1 lg:leading-tight`}
                        >
                          {item.title}
                        </span>
                        <StrokeButton
                          ariaLabel="button_heroSlider"
                          targetBlank={item.button.customLink ? true : false}
                          destination={
                            item.button.customLink
                              ? item.button.link
                              : '/products'
                          }
                          color={
                            item.langColor === 'white'
                              ? colors.white
                              : colors.black
                          }
                          hover={`${
                            item.langColor === 'white' ? 'white' : 'black'
                          }`}
                          className="mt-5 md:mt-0"
                        >
                          {item.button.title}
                        </StrokeButton>
                      </div>
                    </Container>
                  )}

                  <Image
                    src={urlFor(item.background).auto('format').url()}
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
            ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider

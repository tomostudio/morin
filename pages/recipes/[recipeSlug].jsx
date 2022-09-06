import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import ProductCard from '@/components/shared-module/productCard'
import GalleryModal from '@/components/shared-module/galleryModal'
import RecipeSlider from '@/components/sliders/recipeSlider'
import StrokeButton from '@/components/micro-module/strokeButton'
import { ArrowLarge, Check } from '@/components/utils/svg'
import colors from '@/helpers/colors'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { PortableText } from '@portabletext/react'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import getYoutube from '@/components/utils/getYoutube'

// COMPONENTS
const RecipeCheckbox = ({
  name,
  label,
  value,
  onChange,
  checked,
  labelClassName = '',
}) => {
  return (
    <div className="font-semibold leading-tight mb-2 last:mb-0 md:mb-3 lg:mb-5">
      <label
        htmlFor={name}
        className="flex flex-wrap items-center w-full font-semibold select-none overflow-hidden"
      >
        <span
          className={`flex flex-wrap items-center justify-center w-5 h-5 rounded-full border-2 border-solid border-morin-red p-1 transition-all md:w-6 md:h-6 lg:w-8 lg:h-8 lg:p-2 ${
            checked ? 'bg-morin-red' : ''
          }`}
        >
          <Check color={checked ? colors.white : colors.morinRed} />
        </span>
        <span
          className={`leading-none pt-1 pl-2 md:pt-1.5 md:pl-4 lg:pl-5 ${labelClassName}`}
        >
          {label}
        </span>
      </label>
    </div>
  )
}

const RecipeTag = ({ label }) => (
  <div className="flex flex-wrap items-center min-h-[25px] rounded-full border-2 border-solid border-white px-3 mr-2 last:mr-0 lg:mr-0 lg:ml-2 lg:mb-2">
    <span className="pt-0.5 md:pt-1">{label}</span>
  </div>
)

const InstructionCard = ({
  step,
  value,
  checked,
  onChange,
  instruction,
  images,
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-1 lg:mb-2">
        <span className="text-morin-red font-semibold lg:hidden">
          Step {step}
        </span>
        <div className="hidden lg:block">
          <RecipeCheckbox
            name={value}
            label={`Step ${step}`}
            value={value}
            checked={checked}
            onChange={onChange}
            labelClassName="font-bold text-mtitleSmall"
          />
        </div>
      </div>

      <p className="text-morin-red mb-6 last:mb-0 lg:text-black lg:pl-[52px]">
        {instruction}
      </p>

      {images?.length && (
        <div className="flex flex-wrap -mx-1 sm:mx-0 lg:pl-[52px]">
          {images?.map((i, index) => (
            <div
              className="relative w-1/2 h-60 rounded-xl overflow-hidden px-1 sm:w-80 sm:px-0 sm:mr-4 lg:mr-5"
              key={index}
            >
              <Image
                src={urlFor(i).auto('format').width(600).url()}
                blurDataURL={urlFor(i).auto('format').width(300).blur(25).url()}
                placeholder="blur"
                alt={i.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const ImageGallery = ({ data, onClick }) => {
  const imageWrapper = `relative bg-transparent border-0 rounded-3xl cursor-pointer overflow-hidden`

  return (
    <Swiper
      freeMode
      modules={[FreeMode]}
      slidesPerView="auto"
      breakpoints={{
        0: { spaceBetween: 10 },
        1024: { spaceBetween: 20 },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <button
            type="button"
            onClick={() => onClick(index)}
            className={`${imageWrapper} relative w-80 h-52`}
          >
            {item._type === 'image' ? (
              <Image
                src={urlFor(item).auto('format').width(400).url()}
                blurDataURL={urlFor(item)
                  .auto('format')
                  .width(200)
                  .blur(50)
                  .url()}
                placeholder="blur"
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            ) : (
              <Image
                src={urlFor(item.thumbnail).auto('format').width(400).url()}
                blurDataURL={urlFor(item.thumbnail)
                  .auto('format')
                  .width(200)
                  .blur(50)
                  .url()}
                placeholder="blur"
                alt={item.thumbnail.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const ImageGalleryHiRes = ({ data, initialSlide = 0 }) => {
  const swiperPrev = useRef(null)
  const swiperNext = useRef(null)

  // const imageWrapper = `relative bg-transparent border-0 rounded-3xl cursor-pointer overflow-hidden`;
  const navLeft = `left-0 rotate-180`
  const navRight = `right-0`
  const sliderNav = `w-10 h-8 rounded-full border-2 border-solid border-morin-red absolute top-1/2 -translate-y-1/2 z-1 px-2 xl:block`

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: swiperPrev.current,
        nextEl: swiperNext.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperPrev.current
        swiper.params.navigation.nextEl = swiperNext.current
      }}
      slidesPerView={1}
      initialSlide={initialSlide}
    >
      {data?.map((item, index) => (
        <>
          {item._type === 'image' ? (
            <SwiperSlide key={index}>
              <div className="relative w-[calc(100%-8rem)] lg:max-w-5xl mx-auto rounded-xl overflow-hidden h-30rem">
                <Image
                  src={urlFor(item).auto('format').width(1928).url()}
                  blurDataURL={urlFor(item)
                    .auto('format')
                    .width(1500)
                    .blur(25)
                    .url()}
                  placeholder="blur"
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <div
                className={`relative w-[calc(100%-8rem)] lg:max-w-5xl mx-auto rounded-xl overflow-hidden h-30rem aspect-[16/9] max-md:aspect-w-1 max-md:aspect-h-1`}
              >
                <iframe
                  src={'https://www.youtube.com/embed/' + getYoutube(item.link)}
                  id="videos"
                  width="100%"
                  height="100%"
                />
              </div>
            </SwiperSlide>
          )}
        </>
      ))}
      <button ref={swiperPrev} className={`${sliderNav} ${navLeft}`}>
        <ArrowLarge color={colors.morinRed} />
      </button>
      <button ref={swiperNext} className={`${sliderNav} ${navRight}`}>
        <ArrowLarge color={colors.morinRed} />
      </button>
    </Swiper>
  )
}

// CONTROLLER
const RecipeDetail = ({
  recipeAPI,
  recipeListAPI,
  seoAPI,
  recipeButton,
  footerAPI,
  translation,
}) => {
  const [instructionsChecked, setInstructionsChecked] = useState([])
  const [galleryPopup, setGalleryPopup] = useState(false)
  const [gallerySlide, setGallerySlide] = useState(0)
  const [recipeBtn] = recipeButton
  const [seo] = seoAPI
  const [recipe] = recipeAPI
  const [footer] = footerAPI
  const router = useRouter()

  const handleCheckInstructions = (val) => {
    setInstructionsChecked((prev) => {
      const tempArr = [...prev]

      if (tempArr.includes(val)) {
        const index = tempArr.indexOf(val)
        tempArr.splice(index, 1)
        return tempArr
      }

      if (!tempArr.includes(val)) {
        tempArr.push(val)
        return tempArr
      }
    })
  }

  const handleImageGallery = (index) => {
    setGalleryPopup(true)
    setGallerySlide(index)
  }

  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor(recipe.langColor)
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <Layout
      style={{
        backgroundColor: recipe.backgroundColor
          ? recipe.backgroundColor.hex
          : colors.morinPeach,
      }}
    >
      <SEO
        title={ctx.language === 'id' ? recipe.title_id : recipe.title_en}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? recipe.seo_id : recipe.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div
        className="w-full"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <div className="relative w-full md:px-8 md:pt-20 lg:px-8 lg:pt-28 xl:px-10 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            {/* head title */}
            <div className="relative md:rounded-3xl md:overflow-hidden lg:mb-5">
              <div className="lg:hidden">
                <Image
                  priority
                  src={urlFor(recipe.thumbnail)
                    .auto('format')
                    .width(1200)
                    .height(690)
                    .url()}
                  blurDataURL={urlFor(recipe.thumbnail)
                    .auto('format')
                    .width(1200)
                    .height(690)
                    .blur(25)
                    .url()}
                  placeholder="blur"
                  alt={recipe.thumbnail.alt}
                  width={375}
                  height={500}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src={urlFor(recipe.thumbnail).width(1200).height(690).url()}
                  blurDataURL={urlFor(recipe.thumbnail)
                    .auto('format')
                    .width(1200)
                    .height(690)
                    .blur(25)
                    .url()}
                  placeholder="blur"
                  alt={recipe.thumbnail.alt}
                  width={1200}
                  height={690}
                  layout="responsive"
                />
              </div>

              <div className="w-full text-white text-center absolute top-24 left-1/2 -translate-x-1/2 z-1 lg:flex lg:top-0 lg:px-8 lg:py-10">
                <h1 className="font-nutmeg font-bold text-ctitle leading-tight mb-4 lg:text-h2 lg:w-1/2 lg:text-left">
                  {ctx.language === 'id' ? recipe.title_id : recipe.title_en}
                </h1>
                <div className="flex justify-center lg:w-1/2 lg:h-fit lg:flex-wrap lg:items-start lg:justify-end lg:max-w-[30%] lg:pt-5 lg:ml-auto">
                  <RecipeTag
                    label={
                      ctx.language === 'id'
                        ? recipe.difficulty.title_id
                        : recipe.difficulty.title_en
                    }
                  />
                  <RecipeTag
                    label={
                      ctx.language === 'id'
                        ? recipe.recipeCategory.title_id
                        : recipe.recipeCategory.title_en
                    }
                  />
                  <RecipeTag
                    label={
                      ctx.language === 'id'
                        ? recipe.cookingTime.title_id
                        : recipe.cookingTime.title_en
                    }
                  />
                </div>
              </div>
            </div>

            {/* description */}
            {ctx.language === 'id'
              ? recipe.description_id && (
                  <div className="bg-white rounded-2xl my-8 p-8 lg:mt-0 lg:mb-5">
                    <div className="lg:max-w-3xl lg:mx-auto">
                      <PortableText
                        value={recipe.description_id}
                        components={{
                          block: {
                            normal: ({ children }) => <p>{children}</p>,
                          },
                        }}
                      />
                    </div>
                  </div>
                )
              : recipe.description_en && (
                  <div className="bg-white rounded-2xl my-8 p-8 lg:mt-0 lg:mb-5">
                    <div className="lg:max-w-3xl lg:mx-auto">
                      <PortableText
                        value={recipe.description_en}
                        components={{
                          block: {
                            normal: ({ children }) => <p>{children}</p>,
                          },
                        }}
                      />
                    </div>
                  </div>
                )}

            <div className="lg:flex lg:-mx-2 lg:mb-5">
              {/* ingredients */}
              {ctx.language === 'id'
                ? recipe.ingredients_id?.length > 0 && (
                    <div className="lg:w-1/2 lg:px-2">
                      <div className="bg-white rounded-2xl mb-8 py-8 px-11 lg:h-full lg:py-6 lg:mb-0">
                        <h2 className="block font-nutmeg font-normal text-morin-red text-mtitleSmall leading-none mb-4 lg:text-ctitleBig lg:mb-7">
                          {recipeBtn.language.ingredients.id}
                        </h2>
                        <div className="h-full ">
                          {recipe.ingredients_id?.map((data) => (
                            <RecipeCheckbox
                              key={data.description}
                              name={data.description}
                              label={data.description}
                              value={data.description}
                              checked={data.title}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                : recipe.ingredients_en?.length > 0 && (
                    <div className="lg:w-1/2 lg:px-2">
                      <div className="bg-white rounded-2xl mb-8 py-8 px-11 lg:h-full lg:py-6 lg:mb-0">
                        <h2 className="block font-nutmeg font-normal text-morin-red text-mtitleSmall leading-none mb-4 lg:text-ctitleBig lg:mb-7">
                          {recipeBtn.language.ingredients.en}
                        </h2>
                        <div className="h-full ">
                          {recipe.ingredients_en?.map((data) => (
                            <RecipeCheckbox
                              key={data.description}
                              name={data.description}
                              label={data.description}
                              value={data.description}
                              checked={data.title}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

              {/* made with */}
              {recipe.made?.length > 0 && (
                <div className="lg:w-1/2 lg:px-2">
                  <div className="px-4 mb-6 lg:h-full lg:bg-white lg:rounded-2xl lg:px-11 lg:py-6 lg:mb-0">
                    <h2 className="text-center text-morin-red text-mtitleSmall font-nutmeg font-normal leading-none mb-6 lg:text-ctitleBig lg:text-left">
                      {ctx.language === 'id'
                        ? recipeBtn.language.made_with.id
                        : recipeBtn.language.made_with.en}
                    </h2>
                    <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5">
                      {recipe.made?.map((item, index) => (
                        <div
                          className="w-1/2 px-1.5 mb-3 lg:px-2.5 lg:mb-5"
                          key={`${item.title_en}${index}`}
                        >
                          <ProductCard
                            title={
                              ctx.language === 'id'
                                ? item.title_id
                                : item.title_en
                            }
                            bgColor={
                              item.backgroundColor
                                ? item.backgroundColor.hex
                                : colors.morinLightBlue
                            }
                            imgSrc={urlFor(item.thumbnail)
                              .auto('format')
                              .width(800)
                              .url()}
                            thumbnailFruit={item.thumbnailFruit}
                            imgBg={'/product/strawberry-bg.png'}
                            imgPlaceholder={urlFor(item.thumbnail)
                              .width(500)
                              .auto('format')
                              .blur(10)
                              .url()}
                            imgAlt={item.thumbnail.alt}
                            link={`${item.type.slug.current}/${item.slug.current}`}
                            small
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* instructions */}
            {ctx.language === 'id'
              ? recipe.steps_id?.length > 0 && (
                  <div className="bg-white rounded-2xl mb-8 p-8 lg:px-10 pb-12">
                    <div className="flex flex-wrap flex-col mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-10 xl:mb-12">
                      <h2 className="block font-nutmeg font-normal text-center text-morin-red text-mtitleSmall leading-none mb-4 lg:text-left lg:text-ctitleBig lg:mb-0">
                        {recipeBtn.language.instructions.id}
                      </h2>

                      <div className="flex flex-wrap justify-center lg:justify-end lg:pt-2.5">
                        <StrokeButton
                          arrow={false}
                          color={colors.morinRed}
                          className="mx-0 mr-3"
                          onClick={() => console.log('Print')}
                        >
                          Cetak
                        </StrokeButton>
                        <StrokeButton
                          arrow={false}
                          color={colors.morinRed}
                          className="mx-0"
                          onClick={() => console.log('Share')}
                        >
                          Bagikan
                        </StrokeButton>
                      </div>
                    </div>

                    <div className="lg:max-w-3xl lg:mx-auto">
                      {recipe.steps_id?.map((item, index) => (
                        <InstructionCard
                          key={index}
                          step={index + 1}
                          value={`step-${index + 1}`}
                          instruction={item.description}
                          images={item.images}
                          checked={instructionsChecked.includes(
                            `step-${index + 1}`,
                          )}
                          onChange={() =>
                            handleCheckInstructions(`step-${index + 1}`)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )
              : recipe.steps_en?.length > 0 && (
                  <div className="bg-white rounded-2xl mb-8 p-8 lg:px-10 pb-12">
                    <div className="flex flex-wrap flex-col mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-10 xl:mb-12">
                      <h2 className="block font-nutmeg font-normal text-center text-morin-red text-mtitleSmall leading-none mb-4 lg:text-left lg:text-ctitleBig lg:mb-0">
                        {recipeBtn.language.instructions.en}
                      </h2>

                      <div className="flex flex-wrap justify-center lg:justify-end lg:pt-2.5">
                        <StrokeButton
                          arrow={false}
                          color={colors.morinRed}
                          className="mx-0 mr-3"
                          onClick={() => console.log('Print')}
                        >
                          Print
                        </StrokeButton>
                        <StrokeButton
                          arrow={false}
                          color={colors.morinRed}
                          className="mx-0"
                          onClick={() => console.log('Share')}
                        >
                          Share
                        </StrokeButton>
                      </div>
                    </div>

                    <div className="lg:max-w-3xl lg:mx-auto">
                      {recipe.steps_en?.map((item, index) => (
                        <InstructionCard
                          key={index}
                          step={index + 1}
                          value={`step-${index + 1}`}
                          instruction={item.description}
                          images={item.images}
                          checked={instructionsChecked.includes(
                            `step-${index + 1}`,
                          )}
                          onChange={() =>
                            handleCheckInstructions(`step-${index + 1}`)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}

            {/* gallery */}
            {recipe.gallery?.length > 0 && (
              <div className="relative bg-white rounded-2xl mb-8 p-8 overflow-hidden lg:py-12 lg:px-10 lg:mb-14">
                <div className="w-8 h-full bg-gradient-to-r from-white to-transparent absolute top-1/2 left-0 -translate-y-1/2 z-2 lg:w-10" />
                <div className="w-8 h-full bg-gradient-to-r from-transparent to-white absolute top-1/2 right-0 -translate-y-1/2 z-2 lg:w-10" />
                <div className="recipe-gallery-slider relative overflow-hidden -mx-8 z-1 lg:-mx-10">
                  <ImageGallery
                    data={recipe.gallery}
                    onClick={(index) => handleImageGallery(index)}
                  />
                </div>
              </div>
            )}

            {/* more recipes */}
            {ctx.language === 'id'
              ? recipe.related.option
                ? recipeListAPI?.length > 0 && (
                    <div className="px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20">
                      <div className="flex flex-wrap w-full">
                        <div className="w-full text-center mb-5 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10">
                          <span className="block font-nutmeg font-normal text-mtitleSmall text-morin-red leading-tight mx-auto mb-0 md:hidden">
                            Resep Lainnya
                          </span>
                          <span className="hidden font-nutmeg font-normal text-mtitle text-morin-red leading-tight mb-0 md:block lg:text-mtitleBig xl:text-h2">
                            {recipeBtn.language.related.title.id}
                          </span>

                          <div className="hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4">
                            <StrokeButton
                              destination="/recipes"
                              color={colors.morinRed}
                              className="ml-auto"
                            >
                              {recipeBtn.language.related.btn.id}
                            </StrokeButton>
                          </div>
                        </div>

                        <div className="w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4">
                          <RecipeSlider
                            data={recipeListAPI}
                            lang={ctx.language}
                          />
                        </div>
                      </div>
                    </div>
                  )
                : recipe.related?.manual?.length > 0 && (
                    <div className="px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20">
                      <div className="flex flex-wrap w-full">
                        <div className="w-full text-center mb-5 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10">
                          <span className="block font-nutmeg font-normal text-mtitleSmall text-morin-red leading-tight mx-auto mb-0 md:hidden">
                            Resep Lainnya
                          </span>
                          <span className="hidden font-nutmeg font-normal text-mtitle text-morin-red leading-tight mb-0 md:block lg:text-mtitleBig xl:text-h2">
                            {recipeBtn.language.related.title.id}
                          </span>

                          <div className="hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4">
                            <StrokeButton
                              destination="/recipes"
                              color={colors.morinRed}
                              className="ml-auto"
                            >
                              {recipeBtn.language.related.btn.id}
                            </StrokeButton>
                          </div>
                        </div>

                        <div className="w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4">
                          <RecipeSlider
                            data={recipe.related.manual}
                            lang={ctx.language}
                          />
                        </div>
                      </div>
                    </div>
                  )
              : recipe.related.option
              ? recipeListAPI?.length > 0 && (
                  <div className="px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full text-center mb-5 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10">
                        <span className="block font-nutmeg font-normal text-mtitleSmall text-morin-red leading-tight mx-auto mb-0 md:hidden">
                          More Recipes
                        </span>
                        <span className="hidden font-nutmeg font-normal text-mtitle text-morin-red leading-tight mb-0 md:block lg:text-mtitleBig xl:text-h2">
                          {recipeBtn.language.related.title.en}
                        </span>

                        <div className="hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4">
                          <StrokeButton
                            destination="/recipes"
                            color={colors.morinRed}
                            className="ml-auto"
                          >
                            {recipeBtn.language.related.btn.en}
                          </StrokeButton>
                        </div>
                      </div>

                      <div className="w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4">
                        <RecipeSlider
                          data={recipeListAPI}
                          lang={ctx.language}
                        />
                      </div>
                    </div>
                  </div>
                )
              : recipe.related?.manual?.length > 0 && (
                  <div className="px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full text-center mb-5 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10">
                        <span className="block font-nutmeg font-normal text-mtitleSmall text-morin-red leading-tight mx-auto mb-0 md:hidden">
                          More Recipes
                        </span>
                        <span className="hidden font-nutmeg font-normal text-mtitle text-morin-red leading-tight mb-0 md:block lg:text-mtitleBig xl:text-h2">
                          {recipeBtn.language.related.title.en}
                        </span>

                        <div className="hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4">
                          <StrokeButton
                            destination="/recipes"
                            color={colors.morinRed}
                            className="ml-auto"
                          >
                            {recipeBtn.language.related.btn.en}
                          </StrokeButton>
                        </div>
                      </div>

                      <div className="w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4">
                        <RecipeSlider
                          data={recipe.related.manual}
                          lang={ctx.language}
                        />
                      </div>
                    </div>
                  </div>
                )}

            {/* gallery pop up */}
            <GalleryModal
              isOpen={galleryPopup}
              onRequestClose={() => setGalleryPopup(false)}
            >
              <ImageGalleryHiRes
                data={recipe.gallery}
                initialSlide={gallerySlide}
              />
            </GalleryModal>
          </div>
        </div>

        <Footer
          lang={ctx.language}
          button={translation.menu_lang}
          faq={seo.hide_faq}
          mailchimp={seo.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "recipeList"]
      `)

  const paths = []

  res.map((data) => {
    return paths.push({
      params: { recipeSlug: `${data.slug.current}` },
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const recipeAPI = await client.fetch(
    `
      *[_type == "recipeList" && slug.current == "${params.recipeSlug}"] {
        ...,
        difficulty->,
        cookingTime->,
        recipeCategory->,
        made[]-> {
          ...,
          type->
        },
        related {
          ...,
          manual[]->
        }
      }
    `,
  )
  const recipeListAPI = await client.fetch(`
  *[_type == "recipeList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const recipeButton = await client.fetch(`
  *[_type == "recipeDetail"]
  `)
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `)
  const [translation] = translationAPI

  return {
    props: {
      recipeAPI,
      recipeListAPI,
      seoAPI,
      footerAPI,
      recipeButton,
      translation,
    },
  }
}

export default RecipeDetail

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, EffectFade } from 'swiper';
import Footer from '@/components/module/footer';
import Layout from '@/components/module/layout';
import ProductCard from '@/components/shared-module/productCard';
import GalleryModal from '@/components/shared-module/galleryModal';
import RecipeSlider from '@/components/sliders/recipeSlider';
import StrokeButton from '@/components/micro-module/strokeButton';
import { useNextSanityImage } from 'next-sanity-image';
import {
  ArrowLarge,
  TwitterSolidShare,
  FacebookSolidShare,
  MailSolidShare,
  LinkSolidShare,
} from '@/components/utils/svg';

import { useDraggable } from 'react-use-draggable-scroll';
import colors from '@/helpers/colors';
import { useEffectInit } from '@/components/utils/preset';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import urlFor from '@/helpers/sanity/urlFor';
import { PortableText, toPlainText } from '@portabletext/react';
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import getYoutube from '@/components/utils/getYoutube';
import { Pagination, Tooltip } from '@mui/material';
import FancyLink from '@/components/utils/fancyLink';

// COMPONENTS
const RecipeCheckbox = ({ label = '', labelClassName = '' }) => {
  return (
    <div className='font-semibold leading-tight mb-2 last:mb-0 md:mb-3 lg:mb-4 inline-block'>
      <label className='recipeCheckbox cursor-pointer inline-flex flex-nowrap! items-center w-full font-semibold select-none overflow-hidden'>
        <input type='checkbox' />
        <span className='checkmark'>
          <svg
            viewBox='0 0 12 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-full'
          >
            <path
              d='m1 5 3.333 3.334L11 1.667'
              stroke='#E82128'
              strokeWidth='1.5'
            />
          </svg>
        </span>
        <span className={`leading-none pt-1 ml-3 md:ml-4  ${labelClassName}`}>
          {label}
        </span>
      </label>
    </div>
  );
};

const RecipeTag = ({ label, color }) => (
  <div
    className={`flex flex-wrap items-center min-h-[25px] rounded-full border-2 border-solid px-3 mx-1 mb-2 lg:mr-0 lg:ml-2 lg:mb-2 ${
      color === 'white' ? 'border-white' : 'border-black '
    }`}
  >
    <span className='pt-0.5 md:pt-1'>{label}</span>
  </div>
);

const InstructionCard = ({
  step,
  value,
  checked,
  onChange,
  instruction,
  images,
}) => {
  return (
    <div className='mb-6 last:mb-0'>
      <div className='mb-1 lg:mb-2'>
        <span className='text-black font-bold lg:hidden'>Step {step}</span>
        <div className='hidden lg:block'>
          <RecipeCheckbox
            name={value}
            label={`Step ${step}`}
            labelClassName='font-bold text-subtitle2'
          />
        </div>
      </div>

      <p className='text-morin-red mb-6 last:mb-0 lg:text-black lg:pl-[52px]'>
        {instruction}
      </p>

      {images?.length && (
        <div className='flex flex-wrap -mx-1 sm:mx-0 lg:pl-[52px]'>
          {images?.map((i, index) => (
            <div
              className='relative w-1/2 h-60 rounded-xl overflow-hidden px-1 sm:w-80 sm:px-0 sm:mr-4 lg:mr-4'
              key={index}
            >
              <Image
                src={urlFor(i).auto('format').url()}
                blurDataURL={urlFor(i).auto('format').width(300).blur(25).url()}
                placeholder='blur'
                alt={i.alt}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ImageGallery = ({ data, onClick }) => {
  const imageWrapper = `relative bg-transparent border-0 rounded-3xl cursor-pointer overflow-hidden`;

  return (
    <Swiper
      freeMode
      modules={[FreeMode]}
      slidesPerView='auto'
      breakpoints={{
        0: { spaceBetween: 10 },
        1024: { spaceBetween: 20 },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <button
            type='button'
            onClick={() => onClick(index)}
            className={`${imageWrapper} relative w-80 h-52 hover:opacity-60 transition-all `}
          >
            {item._type === 'image' ? (
              <Image
                src={urlFor(item).auto('format').url()}
                blurDataURL={urlFor(item)
                  .auto('format')
                  .width(200)
                  .blur(50)
                  .url()}
                placeholder='blur'
                alt={item.alt}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            ) : (
              <Image
                src={urlFor(item.thumbnail).auto('format').url()}
                blurDataURL={urlFor(item.thumbnail)
                  .auto('format')
                  .width(200)
                  .blur(50)
                  .url()}
                placeholder='blur'
                alt={item.thumbnail.alt}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            )}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageGalleryHiRes = ({ data, initialSlide = 0 }) => {
  const GalleryNavigation = () => {
    const sliderNav = `w-10 h-8 rounded-full border-2 border-solid border-morin-red absolute top-1/2 -translate-y-1/2 z-10 px-2 xl:block`;
    return (
      <>
        <button
          className={`${sliderNav} left-0 rotate-180 pointer-events-auto ml-4`}
          onClick={() => {
            const prevSlide =
              currentSlide - 1 >= 0
                ? currentSlide - 1
                : slidesRef.current.querySelectorAll('.gallery-slide').length -
                  1;

            changeSlideTo(prevSlide);
          }}
        >
          <ArrowLarge color={colors.morinRed} />
        </button>
        <button
          className={`${sliderNav} right-0 pointer-events-auto mr-4`}
          onClick={() => {
            const nextSlide =
              currentSlide + 1 <
              slidesRef.current.querySelectorAll('.gallery-slide').length
                ? currentSlide + 1
                : 0;
            changeSlideTo(nextSlide);
          }}
        >
          <ArrowLarge color={colors.morinRed} />
        </button>
      </>
    );
  };

  const slidesRef = useRef();

  // Current Slide Counter
  let currentSlide = 0;
  //Function to Change Slide
  const changeSlideTo = (slideNumber) => {
    //Loop and Toggle Active Dependign on the Set Number
    slidesRef.current
      .querySelectorAll('.gallery-slide')
      .forEach((slide, index) =>
        index === slideNumber
          ? slide.classList.add('active')
          : slide.classList.remove('active')
      );
    currentSlide = slideNumber;
  };
  useEffect(() => {
    changeSlideTo(initialSlide);
  }, []);
  return (
    <div className='h-full pointer-events-none popup-gallery' ref={slidesRef}>
      {data?.map((item, index) => {
        const imageProps = useNextSanityImage(client, item);
        return (
          <div
            key={index}
            className={`gallery-slide w-[calc(100%-10rem)] h-[calc(100vh-4rem)] p-0 mx-auto ${
              item._type === 'image' ? '' : 'aspect-[16/9]'
            }`}
          >
            {item._type === 'image' ? (
              <Image
                // {...imageProps}
                src={urlFor(item).auto('format').url()}
                blurDataURL={urlFor(item)
                  .auto('format')
                  .width(350)
                  .blur(50)
                  .url()}
                layout='fill'
                objectFit='contain'
                placeholder='blur'
                objectPosition={'center center'}
                className='pointer-events-auto block!'
              />
            ) : (
              <iframe
                src={'https://www.youtube.com/embed/' + getYoutube(item.link)}
                id='videos'
                width='100%'
                height='100%'
              />
            )}
          </div>
        );
      })}
      <GalleryNavigation />
    </div>
  );
};

// CONTROLLER
const RecipeDetail = ({
  recipeAPI,
  recipeListAPI,
  productTypeAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [galleryPopup, setGalleryPopup] = useState(false);
  const [showShare, setShare] = useState(false);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [baseUrl, setBaseUrl] = useState();
  const [seo] = seoAPI;
  const [recipe] = recipeAPI;
  const [footer] = footerAPI;
  const router = useRouter();

  const handleImageGallery = (index) => {
    setGalleryPopup(true);
    setGallerySlide(index);
  };

  const ctx = useAppContext();

  useEffect(() => {
    // SET HEADER COLOR
    useEffectInit({ context: ctx });

    setBaseUrl(window.location.href);
    const checkShare = () => {
      if (navigator.share) {
        setShare(true);
      } else {
        setShare(false);
      }
    };

    const checkHeaderColor = () => {
      const width = window.innerWidth;
      if (width < 764) {
        ctx.setLangColor(recipe.titleColor);
      } else {
        ctx.setLangColor('black'); // set to black
      }
    };

    checkShare();

    checkHeaderColor();
    window.addEventListener('resize', checkHeaderColor, true);
    window.addEventListener('resize', checkShare, true);
    return () => {
      window.removeEventListener('resize', checkShare, true);
      window.removeEventListener('resize', checkHeaderColor, true);
    };
  }, []);

  const handleShareButton = () => {
    const shareData = {
      title: `${ctx.language === 'id' ? recipe.title.id : recipe.title.en} at ${
        seo.webTitle
      }`,
      text:
        ctx.language === 'id'
          ? recipe.description?.id
            ? toPlainText(recipe.description.id)
            : ''
          : recipe.description?.en
          ? toPlainText(recipe.description.en)
          : '',
      url: baseUrl,
    };

    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  const ingredientsRef = useRef();
  const { events } =
    ((ctx.language === 'id' && recipe.ingredient?.id?.length > 0) ||
      (ctx.language === 'en' && recipe.ingredient?.en?.length > 0)) &&
    useDraggable(ingredientsRef);

  return (
    <Layout
      style={{
        backgroundColor: recipe.backgroundColor
          ? recipe.backgroundColor.hex
          : colors.morinPeach,
      }}
    >
      <SEO
        title={ctx.language === 'id' ? recipe.title.id : recipe.title.en}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? recipe.seo?.id : recipe.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div
        className='w-full'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
      >
        <div className='relative w-full md:pt-20 lg:pt-28  overflow-hidden'>
          <div className='max-w-screen-2xl md:px-4 lg:px-8 mx-auto '>
            {/* head title */}
            <div className='relative rounded-b-2xl md:rounded-3xl overflow-hidden mb-4'>
              <div className='w-full aspect-[4/3] md:aspect-[2/1]'>
                <div
                  className={`absolute w-full h-full top-0 left-0  z-2 opacity-50 ${
                    recipe.titleColor === 'white'
                      ? 'bg-gradient-black-cover'
                      : 'bg-gradient-white-cover'
                  }`}
                />
                {recipe.cover?.asset && (
                  <Image
                    priority
                    src={urlFor(recipe.cover).auto('format').url()}
                    blurDataURL={urlFor(recipe.cover)
                      .auto('format')
                      .width(500)
                      .blur(25)
                      .url()}
                    placeholder='blur'
                    alt={recipe.cover.alt}
                    layout='fill'
                    objectFit='cover'
                  />
                )}
              </div>

              <div
                className={`${
                  recipe.titleColor === 'white' ? 'text-white' : 'text-black'
                } w-full text-center absolute top-16 md:top-12 left-1/2 -translate-x-1/2 z-3 lg:flex lg:top-0 lg:px-8 lg:py-10`}
              >
                <h1 className='font-nutmeg font-bold text-h5 leading-tight mb-4 lg:text-h2 lg:w-1/2 lg:text-left'>
                  {ctx.language === 'id' ? recipe.title.id : recipe.title.en}
                </h1>
                <div className='flex justify-center flex-wrap lg:w-1/2 lg:h-fit lg:flex-wrap lg:items-start lg:justify-end lg:max-w-[30%] lg:pt-4 lg:ml-auto'>
                  {recipe.recipeCategory?.map((data, index) => (
                    <RecipeTag
                      key={index}
                      color={recipe.titleColor}
                      label={
                        ctx.language === 'id' ? data.title.id : data.title.en
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* description */}
            {((ctx.language === 'id' && recipe.description?.id) ||
              (ctx.language === 'en' && recipe.description?.en)) && (
              <div className='bg-white rounded-2xl my-4 lg:my-8 p-0 py-10 md:py-10 md:px-9 lg:mt-0 lg:mb-4'>
                <div className='lg:max-w-4xl lg:mx-auto content no-max'>
                  <PortableText
                    value={
                      ctx.language === 'id'
                        ? recipe.description.id
                        : recipe.description.en
                    }
                    components={{
                      block: {
                        normal: ({ children }) =>
                          children[0] === '' ? <br /> : <p>{children}</p>,
                      },
                    }}
                  />
                </div>
              </div>
            )}

            <div className='grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mb-4'>
              {/* ingredients */}
              {((ctx.language === 'id' && recipe.ingredient?.id?.length > 0) ||
                (ctx.language === 'en' &&
                  recipe.ingredient?.en?.length > 0)) && (
                <div className='relative rounded-2xl overflow-hidden'>
                  <div
                    className='relative bg-white mb-8 py-8 pb-10 px-11 w-full xl:py-6 xl:pb-10 xl:mb-0 h-full xl:overflow-y-auto xl:aspect-[6/5] hidescrollbar'
                    {...events}
                    ref={ingredientsRef}
                  >
                    <h2 className='block font-nutmeg font-normal text-morin-red text-subtitle leading-none mb-6 lg:text-h3 lg:mb-7 md:text-center xl:text-left'>
                      {ctx.language === 'id'
                        ? translation.recipeLanguage.ingredients.id
                        : translation.recipeLanguage.ingredients.en}
                    </h2>
                    <div className='lg:max-w-4xl lg:mx-auto md:px-14 pb-4 lg:px-14 xl:px-0 flex flex-col items-start justify-start cursor-default'>
                      {ctx.language === 'id'
                        ? recipe.ingredient?.id.map((data, index) =>
                            !data.title ? (
                              <RecipeCheckbox
                                key={index}
                                name={`ingredients_id-${index + 1}`}
                                label={data.description}
                                value={`ingredients_id-${index + 1}`}
                              />
                            ) : (
                              <span
                                className='block font-bold my-3 lg:my-5 '
                                key={index}
                              >
                                {data.description}
                              </span>
                            )
                          )
                        : recipe.ingredient?.en.map((data, index) =>
                            !data.title ? (
                              <RecipeCheckbox
                                key={index}
                                name={`ingredients_id-${index + 1}`}
                                label={data.description}
                                value={`ingredients_id-${index + 1}`}
                              />
                            ) : (
                              <span className='block font-bold mb-2 md:mb-3 lg:mb-4'>
                                {data.description}
                              </span>
                            )
                          )}
                    </div>
                  </div>
                  <div className='hidden lg:block bg-gradient-white absolute w-full h-16 left-0 bottom-0 z-3 pointer-events-none' />
                </div>
              )}

              {/* made with */}
              {recipe.made?.length > 0 && (
                <div className='px-4 md:px-11 mb-8 w-full bg-white rounded-2xl xl:rounded-2xl xl:px-11 py-6 xl:mb-0 '>
                  <h2 className='text-center text-morin-red text-subtitle font-nutmeg font-normal leading-none mb-6 lg:text-ctitleBig xl:text-left'>
                    {ctx.language === 'id'
                      ? translation.recipeLanguage.made_with.id
                      : translation.recipeLanguage.made_with.en}
                  </h2>
                  <div className='grid grid-cols-2 gap-4 mx-auto md:px-[6.5rem] xl:px-0'>
                    {recipe.made?.map((item, index) => (
                      <div className='mb-3 xl:mb-4' key={`${index}`}>
                        <ProductCard
                          title={
                            ctx.language === 'id'
                              ? item.title.id
                              : item.title.en
                          }
                          bgColor={
                            item.backgroundColor
                              ? item.backgroundColor.hex
                              : colors.morinLightBlue
                          }
                          imgSrc={urlFor(item.thumbnail).auto('format').url()}
                          thumbnailFruit={item.thumbnailFruit}
                          imgPlaceholder={urlFor(item.thumbnail)
                            .width(500)
                            .auto('format')
                            .blur(10)
                            .url()}
                          imgAlt={item.thumbnail.alt}
                          link={`/products/${
                            productTypeAPI
                              .map((data) => {
                                return {
                                  ...data,
                                  products: data.products.find(
                                    (e) => e._id === item._id
                                  ),
                                };
                              })
                              .find((e) => e.products).slug.current
                          }/${item.slug.current}`}
                          small
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {((ctx.language === 'id' && recipe.steps?.id.length > 0) ||
              (ctx.language === 'en' && recipe.steps?.en.length > 0)) && (
              <div className='bg-white rounded-2xl mb-8 p-8 md:px-11 lg:px-10 pb-12'>
                <div className='lg:max-w-4xl lg:px-16 lg:mx-auto px-0 md:px-14 mx-auto flex flex-wrap flex-col mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-10 xl:mb-12'>
                  <h2 className='block font-nutmeg font-normal text-center text-morin-red text-subtitle leading-none mb-4 lg:text-left lg:text-ctitleBig lg:mb-0'>
                    {ctx.language === 'id'
                      ? translation.recipeLanguage.instructions.id
                      : translation.recipeLanguage.instructions.en}
                  </h2>
                  <div className='flex flex-wrap justify-center lg:justify-end'>
                    {showShare ? (
                      <StrokeButton
                        arrow={false}
                        color={colors.morinRed}
                        className='mx-0'
                        onClick={handleShareButton}
                      >
                        {ctx.language === 'id' ? 'Bagikan' : 'Share'}
                      </StrokeButton>
                    ) : (
                      <div className='flex items-center space-x-2'>
                        <div className='pt-1 text-defaultSmall uppercase mr-2'>
                          {ctx.language === 'id' ? 'Bagikan' : 'Share'}
                        </div>
                        <Tooltip
                          title='Facebook'
                          classes={{ tooltip: 'tooltip' }}
                        >
                          <FancyLink
                            destination={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
                            blank
                            className={` aspect-1 w-8 relative hover:opacity-75 transition-opacity`}
                          >
                            <FacebookSolidShare
                              color={colors.morinRed}
                              className='w-full h-full'
                            />
                          </FancyLink>
                        </Tooltip>
                        <Tooltip
                          title='Twitter'
                          classes={{ tooltip: 'tooltip' }}
                        >
                          <FancyLink
                            blank
                            destination={`https://twitter.com/share?url=${baseUrl}`}
                            className={` aspect-1 w-8 relative hover:opacity-75 transition-opacity`}
                          >
                            <TwitterSolidShare
                              color={colors.morinRed}
                              className='w-full h-full'
                            />
                          </FancyLink>
                        </Tooltip>
                        <Tooltip title='Email' classes={{ tooltip: 'tooltip' }}>
                          <FancyLink
                            destination={`mailto:?subject=${
                              ctx.language === 'id'
                                ? recipe.title.id
                                : recipe.title.en
                            }&body=${
                              ctx.language === 'id'
                                ? recipe.description?.id
                                  ? toPlainText(recipe.description.id)
                                  : ''
                                : recipe.description?.en
                                ? toPlainText(recipe.description.en)
                                : ''
                            } %0D%0A${baseUrl}`}
                            className={` aspect-1 w-8 relative hover:opacity-75 transition-opacity`}
                          >
                            <MailSolidShare
                              color={colors.morinRed}
                              className='w-full h-full'
                            />
                          </FancyLink>
                        </Tooltip>
                        <Tooltip
                          title='Copy Link'
                          classes={{ tooltip: 'tooltip' }}
                        >
                          <FancyLink
                            onClick={() => {
                              const el = document.createElement('input');
                              el.value = baseUrl;
                              document.body.appendChild(el);
                              el.select();
                              document.execCommand('copy');
                              document.body.removeChild(el);
                            }}
                            className={` aspect-1 w-8 relative hover:opacity-75 transition-opacity`}
                          >
                            <LinkSolidShare
                              color={colors.morinRed}
                              className='w-full h-full'
                            />
                          </FancyLink>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                </div>

                <div className='lg:max-w-4xl lg:px-16 lg:mx-auto px-0 md:px-14'>
                  {ctx.language === 'id'
                    ? recipe.steps?.id.map((item, index) => (
                        <InstructionCard
                          key={index}
                          step={index + 1}
                          value={`step-${index + 1}`}
                          instruction={item.description}
                          images={item.images}
                        />
                      ))
                    : recipe.steps?.en.map((item, index) => (
                        <InstructionCard
                          key={index}
                          step={index + 1}
                          value={`step-${index + 1}`}
                          instruction={item.description}
                          images={item.images}
                        />
                      ))}
                </div>
              </div>
            )}

            {/* gallery */}
            {recipe.gallery?.length > 0 && (
              <div className='relative bg-white rounded-2xl mb-8 p-8  overflow-hidden lg:py-12 lg:px-10 lg:mb-14'>
                <div className='w-8 h-full bg-gradient-to-r from-white to-transparent absolute top-1/2 left-0 -translate-y-1/2 z-2 lg:w-10' />
                <div className='w-8 h-full bg-gradient-to-r from-transparent to-white absolute top-1/2 right-0 -translate-y-1/2 z-2 lg:w-10' />
                <div className='recipe-gallery-slider relative overflow-hidden -mx-8 z-1 lg:-mx-10'>
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
                    <div className='px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20'>
                      <div className='flex flex-wrap w-full'>
                        <div className='w-full text-center mb-4 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10'>
                          <span className='block font-nutmeg font-normal text-subtitle text-morin-red leading-tight mx-auto mb-0 md:hidden'>
                            Resep Lainnya
                          </span>
                          <span className='hidden font-nutmeg font-normal text-subtitle text-morin-red leading-tight mb-0 md:block lg:text-h4 xl:text-h2'>
                            {translation.recipeLanguage.related.title.id}
                          </span>

                          <div className='hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4'>
                            <StrokeButton
                              destination='/recipes'
                              color={colors.morinRed}
                              className='ml-auto'
                            >
                              {translation.recipeLanguage.related.btn.id}
                            </StrokeButton>
                          </div>
                        </div>

                        <div className='mb-4 md:mb-0 -mx-8 w-[calc(100%+64px)] md:-mx-4 md:w-[calc(100%+32px)] lg:-mx-8 lg:w-[calc(100%+64px)]'>
                          <RecipeSlider
                            data={recipeListAPI.filter((item) => item._id !== recipe._id)}
                            lang={ctx.language}
                          />
                        </div>
                      </div>
                    </div>
                  )
                : recipe.related?.manual?.length > 0 && (
                    <div className='px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20'>
                      <div className='flex flex-wrap w-full'>
                        <div className='w-full text-center mb-4 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10'>
                          <span className='block font-nutmeg font-normal text-subtitle text-morin-red leading-tight mx-auto mb-0 md:hidden'>
                            Resep Lainnya
                          </span>
                          <span className='hidden font-nutmeg font-normal text-subtitle text-morin-red leading-tight mb-0 md:block lg:text-h4 xl:text-h2'>
                            {translation.recipeLanguage.related.title.id}
                          </span>

                          <div className='hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4'>
                            <StrokeButton
                              destination='/recipes'
                              color={colors.morinRed}
                              className='ml-auto'
                            >
                              {translation.recipeLanguage.related.btn.id}
                            </StrokeButton>
                          </div>
                        </div>

                        <div className='w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4'>
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
                  <div className='px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20'>
                    <div className='flex flex-wrap w-full'>
                      <div className='w-full text-center mb-4 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10'>
                        <span className='block font-nutmeg font-normal text-subtitle text-morin-red leading-tight mx-auto mb-0 md:hidden'>
                          More Recipes
                        </span>
                        <span className='hidden font-nutmeg font-normal text-subtitle text-morin-red leading-tight mb-0 md:block lg:text-h4 xl:text-h2'>
                          {translation.recipeLanguage.related.title.en}
                        </span>

                        <div className='hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4'>
                          <StrokeButton
                            destination='/recipes'
                            color={colors.morinRed}
                            className='ml-auto'
                          >
                            {translation.recipeLanguage.related.btn.en}
                          </StrokeButton>
                        </div>
                      </div>

                      <div className='w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4'>
                        <RecipeSlider
                            data={recipeListAPI.filter((item) => item._id !== recipe._id)}
                          lang={ctx.language}
                        />
                      </div>
                    </div>
                  </div>
                )
              : recipe.related?.manual?.length > 0 && (
                  <div className='px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20'>
                    <div className='flex flex-wrap w-full'>
                      <div className='w-full text-center mb-4 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10'>
                        <span className='block font-nutmeg font-normal text-subtitle text-morin-red leading-tight mx-auto mb-0 md:hidden'>
                          More Recipes
                        </span>
                        <span className='hidden font-nutmeg font-normal text-subtitle text-morin-red leading-tight mb-0 md:block lg:text-h4 xl:text-h2'>
                          {translation.recipeLanguage.related.title.en}
                        </span>

                        <div className='hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4'>
                          <StrokeButton
                            destination='/recipes'
                            color={colors.morinRed}
                            className='ml-auto'
                          >
                            {translation.recipeLanguage.related.btn.en}
                          </StrokeButton>
                        </div>
                      </div>

                      <div className='w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4'>
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
          event={eventAPI.length > 0 ? true : false}
          lang={ctx.language}
          button={translation.menu_lang}
          mailchimp={footer.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "recipeList"]
      `);

  const paths = [];

  res.map((data) => {
    return paths.push({
      params: { recipeSlug: `${data.slug.current}` },
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recipeAPI = await client.fetch(
    `
      *[_type == "recipeList" && slug.current == "${params.recipeSlug}"] {
        ...,
        recipeCategory[]->,
        made[]-> {
          ...
        },
        related {
          ...,
          manual[]->
        }
      }
    `
  );
  const productTypeAPI = await client.fetch(
    `
      *[_type == "productType"] {
        ...,
        products[]->,
      } 
    `
  );
  const recipeListAPI = await client.fetch(`
  *[_type == "recipeList"]
  `);
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
  `);
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
      recipeAPI,
      recipeListAPI,
      productTypeAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  };
}

export default RecipeDetail;

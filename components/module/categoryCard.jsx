
import React from 'react';
import Image from 'next/image';
import FancyLink from '../utils/fancyLink';
import urlFor from '@/helpers/sanity/urlFor';
import {
  Layout1Graphic1,
  Layout1Graphic2,
  Layout1Graphic3,
  Layout2Graphic1,
  Layout2Graphic2,
  Layout2Graphic3,
  Layout3Graphic1,
  Layout3Graphic2,
  Layout3Graphic3,
  Layout4Graphic1,
  Layout4Graphic2,
  Layout4Graphic3,
} from '../utils/categoryGraphic';

const CategoryCard = ({
  title,
  description,
  link,
  imgAlt,
  lang,
  categoryData,
  button
}) => {
  const { image1, image2, image3, animation } = categoryData;
  return (
    <FancyLink
      destination={link}
      className='group relative flex flex-wrap w-full rounded-2xl overflow-hidden mb-4 last:mb-0 lg:mb-5 lg:odd:flex-row-reverse lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] hover:shadow-md transition-shadow duration-300 '
    >
      {/* IMAGE */}
      <div
        className={`relative w-full min-h-[350px] bg-morin-lightBlue lg:w-1/2 categoryImageCard layout-${animation}`}
      >
        <div className='w-full aspect-[1/1] scale-150  absolute top-1/2 left-1/2 -translate-x-1/2 2xl:ml-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <Image
            src={`/RAY.svg`}
            objectFit='contain'
            layout='fill'
            className='animate-spin-slow'
          />
        </div>
        <div className={`imageFrame image1`}>
          <div className='image'>
            <Image
              src={urlFor(image1).auto('format').url()}
              blurDataURL={urlFor(image1)
                .auto('format')
                .width(400)
                .blur(25)
                .url()}
              placeholder='blur'
              alt={imgAlt}
              objectFit='contain'
              objectPosition={`center center`}
              layout='fill'
            />
          </div>
        </div>
        {/* Image 2 */}
        <div className={`imageFrame image2`}>
          <div className='image'>
            <Image
              src={urlFor(image2).auto('format').url()}
              blurDataURL={urlFor(image2)
                .auto('format')
                .width(400)
                .blur(25)
                .url()}
              placeholder='blur'
              alt={imgAlt}
              objectFit='contain'
              objectPosition={`center center`}
              layout='fill'
            />
          </div>
        </div>
        {/* Image 3 */}
        <div className={`imageFrame image3`}>
          <div className='image'>
            <Image
              src={urlFor(image3).auto('format').url()}
              blurDataURL={urlFor(image3)
                .auto('format')
                .width(400)
                .blur(25)
                .url()}
              placeholder='blur'
              alt={imgAlt}
              objectFit='contain'
              objectPosition={`center center`}
              layout='fill'
            />
          </div>
        </div>

        {/* DECORATION 1 */}
        {animation == 1 ? (
          <div className={`graphicFrame`}>
            <div className='graphic1'>
              <Layout1Graphic1 className={`w-full h-full`} />
            </div>
            <div className='graphic2'>
              <Layout1Graphic2 className={`w-full h-full`} />
            </div>
            <div className='graphic3'>
              <Layout1Graphic3 className={`w-full h-full`} />
            </div>
          </div>
        ) : (
          ''
        )}
        {animation == 2 ? (
          <div className={`graphicFrame`}>
            <div className='graphic1'>
              <Layout2Graphic1 className={`w-full h-full`} />
            </div>
            <div className='graphic2'>
              <Layout2Graphic2 className={`w-full h-full`} />
            </div>
            <div className='graphic3'>
              <Layout2Graphic3 className={`w-full h-full`} />
            </div>
          </div>
        ) : (
          ''
        )}
        {animation == 3 ? (
          <div className={`graphicFrame`}>
            <div className='graphic1'>
              <Layout3Graphic1 className={`w-full h-full`} />
            </div>
            <div className='graphic2'>
              <Layout3Graphic2 className={`w-full h-full`} />
            </div>
            <div className='graphic3'>
              <Layout3Graphic3 className={`w-full h-full`} />
            </div>
          </div>
        ) : (
          ''
        )}
        {animation == 4 ? (
          <div className={`graphicFrame`}>
            <div className='graphic1'>
              <Layout4Graphic1 className={`w-full h-full`} />
            </div>
            <div className='graphic2'>
              <Layout4Graphic2 className={`w-full h-full`} />
            </div>
            <div className='graphic3'>
              <Layout4Graphic3 className={`w-full h-full`} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className='relative flex flex-col w-full text-center items-center text-morin-blue bg-white pt-11 pb-5 px-4 z-1 lg:w-1/2 lg:items-start lg:justify-center lg:text-left lg:px-10'>
        <span className='font-nutmeg font-bold text-ctitle leading-none mb-3 lg:text-h2 lg:mb-7 xl:text-h1 xl:mb-8'>
          {title}
        </span>
        <span className='max-w-[240px] lg:max-w-sm mb-3 lg:mb-7 xl:mb-8'>
          {description}
        </span>
        <div
          className={`bg-white text-morin-blue border-morin-blue group-hover:text-white group-hover:bg-morin-blue flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full border-2 border-solid px-5 duration-300 transition-all`}
        >
          <div className='pt-[2px]'>
            {lang === 'id' ? `${button.id} ${title}` : `${button.en} ${title}`}
          </div>
        </div>
      </div>
    </FancyLink>
  );
};

export default CategoryCard;

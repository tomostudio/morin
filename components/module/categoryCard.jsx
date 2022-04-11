import colors from '@/helpers/colors';
import React from 'react';
import StrokeButton from '../utils/strokeButton';
import { SunRay } from '../utils/svg';
import Image from 'next/image';

const CategoryCard = ({ title, description, link, imgSrc, imgAlt }) => {
  return (
    <div className='group relative flex flex-wrap w-full rounded-2xl overflow-hidden mb-4 last:mb-0 lg:mb-5 lg:odd:flex-row-reverse lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] '>
      <div className='relative w-full min-h-[350px] bg-morin-lightBlue lg:w-1/2'>
        <div className='w-full aspect-1 scale-150  absolute top-1/2 left-1/2 -translate-x-1/2 2xl:ml-0 -translate-y-1/2 lg:opacity-0 group-hover:lg:opacity-100 transition-opacity duration-300'>
          {/* <SunRay className='animate-spin-slow h-full w-full' />*/}
          <Image src={`/RAY.svg`} objectFit='contain' layout='fill' className='animate-spin-slower' />
        </div>
        <div className='w-3/4 h-3/4 absolute-center'>
          <Image
            src={imgSrc}
            blurDataURL={imgSrc}
            placeholder='blur'
            alt={imgAlt}
            objectFit='contain'
            layout='fill'
          />
        </div>
      </div>

      <div className='relative flex flex-col w-full text-center items-center text-morin-blue bg-white pt-11 pb-5 px-4 z-1 lg:w-1/2 lg:items-start lg:justify-center lg:text-left lg:px-10'>
        <span className='font-nutmeg font-bold text-ctitle leading-none mb-3 lg:text-h2 lg:mb-7 xl:text-h1 xl:mb-8'>
          {title}
        </span>
        <span className='max-w-[240px] lg:max-w-sm mb-3 lg:mb-7 xl:mb-8'>
          {description}
        </span>
        <StrokeButton
          color={colors.morinBlue}
          destination={link}
          className='lg:ml-0'
        >
          See All {title}
        </StrokeButton>
      </div>
    </div>
  );
};

export default CategoryCard;

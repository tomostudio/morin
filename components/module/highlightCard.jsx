import Image from 'next/image';
import React from 'react';
import colors from '@/helpers/colors';
import FancyLink from '../utils/fancyLink';
import { Arrow } from '../utils/svg';

const HighlightCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  date,
  title,
  link,
}) => {
  return (
    <div className='px-0 pt-2 lg:p-3'>
      <FancyLink
        destination={link}
        className='flex flex-wrap w-full h-full min-h-[160px] rounded-2xl overflow-hidden xl:min-h-[215px]  hover:shadow-softer hover:-translate-y-2 transition-all duration-300'
      >
        <div className='relative w-5/12'>
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder='blur'
            alt={imgAlt}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex flex-wrap flex-col w-7/12 text-morin-blue bg-white p-3 xl:py-4 xl:px-5'>
          <span className='mb-1.5 xl:mb-2'>{date}</span>
          <span className=' text-mtitle font-nutmeg font-bold leading-none mt-0 mb-5 xl:text-ctitle'>
            {title}
          </span>
          <span className='flex w-fit items-center text-[14px] font-semibold mt-auto'>
            <span className='pt-px md:pt-0.5 lg:pt-px'>See Events</span>
            <div className='w-4 ml-2 xl:w-6'>
              <Arrow color={colors.morinBlue} />
            </div>
          </span>
        </div>
      </FancyLink>
    </div>
  );
};

export default HighlightCard;

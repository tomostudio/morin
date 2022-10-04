import Image from 'next/image';
import React from 'react';
import FancyLink from '../utils/fancyLink';

const InstagramCard = ({ imgSrc, imgPlaceholder, imgAlt, link }) => {
  return (
    <div className='p-2 lg:p-3'>
      <div className='rounded-xl overflow-hidden hover:shadow-softer hover:-translate-y-2 transition-all duration-300'>
        <FancyLink a11yText={`Navigate to Instagram`} blank destination={link} className='relative w-full h-full'>
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder='blur'
            alt={imgAlt}
            width={285}
            height={285}
            layout='responsive'
          />
        </FancyLink>
      </div>
    </div>
  );
};

export default InstagramCard;

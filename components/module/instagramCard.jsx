import Image from 'next/image';
import React from 'react';
import FancyLink from '../utils/fancyLink';

const InstagramCard = ({ imgSrc, imgPlaceholder, imgAlt, link }) => {
  return (
    <FancyLink
      blank
      destination={link}
      className='relative min-w-[225px] min-h-[225px] rounded-xl overflow-hidden'
    >
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
  );
};

export default InstagramCard;

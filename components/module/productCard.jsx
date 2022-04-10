import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'
import { SunRay } from '../utils/svg'

const ProductCard = ({
  title,
  bgColor,
  imgSrc,
  imgBg,
  imgPlaceholder,
  imgAlt,
  link,
  small,
}) => {
  return small ? (
    <div className="w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden">
      <div className="relative w-full" style={{ background: bgColor }}>
        <div className="relative flex justify-center p-8 pb-0 -mt-5 translate-y-5 z-2 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7  xl:pt-24 xl:px-20 xl:-mt-5 xl:translate-y-5">
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="blur"
            alt={imgAlt}
            width={225}
            height={410}
          />
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full">
          <Image
            src={imgBg}
            blurDataURL={imgBg}
            placeholder="blur"
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="w-full h-full scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 overflow-hidden">
          <SunRay className="block animate-spin-slow" />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-3 pt-8 pb-4 z-1 md:pt-12 lg:px-4 lg:pb-5 xl:px-5 xl:pb-8">
        <FancyLink
          destination={link}
          // className="font-nutmeg text-default leading-none md:text-[18px] "
          className="font-nutmeg text-default leading-none md:text-[18px] xl:text-ctitleSmall"
        >
          {title}
        </FancyLink>
      </div>
    </div>
  ) : (
    <div className="w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden transition-all hover:shadow-lg hover:-rotate-3 duration-300">
      <div className="relative w-full" style={{ background: bgColor }}>
        <div className="relative transition-all hover:rotate-6 duration-300 z-2 flex justify-center p-8 pb-0 -mt-5 translate-y-5 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-24 lg:px-20 lg:-mt-5 lg:translate-y-5">
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="blur"
            alt={imgAlt}
            width={225}
            height={410}
          />
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full">
          <Image
            src={imgBg}
            blurDataURL={imgBg}
            placeholder="blur"
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="w-full h-full scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 overflow-hidden">
          <SunRay className="block animate-spin-slow" />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-3 pt-8 pb-4 z-1 md:pt-12 lg:px-4 lg:pb-5 xl:px-5 xl:pb-8">
        <FancyLink
          destination={link}
          className="font-nutmeg text-default leading-none md:text-[18px] lg:text-mtitle xl:text-mtitlebig"
        >
          {title}
        </FancyLink>
      </div>
    </div>
  )
}

export default ProductCard

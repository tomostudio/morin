import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'
import { SunRaySmaller } from '../utils/svg'

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
  return (
    <FancyLink destination={link} className="group block w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden transition-all hover:shadow-lg hover:-rotate-3 duration-300">
      <div className="relative w-full" style={{ background: bgColor }}>
        <div className="relative transition-all group-hover:rotate-6 duration-300 z-2 flex justify-center p-8 pb-0 -mt-5 translate-y-5 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-24 lg:px-20 lg:-mt-5 lg:translate-y-5">
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
          <SunRaySmaller className="block animate-spin-slow" />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-3 pt-8 pb-6 z-1 md:pt-12 lg:px-4 lg:pb-6 xl:px-5 xl:pb-8">
        <div
          className={`font-nutmeg text-default leading-none md:text-[18px] ${small ? "lg:text-ctitleSmall" : "lg:text-mtitle"} xl:text-mtitlebig`}
        >
          {title}
        </div>
      </div>
    </FancyLink>
  )
}

export default ProductCard

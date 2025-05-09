import Image from 'next/legacy/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'
import { SunRaySmaller } from '../utils/svg'
import urlFor from '@/helpers/sanity/urlFor'

const ProductCard = ({
  title,
  bgColor,
  imgSrc,
  imgPlaceholder,
  imgAlt,
  thumbnailFruit,
  link,
  small,
}) => {
  return (
    <FancyLink
      a11yText={`Navigate to ${title}`}
      destination={link}
      className="group block product-card w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden transition-all hover:shadow-lg hover:-rotate-3 duration-300"
    >
      <div
        className={`relative w-full ${
          small
            ? `px-5 pt-10 md:pt-14`
            : `px-5 pt-10 md:px-10 md:pt-14 lg:px-20 lg:pt-20`
        }`}
        style={{ background: bgColor }}
      >
        <div
          className={`${
            small ? 'w-[75%] max-w-md mx-auto' : ''
          } relative transition-all aspect-[4/5] group-hover:rotate-6 duration-300 z-2 flex justify-center translate-y-5 md:translate-y-7 lg:translate-y-5`}
        >
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="empty"
            alt={imgAlt}
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
        <div
          className={`absolute z-1 top-0 left-0 w-full h-full imageFrame group-hover:rotate-[-10deg] transition-all duration-300 layout-${thumbnailFruit.layout}`}
        >
          {thumbnailFruit.fruit1.asset && (
            <div className="fruit1 fruits ">
              <Image
                src={urlFor(thumbnailFruit.fruit1).auto('format').url()}
                blurDataURL={urlFor(thumbnailFruit.fruit1)
                  .width(100)
                  .auto('format')
                  .blur(20)
                  .url()}
                placeholder="blur"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          {thumbnailFruit.fruit2.asset && (
            <div className="fruit2 fruits">
              <Image
                src={urlFor(thumbnailFruit.fruit2).auto('format').url()}
                blurDataURL={urlFor(thumbnailFruit.fruit2)
                  .width(100)
                  .auto('format')
                  .blur(20)
                  .url()}
                placeholder="blur"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          {thumbnailFruit.fruit3.asset && (
            <div className="fruit3 fruits  ">
              <Image
                src={urlFor(thumbnailFruit.fruit3).auto('format').url()}
                blurDataURL={urlFor(thumbnailFruit.fruit3)
                  .width(100)
                  .auto('format')
                  .blur(20)
                  .url()}
                placeholder="blur"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[150%] aspect-[1/1] absolute top-0 left-1/2 translate-x-[-50%] overflow-hidden">
          <SunRaySmaller className="block animate-spin-slow w-full h-full" />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-3 pt-10 pb-8 z-2 md:pt-10 lg:px-4 lg:pb-8 xl:px-5 xl:pb-8">
        <div
          className={`font-nutmeg text-ctitleSmall  leading-none  ${
            small ? 'lg:text-ctitleSmall' : 'lg:text-mtitle'
          } xl:text-mtitlebig`}
        >
          {title}
        </div>
      </div>
    </FancyLink>
  )
}

export default ProductCard

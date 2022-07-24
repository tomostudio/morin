import Image from 'next/image';
import FancyLink from '../utils/fancyLink';
// import { SunRay, SunRaySmaller } from '../utils/svg';
import { Arrow } from '../utils/svg';
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
const HeroCategory = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  title,
  link,
  categoryData,
  end,
}) => {
  const { image1, image2, image3, animation } = categoryData;

  // const animation = 4;
  const HoverComponent = () => {
    return (
      <>
        <div
          className={`relative w-full h-full bg-morin-lightBlue categoryImage layout-${animation}`}
        >
          <div className='flex items-center jusfity-center w-full h-full scale-150 absolute-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <Image
              src={`/RAY.svg`}
              objectFit='contain'
              layout='fill'
              className='animate-spin-slow'
            />
          </div>
          {/* Image 1 */}
          <div className={`imageFrame image1`}>
            <div className='image'>
              <Image
                src={urlFor(image1).auto('format').width(1000).url()}
                blurDataURL={urlFor(image1)
                  .auto('format')
                  .width(400)
                  .blur(25)
                  .url()}
                placeholder='blur'
                alt={imgAlt}
                objectFit='contain'
                layout='fill'
              />
            </div>
          </div>
          {/* Image 2 */}
          <div className={`imageFrame image2`}>
            <div className='image'>
              <Image
                src={urlFor(image2).auto('format').width(1000).url()}
                blurDataURL={urlFor(image2)
                  .auto('format')
                  .width(400)
                  .blur(25)
                  .url()}
                placeholder='blur'
                alt={imgAlt}
                objectFit='contain'
                layout='fill'
              />
            </div>
          </div>
          {/* Image 3 */}
          <div className={`imageFrame image3`}>
            <div className='image'>
              <Image
                src={urlFor(image3).auto('format').width(1000).url()}
                blurDataURL={urlFor(image3)
                  .auto('format')
                  .width(400)
                  .blur(25)
                  .url()}
                placeholder='blur'
                alt={imgAlt}
                objectFit='contain'
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
      </>
    );
  };

  return (
    <FancyLink
      destination={link}
      className={`group relative w-full min-h-screen overflow-hidden  flex items-center justify-center ${
        end ? `h-[calc(100vh+40px)]` : 'h-full'
      }`}
    >
      {/* COVER START */}
      <div
        className={`transition-all w-full h-full group-hover:opacity-0 absolute z-2`}
      >
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder='blur'
          alt={imgAlt}
          objectFit='cover'
          layout='fill'
        />
      </div>
      {/* COVER END */}

      <div className='w-full h-full absolute transition-all z-1'>
        <HoverComponent />
      </div>

      <div
        className={`text-center absolute left-1/2 -translate-x-1/2 z-3 lg:flex lg:items-center lg:justify-between lg:w-full lg:px-10 ${
          end ? 'bottom-16' : 'bottom-6'
        }`}
      >
        <span className='font-nutmeg font-semibold text-white text-ctitleBig xl:text-h1'>
          {title}
        </span>
        <div className='w-full h-full absolute top-0 left-0 transition-all lg:flex lg:justify-center lg:items-center lg:w-14 lg:h-11 lg:border-2 lg:border-solid lg:border-white lg:rounded-full lg:relative lg:top-auto lg:left-auto'>
          <div className='hidden lg:block lg:w-8'>
            <Arrow />
          </div>
        </div>
      </div>
    </FancyLink>
  );
};

export default HeroCategory;

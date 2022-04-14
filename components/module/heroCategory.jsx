import Image from 'next/image';
import FancyLink from '../utils/fancyLink';
// import { SunRay, SunRaySmaller } from '../utils/svg';
import { Arrow } from '../utils/svg';

const HeroCategory = ({
  imgSrc,
  imgProduct,
  imgPlaceholder,
  imgAlt,
  title,
  link,
  hoverType,
}) => {
  const Template = ({ children }) => {
    return (
      <div className={`relative w-full h-full bg-morin-lightBlue`}>
        <div className='flex items-center jusfity-center w-full h-full scale-150 absolute-center'>
          {/* <SunRay className='block animate-spin-slower w-full h-full' /> */}
          <Image
            src={`/RAY.svg`}
            objectFit='contain'
            layout='fill'
            className='animate-spin-slow'
          />
        </div>
        <div className='w-3/4 h-3/4 absolute-center'>{children}</div>
      </div>
    );
  };

  const HoverComponent = () => {
    return (
      <Template>
        <Image
          src={imgProduct}
          blurDataURL={imgProduct}
          placeholder='blur'
          alt={imgAlt}
          objectFit='contain'
          layout='fill'
        />
      </Template>
    );
  };

  return (
    <FancyLink
      destination={link}
      className='group relative w-full h-full min-h-screen overflow-hidden  flex items-center justify-center'
    >
      <div className='transition-all w-full h-full group-hover:opacity-0 absolute z-2'>
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder='blur'
          alt={imgAlt}
          objectFit='cover'
          layout='fill'
        />
      </div>
      <div className='w-full h-full absolute transition-all z-1'>
        <HoverComponent />
      </div>

      <div className='text-center absolute left-1/2 bottom-10 -translate-x-1/2 z-3 lg:flex lg:items-center lg:justify-between lg:w-full lg:px-10'>
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

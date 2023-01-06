import Image from 'next/legacy/image';
import FancyLink from '../utils/fancyLink';
import { Arrow, ArrowLarge } from '../utils/svg';

const RecipeCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  title,
  link,
  category,
  className,
  lang,
  color = 'white',
}) => {
  return (
    <div
      className={`group relative transition-all hover:rotate-3 hover:shadow-lg duration-300 rounded-3xl overflow-hidden aspect-[4/5] height-auto ${className} isolate`}
    >
      <FancyLink
        destination={link}
        a11yText={`Navigate to ${title ? title : 'recipe'}`}
        className={`z-3 flex flex-wrap flex-col items-center justify-between w-full h-full  text-center py-5 px-4 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 xl:py-8 xl:px-5 ${
          color === 'white' ? 'text-white' : 'text-black'
        }`}
      >
        <div className=''>
          <span
            className={`block font-nutmeg font-bold leading-tight mx-auto w-full px-0 md:px-5 text-subtitle2 md:text-h5 xl:text-h4 mb-2 lg:mb-4`}
          >
            {title}
          </span>
          <div className='hidden md:flex flex-wrap justify-center px-7 gap-2'>
            {category?.map((data, id) => (
              <div
                key={id}
                className={`flex items-center h-[25px] rounded-full ${
                  color === 'white' ? 'border-white' : 'border-black'
                } border-solid border-2 px-2 lg:h-[30px] lg:px-4`}
              >
                <span className='pt-0.5 lg:pt-1 font-default'>
                  {lang === 'id' ? data.title.id : data.title.en}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${
            color === 'white' ? 'border-white' : 'border-black'
          } flex items-center justify-center w-9 h-6 rounded-3xl border-2  border-solid px-2 lg:w-11 lg:h-8 lg:px-2 xl:w-16 xl:h-11 xl:px-3`}
        >
          <span className='block w-full lg:hidden'>
            <Arrow color={color === 'white' ? '#FFFFFF' : '#000000'} />
          </span>
          <span className='hidden w-full lg:block'>
            <ArrowLarge color={color === 'white' ? '#FFFFFF' : '#000000'} />
          </span>
        </div>
      </FancyLink>

      <div className='relative w-full h-full rounded-3xl overflow-hidden isolate'>
        <div
          className={`absolute w-full h-full top-0 left-0 ${
            color === 'white'
              ? 'bg-gradient-black-cover'
              : 'bg-gradient-white-cover'
          } z-2 opacity-20 group-hover:opacity-0 transition-opacity duration-300`}
        />
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder='blur'
          alt={imgAlt}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </div>
  );
};

export default RecipeCard;

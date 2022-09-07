import Image from 'next/image';
import FancyLink from '../utils/fancyLink';
import { Arrow, ArrowLarge } from '../utils/svg';

const RecipeCard = ({
  imgSrc,
  imgPlaceholder,
  imgAlt,
  title,
  link,
  duration,
  difficulty,
}) => {
  const titleFontSize =
    duration && difficulty
      ? 'text-default lg:text-mtitleSmall xl:text-ctitle mb-2 lg:mb-4'
      : 'text-mtitleSmall lg:text-mtitle xl:text-ctitle';

  const recipeTag =
    'flex items-center h-[25px] rounded-full border-white border-solid border-2 px-2 mr-2 last:mr-0 lg:h-[30px] lg:px-4';

  return (
    <div className='relative transition-all hover:rotate-3 hover:shadow-lg duration-300 rounded-3xl overflow-hidden aspect-[4/5] group'>
      <FancyLink
        destination={link}
        a11yText={`Navigate to ${title ? title : 'recipe'}`}
        className='flex flex-wrap flex-col items-center justify-between w-full h-full text-white text-center py-5 px-4 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-2 xl:py-8 xl:px-5'
      >
        <div className=''>
          <span
            className={`block font-nutmeg font-bold leading-tight mx-auto w-full px-0 md:px-5 ${titleFontSize}`}
          >
            {title}
          </span>
          {duration && difficulty && (
            <div className='flex flex-wrap justify-center'>
              <div className={recipeTag}>
                <span className='pt-0.5 lg:pt-1 text-[15px] lg:text-default'>
                  {duration}
                </span>
              </div>
              <div className={recipeTag}>
                <span className='pt-0.5 lg:pt-1 font-default'>
                  {difficulty}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className='flex items-center justify-center w-9 h-6 rounded-3xl border-2 border-white border-solid px-2 lg:w-11 lg:h-8 lg:px-2 xl:w-16 xl:h-11 xl:px-3'>
          <span className='block w-full lg:hidden'>
            <Arrow />
          </span>
          <span className='hidden w-full lg:block'>
            <ArrowLarge />
          </span>
        </div>
      </FancyLink>
      <div className='absolute z-1 w-full h-full gradient-black-recipe opacity-20 group-hover:opacity-0 transition-opacity duration-300' />
      <div className='relative w-full h-full'>
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

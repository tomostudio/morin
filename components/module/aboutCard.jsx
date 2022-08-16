import Image from 'next/image';
import FancyLink from '../utils/fancyLink';

const AboutCard = ({
  type,
  title,
  imgSrc,
  imgPlaceholder,
  imgAlt,
  link = false,
  lang,
  button,
  onClick = () => {},
}) => {
  return (
    <div
      className='relative w-full h-full bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-softer transition-all duration-300 hover:rotate-1'
      onClick={onClick}
    >
      <div className='w-full h-full absolute-center'>
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder='blur'
          alt={imgAlt}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='relative w-full h-full'>
        <div className='min-h-[210px] flex flex-col justify-between w-full h-full text-white text-center pt-4 pb-3 px-5 sm:min-h-[300px] md:py-6 md:px-8 md:min-h-[500px] lg:min-h-[650px] xl:min-h-[740px] xl:p-8 2xl:min-h-[850px]'>
          <span className='font-semibold max-w-[150px] tracking-widest mx-auto md:text-default'>
            {type}
          </span>
          <span className='font-nutmeg text-default max-w-[150px] mx-auto md:text-ctitleSmall md:max-w-none lg:text-ctitle xl:text-h2'>
            {title}
          </span>
          <span className='flex items-center min-h-[25px] font-semibold leading-none border-white border-2 border-solid rounded-full px-4 mx-auto md:min-h-[30px] group-hover:text-black group-hover:bg-white transition-all duration-300'>
            <span className='md:pt-0.5'>
              {lang === 'id' ? button.id : button.en}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

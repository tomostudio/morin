import Container from './container';
import FancyLink from '../utils/fancyLink';
import Image from 'next/image';

const Footer = ({ className }) => {
  return (
    <footer className='px-8'>
      <Container
        className={`w-full h-auto grid grid-cols-2 grid-rows-1 gap-7 bg-morin-blue text-white px-10 py-14 rounded-t-3xl relative ${className}`}
      >
        {/* LEFT */}
        <div className='h-full max-w-lg w-[80%] flex flex-col justify-start'>
          <h2 className='text-mtitle font-bold font-nutmeg'>
            Let's Stay In Touch!
          </h2>
          <span>
            Sign up for our weekly newsletter, new products, exclusive
            promotions, job openings, and more.
          </span>
          <form className='flex w-full mt-6 border-2 rounded-2xl overflow-hidden'>
            <div className='relative flex w-full'>
              <input
                className='w-full pt-2 pb-1.5 px-5 default-type placeholder-white placeholder:opacity-60 outline-none bg-transparent'
                type='email'
                placeholder='Your Email'
              />
              <FancyLink
                destination=''
                className='border-l-2 pt-2 pb-1.5 pr-5 pl-4 default-type hover:bg-morin-red transition-background duration-300'
              >
                Submit
              </FancyLink>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className='w-full min-h-full flex justify-end'>
          <div className='w-auto h-full flex flex-col justify-start pr-28 space-y-2'>
            <FancyLink destination='/' className='text-white'>
              Home
            </FancyLink>
            <FancyLink destination='/about' className='text-white'>
              About Us
            </FancyLink>
            <FancyLink destination='/product' className='text-white'>
              Product
            </FancyLink>
            <FancyLink destination='/recipes' className='text-white'>
              Recipes
            </FancyLink>
            <FancyLink destination='/events' className='text-white'>
              Events
            </FancyLink>
            <FancyLink destination='/' className='text-white'>
              Get Morin
            </FancyLink>
          </div>
          <div className='w-auto h-full flex flex-col justify-between pr-28 space-y-2'>
            <FancyLink destination='/faq' className='text-white'>
              Faq
            </FancyLink>
            <FancyLink destination='/contact' className='text-white mt-2'>
              Contact Us
            </FancyLink>
            <div className='w-full h-full flex flex-col justify-end'>
              <div className='flex justify-start w-full space-x-3 mb-2'>
                <FancyLink destination='/' blank={true} className='relative'>
                  <Image
                    src={`/ig-white.svg`}
                    alt={'Instagram'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink destination='/' blank={true} className='relative'>
                  <Image
                    src={`/tw-white.svg`}
                    alt={'Twitter'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink destination='/' blank={true} className='relative'>
                  <Image
                    src={`/fb-white.svg`}
                    alt={'Facebook'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
              </div>
              <span>© Morin Food 2021</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import FancyLink from '@/components/utils/fancyLink';
import Container from '@/components/module/container';
import { MorinLogo, SunRay } from '../utils/svg';

const HeaderLinks = ({
  destination = '',
  className = '',
  children,
  a11yText = '',
  blank = false,
  defaultHover = true,
}) => (
  <FancyLink
    destination={destination}
    a11yText={a11yText}
    blank={blank}
    className={` pt-2 pb-1.5 px-3 rounded-full h-full leading-none font-medium flex ${className} ${
      defaultHover && `hover:opacity-60 transition-opacity ease-linear`
    }`}
  >
    {children}
  </FancyLink>
);

export default function Header() {
  return (
    <header
      className='default-type fixed top-0 left-0 right-0 w-full z-10 pointer-events-none pt-8 header-custom'
      data-scroll
      data-scroll-sticky
      data-scroll-target='#scroll-container'
    >
      <Container>
        <div className='flex flex-wrap flex-row justify-between items-center'>
          <FancyLink
            destination='/'
            a11yText='Navigate to the home page'
            className='max-md:ml-3 max-md:p-0 h-14 relative group'
          >
            <MorinLogo className='w-full h-full relative z-2' />
            <div className='group-hover:opacity-100 opacity-0  transition-opacity duration-500 ease-in-out absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-1 pointer-events-none'>
              <SunRay className='w-96 h-96  animate-spin-slow' />
            </div>
          </FancyLink>
          <nav
            className={`ml-auto p-1.5 px-2 space-x-1 shadow-softer bg-white rounded-full flex flex-row max-md:justify-end w-full text-sm md:text-sm md:w-auto transition-colors duration-300 ease-linear`}
          >
            <HeaderLinks
              destination='/about'
              a11yText='Navigate to the About Page'
            >
              About
            </HeaderLinks>
            <HeaderLinks
              destination='/products'
              a11yText='Navigate to the Products Page'
            >
              Products
            </HeaderLinks>
            <HeaderLinks
              destination='/recipes'
              a11yText='Navigate to the Recipes Page'
            >
              Recipes
            </HeaderLinks>
            <HeaderLinks
              destination='/events'
              a11yText='Navigate to the Events Page'
            >
              Events
            </HeaderLinks>
            <HeaderLinks
              destination={'/'}
              blank={true}
              a11yText='Navigate to the about page'
              defaultHover={false}
              className='text-white bg-morin-blue hover:shadow-softer hover:-translate-x-px hover:-translate-y-px transition-all ease-in-out'
            >
              Get Morin!
            </HeaderLinks>
          </nav>
        </div>
      </Container>
    </header>
  );
}

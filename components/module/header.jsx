import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FancyLink from '@/components/utils/fancyLink';
import Container from '@/components/module/container';
import Hamburger from '../utils/hamburger';
import { MorinLogo, SunRay, SunRay15 } from '../utils/svg';
import { translate } from 'tailwindcss/defaultTheme';

const navData = [
  {
    id: 'nav-1',
    title: 'About',
    dest: 'about',
    ariaText: 'Navigate to the About page',
  },
  {
    id: 'nav-2',
    title: 'Products',
    dest: 'products',
    ariaText: 'Navigate to the Products page',
  },
  {
    id: 'nav-3',
    title: 'Recipes',
    dest: 'recipe',
    ariaText: 'Navigate to the Recipes page',
  },
  {
    id: 'nav-4',
    title: 'Events',
    dest: 'events',
    ariaText: 'Navigate to the Events page',
  },
];

export default function Header({ hamburgerColor }) {
  const [opened, setOpened] = useState(false);

  const toggleHamburgermenu = () => {
    setOpened((prev) => {
      const menu = document.querySelector('.mobileMenu');
      const body = document.querySelector('body');

      if (prev) {
        // change into closed state
        body.classList.remove('overflow-hidden');
        menu.classList.remove('opacity-100');
        menu.classList.remove('visible');
        menu.classList.add('opacity-0');
        setTimeout(() => menu.classList.add('invisible'), FIFODuration);
      }

      if (!prev) {
        // change into opened state
        body.classList.add('overflow-hidden');
        menu.classList.remove('opacity-0');
        menu.classList.remove('invisible');
        menu.classList.add('opacity-100');
        menu.classList.add('visible');
      }

      return !prev;
    });
  };

  const [markerW, setMarkerW] = useState(120);
  const [markerPos, setMarkerPos] = useState(381);
  let widthData = [];

  const defaultNavRef = useRef();
  const navRef = useRef();
  const navMouseOver = (e) => {
    setMarkerW(e.target.clientWidth);

    // reset and set color
    navRef.current.querySelectorAll('a').forEach((item) => {
      item.classList.remove('focus');
    });

    e.target.classList.add('focus');

    // adjust width
    let moveX = 0;
    // get width of all nav
    navRef.current
      .querySelectorAll('a:not(.default-nav)')
      .forEach((item, id) => {
        widthData[id] = item.clientWidth;
      });

    widthData.forEach((w, id) => {
      if (e.target.dataset.id == -1 || id < e.target.dataset.id) {
        moveX = moveX + w;
      }
    });
    setMarkerPos(moveX);
  };
  const navLeave = () => {
    resetNav();
  };

  const resetNav = () => {
    setMarkerW(defaultNavRef.current.clientWidth);
    //update all nav width data
    navRef.current
      .querySelectorAll('a:not(.default-nav)')
      .forEach((item, id) => {
        item.classList.remove('focus');
        widthData[id] = item.clientWidth;
      });
    defaultNavRef.current.classList.add('focus');

    let moveX = 0;
    widthData.forEach((w) => {
      moveX = moveX + w;
    });
    setMarkerPos(moveX);
  };

  useEffect(() => {
    setTimeout(() => {
      resetNav();
    }, 50); // load delay
  }, []);

  const mobileLink = `font-nutmeg font-bold text-white text-mtitleBig leading-none`;
  const FIFODuration = 300;

  return (
    <header className='default-type header-custom pointer-events-none fixed top-0 left-0 right-0 z-10 w-full pt-8'>
      <Container>
        <div className='flex flex-row flex-wrap items-center justify-between'>
          <FancyLink
            destination='/'
            a11yText='Navigate to the home page'
            className='group pointer-events-auto relative h-14 max-md:ml-3 max-md:p-0'
          >
            <MorinLogo className='relative z-2 h-full w-full' />
            <div className='pointer-events-none absolute  top-[50%] left-[50%] -z-1 translate-x-[-50%] translate-y-[-50%] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'>
              <SunRay15 className='h-96 w-96 animate-spin-slow' />
            </div>
          </FancyLink>
          <nav
            className='header-nav pointer-events-auto relative hidden rounded-full bg-white p-1.5 shadow-softer lg:flex'
            onSubmit={(e) => e.preventDefault()}
            onMouseLeave={navLeave}
            ref={navRef}
          >
            {navData?.map((item, id) => (
              <FancyLink
                destination={`/${item.dest}`}
                a11yText={item.ariaText}
                key={item.id}
                className=''
                onMouseEnter={navMouseOver}
                data-id={id}
              >
                {item.title}
              </FancyLink>
            ))}
            <FancyLink
              className='default-nav focus'
              onMouseEnter={navMouseOver}
              a11yText={'Navigate to the Get Morin page'}
              destination={`/get-morin`}
              data-id={-1}
              ref={defaultNavRef}
            >
              Get Morin!
            </FancyLink>
            <div
              id='marker'
              aria-hidden='true'
              style={{
                width: markerW,
                transform: `translateX(${markerPos}px)`,
              }}
              className='absolute left-[6px] z-1 h-8 rounded-full bg-morin-blue shadow-softer transition-all duration-300 ease-in-out-expo'
            />
          </nav>

          {/* MOBILE */}
          <Hamburger
            className='block lg:hidden'
            opened={opened}
            onClick={() => toggleHamburgermenu()}
            color={hamburgerColor}
          />
          <div
            className={`mobileMenu fixed top-0 left-0 h-screen w-full bg-morin-blue transition ease-in-out duration-${FIFODuration} invisible -z-1 opacity-0 lg:hidden`}
          >
            <div className='absolute -top-3/4 left-1/2 -z-1 -translate-x-1/2'>
              <SunRay className='block w-[1000px] animate-spin-slow' />
            </div>
            <div className='relative z-1 flex h-full w-full items-center justify-center pb-20'>
              <nav className='flex w-full flex-col space-y-[35px] text-center'>
                <FancyLink
                  destination='/about'
                  a11yText='Navigate to the About Page'
                  className={mobileLink}
                >
                  About
                </FancyLink>
                <FancyLink
                  destination='/products'
                  a11yText='Navigate to the Products Page'
                  className={mobileLink}
                >
                  Products
                </FancyLink>
                <FancyLink
                  destination='/recipes'
                  a11yText='Navigate to the Recipes Page'
                  className={mobileLink}
                >
                  Recipes
                </FancyLink>
                <FancyLink
                  destination='/events'
                  a11yText='Navigate to the Events Page'
                  className={mobileLink}
                >
                  Events
                </FancyLink>
                <FancyLink
                  blank={true}
                  destination={'/'}
                  a11yText='Navigate to the about page'
                  className={mobileLink}
                >
                  Get Morin!
                </FancyLink>
              </nav>
              <div className='absolute bottom-20 left-1/2 mx-auto flex w-fit -translate-x-1/2 items-center space-x-1.5 rounded-full bg-white p-1.5'>
                <FancyLink
                  destination='/'
                  blank={true}
                  className='flex leading-none'
                >
                  <Image
                    src={`/ig.svg`}
                    alt={'Instagram'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink
                  destination='/'
                  blank={true}
                  className='flex leading-none'
                >
                  <Image
                    src={`/tw.svg`}
                    alt={'Twitter'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink
                  destination='/'
                  blank={true}
                  className='flex leading-none'
                >
                  <Image
                    src={`/fb.svg`}
                    alt={'Facebook'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

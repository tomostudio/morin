import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/module/container'
import Hamburger from '../micro-module/hamburger'
import { useAppContext } from 'context/state'
import {
  MorinLogo,
  SunRay,
  SunRaySmaller,
  Twitter,
  Instagram,
  Facebook,
  WaButton,
} from '../utils/svg'
import { rotate3, rotate_3, defaultHover } from '../utils/tailwind-preset'

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
    dest: 'recipes',
    ariaText: 'Navigate to the Recipes page',
  },
  {
    id: 'nav-4',
    title: 'Events',
    dest: 'events',
    ariaText: 'Navigate to the Events page',
  },
]

export default function Header({ waLink }) {
  const [opened, setOpened] = useState(false)
  const ctx = useAppContext()

  // Mobile Menu Toggle
  const toggleHamburgermenu = () => {
    const body = document.querySelector('body')
    if (ctx.mobileMenuOpen) {
      // change into closed state
      body.classList.remove('overflow-hidden')
      ctx.mobileMenuOpen = false
    } else {
      // change into opened state
      body.classList.add('overflow-hidden')

      ctx.mobileMenuOpen = true
    }
    setOpened(ctx.mobileMenuOpen)
  }

  useEffect(() => {
    setOpened(ctx.mobileMenuOpen)
  }, [ctx.mobileMenuOpen])

  // Market Variable
  const [markerW, setMarkerW] = useState(120) // width of marker
  const [markerPos, setMarkerPos] = useState(396) // position of marker
  let widthData = [] // always collect width data.

  const defaultNavRef = useRef()
  const navRef = useRef()

  // function when navigation on hover in
  const navMouseOver = (e) => {
    // set marker width according to button yand di hover
    setMarkerW(e.target.clientWidth)

    // reset and set color of navigation
    navRef.current.querySelectorAll('a').forEach((item) => {
      item.classList.remove('focus')
    })

    // set target nav color to white (with class)
    e.target.classList.add('focus')

    // set position variable
    let moveX = 0

    // get width of all nav
    navRef.current
      .querySelectorAll('a:not(.default-nav)')
      .forEach((item, id) => {
        widthData[id] = item.clientWidth
      })

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (e.target.dataset.id == -1 || id < e.target.dataset.id) {
        moveX = moveX + w
      }
    })
    // set marker position.
    setMarkerPos(moveX)
  }

  // function when navigation on hover out
  const navLeave = () => {
    resetNav()
  }

  const resetNav = () => {
    const width = window.innerWidth
    if (width > 1024) {
      document.querySelector('body').classList.remove('overflow-hidden')
      setMarkerW(defaultNavRef.current.clientWidth)
      //update all nav width data
      document
        .querySelectorAll('nav.header-nav a:not(.default-nav)')
        .forEach((item, id) => {
          item.classList.remove('focus')
          widthData[id] = item.clientWidth
        })
      defaultNavRef.current.classList.add('focus')

      let moveX = 0
      widthData.forEach((w) => {
        moveX = moveX + w
      })
      setMarkerPos(moveX)
    }
  }

  const [blackButton, setBlackButton] = useState(ctx.blackButton)

  useEffect(() => {
    const scrollListener = () => {
      console.log(ctx.mobileDark, ctx)
      if (window.scrollY > 250) {
        setBlackButton(true)
      } else {
        setBlackButton(ctx.mobileDark)
      }
    }

    setTimeout(() => {
      document.addEventListener('resize', resetNav, false)
      document.addEventListener('scroll', scrollListener, false)
    }, 50) // load delay
    return () => {
      document.removeEventListener('resize', resetNav, false)
      document.removeEventListener('scroll', scrollListener, false)
    }
  }, [])

  useEffect(() => {
    setBlackButton(ctx.mobileDark)
  }, [ctx.mobileDark])

  const FIFODuration = 300

  return (
    <>
      <header className="default-type header-custom pointer-events-none fixed top-0 left-0 right-0 z-10 w-full pt-8">
        <Container>
          <div className="flex flex-row flex-wrap items-center justify-between">
            <FancyLink
              destination="/"
              a11yText="Navigate to the home page"
              className="group pointer-events-auto relative h-9 lg:h-14 max-md:p-0"
            >
              <MorinLogo className="relative z-2 h-full w-full" />
              <div className="pointer-events-none absolute  top-[50%] left-[50%] -z-1 translate-x-[-50%] translate-y-[-50%] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <SunRaySmaller className="h-96 w-96 animate-spin-slow" />
              </div>
            </FancyLink>
            <nav
              className="header-nav pointer-events-auto relative hidden rounded-full bg-white py-1.5 px-2 shadow-softer lg:flex"
              onSubmit={(e) => e.preventDefault()}
              onMouseLeave={navLeave}
              ref={navRef}
            >
              {navData?.map((item, id) => (
                <FancyLink
                  destination={`/${item.dest}`}
                  a11yText={item.ariaText}
                  key={item.id}
                  className=""
                  onMouseEnter={navMouseOver}
                  data-id={id}
                >
                  {item.title}
                </FancyLink>
              ))}
              <FancyLink
                className="default-nav focus"
                onMouseEnter={navMouseOver}
                a11yText={'Navigate to the Get Morin page'}
                destination={`/get-morin`}
                data-id={-1}
                ref={defaultNavRef}
              >
                Get Morin!
              </FancyLink>
              <div
                id="marker"
                aria-hidden="true"
                style={{
                  width: markerW,
                  transform: `translateX(${markerPos}px)`,
                }}
                className="absolute left-[6px] z-1 h-8 rounded-full bg-morin-blue shadow-softer transition-all duration-300 ease-in-out-expo"
              />
            </nav>

            {/* MOBILE */}
            <Hamburger
              className="block lg:hidden"
              opened={opened}
              onClick={() => toggleHamburgermenu()}
              dark={blackButton}
            />
            <div
              className={`mobileMenu fixed top-0 left-0 h-screen w-full bg-morin-blue transition ease-in-out duration-${FIFODuration} -z-1 lg:hidden ${
                opened
                  ? 'opacity-100  pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="absolute top-0 left-1/2 aspect-1 -z-1 translate-y-[-60%] -translate-x-1/2 w-screen min-w-[600px] ">
                <SunRay className="block w-full animate-spin-slower h-full" />
              </div>
              <div className="relative z-1 flex h-full w-full items-center justify-center pb-20">
                <nav className="flex w-full flex-col space-y-6 text-center items-center">
                  {navData?.map((item, id) => (
                    <FancyLink
                      key={id}
                      destination={`/${item.dest}`}
                      a11yText={item.ariaText}
                      className={`font-nutmeg font-bold text-white text-mtitleBig leading-none ${
                        Math.random() >= 0.5 ? rotate3 : rotate_3
                      } `}
                    >
                      {item.title}
                    </FancyLink>
                  ))}
                  <FancyLink
                    destination={'/get-morin'}
                    a11yText="Navigate to the about page"
                    className={`font-nutmeg font-bold text-white text-mtitleBig leading-none  p-2  ${
                      Math.random() >= 0.5 ? rotate3 : rotate_3
                    }`}
                  >
                    Get Morin!
                  </FancyLink>
                </nav>
                <div className="absolute bottom-20 left-1/2 mx-auto flex w-fit -translate-x-1/2 items-center space-x-1.5 rounded-full bg-white p-1.5">
                  <FancyLink
                    destination="/"
                    blank={true}
                    className={`flex leading-none ${defaultHover}`}
                  >
                    <Image
                      src={`/IG.svg`}
                      alt={'Instagram'}
                      width={36}
                      height={36}
                    />
                  </FancyLink>
                  <FancyLink
                    destination="/"
                    blank={true}
                    className={`flex leading-none ${defaultHover}`}
                  >
                    <Twitter className="w-9 h-9" />
                  </FancyLink>
                  <FancyLink
                    destination="/"
                    blank={true}
                    className={`flex leading-none ${defaultHover}`}
                  >
                    <Facebook className="w-9 h-9" />
                  </FancyLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <FancyLink destination={waLink} className="fixed z-10 bottom-0 right-0 w-[66px] h-fit m-6">
        <WaButton />
      </FancyLink>
    </>
  )
}

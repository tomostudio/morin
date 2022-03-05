import { useState, useEffect } from "react";
import Image from "next/image";
import FancyLink from "@/components/utils/fancyLink";
import Container from "@/components/module/container";
import Hamburger from "../utils/hamburger";
import { MorinLogo, SunRay } from "../utils/svg";

// const HeaderLinks = ({
//   destination = "",
//   className = "",
//   children,
//   a11yText = "",
//   blank = false,
//   defaultHover = true,
//   onClick,
// }) => (
//   <FancyLink
//     destination={destination}
//     a11yText={a11yText}
//     blank={blank}
//     onClick={onClick}
//     className={`pt-2 pb-1.5 px-3 rounded-full h-full leading-none font-medium flex ${className} ${
//       defaultHover && `hover:opacity-60 transition-opacity ease-linear`
//     }`}
//   >
//     {children}
//   </FancyLink>
// );

const navData = [
  {
    id: "nav-1",
    title: "About",
    value: "about",
    ariaText: "Navigate to the About page",
  },
  {
    id: "nav-2",
    title: "Products",
    value: "products",
    ariaText: "Navigate to the Products page",
  },
  {
    id: "nav-3",
    title: "Recipes",
    value: "recipes",
    ariaText: "Navigate to the Recipes page",
  },
  {
    id: "nav-4",
    title: "Events",
    value: "events",
    ariaText: "Navigate to the Events page",
  },
  {
    id: "nav-5",
    title: "Get Morin!",
    value: "get-morin",
    ariaText: "Navigate to the Get Morin page",
  },
];

export default function Header() {
  const defaultNav = navData[navData.length - 1];
  const [opened, setOpened] = useState(false);
  const [desktopNav, setDesktopNav] = useState(defaultNav?.value);
  const [thisEl, setThisEl] = useState(null);

  const toggleHamburgermenu = () => {
    setOpened((prev) => {
      const menu = document.querySelector(".mobileMenu");
      const body = document.querySelector("body");

      if (prev) {
        // change into closed state
        body.classList.remove("overflow-hidden");
        menu.classList.remove("opacity-100");
        menu.classList.remove("visible");
        menu.classList.add("opacity-0");
        setTimeout(() => menu.classList.add("invisible"), FIFODuration);
      }

      if (!prev) {
        // change into opened state
        body.classList.add("overflow-hidden");
        menu.classList.remove("opacity-0");
        menu.classList.remove("invisible");
        menu.classList.add("opacity-100");
        menu.classList.add("visible");
      }

      return !prev;
    });
  };

  const handleActiveNav = (val, id) => {
    // do navigational function here

    measureEl(id);
    setDesktopNav(val);
  };

  const measureEl = (id) => {
    const parent = document
      .querySelector(".radio-switch")
      .getBoundingClientRect();
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect();
    const left = current.left - parent.left;

    setThisEl(left);
  };

  useEffect(() => {
    measureEl(defaultNav?.id);
  }, []);

  const mobileLink = `font-nutmeg font-bold text-white text-mtitle leading-none`;
  const FIFODuration = 300;

  return (
    <header
      className="default-type fixed top-0 left-0 right-0 w-full z-10 pt-7 lg:pt-8 header-custom"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <Container className={"px-4 lg:px-8"}>
        <div className="flex flex-wrap flex-row justify-between items-center">
          {/* LOGO */}
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className="relative group w-[87px] lg:w-[142px]"
          >
            <MorinLogo className="w-full h-full relative z-2" />
            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-1 pointer-events-none">
              <SunRay className="w-96 h-96  animate-spin-slow" />
            </div>
          </FancyLink>

          {/* DESKTOP */}
          <nav
            className="radio-switch hidden lg:flex"
            onSubmit={(e) => e.preventDefault()}
          >
            {navData?.map((item) => (
              <div key={item.id} className="radio-switch__item">
                <input
                  type="radio"
                  name="desktop-nav"
                  className="radio-switch__input sr-only"
                  id={item.id}
                  value={item.value}
                  checked={item.value === desktopNav}
                  onChange={(e) => handleActiveNav(e.target.value, item.id)}
                />
                <label className="radio-switch__label" htmlFor={item.id}>
                  {item.title}
                </label>
              </div>
            ))}
            {thisEl ? (
              <div
                aria-hidden="true"
                style={{ transform: `translate(${thisEl}px, -50%)` }}
                className="radio-switch__marker"
              />
            ) : ""}
          </nav>

          {/* <nav
            className={`hidden lg:flex ml-auto p-1.5 px-2 space-x-1 shadow-softer bg-white rounded-full flex-row max-md:justify-end w-full text-sm md:text-sm md:w-auto transition-colors duration-300 ease-linear`}
          >
            <HeaderLinks
              destination="/about"
              a11yText="Navigate to the About Page"
            >
              About
            </HeaderLinks>
            <HeaderLinks
              destination="/products"
              a11yText="Navigate to the Products Page"
            >
              Products
            </HeaderLinks>
            <HeaderLinks
              destination="/recipes"
              a11yText="Navigate to the Recipes Page"
            >
              Recipes
            </HeaderLinks>
            <HeaderLinks
              destination="/events"
              a11yText="Navigate to the Events Page"
            >
              Events
            </HeaderLinks>
            <HeaderLinks
              destination={"/"}
              blank={true}
              a11yText="Navigate to the about page"
              defaultHover={false}
              className="text-white bg-morin-blue hover:shadow-softer hover:-translate-x-px hover:-translate-y-px transition-all ease-in-out"
            >
              Get Morin!
            </HeaderLinks>
          </nav> */}

          {/* MOBILE */}
          <Hamburger
            className="block lg:hidden"
            opened={opened}
            onClick={() => toggleHamburgermenu()}
          />
          <div
            className={`mobileMenu fixed top-0 left-0 w-full h-screen bg-morin-blue flex flex-col justify-between transition ease-in-out duration-${FIFODuration} opacity-0 invisible -z-1 pt-[200px] pb-[80px]`}
          >
            <div className="absolute -top-3/4 left-1/2 -translate-x-1/2">
              <SunRay className="block w-[1000px] animate-spin-slow" />
            </div>
            <nav className="w-full text-center flex flex-col space-y-[35px] z-1">
              <FancyLink
                destination="/about"
                a11yText="Navigate to the About Page"
                className={mobileLink}
              >
                About
              </FancyLink>
              <FancyLink
                destination="/products"
                a11yText="Navigate to the Products Page"
                className={mobileLink}
              >
                Products
              </FancyLink>
              <FancyLink
                destination="/recipes"
                a11yText="Navigate to the Recipes Page"
                className={mobileLink}
              >
                Recipes
              </FancyLink>
              <FancyLink
                destination="/events"
                a11yText="Navigate to the Events Page"
                className={mobileLink}
              >
                Events
              </FancyLink>
              <FancyLink
                blank={true}
                destination={"/"}
                a11yText="Navigate to the about page"
                className={mobileLink}
              >
                Get Morin!
              </FancyLink>
            </nav>
            <div className="flex items-center w-fit bg-white rounded-full space-x-1.5 p-1.5 mx-auto">
              <FancyLink
                destination="/"
                blank={true}
                className="flex leading-none"
              >
                <Image
                  src={`/ig.svg`}
                  alt={"Instagram"}
                  width={36}
                  height={36}
                />
              </FancyLink>
              <FancyLink
                destination="/"
                blank={true}
                className="flex leading-none"
              >
                <Image src={`/tw.svg`} alt={"Twitter"} width={36} height={36} />
              </FancyLink>
              <FancyLink
                destination="/"
                blank={true}
                className="flex leading-none"
              >
                <Image
                  src={`/fb.svg`}
                  alt={"Facebook"}
                  width={36}
                  height={36}
                />
              </FancyLink>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

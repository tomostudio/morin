import { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";

import Layout from "@/components/module/layout";
import Header from "@/components/module/header";
import Footer from "@/components/module/footer";
import Container from "@/components/module/container";

import ScrollTriggerWrapper from "@/components/utils/scrolltrigger.jsx";
import FancyLink from "@/components/utils/fancyLink";

import { fade } from "@/helpers/transitions";
import locooptions from "@/helpers/locooptions";
import colors from "@/helpers/colors";
import PushScrollGlobal from "@/helpers/globalscroll";
import HeroSlider from "@/components/utils/heroSlider";
import MorinButton from "@/components/utils/morinButton";
import RecipeSlider from "@/components/utils/recipeSlider";
import CategoryCard from "@/components/module/categoryCard";
import {
  Arrow,
  HeartSmall,
  HeartLarge,
  // RecipeTitleMobile,
  // RecipeTitleDesktop,
} from "@/components/utils/svg";

const categoryData = [
  {
    imgSrc: "/category/morin-1.svg",
    imgPlaceholder: "/category/morin-1.png",
    imgAlt: "Spreads",
    title: "Spreads",
    link: "/products/spreads",
  },
  {
    imgSrc: "/category/morin-2.svg",
    imgPlaceholder: "/category/morin-2.png",
    imgAlt: "Jams",
    title: "Jams",
    link: "/products/jams",
  },
  {
    imgSrc: "/category/morin-3.svg",
    imgPlaceholder: "/category/morin-3.png",
    imgAlt: "Toppings",
    title: "Toppings",
    link: "/products/toppings",
  },
  {
    imgSrc: "/category/morin-4.svg",
    imgPlaceholder: "/category/morin-4.png",
    imgAlt: "Fillings",
    title: "Fillings",
    link: "/products/fillings",
  },
];

const recipeData = [
  {
    imgSrc: "/recipe/recipe-1.svg",
    imgPlaceholder: "/recipe/recipe-1.png",
    imgAlt: "Mixed Berry Jam Tartlets",
    title: "Mixed Berry Jam Tartlets",
    link: "/recipe/recipe-id",
  },
  {
    imgSrc: "/recipe/recipe-2.svg",
    imgPlaceholder: "/recipe/recipe-2.png",
    imgAlt: "Strawberry Trifle",
    title: "Strawberry Trifle",
    link: "/recipe/recipe-id",
  },
  {
    imgSrc: "/recipe/recipe-3.svg",
    imgPlaceholder: "/recipe/recipe-3.png",
    imgAlt: "Chocolate Fudge Cupcakes",
    title: "Chocolate Fudge Cupcakes",
    link: "/recipe/recipe-id",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  // SET OBJECT ANIMATION
  const animationObj = {
    "(min-width: 751px)": [
      () => {
        const id = "si01";
        const elem = ".scrollsection .line";
        const settings = {
          scrollTrigger: {
            id: id,
            trigger: ".scrollsection", // which page section will be tracked as the scroll trigger
            scroller: "#scroll-container", // id of scroll container
            scrub: true,
            start: "top 0%",
            end: "+=100%",
            // onUpdate: (e) => { console.log('1', Math.round(e.progress * 100)) }
          },
        };
        const animation = [
          {
            set: [
              elem,
              {
                background: "rgba(253, 230, 138, 1)",
              },
            ],
          },
          {
            to: [
              elem,
              {
                scaleX: 0,
                transformOrigin: "left center",
                background: "rgba(253, 230, 138, 0)",
                ease: "none",
                duration: 1,
              },
              0,
            ],
          },
        ];
        return { id, elem, settings, animation };
      },
    ],
    "(max-width: 750px)": [
      () => {
        const id = "si02";
        const elem = ".scrollsection .line";
        const settings = {
          scrollTrigger: {
            id: id,
            trigger: ".scrollsection", // which page section will be tracked as the scroll trigger
            scroller: "#scroll-container", // id of scroll container
            scrub: true,
            start: "top 0%",
            end: "+=100%",
            // onUpdate: (e) => { console.log('2', Math.round(e.progress * 100)) }
          },
        };
        const animation = [
          {
            set: [
              elem,
              {
                background: "rgba(253, 230, 138, 0)",
              },
            ],
          },
          {
            to: [
              elem,
              {
                scaleX: 0,
                transformOrigin: "left center",
                background: "rgba(253, 230, 138, 1)",
                ease: "none",
                duration: 2,
              },
              0,
            ],
          },
        ];
        return { id, elem, settings, animation };
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("LocoCall", (e) => {
      // console.log('triggered', e.detail);
    });
    return () => {};
  }, []);

  return (
    <>
      <NextSeo title="Home" />

      {/* LOCOMOTIVE SCROLL DEFAULT */}
      <LocomotiveScrollProvider
        options={locooptions}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div
          data-scroll-container
          ref={containerRef}
          id="scroll-container"
          className="test test2 test3"
        >
          <div data-scroll-section>
            {/* SCROLL TRIGGER WRAPPER */}
            <ScrollTriggerWrapper animation={animationObj}>
              {/* CONTENT STARTS */}
              <Header />
              <LazyMotion features={domAnimation}>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={fade}
                >
                  <Layout>
                    <section className="scrollsection">
                      <HeroSlider className="w-full min-h-screen" />
                    </section>
                    <section>
                      <Container
                        border={false}
                        background={colors.offWhite}
                        bgTail={true}
                        safeWidth={true}
                      >
                        <div className="flex flex-wrap w-full lg:items-start">
                          <div className="w-full lg:w-[35%] lg:min-h-[calc(100vh-86px)] lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-[86px]">
                            <div className="mt-[100px] mb-[80px] lg:mt-[30px] lg:max-w-[365px] lg:pr-[32px]">
                              <h2 className="text-[28px] text-morin-blue font-nutmeg font-normal text-center leading-tight mb-[15px] lg:text-left lg:text-ctitleSmall xl:leading-[32px] lg:mb-[30px]">
                                Jodohnya Roti! Lorem Ipsum sit Amet Lorem Ipsum
                                Amet Lorem.
                              </h2>
                              <MorinButton
                                destination="/products"
                                color={colors.morinBlue}
                                className="lg:mx-0"
                              >
                                See All Products
                              </MorinButton>
                            </div>
                            <div className="flex flex-wrap max-w-[90px] justify-between mb-5 mx-auto lg:max-w-[185px] lg:mb-10 lg:mx-0">
                              <div className="relative w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/halal.svg`}
                                  alt={"Halal"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="relative w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/pom.svg`}
                                  alt={"Badan POM"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="relative w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/topbrand.svg`}
                                  alt={"Top Brand"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full lg:w-[65%]">
                            {categoryData?.map((i) => (
                              <div
                                className="relative w-[calc(100%+64px)] min-h-screen -mx-8 lg:w-[calc(100%+32px)] lg:mx-0"
                                key={i.title}
                              >
                                <CategoryCard
                                  imgSrc={i.imgSrc}
                                  imgPlaceholder={i.imgPlaceholder}
                                  imgAlt={i.imgAlt}
                                />
                                <div className="text-center absolute left-1/2 bottom-[40px] -translate-x-1/2 z-1 lg:flex lg:items-center lg:justify-between lg:w-full lg:px-10">
                                  <span className="font-nutmeg font-semibold text-white text-ctitleBig xl:text-h1">
                                    {i.title}
                                  </span>
                                  <FancyLink
                                    destination={i.link}
                                    className="w-full h-full absolute top-0 left-0 lg:flex lg:justify-center lg:items-center lg:w-[60px] lg:h-[45px] lg:border-2 lg:border-solid lg:border-white lg:rounded-[45px] lg:relative lg:top-auto lg:left-auto"
                                  >
                                    <div className="hidden lg:block lg:w-[32px]">
                                      <Arrow />
                                    </div>
                                  </FancyLink>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Container>
                    </section>
                    <section>
                      <Container
                        border={true}
                        background={colors.morinPeach}
                        bgTail={true}
                        safeWidth={true}
                      >
                        <div className="flex flex-wrap w-full">
                          <div className="w-full text-center mb-[30px] md:w-[60%] md:text-left lg:mb-[40px] xl:w-[70%] xl:mb-[60px]">
                            <h2 className="relative max-w-[175px] font-nutmeg font-bold text-ctitle text-morin-red leading-[34px] mb-[15px] mx-auto md:max-w-fit md:mb-[10px] md:mx-0 lg:text-h2 lg:leading-tight xl:text-h1">
                              Recipes <br className="md:hidden" /> from Love
                              <div className="w-[30px] absolute -top-[2px] left-[calc(100%-15px)] md:hidden">
                                <HeartSmall className="md:hidden" />
                              </div>
                              <div className="hidden w-[50px] absolute -top-[2px] left-[calc(100%+5px)] md:block lg:w-[70px] lg:top-[5px] lg:left-[calc(100%+10px)] xl:w-[100px] xl:left-full">
                                <HeartLarge className="hidden md:block" />
                              </div>
                            </h2>
                            <p className="max-w-[300px] text-morin-red text-[9px] mx-auto sm:text-defaultSmall md:mx-0 lg:max-w-[500px] lg:text-default xl:max-w-[600px]">
                              Lorem Ipsum Dolor sit Amet Lorem Ipsum Dolor sit
                              Amet Lorem Ipsum Dolor sit Amet Lorem Ipsum Amet
                              Lorem Ipsum.
                            </p>
                            {/* <div className="block min-w-[175px] mx-auto lg:hidden">
                              <RecipeTitleMobile />
                            </div>
                            <div className="hidden lg:block">
                              <RecipeTitleDesktop />
                            </div> */}
                          </div>
                          <div className="w-full order-3 md:order-none md:w-fit md:pl-[50px] md:ml-auto">
                            <MorinButton
                              destination="/recipes"
                              color={colors.morinRed}
                            >
                              See All Recipes
                            </MorinButton>
                          </div>
                          <div className="w-[calc(100%+64px)] -mx-[32px] mb-[30px] md:w-[calc(100%+32px)] md:-mx-[16px] md:mb-0">
                            <RecipeSlider data={recipeData} />
                          </div>
                        </div>
                      </Container>
                    </section>
                    <section>
                      <Container
                        border={true}
                        background={colors.morinRed}
                        bgTail={true}
                        className=""
                        safeWidth={false}
                      >
                        <div className="w-full bg-slate-400 h-40 min-h-[50vh] setflex-center">
                          PLACEHOLDER
                        </div>
                      </Container>
                    </section>
                    <Footer />
                  </Layout>
                </m.div>
              </LazyMotion>
              {/* CONTENT ENDS */}
            </ScrollTriggerWrapper>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

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
import HeroSlider from "@/components/sliders/heroSlider";
import HighlightSlider from "@/components/sliders/highlightSlider";
import InstagramSlider from "@/components/sliders/instagramSlider";
import RecipeSlider from "@/components/sliders/recipeSlider";
import MorinButton from "@/components/utils/morinButton";
import HeroCategory from "@/components/module/heroCategory";
import { HeartSmall, HeartLarge, Scribble } from "@/components/utils/svg";

const categoryData = [
  {
    imgSrc: "/category/category-1.jpg",
    imgPlaceholder: "/category/category-1.png",
    imgAlt: "Spreads",
    title: "Spreads",
    link: "/products/spreads",
  },
  {
    imgSrc: "/category/category-2.jpg",
    imgPlaceholder: "/category/category-2.png",
    imgAlt: "Jams",
    title: "Jams",
    link: "/products/jams",
  },
  {
    imgSrc: "/category/category-3.jpg",
    imgPlaceholder: "/category/category-3.png",
    imgAlt: "Toppings",
    title: "Toppings",
    link: "/products/toppings",
  },
  {
    imgSrc: "/category/category-4.jpg",
    imgPlaceholder: "/category/category-4.png",
    imgAlt: "Fillings",
    title: "Fillings",
    link: "/products/fillings",
  },
];

const recipeData = [
  {
    imgSrc: "/recipe/recipe-1.jpg",
    imgPlaceholder: "/recipe/recipe-1.png",
    imgAlt: "Mixed Berry Jam Tartlets",
    title: "Mixed Berry Jam Tartlets",
    link: "/recipe/recipe-id",
  },
  {
    imgSrc: "/recipe/recipe-2.jpg",
    imgPlaceholder: "/recipe/recipe-2.png",
    imgAlt: "Strawberry Trifle",
    title: "Strawberry Trifle",
    link: "/recipe/recipe-id",
  },
  {
    imgSrc: "/recipe/recipe-3.jpg",
    imgPlaceholder: "/recipe/recipe-3.png",
    imgAlt: "Chocolate Fudge Cupcakes",
    title: "Chocolate Fudge Cupcakes",
    link: "/recipe/recipe-id",
  },
];

const highlightData = [
  {
    imgSrc: "/highlight/highlight-1.jpg",
    imgPlaceholder: "/highlight/highlight-1.png",
    imgAlt: "Morin in UPH",
    title: "Morin in UPH",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
  {
    imgSrc: "/highlight/highlight-2.jpg",
    imgPlaceholder: "/highlight/highlight-2.png",
    imgAlt: "Cooking Workshop",
    title: "Cooking Workshop",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
  {
    imgSrc: "/highlight/highlight-1.jpg",
    imgPlaceholder: "/highlight/highlight-1.png",
    imgAlt: "Brown Fox Jumps",
    title: "Brown Fox Jumps",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
  {
    imgSrc: "/highlight/highlight-1.jpg",
    imgPlaceholder: "/highlight/highlight-1.png",
    imgAlt: "Morin in UPH",
    title: "Morin in UPH",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
  {
    imgSrc: "/highlight/highlight-2.jpg",
    imgPlaceholder: "/highlight/highlight-2.png",
    imgAlt: "Cooking Workshop",
    title: "Cooking Workshop",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
  {
    imgSrc: "/highlight/highlight-1.jpg",
    imgPlaceholder: "/highlight/highlight-1.png",
    imgAlt: "Brown Fox Jumps",
    title: "Brown Fox Jumps",
    date: "24 Juli 2021",
    link: "/highlight/highlight-id",
  },
];

const instagramData = [
  {
    imgSrc: "/instagram/instagram-1.jpg",
    imgPlaceholder: "/instagram/instagram-1.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
  },
  {
    imgSrc: "/instagram/instagram-2.jpg",
    imgPlaceholder: "/instagram/instagram-2.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
  },
  {
    imgSrc: "/instagram/instagram-3.jpg",
    imgPlaceholder: "/instagram/instagram-3.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
  },
  {
    imgSrc: "/instagram/instagram-1.jpg",
    imgPlaceholder: "/instagram/instagram-1.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
  },
  {
    imgSrc: "/instagram/instagram-2.jpg",
    imgPlaceholder: "/instagram/instagram-2.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
  },
  {
    imgSrc: "/instagram/instagram-3.jpg",
    imgPlaceholder: "/instagram/instagram-3.png",
    imgAlt: "Caption of image here...",
    link: "/link-to-instagram-post",
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
                          <div className="w-full lg:w-4/12 lg:min-h-[calc(100vh-86px)] lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-[86px]">
                            <div className="mt-24 mb-20 lg:mt-7 lg:max-w-sm lg:pr-8">
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
                              <div className="relative w-6 h-6 lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/halal.svg`}
                                  alt={"Halal"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="relative w-6 h-6 lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/pom.svg`}
                                  alt={"Badan POM"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="relative w-6 h-6 lg:w-[44px] lg:h-[44px]">
                                <Image
                                  src={`/topbrand.svg`}
                                  alt={"Top Brand"}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full lg:w-8/12">
                            {categoryData?.map((i) => (
                              <div
                                // className="relative w-[calc(100%+64px)] min-h-screen -mx-8 overflow-hidden lg:w-[calc(100%+32px)]"
                                className="relative min-h-screen -mx-8 overflow-hidden lg:ml-0 lg:-mr-8 2xl:mx-0"
                                key={i.title}
                              >
                                <HeroCategory
                                  imgSrc={i.imgSrc}
                                  imgPlaceholder={i.imgPlaceholder}
                                  imgAlt={i.imgAlt}
                                  title={i.title}
                                  link={i.link}
                                />
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
                          <div className="w-full text-center mb-8 md:w-7/12 md:text-left lg:mb-10 xl:w-8/12 xl:mb-16">
                            <h2 className="relative max-w-[175px] font-nutmeg font-bold text-ctitle text-morin-red leading-tight mb-4 mx-auto md:max-w-fit md:mb-2 md:mx-0 lg:text-h2 lg:leading-tight xl:text-h1">
                              Recipes <br className="md:hidden" /> from Love
                              <div className="w-8 absolute -top-0.5 left-[calc(100%-15px)] md:hidden">
                                <HeartSmall className="md:hidden" />
                              </div>
                              <div className="hidden w-14 absolute -top-1 left-[calc(100%+5px)] md:block lg:w-18 lg:top-2 lg:left-[calc(100%+10px)] xl:w-24">
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
                          <div className="w-full order-3 md:order-none md:w-fit md:pl-12 md:ml-auto">
                            <MorinButton
                              destination="/recipes"
                              color={colors.morinRed}
                            >
                              See All Recipes
                            </MorinButton>
                          </div>
                          <div className="w-[calc(100%+64px)] -mx-8 mb-8 md:w-[calc(100%+32px)] md:-mx-4 md:mb-0">
                            <RecipeSlider data={recipeData} />
                          </div>
                        </div>
                      </Container>
                    </section>
                    <section>
                      <Container
                        border={true}
                        background={colors.morinSkyBlue}
                        bgTail={true}
                        safeWidth={true}
                        classNameOuter="pb-0"
                      >
                        <div className="flex flex-wrap w-full">
                          <div className="w-full text-center mb-6 md:w-7/12 md:text-left lg:mb-10 xl:w-8/12 xl:mb-14">
                            <h2 className="relative text-morin-blue text-ctitle font-nutmeg font-bold leading-none max-w-[160px] pb-5 mx-auto mb-0 md:w-fit md:max-w-none md:pb-0 md:mx-0 md:mb-2 lg:text-h2">
                              Events Highlight
                              <div className="w-full h-3.5 absolute left-1/2 bottom-0 -translate-x-1/2 md:w-40 md:left-auto md:right-0 md:translate-x-0 md:-bottom-4 lg:w-60 lg:h-5 lg:-bottom-5">
                                <Scribble />
                              </div>
                            </h2>
                          </div>
                          <div className="hidden w-fit pl-12 ml-auto md:block">
                            <MorinButton
                              destination="/events"
                              color={colors.morinBlue}
                            >
                              See All Events
                            </MorinButton>
                          </div>
                        </div>
                      </Container>
                      <div className="relative bg-morin-skyBlue px-8 pb-10 overflow-hidden md:px-0 xl:pb-14">
                        <HighlightSlider data={highlightData} />
                        <div className="w-fit mt-7 mx-auto md:hidden">
                          <MorinButton
                            destination="/events"
                            color={colors.morinBlue}
                          >
                            See All Events
                          </MorinButton>
                        </div>
                        <div
                          className={`w-full h-10 bg-morin-skyBlue absolute bottom-0 translate-y-full -z-1`}
                        />
                      </div>
                    </section>
                    <section>
                      <Container
                        border={true}
                        bgTail={true}
                        safeWidth={true}
                        background={colors.white}
                        classNameOuter="pb-0"
                      >
                        <div className="flex flex-wrap w-full mb-8">
                          <h2 className="w-full max-w-[260px] text-mtitleSmall font-nutmeg font-normal leading-tight text-morin-blue text-center mt-0 mb-2 mx-auto md:max-w-none md:w-[calc(100%-135px)] md:text-left md:mb-0 md:mx-0 md:pr-4 lg:text-ctitle xl:text-mtitleBig">
                            Get Daily Inspirations from our Social Media
                          </h2>
                          <div className="w-full md:w-32 md:flex md:items-end">
                            <FancyLink
                              destination="https://www.instagram.com/morin_jam/"
                              blank
                              className="flex flex-wrap items-center w-fit h-6 bg-morin-blue text-white text-defaultSmall font-semibold rounded-full px-4 mx-auto md:mb-1.5 md:mr-0 xl:h-7 xl:text-default"
                            >
                              <span className="pt-0.5 xl:pt-1">@morin_jam</span>
                            </FancyLink>
                          </div>
                        </div>
                      </Container>
                      <div className="pb-10 xl:pb-14">
                        <InstagramSlider data={instagramData} />
                      </div>
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

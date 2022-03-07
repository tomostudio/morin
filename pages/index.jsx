import { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

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
import Image from "next/image";
import CategoryCard from "@/components/module/categoryCard";
import { Arrow } from "@/components/utils/svg";

const categoryData = [
  {
    imgSrc: "/morin-card/morin-1.svg",
    imgPlaceholder: "/morin-card/morin-1.png",
    imgAlt: "Spreads",
    title: "Spreads",
    link: "/products/spreads",
  },
  {
    imgSrc: "/morin-card/morin-2.svg",
    imgPlaceholder: "/morin-card/morin-2.png",
    imgAlt: "Jams",
    title: "Jams",
    link: "/products/jams",
  },
  {
    imgSrc: "/morin-card/morin-3.svg",
    imgPlaceholder: "/morin-card/morin-3.png",
    imgAlt: "Toppings",
    title: "Toppings",
    link: "/products/toppings",
  },
  {
    imgSrc: "/morin-card/morin-4.svg",
    imgPlaceholder: "/morin-card/morin-4.png",
    imgAlt: "Fillings",
    title: "Fillings",
    link: "/products/fillings",
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
                        <div className="flex flex-wrap w-full">
                          <div className="w-full lg:w-[35%]">
                            <div className="mt-[100px] mb-[80px] lg:mt-[30px]">
                              <h2 className="text-[28px] text-morin-blue font-nutmeg font-normal text-center leading-tight mb-[15px] lg:text-left lg:text-ctitleSmall lg:mb-[30px]">
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
                            <div className="flex flex-wrap max-w-[90px] justify-between mb-5 mx-auto lg:max-w-[185px] lg:mx-0">
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
                                  <FancyLink destination={i.link} className="w-full h-full absolute top-0 left-0 lg:flex lg:justify-center lg:items-center lg:w-[60px] lg:h-[45px] lg:border-2 lg:border-solid lg:border-white lg:rounded-[45px] lg:relative lg:top-auto lg:left-auto">
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
                        background={colors.morinBlue}
                        bgTail={true}
                        safeWidth={true}
                      >
                        <div className="w-full bg-slate-400 h-40 min-h-[50vh] setflex-center">
                          PLACEHOLDER
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

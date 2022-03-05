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
                      {/* <Container
                        border={false}
                        background={colors.offWhite}
                        bgTail={true}
                        safeWidth={true}
                        className="h-[50vh] w-full flex justify-center items-center p-10"
                      >
                        
                      </Container> */}
                    </section>
                    <article>
                      <Container
                        border={false}
                        background={colors.offWhite}
                        bgTail={true}
                        safeWidth={true}
                      >
                        <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">
                          Next x Tailwind x Motion x Locomotive
                        </h1>
                        <div className="content max-w-3xl mb-4">
                          <h2>Some example content</h2>

                          <p
                            data-scroll
                            data-scroll-repeat
                            data-scroll-call="trigger"
                            className="trigger"
                          >
                            Velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>

                          <p>
                            Velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>

                        <FancyLink
                          destination="/about"
                          a11yText="Navigate to the about page"
                          label="About Page"
                        />
                      </Container>
                    </article>
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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import Container from "../module/container";
import MorinButton from "../utils/morinButton";
import colors from "@/helpers/colors";

const HeroSlider = ({ className }) => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        className={`${className}`}
      >
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Container className="h-screen z-1">
              <div className="w-full h-full flex flex-col justify-center">
                <div className="mx-auto md:hidden">
                  <Image
                    src={`/assets/hero-slider/m-hero-content.svg`}
                    // placeholder={``}
                    alt="A delightful experience in every bite."
                    width={350}
                    height={230}
                  />
                </div>
                <div className="mx-auto hidden md:block">
                  <Image
                    src={`/assets/hero-slider/hero-content.svg`}
                    // placeholder={``}
                    alt="A delightful experience in every bite."
                    width={950}
                    height={375}
                  />
                </div>

                <MorinButton color={colors.white} className="mt-5 md:mt-0">
                  Find Out More
                </MorinButton>
              </div>
            </Container>

            <Image
              src={`/assets/hero-slider/hero-1.jpg`}
              blurDataURL={"assets/hero-slider/hero-placeholder.png"}
              placeholder="blur"
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Container className="h-screen z-1">
              <div className="w-full h-full flex flex-col justify-center">
                <span className="max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight">
                  The quick, brown fox jumps over a lazy dog
                </span>
                <MorinButton destination="/products" color={colors.white} className="mt-5">
                  Find Out More
                </MorinButton>
              </div>
            </Container>

            <Image
              src={`/assets/hero-slider/hero-2.jpg`}
              blurDataURL={"assets/hero-slider/hero-placeholder.png"}
              placeholder="blur"
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Container className="h-screen z-1">
              <div className="w-full h-full flex flex-col justify-center">
                <span className="max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight">
                  A wizard’s job is to vex chumps quickly in fog. Watch
                  "Jeopardy!"
                </span>
              </div>
            </Container>

            <Image
              src={`/assets/hero-slider/hero-3.jpg`}
              blurDataURL={"assets/hero-slider/hero-placeholder.png"}
              placeholder="blur"
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-screen h-screen">
            <Container className="h-screen z-1">
              <div className="w-full h-full flex flex-col justify-center">
                <span className="max-w-4xl mx-auto text-ctitleBig font-nutmeg leading-none text-white text-center lg:text-h1 lg:leading-tight">
                  Five quacking zephyrs jolt my wax bed
                </span>
                <MorinButton color={colors.white} className="mt-5">
                  Find Out More
                </MorinButton>
              </div>
            </Container>

            <Image
              src={`/assets/hero-slider/hero-4.jpg`}
              blurDataURL={"assets/hero-slider/hero-placeholder.png"}
              placeholder="blur"
              alt={"Hero Slider"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import Footer from "@/components/module/footer";
import Header from "@/components/module/header";
import Layout from "@/components/module/layout";
import ProductCard from "@/components/shared-module/productCard";
import GalleryModal from "@/components/shared-module/galleryModal";
import RecipeSlider from "@/components/sliders/recipeSlider";
import StrokeButton from "@/components/micro-module/strokeButton";
import { ArrowLarge, Check } from "@/components/utils/svg";
import colors from "@/helpers/colors";

const recipeCategory = ["Medium", "Dessert", "< 30 mins"];

const recipeSliderData = [
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

const ingredientsChecklist = [
  {
    name: "ingredients-1",
    label: "2 Butir Telur",
    value: "eggs",
  },
  {
    name: "ingredients-2",
    label: "180gr Gula Pasir",
    value: "sugar",
  },
  {
    name: "ingredients-3",
    label: "150gr Tepung Terigu",
    value: "flour",
  },
  {
    name: "ingredients-4",
    label: "150gr Morin Chocolate Filling",
    value: "morin",
  },
  {
    name: "ingredients-5",
    label: "50gr Mentega",
    value: "butter",
  },
  {
    name: "ingredients-6",
    label: "40gr Minyak Goreng",
    value: "oil",
  },
  {
    name: "ingredients-7",
    label: "Vanilli Secukupnya",
    value: "vanilla",
  },
];

const madeWithData = [
  {
    title: "Blueberry Jam",
    bgColor: "#ECE3FF",
    imgSrc: "/product/blueberry.png",
    imgBg: "/product/blueberry-bg.png",
    imgPlaceholder: "/product/blueberry.png",
    imgAlt: "Blueberry Jam",
    link: "/product/product-id",
  },
  {
    title: "Strawberry Jam",
    bgColor: "#FFE6E5",
    imgSrc: "/product/strawberry.png",
    imgBg: "/product/strawberry-bg.png",
    imgPlaceholder: "/product/strawberry.png",
    imgAlt: "Strawberry Jam",
    link: "/product/product-id",
  },
];

const instructionsChecklist = [
  {
    step: "1",
    instruction:
      "Lelehkan mentega bersamaan dengan Cokelat Filling Moring dan minyak goreng.",
    value: "step-1",
    images: null,
  },
  {
    step: "2",
    instruction:
      "Kocok telur dan gula dengan kecepatan rendah sampai gula larut.",
    value: "step-2",
    images: null,
  },
  {
    step: "3",
    instruction:
      "Masukkan campuran cokelat, mentega dan minyak ke dalam adonan, aduk hingga rata.",
    value: "step-3",
    images: ["/recipe/instructions-1.jpg", "/recipe/instructions-2.jpg"],
  },
  {
    step: "4",
    instruction:
      "Masukkan tepung dan vanilli ke dalam adonan, aduk hingga rata.",
    value: "step-4",
    images: null,
  },
  {
    step: "5",
    instruction:
      "Tuang ke dalam loyang yang sudah di lapisi baking paper, panggang selama 28 menit si duhu 175C.",
    value: "step-5",
    images: ["/recipe/instructions-3.jpg"],
  },
  {
    step: "6",
    instruction: "Siap disajikan.",
    value: "step-6",
    images: null,
  },
];

const imageGalleryData = [
  {
    small: "/recipe/gallery-1.jpg",
    large: "/recipe/gallery-1.svg",
  },
  {
    small: "/recipe/gallery-2.jpg",
    large: "/recipe/gallery-2.svg",
  },
  {
    small: "/recipe/gallery-3.jpg",
    large: "/recipe/gallery-3.svg",
  },
  {
    small: "/recipe/gallery-1.jpg",
    large: "/recipe/gallery-1.svg",
  },
  {
    small: "/recipe/gallery-2.jpg",
    large: "/recipe/gallery-2.svg",
  },
  {
    small: "/recipe/gallery-3.jpg",
    large: "/recipe/gallery-3.svg",
  },
  {
    small: "/recipe/gallery-1.jpg",
    large: "/recipe/gallery-1.svg",
  },
  {
    small: "/recipe/gallery-2.jpg",
    large: "/recipe/gallery-2.svg",
  },
  {
    small: "/recipe/gallery-3.jpg",
    large: "/recipe/gallery-3.svg",
  },
];

// COMPONENTS
const RecipeCheckbox = ({
  name,
  label,
  value,
  onChange,
  checked,
  labelClassName = "",
}) => {
  return (
    <div className="font-semibold leading-tight mb-2 last:mb-0 md:mb-3 lg:mb-5">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={name}
        className="flex flex-wrap items-center w-full font-semibold cursor-pointer select-none overflow-hidden lg:"
      >
        <span
          className={`flex flex-wrap items-center justify-center w-5 h-5 rounded-full border-2 border-solid border-morin-red p-1 transition-all md:w-6 md:h-6 lg:w-8 lg:h-8 lg:p-2 ${
            checked ? "bg-morin-red" : ""
          }`}
        >
          <Check color={checked ? colors.white : colors.morinRed} />
        </span>
        <span
          className={`leading-none pt-1 pl-2 md:pt-1.5 md:pl-4 lg:pl-5 ${labelClassName}`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

const RecipeTag = ({ label }) => (
  <div className="flex flex-wrap items-center min-h-[25px] rounded-full border-2 border-solid border-white px-3 mr-2 last:mr-0 lg:mr-0 lg:ml-2 lg:mb-2">
    <span className="pt-0.5 md:pt-1">{label}</span>
  </div>
);

const InstructionCard = ({
  step,
  value,
  checked,
  onChange,
  instruction,
  images,
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-1 lg:mb-2">
        <span className="text-morin-red font-semibold lg:hidden">
          Step {step}
        </span>
        <div className="hidden lg:block">
          <RecipeCheckbox
            name={value}
            label={`Step ${step}`}
            value={value}
            checked={checked}
            onChange={onChange}
            labelClassName="font-bold text-mtitleSmall"
          />
        </div>
      </div>

      <p className="text-morin-red mb-6 last:mb-0 lg:text-black lg:pl-[52px]">
        {instruction}
      </p>

      {images?.length && (
        <div className="flex flex-wrap -mx-1 sm:mx-0 lg:pl-[52px]">
          {images?.map((i) => (
            <div
              className="w-1/2 px-1 sm:w-auto sm:px-0 sm:mr-4 lg:mr-5"
              key={i}
            >
              <Image
                src={i}
                blurDataURL={i}
                placeholder="blur"
                alt={value}
                width={285}
                height={215}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ImageGallery = ({ data, onClick }) => {
  const imageWrapper = `relative bg-transparent border-0 rounded-3xl cursor-pointer overflow-hidden`;

  return (
    <Swiper
      freeMode
      modules={[FreeMode]}
      slidesPerView="auto"
      breakpoints={{
        0: { spaceBetween: 10 },
        1024: { spaceBetween: 20 },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <button
            type="button"
            onClick={() => onClick(index)}
            className={imageWrapper}
          >
            <Image
              src={item.small}
              blurDataURL={item.small}
              placeholder="blur"
              alt="Image Gallery"
              width={285}
              height={215}
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageGalleryHiRes = ({ data, initialSlide = 0 }) => {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  // const imageWrapper = `relative bg-transparent border-0 rounded-3xl cursor-pointer overflow-hidden`;
  const navLeft = `left-0 rotate-180`;
  const navRight = `right-0`;
  const sliderNav = `w-10 h-8 rounded-full border-2 border-solid border-morin-red absolute top-1/2 -translate-y-1/2 z-1 px-2 xl:block`;

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: swiperPrev.current,
        nextEl: swiperNext.current,
      }}
      slidesPerView={1}
      initialSlide={initialSlide}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item.large}
            blurDataURL={item.small}
            placeholder="blur"
            alt="Image Gallery"
            width={1035}
            height={600}
            layout="responsive"
          />
        </SwiperSlide>
      ))}
      <button ref={swiperPrev} className={`${sliderNav} ${navLeft}`}>
        <ArrowLarge color={colors.morinRed} />
      </button>
      <button ref={swiperNext} className={`${sliderNav} ${navRight}`}>
        <ArrowLarge color={colors.morinRed} />
      </button>
    </Swiper>
  );
};

// CONTROLLER
const RecipeDetail = () => {
  const [ingredientsChecked, setIngredientsChecked] = useState([]);
  const [instructionsChecked, setInstructionsChecked] = useState([]);
  const [galleryPopup, setGalleryPopup] = useState(false);
  const [gallerySlide, setGallerySlide] = useState(0);

  const handleCheckIngredients = (val) => {
    setIngredientsChecked((prev) => {
      const tempArr = [...prev];

      if (tempArr.includes(val)) {
        const index = tempArr.indexOf(val);
        tempArr.splice(index, 1);
        return tempArr;
      }

      if (!tempArr.includes(val)) {
        tempArr.push(val);
        return tempArr;
      }
    });
  };

  const handleCheckInstructions = (val) => {
    setInstructionsChecked((prev) => {
      const tempArr = [...prev];

      if (tempArr.includes(val)) {
        const index = tempArr.indexOf(val);
        tempArr.splice(index, 1);
        return tempArr;
      }

      if (!tempArr.includes(val)) {
        tempArr.push(val);
        return tempArr;
      }
    });
  };

  const handleImageGallery = (index) => {
    setGalleryPopup(true);
    setGallerySlide(index);
  };

  return (
    <Layout className="bg-morin-peach">
      <Header />

      <div className="relative w-full md:px-8 md:pt-20 lg:px-8 lg:pt-28 xl:px-10 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          {/* head title */}
          <div className="relative md:rounded-3xl md:overflow-hidden lg:mb-5">
            <div className="lg:hidden">
              <Image
                priority
                src="/recipe/highlight-mobile.jpg"
                blurDataURL="/recipe/highlight-mobile.png"
                placeholder="blur"
                alt="New York-Style Cheesecake"
                width={375}
                height={500}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/recipe/highlight.jpg"
                blurDataURL="/recipe/highlight.png"
                placeholder="blur"
                alt="New York-Style Cheesecake"
                width={1200}
                height={690}
                layout="responsive"
              />
            </div>

            <div className="w-full text-white text-center absolute top-24 left-1/2 -translate-x-1/2 z-1 lg:flex lg:top-0 lg:px-8 lg:py-10">
              <h1 className="font-nutmeg font-bold text-ctitle leading-tight mb-4 lg:text-h2 lg:w-1/2 lg:text-left">
                New York-Style Cheesecake
              </h1>
              <div className="flex justify-center lg:w-1/2 lg:h-fit lg:flex-wrap lg:items-start lg:justify-end lg:max-w-[200px] lg:pt-5 lg:ml-auto">
                {recipeCategory?.map((item) => (
                  <RecipeTag key={item} label={item} />
                ))}
              </div>
            </div>
          </div>

          {/* description */}
          <div className="bg-white rounded-2xl my-8 p-8 lg:mt-0 lg:mb-5">
            <div className="lg:max-w-3xl lg:mx-auto">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
                Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
                Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:-mx-2 lg:mb-5">
            {/* ingredients */}
            <div className="lg:w-1/2 lg:px-2">
              <div className="bg-white rounded-2xl mb-8 py-8 px-11 lg:h-full lg:py-6 lg:mb-0">
                <h2 className="block font-nutmeg font-normal text-morin-red text-mtitleSmall leading-none mb-4 lg:text-ctitleBig lg:mb-7">
                  Ingredients
                </h2>
                <div className="">
                  {ingredientsChecklist?.map((item) => (
                    <RecipeCheckbox
                      key={item.value}
                      name={item.name}
                      label={item.label}
                      value={item.value}
                      checked={ingredientsChecked.includes(item.value)}
                      onChange={() => handleCheckIngredients(item.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* made with */}
            <div className="lg:w-1/2 lg:px-2">
              <div className="px-4 mb-6 lg:h-full lg:bg-white lg:rounded-2xl lg:px-11 lg:py-6 lg:mb-0">
                <h2 className="text-center text-morin-red text-mtitleSmall font-nutmeg font-normal leading-none mb-6 lg:text-ctitleBig lg:text-left">
                  Made With
                </h2>
                <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5">
                  {madeWithData?.map((item, index) => (
                    <div
                      className="w-1/2 px-1.5 mb-3 lg:px-2.5 lg:mb-5"
                      key={`${item.title}${index}`}
                    >
                      <ProductCard
                        small
                        title={item.title}
                        bgColor={item.bgColor}
                        imgSrc={item.imgSrc}
                        imgBg={item.imgBg}
                        imgPlaceholder={item.imgPlaceholder}
                        imgAlt={item.imgAlt}
                        link={item.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* instructions */}
          <div className="bg-white rounded-2xl mb-8 p-8 lg:px-10">
            <div className="flex flex-wrap flex-col mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-10 xl:mb-12">
              <h2 className="block font-nutmeg font-normal text-center text-morin-red text-mtitleSmall leading-none mb-4 lg:text-left lg:text-ctitleBig lg:mb-0">
                Instructions
              </h2>

              <div className="flex flex-wrap justify-center lg:justify-end lg:pt-2.5">
                <StrokeButton
                  arrow={false}
                  color={colors.morinRed}
                  className="mx-0 mr-3"
                  onClick={() => console.log("Print")}
                >
                  Print
                </StrokeButton>
                <StrokeButton
                  arrow={false}
                  color={colors.morinRed}
                  className="mx-0"
                  onClick={() => console.log("Share")}
                >
                  Share
                </StrokeButton>
              </div>
            </div>

            <div className="lg:max-w-3xl lg:mx-auto">
              {instructionsChecklist?.map((item) => (
                <InstructionCard
                  key={item.step}
                  step={item.step}
                  value={item.value}
                  instruction={item.instruction}
                  images={item.images}
                  checked={instructionsChecked.includes(item.value)}
                  onChange={() => handleCheckInstructions(item.value)}
                />
              ))}
            </div>
          </div>

          {/* gallery */}
          {imageGalleryData?.length > 0 && (
            <div className="relative bg-white rounded-2xl mb-8 p-8 overflow-hidden lg:py-12 lg:px-10 lg:mb-14">
              <div className="w-8 h-full bg-gradient-to-r from-white to-transparent absolute top-1/2 left-0 -translate-y-1/2 z-2 lg:w-10" />
              <div className="w-8 h-full bg-gradient-to-r from-transparent to-white absolute top-1/2 right-0 -translate-y-1/2 z-2 lg:w-10" />
              <div className="recipe-gallery-slider relative overflow-hidden -mx-8 z-1 lg:-mx-10">
                <ImageGallery
                  data={imageGalleryData}
                  onClick={(index) => handleImageGallery(index)}
                />
              </div>
            </div>
          )}

          {/* more recipes */}
          {recipeSliderData?.length > 0 && (
            <div className="px-8 mb-8 md:px-0 md:mb-10 lg:mb-12 xl:mb-20">
              <div className="flex flex-wrap w-full">
                <div className="w-full text-center mb-5 md:flex md:flex-wrap md:justify-between md:items-center md:text-left lg:mb-10">
                  <span className="block font-nutmeg font-normal text-mtitleSmall text-morin-red leading-tight mx-auto mb-0 md:hidden">
                    More Recipes
                  </span>
                  <span className="hidden font-nutmeg font-normal text-mtitle text-morin-red leading-tight mb-0 md:block lg:text-mtitleBig xl:text-h2">
                    You may also like...
                  </span>

                  <div className="hidden w-fit pt-1 pl-12 ml-auto md:block xl:pt-4">
                    <StrokeButton
                      destination="/recipes"
                      color={colors.morinRed}
                      className="ml-auto"
                    >
                      See All Recipes
                    </StrokeButton>
                  </div>
                </div>

                <div className="w-[calc(100%+64px)] -mx-8 md:w-[calc(100%+32px)] md:-mx-4">
                  <RecipeSlider
                    data={recipeSliderData}
                    onClick={(url) => handleImageGallery(url)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* gallery pop up */}
          <GalleryModal
            isOpen={galleryPopup}
            onRequestClose={() => setGalleryPopup(false)}
          >
            <ImageGalleryHiRes
              data={imageGalleryData}
              initialSlide={gallerySlide}
            />
          </GalleryModal>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default RecipeDetail;

import { useEffect, useState } from "react";
import Image from "next/image";
import colors from "@/helpers/colors";
import Layout from "@/components/module/layout";
import Header from "@/components/module/header";
import Footer from "@/components/module/footer";
import RecipeCard from "@/components/module/recipeCard";
import StrokeButton from "@/components/utils/strokeButton";
import RecipeFilter from "@/components/utils/recipeFilter";
import { Filter } from "@/components/utils/svg";

const recipeData = [
  {
    imgSrc: "/recipe/recipe-1.jpg",
    imgPlaceholder: "/recipe/recipe-1.png",
    imgAlt: "Mixed Berry Jam Tartlets",
    title: "Mixed Berry Jam Tartlets",
    link: "/recipe/recipe-id",
    duration: "35",
    difficulty: "Hard",
  },
  {
    imgSrc: "/recipe/recipe-2.jpg",
    imgPlaceholder: "/recipe/recipe-2.png",
    imgAlt: "Strawberry Trifle",
    title: "Strawberry Trifle",
    link: "/recipe/recipe-id",
    duration: "30",
    difficulty: "Med",
  },
  {
    imgSrc: "/recipe/recipe-3.jpg",
    imgPlaceholder: "/recipe/recipe-3.png",
    imgAlt: "Chocolate Fudge Cupcakes",
    title: "Chocolate Fudge Cupcakes",
    link: "/recipe/recipe-id",
    duration: "45",
    difficulty: "Easy",
  },
  {
    imgSrc: "/recipe/recipe-1.jpg",
    imgPlaceholder: "/recipe/recipe-1.png",
    imgAlt: "Mixed Berry Jam Tartlets",
    title: "Mixed Berry Jam Tartlets",
    link: "/recipe/recipe-id",
    duration: "35",
    difficulty: "Hard",
  },
  {
    imgSrc: "/recipe/recipe-2.jpg",
    imgPlaceholder: "/recipe/recipe-2.png",
    imgAlt: "Strawberry Trifle",
    title: "Strawberry Trifle",
    link: "/recipe/recipe-id",
    duration: "30",
    difficulty: "Med",
  },
  {
    imgSrc: "/recipe/recipe-3.jpg",
    imgPlaceholder: "/recipe/recipe-3.png",
    imgAlt: "Chocolate Fudge Cupcakes",
    title: "Chocolate Fudge Cupcakes",
    link: "/recipe/recipe-id",
    duration: "45",
    difficulty: "Easy",
  },
];

const recipeFilter = [
  {
    title: "Difficulty",
    options: [
      {
        name: "difficulty-easy",
        label: "Easy",
        value: "easy",
      },
      {
        name: "difficulty-medium",
        label: "Medium",
        value: "medium",
      },
      {
        name: "difficulty-hard",
        label: "Hard",
        value: "hard",
      },
    ],
  },
  {
    title: "Cooking Time",
    options: [
      {
        name: "duration-10",
        label: "10 mins",
        value: "10",
      },
      {
        name: "duration-30",
        label: "< 30 mins",
        value: "30",
      },
      {
        name: "duration-60",
        label: "30-60 mins",
        value: "60",
      },
    ],
  },
  {
    title: "Category",
    options: [
      {
        name: "category-beverages",
        label: "Beverages",
        value: "beverages",
      },
      {
        name: "category-desserts",
        label: "Desserts",
        value: "desserts",
      },
      {
        name: "category-appetizers",
        label: "Appetizers",
        value: "appetizers",
      },
    ],
  },
];

const Recipe = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterValue, setFilterValue] = useState([]);

  const handleFilter = (val) => {
    setFilterValue((prev) => {
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

  useEffect(() => {
    setFilterOpen(false);
  }, []);

  const buttonActive = filterOpen ? "bg-morin-red" : "";

  return (
    <Layout>
      <Header />

      <div className="w-full bg-morin-peach">
        <div className=" relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              priority
              src="/recipe/banner.jpg"
              placeholder="/recipe/banner.png"
              alt="Recipe"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              Recipes
              <br />
              From Love
            </h1>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="flex w-full items-center justify-between mb-5 md:mb-7 lg:mb-8 xl:mb-10">
            <span className="font-semibold text-morin-red pt-1">
              Sorted by Default
            </span>
            <StrokeButton
              arrow={false}
              color={colors.morinRed}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`transition-all pl-2 pr-2 ml-0 mr-0 md:px-4 md:py-2 ${buttonActive}`}
            >
              <div className="w-4 md:w-6 lg:w-8">
                <Filter
                  color={filterOpen ? colors.white : colors.morinRed}
                  className="transition-all"
                />
              </div>
            </StrokeButton>
          </div>

          <div suppressHydrationWarning>
            {typeof window === "undefined" ? null : (
              <RecipeFilter
                isOpen={filterOpen}
                data={recipeFilter}
                value={filterValue}
                filterFunc={handleFilter}
                triggerTagName={"btnFilter"}
              />
            )}
          </div>

          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-wrap -mx-1 mb-7 lg:-mx-2 lg:mb-10">
              {recipeData?.map((item, index) => (
                <div
                  className="w-1/2 px-1 mb-2 md:w-1/3 lg:px-2 lg:mb-4"
                  key={`${item.title}[${index}]`}
                >
                  <RecipeCard
                    imgSrc={item.imgSrc}
                    imgPlaceholder={item.imgPlaceholder}
                    imgAlt={item.imgAlt}
                    title={item.title}
                    link={item.link}
                    duration={item.duration}
                    difficulty={item.difficulty}
                  />
                </div>
              ))}

              <div className="w-full mt-5 xl:mt-7">
                <StrokeButton
                  arrow={false}
                  color={colors.morinRed}
                  onClick={() => console.log("load more")}
                >
                  Show More
                </StrokeButton>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Recipe;

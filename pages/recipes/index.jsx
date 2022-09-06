import { useEffect, useState } from 'react'
import Image from 'next/image'
import colors from '@/helpers/colors'
import Layout from '@/components/module/layout'
import Footer from '@/components/module/footer'
import RecipeCard from '@/components/shared-module/recipeCard'
import StrokeButton from '@/components/micro-module/strokeButton'
import RecipeFilter from '@/components/micro-module/recipeFilter'
import { useEffectInit } from '@/components/utils/preset'
import { Filter } from '@/components/utils/svg'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { useAppContext } from 'context/state'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import { Parallax } from 'react-scroll-parallax'

const Recipe = ({
  recipeAPI,
  recipeListAPI,
  difficultyListAPI,
  cookingTimeListAPI,
  recipeCategoryAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [filterOpen, setFilterOpen] = useState(true)
  const [filterValue, setFilterValue] = useState([])
  const [seo] = seoAPI
  const [recipe] = recipeAPI
  const [footer] = footerAPI
  const router = useRouter()

  let displayData = 6
  const dataIncrease = 6
  const [showButton, setShowButton] = useState(
    recipeListAPI.length <= displayData ? false : true,
  )
  const [dataRecipe, setDataRecipe] = useState(
    recipeListAPI.slice(0, displayData),
  )

  const loadMore = () => {
    displayData += dataIncrease
    setDataRecipe(recipeListAPI.slice(0, displayData))

    if (recipeListAPI.length <= displayData) setShowButton(false)
  }

  const handleFilter = (val) => {
    setFilterValue((prev) => {
      const tempArr = [...prev]

      if (tempArr.length === 0) {
        displayData = 6
        setDataRecipe(
          recipeListAPI
            .filter(
              (object) =>
                object.difficulty.title_en === val.difficulty ||
                object.cookingTime.title_en === val.cooking_time ||
                object.recipeCategory.title_en === val.category,
            )
            .slice(0, displayData),
        )

        if (recipeListAPI.length <= displayData) setShowButton(false)

        tempArr.push(val)
        return tempArr
      }

      if (val.difficulty) {
        if (tempArr.some((o) => o.hasOwnProperty('difficulty'))) {
          if (
            tempArr.map((object) => object.difficulty).includes(val.difficulty)
          ) {
            displayData = 6
            if (
              tempArr.find((data) => data.cooking_time) &&
              tempArr.find((data) => data.category)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)
                      ?.cooking_time &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              );
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)

            } else if (tempArr.find((data) => data.cooking_time)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.category)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              setDataRecipe(recipeListAPI.slice(0, displayData))

              if (recipeListAPI.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.difficulty)
              .indexOf(val.difficulty)
            tempArr.splice(index, 1)
            return tempArr
          } else {
            displayData = 6
            if (
              tempArr.find((data) => data.cooking_time) &&
              tempArr.find((data) => data.category)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en === val.difficulty &&
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)
                      .cooking_time &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.cooking_time)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en === val.difficulty &&
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.category)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en === val.difficulty &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              let dataFilter = recipeListAPI
              .filter(
                (object) => object.difficulty.title_en === val.difficulty,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.difficulty)
              .indexOf(tempArr.find((o) => o.difficulty).difficulty)
            tempArr.splice(index, 1)
            tempArr.push(val)
            return tempArr
          }
        } else {
          displayData = 6
          if (
            tempArr.find((data) => data.cooking_time) &&
            tempArr.find((data) => data.category)
          ) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.difficulty.title_en === val.difficulty &&
                object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time).cooking_time &&
                object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.cooking_time)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.difficulty.title_en === val.difficulty &&
                object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time)?.cooking_time,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.category)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.difficulty.title_en === val.difficulty &&
                object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else {
            let dataFilter = recipeListAPI
            .filter(
              (object) => object.difficulty.title_en === val.difficulty,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          }

          tempArr.push(val)
          return tempArr
        }
      }

      if (val.cooking_time) {
        if (tempArr.some((o) => o.hasOwnProperty('cooking_time'))) {
          if (
            tempArr
              .map((object) => object.cooking_time)
              .includes(val.cooking_time)
          ) {
            displayData = 6
            if (
              tempArr.find((data) => data.difficulty) &&
              tempArr.find((data) => data.category)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty)?.difficulty &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.difficulty)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty)?.difficulty,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.category)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              setDataRecipe(recipeListAPI.slice(0, displayData))

              if (recipeListAPI.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.cooking_time)
              .indexOf(val.cooking_time)
            tempArr.splice(index, 1)
            return tempArr
          } else {
            displayData = 6
            if (
              tempArr.find((data) => data.difficulty) &&
              tempArr.find((data) => data.category)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en === val.cooking_time &&
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty).difficulty &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.difficulty)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en === val.cooking_time &&
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty)?.difficulty,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.category)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en === val.cooking_time &&
                  object.recipeCategory.title_en ===
                    tempArr.find((data) => data.category)?.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en === val.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.cooking_time)
              .indexOf(tempArr.find((o) => o.cooking_time).cooking_time)
            tempArr.splice(index, 1)
            tempArr.push(val)
            return tempArr
          }
        } else {
          displayData = 6
          if (
            tempArr.find((data) => data.difficulty) &&
            tempArr.find((data) => data.category)
          ) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.cookingTime.title_en === val.cooking_time &&
                object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty).difficulty &&
                object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.difficulty)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.cookingTime.title_en === val.cooking_time &&
                object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty)?.difficulty,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.category)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.cookingTime.title_en === val.cooking_time &&
                object.recipeCategory.title_en ===
                  tempArr.find((data) => data.category)?.category,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else {
            let dataFilter = recipeListAPI
            .filter(
              (object) => object.cookingTime.title_en === val.cooking_time,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          }

          tempArr.push(val)
          return tempArr
        }
      }

      if (val.category) {
        if (tempArr.some((o) => o.hasOwnProperty('category'))) {
          if (tempArr.map((object) => object.category).includes(val.category)) {
            displayData = 6
            if (
              tempArr.find((data) => data.difficulty) &&
              tempArr.find((data) => data.cooking_time)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty)?.difficulty &&
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.difficulty)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty)?.difficulty,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.cooking_time)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              setDataRecipe(recipeListAPI.slice(0, displayData))

              if (recipeListAPI.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.category)
              .indexOf(val.category)
            tempArr.splice(index, 1)
            return tempArr
          } else {
            displayData = 6
            if (
              tempArr.find((data) => data.difficulty) &&
              tempArr.find((data) => data.cooking_time)
            ) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.recipeCategory.title_en === val.category &&
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty).difficulty &&
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.difficulty)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.recipeCategory.title_en === val.category &&
                  object.difficulty.title_en ===
                    tempArr.find((data) => data.difficulty)?.difficulty,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else if (tempArr.find((data) => data.cooking_time)) {
              let dataFilter = recipeListAPI
              .filter(
                (object) =>
                  object.recipeCategory.title_en === val.category &&
                  object.cookingTime.title_en ===
                    tempArr.find((data) => data.cooking_time)?.cooking_time,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            } else {
              let dataFilter = recipeListAPI
              .filter(
                (object) => object.recipeCategory.title_en === val.category,
              )
              setDataRecipe(
                dataFilter
                  .slice(0, displayData),
              )

              if (dataFilter.length <= displayData) setShowButton(false)
            }

            const index = tempArr
              .map((object) => object.category)
              .indexOf(tempArr.find((o) => o.category).category)
            tempArr.splice(index, 1)
            tempArr.push(val)
            return tempArr
          }
        } else {
          displayData = 6
          if (
            tempArr.find((data) => data.difficulty) &&
            tempArr.find((data) => data.cooking_time)
          ) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.recipeCategory.title_en === val.category &&
                object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty).difficulty &&
                object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time)?.cooking_time,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.difficulty)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.recipeCategory.title_en === val.category &&
                object.difficulty.title_en ===
                  tempArr.find((data) => data.difficulty)?.difficulty,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else if (tempArr.find((data) => data.cooking_time)) {
            let dataFilter = recipeListAPI
            .filter(
              (object) =>
                object.recipeCategory.title_en === val.category &&
                object.cookingTime.title_en ===
                  tempArr.find((data) => data.cooking_time)?.cooking_time,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          } else {
            let dataFilter = recipeListAPI
            .filter(
              (object) => object.recipeCategory.title_en === val.category,
            )
            setDataRecipe(
              dataFilter
                .slice(0, displayData),
            )

            if (dataFilter.length <= displayData) setShowButton(false)
          }

          tempArr.push(val)
          return tempArr
        }
      }
    })
  }

  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor(recipe.langColor)
    useEffectInit({ context: ctx, mobileDark: false })
    setFilterOpen(false)
  }, [])

  const buttonActive = filterOpen ? 'bg-morin-red' : ''

  return (
    <Layout className="items-stretch">
      {/* <Header mobileDark={false} /> */}
      <SEO
        title={ctx.language === 'id' ? 'Resep' : 'Recipes'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? recipe.seo_id : recipe.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="w-full bg-morin-peach min-h-full flex flex-col space-between self-stretch flex-grow"
      >
        <div className=" relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <Parallax
            translateY={['-100px', '0px']}
            className="relative w-full h-[110%]"
          >
            <Image
              priority
              src={urlFor(recipe.background).auto('format').width(1928).url()}
              placeholder={urlFor(recipe.background)
                .auto('format')
                .width(1600)
                .blur(25)
                .url()}
              alt={recipe.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </Parallax>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? (
                <>{recipe.title_id}</>
              ) : (
                <>{recipe.title_en}</>
              )}
            </h1>
          </div>
        </div>

        <div className="p-4 lg:p-8 flex-grow">
          <div className="flex w-full max-w-screen-2xl mx-auto items-center justify-between mb-5 md:mb-7 lg:mb-8 xl:mb-10">
            <span className="font-semibold text-morin-red pt-1">
              {ctx.language === 'id'
                ? `Diurutkan Secara ${
                    filterValue.length < 1
                      ? ' Bawaan'
                      : filterValue.map((obj) =>
                          Object.values(obj).map((data) => ` ${data}`),
                        )
                  }`
                : `Sorted by ${
                    filterValue.length < 1
                      ? ' Default'
                      : filterValue.map((obj) =>
                          Object.values(obj).map((data) => ` ${data}`),
                        )
                  }`}
            </span>
            <StrokeButton
              arrow={false}
              color={colors.morinRed}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`transition-all pl-2 pr-2 ml-0 outline-none shadow-none hover:shadow-none mr-0 md:px-4 md:py-2 ${buttonActive}`}
            >
              <div className="w-4 md:w-6 lg:w-8">
                <Filter
                  color={filterOpen ? colors.white : colors.morinRed}
                  className="transition-all fill-hover"
                />
              </div>
            </StrokeButton>
          </div>

          <div suppressHydrationWarning>
            <RecipeFilter
              isOpen={filterOpen}
              difficulty={difficultyListAPI}
              cookingTime={cookingTimeListAPI}
              recipeCategory={recipeCategoryAPI}
              lang={ctx.language}
              value={filterValue}
              filterFunc={handleFilter}
              triggerTagName={'btnFilter'}
            />
          </div>

          <div className="max-w-screen-2xl min-h-[60vh] mx-auto">
            {dataRecipe.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {dataRecipe.map((item, index) => (
                  <div className="w-full" key={`${item.title_en}[${index}]`}>
                    <RecipeCard
                      imgSrc={urlFor(item.thumbnail)
                        .auto('format')
                        .width(500)
                        .url()}
                      imgPlaceholder={urlFor(item.thumbnail)
                        .auto('format')
                        .width(300)
                        .blur(50)
                        .url()}
                      imgAlt={item.thumbnail.alt}
                      title={
                        ctx.language === 'id' ? item.title_id : item.title_en
                      }
                      link={`/recipes/${item.slug.current}`}
                      duration={
                        ctx.language === 'id'
                          ? item.cookingTime.title_id
                          : item.cookingTime.title_en
                      }
                      difficulty={
                        ctx.language === 'id'
                          ? item.difficulty.title_id
                          : item.difficulty.title_en
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-full min-h-[60vh] flex justify-center items-center">
                <span className="text-mtitleBig text-morin-red">
                  No Result Found
                </span>
              </div>
            )}
            {showButton && (
              <div className="w-full flex justify-center mt-5 xl:mt-7">
                <StrokeButton
                  arrow={false}
                  color={colors.morinRed}
                  onClick={loadMore}
                >
                  {ctx.language === 'id'
                    ? 'Menampilkan lebih banyak'
                    : 'Show More'}
                </StrokeButton>
              </div>
            )}
          </div>
        </div>

        <Footer
          lang={ctx.language}
          button={translation.menu_lang}
          faq={seo.hide_faq}
          mailchimp={seo.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const recipeAPI = await client.fetch(`
  *[_type == "recipe"]
  `)
  const recipeListAPI = await client.fetch(`
  *[_type == "recipeList"] {
    ...,
    difficulty->,
    cookingTime->,
    recipeCategory->,
  }
  `)
  const difficultyListAPI = await client.fetch(`
  *[_type == "difficultyList"] 
  `)
  const cookingTimeListAPI = await client.fetch(`
  *[_type == "cookingTimeList"] 
  `)
  const recipeCategoryAPI = await client.fetch(`
  *[_type == "recipeCategory"] 
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `)
  const [translation] = translationAPI
  return {
    props: {
      recipeAPI,
      recipeListAPI,
      difficultyListAPI,
      cookingTimeListAPI,
      recipeCategoryAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default Recipe

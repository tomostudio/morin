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

const recipeFilter = [
  {
    title: 'Difficulty',
    options: [
      {
        name: 'difficulty-easy',
        label: 'Easy',
        value: 'easy',
      },
      {
        name: 'difficulty-medium',
        label: 'Medium',
        value: 'medium',
      },
      {
        name: 'difficulty-hard',
        label: 'Hard',
        value: 'hard',
      },
    ],
  },
  {
    title: 'Cooking Time',
    options: [
      {
        name: 'duration-10',
        label: '10 mins',
        value: '10',
      },
      {
        name: 'duration-30',
        label: '< 30 mins',
        value: '30',
      },
      {
        name: 'duration-60',
        label: '30-60 mins',
        value: '60',
      },
    ],
  },
  {
    title: 'Category',
    options: [
      {
        name: 'category-beverages',
        label: 'Beverages',
        value: 'beverages',
      },
      {
        name: 'category-desserts',
        label: 'Desserts',
        value: 'desserts',
      },
      {
        name: 'category-appetizers',
        label: 'Appetizers',
        value: 'appetizers',
      },
    ],
  },
]

const Recipe = ({
  recipeAPI,
  recipeListAPI,
  difficultyListAPI,
  cookingTimeListAPI,
  recipeCategoryAPI,
  seoAPI,
  footerAPI,
}) => {
  const [filterOpen, setFilterOpen] = useState(true)
  const [filterValue, setFilterValue] = useState([
    {
      difficulty: '',
    },
    {
      cooking_time: '',
    },
    {
      category: '',
    },
  ])
  const [seo] = seoAPI
  const [recipe] = recipeAPI
  const router = useRouter()

  const handleFilter = (val) => {
    setFilterValue((prev) => {
      const tempArr = [...prev]
      if (tempArr.some((o) => o.hasOwnProperty('difficulty'))) {
        if (
          tempArr.map((object) => object.difficulty).includes(val.difficulty)
        ) {
          const index = tempArr
            .map((object) => object.difficulty)
            .indexOf(val.difficulty)
          tempArr.splice(index, 1)
          return tempArr
        } else {
          tempArr = [val]
          return tempArr
        }
      } else {
        tempArr.push(val)
        return tempArr
      }

      // if (tempArr.some((o) => o.hasOwnProperty('cooking_time'))) {
      //   if (tempArr.hasOwnProperty('cooking_time').includes(val)) {
      //     const index = tempArr.indexOf(val)
      //     tempArr.splice(index, 1)
      //     return tempArr
      //   }
      // } else {
      //   tempArr.push(val)
      //   return tempArr
      // }

      // if (tempArr.some((o) => o.hasOwnProperty('category'))) {
      //   if (tempArr.hasOwnProperty('category').includes(val)) {
      //     const index = tempArr.indexOf(val)
      //     tempArr.splice(index, 1)
      //     return tempArr
      //   }
      // } else {
      //   tempArr.push(val)
      //   return tempArr
      // }
    })
  }

  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false })
    setFilterOpen(false)
  }, [])

  const buttonActive = filterOpen ? 'bg-morin-red' : ''

  return (
    <Layout>
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

      <div className="w-full bg-morin-peach">
        <div className=" relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              priority
              src={urlFor(recipe.background).url()}
              placeholder={urlFor(recipe.background).url()}
              alt={recipe.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? (
                <>
                  Resep <br /> dari Hati
                </>
              ) : (
                <>
                  Recipes <br /> from Love
                </>
              )}
            </h1>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="flex w-full max-w-screen-2xl mx-auto items-center justify-between mb-5 md:mb-7 lg:mb-8 xl:mb-10">
            <span className="font-semibold text-morin-red pt-1">
              {ctx.language === 'id'
                ? 'Diurutkan Secara Bawaan'
                : 'Sorted by Default'}
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
                  className="transition-all fill-hover"
                />
              </div>
            </StrokeButton>
          </div>

          <div suppressHydrationWarning>
            {/* {console.log(filterValue)} */}
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

          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {/* {
                console.log(filterValue)
              }
              {
                console.log(filterValue.some((o) => o.hasOwnProperty('difficulty')))
              }
              {console.log(
                filterValue.hasOwnProperty('difficulty')
                  ? obj.difficulty === filterValue.difficulty
                  : null
              )}
              {console.log(
                recipeListAPI?.filter((obj) =>
                filterValue.some((o) => o.hasOwnProperty('difficulty'))
                    ? obj.difficulty.title_en === filterValue[0].difficulty
                    : null
                ),
              )} */}
              {recipeListAPI
                // ?.filter((obj) =>
                //   filterValue.hasOwnProperty('difficulty')
                //     ? obj.difficulty === filterValue.difficulty
                //     : false && filterValue.hasOwnProperty('cookingTime')
                //     ? obj.cooking_time === filterValue.cookingTime
                //     : false && filterValue.hasOwnProperty('recipeCategory')
                //     ? obj.category === filterValue.recipeCategory
                //     : false,
                // )
                .map((item, index) => (
                  <div className="w-full" key={`${item.title_en}[${index}]`}>
                    {
                      console.log(item)
                    }
                    <RecipeCard
                      imgSrc={urlFor(item.thumbnail).auto('format').width(500).url()}
                      imgPlaceholder={urlFor(item.thumbnail).auto('format').width(300).blur(50).url()}
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
            <div className="w-full flex justify-center mt-5 xl:mt-7">
              <StrokeButton
                arrow={false}
                color={colors.morinRed}
                onClick={() => console.log('load more')}
              >
                {ctx.language === 'id'
                  ? 'Menampilkan lebih banyak'
                  : 'Show More'}
              </StrokeButton>
            </div>
          </div>
        </div>

        <Footer lang={ctx.language} />
      </div>
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
  return {
    props: {
      recipeAPI,
      recipeListAPI,
      difficultyListAPI,
      cookingTimeListAPI,
      recipeCategoryAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Recipe

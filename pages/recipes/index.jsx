import { useEffect, useState } from 'react';
import Image from 'next/image';
import colors from '@/helpers/colors';
import Layout from '@/components/module/layout';
import Footer from '@/components/module/footer';
import RecipeCard from '@/components/shared-module/recipeCard';
import StrokeButton from '@/components/micro-module/strokeButton';
import RecipeFilter from '@/components/micro-module/recipeFilter';
import { useEffectInit } from '@/components/utils/preset';
import { Filter } from '@/components/utils/svg';
import urlFor from '@/helpers/sanity/urlFor';
import client from '@/helpers/sanity/client';
import { useAppContext } from 'context/state';


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
];

const Recipe = ({ recipeAPI, seoAPI, footerAPI }) => {
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

  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false });
    setFilterOpen(false);

  }, []);

  const buttonActive = filterOpen ? 'bg-morin-red' : '';

  return (
    <Layout>
      {/* <Header mobileDark={false} /> */}

      <div className='w-full bg-morin-peach'>
        <div className=' relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]'>
          <div className='relative w-full h-full'>
            <Image
              priority
              src='/recipe/banner.jpg'
              placeholder='/recipe/banner.png'
              alt='Recipe'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className='w-full absolute-center text-center pt-12 px-8'>
            <h1 className='font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1'>
              Recipes
              <br />
              From Love
            </h1>
          </div>
        </div>

        <div className='p-4 lg:p-8'>
          <div className='flex w-full items-center justify-between mb-5 md:mb-7 lg:mb-8 xl:mb-10'>
            <span className='font-semibold text-morin-red pt-1'>
              Sorted by Default
            </span>
            <StrokeButton
              arrow={false}
              color={colors.morinRed}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`transition-all pl-2 pr-2 ml-0 mr-0 md:px-4 md:py-2 ${buttonActive}`}
            >
              <div className='w-4 md:w-6 lg:w-8'>
                <Filter
                  color={filterOpen ? colors.white : colors.morinRed}
                  className='transition-all fill-hover'
                />
              </div>
            </StrokeButton>
          </div>

          <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : (
              <RecipeFilter
                isOpen={filterOpen}
                data={recipeFilter}
                value={filterValue}
                filterFunc={handleFilter}
                triggerTagName={'btnFilter'}
              />
            )}
          </div>

          <div className='max-w-screen-2xl mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
              {recipeAPI?.map((item, index) => (
                <div className='w-full' key={`${item.title}[${index}]`}>
                  <RecipeCard
                    imgSrc={urlFor(item.thumbnail).url()}
                    imgPlaceholder={urlFor(item.thumbnail).url()}
                    imgAlt={item.thumbnail.alt}
                    title={item.title}
                    link={`/recipes/${item.slug.current}`}
                    duration={item.cookingTime}
                    difficulty={item.difficulty}
                  />
                </div>
              ))}
            </div>

            <div className='w-full flex justify-center mt-5 xl:mt-7'>
              <StrokeButton
                arrow={false}
                color={colors.morinRed}
                onClick={() => console.log('load more')}
              >
                Show More
              </StrokeButton>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const recipeAPI = await client.fetch(`
  *[_type == "recipeList"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  return {
    props: {
      recipeAPI,
      seoAPI,
      footerAPI,
    },
  };
}

export default Recipe;

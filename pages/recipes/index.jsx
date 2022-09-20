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
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import { Parallax } from 'react-scroll-parallax';

const Recipe = ({
  recipeAPI,
  recipeListAPI,
  recipeCategoryAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterValue, setFilterValue] = useState([]);
  const [seo] = seoAPI;
  const [recipe] = recipeAPI;
  const [footer] = footerAPI;
  const router = useRouter();

  let displayData = 6;
  const dataIncrease = 6;
  const [showButton, setShowButton] = useState(
    recipeListAPI.length <= displayData ? false : true
  );
  const [dataRecipe, setDataRecipe] = useState(
    recipeListAPI.slice(0, displayData)
  );

  const loadMore = () => {
    displayData += dataIncrease;
    if (filterValue.length > 1) {
      let dataFilter = recipeListAPI
        .map((item) => {
          return {
            ...item,
            filter: item.recipeCategory
              .map((e) => tempArr.map((a) => a.data._id).includes(e._id))
              .filter((e) => e === true).length,
          };
        })
        .sort((a, b) => b.filter - a.filter)
        .filter((e) => e.filter > 0);
      setDataRecipe(dataFilter.slice(0, displayData));
    } else {
      setDataRecipe(recipeListAPI.slice(0, displayData));

      if (recipeListAPI.length <= displayData) setShowButton(false);
    }
  };

  const handleFilter = (recipeData, titleId, categoryId) => {
    displayData = 6;
    setFilterValue((prev) => {
      const tempArr = [...prev];
      // jika data filter kosong
      if (tempArr.length === 0) {
        // cari category id
        let data = recipeData.data.find((item) => item._id === categoryId);
        // push data category
        tempArr.push({
          ...recipeData,
          data: data,
        });

        // filter data recipe
        let dataFilter = recipeListAPI.filter((item) =>
          item.recipeCategory.find((item) => item._id === categoryId)
        );
        // set data filter recipe
        setDataRecipe(dataFilter.slice(0, displayData));

        // cek length data filter recipe
        if (dataFilter.length <= displayData) setShowButton(false);
        return tempArr;
      } else {
        // cek apakah user meng-klik category yang sama
        if (tempArr.find((item) => item.data._id === categoryId)) {
          // delete category
          const index = tempArr
            .map((object) => object.data._id)
            .indexOf(categoryId);
          tempArr.splice(index, 1);

          if (tempArr.length > 1) {
            // filter data recipe
            let dataFilter = recipeListAPI
              .map((item) => {
                return {
                  ...item,
                  filter: item.recipeCategory
                    .map((e) => tempArr.map((a) => a.data._id).includes(e._id))
                    .filter((e) => e === true).length,
                };
              })
              .sort((a, b) => b.filter - a.filter)
              .filter((e) => e.filter > 0);

            // set data filter recipe
            setDataRecipe(dataFilter.slice(0, displayData));

            // cek length data filter recipe
            if (dataFilter.length <= displayData) setShowButton(false);
          } else {
            setDataRecipe(recipeListAPI.slice(0, displayData));

            // cek length data filter recipe
            if (recipeListAPI.length <= displayData) setShowButton(false);
          }

          return tempArr;
        } else if (tempArr.find((item) => item._id === titleId)) {
          // cek apakah recipe title dari data category nya sama

          // get index recipe title
          const index = tempArr.map((object) => object._id).indexOf(titleId);
          // remove recipe category
          tempArr.splice(index, 1);
          // push data category baru
          tempArr.push({
            ...recipeData,
            data: recipeData.data.find((item) => item._id === categoryId),
          });

          // filter data recipe
          let dataFilter = recipeListAPI
            .map((item) => {
              return {
                ...item,
                filter: item.recipeCategory
                  .map((e) => tempArr.map((a) => a.data._id).includes(e._id))
                  .filter((e) => e === true).length,
              };
            })
            .sort((a, b) => b.filter - a.filter)
            .filter((e) => e.filter > 0);

          // set data filter recipe
          setDataRecipe(dataFilter.slice(0, displayData));

          // cek length data filter recipe
          if (dataFilter.length <= displayData) setShowButton(false);

          return tempArr;
        } else {
          // push data category baru
          tempArr.push({
            ...recipeData,
            data: recipeData.data.find((item) => item._id === categoryId),
          });

          // filter data recipe
          let dataFilter = recipeListAPI
            .map((item) => {
              return {
                ...item,
                filter: item.recipeCategory
                  .map((e) => tempArr.map((a) => a.data._id).includes(e._id))
                  .filter((e) => e === true).length,
              };
            })
            .sort((a, b) => b.filter - a.filter)
            .filter((e) => e.filter > 0);

          // set data filter recipe
          setDataRecipe(dataFilter.slice(0, displayData));

          // cek length data filter recipe
          if (dataFilter.length <= displayData) setShowButton(false);

          return tempArr;
        }
      }
    });
  };

  const ctx = useAppContext();
  useEffect(() => {
    ctx.setLangColor(recipe.langColor);
    useEffectInit({ context: ctx });
    setFilterOpen(false);
  }, []);

  const buttonActive = filterOpen ? 'bg-morin-red' : '';

  return (
    <Layout className='items-stretch'>
      <SEO
        title={ctx.language === 'id' ? 'Resep' : 'Recipes'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? recipe.seo?.id : recipe.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        initial='initial'
        animate='enter'
        exit='exit'
        variants={fade}
        className='w-full bg-morin-peach min-h-full flex flex-col space-between self-stretch flex-grow'
      >
        <div className=' relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]'>
          <Parallax
            translateY={['-100px', '0px']}
            className='relative w-full h-[110%]'
          >
            <Image
              priority
              src={urlFor(recipe.background).auto('format').url()}
              blurDataURL={urlFor(recipe.background)
                .auto('format')
                .width(1200)
                .blur(25)
                .url()}
              placeholder='blur'
              alt={recipe.background.alt}
              layout='fill'
              objectFit='cover'
            />
          </Parallax>

          <div className='w-full absolute-center text-center pt-12 px-8'>
            <h1 className='font-nutmeg font-bold text-h5 text-white leading-tight lg:text-h2 xl:text-h1'>
              {ctx.language === 'id' ? recipe.title.id : recipe.title.en}
            </h1>
          </div>
        </div>

        <div className='max-w-screen-2xl p-4 lg:p-8 flex-grow mx-auto'>
          <div className='flex w-full max-w-screen-2xl mx-auto items-center justify-between mb-5 md:mb-7 lg:mb-8 xl:mb-10'>
            <span className='font-semibold text-morin-red pt-1'>
              {ctx.language === 'id'
                ? `Diurutkan Secara ${
                    filterValue.length < 1
                      ? ' Bawaan'
                      : filterValue.map((obj) => obj.data.title.id)
                  }`
                : `Sorted by ${
                    filterValue.length < 1
                      ? ' Default'
                      : filterValue.map((obj) => obj.data.title.en)
                  }`}
            </span>
            <StrokeButton
              arrow={false}
              color={colors.morinRed}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`transition-all pl-2 pr-2 ml-0 outline-none shadow-none hover:shadow-none mr-0 md:px-4 md:py-2 ${buttonActive}`}
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
            <RecipeFilter
              isOpen={filterOpen}
              category={recipeCategoryAPI}
              lang={ctx.language}
              value={filterValue}
              filterFunc={handleFilter}
              triggerTagName={'btnFilter'}
            />
          </div>

          <div className=' min-h-[60vh] mx-auto'>
            {dataRecipe.length > 0 ? (
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {dataRecipe.map((item, index) => (
                  <div className='w-full' key={index}>
                    <RecipeCard
                      imgSrc={urlFor(item.thumbnail).auto('format').url()}
                      imgPlaceholder={urlFor(item.thumbnail)
                        .auto('format')
                        .width(300)
                        .blur(50)
                        .url()}
                      imgAlt={item.thumbnail.alt}
                      title={
                        ctx.language === 'id' ? item.title.id : item.title.en
                      }
                      link={`/recipes/${item.slug.current}`}
                      category={item.recipeCategory}
                      lang={ctx.language}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className='w-full h-full min-h-[60vh] flex justify-center items-center'>
                <span className='text-h4 text-morin-red'>No Result Found</span>
              </div>
            )}
            {showButton && (
              <div className='w-full flex justify-center mt-5 xl:mt-7'>
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
          faq={seo.advance_setting.hide_faq}
          mailchimp={footer.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const recipeAPI = await client.fetch(`
  *[_type == "recipe"]
  `);
  const recipeListAPI = await client.fetch(`
  *[_type == "recipeList"] {
    ...,
    recipeCategory[]->
  }
  `);
  const recipeCategoryAPI = await client.fetch(`
  *[_type == "recipeTitle"] | order(order asc) {
    ...,
    data[]->
  }
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);
  const translationAPI = await client.fetch(`
          *[_type == "translation"]
          `);
  const [translation] = translationAPI;
  return {
    props: {
      recipeAPI,
      recipeListAPI,
      recipeCategoryAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  };
}

export default Recipe;

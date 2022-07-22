import CategoryCard from '@/components/module/categoryCard';
import Container from '@/components/module/container';
import Footer from '@/components/module/footer';
import Layout from '@/components/module/layout';
import FancyLink from '@/components/utils/fancyLink';
import MorinTabs from '@/components/micro-module/morinTabs';
import RecipeSlider from '@/components/sliders/recipeSlider';
import { SunRay } from '@/components/utils/svg';
import Image from 'next/image';
import ProductCard from '@/components/shared-module/productCard';
import StrokeButton from '@/components/micro-module/strokeButton';
import colors from '@/helpers/colors';
import { useEffectInit } from '@/components/utils/preset';
import { useEffect, useState } from 'react';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import urlFor from '@/helpers/sanity/urlFor';
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';

const ProductDetail = ({ productAPI, productListAPI, seoAPI }) => {
  const [seo] = seoAPI;
  const [product] = productAPI;
  const router = useRouter();
  const [productCurrent, setProductCurrent] = useState(
    product.listWeight.find((data) => data.defaultWeight === true).title
  );

  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true });
  }, []);

  return (
    <Layout className='overflow-hidden'>
      {/* <Header hamburgerColor='bg-black' /> */}
      <SEO
        title={router.locale === 'id' ? product.title_id : product.title_en}
        pagelink={router.pathname}
        inputSEO={router.locale === 'id' ? product.seo_id : product.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && router.locale === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <div className='w-full'>
        {/* Initial Cover */}
        <div className='relative w-full h-auto z-0'>
          <div
            className='h-full w-full absolute z-0'
            style={{
              backgroundColor: product.backgroundColor
                ? product.backgroundColor.hex
                : colors.morinLightBlue,
            }}
          >
            {/* Background Elements */}
            <div className='absolute w-full h-full translate-y-[50px] overflow-hidden md:translate-y-0 z-1'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[50vh] md:translate-y-[-30%] w-[100vw] max-w-[1500px] h-auto aspect-square z-1'>
                <Image
                  src={`/RAY.svg`}
                  objectFit='contain'
                  layout='fill'
                  className='animate-spin-slow '
                />
              </div>
              <div
                className={`w-full h-full max-w-sm absolute-center xl:max-w-screen-2xl z-2 product-elements layout-${product.thumbnailFruit.layout}`}
              >
                {/* Fruit 1 */}
                {product.thumbnailFruit.fruit1.asset && (
                  <div className={`fruits fruit1`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit1)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit1)
                        .width(200)
                        .auto('format')
                        .blur(50)
                        .url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit1.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 2 */}
                {product.thumbnailFruit.fruit2.asset && (
                  <div className={`fruits fruit2`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit2)
                        .auto('format')
                        .url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit2).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit2.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 3 */}
                {product.thumbnailFruit.fruit3.asset && (
                  <div className={`fruits fruit3`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit3).url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit3).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit3.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 4 */}
                {product.thumbnailFruit.fruit1.asset && (
                  <div className={`fruits fruit4`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit1).url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit1).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit1.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 5 */}
                {product.thumbnailFruit.fruit2.asset && (
                  <div className={`fruits fruit5`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit2).url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit2).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit2.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 6 */}
                {product.thumbnailFruit.fruit3.asset && (
                  <div className={`fruits fruit6`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit3).url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit3).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit3.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
                {/* Fruit 7 */}
                {product.thumbnailFruit.fruit1.asset && (
                  <div className={`fruits fruit7`}>
                    <Image
                      src={urlFor(product.thumbnailFruit.fruit1).url()}
                      blurDataURL={urlFor(product.thumbnailFruit.fruit1).url()}
                      placeholder='blur'
                      alt={product.thumbnailFruit.fruit1.alt}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Title Text */}
          <div
            className={`text-center z-2 lg:pt-36 xl:pt-56 h-full justify-between relative`}
            style={{
              color: product.textColor ? product.textColor.hex : '#175BA7',
            }}
          >
            <span className='font-semibold tracking-widest mb-1.5 md:mb-2.5 xl:mb-4 uppercase text-inherit'>
              MORIN{' '}
              {router.locale === 'id'
                ? product.type.title_id
                : product.type.title_en}
            </span>
            <h1 className='font-nutmeg text-ctitle leading-none px-4 mb-0 md:text-h2 xl:text-h1 text-inherit'>
              {router.locale === 'id' ? product.title_id : product.title_en}
            </h1>
          </div>
          {/* Product */}
          <div className='flex flex-wrap justify-center items-end w-full px-12 relative z-2 mt-20'>
            <div className='w-80vw md:w-[35vw] min-w-[250px] h-[75vh] aspect-square z-2 relative '>
              {product.listWeight.map((data, id) => (
                <div
                  className={`${
                    productCurrent === data.title
                      ? 'absolute fade-in top-0'
                      : 'opacity-0 relative'
                  }  aspect-square z-2 w-full h-full`}
                  key={id}
                >
                  <Image
                    src={urlFor(data.image).url()}
                    blurDataURL={urlFor(data.image).url()}
                    placeholder='blur'
                    alt={data.image.alt}
                    objectFit='contain'
                    objectPosition={'bottom center'}
                    layout='fill'
                  />
                </div>
              ))}
            </div>
            {/* Information & Curve */}
            <div className='absolute w-full h-[25vh] min-h-[250px] bg-white z-0'>
              <div className='product-detail-curve ' />
              <div className='hidden max-w-screen-2xl w-full h-full absolute bottom-0 left-1/2 -translate-x-1/2  xl:block '>
                <div className='absolute bottom-[10%] left-12 2xl:right-[50%] 2xl:left-auto 2xl:translate-x-[-50%] w-[30%] h-[80%] '>
                  {router.locale === 'id'
                    ? product.decor_id && (
                        <Image
                          src={urlFor(product.decor_id.decor1.image).url()}
                          placeholder={urlFor(
                            product.decor_id.decor1.image
                          ).url()}
                          alt={product.decor_id.decor1.image.alt}
                          layout={'fill'}
                          objectFit={'contain'}
                        />
                      )
                    : product.decor_en && (
                        <Image
                          src={urlFor(product.decor_en.decor1.image).url()}
                          placeholder={urlFor(
                            product.decor_en.decor1.image
                          ).url()}
                          alt={product.decor_en.decor1.image.alt}
                          layout={'fill'}
                          objectFit={'contain'}
                        />
                      )}
                </div>
                <div className='absolute bottom-[10%] right-12 2xl:left-[50%] 2xl:right-auto 2xl:translate-x-[50%] w-[30%] h-[80%]'>
                  {router.locale === 'id'
                    ? product.decor_id && (
                        <Image
                          src={urlFor(product.decor_id.decor2.image).url()}
                          placeholder={urlFor(
                            product.decor_id.decor2.image
                          ).url()}
                          alt={product.decor_id.decor2.image.alt}
                          layout={'fill'}
                          objectFit={'contain'}
                        />
                      )
                    : product.decor_en && (
                        <Image
                          src={urlFor(product.decor_en.decor2.image).url()}
                          placeholder={urlFor(
                            product.decor_en.decor2.image
                          ).url()}
                          alt={product.decor_en.decor2.image.alt}
                          layout={'fill'}
                          objectFit={'contain'}
                        />
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative mt-10 mb-10'>
          <MorinTabs
            tabData={product.listWeight}
            onChange={(e) => setProductCurrent(e)}
            className='mx-auto mb-6 md:mb-8'
          />
        </div>
        <div className='relative pt-5 pb-5 md:pb-14 xl:pb-16'>
          <h2
            className='max-w-screen-lg font-nutmeg text-mtitle text-center font-medium leading-tight mb-8 px-4 mx-auto md:text-mtitleBig xl:text-h2 md:px-8 lg:mb-10 xl:mb-14'
            style={{
              color: product.textColor ? product.textColor.hex : '#175BA7',
            }}
          >
            {router.locale === 'id'
              ? product.description_id
              : product.description_en}
          </h2>
          <FancyLink
            blank
            destination='#'
            className='flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal mx-auto px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8'
          >
            <span className='block pt-1'>
              {router.locale === 'id'
                ? 'Dapatkan Produk Ini'
                : 'Get This Product'}
            </span>
          </FancyLink>
        </div>

        {product.recipes?.length > 0 && (
          <div className='max-w-screen-2xl mx-auto'>
            <div className='relative bg-morin-peach rounded-2xl overflow-hidden py-8 px-8 md:px-0 xl:rounded-[40px] xl:pt-11 xl:pb-14 xl:px-4 2xl:px-6'>
              <h2 className='font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-6 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8'>
                {router.locale === 'id'
                  ? 'Hal-hal yang dapat Anda buat'
                  : 'Things you can make'}
              </h2>
              <div className='w-[calc(100%+64px)] -mx-8 md:w-full md:mx-0'>
                <RecipeSlider
                  data={product.recipes}
                  onClick={(url) => handleImageGallery(url)}
                />
              </div>
              <div className='hidden w-fit mt-7 mx-auto md:block xl:mt-8'>
                <StrokeButton destination='/recipes' color={colors.morinRed}>
                  {router.locale === 'id'
                    ? 'Lihat Semua Resep'
                    : 'See All Recipes'}
                </StrokeButton>
              </div>
            </div>
          </div>
        )}

        {productListAPI?.length > 0 && (
          <div className='max-w-screen-2xl mx-auto'>
            <div className='py-8 px-4 lg:px-8 xl:pt-11 xl:pb-14 2xl:px-0'>
              <h2 className='font-nutmeg font-normal text-mtitleSmall text-morin-red text-center leading-tight mb-7 mx-auto md:text-mtitleBig xl:text-h2 xl:mb-8'>
                {router.locale === 'id' ? 'Produk Sejenis' : 'Similar Products'}
              </h2>

              <div className='flex flex-wrap mb-8 -mx-1.5 md:mb-0 lg:-mx-2.5 justify-center'>
                {product.similar.option
                  ? productListAPI?.slice(0, 3).map((item, index) => (
                      <div
                        className='w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5'
                        key={`${item.title_en}${index}`}
                      >
                        <ProductCard
                          title={
                            router.locale === 'id'
                              ? item.title_id
                              : item.title_en
                          }
                          bgColor={
                            item.backgroundColor
                              ? item.backgroundColor.hex
                              : colors.morinLightBlue
                          }
                          imgSrc={urlFor(item.thumbnail).url()}
                          imgPlaceholder={urlFor(item.thumbnail).url()}
                          thumbnailFruit={item.thumbnailFruit}
                          imgAlt={item.thumbnail.alt}
                          link={`${product.type.slug.current}/${item.slug.current}`}
                          small
                        />
                      </div>
                    ))
                  : product.similar.manual?.map((item, index) => (
                      <div
                        className='w-1/2 px-1.5 mb-3 md:w-1/4 lg:px-2.5 lg:mb-5'
                        key={`${item.title_en}${index}`}
                      >
                        <ProductCard
                          title={
                            router.locale === 'id'
                              ? item.title_id
                              : item.title_en
                          }
                          bgColor={
                            item.backgroundColor
                              ? item.backgroundColor.hex
                              : colors.morinLightBlue
                          }
                          imgSrc={urlFor(item.thumbnail).url()}
                          imgBg={'/product/strawberry-bg.png'}
                          thumbnailFruit={item.thumbnailFruit}
                          imgPlaceholder={urlFor(item.thumbnail).url()}
                          imgAlt={item.thumbnail.alt}
                          link={`${product.type.slug.current}/${item.slug.current}`}
                          small
                        />
                      </div>
                    ))}
              </div>

              <StrokeButton
                color={colors.morinRed}
                destination='/products'
                className='md:hidden'
              >
                {router.locale === 'id'
                  ? 'Lihat Semua Produk'
                  : 'See All Products'}
              </StrokeButton>
            </div>
          </div>
        )}
      </div>

      <Footer lang={router.locale} />
    </Layout>
  );
};

export async function getStaticPaths({ locales }) {
  const res = await client.fetch(`
        *[_type == "productList"] {
          ...,
          type->,
        }
      `);

  const paths = [];

  res.map((data) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          productSlug: data.slug.current,
          productType: data.type.slug.current,
        },
        locale,
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productAPI = await client.fetch(
    `
      *[_type == "productList" && slug.current == "${params.productSlug}"] {
        ...,
        type->,
        decor_en {
          decor1->,
          decor2->
        },
        decor_id {
          decor1->,
          decor2->
        },
        recipes[]->,
        similar {
          ...,
          manual[]->
        }
      }
    `
  );
  const productListAPI = await client.fetch(`
  *[_type == "productList"]
  `);
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `);
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `);

  return {
    props: {
      productAPI,
      productListAPI,
      seoAPI,
      footerAPI,
    },
  };
}

export default ProductDetail;

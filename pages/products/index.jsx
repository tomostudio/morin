import { useEffect } from 'react'
import CategoryCard from '@/components/module/categoryCard'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import Image from 'next/image'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'

const Category = ({ productAPI, productTypeAPI, seoAPI }) => {
  const [product] = productAPI
  const [seo] = seoAPI
  const ctx = useAppContext()
  const router = useRouter()

  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false })
  }, [])
  return (
    <Layout>
      {/* <Header mobileDark={false} /> */}
      <SEO
        title={ctx.language === 'id' ? 'Produk' : 'Products'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? product.seo_id : product.seo_en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo_id
            : seo.seo_en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <div className="w-full bg-morin-skyBlue">
        <div className=" relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              src={urlFor(product.background).auto('format').width(1920).url()}
              placeholder={urlFor(product.background).auto('format').width(500).blur(50).url()}
              alt={product.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-none lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? 'Produk Kami' : 'Our Products'}
            </h1>
            <p className="hidden max-w-md text-white font-semibold mt-2 mx-auto lg:block">
              {ctx.language === 'id'
                ? product.description_id
                : product.description_en}
            </p>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="max-w-screen-2xl mx-auto mb-7 lg:mb-10">
            {productTypeAPI?.map((item) => (
              <CategoryCard
                key={item.title_en}
                imgSrc={
                  item.animation === '1'
                    ? '/category/hover-1.png'
                    : item.animation === '2'
                    ? '/category/hover-2.png'
                    : item.animation === '3'
                    ? '/category/hover-3.png'
                    : item.animation === '4'
                    ? '/category/hover-4.png'
                    : ''
                }
                categoryData={item}
                imgAlt={ctx.language === "id" ? item.title_id : item.title_en}
                title={ctx.language === "id" ? item.title_id : item.title_en}
                description={ctx.language === "id" ? item.description_id : item.description_en}
                link={`/products/${item.slug.current}`}
                lang={ctx.language}
              />
            ))}
          </div>
        </div>

        <Footer lang={ctx.language} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const productAPI = await client.fetch(`
  *[_type == "product"]
  `)
  const productTypeAPI = await client.fetch(`
  *[_type == "productType"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      productAPI,
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Category

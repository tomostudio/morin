import { useEffect } from 'react'
import CategoryCard from '@/components/module/categoryCard'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import Image from 'next/image'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'

const categoryData = [
  {
    imgSrc: '/category/hover-1.png',
    imgAlt: 'Spreads',
    title: 'Spreads',
    description:
      'Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.',
    link: '/products/product-type',
  },
  {
    imgSrc: '/category/hover-2.png',
    imgAlt: 'Jams',
    title: 'Jams',
    description:
      'Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.',
    link: '/products/product-type',
  },
  {
    imgSrc: '/category/hover-3.png',
    imgAlt: 'Toppings',
    title: 'Toppings',
    description:
      'Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.',
    link: '/products/product-type',
  },
  {
    imgSrc: '/category/hover-4.png',
    imgAlt: 'Fillings',
    title: 'Fillings',
    description:
      'Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.',
    link: '/products/product-type',
  },
]

const Category = ({ productTypeAPI }) => {
  const ctx = useAppContext()

  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false })
  }, [])
  return (
    <Layout>
      {/* <Header mobileDark={false} /> */}

      <div className="w-full bg-morin-skyBlue">
        <div className=" relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              src="/category/banner.jpg"
              placeholder="/category/banner.png"
              alt="Category"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-none lg:text-h2 xl:text-h1">
              Our Products
            </h1>
            <p className="hidden max-w-md text-white font-semibold mt-2 mx-auto lg:block">
              Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
              fermentum amet enim neque.
            </p>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="max-w-screen-2xl mx-auto mb-7 lg:mb-10">
            {productTypeAPI?.map((item) => (
              <CategoryCard
                key={item.title}
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
                imgAlt={item.title}
                title={item.title}
                description={item.description}
                link={`/products/${item.slug.current}`}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
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
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Category

import Container from '@/components/module/container'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
import Layout from '@/components/module/layout'
import ProductCard from '@/components/shared-module/productCard'
import { useEffectInit } from '@/components/utils/preset'
import Image from 'next/image'
import { useEffect } from 'react'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'

const productData = [
  {
    title: 'Blueberry Jam',
    bgColor: '#ECE3FF',
    imgSrc: '/product/blueberry.png',
    imgBg: '/product/blueberry-bg.png',
    imgPlaceholder: '/product/blueberry.png',
    imgAlt: 'Blueberry Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Strawberry Jam',
    bgColor: '#FFE6E5',
    imgSrc: '/product/strawberry.png',
    imgBg: '/product/strawberry-bg.png',
    imgPlaceholder: '/product/strawberry.png',
    imgAlt: 'Strawberry Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Pineapple Jam',
    bgColor: '#FFF7B0',
    imgSrc: '/product/pineapple.png',
    imgBg: '/product/pineapple-bg.png',
    imgPlaceholder: '/product/pineapple.png',
    imgAlt: 'Pineapple Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Raspberry Jam',
    bgColor: '#FFDFD9',
    imgSrc: '/product/raspberry.png',
    imgBg: '/product/raspberry-bg.png',
    imgPlaceholder: '/product/raspberry.png',
    imgAlt: 'Raspberry Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Apricot Jam',
    bgColor: '#FFE5BF',
    imgSrc: '/product/apricot.png',
    imgBg: '/product/apricot-bg.png',
    imgPlaceholder: '/product/apricot.png',
    imgAlt: 'Apricot Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Mixed Fruit Jam',
    bgColor: '#FFD6C8',
    imgSrc: '/product/mixed-fruit.png',
    imgBg: '/product/mixed-fruit-bg.png',
    imgPlaceholder: '/product/mixed-fruit.png',
    imgAlt: 'Mixed Fruit Jam',
    link: '/products/product-type/product-id',
  },
  {
    title: 'Orange Marmalade Jam',
    bgColor: '#FFDFB1',
    imgSrc: '/product/orange.png',
    imgBg: '/product/orange-bg.png',
    imgPlaceholder: '/product/orange.png',
    imgAlt: 'Orange Marmalade Jam',
    link: '/products/product-type/product-id',
  },
]

const ProductList = ({ productTypeAPI }) => {
  const [productType] = productTypeAPI
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])

  return (
    <div className="w-full bg-morin-skyBlue">
      <Layout className="overflow-hidden pt-[86px] lg:pt-32">
        {/* <Header /> */}

        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-11"
        >
          <div className="max-w-xs text-morin-blue text-center mb-12 mx-auto md:max-w-md">
            <h1 className="relative w-fit text-ctitle font-nutmeg mt-0 mb-1 mx-auto md:text-mtitleBig lg:text-h2 lg:px-8 lg:mb-3 xl:text-h1">
              {productType.title}
              <div className="w-full h-full absolute-center hidden lg:block">
                <div className="w-fit absolute top-0 left-0 -translate-x-full -translate-y-1/3 select-none">
                  <Image
                    src={urlFor(productType.decor.decor1.image).url()}
                    placeholder={urlFor(productType.decor.decor1.image).url()}
                    alt={productType.decor.decor1.image.alt}
                    width={385}
                    height={385}
                  />
                </div>
                <div className="w-fit absolute top-0 left-0 translate-x-[85%] select-none">
                  <Image
                    src={urlFor(productType.decor.decor2.image).url()}
                    placeholder={urlFor(productType.decor.decor2.image).url()}
                    alt={productType.decor.decor2.image.alt}
                    width={420}
                    height={120}
                  />
                </div>
              </div>
            </h1>

            <p className="font-semibold max-w-[400px] mx-auto">
              {productType.description}
            </p>
          </div>

          <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5">
            {productType.product?.map((item, index) => (
              <div
                className="w-1/2 px-1.5 mb-3 md:w-1/3 lg:px-2.5 lg:mb-5"
                key={`${item.title}${index}`}
              >
                <ProductCard
                  title={item.title}
                  bgColor={item.backgroundColor.hex}
                  imgSrc={urlFor(item.thumbnail).url()}
                  imgBg={'/product/strawberry-bg.png'}
                  imgPlaceholder={urlFor(item.thumbnail).url()}
                  imgAlt={item.thumbnail.alt}
                  link={`${productType.slug.current}/${item.slug.current}`}
                />
              </div>
            ))}
          </div>
        </Container>

        <Footer />
      </Layout>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "productType"]
      `)

  const paths = res.map((data) => ({
    params: {
      productType: data.slug.current,
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productTypeAPI = await client.fetch(
    `
      *[_type == "productType" && slug.current == "${params.productType}"] {
        ...,
        decor {
          decor1->,
          decor2->
        },
        "product": *[_type=='productList' && references(^._id)]
      } 
    `,
  )
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

export default ProductList

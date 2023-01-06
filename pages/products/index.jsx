import { useEffect } from 'react'
import CategoryCard from '@/components/module/categoryCard'
import Footer from '@/components/module/footer'
import Layout from '@/components/module/layout'
import Image from 'next/legacy/image'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import urlFor from '@/helpers/sanity/urlFor'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'
import { Parallax } from 'react-scroll-parallax'

const Category = ({
  productAPI,
  productTypeAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [product] = productAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const ctx = useAppContext()
  const router = useRouter()

  useEffect(() => {
    ctx.setLangColor(product.langColor)
    useEffectInit({ context: ctx })
  }, [])
  return (
    <Layout>
      <SEO
        title={ctx.language === 'id' ? 'Produk' : 'Products'}
        pagelink={router.pathname}
        inputSEO={product.seo?.id}
        defaultSEO={typeof seo !== 'undefined' && seo.seo?.id}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />

      <motion.div
        className="w-full bg-morin-skyBlue"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <div className=" relative w-full max-w-screen-2xl mx-auto h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <Parallax
            translateY={['-100px', '0px']}
            className="relative w-full h-[110%]"
          >
            <Image
              src={urlFor(product.background).auto('format').url()}
              blurDataURL={urlFor(product.background)
                .auto('format')
                .blur(25)
                .url()}
              placeholder="blur"
              alt={product.background.alt}
              layout="fill"
              objectFit="cover"
            />
          </Parallax>

          <div className="w-full absolute-center text-center px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-none lg:text-h2 xl:text-h1">
              {ctx.language === 'id' ? product.title.en : product.title.id}
            </h1>
            <p className="hidden max-w-md text-white font-semibold mt-2 mx-auto lg:block">
              {ctx.language === 'id'
                ? product.description.id
                : product.description.en}
            </p>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto p-4 lg:p-8">
          <div className="mb-7 lg:mb-10">
            {productTypeAPI?.map((item) => (
              <CategoryCard
                key={item.title.en}
                animation={item.animation}
                imageHover={item.imageHover}
                imgAlt={ctx.language === 'id' ? item.title.id : item.title.en}
                title={ctx.language === 'id' ? item.title.id : item.title.en}
                button={product.btn_lang}
                description={
                  ctx.language === 'id'
                    ? item.description.id
                    : item.description.en
                }
                link={`/products/${item.slug.current}`}
                lang={ctx.language}
              />
            ))}
          </div>
        </div>

        <Footer
          event={eventAPI.length > 0 ? true : false}
          lang={ctx.language}
          button={translation.menu_lang}
          faq={seo.advance_setting.hide_faq}
          mailchimp={footer.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
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
  const eventAPI = await client.fetch(`
  *[_type == "eventList"]
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
      productAPI,
      productTypeAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default Category

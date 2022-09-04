import client from '@/helpers/sanity/client'
import SEO from '@/components/utils/seo'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'

const Error404 = ({ seoAPI }) => {
  const [seo] = seoAPI
  const router = useRouter()
  return (
    <>
      <SEO
        title={'404'}
        pagelink={router.pathname}
        inputSEO={seo.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div
        className="w-full bg-morin-skyBlue  min-h-screen flex justify-center flex-col items-center"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
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
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default Error404

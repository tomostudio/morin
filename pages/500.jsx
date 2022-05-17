import client from '@/helpers/sanity/client'
import SEO from '@/components/utils/seo'
import Error from 'next/error'
import { useRouter } from 'next/router'

const Error500 = ({ seoAPI }) => {
  const [seo] = seoAPI
  const router = useRouter()
  return (
    <>
      <SEO
        title={'500'}
        pagelink={router.pathname}
        inputSEO={seo.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Error statusCode={500} />
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
  return {
    props: {
      seoAPI,
      footerAPI,
    },
  }
}

export default Error500

import { useEffect } from 'react'
import Layout from '@/components/module/layout'
import Footer from '@/components/module/footer'
import Container from '@/components/module/container'
import React from 'react'
import ContactCard from '@/components/module/contactCard'
import { useEffectInit } from '@/components/utils/preset'
import { useAppContext } from 'context/state'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'

const contactData = [
  {
    images: [
      '/contact/contact-1.png',
      '/contact/contact-1.png',
      '/contact/contact-1.png',
    ],
    label: 'Head Office',
    companyName: 'PT. Astaguna Wisesa',
    address: 'Jelambar Madya Utama, Jakarta 11460, Indonesia',
    phone: '021 5657845',
    email: 'info@astaguna.co.id',
    maps: 'https://goo.gl/maps/ozoRK5cx1yWtw3Jq6',
  },
  {
    images: [
      '/contact/contact-2.png',
      '/contact/contact-2.png',
      '/contact/contact-2.png',
    ],
    label: 'Factory',
    companyName: 'PT. Astaguna Wisesa',
    address: 'Kawasan Industri Hyundai BIIE, Cikarang, Bekasi 17550, Indonesia',
    phone: null,
    email: null,
    maps: 'https://goo.gl/maps/FGesQVwHy5yYsATp7',
  },
]

const Contact = ({ contactAPI, contactListAPI, seoAPI }) => {
  const [seo] = seoAPI
  const [contact] = contactAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])
  return (
    <Layout className="pt-[86px] lg:pt-32">
      <SEO
        title={'Contact'}
        pagelink={router.pathname}
        inputSEO={contact.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Container
        className="pl-0 pr-0"
        classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-16"
      >
        <h1 className="text-morin-blue text-ctitle font-nutmeg font-bold mx-auto mb-8 md:text-ctitleBig lg:text-h2 xl:text-h1 xl:mb-16">
          Contact
        </h1>

        {contactListAPI?.map((item, index) => (
          <div className="mb-4 last:mb-0" key={index}>
            <ContactCard
              imageData={item.images}
              label={item.title}
              companyName={item.name}
              description={item.description}
              maps={item.maps}
            />
          </div>
        ))}
      </Container>

      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const contactAPI = await client.fetch(`
  *[_type == "contact"]
  `)
  const contactListAPI = await client.fetch(`
  *[_type == "contactList"]
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      contactAPI,
      contactListAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Contact

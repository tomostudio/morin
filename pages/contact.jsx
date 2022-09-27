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
import { motion } from 'framer-motion'
import { fade } from '@/helpers/transitions'

const Contact = ({
  contactAPI,
  contactListAPI,
  eventAPI,
  seoAPI,
  footerAPI,
  translation,
}) => {
  const [seo] = seoAPI
  const [contact] = contactAPI
  const [footer] = footerAPI
  const router = useRouter()
  const ctx = useAppContext()
  useEffect(() => {
    ctx.setLangColor('black')
    useEffectInit({ context: ctx, mobileDark: true })
  }, [])
  return (
    <Layout className="pt-[86px] lg:pt-32">
      <SEO
        title={ctx.language === 'id' ? 'Kontak' : 'Contact'}
        pagelink={router.pathname}
        inputSEO={ctx.language === 'id' ? contact.seo?.id : contact.seo?.en}
        defaultSEO={
          typeof seo !== 'undefined' && ctx.language === 'id'
            ? seo.seo?.id
            : seo.seo?.en
        }
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <motion.div initial="initial" animate="enter" exit="exit" variants={fade}>
        <Container
          className="pl-0 pr-0"
          classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-16"
        >
          <h1 className="text-morin-blue text-ctitle font-nutmeg font-bold mx-auto mb-8 md:text-ctitleBig lg:text-h2 xl:text-h1 xl:mb-16">
            {ctx.language === 'id' ? contact.title.id : contact.title.en}
          </h1>

          {contactListAPI?.map((item, index) => (
            <div className="mb-4 last:mb-0" key={index}>
              <ContactCard
                imageData={item.images}
                label={ctx.language === 'id' ? item.title.id : item.title.en}
                button={contact.btn_lang}
                description={
                  ctx.language === 'id'
                    ? item.description.id
                    : item.description.en
                }
                maps={item.maps}
                lang={ctx.language}
              />
            </div>
          ))}
        </Container>

        <Footer
          event={eventAPI.length > 0 ? true : false}
          lang={ctx.language}
          button={translation.menu_lang}
          mailchimp={footer.mailchimpID}
          footer={footer}
          translation={translation}
        />
      </motion.div>
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
      contactAPI,
      contactListAPI,
      eventAPI,
      seoAPI,
      footerAPI,
      translation,
    },
  }
}

export default Contact

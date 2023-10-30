import Container from './container'
import FancyLink from '../utils/fancyLink'
import { InstagramSolid, TwitterSolid, FacebookSolid } from '../utils/svg'
import { defaultHover } from '../utils/tailwind-preset'
import SubscribeForm from './subscribe'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const Footer = ({
  className,
  event,
  lang,
  button,
  faq,
  footer,
  translation,
  mailchimp,
}) => {
  return (
    <footer className="mx-auto text-defaultSmall lg:text-default w-full px-4 lg:px-8 max-w-screen-2xl">
      <Container
        className={`relative w-full h-auto flex bg-morin-blue text-white rounded-t-3xl !px-6 md:!px-8 pb-8 pt-10 lg:flex-row lg:justify-between lg:px-10 md:pt-10 md:pb-10 lg:pt-16 lg:pb-20 ${className}`}
      >
        {/* LEFT */}
        <div className="flex flex-col w-full mb-8 lg:w-3/5 lg:mb-0 lg:max-w-lg  pr-0 md:pr-4">
          <div className="px-2 lg:px-0">
            <h2 className="text-subtitle2 font-bold font-nutmeg lg:text-4">
              {lang === 'id'
                ? translation.sub_language.title.id
                : translation.sub_language.title.en}
            </h2>
            <span className="text-defaultSmall lg:text-default">
              {lang === 'id'
                ? translation.sub_language.sub_title.id
                : translation.sub_language.sub_title.en}
            </span>
          </div>
          {/* Subscription Form  */}
          <MailchimpSubscribe
            url={mailchimp}
            render={({ subscribe, status, message }) => (
              <SubscribeForm
                lang={lang}
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
        {/* RIGHT */}
        <div className="flex w-full lg:w-2/5 lg:justify-start lg:ml-auto lg:mt-auto h-full px-2 lg:px-0">
          <div className="flex flex-wrap flex-col w-1/2 space-y-3 lg:w-auto lg:ml-auto lg:min-w-[100px] lg:space-y-4">
            <FancyLink
              a11yText={`Navigate to Home`}
              destination="/"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Beranda' : 'Home'}
            </FancyLink>
            <FancyLink
              a11yText={`Navigate to About`}
              destination="/about"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? button.about.id : button.about.en}
            </FancyLink>
            <FancyLink
              a11yText={`Navigate to Product`}
              destination="/products"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? button.products.id : button.products.en}
            </FancyLink>
            <FancyLink
              a11yText={`Navigate to Recipe`}
              destination="/recipes"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? button.recipes.id : button.recipes.en}
            </FancyLink>
            {event && (
              <FancyLink
                a11yText={`Navigate to Event`}
                destination="/events"
                className={`footer-link ${defaultHover}`}
              >
                {lang === 'id' ? button.events.id : button.events.en}
              </FancyLink>
            )}
            <FancyLink
              a11yText={`Navigate to Get Morin`}
              destination="/get-morin"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? button.get_morin.id : button.get_morin.en}
            </FancyLink>
          </div>
          <div className="flex flex-wrap flex-col justify-between w-1/2 lg:w-auto lg:ml-14 xl:mx-24">
            <div className="flex flex-wrap flex-col space-y-3 lg:space-y-4">
              {!faq && (
                <FancyLink
                  a11yText={`Navigate to FAQ`}
                  destination="/faq"
                  className={`footer-link ${defaultHover}`}
                >
                  {lang === 'id' ? button.faq.id : button.faq.en}
                </FancyLink>
              )}
              <FancyLink
                a11yText={`Navigate to Contact`}
                destination="/contact"
                className={`footer-link ${defaultHover}`}
              >
                {lang === 'id' ? button.contact.id : button.contact.en}
              </FancyLink>
            </div>
            <div className="w-full flex flex-col justify-end mt-auto">
              <div className="flex justify-start w-full space-x-1.5 lg:space-x-3 mb-4 lg:mb-4">
                {footer.footerLink.instagram && (
                  <FancyLink
                    a11yText={`Navigate to Instagram`}
                    destination={`${footer.footerLink.instagram}`}
                    blank={true}
                    className={`relative  ${defaultHover}`}
                  >
                    <InstagramSolid className="w-9 h-9" />
                  </FancyLink>
                )}
                {footer.footerLink.twitter && (
                  <FancyLink
                    a11yText={`Navigate to Twitter`}
                    destination={`${footer.footerLink.twitter}`}
                    blank={true}
                    className={`relative  ${defaultHover}`}
                  >
                    <TwitterSolid className="w-9 h-9" />
                  </FancyLink>
                )}
                {footer.footerLink.facebook && (
                  <FancyLink
                    a11yText={`Navigate to Facebook`}
                    destination={`${footer.footerLink.facebook}`}
                    blank={true}
                    className={`relative  ${defaultHover}`}
                  >
                    <FacebookSolid className="w-9 h-9" />
                  </FancyLink>
                )}
              </div>
              <span className="">{footer.creditText}</span>
              <FancyLink destination="https://tomostudio.id" blank className="text-[10px] md:text-[12px]">
                Website by TOMO Studio
              </FancyLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

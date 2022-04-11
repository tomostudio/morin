import Container from '@/components/module/container'
import Layout from '@/components/module/layout'
import Header from '@/components/module/header'
import Footer from '@/components/module/footer'
import Image from 'next/image'
import colors from '@/helpers/colors'
import HighlightCard from '@/components/module/highlightCard'
import FancyLink from '@/components/utils/fancyLink'

const EventTag = ({ label }) => {
  return (
    <div className="flex items-center h-6 font-semibold leading-none border-2 border-solid border-morin-blue rounded-full px-4 mr-2 last:mr-0 md:h-8 md:mr-5">
      <span className="pt-0.5 md:pt-1">{label}</span>
    </div>
  )
}

const eventCategory = ['Group Event', 'Tour']

const highlightData = [
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Morin in UPH',
    title: 'Morin in UPH',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-2.jpg',
    imgPlaceholder: '/highlight/highlight-2.png',
    imgAlt: 'Cooking Workshop',
    title: 'Cooking Workshop',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
]

const GetMorin = () => {
  return (
    <Layout className="overflow-hidden pt-[86px] lg:pt-32">
      <Header hamburgerColor="bg-black" />

      <Container>
        <div className="flex flex-col leading-tight">
          <div className="flex space-x-48 w-full">
            <h2 className="text-h2 font-nutmeg text-morin-blue w-72">
              Shop Online
            </h2>
            <div className="w-full flex flex-col space-y-12 justify-start">
              <FancyLink
                blank
                destination="#"
                className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
              >
                <span className="block pt-1">shop.morinfood.id</span>
              </FancyLink>
              <div className="flex flex-col justify-start">
                <span className="text-mtitleBig font-nutmeg text-morin-blue">
                  Online Marketplace
                </span>
                <div className="mt-10 grid grid-cols-4 gap-6">
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full mx-auto">
                      <Image
                        src="/marketplace/tokopedia.png"
                        blurDataURL="/marketplace/tokopedia.png"
                        placeholder="blur"
                        alt="Tokopedia"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/shopee.png"
                        blurDataURL="/marketplace/shopee.png"
                        placeholder="blur"
                        alt="Shopee"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/lazada.png"
                        blurDataURL="/marketplace/lazada.png"
                        placeholder="blur"
                        alt="Lazada"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/blibli.png"
                        blurDataURL="/marketplace/blibli.png"
                        placeholder="blur"
                        alt="Blibli"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full mx-auto">
                      <Image
                        src="/marketplace/tokopedia.png"
                        blurDataURL="/marketplace/tokopedia.png"
                        placeholder="blur"
                        alt="Tokopedia"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/shopee.png"
                        blurDataURL="/marketplace/shopee.png"
                        placeholder="blur"
                        alt="Shopee"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/lazada.png"
                        blurDataURL="/marketplace/lazada.png"
                        placeholder="blur"
                        alt="Lazada"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/blibli.png"
                        blurDataURL="/marketplace/blibli.png"
                        placeholder="blur"
                        alt="Blibli"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-48 mt-20 mb-20 w-full">
            <h2 className="text-h2 font-nutmeg text-morin-blue w-72">
              Shop Offline
            </h2>
            <div className="w-full flex flex-col space-y-12 justify-start">
              <div className="flex flex-col justify-start">
                <span className="text-mtitleBig font-nutmeg text-morin-blue">
                  Major Distributors
                </span>
                <div className="mt-10 grid grid-cols-4 gap-6">
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full mx-auto">
                      <Image
                        src="/marketplace/indomaret.png"
                        blurDataURL="/marketplace/indomaret.png"
                        placeholder="blur"
                        alt="Indomaret"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/alfamart.png"
                        blurDataURL="/marketplace/alfamart.png"
                        placeholder="blur"
                        alt="Alfamart"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/transmart.png"
                        blurDataURL="/marketplace/transmart.png"
                        placeholder="blur"
                        alt="Transmart"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/carrefour.png"
                        blurDataURL="/marketplace/carrefour.png"
                        placeholder="blur"
                        alt="Carrefour"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full mx-auto">
                      <Image
                        src="/marketplace/indomaret.png"
                        blurDataURL="/marketplace/indomaret.png"
                        placeholder="blur"
                        alt="Indomaret"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/alfamart.png"
                        blurDataURL="/marketplace/alfamart.png"
                        placeholder="blur"
                        alt="Alfamart"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/transmart.png"
                        blurDataURL="/marketplace/transmart.png"
                        placeholder="blur"
                        alt="Transmart"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                  <FancyLink
                    destination="#"
                    className="h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/4 h-3/4">
                      <Image
                        src="/marketplace/carrefour.png"
                        blurDataURL="/marketplace/carrefour.png"
                        placeholder="blur"
                        alt="Carrefour"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </FancyLink>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-mtitleBig font-nutmeg text-morin-blue">
                  Retailers
                </span>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="w-full flex flex-col items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 1</span>
                    <p className='leading-5'>
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 2</span>
                    <p className='leading-5'>
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 3</span>
                    <p className='leading-5'>
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 4</span>
                    <p className='leading-5'>
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}

export default GetMorin

import Container from '@/components/module/container'
import Layout from '@/components/module/layout'
import Header from '@/components/module/header'
import Footer from '@/components/module/footer'
import Image from 'next/image'
import colors from '@/helpers/colors'
import HighlightCard from '@/components/module/highlightCard'
import FancyLink from '@/components/utils/fancyLink'

const GetMorin = () => {
  return (
    <Layout className="overflow-hidden pt-[86px] lg:pt-32">
      <Header hamburgerColor="bg-black" />

      <Container className="mt-8 lg:mt-0">
        <div className="flex flex-col leading-tight">
          <div className="flex flex-col lg:flex-row lg:space-x-48 w-full">
            <h2 className="text-ctitle md:text-mtitleBig m-0 lg:text-h2 text-center lg:text-left font-nutmeg text-morin-blue lg:w-72 w-full">
              Shop Online
            </h2>
            <div className="w-full flex flex-col items-center lg:items-start mt-5 lg:mt-0 md:mt-8 md:space-y-8 space-y-5 lg:space-y-12 justify-start">
              <FancyLink
                blank
                destination="#"
                className="flex items-center w-fit h-10 bg-gradient-blue font-semibold text-default text-white rounded-3xl shadow-normal px-4 xl:h-14 xl:text-mtitle xl:rounded-full xl:px-8"
              >
                <span className="block pt-1">shop.morinfood.id</span>
              </FancyLink>
              <div className="flex flex-col w-full justify-start">
                <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                  Online Marketplace
                </span>
                <div className="mt-4 lg:mt-10 md:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <FancyLink
                    destination="#"
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
          <div className="flex flex-col lg:flex-row lg:space-x-48 mt-10 mb-10 lg:mt-20 lg:mb-20 w-full">
            <h2 className="text-ctitle md:text-mtitleBig m-0 lg:text-h2 text-center lg:text-left font-nutmeg text-morin-blue lg:w-72 w-full">
              Shop Offline
            </h2>
            <div className="w-full flex flex-col items-center lg:items-start mt-6 lg:mt-0 md:mt-8 md:space-y-8 space-y-6 lg:space-y-12 justify-start">
              <div className="flex flex-col w-full justify-start">
                <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                  Major Distributors
                </span>
                <div className="mt-5 lg:mt-10 md:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <FancyLink
                    destination="#"
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                    className="h-20 md:h-32 flex justify-center items-center rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative w-3/5 h-full">
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
                <span className="md:text-mtitle lg:text-mtitleBig text-center lg:text-left font-nutmeg text-morin-blue">
                  Retailers
                </span>
                <div className="mt-5 lg:mt-10 md:mt-6 grid grid-cols-2 gap-6">
                  <div className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 1</span>
                    <p className="leading-5 text-center lg:text-left">
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 1</span>
                    <p className="leading-5 text-center lg:text-left">
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 1</span>
                    <p className="leading-5 text-center lg:text-left">
                      Jl. Lorem Ipsum No.123
                      <br />
                      Jakarta Barat, 11618
                      <br />
                      +62814339854732
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center lg:items-start font-medium text-morin-blue">
                    <span className="font-bold">TOKO 1</span>
                    <p className="leading-5 text-center lg:text-left">
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

import React, { useState } from "react";
import Footer from "@/components/module/footer";
import Header from "@/components/module/header";
import Layout from "@/components/module/layout";
import Container from "@/components/module/container";
import StrokeButton from "@/components/utils/strokeButton";
import AboutCard from "@/components/module/aboutCard";
import PageModal from "@/components/module/pageModal";
import colors from "@/helpers/colors";
import { SunRay } from "@/components/utils/svg";
import Image from "next/image";

const aboutData = [
  {
    type: "OUR PROCESS",
    title: "Bagaimana Morin Dibuat?",
    imgSrc: "/about/card-1.svg",
    imgPlaceholder: "/about/card-1.png",
    imgAlt: "Bagaimana Morin Dibuat?",
  },
  {
    type: "VISI & MISI",
    title: "Lorem Ipsum Dolor sit Amet",
    imgSrc: "/about/card-2.svg",
    imgPlaceholder: "/about/card-2.png",
    imgAlt: "Lorem Ipsum Dolor sit Amet",
  },
];

const About = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  const openModal = (type) => {
    switch (type) {
      case "OUR PROCESS":
        setModalOne(true);
        break;
      case "VISI & MISI":
        setModalTwo(true);
        break;
      default:
        return null;
    }
  };

  const closeModal = () => {
    setModalOne(false);
    setModalTwo(false);
  };

  return (
    <div className="w-full bg-morin-skyBlue">
      <Layout className="relative pt-16 overflow-hidden">
        <div className="w-full h-full absolute inset-0 -translate-x-[calc(875px-(100vw/2))] -translate-y-[875px] z-1">
          <SunRay className="block w-[1750px] animate-spin-slow" />
        </div>

        <div className="relative w-full min-h-screen flex flex-col justify-between z-2">
          <Header />

          <div className="pt-28 pb-32 px-8 xl:pb-36">
            <div className="relative max-w-xs text-morin-blue text-center mx-auto lg:max-w-xl xl:max-w-3xl">
              <h1 className="font-poppins font-semibold text-defaultSmall leading-none tracking-widest mt-0 mb-4 lg:text-default lg:mb-10 xl:mb-20">
                WHO WE ARE
              </h1>
              <p className="font-nutmeg text-mtitle leading-tight mb-8 lg:text-mtitleBig lg:mb-16 xl:text-h2 xl:mb-28">
                Selama lebih dari 40 tahun, Morin hadir menemani momen-momen
                sarapan keluarga Indonesia.
              </p>
              <StrokeButton color={colors.morinBlue} arrow={false}>
                Read More
              </StrokeButton>
            </div>
          </div>

          <Container
            className="pl-0 pr-0"
            classNameOuter="px-4 mb-8 lg:px-8 lg:mb-12 xl:mb-14"
          >
            <div className="flex flex-wrap md:-mx-2 xl:-mx-4">
              {aboutData?.map((item, index) => (
                <div
                  className="w-full mb-3 last:mb-0 md:w-1/2 md:mb-0 md:px-2 xl:px-4"
                  key={`${item.title}${index}`}
                >
                  <AboutCard
                    type={item.type}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    imgPlaceholder={item.imgPlaceholder}
                    imgAlt={item.imgAlt}
                    onClick={() => openModal(item.type)}
                  />
                </div>
              ))}
            </div>
          </Container>

          <Footer />
        </div>
      </Layout>

      <PageModal
        isOpen={modalOne}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          About Morin
        </span>

        <p className="font-medium mb-5">
          Mengawali produksi pada tahun 1978 di Jelambar Utama, Jakarta Barat,
          Morin memperkenalkan “Selai Kaya” sebagai produk pertamanya dengan
          tagline “Jodohnya Roti” yang telah melekat pada keluarga Indonesia.
        </p>
        <p className="font-medium mb-7">
          Hingga saat ini, Morin terus berkembang untuk menyajikan produk-produk
          terbaik dengan berbagai varian dan ukuran yang telah tersebar di
          seluruh nusantara. Morin telah memperluas jangkauan distribusi ke
          seluruh Indonesia untuk Fruit Jam, Bread Spread, Topping dan Syrup
          serta berbagai isian untuk roti dan juga kue nastar.
        </p>

        <div className="mb-2">
          <Image
            src="/about/about-1.jpg"
            blurDataURL="/about/about-1.png"
            placeholder="blur"
            alt="Image Description Here"
            width={795}
            height={460}
          />
        </div>
        <span className="font-semibold">Lorem Ipsum Dolor sit Amet</span>
      </PageModal>

      <PageModal
        isOpen={modalTwo}
        onRequestClose={closeModal}
        className="text-morin-blue"
      >
        <span className="block font-nutmeg text-mtitleSmall mb-5 md:text-mtitleBig">
          Our Process
        </span>

        <div className="mb-5 md:mb-7 lg:mb-10">
          <Image
            src="/about/about-2.jpg"
            blurDataURL="/about/about-2.png"
            placeholder="blur"
            alt="Image Description Here"
            width={795}
            height={540}
          />
        </div>

        <span className="block font-semibold mb-2">Bread Spread</span>
        <p className="font-medium mb-5 md:mb-7 lg:mb-10">
          Bread spread diproduksi menggunakan bubuk coklat dari berbagai daerah
          asal, kacang tanah pilihan dan hazelnut dari Turki, serta lemak nabati
          yang berkualitas tinggi, sehingga menghasilkan produk spread yang
          terkenal kelezatannya di keluarga Indonesia.
        </p>

        <div className="mb-5 md:mb-7 lg:mb-10">
          <Image
            src="/about/about-3.jpg"
            blurDataURL="/about/about-3.png"
            placeholder="blur"
            alt="Image Description Here"
            width={315}
            height={235}
          />
        </div>

        <p className="font-medium mb-5">
          Mengawali produksi pada tahun 1978 di Jelambar Utama, Jakarta Barat,
          Morin memperkenalkan “Selai Kaya” sebagai produk pertamanya dengan
          tagline “Jodohnya Roti” yang telah melekat pada keluarga Indonesia.
        </p>
        <p className="font-medium mb-7">
          Hingga saat ini, Morin terus berkembang untuk menyajikan produk-produk
          terbaik dengan berbagai varian dan ukuran yang telah tersebar di
          seluruh nusantara. Morin telah memperluas jangkauan distribusi ke
          seluruh Indonesia untuk Fruit Jam, Bread Spread, Topping dan Syrup
          serta berbagai isian untuk roti dan juga kue nastar.
        </p>

        <span className="font-semibold">Lorem Ipsum Dolor sit Amet</span>
      </PageModal>
    </div>
  );
};

export default About;

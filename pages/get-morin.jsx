import Layout from "@/components/module/layout";
import Header from "@/components/module/header";
import Footer from "@/components/module/footer";
import Container from "@/components/module/container";
import React from "react";

const GetMorin = () => {
  return (
    <Layout className="pt-[86px] lg:pt-32">
      <Header hamburgerColor="bg-black" />

      <Container
        className="pl-0 pr-0"
        classNameOuter="px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-16"
      >
        <h1 className="text-morin-blue text-ctitle font-nutmeg font-bold mx-auto mb-8 md:text-ctitleBig lg:text-h2 xl:text-h1 xl:mb-16">
          Get Morin
        </h1>

      </Container>

      <Footer />
    </Layout>
  );
};

export default GetMorin;

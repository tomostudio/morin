import CategoryCard from "@/components/module/categoryCard";
import Footer from "@/components/module/footer";
import Header from "@/components/module/header";
import Layout from "@/components/module/layout";
import Image from "next/image";

const categoryData = [
  {
    title: "Spreads",
    description:
      "Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.",
    link: "/products/product-type",
  },
  {
    title: "Jams",
    description:
      "Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.",
    link: "/products/product-type",
  },
  {
    title: "Toppings",
    description:
      "Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.",
    link: "/products/product-type",
  },
  {
    title: "Fillings",
    description:
      "Lorem nunc amet, placerat aliquam mauris sodales purus. Urna fermentum amet enim neque fermentum amet enim neque fermentum amet enim neque.",
    link: "/products/product-type",
  },
];

const Category = () => {
  return (
    <Layout>
      <Header />

      <div className="w-full bg-morin-skyBlue">
        <div className=" relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              src="/category/banner.jpg"
              placeholder="/category/banner.png"
              alt="Category"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-none lg:text-h2 xl:text-h1">
              Our Products
            </h1>
            <p className="hidden max-w-md text-white font-semibold mt-2 mx-auto lg:block">
              Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
              fermentum amet enim neque.
            </p>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="max-w-screen-2xl mx-auto mb-7 lg:mb-10">
            {categoryData?.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Category;
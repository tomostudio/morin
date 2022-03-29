import Container from "./container";
import FancyLink from "../utils/fancyLink";
import Image from "next/image";

const Footer = ({ className }) => {
  const footerLink = `block w-fit text-white text-defaultSmall leading-none lg:text-default`;
  return (
    <footer className="lg:px-8">
      <Container
        className={`relative w-full h-auto flex bg-morin-blue text-white rounded-t-3xl px-5 pt-6 pb-9 md:flex-row md:justify-between md:px-8 lg:px-10 lg:pt-[60px] lg:pb-20 ${className}`}
      >
        {/* LEFT */}
        <div className="flex flex-col w-full mb-8 md:w-3/5 md:max-w-sm md:mb-0 lg:max-w-lg">
          <h2 className="text-ctitleSmall font-bold font-nutmeg lg:text-mtitleBig">
            Let's Stay In Touch!
          </h2>
          <span className="text-defaultSmall lg:text-default">
            Sign up for our weekly newsletter, new products, exclusive
            promotions, job openings, and more.
          </span>
          <form className="flex w-full mt-5 border-2 rounded-2xl overflow-hidden lg:mt-6">
            <div className="relative flex flex-wrap w-full h-9 lg:h-10">
              <input
                className="w-[calc(100%-70px)] h-full px-5 default-type text-defaultSmall leading-tight placeholder-white placeholder:opacity-60 outline-none bg-transparent lg:w-[calc(100%-100px)] lg:text-default"
                type="email"
                placeholder="Your Email"
              />
              <FancyLink
                destination=""
                className="w-[70px] h-full border-l-2 px-2 text-center default-type text-defaultSmall leading-none hover:bg-white hover:text-morin-blue transition-background duration-300 lg:w-24 lg:text-default"
              >
                Submit
              </FancyLink>
            </div>
          </form>
        </div>

        {/* RIGHT */}
        <div className="flex w-full md:w-2/5 md:justify-end md:ml-auto md:mt-auto">
          <div className="flex flex-wrap flex-col w-1/2 space-y-3 md:w-auto md:ml-auto lg:min-w-[100px] lg:space-y-4">
            <FancyLink destination="/" className={footerLink}>
              Home
            </FancyLink>
            <FancyLink destination="/about" className={footerLink}>
              About Us
            </FancyLink>
            <FancyLink destination="/product" className={footerLink}>
              Product
            </FancyLink>
            <FancyLink destination="/recipes" className={footerLink}>
              Recipes
            </FancyLink>
            <FancyLink destination="/events" className={footerLink}>
              Events
            </FancyLink>
            <FancyLink destination="/" className={footerLink}>
              Get Morin
            </FancyLink>
          </div>
          <div className="flex flex-wrap flex-col justify-between w-1/2 md:w-auto md:ml-14 xl:mx-24">
            <div className="flex flex-wrap flex-col space-y-3 lg:space-y-4">
              <FancyLink destination="/faq" className={footerLink}>
                Faq
              </FancyLink>
              <FancyLink destination="/contact" className={footerLink}>
                Contact Us
              </FancyLink>
            </div>

            <div className="w-full flex flex-col justify-end">
              <div className="flex justify-start w-full space-x-1.5 lg:space-x-3 mb-2 lg:mb-4">
                <FancyLink destination="/" blank={true} className="flex">
                  <Image
                    src={`/ig-white.svg`}
                    alt={"Instagram"}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink destination="/" blank={true} className="flex">
                  <Image
                    src={`/tw-white.svg`}
                    alt={"Twitter"}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink destination="/" blank={true} className="flex">
                  <Image
                    src={`/fb-white.svg`}
                    alt={"Facebook"}
                    width={36}
                    height={36}
                  />
                </FancyLink>
              </div>
              <span className="text-defaultSmall leading-none lg:text-default">© Morin Food 2021</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
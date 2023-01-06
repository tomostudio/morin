import Image from 'next/legacy/image'

const AboutCard = ({
  titleDescription,
  title,
  imgSrc,
  imgPlaceholder,
  imgAlt,
  button,
  onClick = () => {},
}) => {
  return (
    <div
      className="group relative w-full min-h-20rem h-full  rounded-2xl overflow-hidden cursor-pointer group hover:shadow-softer transition-all duration-300 hover:rotate-1"
      onClick={onClick}
    >
      <div className="absolute w-full h-full z-2 bg-black opacity-5 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="w-full h-full absolute-center">
        <Image
          src={imgSrc}
          blurDataURL={imgPlaceholder}
          placeholder="blur"
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative w-full h-full z-3">
        <div className="flex flex-col justify-between w-full h-full text-white text-center pt-4 pb-3 px-5 md:py-6 md:px-8 aspect-[2/1] md:aspect-none min-h-[0px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[740px] xl:p-8 2xl:min-h-[850px]">
          <span className="font-semibold uppercase max-w-md tracking-widest mx-auto md:text-default">
            {titleDescription}
          </span>
          <span className="font-nutmeg text-[22px] sm:text-subtitle mx-auto leading-none lg:text-h5 xl:text-h2">
            {title}
          </span>
          <span className="flex items-center min-h-[25px] font-semibold leading-none border-white border-2 border-solid rounded-full px-4 py-[0.35em] mx-auto md:min-h-[30px] group-hover:text-black group-hover:bg-white transition-all duration-300">
            <span className="md:pt-0.5">{button}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutCard

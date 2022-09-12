import Image from 'next/image';
import urlFor from '@/helpers/sanity/urlFor';

export const DefaultParagraph = ({ children }) => (
  <p className='font-medium my-4'>{children}</p>
);
export const DefaultH4 = ({ children }) => (
  <p className='font-medium my-4'>{children}</p>
);

export const DefaultImage = ({ imageSrc = '', blurDataURL = '', alt = '' }) => (
  <div className='relative w-full h-30rem max-md:h-56 rounded-xl overflow-hidden my-10 '>
    <Image
      src={imageSrc}
      blurDataURL={blurDataURL !== '' ? blurDataURL : ''}
      placeholder={blurDataURL !== '' ? 'blur' : 'empty'}
      alt={alt}
      layout='fill'
      objectFit='cover'
      objectPosition='center'
    />
  </div>
);

export const AboutModalComponents = {
  block: {
    normal: ({ children }) => (children[0] === '' ? <br /> : <DefaultParagraph>{children}</DefaultParagraph>),
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
  },
  types: {
    image: (props) => (
      <DefaultImage
        imageSrc={urlFor(props.value).auto('format').width(850).url()}
        blurDataURL={urlFor(props.value)
          .auto('format')
          .width(500)
          .blur(25)
          .url()}
        alt={props.value.alt}
      />
    ),
  },
};

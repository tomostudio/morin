import '@/styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import SEO from '@/helpers/seo.config';
import Head from 'next/head';
import { AppWrapper } from '../context/state.jsx';
import Script from 'next/script';
import Header from '@/components/module/header';

import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {pageProps.seoAPI && pageProps.seoAPI[0].googleID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${pageProps.seoAPI[0].googleID}`}
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${pageProps.seoAPI[0].googleID}');
  `}
          </Script>
        </>
      )}
      {/* <DefaultSeo {...SEO} /> */}
      <Head>
        {/* FAVICON  */}
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1,viewport-fit=cover'
        />
        {/* FAVICON  */}
      </Head>
      <AppWrapper>
        <Header button={pageProps.translation} turn_language={pageProps.seoAPI[0].turn_language}/>
        <ParallaxProvider>
          <AnimatePresence mode='wait'>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ParallaxProvider>
      </AppWrapper>
    </>
  );
}

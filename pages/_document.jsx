import TOMOStudioHead from '@/components/utils/tomostudio-insert'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <TOMOStudioHead />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

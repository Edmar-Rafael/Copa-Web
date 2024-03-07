import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link rel="stylesheet" href="https://fonts.goolgleapis.com/css2?family=roboto:wght@400;700&display=swap" />
      </Head>

      <body className='bg-gray-900 bg-app bg-no-repeat bg-cover'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

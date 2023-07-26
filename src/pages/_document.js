import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />

      <body className='bg-light dark:bg-dark w-full h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

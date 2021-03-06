import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import GoogleFonts from 'next-google-fonts'

class MyDocument extends Document {
  render () {
    return (
      <html lang='en'>
        <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' />
        <Head>
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />
          <meta
            content='/static/favicons/browserconfig.xml'
            name='msapplication-config'
          />
          <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
          <link href='/static/favicons/site.webmanifest' rel='manifest' />
          <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='' />
          <link
            href='/static/favicons/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/static/favicons/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/static/favicons/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <link
            color='#4a9885'
            href='/static/favicons/safari-pinned-tab.svg'
            rel='mask-icon'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument

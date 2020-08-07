const title = 'Join a Rocketship'
const description =
    'A website (and newsletter) that helps people identify fast-growing companies to work for, invest in, or simply learn about.'

const SEO = {
  title,
  description,
  canonical: 'https://joinarocketship.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://joinarocketship.com',
    title,
    description,
    images: [
      {
        url: 'https://joinarocketship.com/static/images/main.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@joinarocketship',
    site: '@joinarocketship',
    cardType: 'summary'
  }
}

export default SEO

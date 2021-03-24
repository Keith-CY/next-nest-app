import NextHead from 'next/head'

const WEBSITE_TITLE = 'Website Title'

const Head = () => (
  <NextHead>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{WEBSITE_TITLE}</title>

    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="description" content={WEBSITE_TITLE} />
  </NextHead>
)

export default Head

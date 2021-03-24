import Link from 'next/link'
const WEBSITE_TITLE = 'website_title'

const Header = () => (
  <header>
    <Link href="/">
      <a title={WEBSITE_TITLE}>{WEBSITE_TITLE}</a>
    </Link>
  </header>
)
export default Header

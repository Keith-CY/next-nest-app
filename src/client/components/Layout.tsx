import Head from './Head'
import Header from './Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout

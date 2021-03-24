import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleChangeStart = () => {
      document.body.classList.add('loading')
    }
    const handleChangeComplete = () => {
      document.body.classList.remove('loading')
    }
    router.events.on('routeChangeStart', handleChangeStart)
    router.events.on('routeChangeComplete', handleChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleChangeStart)
      router.events.off('routeChangeComplete', handleChangeComplete)
    }
  }, [router.events])
  return (
    <Layout>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  )
}

export default appWithTranslation(MyApp)

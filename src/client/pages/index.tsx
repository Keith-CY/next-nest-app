import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type State = {
  title: string
}
const Home = ({ title }: State) => {
  const [t] = useTranslation('common')
  return <h1>{t(title)}</h1>
}

export const getServerSideProps: GetServerSideProps<State> = async ({
  locale,
}) => {
  const lng = await serverSideTranslations(locale, ['common'])
  return {
    props: {
      title: 'title',
      ...lng
    },
  }
}
export default Home

import Layout from '../components/Layout'

export default function APP({ Component, pageProps }) {
  // return(
  //     <Layout>
  //         <Component {...pageProps} />
  //     </Layout>
  // )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}

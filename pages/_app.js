import { Header, Layout, Nav } from "../components"

import { wrapper } from '../redux/store.ts'
import Head from 'next/head'
const App = ({ Component, pageProps}) => {
  return (<>
  <Nav/>
    <Header/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)

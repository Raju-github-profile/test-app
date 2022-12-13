import { store } from '../redux/store'
import '../styles/globals.css'
import { Provider } from "react-redux";
import Layout from '../Layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider >
  )
}
export default MyApp


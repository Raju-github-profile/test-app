import { store } from '../redux/store'
import '../styles/globals.css'
import { Provider, useSelector } from "react-redux";
function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp

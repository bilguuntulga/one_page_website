
import Menu from "@/components/header"
import "../styles/global.css"
import SalesPage from "./sales"
import Home from "./index"

export default function App({ Component, pageProps }) {
  return <>
    <Menu />
    <Home />
    <SalesPage />
    {/* <Component {...pageProps} /> */}
  </>
}

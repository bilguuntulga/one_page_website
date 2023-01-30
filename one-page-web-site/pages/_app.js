import Menu from "@/components/header"
import "../styles/global.css"
import "../styles/styles.less"

export default function App({ Component, pageProps }) {
  return <>
    <Menu />
    <Component {...pageProps} />
  </>
}

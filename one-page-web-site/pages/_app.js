import Menu from "@/components/menubar"
import "../styles/global.css"
import "../styles/styles.less"

export default function App({ Component, pageProps }) {
  return <>
    <Menu />
    <Component {...pageProps} />
  </>
}

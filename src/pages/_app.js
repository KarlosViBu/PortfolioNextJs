import '@/styles/globals.css'
import NavBar from '@/component/NavBar'
import Footer from '@/component/Footer'
import { Bjamju } from '@/component/font'

export default function App({ Component, pageProps }) {
  return (
  
    <main className={Bjamju.className}>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </main>

  )
}

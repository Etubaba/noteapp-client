import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/nav/Header'
import MobileNav from '../components/nav/MobileHeader'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Header/>
    <MobileNav/>
    <Component {...pageProps} />
    <Footer/>
    </div> 
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/nav/Header'
import MobileNav from '../components/nav/MobileHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Header/>
    <MobileNav/>
    <Component {...pageProps} /></div> 
}

export default MyApp

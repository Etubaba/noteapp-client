import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/nav/Header";
import MobileNav from "../components/nav/MobileHeader";
import Footer from "../components/Footer";

import { Provider } from "react-redux";
import { store } from "../features/store";
import { useRouter } from "next/router";
import { layoutProps } from "../interface";
import { ReactNode } from 'react';
import "react-quill/dist/quill.snow.css";
 import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }: AppProps) {


 //@ts-ignore 
  const Layout= Component.getLayout || (({ children }:ReactNode) => <>{children}</>);
  
const router=useRouter()
 const checkPath = () => {
  const userPaths=['/user','/create_note']
    return userPaths.includes(`${router.pathname}`);
  };
  return (
    <div>
      <Provider store={store}>
       
       
      <Header />
      <MobileNav />
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer 
        
        hideProgressBar={true}
        theme="colored" />
      
      {!checkPath()&&<Footer />}

      
      </Provider>
    </div>
  );
}

export default MyApp;

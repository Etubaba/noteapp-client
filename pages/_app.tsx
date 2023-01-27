import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/nav/Header";
import MobileNav from "../components/nav/MobileHeader";
import Footer from "../components/Footer";
import Layout from "../components/userlayout/Layout";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {

const router=useRouter()
 const checkPath = () => {
  const userPaths=['/user','/create_note']
    return userPaths.includes(`${router.pathname}`);
  };
  return (
    <div>
      <Header />
      <MobileNav />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      {!checkPath()&&<Footer />}
    </div>
  );
}

export default MyApp;

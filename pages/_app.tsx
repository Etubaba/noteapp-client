import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/nav/Header";
import MobileNav from "../components/nav/MobileHeader";
import Footer from "../components/Footer";
// import Layout from "../components/userlayout/Layout";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { useRouter } from "next/router";
// import { NextComponentType, NextPage, NextPageContext } from "next";
import { layoutProps } from "../interface";
import { ReactNode } from "react";

import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType, NextPage } from "next";
import { ScriptProps } from "next/script";
import "react-quill/dist/quill.snow.css";

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// type Page<P = Record<string, never>> = NextPage<P> & {
//   Layout: (page: ScriptProps) => JSX.Element;
// };
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

// type Props = AppProps & {
//   Component: Page;
// };
// function MyApp({ Component, pageProps }: AppProps) {

const Noop = ({ children }: ScriptProps) => <>{children}</>;

function App({ Component, pageProps }: MyAppProps) {
  
  const Layout = Component.getLayout || Noop;

  const router = useRouter();
  const checkPath = () => {
    const userPaths = ["/user", "/create_note"];
    return userPaths.includes(`${router.pathname}`);
  };
  return (
    <div>
      <Provider store={store}>
        <Header />
        <MobileNav />

      
     <Component {...pageProps} />
        

        {!checkPath() && <Footer />}
      </Provider>
    </div>
  );
}

export default App;

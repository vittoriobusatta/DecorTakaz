import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import "../styles/styles.scss";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    window.console.log.apply(console, [
      "\n %c Made with ❤️ by Vittorio Busatta %c https://vittoriobusatta.fr/",
      "border: 1px solid #fffde8;color: #000; background: #fffde8; padding:5px 0;",
      "color: #fff; background: #000; padding:5px 0;border: 1px solid #000;",
    ]);
  }, []);
  return (
    <>
      {/* <Loader /> */}
      <Analytics />
      <Layout>
        <AnimatePresence initial={false} mode={"wait"}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

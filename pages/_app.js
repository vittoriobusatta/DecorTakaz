import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import "../styles/styles.scss";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <Loader /> */}
      <Analytics />
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

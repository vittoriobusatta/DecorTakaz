import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import "../styles/styles.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <Loader /> */}
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

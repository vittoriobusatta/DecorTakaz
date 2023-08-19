import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import "../styles/styles.scss";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps, router }) {
  if (typeof window !== "undefined") {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

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
        <AnimatePresence mode={"wait"}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

import "../styles/styles.scss";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  weight: ["400", "600", "800"],
  style: ['normal'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

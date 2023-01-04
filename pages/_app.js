import Loader from "../components/Loader";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

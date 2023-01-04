import Loader from "../components/Loader";
import Loading from "../components/Loading";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Loading /> */}
      {/* <Loader /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

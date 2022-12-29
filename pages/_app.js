import Loading from "../components/Loading";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

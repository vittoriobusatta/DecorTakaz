import Head from "next/head";
import React from "react";
import Landing from "../components/Landing/Landing";
import axios from "axios";
import Release from "../components/Landing/Release";
import Process from "../components/Landing/Process";
import Testimonials from "../components/Landing/Testimonials";
import Question from "../components/Landing/Question";
import Getintouch from "../components/Landing/Getintouch";
import Customers from "../components/Landing/Customers";
import Forest from "../components/Landing/Forest";
import Footer from "../components/Footer";
import Transition from "../utils/SlideTransition";

const domain = process.env.NEXT_PUBLIC_HOSTNAME;

export async function getServerSideProps() {
  try {
    const productRes = await axios.get(`${domain}/api/products`);
    const categoryRes = await axios.get(`${domain}/api/categories`);
    return {
      props: {
        products: await productRes.data,
        categories: await categoryRes.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
        categories: [],
      },
    };
  }
}

const Home = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>Accueil | Décor Ta Kaz</title>
      </Head>

      <Landing />
      <main className="main">
        <Release products={products} categories={categories} />
        <Process />
        <Forest />
        <Customers />
        <Testimonials />
        <Question />
        <Getintouch />
        <Footer />
      </main>
    </>
  );
};

export default Transition(Home);

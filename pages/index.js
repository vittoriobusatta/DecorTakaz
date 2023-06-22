import Head from "next/head";
import Header from "../components/Header";
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

export async function getServerSideProps() {
  try {
    const domain = process.env.NEXT_PUBLIC_HOSTNAME;
    const [productRes, categoryRes] = await Promise.all([
      axios.get(`${domain}/api/products`),
      axios.get(`${domain}/api/categories`),
    ]);
    const products = productRes.data;
    const categories = categoryRes.data;
    return {
      props: {
        products,
        categories,
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
      </main>
    </>
  );
};

export default Home;

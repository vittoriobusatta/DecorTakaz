import axios from "axios";
import React from "react";
import Head from "next/head";
import Gallery from "../../components/Gallery";
import Transition from '../../utils/Transition';

const domain = process.env.NEXT_PUBLIC_HOSTNAME;

function Category({ category, products }) {
  return (
    <>
      <Head>
        <title>{category.name} | Menuiserie Artisanale</title>
      </Head>

      <section id="category">
        <div className="category_title">
          <div className="hidden">
            <h5 className="subtitle">({products.length})</h5>
          </div>
          <div className="category__filters">
            <div className="hidden">
              <h1>{category.name}</h1>
            </div>
          </div>
        </div>
        <Gallery products={products}/>
      </section>
    </>
  );
}

export default Transition(Category);

export async function getStaticProps({ params }) {
  const { handle } = params;
  try {
    const productRes = await axios.get(`${domain}/api/products`);
    const categoryRes = await axios.get(`${domain}/api/categories`);

    const category = await categoryRes.data.find(
      (category) => category.handle === handle
    );
    return {
      props: {
        category,
        products: await productRes.data.filter(
          (product) => product.categoryId === category._id
        ),
      },
    };
  } catch (err) {
    console.log(err.message);
    return {
      props: {
        category: [],
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const path = await axios.get(`${domain}/api/categories`);
    const paths = await path.data.map((category) => ({
      params: { handle: category.handle },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

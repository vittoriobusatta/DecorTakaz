import axios from "axios";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Transition from "../../utils/transition";

const domain = process.env.NEXT_PUBLIC_HOSTNAME;

const filters = [
  {
    name: "Tout",
  },
  {
    name: "Mobilier",
  },
  {
    name: "Intérieur",
  },
  {
    name: "Produits",
  },
  {
    name: "Architecture",
  },
];

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
            <ul>
              {filters.map((filter, index) => (
                <li key={index} className="hidden">
                  <h5>{filter.name},</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="gallery">
          {products.map((item, index) => (
            <li key={index}>
              <div>
                <div className="image_container hidden">
                  <Image
                    src={item.source}
                    alt={"Image " + item.id}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8eOlgPQAIBQL16eAgtQAAAABJRU5ErkJggg==`}
                    style={{
                      height: "auto",
                    }}
                  />
                </div>
                <div className="hidden">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
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

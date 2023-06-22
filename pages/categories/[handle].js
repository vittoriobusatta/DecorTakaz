import axios from "axios";
import React from "react";
import Head from "next/head";
import Image from "next/image";

const domain = process.env.NEXT_PUBLIC_HOSTNAME;

export default function Category({ category, products }) {
  return (
    <>
      <Head>
        <title>{category.name} | Menuiserie Artisanale</title>
      </Head>

      {/* <Header /> */}
      <section id="category">
        <div className="category_title">
          <div className="hidden">
            <h5 className="subtitle opacity">({products.length})</h5>
          </div>
          <div className="hidden">
            <h1 className="opacity">{category.name}</h1>
          </div>
        </div>
        <ul className="gallerie">
          {products.map((item, index) => (
            <li key={item.id}>
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
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="hidden">
                  <h3>{item.name}</h3>
                </div>
                {/* <p>
                  {item.description}
                  {item.dimensions}
                </p> */}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

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
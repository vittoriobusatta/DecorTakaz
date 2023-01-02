import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../components/Header";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const data = fs.readFileSync(path.join(process.cwd(), "/public/data.json"));

  const appData = JSON.parse(data);

  const categoryArray = appData.filter((item) => item.catalogue == "mobilier");

  return {
    props: {
      categoryArray,
    },
  };
}

const Mobilier = ({categoryArray}) => {
  // const TitleMobilier = styled.h1`
  //   &::before {
  //     content: "(${categoryArray.length})";
  //   }
  // `;

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = categoryArray.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.category === filter;
  });

  return (
    <section id="category">
      <Head>
        <title>Mobilier | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <div className="category_head">
        <h1>Mobilier</h1>

        <div className="catagory_content">
          <ul className="backcatalogue">
            <Link href="/mobilier/">
              <li className="active">Mobilier</li>
            </Link>
            <Link href="/interieur/">
              <li>Intérieur</li>
            </Link>
            <Link href="/produits/">
              <li>Produits</li>
            </Link>
            {/* <li>Architecture</li> */}
          </ul>

          <div className="filter">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={handleFilterChange}
              value="all"
            >
              Tous
            </button>
            <button
              className={filter === "dinnertable" ? "active" : ""}
              onClick={handleFilterChange}
              value="dinnertable"
            >
              Tables à manger
            </button>
            <button
              className={filter === "lowtable" ? "active" : ""}
              onClick={handleFilterChange}
              value="lowtable"
            >
              Table Basse
            </button>
            <button
              className={filter === "commode" ? "active" : ""}
              onClick={handleFilterChange}
              value="commode"
            >
              Commodes
            </button>
          </div>
        </div>

        <ul className="gallerie">
          {filteredData.map((i) => (
            <li key={i.id}>
              <div>
                <div className="image_container hidden">
                  <Image
                    src={i.src}
                    alt={"Image " + i.id}
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
                <h3>{i.name}</h3>
                <p>
                  {i.desc} <br />
                  {i.dim}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mobilier;

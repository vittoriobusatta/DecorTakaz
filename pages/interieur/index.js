import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Filter, BackCatalogue, SubHead } from "../../utils/common";
import Header from "../../components/Header";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const data = fs.readFileSync(path.join(process.cwd(), "/public/data.json"));

  const appData = JSON.parse(data);

  const categoryArray = appData.filter((item) => item.catalogue == "interieur");

  return {
    props: {
      categoryArray,
    },
  };
}

const Interieur = ({categoryArray}) => {
  const TitleInterieur = styled.h1`
    &::before {
      content: "(${categoryArray.length})";
    }
  `;
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
        <title>Intérieur | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <div className="category_head cth_interieur">
        <TitleInterieur>Intérieur</TitleInterieur>

        <SubHead>
          <BackCatalogue>
            <Link href="/mobilier/">
              <li>Mobilier</li>
            </Link>
            <Link href="/interieur/">
              <li className="active">Intérieur</li>
            </Link>
            <Link href="/produits/">
              <li>Produits</li>
            </Link>
            {/* <li>Architecture</li> */}
          </BackCatalogue>

          <Filter>
            <button
              className={filter === "all" ? "active" : ""}
              onClick={handleFilterChange}
              value="all"
            >
              Tous
            </button>
            <button
              className={filter === "salon" ? "active" : ""}
              onClick={handleFilterChange}
              value="salon"
            >
              Salon
            </button>
            <button
              className={filter === "cuisine" ? "active" : ""}
              onClick={handleFilterChange}
              value="cuisine"
            >
              Cuisine
            </button>
            <button
              className={filter === "bathroom" ? "active" : ""}
              onClick={handleFilterChange}
              value="bathroom"
            >
              Salle de bain
            </button>
          </Filter>
        </SubHead>

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

export default Interieur;

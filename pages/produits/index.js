import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {
  Filter,
  BackCatalogue,
  SubHead,
} from "../../utils/common";
import Header from "../../components/Header";
import data from "/public/data.json";

const categoryArray = data.filter((item) => item.catalogue == "produits");

const Produits = () => {
  const TitleProduits = styled.h1`
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
    <section id="mobilier">
      <Head>
        <title>Produits | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <div className="category_head">
        <TitleProduits>Produits</TitleProduits>

        <SubHead>
          <BackCatalogue>
            <Link href="/mobilier/">
              <li>Mobilier</li>
            </Link>
            <Link href="/interieur/">
              <li>Intérieur</li>
            </Link>
            <Link href="/produits/">
              <li className="active">Produits</li>
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
              className={filter === "lampe" ? "active" : ""}
              onClick={handleFilterChange}
              value="lampe"
            >
              Lampes
            </button>
            <button
              className={filter === "mirroir" ? "active" : ""}
              onClick={handleFilterChange}
              value="mirroir"
            >
              Mirroirs
            </button>
            <button
              className={filter === "other" ? "active" : ""}
              onClick={handleFilterChange}
              value="other"
            >
              Divers
            </button>
          </Filter>
        </SubHead>

        <ul className="gallerie">
          {filteredData.map((i) => (
            <li key={i.id}>
              <div>
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

export default Produits;

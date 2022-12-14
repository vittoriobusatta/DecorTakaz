import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Contenthead, Filter, BackCatalogue, SubHead } from "../../utils/common";
import Header from "../../components/Header";
import data from "../api/data.json";

const categoryArray = data.filter((item) => item.category == "interieur");

const Card = () => {
  return (
    <ul className="gallerie">
      {categoryArray.map((i) => (
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
  );
};

const Mobilier = () => {
  const MobilierHead = styled(Contenthead)`
    h1::before {
      content: "(${categoryArray.length})";
    }
  `;

  return (
    <section id="mobilier">
      <Head>
        <title>Intérieur | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <MobilierHead>
        <h1>Intérieur</h1>

        <SubHead>
          <BackCatalogue className="backcatalogue">
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
            <li className="active">Tous</li>
            <li>Salle de Bain</li>
            <li>Salon</li>
            <li>Cuisine</li>
          </Filter>
        </SubHead>

        <Card />
      </MobilierHead>
    </section>
  );
};

export default Mobilier;

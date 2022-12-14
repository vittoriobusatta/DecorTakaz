import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Contenthead, Filter, BackCatalogue, SubHead } from "../../utils/common";
import Header from "../../components/Header";
import data from "../api/data.json";

const categoryArray = data.filter((item) => item.category == "produits");

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
        <title>Produits | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <MobilierHead>
        <h1>Produits</h1>

        <SubHead>
          <BackCatalogue className="backcatalogue">
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
            <li className="active">Tous</li>
            <li>Lampes</li>
            <li>Mirroirs</li>
          </Filter>
        </SubHead>

        <Card />
      </MobilierHead>
    </section>
  );
};

export default Mobilier;

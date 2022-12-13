import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Contenthead, Filter } from "../../utils/common";
import Header from "../../components/Header";
import data from "../api/data.json";

export const SubHead = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 45px;
  overflow: hidden;
  margin-bottom: 45px;
  @media screen and (min-width: 1224px) {
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

export const BackCatalogue = styled.ul`
  margin-top: 22px;
  padding: 0 24px;
  @media screen and (min-width: 1224px) {
    margin-top: 50px;
    padding: 0;
  }
`;

const categoryArray = data.filter((item) => item.category == "interieur");

const Card = () => {
  return (
    <ul className="moby">
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

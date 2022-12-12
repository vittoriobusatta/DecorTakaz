import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Contenthead, Filter } from "../../utils/common";
// import img from "../../assets/images/mobilier2.png";
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
  margin-bottom: 30px;
  @media screen and (min-width: 1224px) {
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

export const BackCatalogue = styled.ul`
  margin-top: 22px;
  @media screen and (min-width: 1224px) {
    margin-top: 50px;
  }
`;

const categoryArray = data.filter((item) => item.category == "Mobilier");


const Card = () => {
  return (
    <ul className="moby">
      {categoryArray.map((i) => (
        <li key={i.id}>
          <Image src={i.src} alt="img" width={300} height={300} />
          <h3>{i.name}</h3>
          <p>{i.desc}</p>
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
        <title>Mobilier | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <MobilierHead>
        <h1>Mobilier</h1>

        <SubHead>
          <BackCatalogue className="backcatalogue">
            <li className="active">Mobilier</li>
            <li>Intérieur</li>
            <li>Produits</li>
            <li>Architecture</li>
          </BackCatalogue>

          <Filter>
            <li className="active">Tous</li>
            <li>Table</li>
            <li>Commode</li>
            <li>Buffet</li>
          </Filter>
        </SubHead>

        <Card />
      </MobilierHead>
    </section>
  );
};



export default Mobilier;

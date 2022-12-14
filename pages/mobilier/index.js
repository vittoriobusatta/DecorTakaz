import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {
  Contenthead,
  Filter,
  BackCatalogue,
  SubHead,
} from "../../utils/common";
import Header from "../../components/Header";
import data from "../api/data.json";

const categoryArray = data.filter((item) => item.category == "mobilier");

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



const HorizontalScroller = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleTouchMove = (event) => {
    setScrollPos(event.touches[0].clientX);
  };

  const Filtre = styled.ul`
  background-color: #e1d2c1;
  display: inline-flex;
  column-gap: 40px;
  padding: 6px 20px;
  cursor: grab;
  width: 100%;
  @media screen and (min-width: 992px) {
    column-gap: 80px;
    overflow-y: none;
    width: auto;
  }
  li {
    background: none;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    color: #785436;
    white-space: nowrap;
  }
`;

  return (
    <Filtre
      onTouchMove={handleTouchMove}
      style={{
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
        scrollSnapType: "x mandatory",
        scrollLeft: scrollPos,
      }}
    >
      <li className="active">Tous</li>
      <li>Tables</li>
      <li>Commodes</li>
      <li>Buffets</li>
      <li>Buffets</li>
    </Filtre>
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
          </BackCatalogue>

          <HorizontalScroller />
        </SubHead>

        <Card />
      </MobilierHead>
    </section>
  );
};

export default Mobilier;

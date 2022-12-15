import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
  ArchitectureIcon,
  CatalogueIcon,
  InterieurIcon,
  MobilierIcon,
  ProductIcon,
} from "../utils/icons";

const Container = styled.section`
  width: 100%;
  margin-top: 122px;
  margin-bottom: 122px;
`;

const Content = styled.div`
  padding: 24px 26px;
  width: 100%;
  @media screen and (min-width: 1224px) {
    padding: 24px 120px;
  }
  & h1 {
    position: relative;
    font-weight: 800;
    font-size: max(11.5vw, 38px);
    text-transform: uppercase;
    color: #6c5347;
    margin-bottom: 50px;
    @media screen and (min-width: 1224px) {
      font-size: 110px;
      line-height: 151px;
    }
    &::before {
      content: "Nos dernières";
      position: absolute;
      top: -15px;
      font-size: max(2vw, 10px);
      line-height: 11px;
      letter-spacing: 0.05em;
      color: #d9a672;
      @media screen and (min-width: 1224px) {
        top: -30px;
        font-size: 24px;
        line-height: 33px;
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 1224px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  & div {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      & span {
        color: #d9a672;
      }
      & svg path {
        fill: #d9a672;
      }
    }
    & span {
      font-weight: 800;
      font-size: 14px;
      line-height: 11px;
      text-transform: uppercase;
      color: #785436;
      margin-right: 10px;
      white-space: nowrap;
      transition: 0.5s ease;
      @media screen and (min-width: 1224px) {
        font-size: 20px;
        line-height: 30px;
        margin-right: 30px;
      }
    }
    & svg {
      height: 45px;
      width: auto;
      & path {
        transition: 0.5s ease;
      }
      @media screen and (min-width: 1224px) {
        height: 50px;
      }
    }
  }
  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #785436;
    max-width: 850px;
    padding-bottom: 20px;
    text-align: start;
    @media screen and (min-width: 1224px) {
      font-size: 20px;
      line-height: 26px;
      margin-right: 30px;
    }
  }
`;

const Table = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 100%;
  margin-top: 60px;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
  }
  @media screen and (min-width: 1224px) {
    padding: 0 80px;
  }
  & li {
    height: 100%;
    width: 100%;
    background-color: #745033;
    height: 180px;
    transition: 0.5s ease-out;
    &:hover {
      background-color: #906745;
      & svg path {
        fill: #ffd8af;
      }
    }
    & svg path {
      transition: 0.5s ease-out;
    }

    @media screen and (min-width: 576px) {
      height: 200px;
    }
    @media screen and (min-width: 1224px) {
      height: 260px;
      width: 24%;
    }
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(4) {
      grid-area: 2 / 2 / 3 / 3;
    }
    & svg {
      height: 55px;
      width: auto;
      @media screen and (min-width: 576px) {
        height: 60px;
      }
      @media screen and (min-width: 768px) {
        height: 80px;
      }
    }
    & a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      padding-top: 30px;
      @media screen and (min-width: 576px) {
        padding-top: 40px;
      }
    }
    & p {
      font-weight: 600;
      font-size: 15px;
      line-height: 36px;
      text-transform: uppercase;
      color: #ede0d4;
      margin-top: 10px;
      letter-spacing: 0.03em;
      @media screen and (min-width: 576px) {
        font-size: 18px;
      }
      @media screen and (min-width: 1224px) {
        font-size: 24px;
        margin-top: 20px;
      }
    }
  }
`;

function Release() {
  return (
    <Container>
      <Content>
        <h1>Réalisations</h1>
        <Description>
          <p>
            En tant que menuisier passionné, je suis toujours à la recherche de
            nouvelles idées et de matériaux innovants pour mes réalisations. Je
            prends le temps d&#39;écouter attentivement les souhaits et les
            besoins de mes clients pour garantir une satisfaction complète. Je
            suis également habile dans l&#39;utilisation de différentes
            techniques de finition, ce qui me permet de produire des pièces
            finies de qualité supérieure.
          </p>
          <div>
            <span>Voir le catalogue</span>
            <CatalogueIcon />
          </div>
        </Description>
      </Content>
      <Table>
        <li>
          <Link href="/mobilier/">
            <p>Mobilier</p>
            <MobilierIcon />
          </Link>
        </li>
        <li>
          <Link href="/interieur/">
            <p>Intérieur</p>
            <InterieurIcon />
          </Link>
        </li>
        <li>
          <Link href="/produits/">
            <p>Produits</p>
            <ProductIcon />
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>Architecture</p>
            <ArchitectureIcon />
          </Link>
        </li>
      </Table>
    </Container>
  );
}

export default Release;

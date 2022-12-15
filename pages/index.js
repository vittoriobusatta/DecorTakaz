import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Release from "../components/Release";
import Catalogue from "../components/Catalogue";
import fort from "/assets/share/Subtract.png";
import Reviews from "../components/Reviews";

const Forest = () => {
  return (
    <section className="forest_container">
      <Image src={fort} alt="alt" />
    </section>
  );
};

function Home() {
  return (
    <>
      <Head>
        <title>Décor Ta Kaz | Menuiserie Artisanale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <Release />
        {/* <Forest /> */}
        <Reviews />
        <section>.</section>
      </main>
    </>
  );
}

export default Home;

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import React, { useState } from 'react'
import Image from "next/image";
import Release from "../components/Release";
import Catalogue from "../components/Catalogue";


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
        {/* <Catalogue /> */}
      </main>
    </>
  );

}

export default Home ;



  
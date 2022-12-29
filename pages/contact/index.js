import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../../components/Header";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Menuiserie Artisanale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="contact">
        <Header />
      </section>
    </>
  );
}

export default Contact;

import Head from "next/head";
import React from "react";
import Header from "../../components/Header";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Menuiserie Artisanale</title>
        <meta name="keywords" content="contact, adresse, téléphone, email" />
        <meta name="description" content="Nous sommes à votre disposition pour répondre à toutes vos questions. N'hésitez pas à nous contacter par téléphone, email ou sur nos différents réseaux sociaux." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="contact">
        <Header />
        Contact Page
      </section>
    </>
  );
}

export default Contact;

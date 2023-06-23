import React, { useRef } from "react";
import Head from "next/head";
import Transition from "../../utils/Transition";

function About() {
  const aboutContainerRef = useRef(null);

  return (
    <>
      <Head>
        <title>À Propos | Menuiserie Artisanale</title>
        <meta
          name="keywords"
          content="entreprise, histoire, activités, objectifs"
        />
        <meta
          name="description"
          content="En savoir plus sur notre entreprise et nos activités, ainsi que sur nos objectifs et notre histoire."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="about" ref={aboutContainerRef}>
        <h1>À Propos</h1>
      </section>
    </>
  );
}

export default Transition(About);

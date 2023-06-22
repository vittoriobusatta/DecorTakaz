import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/fqg5gfj.css"
        ></link>
        <meta
          name="description"
          content="Menuisier artisan spécialisée dans la conception et la fabrication de meubles et de structures en bois. Nous proposons des solutions sur mesure et de qualité pour tous vos projets sur l'île de la Réunion."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="menuisier, artisan, menuiserie, Réunion"
        />
        <meta name="author" content="Décor Ta Kaz" />
        <meta name="geo.placename" content="Saint-Benoît" />
        <meta name="geo.region" content="Ile de la Réunion" />

        <meta property="og:locale" content="fr_RE" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Menuisier artisan spécialisée dans la conception et la fabrication de meubles et de structures en bois. Nous proposons des solutions sur mesure et de qualité pour tous vos projets sur l'île de la Réunion."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://decortakaz.re/images/Banner.jpg"
        />
        <meta property="og:title" content="Décor Ta Kaz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

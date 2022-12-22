import Link from "next/link";
import React from "react";
import { Description, Title } from "../utils/common";
import {
  ArchitectureIcon,
  InterieurIcon,
  MobilierIcon,
  ProductIcon,
} from "../utils/icons";

function Release() {
  return (
    <section className="release">
      <div className="release_head">
        <h1 className="title">Réalisations</h1>
        <p className="introduction">
          En tant que menuisier passionné, je suis toujours à la recherche de
          nouvelles idées et de matériaux innovants pour mes réalisations. Je
          prends le temps d&#39;écouter attentivement les souhaits et les
          besoins de mes clients pour garantir une satisfaction complète. Je
          suis également habile dans l&#39;utilisation de différentes techniques
          de finition, ce qui me permet de produire des pièces finies de qualité
          supérieure.
        </p>
      </div>
      <ul className="release_category">
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
      </ul>
    </section>
  );
}

export default Release;

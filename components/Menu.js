import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <section className="menu">
      <ul>
        <Link href="/">
          <li>Accueil</li>
        </Link>
        <Link href="/catalogue">
          <li>Catalogue</li>
        </Link>
        <Link href="/about">
          <li>À Propos</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </section>
  );
}

export default Menu;

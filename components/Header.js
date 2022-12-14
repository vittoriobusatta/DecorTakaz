import { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../assets/share/logo.png";
import axterix from "../assets/share/axterix.svg";
import React from "react";
import Link from "next/link";

function Header() {
  const asterix = useRef(null);
  return (
    <header>
      <Link href="/">
        <Image className="logo" src={logo} alt="logo" />
      </Link>
      <button className="menu">
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
      <Image className="axterix" src={axterix} alt="axterix" ref={asterix} />
    </header>
  );
}

export default Header;

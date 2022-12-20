import { useRef } from "react";
import Image from "next/image";
import axterix from "../assets/share/axterix.svg";
import React from "react";
import Link from "next/link";
import { LogoIcon } from "../utils/icons";

function Header() {
  const asterix = useRef(null);
  return (
    <header>
      <Link href="/">
        <LogoIcon />
      </Link>
      <button className="menu">
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <Image className="axterix" src={axterix} alt="axterix" ref={asterix} />
    </header>
  );
}

export default Header;

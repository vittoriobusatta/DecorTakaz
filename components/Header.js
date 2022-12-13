import { useRef } from "react";
import Image from "next/image";
import logo from "../assets/share/logo.png";
import axterix from "../assets/share/axterix.svg";

import React from "react";

function Header() {
  const asterix = useRef(null);
  return (
    <header>
      <Image className="logo" src={logo} alt="logo" />
      <button className="menu">
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
      <Image className="axterix" src={axterix} alt="axterix" ref={asterix} />
    </header>
  );
}

export default Header;

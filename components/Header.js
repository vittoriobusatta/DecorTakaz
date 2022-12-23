import { useEffect, useRef } from "react";
import Image from "next/image";
import axterix from "../assets/share/axterix.svg";
import React from "react";
import Link from "next/link";
import { LogoIcon } from "../utils/icons";
import gsap from "gsap";

function Header({ openMenu, setOpenMenu }) {
  const asterix = useRef(null);
  const menuRef = useRef(null);
  const ClickMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const tl = gsap.timeline();
    if (openMenu) {
      tl.to(menuRef.current, { duration: 0.5, x: 0 });
    } else {
      tl.to(menuRef.current, { duration: 0.5, x: '-100%' });
    }
  }, [openMenu]);
  return (
    <>
      <header>
        <Link href="/">
          <LogoIcon />
        </Link>
        <button onClick={ClickMenu} className={`burger ${openMenu ? 'active' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <Image className="axterix" src={axterix} alt="axterix" ref={asterix} />
      </header>
    </>
  );
}

export default Header;

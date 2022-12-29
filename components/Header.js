import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import axterix from "../assets/share/axterix.svg";
import React from "react";
import Link from "next/link";
import { LogoIcon } from "../utils/icons";
import Menu from "./Menu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const asterix = useRef(null);
  const menuContainer = useRef(null);
  const listitems = useRef([]);


  const ClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMenu]);
  
  return (
    <>
      <header>
        <Link aria-label="Retourner à l'accueil" href="/">
          <LogoIcon onClick={handleCloseMenu} />
        </Link>
        <button aria-label="menu" onClick={ClickMenu} className={`burger ${openMenu ? 'active' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <Image className="axterix" src={axterix} alt="axterix" ref={asterix} />
      </header>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} menuContainer={menuContainer} listitems={listitems} />
    </>
  );
}

export default Header;

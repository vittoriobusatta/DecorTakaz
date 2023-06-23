import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import Link from "next/link";
import { LogoIcon } from "../utils/icons";
import Menu from "./Menu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  const [scollTop, setScrollTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.scrollY;
      if (currentPosition > scollTop) {
        headerRef.current.classList.add("header__hidden");
      } else {
        headerRef.current.classList.remove("header__hidden");
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scollTop]);

  return (
    <>
      <header className="header" ref={headerRef}>
        <Link aria-label="Retourner à l'accueil" href="/">
          <LogoIcon
            color={"#4E2705"}
            color2={"#FFF0E0"}
            onClick={handleCloseMenu}
          />
        </Link>
        <button
          aria-label="menu"
          onClick={ClickMenu}
          className={`burger ${openMenu ? "active" : ""}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </header>
      <Menu
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        menuContainer={menuContainer}
        listitems={listitems}
      />
    </>
  );
}

export default Header;

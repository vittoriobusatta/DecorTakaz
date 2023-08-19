import { useEffect, useRef, useState } from "react";
import React from "react";
import Link from "next/link";
import { LogoIcon } from "../utils/icons";

function Header() {
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
        <Link
          className="header__logo"
          aria-label="Retourner à l'accueil"
          href="/"
        >
          <LogoIcon />
        </Link>
      </header>
    </>
  );
}

export default Header;

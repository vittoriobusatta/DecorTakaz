import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

function Menu({ setOpenMenu, openMenu, menuContainer, listitems }) {

  useEffect(() => {
    let tl = gsap.timeline();

    if (openMenu) {
      tl.to(menuContainer.current, {
        duration: 0.5,
        x: 0,
        ease: "power2.in",
        opacity: 1,
        visibility: "visible",
      });
      tl.fromTo(
        menuContainer.current.children,
        { y: 50, opacity: 0 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          stagger: 0.4,
          ease: "power2.out",
          delay: 1,
        },
        0
      );
      listitems.current.forEach((ref, index) => {
        const listElements = ref;
        tl.fromTo(
          listElements,
          { y: "50%", clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 40%)" },
          {
            delay: 0.4 * (index + 1),
            y: 0,
            duration: 1.2,
            opacity: 1,
            ease: "power4.out",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          0
        );
      });
    } else {
      tl.to(menuContainer.current, {
        duration: 0.5,
        x: "0%",
        ease: "power2.out",
        opacity: 0,
        delay: 1,
        onComplete: () => {
          menuContainer.current.style.visibility = "hidden";
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, [openMenu, menuContainer, listitems]);

  return (
    <section ref={menuContainer} className="menu">
      <ul>
        <Link href="/">
          <div className="hidden">
            <li ref={(el) => (listitems.current[0] = el)}>Accueil</li>
          </div>
        </Link>
        <Link href="/catalogue">
          <div className="hidden">
            <li ref={(el) => (listitems.current[1] = el)}>Catalogue</li>
          </div>
        </Link>
        <Link href="/about">
          <div className="hidden">
            <li ref={(el) => (listitems.current[2] = el)}>À Propos</li>
          </div>
        </Link>
        <Link href="/contact">
          <div className="hidden">
            <li ref={(el) => (listitems.current[3] = el)}>Contact</li>
          </div>
        </Link>
      </ul>
    </section>
  );
}

export default Menu;

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
          { y: "100%", clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 40%)" },
          {
            delay: 0.4 * (index + 1),
            y: 0,
            duration: 1,
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

  console.log(openMenu);

  return (
    <section ref={menuContainer} className="menu">
      <div className="menu_container">
        <ul className="list_container">
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
        <ul className="socials_links">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
        </ul>
        <div className="email_links">
          <a href="mailto:contact@decortakaz.re">contact@decortakaz.re</a>
        </div>
      </div>
    </section>
  );
}

export default Menu;

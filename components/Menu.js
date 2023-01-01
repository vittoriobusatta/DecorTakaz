import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Menu({ setOpenMenu, openMenu, menuContainer, listitems }) {
  const socialsitems = useRef(null);
  const emailLinks = useRef(null);

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

      listitems.current.forEach((ref, index) => {
        const listElements = ref;
        tl.fromTo(
          listElements,
          { y: "100%", clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 40%)" },
          {
            delay: 0.2 * (index + 1),
            y: 0,
            duration: 0.8,
            opacity: 1,
            ease: "power4.out",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          0
        );
      });

      tl.fromTo(
        socialsitems.current,
        { y: 0, skewY: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          ease: "power2.out",
        }
      );
      tl.fromTo(
        emailLinks.current,
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.out",
        }
      );
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
      listitems.current.forEach((ref, index) => {
        const listElements = ref;
        tl.to(
          listElements,
          {
            delay: 0.1 * index,
            duration: 0.8,
            ease: "power4.out",
            y: "100%",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 40%)",
          },
          0
        );
      });
      tl.to(
        socialsitems.current,
        { y: 0, skewY: 0, opacity: 0, delay: 0.6 },
        0
      );
      tl.to(emailLinks.current, { y: 0, opacity: 0, delay: 0.6 }, 0);
    }

    return () => {
      tl.kill();
    };
  }, [openMenu, menuContainer, listitems, socialsitems, emailLinks]);

  const handleMenuClose = (path) => {
    if (
      path === "/" ||
      path === "/about" ||
      path === "/contact" ||
      path === "/catalogue"
    ) {
      setOpenMenu(false);
    }
  };

  return (
    <section ref={menuContainer} className="menu">
      <div className="menu_container">
        <ul className="list_container">
          <Link onClick={() => handleMenuClose("/")} href="/">
            <div className="hidden">
              <li className={location.pathname === '/' ? 'menu_active' : ''} ref={(el) => (listitems.current[0] = el)}>Accueil</li>
            </div>
          </Link>
          <Link onClick={() => handleMenuClose("/catalogue")} href="/catalogue">
            <div className="hidden">
              <li className={location.pathname === '/catalogue' ? 'menu_active' : ''} ref={(el) => (listitems.current[1] = el)}>Catalogue</li>
            </div>
          </Link>
          <Link onClick={() => handleMenuClose("/about")} href="/about">
            <div className="hidden">
              <li className={location.pathname === '/about' ? 'menu_active' : ''} ref={(el) => (listitems.current[2] = el)}>À Propos</li>
            </div>
          </Link>
          <Link onClick={() => handleMenuClose("/contact")} href="/contact">
            <div className="hidden">
              <li className={location.pathname === '/contact' ? 'menu_active' : ''} ref={(el) => (listitems.current[3] = el)}>Contact</li>
            </div>
          </Link>
        </ul>
        <ul ref={socialsitems} className="socials_links opacity">
          <div className="hidden">
            <li>
              <a href="https://www.instagram.com/decortakaz/">Instagram</a>
            </li>
          </div>
          <div className="hidden">
            <li>
              <a href="https://m.facebook.com/profile.php?id=100064274190012">
                Facebook
              </a>
            </li>
          </div>
        </ul>
        <div className="email_links hidden">
          <a className="" ref={emailLinks} href="mailto:contact@decortakaz.re">
            contact@decortakaz.re
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;

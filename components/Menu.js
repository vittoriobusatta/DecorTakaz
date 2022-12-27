import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

function Menu({
  emailLinks,
  socialsitems,
  openMenu,
  menuContainer,
  listitems,
}) {
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
            delay: 0.4 * (index + 1),
            y: 0,
            duration: 0.8,
            opacity: 1,
            ease: "power4.out",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          0
        );
      });

      tl.to(
        socialsitems.current,
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );
      tl.to(
        emailLinks.current,
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
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
    }

    return () => {
      tl.kill();
    };
  }, [openMenu, menuContainer, listitems, socialsitems, emailLinks]);

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
        <ul ref={socialsitems} className="socials_links opacity">
          <div className="hidden">
            <li>Instagram</li>
          </div>
          <div className="hidden">
            <li>Facebook</li>
          </div>
          <div className="hidden">
            <li>Whatsapp</li>
          </div>
        </ul>
        <div className="email_links hidden">
          <a
            className="opacity"
            ref={emailLinks}
            href="mailto:contact@decortakaz.re"
          >
            contact@decortakaz.re
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;

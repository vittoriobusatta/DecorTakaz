import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  ArchitectureIcon,
  InterieurIcon,
  MobilierIcon,
  ProductIcon,
} from "../utils/icons";

function Release() {
  const releaseContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragrahRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const icon4Ref = useRef(null);

  const iconContent1 = useRef(null);
  const iconContent2 = useRef(null);
  const iconContent3 = useRef(null);
  const iconContent4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(releaseContainerRef.current);
  }, []);

  function animateElements() {
    gsap.fromTo(
      titleRef.current,
      { y: 110, skewY: 10 },
      {
        delay: 0.3,
        y: 0,
        duration: 0.8,
        opacity: 1,
        skewY: 0,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: 70, skewY: 10 },
      {
        delay: 0.1,
        y: 0,
        opacity: 1,
        skewY: 0,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      paragrahRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 0.5,
        y: 0,
        duration: 1.2,
        opacity: 1,
        ease: "power2.out",
      }
    );
    const items = [icon1Ref, icon2Ref, icon3Ref, icon4Ref];
    items.forEach((icon, index) => {
      gsap.fromTo(
        icon.current,
        { width: 0 },
        {
          delay: (index + 1) * 0.6,
          opacity: 1,
          ease: "back.out(1.7)",
          width: "100%",
        }
      );
    });

    const icons = [iconContent1, iconContent2, iconContent3, iconContent4];
    icons.forEach((item, index) => {
      gsap.fromTo(
        item.current,
        { x: -170 },
        {
          delay: (index + 1) * 0.65,
          x: 0,
          opacity: 1,
          ease: "power1.out",
        }
      );
    });
  }

  return (
    <section ref={releaseContainerRef} className="release">
      <div className="release_head">
        <div className="hidden">
          <h5 ref={subtitleRef} className="subtitle">
            Nos dernières
          </h5>
        </div>
        <div className="hidden">
          <h1 ref={titleRef} className="title">
            Réalisations
          </h1>
        </div>
        <div className="introduction_container hidden">
          <p ref={paragrahRef} className="introduction">
            En tant que menuisier passionné, je suis toujours à la recherche de
            nouvelles idées et de matériaux innovants pour mes réalisations. Je
            prends le temps d&#39;écouter attentivement les souhaits et les
            besoins de mes clients pour garantir une satisfaction complète. Je
            suis également habile dans l&#39;utilisation de différentes
            techniques de finition, ce qui me permet de produire des pièces
            finies de qualité supérieure.
          </p>
        </div>
      </div>
      <ul className="release_category">
        <li ref={icon1Ref}>
          <Link ref={iconContent1} href="/mobilier/">
            <p>Mobilier</p>
            <MobilierIcon />
          </Link>
        </li>
        <li ref={icon2Ref}>
          <Link ref={iconContent2} href="/interieur/">
            <p>Intérieur</p>
            <InterieurIcon />
          </Link>
        </li>
        <li ref={icon3Ref}>
          <Link ref={iconContent3} href="/produits/">
            <p>Produits</p>
            <ProductIcon />
          </Link>
        </li>
        <li ref={icon4Ref}>
          <Link ref={iconContent4} href="/">
            <p>Architecture</p>
            <ArchitectureIcon />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Release;

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
  const paragraphRef = useRef(null);

  const items = useRef([]);
  const iconTitle = useRef([]);

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
      { y: "300%", skewY: 10 },
      {
        delay: 0.3,
        y: "0",
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
      paragraphRef.current,
      {
        y: 60,
        skewY: 8,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      },
      {
        duration: 0.6,
        delay: 0.4,
        y: 0,
        opacity: 1,
        skewY: 0,
        ease: "power4.out",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }
    );
    items.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        {
          delay: 0.4 * index,
          y: 0,
          opacity: 1,
          ease: "back.out(1.7)",
          clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
        }
      );
    });

    iconTitle.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: -50 },
        {
          delay: (index + 0.8) * 0.6,
          y: 0,
          opacity: 1,
          ease: "power4.out",
        }
      );
    });
  }

  return (
    <section ref={releaseContainerRef} className="release">
      <div className="release_head">
        <div className="hidden">
          <h5 ref={subtitleRef} className="subtitle opacity">
            Nos dernières
          </h5>
        </div>
        <div className="hidden">
          <h1 ref={titleRef} className="title opacity">
            Réalisations
          </h1>
        </div>
        <div className="introduction_container hidden">
          <p ref={paragraphRef} className="introduction opacity">
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
        <li className="opacity hidden" ref={(el) => (items.current[0] = el)}>
          <Link href="/mobilier/">
            <div className="hidden">
              <p ref={(el) => (iconTitle.current[0] = el)}>Mobilier</p>
            </div>
            <MobilierIcon />
          </Link>
        </li>
        <li className="opacity hidden" ref={(el) => (items.current[1] = el)}>
          <Link href="/interieur/">
            <div className="hidden">
              <p ref={(el) => (iconTitle.current[1] = el)}>Intérieur</p>
            </div>
            <InterieurIcon />
          </Link>
        </li>
        <li className="opacity hidden" ref={(el) => (items.current[2] = el)}>
          <Link href="/produits/">
            <div className="hidden">
              <p ref={(el) => (iconTitle.current[2] = el)}>Produits</p>
            </div>
            <ProductIcon />
          </Link>
        </li>
        <li className="opacity hidden" ref={(el) => (items.current[3] = el)}>
          <a>
            <div className="hidden">
              <p ref={(el) => (iconTitle.current[3] = el)}>Architecture</p>
            </div>
            <ArchitectureIcon />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Release;

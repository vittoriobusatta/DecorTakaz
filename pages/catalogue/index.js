import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import catalogueImg from "../../public/images/section/catalogue.jpg";
import catalogueImgmobile from "../../public/images/section/catalogueMobile.jpg";
import { ArrowIcon } from "../../utils/icons";

const Catalogue = () => {
  const catalogueContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const borderRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(catalogueContainerRef.current);
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
      imageRef.current,
      { y: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      {
        delay: 0.5,
        y: 0,
        duration: 1.7,
        opacity: 1,
        ease: "power4.out",
        clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
      }
    );
    borderRef.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: 0, width: 0 },
        {
          delay: 0.2 * index,
          y: 0,
          duration: 0.8,
          opacity: 1,
          ease: "power4.out",
          width: "auto",
        }
      );
    });
  }

  return (
    <>
      <Head>
        <title>Catalogue | Menuiserie Artisanale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={catalogueContainerRef} className="catalogue">
        <Header />
        <div className="catalogue_container">
          <div className="catalogue_layout_left">
            <Image src={catalogueImg} alt="catalogue" />
          </div>

          <div className="catalogue_layout">
            <div className="catalogue_head">
              <div className="hidden">
                <h5 ref={subtitleRef} className="subtitle opacity">
                  Notre
                </h5>
              </div>
              <div className="hidden">
                <h1
                  ref={titleRef}
                  className="catalogue_introduction title opacity"
                >
                  Catalogue
                </h1>
              </div>
              <div className="introduction_container hidden">
                <p className="catalogue_introduction introduction">
                  Dans notre catalogue, vous trouverez divers types de mobilier
                  conçues sur mesure pour s&#39;intégrer parfaitement à votre
                  espace de vie ou de travail. Vous pourrez également découvrir
                  une gamme de pièces d&#39;intérieure qui sont fabriqués avec
                  soin et attention aux détails. Des produits de menuiserie de
                  qualité supérieure pour améliorer l&#39;esthétique et la
                  fonctionnalité de votre maison. Enfin, vous pourrez découvrir
                  des conception architecturale pour aider à transformer votre
                  espace en un endroit unique et sur mesure.
                </p>
              </div>
            </div>
            <Image
              className="opacity"
              ref={imageRef}
              src={catalogueImgmobile}
              alt="catalogue"
            />
            <ul className="catalogue_table">
              <li>
                <Link href="/mobilier/">
                  <div
                    className="border"
                    ref={(el) => (borderRef.current[0] = el)}
                  />
                  <div className="catalogue_table_child">
                    <p>Mobilier</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className="border"
                    ref={(el) => (borderRef.current[1] = el)}
                  />
                </Link>
              </li>
              <li>
                <Link href="/interieur/">
                  <div className="catalogue_table_child">
                    <p>Intérieur</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className="border"
                    ref={(el) => (borderRef.current[2] = el)}
                  />
                </Link>
              </li>
              <li>
                <Link href="/produits/">
                  <div className="catalogue_table_child">
                    <p>Produits</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className="border"
                    ref={(el) => (borderRef.current[3] = el)}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className="catalogue_table_child">
                    <p>Architecture</p>
                    <ArrowIcon />
                  </div>
                  <div
                    className="border"
                    ref={(el) => (borderRef.current[4] = el)}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogue;

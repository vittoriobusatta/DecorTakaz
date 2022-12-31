import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import aboutImg from "../../public/images/section/about.jpg";
import aboutImgmobile from "../../public/images/section/aboutMobile.jpg";
import Image from "next/image";

function About() {

  const aboutContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(aboutContainerRef.current);
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
  }

  return (
    <>
      <Head>
        <title>À Propos | Menuiserie Artisanale</title>
        <meta name="keywords" content="entreprise, histoire, activités, objectifs" />
        <meta name="description" content="En savoir plus sur notre entreprise et nos activités, ainsi que sur nos objectifs et notre histoire."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={aboutContainerRef} className="about">
        <Header />
        <div className="about_container">
          <div className="about_layout_left">
            <Image src={aboutImg} alt="about" />
          </div>

          <div className="about_layout">
            <div className="about_head">
              <div className="hidden">
                <h5 ref={subtitleRef} className="subtitle opacity">À Propos</h5>
              </div>
              <div className="hidden">
                <h1 ref={titleRef} className="about_introduction title opacity">De nous</h1>
              </div>
              <div className="introduction_container hidden">
                <p className="about_introduction introduction">
                  Fondée en 2017, Décor Ta Kaz est une entreprise d’ameublement
                  qui est synonyme de produits de haute qualité des plus grands
                  designs. En tant que rêveurs, créateurs, innovateurs et
                  concepteurs, nous sommes fiers de fournir les solutions les
                  plus efficaces, pratiques et abordables pour la vie moderne.
                </p>
                <p className="about_introduction introduction">
                  En servant tous les conforts, nous cherchons à rendre chaque
                  jour plus lisse et gérable que vous allez dans vos activités
                  quotidiennes. Décor ta Kaz est une intégration de marques;
                  Notre collection comprend des articles fonctionnels améliorés
                  ainsi qu’un décor exquis - une combinaison idéale qui est mis
                  en valeur tout espace de vie et de vie.
                </p>
              </div>
            </div>
            <Image className="opacity" ref={imageRef} src={aboutImgmobile} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

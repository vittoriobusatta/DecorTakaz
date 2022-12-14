import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import contactImg from "../../public/images/section/contact.webp";
import contactImgmobile from "../../public/images/section/contactMobile.webp";
import { FacebookIcon, InstagramIcon } from "../../utils/icons";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Contact() {
  const contactContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  const spanRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(contactContainerRef.current);
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
    spanRef.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: 70 },
        {
          delay: 0.3 * index,
          y: 0,
          duration: 0.8,
          opacity: 1,
          ease: "power4.out",
        }
      );
    });
  }

  return (
    <>
      <Head>
        <title>Contact | Menuiserie Artisanale</title>
        <meta name="keywords" content="contact, adresse, t??l??phone, email" />
        <meta
          name="description"
          content="Nous sommes ?? votre disposition pour r??pondre ?? toutes vos questions. N'h??sitez pas ?? nous contacter par t??l??phone, email ou sur nos diff??rents r??seaux sociaux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <motion.section
        initial={{
          y: "0%",
          opacity: 0,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        animate={{
          y: "0%",
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{
          opacity: 1,
        }}
        ref={contactContainerRef}
        className="contact"
      >
        <div className="contact_container">
          <div className="contact_layout_left">
            <Image src={contactImg} alt="contact" />
          </div>

          <div className="contact_layout">
            <div className="contact_head">
              <div className="hidden">
                <h5 ref={subtitleRef} className="subtitle opacity">
                  Nous
                </h5>
              </div>
              <div className="hidden">
                <h1 ref={titleRef} className="title opacity">
                  Contacter
                </h1>
              </div>
              <div className="introduction_container hidden">
                <p className="contact_introduction">contact@decortakaz.re</p>
                <p className="contact_introduction">+262 6 92 43 51 92</p>
                <div className="contact_adresse hidden">
                  <div className="hidden">
                    <p
                      className="opacity"
                      ref={(el) => (spanRef.current[0] = el)}
                    >
                      14 Rue Auguste de Villele
                    </p>
                  </div>
                  <div className="hidden">
                    <p
                      className="opacity"
                      ref={(el) => (spanRef.current[1] = el)}
                    >
                      Saint-Beno??t 97470,
                    </p>
                  </div>

                  <div className="hidden">
                    <p
                      className="opacity"
                      ref={(el) => (spanRef.current[2] = el)}
                    >
                      La R??union
                    </p>
                  </div>
                </div>
                <div className="contact_socials">
                  <a href="https://www.facebook.com/people/D%C3%A9cor-ta-Kaz/100064274190012/">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/decortakaz/">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <Image
              className="opacity"
              ref={imageRef}
              src={contactImgmobile}
              alt="contact"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;

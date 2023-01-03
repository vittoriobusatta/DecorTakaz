import Head from "next/head";
import Header from "../components/Header";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Release from "../components/Release";
import fort from "/assets/share/Subtract.webp";
import Reviews from "../components/Reviews";
import soa from "/assets/share/soa.webp";
import vittorio from "/assets/share/vb.webp";
import trinity from "/assets/share/ljt.webp";
import Footer from "../components/Footer";
import Process from "../components/Process";
import gsap from "gsap";
import Question from "../components/Question";
import Link from "next/link";
import Loader from "../components/Loader";

const Forest = () => {
  const forestContainerRef = useRef(null);
  const imageForestRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(forestContainerRef.current);
  }, []);

  function animateElements() {
    gsap.fromTo(
      imageForestRef.current,
      { y: 200 },
      {
        delay: 0.3,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
  }

  return (
    <section ref={forestContainerRef} className="forest_container hidden">
      <Image className="opacity" ref={imageForestRef} src={fort} alt="alt" />
    </section>
  );
};

const Customers = () => {
  const customersContainerRef = useRef(null);
  const titleRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(customersContainerRef.current);
  }, []);

  function animateElements() {
    gsap.fromTo(
      titleRef.current,
      { y: 70 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    const icons = [icon1Ref, icon2Ref, icon3Ref];
    icons.forEach((icon, index) => {
      gsap.fromTo(
        icon.current,
        { y: 70 },
        {
          delay: index * 0.3,
          y: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );
    });
  }

  return (
    <section className="customers">
      <div className="customers_container">
        <div className="hidden">
          <h2 ref={titleRef}>Nos Clients</h2>
        </div>
        <ul ref={customersContainerRef} className="customers_content">
          <li>
            <Image ref={icon1Ref} src={vittorio} alt="alt" />
          </li>
          <li>
            <Image ref={icon2Ref} src={soa} alt="alt" />
          </li>
          <li>
            <Image ref={icon3Ref} src={trinity} alt="alt" />
          </li>
        </ul>
      </div>
    </section>
  );
};

const Getintouch = () => {
  const contactTitles = useRef([]);
  const contactButton = useRef(null);
  const contactCta = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElements(entry.target);
        }
      });
    });
    function animateElements(element) {
      gsap.fromTo(
        element,
        { y: 70, skewY: 20 },
        {
          duration: 1.2,
          y: 0,
          opacity: 1,
          skewY: 0,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        contactButton.current,
        { width: 0 },
        {
          delay: 0.5,
          opacity: 1,
          ease: "power2.out",
          width: "auto",
        }
      );
      gsap.fromTo(
        contactCta.current,
        { y: 70 },
        {
          y: 0,
          delay: 0.8,
          opacity: 1,
          ease: "power2.out",
        }
      );
      observer.unobserve(element);
    }

    contactTitles.current.forEach((title) => {
      observer.observe(title);
    });
  }, []);

  return (
    <section className="getintouch">
      <div className="getintouch_content">
        <span>
          <div className="hidden">
            <p ref={(el) => (contactTitles.current[0] = el)}>
              Impressionnez par notre travail?
            </p>
          </div>
          <div className="hidden">
            <p ref={(el) => (contactTitles.current[1] = el)}>
              Contactez-nous maintenant
            </p>
          </div>
        </span>
        <button ref={contactButton}>
          <Link href="/contact">
            <div className="hidden">
              <p ref={contactCta}>Nous Contacter</p>
            </div>
          </Link>
        </button>
      </div>
    </section>
  );
};

function Home() {
  return (
    <>
      <Head>
        <title>Décor Ta Kaz | Menuiserie Artisanale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Loader />

      <main className="main">
        <Release />
        <Process />
        <Forest />
        <Customers />
        <Reviews />
        <Question />
        <Getintouch />
        <Footer />
      </main>
    </>
  );
}

export default Home;

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { GiftIcon, LogIcon, PenIcon, ToolsIcon } from "../utils/icons";

const Process = () => {
  const titlesSteps = useRef([]);
  const paragraphs = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragrahRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
        }
      });
    });
    const animateElement = (element) => {
      gsap.fromTo(
        element,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
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
      observer.unobserve(element);
    };

    titlesSteps.current.forEach((title, index) => {
      observer.observe(title);
      observer.observe(paragraphs.current[index]);
    });
  }, []);

  return (
    <section className="process">
      <div className="process_content">
        <div className="process_head">
          <div className="hidden">
            <h5 ref={subtitleRef} className="subtitle">
              Notre
            </h5>
          </div>
          <div className="hidden">
            <h1 ref={titleRef} className="title">
              Processus
            </h1>
          </div>
          <div className="introduction_container hidden">
            <p ref={paragrahRef} className="introduction">
              Décor ta Kaz est une entreprise spécialisée dans la conception et
              la fabrication de meubles et de structures en bois. Nous
              commençons par établir les spécifications du projet avec le
              client, puis préparons les matériaux nécessaires et assemblons
              chaque meuble ou structure avec soin. Nous veillons à ce que
              chaque produit soit fini avec soin et vérifié pour garantir une
              qualité exceptionnelle avant de le livrer à nos clients.
            </p>
          </div>
        </div>
        <ul className="process_steps">
          <li className="firststep">
            <div className="square">
              <PenIcon />
            </div>
            <h3 ref={(el) => (titlesSteps.current[0] = el)}>
              01. Conception du design
            </h3>
            <p ref={(el) => (paragraphs.current[0] = el)}>
              Nous vous proposerons différents modèles et styles afin que vous
              puissiez choisir celui qui correspond le mieux à vos goûts et à
              votre intérieur.
            </p>
          </li>
          <div className="connected_point firstpoint">
            <svg
              width="4"
              height="43"
              viewBox="0 0 4 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#563213" />
              <circle cx="2" cy="15" r="2" fill="#563213" />
              <circle cx="2" cy="28" r="2" fill="#563213" />
              <circle cx="2" cy="41" r="2" fill="#563213" />
            </svg>
          </div>
          <li className="secondstep">
            <div className="square">
              <LogIcon />
            </div>
            <h3 ref={(el) => (titlesSteps.current[1] = el)}>
              02. Sélection des matières
            </h3>
            <p ref={(el) => (paragraphs.current[1] = el)}>
              Nous vous présenterons les différentes essences et leurs
              caractéristiques pour que vous puissiez faire un choix éclairé.
            </p>
          </li>
          <div className="connected_point secondpoint">
            <svg
              width="4"
              height="43"
              viewBox="0 0 4 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#563213" />
              <circle cx="2" cy="15" r="2" fill="#563213" />
              <circle cx="2" cy="28" r="2" fill="#563213" />
              <circle cx="2" cy="41" r="2" fill="#563213" />
            </svg>
          </div>
          <li className="thirdstep">
            <div className="square">
              <ToolsIcon />
            </div>
            <h3 ref={(el) => (titlesSteps.current[2] = el)}>03. Fabrication</h3>
            <p ref={(el) => (paragraphs.current[2] = el)}>
              Nous mettons un point d&#39;honneur à réaliser chaque meuble de
              manière artisanale, en respectant les traditions de la menuiserie.
            </p>
          </li>
          <div className="connected_point thirdpoint">
            <svg
              width="4"
              height="43"
              viewBox="0 0 4 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#563213" />
              <circle cx="2" cy="15" r="2" fill="#563213" />
              <circle cx="2" cy="28" r="2" fill="#563213" />
              <circle cx="2" cy="41" r="2" fill="#563213" />
            </svg>
          </div>
          <li className="fourthstep">
            <div className="square">
              <GiftIcon />
            </div>
            <h3 ref={(el) => (titlesSteps.current[3] = el)}>04. Livraison</h3>
            <p ref={(el) => (paragraphs.current[3] = el)}>
              Nous nous chargeons de toutes les étapes de transport et
              d&#39;installation afin que vous puissiez profiter pleinement de
              votre nouvelle pièce dès son arrivée.
            </p>
          </li>
          <div className="treetrunk"></div>
        </ul>
      </div>
    </section>
  );
};

export default Process;

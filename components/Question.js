import gsap from "gsap";
import React, { createRef, useEffect, useRef, useState } from "react";

const Question = () => {
  const [faqData] = useState([
    {
      question: "Comment passer commande ?",
      answer:
        "Il vous suffit de choisir le type de menuiserie : fenêtre, porte, baie coulissante, la matière et de noter les dimensions de votre menuiserie.",
    },
    {
      question: "Quels sont les modes de paiments",
      answer:
        "Pour régler votre commande, Decor Ta Kaz vous propose le paiement via différents moyens : par carte bleue, chèque, virement, espèce.",
    },
    {
      question: "Comment vais-je reçevoir ma commande ?",
      answer:
        "Votre commande sera acheminée par nos propre moyen. Nous prenons soin de protéger les menuiseries afin qu'elles vous arrivent sans encombre.",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const contactContainerRef = useRef(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const secondtitleRef = useRef(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const refs = faqData.map(() => createRef());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animateElements = () => {
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
              secondtitleRef.current,
              {
                y: 100,
                opacity: 0,
              },
              {
                delay: 0.4,
                y: 0,
                duration: 1.2,
                opacity: 1,
                ease: "power2.out",
              }
            );
            for (let i = 0; i < refs.length; i++) {
              gsap.fromTo(
                refs[i].current,
                {
                  width: 0,
                },
                {
                  delay: 0.2 * i,
                  width: "auto",
                  duration: 1.2,
                  opacity: 1,
                  ease: "power2.out",
                }
              );
            }
          };
          animateElements();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(contactContainerRef.current);
  }, []);

  return (
    <section ref={contactContainerRef} className="question">
      <div className="question_head">
        <div className="hidden">
          <h5 ref={subtitleRef} className="subtitle ">
            Faq
          </h5>
        </div>
        <div className="title_content fit-content">
          <div className="hidden fit-content">
            <h1 ref={titleRef} className="title">
              Questions
            </h1>
          </div>
          <div className="hidden fit-content">
            <h6 ref={secondtitleRef} className="secondtitle ">
              Fréquemment posés
            </h6>
          </div>
        </div>
      </div>
      <ul>
        {faqData.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={selectedIndex === index ? "question_active" : ""}
            ref={refs[index]}
          >
            <div className="question_content hidden">
              <h3>{item.question}</h3>
              <svg
                width="16"
                viewBox="0 0 26 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5213 0.583267C24.3192 0.449265 24.05 0.479621 23.8828 0.65528L13.0004 12.0886L2.14357 0.655698C1.97748 0.480792 1.71019 0.449396 1.50808 0.581052L0.727085 1.08982C0.602701 1.17085 0.520753 1.30295 0.50342 1.45039C0.486087 1.59782 0.535161 1.74533 0.63736 1.85299L12.6374 14.4949C12.7318 14.5944 12.8629 14.6507 13.0001 14.6507C13.1372 14.6507 13.2684 14.5943 13.3628 14.4948L25.3628 1.84466C25.4644 1.73749 25.5135 1.59086 25.4968 1.44409C25.4801 1.29732 25.3994 1.16544 25.2763 1.08381L24.5213 0.583267Z"
                  fill="#563213"
                  stroke="#563213"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {selectedIndex === index && (
              <p
                className={`${selectedIndex === index ? "open" : ""} ${
                  selectedIndex === -1 ? "closed" : ""
                }`}
              >
                {item.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Question;

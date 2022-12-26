import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

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

  const question1 = useRef(null);
  const question2 = useRef(null);
  const question3 = useRef(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

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
  }

  return (
    <section ref={contactContainerRef} className="question">
      <div className="question_head">
        <div className="hidden">
          <h5 ref={subtitleRef} className="subtitle ">Faq</h5>
        </div>
        <div className="title_content fit-content">
          <div className="hidden fit-content">
            <h1 ref={titleRef} className="title">Questions</h1>
          </div>
          <div className="hidden fit-content">
            <h6 ref={secondtitleRef} className="secondtitle ">Fréquemment posés</h6>
          </div>
        </div>
      </div>
      <ul>
        {faqData.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={selectedIndex === index ? "question_active" : ""}
          >
            <h3>{item.question}</h3>
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

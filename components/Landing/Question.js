import React, { createRef, useRef, useState } from "react";
import { ArrrowFAQ } from "../../utils/icons";

const faqData = [
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
];

const Question = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const contactContainerRef = useRef(null);

  const titleRef = useRef(null);

  const h3Refs = useRef([]);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const refs = faqData.map(() => createRef());

  return (
    <section ref={contactContainerRef} className="question">
      <div className="release__head">
        <div className="hidden">
          <h1 ref={titleRef} className="title">
            faqs
          </h1>
        </div>
      </div>
      <ul>
        {faqData.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={
              selectedIndex === index ? "question_active opacity" : "opacity"
            }
            ref={refs[index]}
          >
            <div className="question_content hidden">
              <h4
                className="opacity"
                ref={(el) => (h3Refs.current[index] = el)}
              >
                {item.question}
              </h4>
              <ArrrowFAQ />
            </div>
            <div className="question_overlay"></div>
            <p className="opacity">{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Question;

import React, { createRef, useRef, useState } from "react";
import { ArrrowFAQ } from "../../utils/icons";

const faqData = [
  {
    question: "Comment passer commande ?",
    answer:
      "Il vous est simplement nécessaire de sélectionner le type de menuiserie souhaité, qu'il s'agisse d'une fenêtre, d'une porte ou d'une baie coulissante, ainsi que le matériau désiré, et de prendre note des dimensions de votre menuiserie.",
  },
  {
    question: "Quels sont les modes de paiments ?",
    answer:
      "Pour faciliter le règlement de votre commande, Decor Ta Kaz propose plusieurs moyens de paiement, tels que la carte bleue, le chèque, le virement ou en espèces. Vous pouvez choisir l'option qui vous convient le mieux.",
  },
  {
    question: "Comment vais-je me faire livrer ?",
    answer:
      "Nous acheminerons votre commande par nos propres moyens en prenant soin de protéger les menuiseries afin qu'elles vous parviennent en parfait état, sans aucun problème.",
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
      <div className="section__head">
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

import React, { useState } from "react";

const Question = () => {
  const [faqData] = useState([
    {
      question: "Comment vais-je reçevoir ma commande ?",
      answer:
        "Votre commande sera acheminée par nos propre moyen. Nous prenons soin de protéger les menuiseries afin qu'elles vous arrivent sans encombre.",
    },
    {
      question: "Quels sont les modes de paiments",
      answer:
        "Pour régler votre commande, Decor Ta Kaz vous propose le paiement via différents moyens : par carte bleue, chèque, virement, espèce.",
    },
    {
      question: "Comment passer commande ?",
      answer:
        "Il vous suffit de choisir le type de menuiserie : fenêtre, porte, baie coulissante, la matière et de noter les dimensions de votre menuiserie.",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <section className="question">
      <div className="question_head">
        <div className="hidden">
          <h5 className="subtitle ">Faq</h5>
        </div>
        <div className="hidden">
          <h1 className="title ">Questions</h1>
        </div>
        <div className="hidden">
          <h1 className="subtitle ">Fréquemment posés</h1>
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

import React from "react";
import { GiftIcon, LogIcon, PenIcon, ToolsIcon } from "../../utils/icons";

const process = [
  {
    id: 1,
    title: "Conception du design",
    description:
      "Nous vous proposerons différents modèles et styles afin que vous puissiez choisir celui qui correspond le mieux à vos goûts et à votre intérieur.",
    icon: <PenIcon color={"#A66C34"} />,
  },
  {
    id: 2,
    title: "Sélection des matières",
    description:
      "Nous vous présenterons les différentes essences et leurs caractéristiques pour que vous puissiez faire un choix éclairé.",
    icon: <LogIcon color={"#A66C34"} />,
  },
  {
    id: 3,
    title: "Fabrication",
    description:
      "Nous mettons un point d'honneur à réaliser chaque meuble de manière artisanale, en respectant les traditions de la menuiserie.",
    icon: <ToolsIcon color={"#A66C34"} />,
  },
  {
    id: 4,
    title: "Livraison",
    description:
      "Nous nous chargeons de toutes les étapes de transport et d'installation afin que vous puissiez profiter pleinement de votre nouvelle pièce dès son arrivée.",
    icon: <GiftIcon color={"#A66C34"} />,
  },
];

const Process = () => {
  return (
    <section className="process">
      <div className="section__head">
        <div className="hidden">
          <h1 className="title">Notre Processus</h1>
        </div>
        <div className="hidden">
          <a>Info</a>
        </div>
      </div>
      <ul className="process__list">
        {process.map((item, index) => {
          return (
            <li key={index} className="process__step">
              <div className="process__step__icon">{item.icon}</div>
              <div className="process__step__content">
                <h3>{`0${item.id}. ${item.title}`}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Process;

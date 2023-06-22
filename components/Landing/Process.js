import React from "react";
import { GiftIcon, LogIcon, PenIcon, ToolsIcon } from "../../utils/icons";

const process = [
  {
    id: 1,
    title: "Conception du design",
    description:
      "Nous vous proposerons différents modèles et styles afin que vous puissiez choisir celui qui correspond le mieux à vos goûts et à votre intérieur.",
    icon: <PenIcon />,
  },
  {
    id: 2,
    title: "Sélection des matières",
    description:
      "Nous vous présenterons les différentes essences et leurs caractéristiques pour que vous puissiez faire un choix éclairé.",
    icon: <LogIcon />,
  },
  {
    id: 3,
    title: "Fabrication",
    description:
      "Nous mettons un point d'honneur à réaliser chaque meuble de manière artisanale, en respectant les traditions de la menuiserie.",
    icon: <ToolsIcon />,
  },
  {
    id: 4,
    title: "Livraison",
    description:
      "Nous nous chargeons de toutes les étapes de transport et d'installation afin que vous puissiez profiter pleinement de votre nouvelle pièce dès son arrivée.",
    icon: <GiftIcon />,
  },
];

const Process = () => {
  return (
    <section className="process">
      <div className="process_content">
        <div className="process__head">
          <div className="hidden">
            <h1 className="title">Notre Processus</h1>
          </div>
          <div className="hidden">
            <a className="release__head__cta">Info</a>
          </div>
        </div>
        <ul className="process_steps">
          {process.map((item, index) => {
            return (
              <li key={index} className="process_step">
                <div className="process_step__icon">{item.icon}</div>
                <div className="process_step__content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Process;

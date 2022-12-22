import Image from "next/image";
import jennyPP from "/assets/share/circle.png";
import lisaPP from "/assets/share/circle2.png";
import victorPP from "/assets/share/circle3.png";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Jenny",
      description:
        "Le seul et unique ARTISAN spécialisé en bois et résine sur l'île qui a cru à mon projet, le seul qui a su réaliser et rendre réel la vision que j'avais concernant mon enseigne.",
      job: "Esthéticienne",
      image: jennyPP,
    },
    {
      name: "Lisa",
      description:
        "Je suis absolument ravi du travail qui a été réalisé. Ils ont fabriqué et installé des placards sur mesure dans ma cuisine, et le résultat est absolument parfait. Je recommande vivement Décor Ta Kaz à tous ceux qui cherchent à améliorer l'espace de rangement de leur maison.",
      job: "Designer",
      image: lisaPP,
    },
    {
      name: "Victor",
      description:
        "J'ai été très satisfait du travail de cette entreprise de menuiserie. Ils ont fabriqué et installé une porte d'entrée sur mesure, et le résultat est parfait. Le travail a été effectué rapidement et proprement, et la porte est de très haute qualité. Je recommande vivement Décor Ta Kaz.",
      job: "Manager",
      image: victorPP,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }
  
  const handleNextClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }

  const [isVisible, setIsVisible] = useState(true);

  const currentTestimonial = testimonials[currentIndex];
  return (
    <section className="reviews">
      <div className="reviews_content">
        <h2>Leurs Avis</h2>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="reviews_layout">
                <span>&#34;</span>
                <p>{currentTestimonial.description}</p>
                <div className="reviews_customers">
                  <Image src={currentTestimonial.image} alt="alt" />
                  <h4>- {currentTestimonial.name}</h4>
                  <h5>{currentTestimonial.job}</h5>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handlePrevClick}>Prev</button>
      </div>
    </section>
  );
}

export default Reviews;

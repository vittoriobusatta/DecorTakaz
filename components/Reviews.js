import Image from "next/image";
import jennyPP from "/assets/share/circle.png";
import lisaPP from "/assets/share/circle2.png";
import victorPP from "/assets/share/circle3.png";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function Reviews() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Jenny",
      description:
        "Le seul et unique ARTISAN spécialisé en bois et résine sur l'île qui a cru à mon projet, le seul qui a su réaliser et rendre réel la vision que j'avais concernant mon enseigne.",
      job: "Esthéticienne",
      image: jennyPP,
    },
    {
      id: 2,
      name: "Lisa",
      description:
        "Je suis absolument ravi du travail qui a été réalisé. Ils ont fabriqué et installé des placards sur mesure dans ma cuisine, et le résultat est absolument parfait. ",
      job: "Designer",
      image: lisaPP,
    },
    {
      id: 3,
      name: "Victor",
      description:
        "J'ai été très satisfait du travail de cette entreprise de menuiserie. Ils ont fabriqué et installé une porte d'entrée sur mesure, et le résultat est parfait. Je recommande !",
      job: "Manager",
      image: victorPP,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  const ref = useRef(null);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
      }
    );
  };

  const nextTestimonial = useCallback(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  }, [currentIndex, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          duration: 1.5,
          opacity: 1,
        }
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, currentIndex]);

  return (
    <section className="reviews">
      <div className="reviews_content">
        <h2>Leurs Avis</h2>
        <div className="reviews_layout">
          <span>&#34;</span>
          <div ref={ref}>
            <p>{currentTestimonial.description}</p>
            <div className="reviews_customers">
              <Image src={currentTestimonial.image} alt="alt" />
              <h4>- {currentTestimonial.name}</h4>
              <h5>{currentTestimonial.job}</h5>
            </div>
          </div>
        </div>
        <div className="reviews_circles">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={
                index === currentIndex
                  ? "reviews_circle active"
                  : "reviews_circle"
              }
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

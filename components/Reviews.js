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
  const name = useRef(null);
  const job = useRef(null);
  const circle = useRef(null);

  const animateElements = (ref, circle, name, job) => {
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
    gsap.fromTo(
      circle.current,
      {
        clipPath: "circle(0%",
      },
      {
        delay: 0.3,
        duration: 0.5,
        ease: "power2.out",
        clipPath: "circle(100%",
        opacity: 1,
      }
    );
    gsap.fromTo(
      name.current,
      {
        y: 20,
      },
      {
        opacity: 1,
        delay: 0.5,
        ease: "power2.out",
        y: 0,
      }
    );
    gsap.fromTo(
      job.current,
      {
        y: 20,
      },
      {
        opacity: 1,
        delay: 0.7,
        ease: "power2.out",
        y: 0,
      }
    );
  }
  
  

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
    animateElements(ref, circle, name, job);
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
      animateElements(ref, circle, name, job);
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, currentIndex]);

  return (
    <section className="reviews">
      <div className="reviews_content">
        <h2>Leurs Avis</h2>
        <div className="reviews_layout">
          <span className="reviews_quote">&#34;</span>
          <div ref={ref}>
            <p>{currentTestimonial.description}</p>
            <div className="reviews_customers">
              <Image ref={circle} src={currentTestimonial.image} alt="alt" />
              <div>
                <h4 ref={name}>- {currentTestimonial.name}</h4>
              </div>
              <div>
                <h5 ref={job}>{currentTestimonial.job}</h5>
              </div>
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

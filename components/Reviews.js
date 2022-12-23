import Image from "next/image";
import jennyPP from "/assets/share/circle.png";
import assadPP from "/assets/share/circle2.png";
import ambdouPP from "/assets/share/circle3.png";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function Reviews() {
  const testimonials = [
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
      name: "Assad",
      description:
        "Je suis absolument ravi du travail qui a été réalisé. Ils ont fabriqué et installé des placards sur mesure dans ma cuisine, et le résultat est absolument parfait. ",
      job: "Entrepreneur",
      image: assadPP,
    },
    {
      id: 3,
      name: "Ambdou",
      description:
        "J'ai été très satisfait du travail de cette entreprise de menuiserie. Ils ont fabriqué et installé une porte d'entrée sur mesure, et le résultat est parfait. Je recommande !",
      job: "Manager",
      image: ambdouPP,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  const name = useRef(null);
  const job = useRef(null);
  const circle = useRef(null);
  const paragraph = useRef(null);

  const reviewsContainerRef = useRef(null);
  const titleRef = useRef(null);

  const animateElements = (paragraph, circle, name, job) => {
    gsap.fromTo(
      paragraph.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        delay: 0.2,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      circle.current,
      {
        clipPath: "circle(0%",
      },
      {
        delay: 0.3,
        duration: 1,
        ease: "power4.easeIn",
        clipPath: "circle(100%",
        opacity: 1,
      }
    );
    gsap.fromTo(
      name.current,
      {
        y: 40,
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
        y: 30,
      },
      {
        opacity: 1,
        delay: 0.7,
        ease: "power2.out",
        y: 0,
      }
    );
  };

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
    animateElements(paragraph, circle, name, job);
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
      animateElements(paragraph, circle, name, job);
    }, 4500);
    return () => clearInterval(interval);
  }, [nextTestimonial, currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateTitle();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(reviewsContainerRef.current);
  }, []);

  const animateTitle = () => {
    gsap.fromTo(
      titleRef.current,
      { y: 70 },
      {
        delay : 0.2,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <section className="reviews">
      <div ref={reviewsContainerRef} className="reviews_content">
        <div className="hidden">
          <h2 ref={titleRef}>Leurs Avis</h2>
        </div>
        <div className="reviews_layout">
          <span className="reviews_quote">&#34;</span>
          <div className="reviews_paragraph">
            <p ref={paragraph}>{currentTestimonial.description}</p>
          </div>
          <div className="reviews_customers">
            <Image ref={circle} src={currentTestimonial.image} alt="alt" />
            <div>
              <h4 ref={name}>{currentTestimonial.name}</h4>
            </div>
            <div>
              <h5 ref={job}>{currentTestimonial.job}</h5>
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

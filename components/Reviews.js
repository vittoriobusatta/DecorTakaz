import Image from "next/image";
import jennyPP from "/assets/share/circle.webp";
import assadPP from "/assets/share/circle2.webp";
import ambdouPP from "/assets/share/circle3.webp";
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
        delay: 0.2,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <section className="reviews">
      <div className="reviews_content">
        <div className="hidden">
          <h2 ref={titleRef}>Leurs Avis</h2>
        </div>
        <div ref={reviewsContainerRef} className="reviews_layout">
          <span className="reviews_quote">
            <svg
              height="16"
              viewBox="0 0 31 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0713 13.2C26.4953 13.776 26.1593 14.512 26.0633 15.408C25.9993 16.272 26.0953 17.184 26.3513 18.144C26.6393 19.104 27.0553 20.048 27.5993 20.976C28.1433 21.904 28.7513 22.704 29.4233 23.376C29.8713 23.856 29.9673 24.256 29.7113 24.576C29.4873 24.864 29.1513 24.88 28.7033 24.624C27.3593 23.92 25.9833 23.04 24.5753 21.984C23.1673 20.896 21.8873 19.648 20.7353 18.24C19.5833 16.832 18.6393 15.232 17.9033 13.44C17.1993 11.648 16.8473 9.68 16.8473 7.536C16.8473 6.544 17.0073 5.6 17.3273 4.704C17.6473 3.776 18.0953 2.976 18.6713 2.304C19.2793 1.6 19.9993 1.04 20.8313 0.624001C21.6633 0.208 22.5753 0 23.5673 0C24.5593 0 25.4713 0.192001 26.3033 0.576004C27.1673 0.928001 27.9033 1.424 28.5113 2.064C29.1513 2.672 29.6473 3.392 29.9993 4.224C30.3513 5.056 30.5273 5.936 30.5273 6.864C30.5273 7.632 30.4153 8.32 30.1913 8.92801C29.9993 9.536 29.7433 10.08 29.4233 10.56C29.1033 11.04 28.7353 11.504 28.3193 11.952C27.9033 12.368 27.4873 12.784 27.0713 13.2ZM10.7513 13.2C10.1753 13.776 9.83934 14.512 9.74334 15.408C9.67934 16.272 9.77534 17.184 10.0313 18.144C10.3193 19.104 10.7353 20.048 11.2793 20.976C11.8233 21.904 12.4313 22.704 13.1033 23.376C13.5513 23.856 13.6473 24.256 13.3913 24.576C13.1673 24.864 12.8313 24.88 12.3833 24.624C11.0393 23.92 9.66334 23.04 8.25534 21.984C6.84734 20.896 5.56734 19.648 4.41534 18.24C3.26334 16.832 2.31934 15.232 1.58334 13.44C0.879344 11.648 0.527344 9.68 0.527344 7.536C0.527344 6.544 0.687344 5.6 1.00734 4.704C1.32734 3.776 1.77534 2.976 2.35134 2.304C2.95934 1.6 3.67934 1.04 4.51134 0.624001C5.34334 0.208 6.25534 0 7.24734 0C8.23934 0 9.15134 0.192001 9.98334 0.576004C10.8473 0.928001 11.5833 1.424 12.1913 2.064C12.8313 2.672 13.3273 3.392 13.6793 4.224C14.0313 5.056 14.2073 5.936 14.2073 6.864C14.2073 7.632 14.0953 8.32 13.8713 8.92801C13.6793 9.536 13.4233 10.08 13.1033 10.56C12.7833 11.04 12.4153 11.504 11.9993 11.952C11.5833 12.368 11.1673 12.784 10.7513 13.2Z"
                fill="#785436"
              />
            </svg>
          </span>
          <div className="reviews_paragraph">
            <p ref={paragraph}>{currentTestimonial.description}</p>
          </div>
          <div className="reviews_customers">
            <div className="hidden circle">
              <Image ref={circle} src={currentTestimonial.image} alt="alt" />
            </div>
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

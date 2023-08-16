import Link from "next/link";
import React, { useEffect, useRef } from "react";
import MaskText from "../../utils/MaskText";

function Release({ categories, products }) {
  const releaseItems = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("release__item--visible");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("release__item--visible");
        }
      });
    }, options);

    const currentreleaseItems = releaseItems.current;

    if (currentreleaseItems) {
      currentreleaseItems.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (currentreleaseItems) {
        currentreleaseItems.forEach((item) => {
          if (document.body.contains(item)) {
            observer.unobserve(item);
          }
        });
      }
    };
  }, []);

  return (
    <section className="release">
      <div className="section__head">
        <div className="hidden">
          <MaskText
            phrases={["Nos Réalisations"]}
            headingLevel={"1"}
            className="section__head__title"
          />
        </div>
        <Link href="/categories" className="section__head__link">
          <span>Voir tout</span>
          <div className="release__arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="8"
              viewBox="0 0 42.985 12.881"
            >
              {" "}
              <g transform="translate(0 12.882) rotate(-90)">
                {" "}
                <path
                  d="M6.441,2.736,0,0,6.441,15.268,12.881,0Z"
                  transform="translate(0 27.717)"
                  fill="#fff0e0"
                ></path>{" "}
                <line
                  y2="37.086"
                  transform="translate(6.441)"
                  fill="none"
                  stroke="#fff0e0"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></line>{" "}
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="8"
              viewBox="0 0 42.985 12.881"
            >
              {" "}
              <g transform="translate(0 12.882) rotate(-90)">
                {" "}
                <path
                  d="M6.441,2.736,0,0,6.441,15.268,12.881,0Z"
                  transform="translate(0 27.717)"
                  fill="#fff0e0"
                ></path>{" "}
                <line
                  y2="37.086"
                  transform="translate(6.441)"
                  fill="none"
                  stroke="#fff0e0"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></line>{" "}
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <ul className="release__category">
        {categories.map((item, index) => {
          const categoryProducts = products.filter(
            (product) => product.categoryId === item._id
          );

          return (
            <li
              key={index}
              className="release__item"
              ref={(el) => (releaseItems.current[index] = el)}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >
              <div
                className={`release__item__background release__item__background__${item.handle}`}
              />
              <Link
                href={`/categories${item.link}`}
                className="release__item__content"
              >
                <h4>({categoryProducts.length})</h4>
                <div className="hidden">
                  <h1>{item.name}</h1>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Release;

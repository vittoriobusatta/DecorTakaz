import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  ArchitectureIcon,
  InterieurIcon,
  MobilierIcon,
  ProductIcon,
} from "../utils/icons";

function Release({ data }) {
  const releaseContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  const items = useRef([]);
  const iconTitle = useRef([]);

  return (
    <section ref={releaseContainerRef} className="release">
      <div className="release__head">
        <div className="hidden">
          <h1 ref={titleRef} className="title">
            Nos Réalisations
          </h1>
        </div>
        <div className="hidden">
          <a ref={titleRef} className="release__head__cta">
            Voir tout
          </a>
        </div>
      </div>
      <ul className="release__category">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              ref={(el) => (items.current[index] = el)}
              className="release__category__item"
            >
              <Link
                href={{
                  pathname: item.link,
                }}
              >
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Release;

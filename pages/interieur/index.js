import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import fs from "fs";
import path from "path";
import gsap from "gsap";

export async function getStaticProps() {
  const data = fs.readFileSync(path.join(process.cwd(), "/public/data.json"));

  const appData = JSON.parse(data);

  const categoryArray = appData.filter((item) => item.catalogue == "interieur");

  return {
    props: {
      categoryArray,
    },
  };
}

const Interieur = ({ categoryArray }) => {
  // const TitleInterieur = styled.h1`
  //   &::before {
  //     content: "(${categoryArray.length})";
  //   }
  // `;
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = categoryArray.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.category === filter;
  });

  const animatedStatus = useRef([]);

  const interieurContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageReferences = useRef([]);
  const titleimageRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            titleRef.current,
            { y: 110, skewY: 10 },
            {
              delay: 0.3,
              y: 0,
              duration: 0.8,
              opacity: 1,
              skewY: 0,
              ease: "power4.out",
            }
          );
          gsap.fromTo(
            subtitleRef.current,
            { y: 70, skewY: 10 },
            {
              delay: 0.1,
              y: 0,
              opacity: 1,
              skewY: 0,
              ease: "power4.out",
            }
          );
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(interieurContainerRef.current);
  }, []);

  useEffect(() => {
    observeElements();
  }, [filteredData]);

  function observeElements() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageReferences.current.indexOf(entry.target);
          if (entry.isIntersecting && !animatedStatus.current[index]) {
            animatedStatus.current[index] = true;
            gsap.fromTo(
              entry.target,
              { y: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
              {
                delay: 0.3,
                y: 0,
                opacity: 1,
                ease: "power4.out",
                clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    imageReferences.current.forEach((ref) => {
      observer.observe(ref);
    });
    return () => {
      observer.disconnect();
    };
  }

  return (
    <>
      <Head>
        <title>Intérieur | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <section id="category"
        ref={interieurContainerRef}
        className="category_head cth_interieur"
      >
        <div className="category_title">
          <div className="hidden">
            <h5 ref={subtitleRef} className="subtitle opacity">
              ({categoryArray.length})
            </h5>
          </div>
          <div className="hidden">
            <h1 className="opacity" ref={titleRef}>
              Intérieur
            </h1>
          </div>
        </div>

        <div className="catagory_content">
          <ul className="backcatalogue">
            <Link href="/mobilier/">
              <div className="hidden">
                <li>
                  Mobilier
                </li>
              </div>
            </Link>
            <Link href="/interieur/">
              <div className="hidden">
                <li
                  className="active"
                >
                  Intérieur
                </li>
              </div>
            </Link>
            <Link href="/produits/">
              <div className="hidden">
                <li>
                  Produits
                </li>
              </div>
            </Link>
            {/* <li>Architecture</li> */}
          </ul>

          <div className="filter">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={handleFilterChange}
              value="all"
            >
              Tous
            </button>
            <button
              className={filter === "salon" ? "active" : ""}
              onClick={handleFilterChange}
              value="salon"
            >
              Salon
            </button>
            <button
              className={filter === "cuisine" ? "active" : ""}
              onClick={handleFilterChange}
              value="cuisine"
            >
              Cuisine
            </button>
            <button
              className={filter === "bathroom" ? "active" : ""}
              onClick={handleFilterChange}
              value="bathroom"
            >
              Salle de bain
            </button>
          </div>
        </div>

        <ul className="gallerie">
          {filteredData.map((i, index) => (
            <li key={i.id}>
              <div>
                <div className="image_container hidden">
                  <Image
                    className="opacity"
                    ref={(el) => (imageReferences.current[index] = el)}
                    src={i.src}
                    alt={"Image " + i.id}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8eOlgPQAIBQL16eAgtQAAAABJRU5ErkJggg==`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="hidden">
                  <h3 ref={(el) => (titleimageRef.current[index] = el)}>
                    {i.name}
                  </h3>
                </div>
                <p>
                  {i.desc} <br />
                  {i.dim}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Interieur;

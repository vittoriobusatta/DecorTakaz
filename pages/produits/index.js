import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import fs from "fs";
import path from "path";
import gsap from "gsap";
import { ArrowIcon } from "../../utils/icons";
import ScrollTop from "../../utils/scrollTop";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const data = fs.readFileSync(path.join(process.cwd(), "/public/data.json"));

  const appData = JSON.parse(data);

  const categoryArray = appData.filter((item) => item.catalogue == "produits");

  return {
    props: {
      categoryArray,
    },
  };
}

const Produits = ({ categoryArray }) => {
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
  const produitsContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const backcatalogueLinks = useRef([]);
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
          backcatalogueLinks.current.forEach((ref, index) => {
            gsap.fromTo(
              ref,
              { y: 70 },
              {
                delay: 0.3 * index,
                y: 0,
                duration: 0.8,
                opacity: 1,
                ease: "power4.out",
              }
            );
          });
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(produitsContainerRef.current);
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>Produits | Menuiserie Artisanale</title>
      </Head>

      <Header />

      <motion.section
        ref={produitsContainerRef}
        id="category"
        className="category_head"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{
          opacity: 1,
        }}
      >
        <ScrollTop />

        <div className="category_title">
          <div className="hidden">
            <h5 ref={subtitleRef} className="subtitle opacity">
              ({categoryArray.length})
            </h5>
          </div>
          <div className="hidden">
            <h1 className="opacity" ref={titleRef}>
              Produits
            </h1>
          </div>
        </div>

        <div className="catagory_content">
          <ul className="backcatalogue">
            <li>
              <div className="backcatalogue_title">
                <Link href="/mobilier/">
                  <h2>Mobilier</h2>
                </Link>
                <ArrowIcon />
              </div>
            </li>
            <li>
              <div className="backcatalogue_title">
                <Link href="/interieur/">
                  <h2>Intérieur</h2>
                </Link>
                <ArrowIcon />
              </div>
            </li>
            <li className={isActive ? "question_active" : ""}>
              <div
                className="backcatalogue_title active"
                onClick={() => handleClick()}
              >
                <Link href="/produits/">
                  <button
                    className={filter === "all" ? "active" : ""}
                    onClick={handleFilterChange}
                    value="all"
                  >
                    Produits
                  </button>
                </Link>
                <svg
                  height="20"
                  viewBox="0 0 23 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={isActive ? "active" : ""}
                >
                  <path d="M23 14L0 28L5.75 14L0 0L23 14Z" fill="#785436" />
                </svg>
              </div>
              <div className="filter">
                <button
                  className={filter === "lampe" ? "active" : ""}
                  onClick={handleFilterChange}
                  value="lampe"
                >
                  Lampes
                </button>
                <button
                  className={filter === "mirroir" ? "active" : ""}
                  onClick={handleFilterChange}
                  value="mirroir"
                >
                  Mirroirs
                </button>
                <button
                  className={filter === "other" ? "active" : ""}
                  onClick={handleFilterChange}
                  value="other"
                >
                  Divers
                </button>
              </div>
            </li>

            {/* <li>
              <div className="backcatalogue_title">
                <Link href="/architecture/">
                  <h2>Architecture</h2>
                </Link>
                <ArrowIcon />
              </div>
            </li> */}
          </ul>
        </div>

        <ul className="gallerie">
          {filteredData.map((i, index) => (
            <li key={i.id}>
              <div>
                <div className="image_container hidden">
                  <Image
                    // className="opacity"
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
                <h3 ref={(el) => (titleimageRef.current[index] = el)}>
                  {i.name}
                </h3>
                <p>
                  {i.desc} <br />
                  {i.dim}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  );
};

export default Produits;

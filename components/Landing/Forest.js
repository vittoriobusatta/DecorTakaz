import Image from "next/image";
import React, { useEffect, useRef } from "react";
import forest from "/assets/share/forest.svg";

function Forest() {
  const forestContainerRef = useRef(null);
  const imageForestRef = useRef(null);

  useEffect(() => {
    const forestContainer = forestContainerRef.current;
    const imageForest = imageForestRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageForest.classList.remove("opacity");
          } else {
            imageForest.classList.add("opacity");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(forestContainer);

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <section ref={forestContainerRef} className="forest_container hidden">
      <Image className="opacity" ref={imageForestRef} src={forest} alt="alt" />
    </section>
  );
}

export default Forest;

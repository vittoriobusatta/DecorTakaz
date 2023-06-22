import Image from "next/image";
import React, { useRef } from "react";
import forest from "/assets/share/forest.svg";

function Forest() {
  const forestContainerRef = useRef(null);
  const imageForestRef = useRef(null);

  return (
    <section ref={forestContainerRef} className="forest_container hidden">
      <Image className="opacity" ref={imageForestRef} src={forest} alt="alt" />
    </section>
  );
}

export default Forest;

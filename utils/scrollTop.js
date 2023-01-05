import React, { useEffect, useRef, useState } from "react";
import { GoTop } from "./icons";

function ScrollTop() {
  const [scrollBottom, setScrollBottom] = useState(0);
  const scrollButton = useRef(null);

  useEffect(() => {
    let intervalId = null;
    function onScroll() {
      let currentPosition = window.pageYOffset;

      console.log(currentPosition);

      if (currentPosition > scrollBottom || currentPosition < 300) {
        scrollButton.current.style.bottom = "-60px";
        scrollButton.current.style.opacity = 1;
      } else {
        scrollButton.current.style.bottom = "5px";
      }
      setScrollBottom(currentPosition <= 0 ? 0 : currentPosition);
    }

    function onNoScroll() {
      scrollButton.current.style.opacity = 0;
    }

    intervalId = setInterval(onNoScroll, 1800);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(intervalId);
    };
  }, [scrollBottom]);

  return (
    <div className="scroll_btn" ref={scrollButton}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <GoTop />
      </a>
    </div>
  );
}

export default ScrollTop;

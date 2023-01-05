import React, { useEffect, useRef, useState } from "react";
import { GoTop } from "./icons";

function ScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollButton = useRef(null);

  useEffect(() => {
    let intervalId = null;
    function onScroll() {
      let currentPosition = window.pageYOffset;
      let maxScroll = document.body.scrollHeight - window.innerHeight;

      if (currentPosition > scrollTop) {
        scrollButton.current.style.bottom = "-60px";
        scrollButton.current.style.opacity = 1;
      } else {
        scrollButton.current.style.bottom = "10px";
      }

      // if (currentPosition >= maxScroll) {
      //   scrollButton.current.style.bottom = "10px";
      // } else {
      //   scrollButton.current.style.bottom = "-60px";
      // }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    function onNoScroll() {
      scrollButton.current.style.opacity = 0;
    }

    intervalId = setInterval(onNoScroll, 2000);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(intervalId);
    };
  }, [scrollTop]);

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

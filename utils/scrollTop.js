import React, { useEffect, useRef, useState } from "react";
import { GoTop } from "./icons";

function ScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollButton = useRef(null);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        scrollButton.current.style.bottom = "-60px";
      } else {
        scrollButton.current.style.bottom = "20px";
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

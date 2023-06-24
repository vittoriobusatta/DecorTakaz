import React, { createRef, useEffect } from "react";

function MaskText({ phrases, headingLevel, className }) {
  const maskText = createRef();
  const HeadingComponent = `h${headingLevel}`;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.50,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${className}--visible`);
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove(`${className}--visible`);
        }
      });
    }, options);

    const currentMaskText = maskText.current;

    if (currentMaskText) {
      observer.observe(currentMaskText);
    }

    return () => {
      if (currentMaskText) {
        observer.unobserve(currentMaskText);
      }
    };
  }, [maskText, className]);

  return (
    <HeadingComponent className={className ? className : null} ref={maskText}>
      {phrases.map((phrase, index) => {
        return <div key={index}>{phrase}</div>;
      })}
    </HeadingComponent>
  );
}

export default MaskText;

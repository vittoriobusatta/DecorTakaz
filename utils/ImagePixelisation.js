import NextImage from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ImagePixelisation({ src, src10 }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageContainer = useRef(null);
  const canvas = useRef(null);

  const drawImage = useCallback(
    (ctx, image) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.drawImage(image, 0, 0, dimensions.width, dimensions.height);
    },
    [dimensions]
  );

  const animate = useCallback(
    (ctx, image) => {
      drawImage(ctx, image);
    },
    [drawImage]
  );

  useEffect(() => {
    const options = {
      threshold: .75,
      rootMargin: "0px",
      triggerOnce: true,
    };

    const imageContainerRef = imageContainer.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && dimensions.width > 0) {
          const image = new Image();
          image.onload = () => {
            const ctx = canvas.current.getContext("2d", {
              willReadFrequently: true,
            });
            setTimeout(() => {
              requestAnimationFrame(() => animate(ctx, image));
            }, 150);
          };
          image.src = src;
        }
      });
    }, options);

    if (imageContainerRef) {
      observer.observe(imageContainerRef);
    }

    return () => {
      if (imageContainerRef) {
        observer.unobserve(imageContainerRef);
      }
    };
  }, [dimensions, src, animate]);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = imageContainer.current.getBoundingClientRect();
      setDimensions({ width, height });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ImageContainer" ref={imageContainer}>
      <NextImage
        src={src10}
        alt="pixelated image"
        width={0}
        height={0}
        priority={true}
        onLoadingComplete={(e) => {
          const { width, height } =
            imageContainer.current.getBoundingClientRect();
          setDimensions({ width, height });
        }}
      />
      <canvas
        ref={canvas}
        width={dimensions.width}
        height={dimensions.height}
      ></canvas>
    </div>
  );
}

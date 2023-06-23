import React from "react";
import ImagePixelisation from "../utils/ImagePixelisation";

function Gallery({ products }) {
  console.log(products);
  return (
    <ul className="gallery">
      {products.map((item, index) => {
        return (
          <li key={index}>
            <ImagePixelisation src={item.source} src10={item.source10} />
            {/* <div className="hidden">
              <h3>{item.name}</h3>
            </div> */}
          </li>
        );
      })}
      {products.length === 0 && (
        <h1>{`Il n'y a pas encore de produits dans cette catégorie`}</h1>
      )}
    </ul>
  );
}

export default Gallery;

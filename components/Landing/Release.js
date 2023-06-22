import Link from "next/link";
import React from "react";

function Release({ categories, products }) {
  return (
    <section className="release">
      <div className="section__head">
        <div className="hidden">
          <h1 className="title">Nos Réalisations</h1>
        </div>
        <div className="hidden">
          <a>Voir tout</a>
        </div>
      </div>
      <ul className="release__category">
        {categories.map((item, index) => {
          const categoryProducts = products.filter(
            (product) => product.categoryId === item._id
          );

          return (
            <li key={index} className="release__item">
              <div
                className={`release__item__background release__item__background__${item.handle}`}
              />
              <Link href={`/categories${item.link}`}>
                <h4>({categoryProducts.length})</h4>
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Release;
